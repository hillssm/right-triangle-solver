// projectionPGuideTranslations.bpt.ts: Right Triangle Projection P
// Guide (Page 34 of 45) translation.
export const PROJP_B3_PT = {
  "pt": {
      "faqHeading": "Perguntas Frequentes",
      "faqs": [
        {
          "answer": "A fórmula é [[p = \\frac{a^2}{c}]], em que a é o cateto associado a p e c é a hipotenusa completa. Eleve o cateto a ao quadrado primeiro e depois divida por c. Por exemplo, [[a = 6]] cm e [[c = 10]] cm dão [[p = 3.6]] cm.",
          "question": "Qual é a fórmula da projeção p?",
        },
        {
          "answer": "A projeção p é o segmento da hipotenusa junto ao vértice A, criado quando a altura traçada a partir do ângulo reto encontra a hipotenusa no ponto D. No triângulo ABC, [[p = AD]], a parte da hipotenusa associada ao cateto a.",
          "question": "O que representa a projeção p?",
        },
        {
          "answer": "O quadrado vem dos triângulos semelhantes: o triângulo ACD é semelhante ao triângulo ABC, o que dá [[\\frac{p}{a} = \\frac{a}{c}]], e o cateto a aparece nas duas razões. A multiplicação cruzada dá [[a^2 = c \\times p]], por isso o quadrado já está embutido na geometria.",
          "question": "Por que o cateto a é elevado ao quadrado?",
        },
        {
          "answer": "A divisão isola p. O teorema da projeção afirma que [[a^2 = c \\times p]], em que p está multiplicado por c, por isso dividir os dois lados por c deixa p sozinho. A divisão também transforma o comprimento ao quadrado em um comprimento comum.",
          "question": "Por que dividimos pela hipotenusa?",
        },
        {
          "answer": "Não. O cateto a é o lado AC, um dos lados que formam o ângulo reto, enquanto a projeção p é o segmento AD ao longo da hipotenusa. No triângulo 6-8-10, o cateto a mede 6 cm e a projeção p mede apenas 3.6 cm.",
          "question": "A projeção p é igual ao cateto a?",
        },
        {
          "answer": "Não. A projeção p é apenas parte da hipotenusa, por isso tem de ser menor que c. Se p fosse igual a c, q seria zero e o triângulo seria degenerado. Um resultado maior que c indica sempre um erro de entrada ou de rotulagem.",
          "question": "A projeção p pode ser maior que a hipotenusa?",
        },
        {
          "answer": "A projeção p fica junto ao vértice A e combina com o cateto a, enquanto a projeção q fica junto ao vértice B e combina com o cateto b. São os dois segmentos que a altura cria sobre a hipotenusa: [[p + q = c]].",
          "question": "Qual é a diferença entre a projeção p e a projeção q?",
        },
        {
          "answer": "Não. O cateto a combina apenas com a projeção p. Para encontrar q, você precisa do cateto b, usando [[q = \\frac{b^2}{c}]], ou subtrair: [[q = c - p]] quando p já é conhecido. A <a href=\"/right-triangle-projection-q-calculator/\">calculadora de projeção q</a> encontra q a partir de b e c.",
          "question": "Posso calcular a projeção q usando o cateto a?",
        },
        {
          "answer": "Você também precisa de q ou de c. Encontre q com [[q = c - p]] e depois use [[h = \\sqrt{p \\times q}]]. Com [[p = 3.6]] cm e [[c = 10]] cm, [[q = 6.4]] cm e [[h = 4.8]] cm. Apenas a projeção p não determina a altura.",
          "question": "Como encontro a altura quando a projeção p é conhecida?",
        },
        {
          "answer": "Recalcule [[p = \\frac{a^2}{c}]], depois verifique [[p + q = c]] após encontrar q por subtração, e confirme que p é positivo e menor que c. Você também pode encontrar o cateto b a partir de q e verificar [[a^2 + b^2 = c^2]].",
          "question": "Como posso verificar a projeção p?",
        },
        {
          "answer": "A altura cai no ponto médio da hipotenusa, e os dois catetos são iguais, por isso o triângulo é isósceles. Com [[c = 10]] cm e [[p = q = 5]] cm, os dois catetos são iguais a [[\\sqrt{50}]] cm, cerca de 7.071 cm.",
          "question": "O que acontece quando p e q são iguais?",
        },
        {
          "answer": "A hipotenusa fica oposta ao ângulo reto, o maior ângulo do triângulo, e o lado oposto ao maior ângulo é sempre o lado mais longo. Se a fosse igual ou maior que c, nenhum triângulo retângulo desse tipo poderia existir.",
          "question": "Por que a hipotenusa tem de ser maior que o cateto a?",
        },
      ],
      "relatedHeading": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
      "relatedIntro": "Cada calculadora abaixo resolve uma tarefa específica de triângulo retângulo, por isso escolha a ferramenta que corresponde às medidas que você já conhece.",
      "relatedItems": [
        "Calculadora de Projeção de Triângulo Retângulo",
        "Calculadora de Projeção Q de Triângulo Retângulo",
        "Calculadora de Cateto A a Partir da Projeção de Triângulo Retângulo",
        "Calculadora de Cateto B a Partir da Projeção de Triângulo Retângulo",
        "Calculadora de Hipotenusa a Partir das Projeções de Triângulo Retângulo",
        "Calculadora de Altura a Partir das Projeções de Triângulo Retângulo",
        "Calculadora de Lados de Triângulo Retângulo",
      ],
      "sections": {
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "O uso mais direto é o trabalho de casa e o trabalho em sala de aula de geometria, em que os problemas de projeção testam se os alunos sabem rotular um diagrama e aplicar [[p = \\frac{a^2}{c}]] em vez de recorrer ao teorema de Pitágoras por hábito. Os exercícios de triângulos semelhantes usam a mesma configuração, já que a própria demonstração é um exercício de correspondência de lados correspondentes.",
            },
            {
              "kind": "p",
              "text": "O desenho técnico usa o teorema quando um triângulo retângulo precisa ser reconstruído a partir de medidas parciais: se um desenho fornece a hipotenusa e o pé da altura, a projeção que falta segue sem medir novamente a figura. Os professores também usam a configuração como uma lição de transição entre a adição de segmentos e a semelhança.",
            },
            {
              "kind": "p",
              "text": "Uma condição limita todas as aplicações: a geometria do triângulo retângulo exigida precisa de fato existir. O teorema descreve relações geométricas exatas, não medidas de campo aproximadas, por isso nunca substitui um levantamento cuidadoso ou uma medição profissional de engenharia.",
            },
          ],
          "h2": "Aplicações Práticas dos Cálculos de Projeção de Triângulo Retângulo",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "A calculadora tem dois campos de entrada. O primeiro recebe o cateto a, o lado perpendicular associado à projeção p. O segundo recebe a hipotenusa c, o lado completo oposto ao ângulo reto. Os dois comprimentos devem usar a mesma unidade, por isso converta primeiro se uma medida estiver em centímetros e a outra em metros.",
            },
            {
              "kind": "p",
              "text": "A hipotenusa tem de ser maior que o cateto a, já que um cateto é um lado do ângulo reto, enquanto a hipotenusa atravessa todo o triângulo. Se o seu valor de a for maior que c, você provavelmente digitou uma projeção, a altura ou o lado errado.",
            },
            {
              "kind": "p",
              "text": "Clique em Calcular Projeção p para ver o resultado e use Redefinir para limpar os dois campos antes de um novo problema. O resultado é um comprimento na unidade que você digitou, por isso um cateto de 6 cm e uma hipotenusa de 10 cm devolvem 3.6 cm. O resultado é um comprimento de segmento ao longo da hipotenusa.",
            },
          ],
          "h2": "Calcular a Projeção P de Triângulo Retângulo",
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "O diagrama principal mostra o triângulo ABC com o ângulo reto em C. O lado AC é o cateto a, o lado BC é o cateto b e o lado AB é a hipotenusa c. A altura CD desce de C perpendicular a AB e a toca em D.",
            },
            {
              "kind": "p",
              "text": "O ponto D divide a hipotenusa em duas partes: o segmento AD é a projeção p e o segmento DB é a projeção q. O cateto a e a projeção p estão destacados porque são o par de que trata esta página. Siga os rótulos nesta ordem: comece em A, percorra o cateto a até C, depois o cateto b até B, e volte ao longo da hipotenusa de B até A, parando em D para ver a divisão em p e q.",
            },
            {
              "kind": "p",
              "text": "A associação de a com p fica visível no triângulo pequeno ACD, em que o cateto a é a hipotenusa e p é o lado que fica ao longo da hipotenusa maior. Como o triângulo ACD é semelhante ao triângulo ABC, a razão de p para a no triângulo pequeno é igual à razão de a para c no triângulo maior.",
            },
          ],
          "h2": "Diagrama da Projeção P de Triângulo Retângulo Explicado",
          "image": {
            "alt": "Triângulo retângulo ABC com ângulo reto em C, altura CD até a hipotenusa AB, cateto a e projeção p destacados, com os catetos a e b, a hipotenusa c, as projeções p e q e a altura h rotulados",
            "caption": "A altura CD divide a hipotenusa AB em projeção p (AD) e projeção q (DB), com o cateto a (AC) destacado.",
            "src": "projection-p-main-triangle.svg",
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
              "text": "Dados [[a = 6]] cm e [[c = 10]] cm, a fórmula dá [[p = \\frac{6^2}{10} = \\frac{36}{10}]], portanto [[p = 3.6]] cm. O cateto ao quadrado, 36, é um valor intermediário, e dividi-lo pela hipotenusa o transforma de volta em um comprimento. O outro cateto deste triângulo mede 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 2: Divisão com Quadrado Perfeito",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 8]] cm e [[c = 16]] cm, [[p = \\frac{8^2}{16} = \\frac{64}{16} = 4]] cm. O cateto ao quadrado divide-se de forma exata, por isso a resposta é exata. A outra projeção aqui é 12 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 3: Resultado Decimal",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 7]] cm e [[c = 14]] cm, [[p = \\frac{7^2}{14} = \\frac{49}{14} = 3.5]] cm. Um resultado decimal é normal: a projeção não precisa ser um número inteiro mesmo quando as duas entradas são. A outra projeção é 10.5 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 4: Medidas Maiores",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 12]] m e [[c = 20]] m, [[p = \\frac{12^2}{20} = \\frac{144}{20} = 7.2]] m. Números maiores não mudam nada no método: eleve ao quadrado e depois divida. A outra projeção é 12.8 m, que combina com um cateto de 16 m.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 5: Medidas Pequenas",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 30]] mm e [[c = 50]] mm, [[p = \\frac{30^2}{50} = \\frac{900}{50} = 18]] mm. Medidas pequenas funcionam da mesma forma, e manter a unidade em milímetros do início ao fim evita qualquer conversão. A outra projeção é 32 mm, que combina com um cateto de 40 mm.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 6: Medidas Fracionárias",
            },
            {
              "kind": "p",
              "text": "Dados [[a = \\frac{3}{4}]] ft e [[c = \\frac{3}{2}]] ft, eleve o cateto ao quadrado primeiro: [[a^2 = \\frac{9}{16}]] pés quadrados. Depois [[p = \\frac{9/16}{3/2} = \\frac{9}{16} \\times \\frac{2}{3} = \\frac{18}{48} = \\frac{3}{8}]] ft. Dividir por uma fração significa multiplicar pelo seu inverso, que é o passo que a maioria dos alunos perde com medidas fracionárias.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 7: Unidades Diferentes",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 60]] cm e [[c = 1]] m, converta primeiro: 1 m equivale a 100 cm. Depois [[p = \\frac{60^2}{100} = \\frac{3600}{100} = 36]] cm. Usar 1 em vez de 100 teria dado 3600 cm, uma projeção muito maior que a hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 8: Valores Decimais Maiores",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 4.5]] m e [[c = 7.5]] m, [[p = \\frac{4.5^2}{7.5} = \\frac{20.25}{7.5} = 2.7]] m. Entradas decimais exigem o mesmo cuidado que os números inteiros: eleve o decimal completo ao quadrado e depois divida. A outra projeção é 4.8 m, que combina com um cateto de 6 m.",
            },
          ],
          "h2": "Exemplos Resolvidos de Cálculo da Projeção P",
        },
        "sec-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "O teorema da projeção afirma que o quadrado do cateto a é igual à hipotenusa multiplicada pela sua projeção:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Dividir os dois lados por c isola p e dá a fórmula de trabalho desta página:",
            },
            {
              "kind": "p",
              "text": "[[[p = \\frac{a^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "O cálculo corre em duas etapas. A etapa 1 eleva o cateto a ao quadrado, multiplicando-o por si mesmo. A etapa 2 divide esse comprimento ao quadrado pela hipotenusa completa c, e o resultado é um comprimento comum, não um comprimento ao quadrado.",
            },
            {
              "kind": "p",
              "text": "As unidades exigem cuidado nas duas etapas. Se a e c estiverem ambos em centímetros, então [[a^2]] está em centímetros quadrados, e dividir por centímetros devolve centímetros. Misturar unidades, como metros para a e centímetros para c, dá um quociente sem sentido, por isso converta para uma única unidade antes de calcular.",
            },
            {
              "kind": "p",
              "text": "Com [[a = 6]] cm e [[c = 10]] cm, a etapa 1 dá [[6^2 = 36]], e a etapa 2 dá [[p = \\frac{36}{10} = 3.6]] cm. O número 36 não responde a nenhuma pergunta por si só: só depois da divisão ele se torna o comprimento da projeção.",
            },
          ],
          "h2": "Fórmula da Projeção P de Triângulo Retângulo",
          "image": {
            "alt": "Triângulo retângulo ABC com altura CD, mostrando que a projeção p é igual ao cateto a ao quadrado dividido pela hipotenusa c",
            "caption": "A fórmula da projeção: p é igual a a ao quadrado dividido por c, com o pé da altura D dividindo a hipotenusa.",
            "src": "projection-p-formula.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Onze passos curtos levam você de um diagrama rotulado a uma resposta verificada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifique o triângulo retângulo do seu problema e confirme que ele tem um ângulo reto.",
                "Localize o vértice do ângulo reto e a altura traçada dele até a hipotenusa.",
                "Identifique o cateto perpendicular associado à projeção p, o cateto que toca o vértice A.",
                "Identifique a hipotenusa completa c, o lado oposto ao ângulo reto.",
                "Confirme que c é maior que a. Se não for, rotule o diagrama novamente antes de continuar.",
                "Escolha unidades compatíveis e converta se as medidas usarem unidades diferentes.",
                "Digite o cateto a no campo Cateto a.",
                "Digite a hipotenusa c no campo Hipotenusa c.",
                "Clique em Calcular Projeção p e leia o resultado.",
                "Verifique o resultado: p tem de ser positivo e menor que c.",
                "Use Redefinir ao começar um novo cálculo.",
              ],
            },
            {
              "kind": "p",
              "text": "Digitar o cateto b em vez do cateto a produz uma projeção diferente. O cateto b combina com q, por isso a calculadora devolveria o segmento junto ao vértice B, não o junto a A. A verificação de rótulos do passo 3 é a mais importante.",
            },
          ],
          "h2": "Como Usar a Calculadora de Projeção P de Triângulo Retângulo",
        },
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Esta calculadora encontra a projeção p de um triângulo retângulo quando você conhece o cateto a e a hipotenusa completa c. A projeção p é o segmento da hipotenusa que fica junto ao cateto a, criado quando a altura traçada a partir do ângulo reto encontra a hipotenusa. A fórmula é [[p = \\frac{a^2}{c}]], em que a é o cateto perpendicular e c é a hipotenusa completa.",
            },
            {
              "kind": "p",
              "text": "Por exemplo, com [[a = 6]] cm e [[c = 10]] cm, o cálculo é [[p = \\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm. O valor 3.6 cm é a parte da hipotenusa associada ao cateto a, não o próprio cateto nem toda a hipotenusa.",
            },
            {
              "kind": "p",
              "text": "A calculadora fica no topo desta página, seguida pela fórmula, um diagrama rotulado, uma demonstração, exemplos resolvidos e verificações que você pode aplicar a qualquer resposta.",
            },
          ],
          "h2": "Calculadora de Projeção P de Triângulo Retângulo",
        },
        "sec-leg-a-hypotenuse": {
          "blocks": [
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem dois lados perpendiculares, chamados catetos, e um lado mais longo, chamado hipotenusa. Os dois catetos se encontram no ângulo reto, e a hipotenusa fica oposta a esse ângulo. Aqui o triângulo é ABC, com o ângulo reto em C: o cateto a é AC, o cateto b é BC e a hipotenusa c é AB.",
            },
            {
              "kind": "p",
              "text": "O cateto a é um dos dois lados que formam o ângulo reto, por isso é um lado genuíno do triângulo, não um segmento desenhado dentro dele. A projeção p fica plana ao longo da hipotenusa, enquanto o cateto a vai do vértice A até o vértice do ângulo reto C.",
            },
            {
              "kind": "p",
              "text": "A hipotenusa é sempre o lado mais longo em um triângulo retângulo não degenerado, já que fica oposta ao maior ângulo, o ângulo reto. É por isso que a fórmula exige [[0 < a < c]] e que a calculadora espera uma hipotenusa maior que o cateto.",
            },
            {
              "kind": "p",
              "text": "A posição do cateto a decide qual segmento se chama p: o cateto a toca o vértice A, por isso o segmento junto a A é p. Verifique sempre os rótulos do seu próprio diagrama antes de escolher qual cateto digitar.",
            },
          ],
          "h2": "Entendendo o Cateto A e a Hipotenusa",
          "table": {
            "headers": [
              "Símbolo",
              "Significado",
            ],
            "rows": [
              [
                "a",
                "Cateto perpendicular associado a p",
              ],
              [
                "b",
                "Outro cateto perpendicular",
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
              "text": "Cada erro abaixo é seguido da sua correção. A maioria tem origem na rotulagem, não na aritmética.",
            },
            {
              "kind": "steps",
              "steps": [
                "Esquecer de elevar o cateto a ao quadrado: dividir a por c em vez de a ao quadrado por c dá 0.6 cm em vez de 3.6 cm.",
                "Dividir c por a ao quadrado em vez de a ao quadrado por c: o quociente tem de ser [[a^2/c]], não [[c/a^2]]. Com a = 6 e c = 10, a ordem errada dá cerca de 0.278, que não tem unidade válida.",
                "Usar o cateto b em vez do cateto a: digitar b devolve q. Com b = 8 e c = 10, o resultado 6.4 cm é q, não p.",
                "Confundir a projeção p com a projeção q: p fica junto ao vértice A e q junto ao vértice B. Rotule os dois segmentos antes de calcular.",
                "Tratar p como o cateto perpendicular de fato: p é um segmento da hipotenusa, não o lado AC. No triângulo 6-8-10, o cateto a mede 6 cm, enquanto p mede apenas 3.6 cm.",
                "Digitar um valor de a maior ou igual a c: nenhum triângulo desse tipo existe, já que a hipotenusa é o lado mais longo.",
                "Misturar unidades de medida: converta primeiro, como no Exemplo 7, em que 1 m se tornou 100 cm.",
                "Esquecer que a hipotenusa completa é c: usar uma projeção ou um cateto como denominador distorce o resultado.",
                "Arredondar os cálculos intermediários cedo demais: arredondar o cateto ao quadrado antes de dividir desloca a resposta.",
                "Confundir comprimentos ao quadrado com comprimentos comuns: 36 no exemplo 6-8-10 é um comprimento ao quadrado, enquanto 3.6 cm é a projeção.",
                "Aplicar a fórmula a um triângulo que não é retângulo: o teorema da projeção precisa da altura traçada a partir de um ângulo reto.",
                "Esquecer que p é apenas um segmento da hipotenusa: p mais q é igual a c, por isso um resultado igual ou maior que c indica um erro.",
              ],
            },
            {
              "kind": "p",
              "text": "Se uma resposta parecer errada, pare e rotule o diagrama novamente antes de recalcular. A maioria dos erros acima desaparece quando p e q estão claramente marcados sobre a hipotenusa.",
            },
          ],
          "h2": "Erros Comuns ao Calcular a Projeção P",
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
              "text": "Um triângulo retângulo tem cateto [[a = 9]] cm e hipotenusa [[c = 15]] cm. Encontre a projeção p.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Valores Decimais",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 1.5]] m e [[c = 2.5]] m, encontre a projeção p.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Medidas Fracionárias",
            },
            {
              "kind": "p",
              "text": "Dados [[a = \\frac{5}{6}]] ft e [[c = \\frac{5}{3}]] ft, encontre p como uma fração.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Conversão de Unidades",
            },
            {
              "kind": "p",
              "text": "Um cateto mede [[a = 80]] cm e a hipotenusa mede [[c = 2]] m. Encontre p em centímetros.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Encontre q Depois de Calcular p",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem hipotenusa [[c = 25]] cm e cateto [[a = 15]] cm. Encontre p e depois q.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Várias Etapas com Projeção p e Altura h",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 25]] cm e [[a = 15]] cm, encontre p, depois q e depois a altura h.",
            },
            {
              "kind": "h3",
              "text": "Respostas dos Problemas de Prática",
            },
            {
              "kind": "p",
              "text": "Resposta 1: [[p = \\frac{9^2}{15} = \\frac{81}{15} = 5.4]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 2: [[p = \\frac{1.5^2}{2.5} = \\frac{2.25}{2.5} = 0.9]] m.",
            },
            {
              "kind": "p",
              "text": "Resposta 3: [[a^2 = \\frac{25}{36}]], portanto [[p = \\frac{25/36}{5/3} = \\frac{25}{36} \\times \\frac{3}{5} = \\frac{5}{12}]] ft.",
            },
            {
              "kind": "p",
              "text": "Resposta 4: Converta 2 m para 200 cm e depois [[p = \\frac{80^2}{200} = \\frac{6400}{200} = 32]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 5: [[p = \\frac{15^2}{25} = \\frac{225}{25} = 9]] cm e depois [[q = 25 - 9 = 16]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 6: [[p = 9]] cm e [[q = 16]] cm, portanto [[h = \\sqrt{9 \\times 16} = \\sqrt{144} = 12]] cm.",
            },
          ],
          "h2": "Problemas de Prática com Respostas",
        },
        "sec-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Alguns problemas pedem a outra projeção. A fórmula correspondente é a imagem espelhada da fórmula de p, com o cateto b no lugar do cateto a:",
            },
            {
              "kind": "p",
              "text": "[[[q = \\frac{b^2}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Use [[b = 8]] cm e [[c = 10]] cm. Depois [[q = \\frac{8^2}{10} = \\frac{64}{10} = 6.4]] cm. Isso corresponde à outra projeção do triângulo 6-8-10 dos exemplos anteriores, em que p era 3.6 cm e as duas projeções somam 10 cm.",
            },
            {
              "kind": "p",
              "text": "A fórmula usa b em vez de a porque cada cateto combina com a projeção junto ao seu próprio vértice. O cateto b toca o vértice B, e q é o segmento junto a B. Digitar a nesta fórmula devolveria p, não q. A calculadora desta página aceita apenas a e c, por isso use a <a href=\"/right-triangle-projection-q-calculator/\">calculadora de projeção q</a> quando precisar encontrar q a partir de b e c.",
            },
          ],
          "h2": "Como Calcular a Projeção Q a Partir do Outro Cateto",
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "A demonstração apoia-se em triângulos semelhantes. Traçar a altura CD divide o triângulo ABC em dois triângulos retângulos menores, ACD e CBD, e ambos são semelhantes ao triângulo original. Uma das razões entre os lados deles dá o teorema da projeção diretamente.",
            },
            {
              "kind": "p",
              "text": "Concentre-se no triângulo ACD e no triângulo inteiro ABC. Ambos contêm o ângulo em A e ambos contêm um ângulo reto, por isso os terceiros ângulos também têm de coincidir. Comparar os lados que ocupam as mesmas posições dá a proporção:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Agora substitua os símbolos padrão: [[AD = p]], [[AC = a]] e [[AB = c]]. A proporção fica:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "A multiplicação cruzada elimina as frações. O numerador esquerdo vezes o denominador direito é igual ao numerador direito vezes o denominador esquerdo, por isso [[p \\times c = a \\times a]], que é:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Dividir os dois lados por c termina a demonstração, dando [[p = \\frac{a^2}{c}]]. O mesmo argumento aplicado ao outro triângulo pequeno, CBD, dá [[b^2 = c \\times q]].",
            },
          ],
          "h2": "Por Que a Fórmula da Projeção P Funciona?",
          "image": {
            "alt": "Triângulo retângulo original ABC ao lado dos triângulos semelhantes menores ACD e CBD, mostrando a proporção p sobre a igual a a sobre c",
            "caption": "Demonstração por triângulos semelhantes: p sobre a é igual a a sobre c, por isso a multiplicação cruzada dá a ao quadrado igual a c vezes p.",
            "src": "projection-p-similar-triangles.svg",
          },
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Oito propriedades seguem diretamente de [[p = \\frac{a^2}{c}]]. Cada uma serve também como uma verificação de bom senso para uma nova resposta.",
            },
            {
              "items": [
                "A projeção p é sempre mais curta que a hipotenusa completa em um triângulo não degenerado, já que p é apenas parte de c.",
                "Aumentar o cateto a mantendo c fixo aumenta p, porque o cateto ao quadrado no numerador cresce.",
                "Aumentar c mantendo a fixo diminui p, porque o denominador cresce.",
                "Se a e c forem ambos multiplicados pelo mesmo fator positivo, p é escalado por esse fator.",
                "Se p for igual a q, os dois catetos são iguais, e o triângulo é um triângulo retângulo isósceles.",
                "A projeção p é sempre positiva em um triângulo válido não degenerado. Valores zero ou negativos não descrevem nenhum triângulo real.",
                "A projeção p é um comprimento, não uma área. O cateto ao quadrado é apenas um passo intermediário, e dividir por c restaura as unidades comuns de comprimento.",
                "A projeção p está associada especificamente ao cateto a. Usá-la com o cateto b responde a uma pergunta completamente diferente.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Quando a altura cai no ponto médio da hipotenusa, os dois catetos têm de coincidir, como mostra o diagrama abaixo.",
            },
          ],
          "h2": "Propriedades Importantes da Projeção P",
          "image": {
            "alt": "Dois triângulos retângulos lado a lado, um com projeções iguais p e q de 5 e outro com projeções desiguais p igual a 3.6 e q igual a 6.4",
            "caption": "Projeções iguais (p = q = 5) dão catetos iguais, enquanto projeções desiguais (p = 3.6, q = 6.4) dão catetos desiguais.",
            "src": "projection-p-equal-vs-unequal.svg",
          },
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
              "text": "Colocar c em evidência no lado direito dá [[a^2 + b^2 = c(p + q)]]. Como [[p + q = c]], a substituição produz o resultado familiar:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "Uma verificação numérica com o triângulo 6-8-10 confirma: [[a^2 + b^2 = 36 + 64 = 100]] e [[c^2 = 10^2 = 100]]. O teorema da projeção divide a relação pitagórica em uma parte por cateto, e somar as partes a reconstrói.",
            },
            {
              "kind": "p",
              "text": "Essa divisão é o que torna as fórmulas de projeção úteis: o teorema de Pitágoras sozinho não consegue encontrar uma projeção a partir de um cateto e de uma hipotenusa, porque ele fala dos catetos juntos.",
            },
          ],
          "h2": "Relação Entre a Projeção P e o Teorema de Pitágoras",
        },
        "sec-relationship-altitude": {
          "blocks": [
            {
              "kind": "p",
              "text": "A projeção p também se conecta à altura por meio de uma segunda relação de média geométrica. A altura h é a média geométrica das duas projeções:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Como [[q = c - p]], a altura também pode ser escrita usando apenas p e c:",
            },
            {
              "kind": "p",
              "text": "[[[h = \\sqrt{p(c - p)}]]]",
            },
            {
              "kind": "p",
              "text": "Use [[p = 3.6]] cm e [[c = 10]] cm. Primeiro encontre q: [[q = 10 - 3.6 = 6.4]] cm. Depois [[h = \\sqrt{3.6 \\times 6.4} = \\sqrt{23.04} = 4.8]] cm. A altura é mais curta que qualquer um dos catetos, como tem de ser.",
            },
            {
              "kind": "p",
              "text": "Apenas a projeção p não determina a altura: dois triângulos diferentes podem ter o mesmo p com hipotenusas diferentes. A hipotenusa completa, ou a outra projeção, é sempre necessária também. A <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculadora de altura a partir das projeções</a> resolve esse cálculo quando as duas projeções são conhecidas.",
            },
          ],
          "h2": "Relação Entre a Projeção P e a Altura",
        },
        "sec-relationship-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "A fórmula da projeção pode ser rearranjada para encontrar o cateto a em vez de p. Começando de [[a^2 = c \\times p]], tire a raiz quadrada positiva dos dois lados:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Verifique com os números conhecidos: [[a = 6]] cm, [[c = 10]] cm e [[p = 3.6]] cm. O produto dentro da raiz é [[c \\times p = 10 \\times 3.6 = 36]], e [[\\sqrt{36} = 6]] cm, que é o cateto com que começamos.",
            },
            {
              "kind": "p",
              "text": "A conexão é a relação de média geométrica: o cateto a é a média geométrica da hipotenusa e da sua projeção. É por isso que o cateto aparece ao quadrado no teorema e que a raiz quadrada aparece ao resolver para o cateto. Para problemas que começam com p e c, a <a href=\"/right-triangle-leg-a-from-projection-calculator/\">calculadora de cateto a a partir da projeção</a> executa diretamente esta fórmula rearranjada.",
            },
          ],
          "h2": "Relação Entre a Projeção P e o Cateto A",
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
              "text": "O rearranjo dá [[q = c - p]]. Com [[c = 10]] cm e [[p = 3.6]] cm, a subtração é [[q = 10 - 3.6 = 6.4]] cm. A mesma subtração funciona ao contrário: [[p = c - q]]. A <a href=\"/right-triangle-hypotenuse-from-projections-calculator/\">calculadora de hipotenusa a partir das projeções</a> reconstrói c a partir de p e q quando a própria hipotenusa é desconhecida.",
            },
            {
              "kind": "p",
              "text": "Comparar p e q diz algo sobre a forma do triângulo. Quando p é igual a q, a altura cai no ponto médio da hipotenusa e os dois catetos são iguais, por isso o triângulo é isósceles. Quando p é maior que q, o cateto a é maior que o cateto b, e quando q é maior, o cateto b é maior. A projeção maior pertence sempre ao cateto maior.",
            },
            {
              "kind": "p",
              "text": "No triângulo 6-8-10, q é 6.4 cm e p é 3.6 cm, por isso q é maior, e o cateto b, de 8 cm, é de fato maior que o cateto a, de 6 cm.",
            },
          ],
          "h2": "Relação Entre a Projeção P e a Projeção Q",
          "image": {
            "alt": "Triângulo retângulo comparando a projeção p combinada com o cateto a com a projeção q combinada com o cateto b, com c igual a 10, p igual a 3.6 e q igual a 6.4",
            "caption": "p usa a (36 dividido por 10 = 3.6) e q usa b (64 dividido por 10 = 6.4).",
            "src": "projection-p-vs-q.svg",
          },
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Use [[a = 6]] cm e [[c = 10]] cm. Os quatro passos abaixo mostram todo o trabalho, sem pular nada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Escreva a fórmula: [[p = \\frac{a^2}{c}]].",
                "Substitua os valores: [[p = \\frac{6^2}{10}]].",
                "Eleve o cateto ao quadrado: [[p = \\frac{36}{10}]].",
                "Divida: [[p = 3.6]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "A resposta 3.6 cm é o segmento da hipotenusa junto ao cateto a, não um lado perpendicular nem uma área. Uma verificação rápida fecha o ciclo: [[a^2 = 6^2 = 36]] e [[c \\times p = 10 \\times 3.6 = 36]], por isso os dois lados do teorema concordam.",
            },
            {
              "kind": "p",
              "text": "Para referência, a outra projeção é [[q = 10 - 3.6 = 6.4]] cm, o cateto b é [[b = \\sqrt{10 \\times 6.4} = 8]] cm e a altura é [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, confirmando o conhecido triângulo retângulo 6-8-10.",
            },
          ],
          "h2": "Exemplo Passo a Passo de Como Encontrar a Projeção P",
          "image": {
            "alt": "Triângulo retângulo com cateto a de 6 cm e hipotenusa de 10 cm, resolvido para dar projeção p igual a 3.6 cm",
            "caption": "Exemplo resolvido: a = 6 cm e c = 10 cm dão p = 36 dividido por 10 = 3.6 cm.",
            "src": "projection-p-example-a6-c10.svg",
          },
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Quatro verificações independentes detectam quase todos os erros. Aplique pelo menos uma a cada resposta, e as quatro quando o problema importa. O exemplo abaixo usa [[a = 6]] cm, [[c = 10]] cm e [[p = 3.6]] cm do início ao fim.",
            },
            {
              "kind": "h3",
              "text": "Método 1: Verificação pelo Teorema da Projeção",
            },
            {
              "kind": "p",
              "text": "Verifique [[p = \\frac{a^2}{c}]] diretamente. Aqui [[\\frac{6^2}{10} = \\frac{36}{10} = 3.6]] cm, que corresponde à resposta. Se o recálculo diferir, ou o quadrado ou a divisão saiu errado.",
            },
            {
              "kind": "h3",
              "text": "Método 2: Adição de Segmentos",
            },
            {
              "kind": "p",
              "text": "Encontre q por subtração: [[q = 10 - 3.6 = 6.4]] cm. Depois verifique [[p + q = 3.6 + 6.4 = 10]] cm, que é igual a c. Uma soma que não bate com c indica um erro de subtração.",
            },
            {
              "kind": "h3",
              "text": "Método 3: Verificação pelo Teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Calcule o cateto b a partir de q: [[b = \\sqrt{10 \\times 6.4} = 8]] cm. Depois verifique [[a^2 + b^2 = 36 + 64 = 100 = 10^2]]. Esta verificação testa o triângulo inteiro, por isso detecta erros de rotulagem que a primeira verificação pode deixar passar. A <a href=\"/right-triangle-leg-b-from-projection-calculator/\">calculadora de cateto b a partir da projeção</a> executa diretamente o passo de b.",
            },
            {
              "kind": "h3",
              "text": "Método 4: Razoabilidade Geométrica",
            },
            {
              "kind": "p",
              "text": "Confirme que p é positivo, menor que c, está na unidade correta e é um segmento da hipotenusa, não um lado perpendicular. Aqui 3.6 cm é positivo, menor que 10 cm, está em centímetros e é bem mais curto que o cateto a, de 6 cm.",
            },
          ],
          "h2": "Como Verificar o Seu Cálculo da Projeção P",
        },
        "sec-what-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Trace a altura a partir do vértice do ângulo reto C perpendicular à hipotenusa AB. Ela encontra a hipotenusa em um ponto chamado pé, rotulado D, e a divide em dois segmentos adjacentes: AD é a projeção p e DB é a projeção q.",
            },
            {
              "kind": "p",
              "text": "A projeção p pertence ao cateto a porque fica junto ao vértice A, o mesmo vértice onde o cateto a começa. No triângulo pequeno ACD, o cateto a é a hipotenusa e p é um dos seus catetos, que é a ligação geométrica que faz o teorema da projeção funcionar. A projeção q, pelo mesmo raciocínio, pertence ao cateto b, que toca o vértice B.",
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
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Com [[c = 10]] cm e [[p = 3.6]] cm, a outra projeção é [[q = 10 - 3.6 = 6.4]] cm.",
            },
            {
              "kind": "p",
              "text": "A projeção p não é igual ao cateto a. O cateto a é o lado AC, um dos lados que formam o ângulo reto, enquanto p é o segmento AD ao longo da hipotenusa. No triângulo 6-8-10, o cateto a mede 6 cm e a projeção p mede apenas 3.6 cm.",
            },
          ],
          "h2": "O Que É a Projeção P em um Triângulo Retângulo?",
        },
        "sec-why-squared": {
          "blocks": [
            {
              "kind": "p",
              "text": "O quadrado está lá porque o teorema da projeção é uma afirmação sobre um cateto ao quadrado: ele diz que o quadrado do cateto a é igual ao produto de c por p, [[a^2 = c \\times p]], e a fórmula de p é o que se obtém ao dividir os dois lados por c.",
            },
            {
              "kind": "p",
              "text": "A razão remonta aos triângulos semelhantes. No triângulo ACD, o cateto a desempenha o papel de hipotenusa, enquanto p é um dos seus catetos. Comparar o triângulo pequeno com o triângulo inteiro dá a proporção [[\\frac{p}{a} = \\frac{a}{c}]], e o cateto a aparece duas vezes, uma em cada razão. A multiplicação cruzada coloca a nos dois lados, que é exatamente por que o quadrado aparece.",
            },
            {
              "kind": "p",
              "text": "A relação de média geométrica diz a mesma coisa em outras palavras: o cateto a é a média geométrica da hipotenusa c e da sua projeção p, ou seja, [[a = \\sqrt{c \\times p}]]. Elevar os dois lados ao quadrado dá [[a^2 = c \\times p]], e dividir por c isola p.",
            },
            {
              "kind": "p",
              "text": "A divisão é o passo que isola p. A multiplicação no teorema liga p a c, e dividir por c desfaz essa ligação. Sem o quadrado, a fórmula misturaria um comprimento com uma área, e as unidades não funcionariam.",
            },
          ],
          "h2": "Por Que o Cateto A É Elevado ao Quadrado na Fórmula da Projeção?",
        },
      },
      "tocHeading": "Conteúdo do Guia",
      "tocItems": {
        "sec-applications": "Aplicações Práticas dos Cálculos de Projeção de Triângulo Retângulo",
        "sec-calculate": "Calcular a Projeção P de Triângulo Retângulo",
        "sec-diagram": "Diagrama da Projeção P de Triângulo Retângulo Explicado",
        "sec-examples": "Exemplos Resolvidos de Cálculo da Projeção P",
        "sec-faq": "Perguntas Frequentes",
        "sec-formula": "Fórmula da Projeção P de Triângulo Retângulo",
        "sec-how-to-use": "Como Usar a Calculadora de Projeção P de Triângulo Retângulo",
        "sec-intro": "Calculadora de Projeção P de Triângulo Retângulo",
        "sec-leg-a-hypotenuse": "Entendendo o Cateto A e a Hipotenusa",
        "sec-mistakes": "Erros Comuns ao Calcular a Projeção P",
        "sec-practice": "Problemas de Prática com Respostas",
        "sec-projection-q": "Como Calcular a Projeção Q a Partir do Outro Cateto",
        "sec-proof": "Por Que a Fórmula da Projeção P Funciona?",
        "sec-properties": "Propriedades Importantes da Projeção P",
        "sec-pythagoras": "Relação Entre a Projeção P e o Teorema de Pitágoras",
        "sec-related": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
        "sec-relationship-altitude": "Relação Entre a Projeção P e a Altura",
        "sec-relationship-leg-a": "Relação Entre a Projeção P e o Cateto A",
        "sec-relationship-pq": "Relação Entre a Projeção P e a Projeção Q",
        "sec-step-example": "Exemplo Passo a Passo de Como Encontrar a Projeção P",
        "sec-verify": "Como Verificar o Seu Cálculo da Projeção P",
        "sec-what-projection-p": "O Que É a Projeção P em um Triângulo Retângulo?",
        "sec-why-squared": "Por Que o Cateto A É Elevado ao Quadrado na Fórmula da Projeção?",
      },
    },
};
