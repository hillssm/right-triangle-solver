// legAFromProjectionGuideTranslations.bpt.ts: Right Triangle Leg A From Projection
// Guide (Page 31 of 45) translation.
export const LAP_B3_PT = {
  "pt": {
      "faqHeading": "Perguntas Frequentes",
      "faqs": [
        {
          "answer": "A fórmula é [[a = \\sqrt{c \\times p}]], em que c é a hipotenusa completa e p é a projeção que pertence ao cateto a. Por exemplo, [[c = 10]] cm e [[p = 3.6]] cm dão [[a = 6]] cm.",
          "question": "Qual é a fórmula para encontrar o cateto a a partir da projeção p?",
        },
        {
          "answer": "A multiplicação vem de triângulos semelhantes. O triângulo ACD é semelhante ao triângulo ABC, o que dá [[p / a = a / c]], e multiplicar em cruz dá [[a^2 = c \\times p]]. O produto é o quadrado do cateto, não o próprio cateto.",
          "question": "Por que multiplicamos c por p?",
        },
        {
          "answer": "Porque o produto cp é igual a a ao quadrado, não a a. A raiz quadrada desfaz o quadrado e devolve um comprimento comum. Sem ela, você informaria 36 em vez de 6 no exemplo com c = 10 e p = 3.6.",
          "question": "Por que é necessária uma raiz quadrada?",
        },
        {
          "answer": "A projeção p é o segmento da hipotenusa junto ao vértice A, criado quando a altura traçada a partir do ângulo reto encontra a hipotenusa. No triângulo ABC com altura CD, [[p = AD]], e ela fica ao longo da hipotenusa.",
          "question": "O que representa a projeção p?",
        },
        {
          "answer": "Não. O cateto a é o lado AC, um dos lados que formam o ângulo reto, enquanto a projeção p é o segmento AD ao longo da hipotenusa. São comprimentos diferentes em posições diferentes, ligados apenas por [[a^2 = c \\times p]].",
          "question": "A projeção p é a mesma coisa que o cateto a?",
        },
        {
          "answer": "Não diretamente. A projeção q combina com o cateto b, por isso inserir q devolve o cateto b. Para encontrar o cateto a a partir de q, primeiro recupere p com [[p = c - q]] e depois use [[a = \\sqrt{c \\times p}]].",
          "question": "Posso usar a projeção q para encontrar o cateto a?",
        },
        {
          "answer": "Subtraia-a da hipotenusa: [[p = c - q]]. Com [[c = 25]] cm e [[q = 16]] cm, [[p = 9]] cm, e então [[a = \\sqrt{25 \\times 9} = 15]] cm.",
          "question": "E se eu conhecer apenas a projeção q?",
        },
        {
          "answer": "Não. A projeção p é apenas parte da hipotenusa, por isso deve ser menor que c. Se p fosse igual a c, q seria zero e o triângulo seria degenerado, em vez de um triângulo retângulo genuíno.",
          "question": "A projeção p pode ser igual à hipotenusa?",
        },
        {
          "answer": "Eleve a resposta ao quadrado e confira se ela é igual a [[c \\times p]]. Você também pode encontrar o cateto b a partir de q e conferir [[a^2 + b^2 = c^2]], e confirmar que p é menor que c e que o cateto a é mais curto que a hipotenusa.",
          "question": "Como verifico o cateto calculado?",
        },
        {
          "answer": "A altura cai no ponto médio da hipotenusa, e os dois catetos são iguais, por isso o triângulo é um triângulo retângulo isósceles. Com [[c = 20]] cm e [[p = q = 10]] cm, os dois catetos são iguais a [[10\\sqrt{2}]] cm, cerca de 14.142 cm.",
          "question": "O que acontece quando p e q são iguais?",
        },
        {
          "answer": "Sim, com a fórmula espelhada [[b = \\sqrt{c \\times q}]]. O cateto b combina com a projeção q, assim como o cateto a combina com p. A <a href=\"/right-triangle-leg-b-from-projection-calculator/\">calculadora de cateto b a partir da projeção</a> foi feita para esse cálculo.",
          "question": "Posso encontrar o cateto b usando o mesmo teorema?",
        },
        {
          "answer": "Sim. Somar as duas fórmulas de projeção dá [[a^2 + b^2 = c \\times p + c \\times q = c(p + q) = c^2]], já que [[p + q = c]]. O teorema da projeção divide a relação de Pitágoras em uma parte por cateto.",
          "question": "O teorema da projeção está relacionado com o teorema de Pitágoras?",
        },
      ],
      "relatedHeading": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
      "relatedIntro": "Escolha a próxima ferramenta pelos valores que você já conhece, pois cada calculadora abaixo trata de uma tarefa específica com triângulos retângulos.",
      "relatedItems": [
        "Calculadora de Projeção do Triângulo Retângulo",
        "Calculadora de Projeção P do Triângulo Retângulo",
        "Calculadora de Projeção Q do Triângulo Retângulo",
        "Calculadora de Cateto B a Partir da Projeção do Triângulo Retângulo",
        "Calculadora de Hipotenusa a Partir das Projeções do Triângulo Retângulo",
        "Calculadora de Altura a Partir das Projeções do Triângulo Retângulo",
        "Calculadora de Lados do Triângulo Retângulo",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Esta calculadora encontra o cateto a de um triângulo retângulo quando você conhece a hipotenusa completa c e a projeção p que pertence ao cateto a. Você insere esses dois comprimentos, e ela devolve o comprimento real do lado do cateto a, não um valor ao quadrado nem um segmento de projeção. A fórmula é [[a = \\sqrt{c \\times p}]], em que c é a hipotenusa completa e p é o segmento da hipotenusa junto ao cateto a.",
            },
            {
              "kind": "p",
              "text": "Por exemplo, se [[c = 10]] cm e [[p = 3.6]] cm, então [[a = \\sqrt{10 \\times 3.6} = \\sqrt{36} = 6]] cm. O produto 36 é apenas um passo intermediário. Extrair a raiz quadrada transforma-o de volta em um comprimento, e esse comprimento é o lado que você procura.",
            },
            {
              "kind": "p",
              "text": "A calculadora fica no topo desta página, seguida pela fórmula, por um diagrama com rótulos, por uma demonstração do teorema da projeção, por exemplos resolvidos e por verificações que você pode aplicar a qualquer resposta. O guia serve a alunos do ensino fundamental e médio, professores, tutores e pais que ajudam com lições de geometria.",
            },
          ],
          "h2": "Calculadora de Cateto A a Partir da Projeção do Triângulo Retângulo",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "A calculadora tem dois campos de entrada. O primeiro recebe a hipotenusa c, o lado completo oposto ao ângulo reto. O segundo recebe a projeção p, o segmento da hipotenusa que pertence ao cateto a. Os dois comprimentos devem usar a mesma unidade, por isso converta primeiro se uma medida estiver em centímetros e a outra em metros.",
            },
            {
              "kind": "p",
              "text": "A projeção p deve ser menor que c. Essa regra faz parte da geometria: p é apenas parte da hipotenusa, por isso nunca pode ser igual a todo o lado nem maior que ele. Se o seu valor de p for maior que c, você provavelmente inseriu um cateto, a altura ou a projeção errada.",
            },
            {
              "kind": "p",
              "text": "Clique em Calcular Cateto a para ver o resultado e use Redefinir para limpar os dois campos antes de um novo problema. O resultado é um comprimento na unidade que você inseriu, por isso uma hipotenusa de 10 cm e uma projeção de 3.6 cm devolvem 6 cm, sem nenhum passo extra de conversão.",
            },
          ],
          "h2": "Calcular o Cateto A do Triângulo Retângulo a Partir da Projeção",
        },
        "sec-what-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem dois lados perpendiculares, chamados catetos, e um lado mais longo, chamado hipotenusa. Os dois catetos se encontram no ângulo reto, e a hipotenusa fica oposta a esse ângulo. Neste guia, o triângulo é ABC, com o ângulo reto em C, o cateto a é o lado AC, o cateto b é o lado BC e a hipotenusa c é o lado AB.",
            },
            {
              "kind": "p",
              "text": "O cateto a é um dos dois lados que formam o ângulo reto, por isso é um lado genuíno do triângulo. Não é um segmento traçado dentro do triângulo, nem é a projeção p. A projeção p fica deitada ao longo da hipotenusa, enquanto o cateto a vai do vértice A até o vértice do ângulo reto C. Manter esses dois papéis separados é o primeiro passo para usar a fórmula corretamente.",
            },
            {
              "kind": "p",
              "text": "O cateto a difere do cateto b apenas pela posição: o cateto a toca o vértice A, e o cateto b toca o vértice B. Cada cateto tem a sua própria projeção, e é por isso que a fórmula de a usa p, enquanto a fórmula de b usa q, um emparelhamento fixado pela rotulagem.",
            },
            {
              "kind": "p",
              "text": "Em qualquer triângulo retângulo não degenerado, o cateto a é mais curto que a hipotenusa. Isso dá uma verificação rápida de sentido para cada resposta: se o cateto a calculado sair maior que c, algo deu errado nas entradas ou na aritmética, e os rótulos do diagrama são o primeiro lugar a conferir.",
            },
          ],
          "h2": "O Que É o Cateto A em um Triângulo Retângulo?",
        },
        "sec-what-projection-p": {
          "blocks": [
            {
              "kind": "p",
              "text": "Trace a altura a partir do vértice do ângulo reto C, perpendicular à hipotenusa AB. Ela encontra a hipotenusa em um ponto chamado pé, rotulado D. Esse ponto divide a hipotenusa em dois segmentos adjacentes, e esses segmentos são as projeções. O segmento AD é a projeção p, e o segmento DB é a projeção q.",
            },
            {
              "kind": "p",
              "text": "A projeção p pertence ao cateto a porque fica junto ao vértice A, o mesmo vértice em que o cateto a começa. No triângulo pequeno ACD, o cateto a é a hipotenusa e p é um de seus catetos, e essa é a ligação geométrica que faz o teorema da projeção funcionar. A projeção q, pelo mesmo raciocínio, pertence ao cateto b, que toca o vértice B.",
            },
            {
              "kind": "p",
              "text": "As projeções são comprimentos ao longo da hipotenusa, medidos na mesma unidade que os outros lados. Elas não são perpendiculares a nada, e não são lados do triângulo original. Uma projeção pode ser imaginada como a sombra que um cateto projeta sobre a hipotenusa quando a altura desce diretamente até ela.",
            },
            {
              "kind": "p",
              "text": "Como p e q são as duas partes de um único lado reto, elas somam a hipotenusa completa:",
            },
            {
              "kind": "p",
              "text": "[[[c = p + q]]]",
            },
            {
              "kind": "p",
              "text": "Essa soma é útil por si só. Se você conhece c e uma projeção, pode encontrar a outra por subtração, um passo que a seção posterior sobre a outra projeção desenvolve por completo.",
            },
          ],
          "h2": "O Que É a Projeção P em um Triângulo Retângulo?",
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
              "text": "Extrair a raiz quadrada positiva dos dois lados dá a fórmula de trabalho desta página:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "O cálculo corre em dois estágios distintos. O estágio 1 multiplica a hipotenusa pela projeção, e o resultado é um comprimento ao quadrado, não um lado. O estágio 2 extrai a raiz quadrada positiva, que converte esse comprimento ao quadrado de volta em um comprimento comum. Pular o estágio 2 é o erro mais comum com esta fórmula, e a próxima seção explica por que a raiz quadrada não pode ser omitida.",
            },
            {
              "kind": "p",
              "text": "As unidades exigem cuidado nos dois estágios. Se c e p estiverem ambos em centímetros, o produto deles estará em centímetros quadrados, e a raiz quadrada devolve centímetros. Misturar unidades, como metros para c e centímetros para p, dá um produto sem sentido, por isso converta para uma única unidade antes de multiplicar. Usa-se a raiz positiva porque o comprimento de um lado é sempre positivo.",
            },
            {
              "kind": "p",
              "text": "Um pequeno exemplo numérico mostra os dois estágios em ação. Com [[c = 10]] cm e [[p = 3.6]] cm, o estágio 1 dá [[10 \\times 3.6 = 36]], e o estágio 2 dá [[a = \\sqrt{36} = 6]] cm. O número 36, sozinho, não responde a nenhuma pergunta. Só depois da raiz quadrada ele se torna o comprimento do cateto.",
            },
          ],
          "h2": "Fórmula do Cateto A do Triângulo Retângulo a Partir da Projeção",
          "image": {
            "alt": "Triângulo retângulo ABC com altura CD, mostrando que o cateto a ao quadrado é igual à hipotenusa c multiplicada pela projeção p",
            "caption": "O teorema da projeção: a ao quadrado é igual a c vezes p, por isso a é igual à raiz quadrada de c vezes p.",
            "src": "leg-a-projection-theorem.svg",
          },
        },
        "sec-why-sqrt": {
          "blocks": [
            {
              "kind": "p",
              "text": "A raiz quadrada está lá porque a multiplicação produz uma quantidade ao quadrado. O teorema não diz que o cateto a é igual ao produto de c por p. Ele diz que o quadrado do cateto a é igual a esse produto. Desfazer um quadrado exige uma raiz quadrada, assim como desfazer uma duplicação exige dividir pela metade.",
            },
            {
              "kind": "p",
              "text": "Tome [[c = 10]] e [[p = 3.6]]. O produto deles é 36, que é [[a^2]], o quadrado do cateto. O próprio cateto é o número que, multiplicado por si mesmo, dá 36, ou seja, 6. Escrever [[a = 36]] afirmaria um lado de 36 unidades em um triângulo cuja hipotenusa é de apenas 10, o que é claramente impossível.",
            },
            {
              "kind": "p",
              "text": "A tabela abaixo mantém as três quantidades separadas, já que confundi-las causa a maioria dos erros com esta fórmula.",
            },
          ],
          "h2": "Por Que Há uma Raiz Quadrada na Fórmula?",
          "table": {
            "headers": [
              "Quantidade",
              "Significado",
              "Exemplo com c = 10, p = 3.6",
            ],
            "rows": [
              [
                "a",
                "O próprio comprimento do cateto",
                "6",
              ],
              [
                "a ao quadrado",
                "O comprimento do cateto multiplicado por si mesmo",
                "36",
              ],
              [
                "c vezes p",
                "O produto que o teorema iguala a a ao quadrado",
                "36",
              ],
              [
                "Raiz quadrada de cp",
                "O passo que recupera a a partir de a ao quadrado",
                "6",
              ],
            ],
          },
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dez passos curtos levam você de um diagrama com rótulos a uma resposta verificada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifique o triângulo retângulo do seu problema e confirme que ele tem um ângulo reto.",
                "Encontre a altura traçada a partir do ângulo reto e marque onde ela encontra a hipotenusa.",
                "Identifique a hipotenusa completa c, o lado oposto ao ângulo reto.",
                "Identifique a projeção p, o segmento da hipotenusa junto ao vértice A, onde o cateto a começa.",
                "Confira se p é menor que c. Se não for, rotule o diagrama novamente antes de continuar.",
                "Converta c e p para a mesma unidade, caso tenham sido dados em unidades diferentes.",
                "Insira c no campo Hipotenusa c.",
                "Insira p no campo Projeção p. Não insira q aqui, pois isso devolveria o cateto b.",
                "Clique em Calcular Cateto a e leia o resultado.",
                "Use Redefinir antes de começar um novo problema.",
              ],
            },
            {
              "kind": "p",
              "text": "A calculadora não aceita q, por isso um problema que dê apenas q precisa de um passo extra de subtração, tratado abaixo. Inserir q no campo p ainda produz um número, mas será o cateto errado, por isso a verificação de rótulo do passo 4 é a mais importante.",
            },
          ],
          "h2": "Como Usar a Calculadora de Cateto A do Triângulo Retângulo",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Use [[c = 10]] cm e [[p = 3.6]] cm. Os quatro passos abaixo mostram toda a resolução, sem pular nada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Escreva a fórmula: a = sqrt(cp).",
                "Substitua os valores: a = sqrt(10 x 3.6).",
                "Multiplique dentro da raiz: a = sqrt(36).",
                "Extraia a raiz quadrada: a = 6 cm.",
              ],
            },
            {
              "kind": "p",
              "text": "A resposta 6 cm é o lado perpendicular real AC, não uma projeção nem uma área. Uma breve verificação fecha o raciocínio: [[a^2 = 6^2 = 36]] e [[c \\times p = 10 \\times 3.6 = 36]], por isso os dois lados do teorema concordam.",
            },
            {
              "kind": "p",
              "text": "Para referência, a outra projeção é [[q = 10 - 3.6 = 6.4]] cm, o cateto b é [[b = \\sqrt{10 \\times 6.4} = 8]] cm, e a altura é [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, confirmando o conhecido triângulo retângulo 6-8-10.",
            },
          ],
          "h2": "Exemplo Passo a Passo de Como Encontrar o Cateto A",
          "image": {
            "alt": "Triângulo retângulo com hipotenusa de 10 cm e projeção de 3.6 cm, resolvido para dar o cateto a igual a 6 cm",
            "caption": "Exemplo resolvido: c = 10 cm e p = 3.6 cm dão a = sqrt(36) = 6 cm.",
            "src": "leg-a-example-c10-p36.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "O diagrama principal mostra o triângulo ABC com o ângulo reto em C. O lado AC é o cateto a, o lado BC é o cateto b, e o lado AB é a hipotenusa c. A altura CD desce de C, perpendicular a AB, e a toca em D, e o marcador de ângulo reto em D confirma que CD é verdadeiramente perpendicular.",
            },
            {
              "kind": "p",
              "text": "O ponto D divide a hipotenusa em duas partes: o segmento AD é a projeção p e o segmento DB é a projeção q. O cateto a e a projeção p estão destacados porque são o par de que trata esta página. Percorra o diagrama nesta ordem para fixar os rótulos: comece em A, siga ao longo do cateto a até C, depois ao longo do cateto b até B, e volte ao longo da hipotenusa de B até A, parando em D para ver a divisão em q e p.",
            },
            {
              "kind": "p",
              "text": "O emparelhamento de a com p fica visível no triângulo pequeno ACD, em que o cateto a é a hipotenusa e p é o lado situado ao longo da hipotenusa maior. Como o triângulo ACD é semelhante ao triângulo ABC, a razão de p para a no triângulo pequeno é igual à razão de a para c no triângulo maior, o que a seção da demonstração transforma em [[a^2 = cp]].",
            },
          ],
          "h2": "Diagrama do Cateto A do Triângulo Retângulo a Partir da Projeção Explicado",
          "image": {
            "alt": "Triângulo retângulo ABC com ângulo reto em C, altura CD até a hipotenusa AB, cateto a e projeção p destacados, com os catetos a e b, a hipotenusa c, as projeções p e q e a altura h rotulados",
            "caption": "Triângulo principal ABC: a altura CD divide a hipotenusa AB na projeção p (AD) e na projeção q (DB), com o cateto a (AC) destacado.",
            "src": "leg-a-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "A demonstração baseia-se em triângulos semelhantes. Traçar a altura CD divide o triângulo ABC em dois triângulos retângulos menores, ACD e CBD, e ambos são semelhantes ao triângulo original. Semelhança significa que seus lados correspondentes mantêm a mesma razão, e uma dessas razões dá o teorema da projeção diretamente.",
            },
            {
              "kind": "p",
              "text": "Concentre-se no triângulo ACD e no triângulo inteiro ABC. Ambos contêm o ângulo em A, e ambos contêm um ângulo reto, por isso seus terceiros ângulos também devem coincidir. Igualar os lados que ocupam as mesmas posições dá a proporção:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{AD}{AC} = \\frac{AC}{AB}]]]",
            },
            {
              "kind": "p",
              "text": "Agora substitua os símbolos usuais: [[AD = p]], [[AC = a]] e [[AB = c]]. A proporção fica:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{a} = \\frac{a}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplicar em cruz elimina as frações. O numerador esquerdo vezes o denominador direito é igual ao numerador direito vezes o denominador esquerdo, por isso [[p \\times c = a \\times a]], ou seja:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Extrair a raiz quadrada positiva dos dois lados conclui a demonstração, dando [[a = \\sqrt{c \\times p}]]. O mesmo argumento aplicado ao outro triângulo pequeno, CBD, dá [[b^2 = c \\times q]]. A semelhança faz todo o trabalho: lados correspondentes de triângulos semelhantes mantêm-se proporcionais.",
            },
          ],
          "h2": "Por Que o Teorema da Projeção Funciona?",
          "image": {
            "alt": "Triângulo retângulo original ABC ao lado dos triângulos menores semelhantes ACD e CBD, mostrando a proporção p sobre a igual a a sobre c",
            "caption": "Demonstração por triângulos semelhantes: p sobre a é igual a a sobre c, por isso multiplicar em cruz dá a ao quadrado igual a c vezes p.",
            "src": "leg-a-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada exemplo apresenta os valores dados, a substituição e a resposta final. O comentário é breve para que a aritmética fique visível, e cada exemplo mantém suas unidades consistentes do início ao fim.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 1: Números Inteiros Básicos",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 10]] cm e [[p = 4]] cm, a fórmula dá [[a = \\sqrt{10 \\times 4} = \\sqrt{40}]], por isso [[a \\approx 6.325]] cm. O produto 40 não é um quadrado perfeito, por isso a resposta fica como uma aproximação arredondada para três casas decimais. Observe que 6.325 cm é mais curto que a hipotenusa de 10 cm, como deve ser.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 2: Resultado com Quadrado Perfeito",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 10]] cm e [[p = 3.6]] cm, [[a = \\sqrt{10 \\times 3.6} = \\sqrt{36} = 6]] cm. Quando o produto é um quadrado perfeito, a resposta é exata, sem necessidade de arredondamento. Este é o mesmo triângulo do exemplo passo a passo, e seu outro cateto é 8 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 3: Triângulo Maior",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 25]] m e [[p = 9]] m, [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] m. Números maiores não mudam nada no método: multiplique e depois extraia a raiz. A outra projeção aqui é 16 m, que combina com um cateto de 20 m, formando o clássico triângulo 15-20-25.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 4: Medidas Decimais",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 12.5]] cm e [[p = 3.2]] cm, [[a = \\sqrt{12.5 \\times 3.2} = \\sqrt{40}]], por isso [[a \\approx 6.325]] cm. Isso coincide com o Exemplo 1 em valor porque os dois produtos são iguais a 40, um lembrete útil de que entradas diferentes podem ter o mesmo produto. Mantenha o produto completo dentro da raiz até o passo final de arredondamento.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 5: Projeções Iguais na Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 20]] cm e [[p = 10]] cm, [[a = \\sqrt{20 \\times 10} = \\sqrt{200} = 10\\sqrt{2}]] cm, por isso [[a \\approx 14.142]] cm. Projeções iguais significam que a altura atinge o ponto médio da hipotenusa, o que acontece exatamente quando os dois catetos são iguais. O triângulo é, portanto, um triângulo retângulo isósceles, e o cateto b é igual ao cateto a.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 6: Medidas Pequenas",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 8]] mm e [[p = 2]] mm, [[a = \\sqrt{8 \\times 2} = \\sqrt{16} = 4]] mm. Unidades pequenas funcionam exatamente como as grandes, e a resposta permanece em milímetros porque as duas entradas estavam em milímetros. Reduzir a escala de um problema nunca muda os passos.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 7: Unidades Diferentes",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 0.5]] m e [[p = 20]] cm, converta primeiro: 0.5 m é igual a 50 cm. Então [[a = \\sqrt{50 \\times 20} = \\sqrt{1000}]], por isso [[a \\approx 31.623]] cm. Multiplicar 0.5 por 20 sem converter teria dado uma raiz de 10, uma resposta errada sem nenhuma unidade válida por trás dela.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 8: Medidas Fracionárias",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 16]] ft e [[p = 4]] ft, [[a = \\sqrt{16 \\times 4} = \\sqrt{64} = 8]] ft. O produto 64 é um quadrado perfeito, por isso a resposta é exata. Uma rápida verificação de sentido passa: 8 ft é metade da hipotenusa, e o outro cateto resulta em cerca de 13.856 ft, que é maior que a, mas ainda menor que 16 ft.",
            },
          ],
          "h2": "Exemplos Resolvidos de Como Encontrar o Cateto A a Partir da Projeção",
        },
        "sec-other-projection": {
          "blocks": [
            {
              "kind": "p",
              "text": "Alguns problemas dão q em vez de p. A calculadora desta página não aceita q, mas isso é apenas um desvio de um passo, não um beco sem saída. Como as duas projeções somam a hipotenusa, subtraia para recuperar p primeiro:",
            },
            {
              "kind": "p",
              "text": "[[[p = c - q]]]",
            },
            {
              "kind": "p",
              "text": "Tome [[c = 25]] cm e [[q = 16]] cm. Subtrair dá [[p = 25 - 16 = 9]] cm. Agora a fórmula comum se aplica: [[a = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Se você tivesse inserido 16 diretamente como p, a calculadora teria devolvido 20 cm, que é o cateto b, não o cateto a.",
            },
            {
              "kind": "p",
              "text": "A <a href=\"/right-triangle-projection-q-calculator/\">calculadora de projeção q</a> pode ajudar quando for preciso encontrar o próprio q, e a <a href=\"/right-triangle-projection-p-calculator/\">calculadora de projeção p</a> cobre o passo inverso. De qualquer forma, a regra permanece a mesma: encontre p primeiro e depois use [[a = \\sqrt{c \\times p}]].",
            },
          ],
          "h2": "Como Encontrar o Cateto A Quando a Outra Projeção É Conhecida",
        },
        "sec-relationship": {
          "blocks": [
            {
              "kind": "p",
              "text": "Um teorema liga três quantidades, por isso rearranjá-lo encontra qualquer uma que esteja faltando. As três formas são:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "A tabela abaixo mostra cada rearranjo, o que ele encontra e o que deve ser conhecido primeiro.",
            },
          ],
          "h2": "Relação Entre o Cateto A, a Hipotenusa e a Projeção P",
          "table": {
            "headers": [
              "Quantidade Desconhecida",
              "Fórmula",
              "Valores Conhecidos Necessários",
            ],
            "rows": [
              [
                "Cateto a",
                "a = sqrt(cp)",
                "Hipotenusa c e projeção p",
              ],
              [
                "Hipotenusa c",
                "c = a ao quadrado / p",
                "Cateto a e projeção p",
              ],
              [
                "Projeção p",
                "p = a ao quadrado / c",
                "Cateto a e hipotenusa c",
              ],
            ],
          },
        },
        "sec-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "O cateto b segue a imagem espelhada da fórmula do cateto a. Onde o cateto a combina com a projeção p, o cateto b combina com a projeção q:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Use um único triângulo consistente para ver os dois catetos juntos: [[c = 25]], [[p = 9]] e [[q = 16]]. Então [[a = \\sqrt{25 \\times 9} = 15]] e [[b = \\sqrt{25 \\times 16} = 20]]. Os dois catetos compartilham a mesma hipotenusa, mas usam projeções diferentes, e é por isso que identificar p e q corretamente decide qual cateto você obtém.",
            },
            {
              "kind": "p",
              "text": "Os catetos também se limitam mutuamente pelo teorema de Pitágoras, tratado duas seções abaixo: conhecer um cateto e a hipotenusa determina o outro. Para problemas que começam por q e não por p, a <a href=\"/right-triangle-leg-b-from-projection-calculator/\">calculadora de cateto b a partir da projeção</a> aplica o mesmo método com o outro emparelhamento.",
            },
          ],
          "h2": "Relação Entre o Cateto A e o Cateto B",
          "image": {
            "alt": "Triângulo retângulo comparando a projeção p emparelhada com o cateto a com a projeção q emparelhada com o cateto b, com c igual a 25, p igual a 9 e q igual a 16",
            "caption": "Emparelhamento correto: a usa p (sqrt(25 x 9) = 15) e b usa q (sqrt(25 x 16) = 20).",
            "src": "leg-a-p-vs-q.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "O teorema da projeção e o teorema de Pitágoras concordam exatamente, e a álgebra mostra por quê. Comece pelas duas fórmulas de projeção:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 = c \\times p]]]",
            },
            {
              "kind": "p",
              "text": "Some a fórmula correspondente para o cateto b, [[b^2 = c \\times q]], para obter:",
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
              "text": "Uma verificação numérica com o triângulo 9-16-25 confirma isso: [[a^2 + b^2 = 225 + 400 = 625]] e [[c^2 = 25^2 = 625]]. Os dois teoremas não são rivais. O teorema da projeção divide a relação de Pitágoras em uma parte por cateto, e somar as partes a reconstrói.",
            },
          ],
          "h2": "Relação Entre a Projeção P e o Teorema de Pitágoras",
        },
        "sec-verify": {
          "blocks": [
            {
              "kind": "p",
              "text": "Três verificações independentes detectam quase todos os erros. Aplique pelo menos uma delas a cada resposta, e aplique as três quando o problema for importante.",
            },
            {
              "kind": "h3",
              "text": "Método 1: Verificação pelo Teorema da Projeção",
            },
            {
              "kind": "p",
              "text": "Eleve sua resposta ao quadrado e compare-a com o produto de c por p. Para [[c = 25]], [[p = 9]] e [[a = 15]]: [[a^2 = 225]] e [[c \\times p = 225]], por isso a resposta passa. Se os dois números diferirem, as entradas ou o passo da raiz quadrada deram errado.",
            },
            {
              "kind": "h3",
              "text": "Método 2: Verificação pelo Teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Encontre o cateto b a partir de q e depois confira [[a^2 + b^2 = c^2]]. Com [[p = 9]], [[q = 16]] e [[c = 25]]: [[a = 15]], [[b = 20]] e [[225 + 400 = 625 = 25^2]]. Esta verificação vai além da calculadora, pois testa o triângulo inteiro, não apenas uma fórmula.",
            },
            {
              "kind": "h3",
              "text": "Método 3: Verificações de Tamanho e de Soma",
            },
            {
              "kind": "p",
              "text": "Confirme que p é menor que c, que [[p + q = c]] quando q é conhecido, e que o cateto a é mais curto que a hipotenusa. No exemplo, 9 é menor que 25, [[9 + 16 = 25]], e 15 é mais curto que 25. Qualquer falha aqui aponta para um erro de rotulagem, não para um deslize aritmético.",
            },
          ],
          "h2": "Como Verificar o Cateto A Calculado",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Oito propriedades decorrem diretamente de [[a = \\sqrt{c \\times p}]] e da geometria por trás dela. Cada uma serve também como verificação de sentido para uma nova resposta.",
            },
            {
              "items": [
                "O cateto a é sempre mais curto que a hipotenusa em um triângulo retângulo não degenerado, pois p é apenas parte de c.",
                "A projeção p é sempre menor que c, e é sempre positiva. Projeções zero ou negativas não descrevem nenhum triângulo real.",
                "Aumentar p mantendo c fixo aumenta a, porque o produto dentro da raiz cresce.",
                "Aumentar c mantendo p fixo aumenta a matematicamente, desde que os novos valores ainda descrevam um triângulo real com p menor que c.",
                "Trocar p por q muda qual cateto é calculado: p dá o cateto a e q dá o cateto b.",
                "Projeções iguais produzem catetos iguais. Com c = 20 e p = q = 10, os dois catetos são iguais a 10 vezes a raiz quadrada de 2, cerca de 14.142.",
                "O resultado é um comprimento, não uma área. O produto ao quadrado é apenas um passo intermediário, e a raiz quadrada restaura as unidades comuns de comprimento.",
                "Multiplicar todas as medidas pelo mesmo fator multiplica o cateto a por esse fator. Dobrar c e p dobra a, pois o produto quadruplica e sua raiz dobra.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Quando a altura cai exatamente no ponto médio da hipotenusa, o triângulo é isósceles, e os dois catetos devem coincidir, como mostra o diagrama abaixo.",
            },
          ],
          "h2": "Propriedades Importantes do Cateto A a Partir da Projeção",
          "image": {
            "alt": "Triângulo retângulo isósceles com hipotenusa 20, projeções iguais p e q de 10, e catetos a e b cada um igual a 10 raiz de 2",
            "caption": "Projeções iguais: c = 20 com p = q = 10 dá a = b = 10 raiz de 2, cerca de 14.142.",
            "src": "leg-a-equal-projections.svg",
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada erro abaixo vem seguido de sua correção. A maioria deles decorre da rotulagem, não da aritmética.",
            },
            {
              "kind": "steps",
              "steps": [
                "Esquecer a raiz quadrada: informar cp como resposta. Com c = 10 e p = 3.6, a resposta é 6 cm, não 36.",
                "Confundir a com a ao quadrado: 36 é a ao quadrado nesse exemplo, enquanto 6 é o cateto. Diga a qual deles você se refere antes de anotar um número.",
                "Usar a projeção q em vez de p: inserir q devolve o cateto b. Com c = 25 e q = 16, o resultado 20 é o cateto b, não o cateto a.",
                "Inserir um cateto no campo da hipotenusa: a hipotenusa é o lado oposto ao ângulo reto e o lado mais longo. Um cateto inserido como c distorce todos os passos seguintes.",
                "Confundir a hipotenusa com uma projeção: c é o lado inteiro, enquanto p é apenas parte dele. Confira se p é menor que c antes de calcular.",
                "Usar p maior que ou igual a c: nenhum triângulo assim existe, pois p é parte de c. Confira novamente os rótulos do diagrama se isso acontecer.",
                "Misturar centímetros e metros: converta primeiro, como no Exemplo 7, em que 0.5 m virou 50 cm antes de multiplicar por 20 cm.",
                "Usar medidas negativas: comprimentos são positivos, por isso uma entrada negativa indica um erro nos dados, não um cateto negativo.",
                "Aplicar a fórmula a um triângulo não retângulo: o teorema da projeção precisa da altura traçada a partir de um ângulo reto. Sem um ângulo reto, não há projeção p nesse sentido.",
                "Arredondar cedo demais: arredondar o produto antes de extrair a raiz altera a resposta. Mantenha a precisão completa até o passo final.",
                "Usar a correspondência errada de lados no diagrama: emparelhar p com b, ou q com a, troca os catetos. Combine p com o cateto que toca o vértice A.",
                "Tratar a altura como uma projeção: a altura h é perpendicular à hipotenusa, não uma parte dela, por isso nunca cabe no campo p.",
              ],
            },
            {
              "kind": "p",
              "text": "Se uma resposta parecer errada, pare e rotule o diagrama novamente antes de recalcular. A maioria dos erros acima desaparece quando p e q estão claramente marcados na hipotenusa e todo o resto é deixado de lado.",
            },
          ],
          "h2": "Erros Comuns ao Encontrar o Cateto A a Partir da Projeção",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "O uso mais direto é a lição de geometria e o trabalho em sala de aula, em que problemas de projeção testam se os alunos sabem rotular um diagrama e aplicar [[a^2 = c \\times p]] em vez de recorrer ao teorema de Pitágoras por hábito. Exercícios de triângulos semelhantes usam a mesma configuração, pois a própria demonstração é um exercício de correspondência de lados correspondentes.",
            },
            {
              "kind": "p",
              "text": "O desenho técnico usa o teorema quando um triângulo retângulo precisa ser reconstruído a partir de medidas parciais: se um desenho dá a hipotenusa e o pé da altura, o cateto que falta segue sem medir novamente a forma. Os professores também usam a configuração como uma lição de transição entre a soma de segmentos e a semelhança.",
            },
            {
              "kind": "p",
              "text": "Uma condição limita todas as aplicações: a geometria exigida do triângulo retângulo precisa existir de fato. O teorema descreve relações geométricas exatas, não medidas aproximadas de campo, por isso nunca substitui uma medição cuidadosa de topografia ou uma medição profissional de engenharia. Dentro de seu contexto próprio, porém, ele transforma dois comprimentos conhecidos em um terceiro com uma única multiplicação e uma raiz quadrada.",
            },
          ],
          "h2": "Aplicações Práticas do Teorema da Projeção",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tente resolver os seis problemas no papel antes de ler as respostas. Nenhum dos valores repete os exemplos resolvidos, e o último problema combina várias ideias deste guia.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Números Inteiros Básicos",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem hipotenusa [[c = 36]] cm e projeção [[p = 4]] cm. Encontre o cateto a.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Projeção Decimal",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 26]] cm e [[p = 6.5]] cm, encontre o cateto a.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Hipotenusa Grande",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 100]] cm e [[p = 64]] cm, encontre o cateto a.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Conversão de Unidades",
            },
            {
              "kind": "p",
              "text": "Uma hipotenusa mede [[c = 1.2]] m e sua projeção p mede 30 cm. Encontre o cateto a em centímetros.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Encontre p a Partir de q e c Primeiro",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem hipotenusa [[c = 65]] cm e projeção [[q = 49]] cm. Encontre o cateto a.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Vários Passos com o Cateto b e Pitágoras",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 50]] cm e [[p = 18]] cm, encontre o cateto a, depois encontre o cateto b e confira o resultado com o teorema de Pitágoras.",
            },
            {
              "kind": "h3",
              "text": "Respostas dos Problemas Práticos",
            },
            {
              "kind": "p",
              "text": "Resposta 1: [[a = \\sqrt{36 \\times 4} = \\sqrt{144} = 12]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 2: [[a = \\sqrt{26 \\times 6.5} = \\sqrt{169} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 3: [[a = \\sqrt{100 \\times 64} = \\sqrt{6400} = 80]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 4: Converta 1.2 m para 120 cm e depois [[a = \\sqrt{120 \\times 30} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 5: Primeiro [[p = 65 - 49 = 16]] cm, depois [[a = \\sqrt{65 \\times 16} = \\sqrt{1040} \\approx 32.249]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 6: [[a = \\sqrt{50 \\times 18} = \\sqrt{900} = 30]] cm. A outra projeção é [[q = 50 - 18 = 32]] cm, por isso [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Verificação: [[30^2 + 40^2 = 900 + 1600 = 2500 = 50^2]].",
            },
          ],
          "h2": "Problemas Práticos com Respostas",
        },
      },
      "tocHeading": "Conteúdo do Guia",
      "tocItems": {
        "sec-intro": "Calculadora de Cateto A a Partir da Projeção do Triângulo Retângulo",
        "sec-calculate": "Calcular o Cateto A do Triângulo Retângulo a Partir da Projeção",
        "sec-what-leg-a": "O Que É o Cateto A em um Triângulo Retângulo?",
        "sec-what-projection-p": "O Que É a Projeção P em um Triângulo Retângulo?",
        "sec-formula": "Fórmula do Cateto A do Triângulo Retângulo a Partir da Projeção",
        "sec-why-sqrt": "Por Que Há uma Raiz Quadrada na Fórmula?",
        "sec-how": "Como Usar a Calculadora de Cateto A do Triângulo Retângulo",
        "sec-step-example": "Exemplo Passo a Passo de Como Encontrar o Cateto A",
        "sec-diagram": "Diagrama do Cateto A do Triângulo Retângulo a Partir da Projeção Explicado",
        "sec-proof": "Por Que o Teorema da Projeção Funciona?",
        "sec-examples": "Exemplos Resolvidos de Como Encontrar o Cateto A a Partir da Projeção",
        "sec-other-projection": "Como Encontrar o Cateto A Quando a Outra Projeção É Conhecida",
        "sec-relationship": "Relação Entre o Cateto A, a Hipotenusa e a Projeção P",
        "sec-leg-b": "Relação Entre o Cateto A e o Cateto B",
        "sec-pythagoras": "Relação Entre a Projeção P e o Teorema de Pitágoras",
        "sec-verify": "Como Verificar o Cateto A Calculado",
        "sec-properties": "Propriedades Importantes do Cateto A a Partir da Projeção",
        "sec-mistakes": "Erros Comuns ao Encontrar o Cateto A a Partir da Projeção",
        "sec-applications": "Aplicações Práticas do Teorema da Projeção",
        "sec-practice": "Problemas Práticos com Respostas",
        "sec-related": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
        "sec-faq": "Perguntas Frequentes",
      },
    },
};
