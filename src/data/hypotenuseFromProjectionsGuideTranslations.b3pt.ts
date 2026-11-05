// hypotenuseFromProjectionsGuideTranslations.bpt.ts: Right Triangle Altitude From Projections
// Guide (Page 30 of 45) translation.
export const HFP_B3_PT = {
  "pt": {
      "tocHeading": "Conteúdo do Guia",
      "tocItems": {
        "sec-altitude": "Como as Projeções da Hipotenusa se Relacionam com a Altura",
        "sec-applications": "Aplicações Práticas dos Cálculos de Projeção da Hipotenusa",
        "sec-calculate": "Calcular a Hipotenusa a Partir de Duas Projeções",
        "sec-compare": "Hipotenusa por Projeções vs. Hipotenusa por Catetos",
        "sec-diagram": "Diagrama de Projeção da Hipotenusa do Triângulo Retângulo Explicado",
        "sec-examples": "Exemplos Resolvidos de Hipotenusa por Projeções",
        "sec-faq": "Perguntas Frequentes",
        "sec-formula": "Fórmula da Hipotenusa por Projeções do Triângulo Retângulo",
        "sec-how": "Como Usar a Calculadora de Hipotenusa por Projeções",
        "sec-intro": "Calculadora de Hipotenusa por Projeções do Triângulo Retângulo",
        "sec-legs": "Relação Entre as Projeções da Hipotenusa e os Catetos do Triângulo",
        "sec-manual": "Como Calcular a Hipotenusa por Projeções Manualmente",
        "sec-mistakes": "Erros Comuns ao Calcular a Hipotenusa por Projeções",
        "sec-practice": "Problemas de Prática com Respostas",
        "sec-pythagoras": "Projeções da Hipotenusa e o Teorema de Pitágoras",
        "sec-related": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
        "sec-special": "Casos Especiais e Propriedades Importantes",
        "sec-understanding": "Entendendo a Hipotenusa e Seus Dois Segmentos",
        "sec-verify": "Como Verificar Seu Cálculo da Hipotenusa",
        "sec-what": "O Que São Projeções da Hipotenusa em um Triângulo Retângulo?",
        "sec-why": "Por Que a Hipotenusa É Igual à Soma de Suas Projeções?",
      },
      "sections": {
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Os dois campos de entrada aceitam os comprimentos das projeções p e q, ambos medidos ao longo da hipotenusa. Os seletores de unidade permitem inserir centímetros, metros, milímetros, pés ou polegadas, desde que p e q usem unidades compatíveis antes de serem somados.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Pressione Calcular Hipotenusa c para ver o resultado e use Limpar para apagar os campos e começar um novo problema. Somente comprimentos positivos são aceitos, porque uma projeção é um segmento real da hipotenusa, e um valor zero ou negativo não pode descrevê-la.",
            },
            {
              "kind": "p",
              "text": "O resultado é o comprimento completo da hipotenusa c na unidade escolhida. A aritmética é uma simples adição, mas as seções abaixo explicam o que os segmentos significam e como conferir a resposta à mão.",
            },
          ],
          "h2": "Calcular a Hipotenusa a Partir de Duas Projeções",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "A fórmula é [[c = p + q]], onde c é a hipotenusa completa, p é o primeiro segmento de projeção e q é o segundo. Ela usa adição em vez de multiplicação ou raízes quadradas porque as duas projeções são partes adjacentes de um lado reto, e a adição de segmentos reconstrói esse lado a partir de suas partes. Pense em medir dois pedaços de uma tábua e somar as medidas para obter o comprimento total da tábua.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Uma pergunta frequente é por que a fórmula não tira a média dos dois segmentos. A média daria metade da hipotenusa, o que responde a outra pergunta. A adição reconstrói o lado inteiro; a média e a média geométrica pertencem a outras fórmulas abordadas mais adiante neste guia.",
            },
            {
              "kind": "p",
              "text": "Considere [[p = 7]] cm e [[q = 11]] cm. A substituição dá [[c = 7 + 11]], logo [[c = 18]] cm. A fórmula em si é simples; o importante é entender quais dois segmentos contam como projeções.",
            },
            {
              "kind": "p",
              "text": "Ambos os segmentos devem usar unidades compatíveis antes de serem somados. Se p estiver em milímetros e q em centímetros, converta um deles primeiro, exatamente como a calculadora desta página pede.",
            },
          ],
          "h2": "Fórmula da Hipotenusa por Projeções do Triângulo Retângulo",
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Nove passos curtos levam você de um diagrama rotulado a uma hipotenusa verificada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifique o triângulo retângulo do seu problema e confirme que ele tem um ângulo reto.",
                "Localize a hipotenusa: o lado oposto ao ângulo reto.",
                "Encontre o ponto onde a altura traçada do ângulo reto encontra a hipotenusa.",
                "Identifique as duas projeções p e q como os segmentos em cada lado desse ponto, usando o guia da <a href=\"/right-triangle-projection-p-calculator/\">calculadora de projeção p</a> para o primeiro segmento. A <a href=\"/right-triangle-projection-q-calculator/\">calculadora de projeção q</a> cobre o segundo segmento da mesma forma.",
                "Converta ambas as medidas para unidades compatíveis, se necessário.",
                "Digite p no campo Projeção p e q no campo Projeção q.",
                "Clique no botão Calcular Hipotenusa c.",
                "Leia o resultado da hipotenusa na unidade escolhida.",
                "Use Limpar antes de começar um novo problema.",
              ],
            },
            {
              "kind": "p",
              "text": "A identificação correta é o mais importante. Os campos esperam os dois segmentos da própria hipotenusa, não os catetos nem a altura. Inserir o par errado ainda produz uma soma, mas ela não será a hipotenusa.",
            },
          ],
          "h2": "Como Usar a Calculadora de Hipotenusa por Projeções",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Esta calculadora encontra a hipotenusa de um triângulo retângulo somando seus dois segmentos de projeção.",
            },
            {
              "kind": "p",
              "text": "As projeções p e q são as duas partes da hipotenusa criadas quando a altura traçada do ângulo reto a encontra. Digite ambos os comprimentos, e a calculadora os soma com a fórmula [[c = p + q]] para retornar a hipotenusa completa. Por exemplo, se [[p = 4]] cm e [[q = 9]] cm, então [[c = 4 + 9 = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "A hipotenusa é o lado mais longo do triângulo retângulo e fica oposta ao ângulo reto. A calculadora aparece primeiro nesta página, seguida pela fórmula, pela geometria por trás dela, por exemplos resolvidos e por formas de verificar sua resposta.",
            },
            {
              "kind": "p",
              "text": "O guia atende a estudantes do ensino fundamental conhecendo projeções pela primeira vez, a turmas de geometria do ensino médio e a qualquer pessoa conferindo lição de casa. Cada fórmula é trabalhada com números reais, para que você possa acompanhar cada passo sem parar para decodificar símbolos.",
            },
          ],
          "h2": "Calculadora de Hipotenusa por Projeções do Triângulo Retângulo",
        },
        "sec-manual": {
          "blocks": [
            {
              "kind": "p",
              "text": "O cálculo manual é uma única substituição em [[c = p + q]]. Considere [[p = 3.6]] cm e [[q = 6.4]] cm.",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Substitua os valores: [[c = 3.6 + 6.4]]. Some-os: [[c = 10]] cm.",
            },
            {
              "kind": "p",
              "text": "Alinhe as casas decimais ao somar à mão: 3,6 mais 6,4 dá 10,0, e o zero final pode ser descartado para um limpo [[c = 10]] cm. Mantenha a unidade junto à resposta; um número sozinho não é um comprimento completo.",
            },
            {
              "kind": "p",
              "text": "Nenhum cálculo pitagórico é necessário, porque ambos os comprimentos de projeção já são conhecidos. Para conferir, confirme se a soma faz sentido: 3,6 mais 6,4 é claramente 10, e a hipotenusa deve ser maior que cada projeção isolada.",
            },
          ],
          "h2": "Como Calcular a Hipotenusa por Projeções Manualmente",
        },
        "sec-understanding": {
          "blocks": [
            {
              "kind": "p",
              "text": "A hipotenusa é o lado oposto ao ângulo reto, e em qualquer triângulo retângulo não degenerado é o lado mais longo. Quando a altura traçada do vértice do ângulo reto desce perpendicular a ela, a hipotenusa é dividida em dois segmentos mais curtos que ficam ponta a ponta na mesma linha reta.",
            },
            {
              "kind": "p",
              "text": "Como ambos os segmentos estão nesse único lado, eles se comportam como dois pedaços adjacentes de uma régua: colocá-los juntos reconstrói o lado inteiro exatamente, sem sobreposição e sem lacuna. É por isso que as projeções sempre somam a hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Esses rótulos correspondem ao diagrama principal abaixo. Os vértices A e B são os cantos de ângulos agudos, C é o vértice do ângulo reto e D é o pé da altura CD sobre a hipotenusa AB, com [[AD = p]] e [[DB = q]].",
            },
          ],
          "h2": "Entendendo a Hipotenusa e Seus Dois Segmentos",
          "table": {
            "headers": [
              "Símbolo",
              "Significado",
            ],
            "rows": [
              [
                "a",
                "Primeiro cateto perpendicular",
              ],
              [
                "b",
                "Segundo cateto perpendicular",
              ],
              [
                "c",
                "Hipotenusa completa",
              ],
              [
                "p",
                "Primeira projeção da hipotenusa",
              ],
              [
                "q",
                "Segunda projeção da hipotenusa",
              ],
              [
                "h",
                "Altura até a hipotenusa",
              ],
            ],
          },
        },
        "sec-what": {
          "blocks": [
            {
              "kind": "p",
              "text": "Comece com um triângulo retângulo e desenhe a altura do vértice do ângulo reto perpendicular à hipotenusa. A altura toca a hipotenusa em um ponto, chamado de pé, e esse ponto divide a hipotenusa em dois segmentos adjacentes. Esses dois segmentos são as projeções da hipotenusa: [[p = AD]] e [[q = DB]] quando o triângulo é ABC com ângulo reto em C e altura CD. A <a href=\"/right-triangle-projection-calculator/\">calculadora de projeção</a> trata cada segmento separadamente.",
            },
            {
              "kind": "p",
              "text": "Uma projeção não é um cateto. Os catetos a e b são os dois lados que formam o ângulo reto, enquanto as projeções p e q ficam deitadas ao longo da própria hipotenusa. Confundi-los é o erro de rotulagem mais comum, então pergunte sempre: este comprimento está sobre a hipotenusa ou é um dos lados ao redor do ângulo reto?",
            },
            {
              "kind": "p",
              "text": "Aqui vai um exemplo fácil para iniciantes. Se a altura divide uma hipotenusa em um segmento de 4 cm e outro de 9 cm, então [[p = 4]] cm e [[q = 9]] cm, e a hipotenusa completa é [[c = 4 + 9 = 13]] cm. A fórmula [[c = p + q]] simplesmente reconstrói o lado inteiro a partir de suas duas partes.",
            },
            {
              "kind": "p",
              "text": "Um hábito rápido de rotulagem evita a maioria dos erros: comece no vértice do ângulo reto C, desenhe a altura até a hipotenusa e marque o pé D. O segmento que toca A é p e o segmento que toca B é q. Uma vez que esses dois rótulos estão definidos, o restante do guia se aplica diretamente.",
            },
          ],
          "h2": "O Que São Projeções da Hipotenusa em um Triângulo Retângulo?",
        },
        "sec-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "As mesmas projeções fornecem a altura pelo teorema da média geométrica: [[h^2 = pq]], logo [[h = \\sqrt{pq}]]. Com [[p = 9]] cm e [[q = 16]] cm, [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Compare as duas fórmulas: [[c = p + q]] soma as projeções, enquanto [[h = \\sqrt{pq}]] toma sua média geométrica. Elas respondem a perguntas diferentes. A hipotenusa é o comprimento total do lado; a altura é a distância perpendicular do ângulo reto até esse lado.",
            },
            {
              "kind": "p",
              "text": "Para problemas de altura, use a <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculadora de altura por projeções</a>, construída em torno de [[h = \\sqrt{pq}]]. Mantenha os dois resultados distintos: neste triângulo a hipotenusa mede 25 cm enquanto a altura mede apenas 12 cm.",
            },
            {
              "kind": "p",
              "text": "Uma verificação de sanidade embutida se aplica aqui: a altura é sempre menor que a hipotenusa. No exemplo resolvido, 12 cm está bem abaixo de 25 cm. Se sua altura alguma vez exceder sua hipotenusa, verifique qual fórmula você usou.",
            },
          ],
          "h2": "Como as Projeções da Hipotenusa se Relacionam com a Altura",
          "image": {
            "alt": "Triângulo retângulo com projeções 9 e 16 na hipotenusa, hipotenusa 25, e altura 12 desenhada perpendicular à hipotenusa",
            "caption": "Mesmas projeções, duas fórmulas: c = 9 + 16 = 25, h = sqrt(9 x 16) = 12.",
            "src": "hypotenuse-altitude-p9q16.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "O diagrama principal mostra o triângulo ABC com o ângulo reto em C. O lado AC é o cateto a, o lado BC é o cateto b, e o lado AB é a hipotenusa c. A altura CD desce de C perpendicular a AB e a toca em D.",
            },
            {
              "kind": "p",
              "text": "Uma boa ordem de leitura começa no vértice C: trace o cateto a até A, o cateto b até B, e então percorra a hipotenusa c de A até B. Pare em D, o pé da altura, para ver a divisão em p e q. Ler o diagrama dessa forma conecta os rótulos à fórmula.",
            },
            {
              "kind": "p",
              "text": "O ponto D divide AB em duas partes: o segmento AD é a projeção p e o segmento DB é a projeção q. Os rótulos ficam diretamente no diagrama para que você possa ver onde p começa, onde q termina, e como os dois juntos cobrem o lado inteiro de A a B.",
            },
            {
              "kind": "p",
              "text": "Os marcadores de ângulo reto em C e D confirmam a geometria. O marcador em C faz de AB a hipotenusa, e o marcador em D confirma que CD é a altura. O triângulo original agora está dividido em dois triângulos retângulos menores, ACD e CBD, que retornam mais adiante neste guia.",
            },
          ],
          "h2": "Diagrama de Projeção da Hipotenusa do Triângulo Retângulo Explicado",
          "image": {
            "alt": "Triângulo retângulo ABC com ângulo reto em C; altura CD desenhada perpendicular à hipotenusa AB, dividindo-a em projeção p (segmento AD) e projeção q (segmento DB), com catetos a e b rotulados",
            "caption": "A altura CD divide a hipotenusa AB em projeções p e q.",
            "src": "hypotenuse-projections-main.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada exemplo apresenta os valores dados, a substituição e a resposta final. O comentário permanece curto para que a aritmética fique visível.",
            },
            {
              "kind": "p",
              "text": "Todos os exemplos mantêm as unidades consistentes dos valores dados até a resposta. Quando as unidades diferem, o exemplo converte primeiro e diz isso explicitamente, para que você possa copiar o hábito em seu próprio trabalho.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 1: Números Inteiros",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 4]] cm e [[q = 9]] cm, a fórmula [[c = p + q]] dá [[c = 4 + 9]], logo [[c = 13]] cm. Duas projeções inteiras produzem aqui uma hipotenusa inteira, embora isso não seja garantido em geral.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 2: Projeções Iguais",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 5]] cm e [[q = 5]] cm, [[c = 5 + 5 = 10]] cm. Projeções iguais significam que a altura atinge o ponto médio da hipotenusa, o que acontece exatamente quando os dois catetos são iguais: um triângulo retângulo isósceles. Como os catetos são iguais, a altura também é a mediana, e é por isso que ela bissecta a hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 3: Projeções Decimais",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 3.6]] m e [[q = 6.4]] m, [[c = 3.6 + 6.4 = 10]] m. Alinhe as casas decimais e some normalmente; a unidade permanece metros do início ao fim.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 4: Projeções Desiguais",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 2]] cm e [[q = 18]] cm, [[c = 2 + 18 = 20]] cm. As projeções não precisam ter tamanhos próximos; a soma ainda reconstrói a hipotenusa completa.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 5: Medidas Maiores",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 125]] mm e [[q = 275]] mm, [[c = 125 + 275 = 400]] mm. Valores grandes nada mudam no método.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 6: Unidades Mistas",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 40]] mm e [[q = 9]] cm, converta primeiro: 40 mm equivalem a 4 cm. Então [[c = 4 + 9 = 13]] cm. Somar antes de converter daria um 49 sem sentido.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 7: Medidas Fracionárias",
            },
            {
              "kind": "p",
              "text": "Dados [[p = \\frac{1}{2}]] ft e [[q = \\frac{3}{4}]] ft, escreva ambos com denominador 4: [[c = \\frac{2}{4} + \\frac{3}{4} = \\frac{5}{4}]] ft, que é 1,25 ft.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 8: Encontrando uma Projeção Desconhecida",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 25]] cm e [[p = 9]] cm, resolva [[q = c - p]]: [[q = 25 - 9 = 16]] cm. Este passo inverso mostra que a relação funciona nos dois sentidos, embora a calculadora desta página some p e q para encontrar c em vez de resolver para uma projeção desconhecida.",
            },
          ],
          "h2": "Exemplos Resolvidos de Hipotenusa por Projeções",
        },
        "sec-legs": {
          "blocks": [
            {
              "kind": "p",
              "text": "As projeções também determinam os catetos pelo teorema das projeções: [[a^2 = cp]] e [[b^2 = cq]]. Cada cateto é a média geométrica da hipotenusa e de sua projeção adjacente, um fato que decorre da semelhança dos triângulos menores com o original.",
            },
            {
              "kind": "p",
              "text": "Extraindo as raízes quadradas obtemos [[a = \\sqrt{cp}]] e [[b = \\sqrt{cq}]]. Com [[p = 9]] cm e [[q = 16]] cm, primeiro encontramos [[c = 9 + 16 = 25]] cm. Então [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm e [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm.",
            },
            {
              "kind": "p",
              "text": "A hipotenusa é, portanto, a chave que destrava os lados restantes: uma vez conhecido c, cada cateto decorre de sua própria projeção. A <a href=\"/right-triangle-side-calculator/\">calculadora de lados</a> resolve problemas semelhantes de lados desconhecidos diretamente.",
            },
            {
              "kind": "p",
              "text": "O pareamento não é arbitrário: o cateto a fica junto à projeção p no triângulo pequeno ACD, que é semelhante ao triângulo inteiro, de modo que a se relaciona com c e p enquanto b se relaciona com c e q. Lembrar qual cateto combina com qual projeção mantém as raízes quadradas nos segmentos corretos.",
            },
          ],
          "h2": "Relação Entre as Projeções da Hipotenusa e os Catetos do Triângulo",
          "image": {
            "alt": "Triângulo retângulo com projeções 9 e 16 e hipotenusa 25, mostrando o cateto a igual a 15 por a ao quadrado igual a 25 vezes 9, e o cateto b igual a 20 por b ao quadrado igual a 25 vezes 16",
            "caption": "Cateto a = sqrt(25 x 9) = 15; cateto b = sqrt(25 x 16) = 20.",
            "src": "hypotenuse-projection-theorem-legs.svg",
          },
        },
        "sec-why": {
          "blocks": [
            {
              "kind": "p",
              "text": "A razão é o postulado da adição de segmentos: se o ponto D está no segmento AB entre A e B, então o comprimento AB é igual a AD mais DB. Aqui D é o pé da altura e A e B são as extremidades da hipotenusa, logo [[AB = AD + DB]].",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Substituir os símbolos padrão dá a fórmula diretamente. Em um triângulo retângulo não degenerado, o pé da altura sempre cai entre as extremidades, então o postulado sempre se aplica. Nenhuma trigonometria é necessária para este passo.",
            },
            {
              "kind": "p",
              "text": "A semelhança de triângulos é a ferramenta por trás das relações de projeção mais profundas, como [[a^2 = cp]], mas a simples adição de segmentos basta para estabelecer [[c = p + q]]. O diagrama abaixo mostra a mesma ideia em uma única linha reta.",
            },
            {
              "kind": "p",
              "text": "Um detalhe merece ênfase: D sempre cai estritamente entre A e B em um triângulo retângulo genuíno, nunca em uma extremidade e nunca fora do segmento. Essa posição é o que torna o postulado da adição de segmentos aplicável, e é por isso que projeções zero ou negativas são rejeitadas.",
            },
          ],
          "h2": "Por Que a Hipotenusa É Igual à Soma de Suas Projeções?",
          "image": {
            "alt": "Segmento reto AB dividido no ponto D em segmento AD rotulado p e segmento DB rotulado q, mostrando que o segmento inteiro é igual a p mais q",
            "caption": "Um ponto entre A e B divide o segmento: AB = AD + DB.",
            "src": "hypotenuse-segment-addition.svg",
          },
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "Em salas de aula e lições de casa, problemas de projeção testam se os alunos conseguem rotular um diagrama e aplicar [[c = p + q]] em vez de recorrer ao teorema de Pitágoras. Exercícios de desenho técnico usam a mesma habilidade quando uma altura divide uma hipotenusa medida em um plano.",
            },
            {
              "kind": "p",
              "text": "Modelos de topografia e geometria arquitetônica às vezes reduzem um layout de triângulo retângulo a uma hipotenusa cortada por uma perpendicular, onde somar os dois segmentos marcados dá o vão total. Construções geométricas no papel usam a soma para definir aberturas de compasso.",
            },
            {
              "kind": "p",
              "text": "A condição é sempre a mesma: p e q devem ser partes adjacentes de uma hipotenusa em um triângulo retângulo genuíno. Distâncias arbitrárias nunca servem, por mais tentadora que a adição pareça.",
            },
            {
              "kind": "p",
              "text": "Professores podem usar a configuração de projeções como uma aula de transição: ela revisa a adição de segmentos das séries anteriores enquanto antecipa os teoremas de semelhança que chegam mais tarde no curso de geometria.",
            },
          ],
          "h2": "Aplicações Práticas dos Cálculos de Projeção da Hipotenusa",
        },
        "sec-compare": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dois caminhos levam à hipotenusa. Quando os segmentos da altura são conhecidos, use a adição de segmentos: [[c = p + q]]. Quando os dois lados ao redor do ângulo reto são conhecidos, use o teorema de Pitágoras: [[c = \\sqrt{a^2 + b^2}]].",
            },
            {
              "kind": "p",
              "text": "Escolha a fórmula das projeções quando o problema der o pé da altura e seus dois segmentos; escolha a fórmula dos catetos quando ele der os dois lados perpendiculares. Em um triângulo consistente, ambos os caminhos produzem o mesmo c.",
            },
            {
              "kind": "p",
              "text": "Uma verificação cruzada rápida conecta as duas fórmulas. A partir das projeções [[p = 9]] e [[q = 16]], [[c = 25]]. Os catetos são [[a = 15]] e [[b = 20]], e [[\\sqrt{15^2 + 20^2} = \\sqrt{625} = 25]]. Ambos os caminhos chegam à mesma hipotenusa.",
            },
          ],
          "h2": "Hipotenusa por Projeções vs. Hipotenusa por Catetos",
          "table": {
            "headers": [
              "Valores Conhecidos",
              "Fórmula",
              "Método",
            ],
            "rows": [
              [
                "Projeções p e q",
                "c = p + q",
                "Adição de segmentos",
              ],
              [
                "Catetos a e b",
                "c = √(a² + b²)",
                "Teorema de Pitágoras",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada erro abaixo é seguido de sua correção.",
            },
            {
              "kind": "steps",
              "steps": [
                "Multiplicar p e q em vez de somá-los. Com [[p = 4]] e [[q = 9]], o produto 36 não significa nada aqui; a hipotenusa é [[4 + 9 = 13]].",
                "Confundir projeções com catetos. Os catetos se encontram no ângulo reto; as projeções ficam ao longo da hipotenusa. Rotule cada comprimento antes de calcular.",
                "Usar a altura como projeção. A altura h é perpendicular à hipotenusa, não um pedaço dela, então ela nunca pertence a [[c = p + q]].",
                "Misturar unidades de medida. [[p = 40]] mm e [[q = 9]] cm devem virar 4 cm e 9 cm antes de somar; a soma bruta 49 não tem unidade válida.",
                "Inserir comprimentos negativos. Projeções são positivas por definição, então uma entrada negativa indica um erro nos dados.",
                "Confundir a hipotenusa com um cateto. A hipotenusa fica oposta ao ângulo reto e é o lado mais longo; um cateto nunca pode desempenhar seu papel.",
                "Esquecer um segmento. Somar apenas p dá um comprimento parcial; a hipotenusa precisa de ambas as partes.",
                "Usar medidas não relacionadas. Os dois números devem ser as partes adjacentes da mesma hipotenusa, não comprimentos arbitrários do problema.",
                "Aplicar o teorema de Pitágoras a p e q. O valor [[\\sqrt{p^2 + q^2}]] não é a hipotenusa, porque p e q são colineares, não perpendiculares.",
                "Confundir [[c = p + q]] com [[h = \\sqrt{pq}]]. A adição encontra a hipotenusa; a média geométrica encontra a altura. Trocar as fórmulas troca as respostas.",
              ],
            },
            {
              "kind": "p",
              "text": "Se você se pegar no meio de um erro, pare e rotule novamente o diagrama antes de recalcular. A maioria dos erros acima desaparece quando p e q estão claramente marcados na hipotenusa e todo o resto é riscado.",
            },
          ],
          "h2": "Erros Comuns ao Calcular a Hipotenusa por Projeções",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tente estes seis problemas e depois confira as respostas resolvidas abaixo. Nenhum dos valores repete os exemplos resolvidos.",
            },
            {
              "kind": "p",
              "text": "Resolva cada problema no papel antes de ler sua resposta. Cubra as respostas com a mão se necessário; o problema de várias etapas é o melhor teste de que os teoremas de projeção foram assimilados.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Números Inteiros",
            },
            {
              "kind": "p",
              "text": "A altura de um triângulo retângulo divide a hipotenusa em [[p = 12]] cm e [[q = 4]] cm. Encontre c.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Decimais",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 2.5]] m e [[q = 7.5]] m, encontre a hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Projeções Iguais",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 7]] in e [[q = 7]] in, encontre c. Que tipo de triângulo é esse?",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Conversão de Unidades",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 200]] mm e [[q = 35]] cm, encontre a hipotenusa em centímetros.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Projeção Desconhecida",
            },
            {
              "kind": "p",
              "text": "Uma hipotenusa mede [[c = 50]] cm e uma projeção é [[q = 32]] cm. Encontre p.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Várias Etapas com Catetos",
            },
            {
              "kind": "p",
              "text": "Dados [[p = 16]] cm e [[q = 9]] cm, encontre c, e depois encontre os catetos a e b.",
            },
            {
              "kind": "h3",
              "text": "Respostas dos Problemas de Prática",
            },
            {
              "kind": "p",
              "text": "Resposta 1: [[c = 12 + 4 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 2: [[c = 2.5 + 7.5 = 10]] m.",
            },
            {
              "kind": "p",
              "text": "Resposta 3: [[c = 7 + 7 = 14]] in. Projeções iguais produzem um triângulo retângulo isósceles.",
            },
            {
              "kind": "p",
              "text": "Resposta 4: Converta 200 mm para 20 cm, então [[c = 20 + 35 = 55]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 5: [[p = c - q = 50 - 32 = 18]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 6: [[c = 16 + 9 = 25]] cm. Então [[a = \\sqrt{25 \\times 16} = 20]] cm e [[b = \\sqrt{25 \\times 9} = 15]] cm.",
            },
          ],
          "h2": "Problemas de Prática com Respostas",
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "As relações de projeção concordam exatamente com o teorema de Pitágoras. Comece do teorema das projeções: [[a^2 = cp]] e [[b^2 = cq]]. Somar as duas equações dá [[a^2 + b^2 = cp + cq]].",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c(p + q)]]]",
            },
            {
              "kind": "p",
              "text": "Colocar c em evidência é válido porque ele multiplica ambos os termos. Como [[p + q = c]], a substituição produz:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Uma verificação numérica com o triângulo 9-16-25 confirma a álgebra: [[a^2 + b^2 = 225 + 400 = 625]] e [[c^2 = 25^2 = 625]]. Ambos os lados concordam, que é exatamente o que a prova fatorada prevê.",
            },
            {
              "kind": "p",
              "text": "A prova se fecha de forma elegante: a simples soma de segmentos está no coração da relação pitagórica. O diagrama abaixo mostra de onde vêm [[a^2 = cp]] e [[b^2 = cq]]: cada triângulo pequeno compartilha seus ângulos com o original, então os lados correspondentes permanecem proporcionais.",
            },
          ],
          "h2": "Projeções da Hipotenusa e o Teorema de Pitágoras",
          "image": {
            "alt": "Triângulo retângulo original ABC ao lado dos dois triângulos menores semelhantes ACD e CBD com ângulos correspondentes e lados correspondentes rotulados",
            "caption": "Os triângulos ACD e CBD são semelhantes a ABC, dando a ao quadrado igual a cp e b ao quadrado igual a cq.",
            "src": "hypotenuse-similar-triangles.svg",
          },
        },
        "sec-special": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada propriedade abaixo decorre diretamente da adição, o que as torna fáceis de confiar.",
            },
            {
              "items": [
                "Projeções iguais: se [[p = q]], então [[c = 2p]]. A altura cai no ponto médio, e os dois catetos são iguais, dando um triângulo retângulo isósceles.",
                "Projeções desiguais: qualquer par positivo funciona. A altura se inclina em direção à projeção mais longa, e o cateto mais próximo é o mais curto.",
                "Projeções muito pequenas: a fórmula continua válida, por exemplo [[p = 0.5]] mm e [[q = 1.5]] mm dão [[c = 2]] mm.",
                "Projeções muito grandes: não há limite superior, por exemplo [[p = 1200]] m e [[q = 800]] m dão [[c = 2000]] m.",
                "Escala: dobrar ambas as projeções dobra a hipotenusa, já que [[2p + 2q = 2(p + q)]].",
                "Trocar p e q: [[p + q = q + p]], então a hipotenusa não muda e apenas os rótulos AD e DB trocam de lugar.",
                "Projeções de comprimento zero: [[p = 0]] significa que a altura coincide com um cateto, então o triângulo é degenerado e a calculadora não o aceita.",
                "Projeções negativas: comprimentos não podem ser negativos, então uma entrada negativa é sempre um erro de dados.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "O diagrama compara dois triângulos com a mesma hipotenusa, mas com divisões de projeção diferentes, mostrando como a forma muda enquanto a soma permanece fixa.",
            },
          ],
          "h2": "Casos Especiais e Propriedades Importantes",
          "image": {
            "alt": "Dois triângulos retângulos com o mesmo comprimento de hipotenusa 10: um com projeções iguais 5 e 5, o outro com projeções 2 e 8",
            "caption": "Mesma hipotenusa, formas diferentes: p = q = 5 vs p = 2, q = 8.",
            "src": "hypotenuse-equal-vs-unequal.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Três verificações rápidas detectam quase todo erro de cálculo. A primeira é o cálculo direto; as outras duas o confirmam por ângulos diferentes.",
            },
            {
              "kind": "h3",
              "text": "Verificação 1: Recalcule a Adição de Segmentos",
            },
            {
              "kind": "p",
              "text": "Some p e q novamente, devagar. Com [[p = 4]] e [[q = 9]], confirme [[4 + 9 = 13]]. Um deslize descuidado aqui é a fonte mais comum de uma resposta errada.",
            },
            {
              "kind": "h3",
              "text": "Verificação 2: Confirme que os Catetos se Encaixam em Pitágoras",
            },
            {
              "kind": "p",
              "text": "Calcule os catetos a partir das projeções, [[a = \\sqrt{cp}]] e [[b = \\sqrt{cq}]], e então verifique [[a^2 + b^2 = c^2]]. Para [[p = 9]], [[q = 16]], [[c = 25]]: [[a = 15]], [[b = 20]], e [[225 + 400 = 625]]. Esta verificação geométrica vai além da adição da calculadora.",
            },
            {
              "kind": "h3",
              "text": "Verificação 3: Verifique o Diagrama por Sanidade",
            },
            {
              "kind": "p",
              "text": "Confirme que ambas as projeções são positivas, que ambas estão na mesma hipotenusa, e que c é maior que cada segmento isolado. Se o resultado for menor que p ou q, um valor foi digitado no campo errado.",
            },
          ],
          "h2": "Como Verificar Seu Cálculo da Hipotenusa",
        },
      },
      "faqHeading": "Perguntas Frequentes",
      "faqs": [
        {
          "answer": "A fórmula é [[c = p + q]], onde p e q são os dois segmentos de projeção da hipotenusa. Some os dois comprimentos para obter a hipotenusa completa. Por exemplo, [[p = 4]] cm e [[q = 9]] cm dão [[c = 13]] cm.",
          "question": "Qual é a fórmula da hipotenusa por projeções?",
        },
        {
          "answer": "São os dois segmentos criados quando a altura traçada do ângulo reto encontra a hipotenusa. Rotulados [[p = AD]] e [[q = DB]] no triângulo ABC com altura CD, eles ficam ponta a ponta ao longo da hipotenusa e a cobrem completamente.",
          "question": "O que são projeções da hipotenusa?",
        },
        {
          "answer": "Por causa da adição de segmentos: o pé da altura fica entre as extremidades da hipotenusa, então o lado inteiro é igual à soma de suas partes. Substituir os símbolos padrão transforma [[AB = AD + DB]] em [[c = p + q]]. Nenhuma trigonometria é necessária.",
          "question": "Por que somamos p e q?",
        },
        {
          "answer": "Não. Os catetos a e b formam o ângulo reto, enquanto as projeções p e q ficam ao longo da hipotenusa. Confundi-los é o erro de rotulagem mais comum, então confira a posição de cada comprimento no diagrama antes de calcular.",
          "question": "Projeções são o mesmo que catetos do triângulo?",
        },
        {
          "answer": "Sim. A altura raramente atinge o ponto médio exato, então p e q geralmente são desiguais. Qualquer par positivo é válido, e a soma ainda dá a hipotenusa. O triângulo simplesmente se inclina em direção à projeção mais longa.",
          "question": "As projeções podem ter comprimentos diferentes?",
        },
        {
          "answer": "A fórmula vira [[c = 2p]]. A altura bissecta a hipotenusa, os dois catetos são iguais, e o triângulo é um triângulo retângulo isósceles. Geometricamente, a altura cai exatamente no ponto médio.",
          "question": "O que acontece quando p e q são iguais?",
        },
        {
          "answer": "Sim, com uma fórmula diferente: [[h = \\sqrt{pq}]], a média geométrica das projeções. A <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculadora de altura por projeções</a> foi feita para esse cálculo. Mantenha-a separada de [[c = p + q]], que encontra a hipotenusa.",
          "question": "Posso calcular a altura usando p e q?",
        },
        {
          "answer": "Sim. Primeiro encontre [[c = p + q]], depois use [[a = \\sqrt{cp}]] e [[b = \\sqrt{cq}]]. Para [[p = 9]], [[q = 16]] e [[c = 25]], os catetos são 15 e 20. Estas são extensões educacionais, não a função principal desta calculadora.",
          "question": "Posso encontrar os catetos do triângulo a partir das projeções?",
        },
        {
          "answer": "Não. Encontrar a hipotenusa por projeções precisa apenas de adição, sem raízes quadradas. O teorema de Pitágoras se torna útil quando os catetos são conhecidos, ou ao verificar um resultado por meio dos catetos.",
          "question": "O teorema de Pitágoras é necessário para este cálculo?",
        },
        {
          "answer": "Converta uma medida para que ambas usem a mesma unidade antes de somar. Por exemplo, [[p = 40]] mm viram 4 cm quando [[q = 9]] cm, dando [[c = 13]] cm. Os seletores de unidade da calculadora servem ao mesmo propósito.",
          "question": "E se p e q tiverem unidades diferentes?",
        },
        {
          "answer": "Não. Uma projeção é apenas parte da hipotenusa, então deve ser menor que o todo. Se seu resultado mostrar o contrário, um valor foi digitado no campo errado.",
          "question": "Uma projeção pode ser maior que a hipotenusa?",
        },
        {
          "answer": "Recalcule [[c = p + q]] devagar, depois confirme que os catetos satisfazem [[a^2 + b^2 = c^2]]. Verifique também que ambas as projeções são positivas e que c excede cada uma. As três verificações levam menos de um minuto.",
          "question": "Como posso verificar o resultado da hipotenusa?",
        },
      ],
      "relatedHeading": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
      "relatedIntro": "Escolha a próxima ferramenta de acordo com as medidas que você conhece. Cada calculadora abaixo lida com uma tarefa específica do triângulo retângulo, dos segmentos de projeção individuais à altura e aos lados do triângulo.",
      "relatedItems": [
        "Calculadora de Projeção do Triângulo Retângulo",
        "Calculadora de Projeção p do Triângulo Retângulo",
        "Calculadora de Projeção q do Triângulo Retângulo",
        "Calculadora de Altura por Projeções do Triângulo Retângulo",
        "Calculadora de Lados do Triângulo Retângulo",
      ],
    },
};
