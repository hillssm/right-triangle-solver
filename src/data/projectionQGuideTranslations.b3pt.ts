// projectionQGuideTranslations.bpt.ts: Right Triangle Projection Q
// Guide (Page 36 of 45) translation.
export const PROJQ_B3_PT = {
  "pt": {
      "faqHeading": "Perguntas Frequentes",
      "faqs": [
        {
          "answer": "A fórmula é [[q = \\frac{b^2}{c}]], em que b é o cateto associado a q e c é a hipotenusa completa. Primeiro eleve o cateto b ao quadrado e depois divida por c. Por exemplo, [[b = 8]] cm e [[c = 10]] cm dão [[q = 6.4]] cm.",
          "question": "Qual é a fórmula da projeção q?",
        },
        {
          "answer": "A projeção q é o segmento da hipotenusa junto ao vértice B, criado quando a altura traçada a partir do ângulo reto encontra a hipotenusa no ponto D. No triângulo ABC, [[q = DB]], a parte da hipotenusa associada ao cateto b.",
          "question": "O que a projeção q representa?",
        },
        {
          "answer": "O quadrado vem dos triângulos semelhantes: o triângulo CBD é semelhante ao triângulo ABC, o que dá [[\\frac{q}{b} = \\frac{b}{c}]], e o cateto b aparece nas duas razões. A multiplicação cruzada dá [[b^2 = c \\times q]], por isso o quadrado já está na geometria.",
          "question": "Por que o cateto b é elevado ao quadrado?",
        },
        {
          "answer": "A divisão isola q. O teorema da projeção afirma que [[b^2 = c \\times q]], em que q está multiplicado por c, por isso dividir os dois lados por c deixa q sozinho. A divisão também transforma o comprimento ao quadrado em um comprimento comum.",
          "question": "Por que dividimos pela hipotenusa?",
        },
        {
          "answer": "Não. O cateto b é o lado BC, um dos lados que formam o ângulo reto, enquanto a projeção q é o segmento DB ao longo da hipotenusa. No triângulo 6-8-10, o cateto b mede 8 cm e a projeção q mede apenas 6.4 cm.",
          "question": "A projeção q é igual ao cateto b?",
        },
        {
          "answer": "A projeção q fica junto ao vértice B e combina com o cateto b, enquanto a projeção p fica junto ao vértice A e combina com o cateto a. Elas são os dois segmentos que a altura cria na hipotenusa: [[p + q = c]].",
          "question": "Por que q está associada ao cateto b e não ao cateto a?",
        },
        {
          "answer": "A projeção p fica junto ao vértice A e combina com o cateto a, enquanto a projeção q fica junto ao vértice B e combina com o cateto b. Elas são os dois segmentos que a altura cria na hipotenusa: [[p + q = c]]. No triângulo 6-8-10, p mede 3.6 cm e q mede 6.4 cm, por isso q é o segmento mais longo.",
          "question": "Qual é a diferença entre a projeção p e a projeção q?",
        },
        {
          "answer": "Sim. Subtraia q da hipotenusa: [[p = c - q]]. Com [[c = 10]] cm e [[q = 6.4]] cm, [[p = 3.6]] cm. Você também pode encontrar p diretamente a partir do cateto a com [[p = \\frac{a^2}{c}]].",
          "question": "Posso calcular a projeção p se já conheço q?",
        },
        {
          "answer": "Não. A projeção q é apenas parte da hipotenusa, por isso deve ser menor que c. Se q fosse igual a c, p seria zero e o triângulo seria degenerado. Um resultado maior que c sempre indica um erro de entrada ou de rótulo.",
          "question": "A projeção q pode ser maior que a hipotenusa?",
        },
        {
          "answer": "Você também precisa de p ou de c. Encontre p com [[p = c - q]] e depois use [[h = \\sqrt{p \\times q}]]. Com [[q = 6.4]] cm e [[c = 10]] cm, [[p = 3.6]] cm e [[h = 4.8]] cm. Apenas a projeção q não pode determinar a altura.",
          "question": "Como encontro a altura quando q é conhecida?",
        },
        {
          "answer": "Recalcule [[q = \\frac{b^2}{c}]], depois confira [[p + q = c]] após encontrar p por subtração, e confirme que q é positivo e menor que c. Você também pode encontrar o cateto a a partir de p e conferir [[a^2 + b^2 = c^2]].",
          "question": "Como posso verificar um cálculo da projeção q?",
        },
        {
          "answer": "A altura cai no ponto médio da hipotenusa e os dois catetos são iguais, por isso o triângulo é isósceles. Com [[c = 10]] cm e [[p = q = 5]] cm, os dois catetos são iguais a [[\\sqrt{50}]] cm, cerca de 7.071 cm.",
          "question": "O que acontece quando p e q são iguais?",
        },
      ],
      "relatedHeading": "Explore as Calculadoras Relacionadas de Triângulo Retângulo",
      "relatedIntro": "Cada calculadora abaixo resolve uma tarefa específica de triângulo retângulo, por isso escolha a ferramenta que corresponde às medidas que você já conhece.",
      "relatedItems": [
        "Calculadora de Projeção de Triângulo Retângulo",
        "Calculadora de Projeção P de Triângulo Retângulo",
        "Calculadora de Cateto B a Partir da Projeção",
        "Calculadora de Hipotenusa a Partir das Projeções",
        "Calculadora de Altura a Partir das Projeções",
        "Calculadora de Lados de Triângulo Retângulo",
      ],
      "sections": {
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "O uso mais direto é o dever de casa e o trabalho em sala de aula de geometria, em que os problemas de projeção testam se os alunos sabem rotular um diagrama e aplicar [[q = \\frac{b^2}{c}]] em vez de recorrer ao teorema de Pitágoras por hábito. Os exercícios de triângulos semelhantes usam a mesma configuração, já que a própria demonstração é um exercício de correspondência entre lados correspondentes.",
            },
            {
              "kind": "p",
              "text": "O desenho técnico usa o teorema quando um triângulo retângulo precisa ser reconstruído a partir de medidas parciais: se um desenho fornece a hipotenusa e o pé da altura, a projeção que falta segue sem medir a figura novamente. Os professores também usam essa configuração como uma lição de transição entre a soma de segmentos e a semelhança.",
            },
            {
              "kind": "p",
              "text": "Uma condição limita todas as aplicações: a geometria de triângulo retângulo necessária precisa existir de fato. O teorema descreve relações geométricas exatas, e não medidas aproximadas de campo, por isso ele nunca substitui uma medição cuidadosa de topografia ou uma medição profissional de engenharia.",
            },
          ],
          "h2": "Aplicações Práticas dos Cálculos de Projeção de Triângulo Retângulo",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "A calculadora tem dois campos de entrada. O primeiro recebe o cateto b, o lado perpendicular associado à projeção q. O segundo recebe a hipotenusa c, o lado completo oposto ao ângulo reto. Os dois comprimentos devem usar a mesma unidade, por isso converta primeiro se uma medida estiver em centímetros e a outra em metros.",
            },
            {
              "kind": "p",
              "text": "A hipotenusa deve ser maior que o cateto b, já que um cateto é um lado do ângulo reto, enquanto a hipotenusa atravessa todo o triângulo. Se o seu valor de b for maior que c, você provavelmente digitou uma projeção, a altura ou o lado errado.",
            },
            {
              "kind": "p",
              "text": "Clique em Calcular Projeção q para ver o resultado e use Redefinir para limpar os dois campos antes de um novo problema. O resultado é um comprimento na unidade que você digitou, por isso um cateto de 8 cm e uma hipotenusa de 10 cm retornam 6.4 cm. O resultado é um comprimento de segmento ao longo da hipotenusa.",
            },
          ],
          "h2": "Calcular a Projeção Q de Triângulo Retângulo",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "O diagrama principal mostra o triângulo ABC com o ângulo reto em C. O lado AC é o cateto a, o lado BC é o cateto b e o lado AB é a hipotenusa c. A altura CD desce de C perpendicularmente até AB e a toca em D.",
            },
            {
              "kind": "p",
              "text": "O ponto D divide a hipotenusa em duas partes: o segmento AD é a projeção p e o segmento DB é a projeção q. O cateto b e a projeção q estão destacados porque são o par de que trata esta página. Siga os rótulos nesta ordem: comece em B, percorra o cateto b até C, depois o cateto a até A e volte ao longo da hipotenusa de A até B, parando em D para ver a divisão em p e q.",
            },
            {
              "kind": "p",
              "text": "A combinação de b com q fica visível no triângulo pequeno CBD, em que o cateto b é a hipotenusa e q é o lado que fica ao longo da hipotenusa maior. Como o triângulo CBD é semelhante ao triângulo ABC, a razão de q para b no triângulo pequeno é igual à razão de b para c no triângulo maior.",
            },
          ],
          "h2": "Diagrama da Projeção Q de Triângulo Retângulo Explicado",
          "image": {
            "alt": "Triângulo retângulo ABC com ângulo reto em C, altura CD até a hipotenusa AB, cateto b e projeção q destacados, com os catetos a e b, a hipotenusa c, as projeções p e q e a altura h rotulados",
            "caption": "A altura CD divide a hipotenusa AB em projeção p (AD) e projeção q (DB), com o cateto b (BC) destacado.",
            "src": "projection-q-main-triangle.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada exemplo apresenta os valores dados, a substituição e a resposta final, e todos os exemplos mantêm as unidades consistentes do início ao fim.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 1: Números Inteiros Básicos",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 8]] cm e [[c = 10]] cm, a fórmula dá [[q = \\frac{8^2}{10} = \\frac{64}{10}]], portanto [[q = 6.4]] cm. O cateto ao quadrado, 64, é um valor intermediário, e dividir pela hipotenusa o transforma de volta em um comprimento. O outro cateto deste triângulo mede 6 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 2: Divisão com Quadrado Perfeito",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 12]] cm e [[c = 24]] cm, [[q = \\frac{12^2}{24} = \\frac{144}{24} = 6]] cm. O cateto ao quadrado divide exatamente, por isso a resposta é exata. A outra projeção aqui é 18 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 3: Resultado Decimal",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 7]] cm e [[c = 14]] cm, [[q = \\frac{7^2}{14} = \\frac{49}{14} = 3.5]] cm. Um resultado decimal é normal: a projeção não precisa ser um número inteiro mesmo quando as duas entradas são. A outra projeção é 10.5 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 4: Medidas Maiores",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 15]] m e [[c = 25]] m, [[q = \\frac{15^2}{25} = \\frac{225}{25} = 9]] m. Números maiores não mudam nada no método: eleve ao quadrado e depois divida. A outra projeção é 16 m, que combina com um cateto de 20 m.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 5: Medidas Pequenas",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 30]] mm e [[c = 50]] mm, [[q = \\frac{30^2}{50} = \\frac{900}{50} = 18]] mm. Medidas pequenas funcionam da mesma forma, e manter a unidade em milímetros do início ao fim evita qualquer conversão. A outra projeção é 32 mm, que combina com um cateto de 40 mm.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 6: Medidas Fracionárias",
            },
            {
              "kind": "p",
              "text": "Dados [[b = \\frac{3}{4}]] ft e [[c = \\frac{3}{2}]] ft, eleve o cateto ao quadrado primeiro: [[b^2 = \\frac{9}{16}]] pés quadrados. Depois [[q = \\frac{9/16}{3/2} = \\frac{9}{16} \\times \\frac{2}{3} = \\frac{18}{48} = \\frac{3}{8}]] ft. Dividir por uma fração significa multiplicar pelo seu inverso, que é o passo que a maioria dos alunos perde com medidas fracionárias.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 7: Unidades Diferentes",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 80]] cm e [[c = 1]] m, converta primeiro: 1 m equivale a 100 cm. Depois [[q = \\frac{80^2}{100} = \\frac{6400}{100} = 64]] cm. Usar 1 em vez de 100 teria dado 6400 cm, uma projeção muito maior que a hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 8: Valores Decimais Maiores",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 4.5]] m e [[c = 7.5]] m, [[q = \\frac{4.5^2}{7.5} = \\frac{20.25}{7.5} = 2.7]] m. Entradas decimais exigem o mesmo cuidado que os números inteiros: eleve o decimal completo ao quadrado e depois divida. A outra projeção é 4.8 m, que combina com um cateto de 6 m.",
            },
          ],
          "h2": "Exemplos Resolvidos de Cálculo da Projeção Q",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "O teorema da projeção afirma que o quadrado do cateto b é igual à hipotenusa multiplicada pela sua projeção:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Dividir os dois lados por c isola q e dá a fórmula de trabalho desta página:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "O cálculo corre em duas etapas. A etapa 1 eleva o cateto b ao quadrado, multiplicando-o por si mesmo. A etapa 2 divide esse comprimento ao quadrado pela hipotenusa completa c, e o resultado é um comprimento comum, e não um comprimento ao quadrado.",
            },
            {
              "kind": "p",
              "text": "As unidades exigem cuidado nas duas etapas. Se b e c estiverem em centímetros, então [[b^2]] está em centímetros quadrados, e dividir por centímetros devolve centímetros. Misturar unidades, como metros para b e centímetros para c, dá um quociente sem sentido, por isso converta para uma única unidade antes de calcular.",
            },
            {
              "kind": "p",
              "text": "Com [[b = 8]] cm e [[c = 10]] cm, a etapa 1 dá [[8^2 = 64]], e a etapa 2 dá [[q = \\frac{64}{10} = 6.4]] cm. O número 64 não responde a nenhuma pergunta sozinho: só depois da divisão ele se torna o comprimento da projeção.",
            },
          ],
          "h2": "Fórmula da Projeção Q de Triângulo Retângulo",
          "image": {
            "alt": "Triângulo retângulo ABC com altura CD, mostrando que a projeção q é igual ao cateto b ao quadrado dividido pela hipotenusa c",
            "caption": "A fórmula da projeção: q é igual a b ao quadrado dividido por c, com o pé da altura D dividindo a hipotenusa.",
            "src": "projection-q-formula.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Onze passos curtos levam você de um diagrama rotulado a uma resposta conferida.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifique o triângulo retângulo do seu problema e confirme que ele tem um ângulo reto.",
                "Localize o vértice do ângulo reto e a altura traçada dele até a hipotenusa.",
                "Identifique o cateto perpendicular associado à projeção q, o cateto que toca o vértice B.",
                "Identifique a hipotenusa completa c, o lado oposto ao ângulo reto.",
                "Confirme que c é maior que b. Se não for, rotule o diagrama novamente antes de continuar.",
                "Selecione unidades compatíveis e converta se as medidas usarem unidades diferentes.",
                "Digite o cateto b no campo Cateto b.",
                "Digite a hipotenusa c no campo Hipotenusa c.",
                "Clique em Calcular Projeção q e leia o resultado.",
                "Confira o resultado: q deve ser positivo e menor que c.",
                "Use Redefinir ao começar um novo cálculo.",
              ],
            },
            {
              "kind": "p",
              "text": "Digitar o cateto a em vez do cateto b produz uma projeção diferente. O cateto a combina com p, por isso a calculadora retornaria o segmento junto ao vértice A, e não o segmento junto a B. A verificação de rótulos do passo 3 é a mais importante.",
            },
          ],
          "h2": "Como Usar a Calculadora de Projeção Q de Triângulo Retângulo",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Esta calculadora encontra a projeção q de um triângulo retângulo quando você conhece o cateto b e a hipotenusa completa c. A projeção q é o segmento da hipotenusa que fica junto ao cateto b, criado quando a altura traçada a partir do ângulo reto encontra a hipotenusa. A fórmula é [[q = \\frac{b^2}{c}]], em que b é o cateto perpendicular e c é a hipotenusa completa.",
            },
            {
              "kind": "p",
              "text": "Por exemplo, com [[b = 8]] cm e [[c = 10]] cm, o cálculo é [[q = \\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm. O valor 6.4 cm é a parte da hipotenusa associada ao cateto b, e não o próprio cateto nem toda a hipotenusa.",
            },
            {
              "kind": "p",
              "text": "A calculadora fica no topo desta página, seguida pela fórmula, por um diagrama rotulado, por uma demonstração, por exemplos resolvidos e por verificações que você pode aplicar a qualquer resposta.",
            },
          ],
          "h2": "Calculadora de Projeção Q de Triângulo Retângulo",
        },
        "sec-leg-b-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem dois lados perpendiculares, chamados catetos, e um lado mais longo, chamado hipotenusa. Os dois catetos se encontram no ângulo reto, e a hipotenusa fica oposta a esse ângulo. Aqui o triângulo é ABC com o ângulo reto em C: o cateto a é AC, o cateto b é BC e a hipotenusa c é AB.",
            },
            {
              "kind": "p",
              "text": "O cateto b é um dos dois lados que formam o ângulo reto, por isso é um lado genuíno do triângulo, e não um segmento desenhado dentro dele. A projeção q fica ao longo da hipotenusa, enquanto o cateto b vai do vértice B até o vértice do ângulo reto C.",
            },
            {
              "kind": "p",
              "text": "A hipotenusa é sempre o lado mais longo em um triângulo retângulo não degenerado, já que fica oposta ao maior ângulo, o ângulo reto. É por isso que a fórmula exige [[0 < b < c]] e que a calculadora espera uma hipotenusa maior que o cateto.",
            },
            {
              "kind": "p",
              "text": "A posição do cateto b decide qual segmento se chama q: o cateto b toca o vértice B, por isso o segmento junto a B é q. Confira sempre os rótulos do seu próprio diagrama antes de escolher qual cateto digitar.",
            },
          ],
          "h2": "Entendendo o Cateto B e a Hipotenusa",
          "table": {
            "headers": [
              "Símbolo",
              "Significado",
            ],
            "rows": [
              [
                "a",
                "Outro cateto perpendicular",
              ],
              [
                "b",
                "Cateto associado a q",
              ],
              [
                "c",
                "Hipotenusa completa",
              ],
              [
                "p",
                "Projeção associada a a",
              ],
              [
                "q",
                "Projeção associada a b",
              ],
              [
                "h",
                "Altura até a hipotenusa",
              ],
            ],
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada erro abaixo é seguido pela sua correção. A maioria tem origem nos rótulos, e não na aritmética.",
            },
            {
              "kind": "steps",
              "steps": [
                "Usar o cateto a em vez do cateto b: digitar a retorna p. Com a = 6 e c = 10, o resultado 3.6 cm é p, e não q.",
                "Esquecer de elevar o cateto b ao quadrado: dividir b por c em vez de b ao quadrado por c dá 0.8 cm em vez de 6.4 cm.",
                "Dividir c por b ao quadrado em vez de b ao quadrado por c: o quociente deve ser [[b^2/c]], e não [[c/b^2]]. Com b = 8 e c = 10, a ordem errada dá cerca de 0.156, que não tem unidade válida.",
                "Confundir a projeção p com a projeção q: q fica junto ao vértice B e p junto ao vértice A. Rotule os dois segmentos antes de calcular.",
                "Tratar q como o próprio cateto perpendicular: q é um segmento da hipotenusa, e não o lado BC. No triângulo 6-8-10, o cateto b mede 8 cm, enquanto q mede apenas 6.4 cm.",
                "Digitar um valor de cateto maior ou igual a c: nenhum triângulo assim existe, já que a hipotenusa é o lado mais longo.",
                "Misturar centímetros e metros: converta primeiro, como no Exemplo 7, em que 1 m virou 100 cm.",
                "Esquecer que c representa a hipotenusa completa: usar uma projeção ou um cateto como denominador distorce o resultado.",
                "Arredondar cálculos intermediários cedo demais: arredondar o cateto ao quadrado antes de dividir altera a resposta.",
                "Confundir b com b ao quadrado: 64 no exemplo 6-8-10 é um comprimento ao quadrado, enquanto 6.4 cm é a projeção.",
                "Aplicar a fórmula a um triângulo que não é retângulo: o teorema da projeção precisa da altura traçada a partir de um ângulo reto.",
                "Tratar q como toda a hipotenusa: q mais p é igual a c, por isso um resultado igual ou maior que c indica um erro.",
              ],
            },
            {
              "kind": "p",
              "text": "Se uma resposta parecer errada, pare e rotule o diagrama novamente antes de recalcular. A maioria dos erros acima desaparece quando p e q estão claramente marcados na hipotenusa.",
            },
          ],
          "h2": "Erros Comuns ao Calcular a Projeção Q",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tente resolver os seis problemas no papel antes de ler as respostas. Nenhum dos valores repete os exemplos resolvidos.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Números Inteiros Básicos",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem cateto [[b = 9]] cm e hipotenusa [[c = 15]] cm. Encontre a projeção q.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Valores Decimais",
            },
            {
              "kind": "p",
              "text": "Dados [[b = 1.5]] m e [[c = 2.5]] m, encontre a projeção q.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Medidas Fracionárias",
            },
            {
              "kind": "p",
              "text": "Dados [[b = \\frac{5}{6}]] ft e [[c = \\frac{5}{3}]] ft, encontre q como fração.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Conversão de Unidades",
            },
            {
              "kind": "p",
              "text": "Um cateto mede [[b = 80]] cm e a hipotenusa mede [[c = 2]] m. Encontre q em centímetros.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Encontrar p Depois de Calcular q",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem hipotenusa [[c = 25]] cm e cateto [[b = 15]] cm. Encontre q e depois p.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Vários Passos com Projeção q e Altura h",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 25]] cm e [[b = 15]] cm, encontre q, depois p e depois a altura h.",
            },
            {
              "kind": "h3",
              "text": "Respostas dos Problemas de Prática",
            },
            {
              "kind": "p",
              "text": "Resposta 1: [[q = \\frac{9^2}{15} = \\frac{81}{15} = 5.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 2: [[q = \\frac{1.5^2}{2.5} = \\frac{2.25}{2.5} = 0.9]] m.",
            },
            {
              "kind": "p",
              "text": "Resposta 3: [[b^2 = \\frac{25}{36}]], portanto [[q = \\frac{25/36}{5/3} = \\frac{25}{36} \\times \\frac{3}{5} = \\frac{5}{12}]] ft.",
            },
            {
              "kind": "p",
              "text": "Resposta 4: Converta 2 m para 200 cm e depois [[q = \\frac{80^2}{200} = \\frac{6400}{200} = 32]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 5: [[q = \\frac{15^2}{25} = \\frac{225}{25} = 9]] cm e depois [[p = 25 - 9 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 6: [[q = 9]] cm e [[p = 16]] cm, portanto [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
          ],
          "h2": "Problemas de Prática com Respostas",
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "A demonstração se apoia em triângulos semelhantes. Traçar a altura CD divide o triângulo ABC em dois triângulos retângulos menores, ACD e CBD, e ambos são semelhantes ao triângulo original. Uma das razões entre os lados deles dá o teorema da projeção diretamente.",
            },
            {
              "kind": "p",
              "text": "Concentre-se no triângulo CBD e no triângulo inteiro ABC. Ambos contêm o ângulo em B e ambos contêm um ângulo reto, por isso os terceiros ângulos também devem coincidir. Comparar os lados que ocupam as mesmas posições dá a proporção:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{DB}{BC} = \\frac{BC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Agora substitua os símbolos padrão: [[DB = q]], [[BC = b]] e [[AB = c]]. A proporção fica:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{q}{b} = \\frac{b}{c}]]]",
            },
            {
              "kind": "p",
              "text": "A multiplicação cruzada elimina as frações. O numerador da esquerda vezes o denominador da direita é igual ao numerador da direita vezes o denominador da esquerda, portanto [[q \\times c = b \\times b]], que é:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Dividir os dois lados por c termina a demonstração, dando [[q = \\frac{b^2}{c}]]. O mesmo argumento aplicado ao outro triângulo pequeno, ACD, dá [[a^2 = c \\times p]].",
            },
          ],
          "h2": "Por Que a Fórmula da Projeção Q Funciona?",
          "image": {
            "alt": "Triângulo retângulo original ABC ao lado dos triângulos semelhantes menores ACD e CBD, mostrando que a proporção q sobre b é igual a b sobre c",
            "caption": "Demonstração por triângulos semelhantes: q sobre b é igual a b sobre c, por isso a multiplicação cruzada dá b ao quadrado igual a c vezes q.",
            "src": "projection-q-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Nove propriedades seguem diretamente de [[q = \\frac{b^2}{c}]]. Cada uma serve também como uma verificação de bom senso para uma resposta nova.",
            },
            {
              "items": [
                "A projeção q é sempre mais curta que a hipotenusa completa em um triângulo não degenerado, já que q é apenas parte de c.",
                "Aumentar o cateto b mantendo c fixo aumenta q, porque o cateto ao quadrado no numerador cresce.",
                "Aumentar c mantendo b fixo diminui q, porque o denominador cresce.",
                "Se b e c forem multiplicados pelo mesmo fator positivo, q é multiplicado por esse fator.",
                "Se p for igual a q, os dois catetos perpendiculares são iguais e o triângulo é um triângulo retângulo isósceles.",
                "A projeção q é sempre positiva em um triângulo não degenerado válido. Valores zero ou negativos não descrevem nenhum triângulo real.",
                "A projeção q é um comprimento, e não uma área. O cateto ao quadrado é apenas um passo intermediário, e dividir por c restaura as unidades comuns de comprimento.",
                "A projeção q está associada especificamente ao cateto b. Usá-la com o cateto a responde a uma pergunta completamente diferente.",
                "Trocar p e q muda qual cateto está associado a cada projeção, por isso os rótulos devem permanecer ligados aos seus vértices.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Quando a altura cai no ponto médio da hipotenusa, os dois catetos devem coincidir, como mostra o diagrama abaixo.",
            },
          ],
          "h2": "Propriedades Importantes da Projeção Q",
          "image": {
            "alt": "Dois triângulos retângulos lado a lado, um com projeções iguais p e q de 5 e outro com projeções desiguais p igual a 3.6 e q igual a 6.4",
            "caption": "Projeções iguais (p = q = 5) dão catetos iguais, enquanto projeções desiguais (p = 3.6, q = 6.4) dão catetos desiguais.",
            "src": "projection-q-equal-vs-unequal.svg",
          },
        },
        "sec-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Alguns problemas pedem a outra projeção. A fórmula correspondente é a imagem espelhada da fórmula de q, com o cateto a no lugar do cateto b:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Use [[a = 6]] cm e [[c = 10]] cm. Depois [[p = \\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm. Isso coincide com a outra projeção do triângulo 6-8-10 dos exemplos anteriores, em que q era 6.4 cm e as duas projeções somam 10 cm.",
            },
            {
              "kind": "p",
              "text": "A fórmula usa a em vez de b porque cada cateto combina com a projeção junto ao seu próprio vértice. O cateto a toca o vértice A, e p é o segmento junto a A. Digitar b nesta fórmula retornaria q, e não p. A calculadora desta página aceita apenas b e c, por isso use a <a href=\"/right-triangle-projection-p-calculator/\">calculadora de projeção p</a> quando precisar encontrar p a partir de a e c.",
            },
          ],
          "h2": "Como Calcular a Projeção P a Partir do Outro Cateto",
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "O teorema da projeção e o teorema de Pitágoras concordam exatamente, e a álgebra mostra por quê. Comece com as duas fórmulas de projeção, [[a^2 = c \\times p]] e [[b^2 = c \\times q]], e some-as:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c \\times p + c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Colocar c em evidência no lado direito dá [[a^2 + b^2 = c(p + q)]]. Como [[p + q = c]], a substituição produz o resultado conhecido:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Uma verificação numérica com o triângulo 6-8-10 confirma: [[a^2 + b^2 = 36 + 64 = 100]] e [[c^2 = 10^2 = 100]]. O teorema da projeção divide a relação de Pitágoras em uma parte por cateto, e somar as partes a reconstrói.",
            },
            {
              "kind": "p",
              "text": "Essa divisão é o que torna as fórmulas de projeção úteis: o teorema de Pitágoras sozinho não consegue encontrar uma projeção a partir de um cateto e de uma hipotenusa, porque ele fala dos catetos em conjunto.",
            },
          ],
          "h2": "Relação Entre a Projeção Q e o Teorema de Pitágoras",
        },
        "sec-relationship-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "A projeção q também se conecta à altura por meio de uma segunda relação de média geométrica. A altura h é a média geométrica das duas projeções:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Como [[p = c - q]], a altura também pode ser escrita usando apenas q e c:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{q(c - q)}]]]",
            },
            {
              "kind": "p",
              "text": "Use [[q = 6.4]] cm e [[c = 10]] cm. Primeiro encontre p: [[p = 10 - 6.4 = 3.6]] cm. Depois [[h = \\sqrt{3.6 \\times 6.4} = \\sqrt{23.04} = 4.8]] cm. A altura é menor que qualquer um dos catetos, como deve ser.",
            },
            {
              "kind": "p",
              "text": "A projeção q sozinha não determina a altura: dois triângulos diferentes podem ter o mesmo q com hipotenusas diferentes. A hipotenusa completa, ou a outra projeção, é sempre necessária também. A <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculadora de altura a partir das projeções</a> faz esse cálculo quando as duas projeções são conhecidas.",
            },
          ],
          "h2": "Relação Entre a Projeção Q e a Altura",
        },
        "sec-relationship-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "A fórmula da projeção pode ser rearranjada para encontrar o cateto b em vez de q. Começando de [[b^2 = c \\times q]], tire a raiz quadrada positiva dos dois lados:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Confira com os números conhecidos: [[b = 8]] cm, [[c = 10]] cm e [[q = 6.4]] cm. O produto dentro da raiz é [[c \\times q = 10 \\times 6.4 = 64]], e [[\\sqrt{64} = 8]] cm, que é o cateto com que começamos.",
            },
            {
              "kind": "p",
              "text": "A conexão é a relação de média geométrica: o cateto b é a média geométrica da hipotenusa e da sua projeção. É por isso que o cateto aparece ao quadrado no teorema e que a raiz quadrada aparece ao resolver para o cateto. Para problemas que começam com q e c, a <a href=\"/right-triangle-leg-b-from-projection-calculator/\">calculadora de cateto b a partir da projeção</a> executa diretamente esta fórmula rearranjada.",
            },
          ],
          "h2": "Relação Entre a Projeção Q e o Cateto B",
        },
        "sec-relationship-pq": {
          "blocks": [
            {
              "kind": "p",
              "text": "As duas projeções são as duas partes de um único lado reto, por isso somam a hipotenusa inteira:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Reorganizar dá [[p = c - q]]. Com [[c = 10]] cm e [[q = 6.4]] cm, a subtração é [[p = 10 - 6.4 = 3.6]] cm. A mesma subtração funciona no sentido inverso: [[q = c - p]]. A <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">calculadora de hipotenusa a partir das projeções</a> reconstrói c a partir de p e q quando a própria hipotenusa é desconhecida.",
            },
            {
              "kind": "p",
              "text": "Comparar p e q diz algo sobre a forma do triângulo. Quando q é igual a p, a altura cai no ponto médio da hipotenusa e os dois catetos são iguais, por isso o triângulo é isósceles. Quando q é maior que p, o cateto b é maior que o cateto a, e quando p é maior, o cateto a é maior. A projeção maior sempre pertence ao cateto maior.",
            },
            {
              "kind": "p",
              "text": "No triângulo 6-8-10, q é 6.4 cm e p é 3.6 cm, por isso q é maior, e o cateto b, com 8 cm, é de fato maior que o cateto a, com 6 cm.",
            },
          ],
          "h2": "Relação Entre a Projeção P e a Projeção Q",
          "image": {
            "alt": "Triângulo retângulo comparando a projeção q combinada com o cateto b com a projeção p combinada com o cateto a, com c igual a 10, q igual a 6.4 e p igual a 3.6",
            "caption": "q usa b (64 dividido por 10 = 6.4) e p usa a (36 dividido por 10 = 3.6).",
            "src": "projection-q-vs-p.svg",
          },
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Use [[b = 8]] cm e [[c = 10]] cm. Os quatro passos abaixo mostram toda a resolução, sem pular nada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Escreva a fórmula: [[q = \\frac{b^2}{c}]].",
                "Substitua os valores: [[q = \\frac{8^2}{10}]].",
                "Eleve o cateto ao quadrado: [[q = \\frac{64}{10}]].",
                "Divida: [[q = 6.4]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "A resposta 6.4 cm é o segmento da hipotenusa junto ao cateto b, e não um lado perpendicular nem uma área. Uma verificação curta fecha o ciclo: [[b^2 = 8^2 = 64]] e [[c \\times q = 10 \\times 6.4 = 64]], por isso os dois lados do teorema concordam.",
            },
            {
              "kind": "p",
              "text": "Para referência, a outra projeção é [[p = 10 - 6.4 = 3.6]] cm, o cateto a é [[a = \\sqrt{10 \\times 3.6} = 6]] cm e a altura é [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, confirmando o conhecido triângulo retângulo 6-8-10.",
            },
          ],
          "h2": "Exemplo Passo a Passo de Como Encontrar a Projeção Q",
          "image": {
            "alt": "Triângulo retângulo com cateto b de 8 cm e hipotenusa de 10 cm, resolvido para dar projeção q igual a 6.4 cm",
            "caption": "Exemplo resolvido: b = 8 cm e c = 10 cm dão q = 64 dividido por 10 = 6.4 cm.",
            "src": "projection-q-example-b8-c10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Quatro verificações independentes detectam quase todos os erros. Aplique pelo menos uma a cada resposta, e as quatro quando o problema for importante. O exemplo abaixo usa [[b = 8]] cm, [[c = 10]] cm e [[q = 6.4]] cm em todo o texto.",
            },
            {
              "kind": "h3",
              "text": "Método 1: Verificação pelo Teorema da Projeção",
            },
            {
              "kind": "p",
              "text": "Verifique [[q = \\frac{b^2}{c}]] diretamente. Aqui [[\\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm, que coincide com a resposta. Se o novo cálculo for diferente, ou a elevação ao quadrado ou a divisão saiu errada.",
            },
            {
              "kind": "h3",
              "text": "Método 2: Soma de Segmentos",
            },
            {
              "kind": "p",
              "text": "Encontre p por subtração: [[p = 10 - 6.4 = 3.6]] cm. Depois confira [[p + q = 3.6 + 6.4 = 10]] cm, que é igual a c. Uma soma que não chega a c aponta um erro de subtração.",
            },
            {
              "kind": "h3",
              "text": "Método 3: Verificação pelo Teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Calcule o cateto a a partir de p: [[a = \\sqrt{10 \\times 3.6} = 6]] cm. Depois confira [[a^2 + b^2 = 36 + 64 = 100 = 10^2]]. Esta verificação testa o triângulo inteiro, por isso detecta erros de rótulo que a primeira verificação pode deixar passar. A <a href=\"/right-triangle-leg-a-from-projection-calculator/\">calculadora de cateto a a partir da projeção</a> executa diretamente o passo de a.",
            },
            {
              "kind": "h3",
              "text": "Método 4: Razoabilidade Geométrica",
            },
            {
              "kind": "p",
              "text": "Confirme que q é positivo, menor que c, está na unidade correta e é um segmento da hipotenusa, e não um lado perpendicular. Aqui 6.4 cm é positivo, menor que 10 cm, está em centímetros e é mais curto que o cateto b, com 8 cm.",
            },
          ],
          "h2": "Como Verificar o Seu Cálculo da Projeção Q",
        },
        "sec-what-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Trace a altura a partir do vértice do ângulo reto C perpendicularmente até a hipotenusa AB. Ela encontra a hipotenusa em um ponto chamado pé, rotulado D, e a divide em dois segmentos adjacentes: AD é a projeção p e DB é a projeção q.",
            },
            {
              "kind": "p",
              "text": "A projeção q pertence ao cateto b porque fica junto ao vértice B, o mesmo vértice onde o cateto b começa. No triângulo pequeno CBD, o cateto b é a hipotenusa e q é um dos seus catetos, que é a ligação geométrica que faz o teorema da projeção funcionar. A projeção p, pelo mesmo raciocínio, pertence ao cateto a, que toca o vértice A.",
            },
            {
              "kind": "p",
              "text": "As projeções são comprimentos ao longo da hipotenusa, medidos na mesma unidade que os outros lados. Elas não são perpendiculares a nada e não são lados do triângulo original. A <a href=\"/right-triangle-projection-calculator/\">calculadora de projeção de triângulo retângulo</a> encontra as duas projeções quando os catetos e a hipotenusa são conhecidos.",
            },
            {
              "kind": "p",
              "text": "Como p e q são as duas partes de um único lado reto, elas somam a hipotenusa inteira:",
            },
            {
              "kind": "p",
              "text": "[[[p + q = c]]]",
            },
            {
              "kind": "p",
              "text": "Com [[c = 10]] cm e [[q = 6.4]] cm, a outra projeção é [[p = 10 - 6.4 = 3.6]] cm.",
            },
            {
              "kind": "p",
              "text": "A projeção q não é igual ao cateto b. O cateto b é o lado BC, um dos lados que formam o ângulo reto, enquanto q é o segmento DB ao longo da hipotenusa. No triângulo 6-8-10, o cateto b mede 8 cm e a projeção q mede apenas 6.4 cm.",
            },
          ],
          "h2": "O Que É a Projeção Q em um Triângulo Retângulo?",
        },
        "sec-why-squared": {
          "blocks": [
            {
              "kind": "p",
              "text": "O quadrado está ali porque o teorema da projeção é uma afirmação sobre um cateto ao quadrado: ele diz que o quadrado do cateto b é igual ao produto de c por q, [[b^2 = c \\times q]], e a fórmula de q é o que se obtém ao dividir os dois lados por c.",
            },
            {
              "kind": "p",
              "text": "O motivo remonta aos triângulos semelhantes. No triângulo CBD, o cateto b desempenha o papel de hipotenusa, enquanto q é um dos seus catetos. Comparar o triângulo pequeno com o triângulo inteiro dá a proporção [[\\frac{q}{b} = \\frac{b}{c}]], e o cateto b aparece duas vezes, uma em cada razão. A multiplicação cruzada coloca b nos dois lados, que é exatamente por que o quadrado aparece.",
            },
            {
              "kind": "p",
              "text": "A relação de média geométrica diz o mesmo com outras palavras: o cateto b é a média geométrica da hipotenusa c e da sua projeção q, ou seja, [[b = \\sqrt{c \\times q}]]. Elevar os dois lados ao quadrado dá [[b^2 = c \\times q]], e dividir por c isola q.",
            },
            {
              "kind": "p",
              "text": "A divisão é o passo que isola q. A multiplicação no teorema liga q a c, e dividir por c desfaz essa ligação. Sem o quadrado, a fórmula misturaria um comprimento com uma área, e as unidades não funcionariam.",
            },
          ],
          "h2": "Por Que o Cateto B É Elevado ao Quadrado na Fórmula da Projeção?",
        },
      },
      "tocHeading": "Conteúdo do Guia",
      "tocItems": {
        "sec-applications": "Aplicações Práticas dos Cálculos de Projeção de Triângulo Retângulo",
        "sec-calculate": "Calcular a Projeção Q de Triângulo Retângulo",
        "sec-diagram": "Diagrama da Projeção Q de Triângulo Retângulo Explicado",
        "sec-examples": "Exemplos Resolvidos de Cálculo da Projeção Q",
        "sec-faq": "Perguntas Frequentes",
        "sec-formula": "Fórmula da Projeção Q de Triângulo Retângulo",
        "sec-how-to-use": "Como Usar a Calculadora de Projeção Q de Triângulo Retângulo",
        "sec-intro": "Calculadora de Projeção Q de Triângulo Retângulo",
        "sec-leg-b-hypotenuse": "Entendendo o Cateto B e a Hipotenusa",
        "sec-mistakes": "Erros Comuns ao Calcular a Projeção Q",
        "sec-practice": "Problemas de Prática com Respostas",
        "sec-projection-p": "Como Calcular a Projeção P a Partir do Outro Cateto",
        "sec-proof": "Por Que a Fórmula da Projeção Q Funciona?",
        "sec-properties": "Propriedades Importantes da Projeção Q",
        "sec-pythagoras": "Relação Entre a Projeção Q e o Teorema de Pitágoras",
        "sec-related": "Explore as Calculadoras Relacionadas de Triângulo Retângulo",
        "sec-relationship-altitude": "Relação Entre a Projeção Q e a Altura",
        "sec-relationship-leg-b": "Relação Entre a Projeção Q e o Cateto B",
        "sec-relationship-pq": "Relação Entre a Projeção P e a Projeção Q",
        "sec-step-example": "Exemplo Passo a Passo de Como Encontrar a Projeção Q",
        "sec-verify": "Como Verificar o Seu Cálculo da Projeção Q",
        "sec-what-projection-q": "O Que É a Projeção Q em um Triângulo Retângulo?",
        "sec-why-squared": "Por Que o Cateto B É Elevado ao Quadrado na Fórmula da Projeção?",
      },
    },
};
