// legBFromProjectionGuideTranslations.bpt.ts: Right Triangle Leg B From Projection
// Guide (Page 32 of 45) translation.
export const LBP_B3_PT = {
  "pt": {
      "faqHeading": "Perguntas Frequentes",
      "faqs": [
        {
          "question": "Qual é a fórmula para encontrar o cateto b a partir da projeção q?",
          "answer": "A fórmula é [[b = \\sqrt{c \\times q}]], onde c é a hipotenusa completa e q é a projeção que pertence ao cateto b. Por exemplo, [[c = 10]] cm e [[q = 6.4]] cm resultam em [[b = 8]] cm.",
        },
        {
          "question": "Por que multiplicamos c por q?",
          "answer": "A multiplicação vem de triângulos semelhantes. O triângulo CBD é semelhante ao triângulo ABC, o que dá [[q / b = b / c]], e a multiplicação cruzada resulta em [[b^2 = c \\times q]]. O produto é o quadrado do cateto, não o cateto em si.",
        },
        {
          "question": "Por que é necessária uma raiz quadrada?",
          "answer": "Porque o produto cq é igual a b ao quadrado, e não a b. A raiz quadrada desfaz o quadrado e devolve um comprimento comum. Sem ela, você informaria 64 em vez de 8 no exemplo com c = 10 e q = 6,4.",
        },
        {
          "question": "O que a projeção q representa?",
          "answer": "A projeção q é o segmento da hipotenusa próximo ao vértice B, criado quando a altura traçada a partir do ângulo reto encontra a hipotenusa. No triângulo ABC, com a altura CD, [[q = DB]], e ela fica ao longo da hipotenusa.",
        },
        {
          "question": "A projeção q é a mesma coisa que o cateto b?",
          "answer": "Não. O cateto b é o lado BC, um dos lados que formam o ângulo reto, enquanto a projeção q é o segmento DB ao longo da hipotenusa. São comprimentos diferentes, em posições diferentes, ligados apenas por [[b^2 = c \\times q]].",
        },
        {
          "question": "Por que se usa q em vez de p?",
          "answer": "Porque cada cateto se combina com a projeção próxima ao seu próprio vértice. O cateto b toca o vértice B, e q é o segmento próximo a B. Usar p devolveria o cateto a, pois p se combina com o cateto que toca o vértice A.",
        },
        {
          "question": "Posso encontrar o cateto b se apenas a projeção p for conhecida?",
          "answer": "Sim. Subtraia p da hipotenusa primeiro: [[q = c - p]]. Com [[c = 25]] cm e [[p = 9]] cm, [[q = 16]] cm, e então [[b = \\sqrt{25 \\times 16} = 20]] cm.",
        },
        {
          "question": "A projeção q pode ser maior que a hipotenusa?",
          "answer": "Não. A projeção q é apenas parte da hipotenusa, por isso deve ser menor que c. Se q fosse igual a c, p seria zero e o triângulo seria degenerado, e não um triângulo retângulo genuíno.",
        },
        {
          "question": "Como verifico o cateto calculado?",
          "answer": "Eleve a resposta ao quadrado e confira se ela é igual a [[c \\times q]]. Você também pode encontrar o cateto a a partir de p e verificar [[a^2 + b^2 = c^2]], além de confirmar que q é menor que c e que o cateto b é mais curto que a hipotenusa.",
        },
        {
          "question": "O que acontece quando p e q são iguais?",
          "answer": "A altura cai no ponto médio da hipotenusa, e os dois catetos são iguais, de modo que o triângulo é um triângulo retângulo isósceles. Com [[c = 20]] cm e [[p = q = 10]] cm, ambos os catetos medem [[10\\sqrt{2}]] cm, cerca de 14,142 cm.",
        },
        {
          "question": "Posso encontrar o cateto a usando o mesmo teorema?",
          "answer": "Sim, com a fórmula espelhada [[a = \\sqrt{c \\times p}]]. O cateto a se combina com a projeção p, assim como o cateto b se combina com q. A <a href=\"/right-triangle-leg-a-from-projection-calculator/\">calculadora de cateto a a partir da projeção</a> foi feita para esse cálculo.",
        },
        {
          "question": "O teorema da projeção está relacionado ao teorema de Pitágoras?",
          "answer": "Sim. Somar as duas fórmulas de projeção resulta em [[a^2 + b^2 = c \\times p + c \\times q = c(p + q) = c^2]], pois [[p + q = c]]. O teorema da projeção divide a relação de Pitágoras em uma parte por cateto.",
        },
      ],
      "relatedHeading": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
      "relatedIntro": "Escolha a próxima ferramenta de acordo com as medidas que você já conhece, pois cada calculadora abaixo resolve uma tarefa específica de triângulo retângulo.",
      "relatedItems": [
        "Calculadora de Projeção de Triângulo Retângulo",
        "Calculadora de Projeção P de Triângulo Retângulo",
        "Calculadora de Projeção Q de Triângulo Retângulo",
        "Calculadora de Cateto A a Partir da Projeção de Triângulo Retângulo",
        "Calculadora de Hipotenusa a Partir das Projeções de Triângulo Retângulo",
        "Calculadora de Altura a Partir das Projeções de Triângulo Retângulo",
        "Calculadora de Lados de Triângulo Retângulo",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Esta calculadora encontra o cateto b de um triângulo retângulo quando você conhece a hipotenusa completa c e a projeção q que pertence ao cateto b. Você digita esses dois comprimentos, e ela devolve o comprimento real do lado do cateto b, não um valor ao quadrado nem um segmento de projeção. A fórmula é [[b = \\sqrt{c \\times q}]], onde c é a hipotenusa completa e q é o segmento da hipotenusa próximo ao cateto b.",
            },
            {
              "kind": "p",
              "text": "Por exemplo, se [[c = 10]] cm e [[q = 6.4]] cm, então [[b = \\sqrt{10 \\times 6.4} = \\sqrt{64} = 8]] cm. O produto 64 é apenas um passo intermediário. Extrair a raiz quadrada o transforma de volta em um comprimento, e esse comprimento é o lado que você procura.",
            },
            {
              "kind": "p",
              "text": "A calculadora fica no topo desta página, seguida pela fórmula, um diagrama legendado, uma demonstração do teorema da projeção, exemplos resolvidos e verificações que você pode aplicar a qualquer resposta. O guia serve para alunos do ensino fundamental e médio, professores, tutores e pais que ajudam com a lição de geometria.",
            },
          ],
          "h2": "Calculadora de Cateto B a Partir da Projeção de Triângulo Retângulo",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "A calculadora tem dois campos de entrada. O primeiro recebe a hipotenusa c, o lado completo oposto ao ângulo reto. O segundo recebe a projeção q, o segmento da hipotenusa que pertence ao cateto b. Ambos os comprimentos devem usar a mesma unidade, por isso converta primeiro se uma medida estiver em centímetros e a outra em metros.",
            },
            {
              "kind": "p",
              "text": "A projeção q deve ser menor que c. Essa regra está embutida na geometria: q é apenas parte da hipotenusa, por isso nunca pode ser igual ou maior que o lado inteiro. Se o seu valor de q for maior que c, você provavelmente digitou um cateto, a altura ou a projeção errada.",
            },
            {
              "kind": "p",
              "text": "Clique em Calcular cateto b para ver o resultado, e use Redefinir para limpar os dois campos antes de um novo problema. O resultado é um comprimento na unidade que você digitou, de modo que uma hipotenusa de 10 cm e uma projeção de 6,4 cm devolvem 8 cm, sem nenhuma etapa extra de conversão.",
            },
          ],
          "h2": "Calcular o Cateto B de Triângulo Retângulo a Partir da Projeção",
        },
        "sec-what-leg-b": {
          "blocks": [
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem dois lados perpendiculares, chamados catetos, e um lado mais longo, chamado hipotenusa. Os dois catetos se encontram no ângulo reto, e a hipotenusa fica oposta a esse ângulo. Neste guia, o triângulo é ABC, com o ângulo reto em C, o cateto a é o lado AC, o cateto b é o lado BC e a hipotenusa c é o lado AB.",
            },
            {
              "kind": "p",
              "text": "O cateto b é um dos dois lados que formam o ângulo reto, por isso é um lado genuíno do triângulo. Não é um segmento traçado dentro do triângulo, nem é a projeção q. A projeção q fica ao longo da hipotenusa, enquanto o cateto b vai do vértice B até o vértice do ângulo reto C. Manter esses dois papéis separados é o primeiro passo para usar a fórmula corretamente.",
            },
            {
              "kind": "p",
              "text": "O cateto b difere do cateto a apenas pela posição: o cateto b toca o vértice B, e o cateto a toca o vértice A. Cada cateto tem sua própria projeção, e é por isso que a fórmula de b usa q, enquanto a fórmula de a usa p, um emparelhamento fixado pela rotulagem.",
            },
            {
              "kind": "p",
              "text": "Em qualquer triângulo retângulo não degenerado, o cateto b é mais curto que a hipotenusa. Isso dá uma verificação rápida de cada resposta: se o cateto b calculado sair maior que c, algo deu errado nas entradas ou na aritmética, e os rótulos do diagrama são o primeiro lugar a conferir.",
            },
          ],
          "h2": "O Que É o Cateto B em um Triângulo Retângulo?",
        },
        "sec-what-projection-q": {
          "blocks": [
            {
              "kind": "p",
              "text": "Trace a altura a partir do vértice do ângulo reto C, perpendicular à hipotenusa AB. Ela encontra a hipotenusa em um ponto chamado pé, rotulado D. Esse ponto divide a hipotenusa em dois segmentos adjacentes, e esses segmentos são as projeções. O segmento AD é a projeção p, e o segmento DB é a projeção q.",
            },
            {
              "kind": "p",
              "text": "A projeção q pertence ao cateto b porque fica próxima ao vértice B, o mesmo vértice onde o cateto b começa. No triângulo pequeno CBD, o cateto b é a hipotenusa e q é um de seus catetos, e essa é a ligação geométrica que faz o teorema da projeção funcionar. A projeção p, pelo mesmo raciocínio, pertence ao cateto a, que toca o vértice A.",
            },
            {
              "kind": "p",
              "text": "As projeções são comprimentos ao longo da hipotenusa, medidos na mesma unidade que os outros lados. Elas não são perpendiculares a nada, nem são lados do triângulo original. É melhor imaginar uma projeção como a sombra que um cateto projeta sobre a hipotenusa quando a altura desce em linha reta até ela.",
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
              "text": "Essa soma é útil por si só. Se você conhece c e uma projeção, pode encontrar a outra por subtração, um passo que a seção posterior sobre a outra projeção desenvolve por completo.",
            },
          ],
          "h2": "O Que É a Projeção Q em um Triângulo Retângulo?",
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
              "text": "Extrair a raiz quadrada positiva de ambos os lados dá a fórmula de trabalho desta página:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "O cálculo corre em duas etapas distintas. A etapa 1 multiplica a hipotenusa pela projeção, e o resultado é um comprimento ao quadrado, não um lado. A etapa 2 extrai a raiz quadrada positiva, que converte esse comprimento ao quadrado de volta em um comprimento comum. Pular a etapa 2 é o erro mais comum com esta fórmula, e a próxima seção explica por que a raiz quadrada não pode ser deixada de fora.",
            },
            {
              "kind": "p",
              "text": "As unidades exigem cuidado nas duas etapas. Se c e q estão ambos em centímetros, o produto deles fica em centímetros quadrados, e a raiz quadrada devolve centímetros. Misturar unidades, como metros para c e centímetros para q, produz um produto sem sentido, por isso converta para uma só unidade antes de multiplicar. Usa-se a raiz positiva porque o comprimento de um lado é sempre positivo.",
            },
            {
              "kind": "p",
              "text": "Um pequeno exemplo numérico mostra as duas etapas em ação. Com [[c = 10]] cm e [[q = 6.4]] cm, a etapa 1 dá [[10 \\times 6.4 = 64]], e a etapa 2 dá [[b = \\sqrt{64} = 8]] cm. O número 64 não responde a nenhuma pergunta sozinho. Só depois da raiz quadrada ele se torna o comprimento do cateto.",
            },
          ],
          "h2": "Fórmula do Cateto B de Triângulo Retângulo a Partir da Projeção",
          "image": {
            "alt": "Triângulo retângulo ABC com altura CD, mostrando que o cateto b ao quadrado é igual à hipotenusa c multiplicada pela projeção q",
            "caption": "O teorema da projeção: b ao quadrado é igual a c vezes q, logo b é igual à raiz quadrada de c vezes q.",
            "src": "leg-b-projection-theorem.svg",
          },
        },
        "sec-why-sqrt": {
          "blocks": [
            {
              "kind": "p",
              "text": "A raiz quadrada existe porque a multiplicação produz uma quantidade ao quadrado. O teorema não diz que o cateto b é igual ao produto de c por q. Ele diz que o quadrado do cateto b é igual a esse produto. Desfazer um quadrado exige uma raiz quadrada, assim como desfazer uma duplicação exige dividir pela metade.",
            },
            {
              "kind": "p",
              "text": "Tome [[c = 10]] e [[q = 6.4]]. O produto deles é 64, que é [[b^2]], o quadrado do cateto. O cateto em si é o número que, multiplicado por si mesmo, dá 64, que é 8. Escrever [[b = 64]] afirmaria um lado de 64 unidades em um triângulo cuja hipotenusa é apenas 10, o que é claramente impossível.",
            },
            {
              "kind": "p",
              "text": "A tabela abaixo mantém as três quantidades separadas, pois confundi-las causa a maioria dos erros com esta fórmula.",
            },
          ],
          "h2": "Por Que Há uma Raiz Quadrada na Fórmula?",
          "table": {
            "headers": [
              "Quantidade",
              "Significado",
              "Exemplo com c = 10, q = 6,4",
            ],
            "rows": [
              [
                "[[b]]",
                "O comprimento do cateto em si",
                "8",
              ],
              [
                "[[b^2]]",
                "O comprimento do cateto multiplicado por si mesmo",
                "64",
              ],
              [
                "[[c \\times q]]",
                "O produto que o teorema iguala a [[b^2]]",
                "64",
              ],
              [
                "[[\\sqrt{cq}]]",
                "O passo que recupera b a partir de [[b^2]]",
                "8",
              ],
            ],
          },
        },
        "sec-how": {
          "blocks": [
            {
              "kind": "p",
              "text": "Dez passos curtos levam você de um diagrama legendado a uma resposta verificada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifique o triângulo retângulo do seu problema e confirme que ele tem um ângulo reto.",
                "Encontre a altura traçada a partir do ângulo reto e marque onde ela encontra a hipotenusa.",
                "Identifique a hipotenusa completa c, o lado oposto ao ângulo reto.",
                "Identifique a projeção q, o segmento da hipotenusa próximo ao vértice B, onde o cateto b começa.",
                "Confira se q é menor que c. Se não for, rotule o diagrama novamente antes de continuar.",
                "Converta c e q para a mesma unidade se eles foram dados em unidades diferentes.",
                "Digite c no campo Hipotenusa c.",
                "Digite q no campo Projeção q. Não digite p aqui, pois isso devolveria o cateto a.",
                "Clique em Calcular cateto b e leia o resultado.",
                "Use Redefinir antes de começar um novo problema.",
              ],
            },
            {
              "kind": "p",
              "text": "A calculadora não aceita p, por isso um problema que dá apenas p precisa de um passo extra de subtração, explicado abaixo. Digitar p no campo q ainda produz um número, mas será o cateto errado, por isso a verificação de rótulo do passo 4 é a mais importante.",
            },
          ],
          "h2": "Como Usar a Calculadora de Cateto B de Triângulo Retângulo",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Use [[c = 10]] cm e [[q = 6.4]] cm. Os quatro passos abaixo mostram todo o desenvolvimento, sem pular nada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Escreva a fórmula: b = sqrt(cq).",
                "Substitua os valores: b = sqrt(10 x 6,4).",
                "Multiplique dentro da raiz: b = sqrt(64).",
                "Extraia a raiz quadrada: b = 8 cm.",
              ],
            },
            {
              "kind": "p",
              "text": "A resposta 8 cm é o lado perpendicular real BC, não uma projeção nem uma área. Uma breve verificação fecha o ciclo: [[b^2 = 8^2 = 64]] e [[c \\times q = 10 \\times 6.4 = 64]], de modo que os dois lados do teorema concordam.",
            },
            {
              "kind": "p",
              "text": "Para referência, a outra projeção é [[p = 10 - 6.4 = 3.6]] cm, o cateto a é [[a = \\sqrt{10 \\times 3.6} = 6]] cm, e a altura é [[h = \\sqrt{3.6 \\times 6.4} = 4.8]] cm, confirmando o conhecido triângulo retângulo 6-8-10.",
            },
          ],
          "h2": "Exemplo Passo a Passo de Como Encontrar o Cateto B",
          "image": {
            "alt": "Triângulo retângulo com hipotenusa de 10 cm e projeção de 6,4 cm, resolvido para dar cateto b igual a 8 cm",
            "caption": "Exemplo resolvido: c = 10 cm e q = 6,4 cm dão b = sqrt(64) = 8 cm.",
            "src": "leg-b-example-c10-q64.svg",
          },
        },
        "sec-diagram": {
          "blocks": [
            {
              "kind": "p",
              "text": "O diagrama principal mostra o triângulo ABC com o ângulo reto em C. O lado AC é o cateto a, o lado BC é o cateto b, e o lado AB é a hipotenusa c. A altura CD desce de C perpendicular a AB e a toca em D, e o marcador de ângulo reto em D confirma que CD é realmente perpendicular.",
            },
            {
              "kind": "p",
              "text": "O ponto D divide a hipotenusa em duas partes: o segmento AD é a projeção p e o segmento DB é a projeção q. O cateto b e a projeção q estão destacados porque são o par de que trata esta página. Percorra o diagrama nesta ordem para fixar os rótulos: comece em B, siga ao longo do cateto b até C, depois ao longo do cateto a até A, e volte ao longo da hipotenusa de A até B, parando em D para ver a divisão em p e q.",
            },
            {
              "kind": "p",
              "text": "O emparelhamento de b com q fica visível no triângulo pequeno CBD, onde o cateto b é a hipotenusa e q é o lado que fica ao longo da hipotenusa maior. Como o triângulo CBD é semelhante ao triângulo ABC, a razão de q para b no triângulo pequeno é igual à razão de b para c no triângulo grande, o que a seção de demonstração transforma em [[b^2 = cq]].",
            },
          ],
          "h2": "Diagrama do Cateto B de Triângulo Retângulo a Partir da Projeção Explicado",
          "image": {
            "alt": "Triângulo retângulo ABC com ângulo reto em C, altura CD até a hipotenusa AB, cateto b e projeção q destacados, com os catetos a e b, a hipotenusa c, as projeções p e q e a altura h legendados",
            "caption": "Triângulo principal ABC: a altura CD divide a hipotenusa AB em projeção p (AD) e projeção q (DB), com o cateto b (BC) destacado.",
            "src": "leg-b-main-triangle.svg",
          },
        },
        "sec-proof": {
          "blocks": [
            {
              "kind": "p",
              "text": "A demonstração se apoia em triângulos semelhantes. Traçar a altura CD divide o triângulo ABC em dois triângulos retângulos menores, ACD e CBD, e ambos são semelhantes ao triângulo original. Semelhança significa que seus lados correspondentes mantêm a mesma razão, e uma dessas razões dá o teorema da projeção diretamente.",
            },
            {
              "kind": "p",
              "text": "Concentre-se no triângulo CBD e no triângulo inteiro ABC. Ambos contêm o ângulo em B, e ambos contêm um ângulo reto, por isso seus terceiros ângulos também devem coincidir. Igualar os lados que ocupam as mesmas posições dá a proporção:",
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
              "text": "A multiplicação cruzada elimina as frações. O numerador esquerdo vezes o denominador direito é igual ao numerador direito vezes o denominador esquerdo, logo [[q \\times c = b \\times b]], que é:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Extrair a raiz quadrada positiva de ambos os lados conclui a demonstração, dando [[b = \\sqrt{c \\times q}]]. O mesmo argumento aplicado ao outro triângulo pequeno, ACD, dá [[a^2 = c \\times p]]. A semelhança faz todo o trabalho: lados correspondentes de triângulos semelhantes permanecem proporcionais.",
            },
          ],
          "h2": "Por Que o Teorema da Projeção Funciona?",
          "image": {
            "alt": "Triângulo retângulo original ABC ao lado dos triângulos menores semelhantes ACD e CBD, mostrando a proporção q sobre b igual a b sobre c",
            "caption": "Demonstração por triângulos semelhantes: q sobre b é igual a b sobre c, logo a multiplicação cruzada dá b ao quadrado igual a c vezes q.",
            "src": "leg-b-similar-triangles.svg",
          },
        },
        "sec-examples": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada exemplo apresenta os valores dados, a substituição e a resposta final. O comentário fica curto para que a aritmética permaneça visível, e todos os exemplos mantêm as unidades consistentes do início ao fim.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 1: Números Inteiros Básicos",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 10]] cm e [[q = 6.4]] cm, a fórmula dá [[b = \\sqrt{10 \\times 6.4} = \\sqrt{64}]], logo [[b = 8]] cm. O produto 64 é um quadrado perfeito, por isso a resposta é exata, sem necessidade de arredondamento. Este é o mesmo triângulo do exemplo passo a passo, e seu outro cateto mede 6 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 2: Resultado Quadrado Perfeito",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 25]] cm e [[q = 9]] cm, [[b = \\sqrt{25 \\times 9} = \\sqrt{225} = 15]] cm. Quando o produto é um quadrado perfeito, a resposta é exata. A outra projeção aqui é 16 cm, que se combina com um cateto de 20 cm, formando o clássico triângulo 15-20-25.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 3: Quadrado Não Perfeito",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 12]] cm e [[q = 5]] cm, [[b = \\sqrt{12 \\times 5} = \\sqrt{60}]], logo [[b \\approx 7.746]] cm. O produto 60 não é um quadrado perfeito, por isso a resposta fica como uma aproximação arredondada para três casas decimais. Note que 7,746 cm é mais curto que a hipotenusa de 12 cm, como deve ser.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 4: Medidas Decimais",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 12.5]] cm e [[q = 3.2]] cm, [[b = \\sqrt{12.5 \\times 3.2} = \\sqrt{40}]], logo [[b \\approx 6.325]] cm. Isso corresponde ao valor do guia do cateto a, onde o mesmo produto 40 apareceu com os papéis de p e q trocados, um lembrete útil de que entradas diferentes podem compartilhar um produto. Mantenha o produto completo dentro da raiz até o passo final de arredondamento.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 5: Triângulo Maior",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 50]] cm e [[q = 32]] cm, [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. Números maiores não mudam nada no método: multiplique e depois extraia a raiz. A outra projeção aqui é 18 cm, que se combina com um cateto de 30 cm, formando o clássico triângulo 30-40-50.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 6: Projeções Iguais",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 20]] cm e [[q = 10]] cm, [[b = \\sqrt{20 \\times 10} = \\sqrt{200} = 10\\sqrt{2}]] cm, logo [[b \\approx 14.142]] cm. Projeções iguais significam que a altura atinge o ponto médio da hipotenusa, o que acontece exatamente quando os dois catetos são iguais. O triângulo é, portanto, um triângulo retângulo isósceles, e o cateto a é igual ao cateto b.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 7: Unidades Diferentes",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 0.5]] m e [[q = 20]] cm, converta primeiro: 0,5 m equivalem a 50 cm. Depois, [[b = \\sqrt{50 \\times 20} = \\sqrt{1000}]], logo [[b \\approx 31.623]] cm. Multiplicar 0,5 por 20 sem converter teria dado uma raiz de 10, uma resposta errada sem nenhuma unidade válida por trás dela.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 8: Medidas Fracionárias",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 16]] ft e [[q = 9]] ft, [[b = \\sqrt{16 \\times 9} = \\sqrt{144} = 12]] ft. O produto 144 é um quadrado perfeito, por isso a resposta é exata. Uma verificação rápida passa: 12 ft são três quartos da hipotenusa, e o outro cateto resulta em cerca de 10,583 ft, que é mais curto que b, mas ainda é um lado real do mesmo triângulo.",
            },
          ],
          "h2": "Exemplos Resolvidos de Como Encontrar o Cateto B a Partir da Projeção",
        },
        "sec-other-projection": {
          "blocks": [
            {
              "kind": "p",
              "text": "Alguns problemas dão p em vez de q. A calculadora desta página não aceita p, mas isso é apenas um desvio de um passo, não um beco sem saída. Como as duas projeções somam a hipotenusa, subtraia para recuperar q primeiro:",
            },
            {
              "kind": "p",
              "text": "[[[q = c - p]]]",
            },
            {
              "kind": "p",
              "text": "Tome [[c = 25]] cm e [[p = 9]] cm. Subtrair dá [[q = 25 - 9 = 16]] cm. Agora a fórmula comum se aplica: [[b = \\sqrt{25 \\times 16} = \\sqrt{400} = 20]] cm. Se você tivesse digitado 9 diretamente como q, a calculadora teria devolvido 15 cm, que é o cateto a, e não o cateto b.",
            },
            {
              "kind": "p",
              "text": "A <a href=\"/right-triangle-projection-p-calculator/\">calculadora de projeção p</a> pode ajudar quando é o próprio p que precisa ser encontrado, e a <a href=\"/right-triangle-projection-q-calculator/\">calculadora de projeção q</a> cobre o passo inverso. De qualquer forma, a regra continua a mesma: encontre q primeiro e depois use [[b = \\sqrt{c \\times q}]].",
            },
          ],
          "h2": "Como Encontrar o Cateto B Quando a Outra Projeção É Conhecida",
        },
        "sec-relationship": {
          "blocks": [
            {
              "kind": "p",
              "text": "Um teorema liga três quantidades, por isso reorganizá-lo encontra aquela que está faltando. As três formas são:",
            },
            {
              "kind": "p",
              "text": "[[[b = \\sqrt{c \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "A tabela abaixo mostra cada reorganização, o que ela encontra e o que precisa ser conhecido primeiro.",
            },
          ],
          "h2": "Relação Entre o Cateto B, a Hipotenusa e a Projeção Q",
          "table": {
            "headers": [
              "Quantidade Desconhecida",
              "Fórmula",
              "Valores Conhecidos Necessários",
            ],
            "rows": [
              [
                "Cateto b",
                "[[b = \\sqrt{c \\times q}]]",
                "Hipotenusa c e projeção q",
              ],
              [
                "Hipotenusa c",
                "[[c = \frac{b^2}{q}]]",
                "Cateto b e projeção q",
              ],
              [
                "Projeção q",
                "[[q = \frac{b^2}{c}]]",
                "Cateto b e hipotenusa c",
              ],
            ],
          },
        },
        "sec-leg-a": {
          "blocks": [
            {
              "kind": "p",
              "text": "O cateto a segue a imagem espelhada da fórmula do cateto b. Onde o cateto b se combina com a projeção q, o cateto a se combina com a projeção p:",
            },
            {
              "kind": "p",
              "text": "[[[a = \\sqrt{c \\times p}]]]",
            },
            {
              "kind": "p",
              "text": "Use um único triângulo consistente para ver os dois catetos juntos: [[c = 25]], [[p = 9]] e [[q = 16]]. Então [[a = \\sqrt{25 \\times 9} = 15]] e [[b = \\sqrt{25 \\times 16} = 20]]. Os dois catetos compartilham a mesma hipotenusa, mas recorrem a projeções diferentes, e é por isso que identificar p e q corretamente decide qual cateto você obtém.",
            },
            {
              "kind": "p",
              "text": "Os catetos também se restringem mutuamente pelo teorema de Pitágoras, abordado duas seções abaixo: conhecer um cateto e a hipotenusa determina o outro. Para problemas que começam com p em vez de q, a <a href=\"/right-triangle-leg-a-from-projection-calculator/\">calculadora de cateto a a partir da projeção</a> executa o mesmo método com o outro emparelhamento.",
            },
          ],
          "h2": "Relação Entre o Cateto B e o Cateto A",
          "image": {
            "alt": "Triângulo retângulo comparando a projeção p combinada com o cateto a com a projeção q combinada com o cateto b, com c igual a 25, p igual a 9 e q igual a 16",
            "caption": "Emparelhados corretamente: a usa p (sqrt(25 x 9) = 15) e b usa q (sqrt(25 x 16) = 20).",
            "src": "leg-b-p-vs-q.svg",
          },
        },
        "sec-pythagoras": {
          "blocks": [
            {
              "kind": "p",
              "text": "O teorema da projeção e o teorema de Pitágoras concordam exatamente, e a álgebra mostra por quê. Comece com as duas fórmulas de projeção:",
            },
            {
              "kind": "p",
              "text": "[[[b^2 = c \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Some a fórmula correspondente do cateto a, [[a^2 = c \\times p]], para obter:",
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
              "text": "Uma verificação numérica com o triângulo 9-16-25 confirma: [[a^2 + b^2 = 225 + 400 = 625]] e [[c^2 = 25^2 = 625]]. Os dois teoremas não são rivais. O teorema da projeção divide a relação de Pitágoras em uma parte por cateto, e somar as partes a reconstrói.",
            },
          ],
          "h2": "Relação Entre a Projeção Q e o Teorema de Pitágoras",
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
              "text": "Eleve sua resposta ao quadrado e compare-a com o produto de c por q. Para [[c = 25]], [[q = 16]] e [[b = 20]]: [[b^2 = 400]] e [[c \\times q = 400]], logo a resposta passa. Se os dois números diferirem, ou as entradas ou o passo da raiz quadrada saíram errados.",
            },
            {
              "kind": "h3",
              "text": "Método 2: Verificação pelo Teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Encontre o cateto a a partir de p e depois confira [[a^2 + b^2 = c^2]]. Com [[p = 9]], [[q = 16]] e [[c = 25]]: [[a = 15]], [[b = 20]] e [[225 + 400 = 625 = 25^2]]. Esta verificação vai além da calculadora, pois testa o triângulo inteiro, não apenas uma fórmula.",
            },
            {
              "kind": "h3",
              "text": "Método 3: Verificações de Tamanho e Soma",
            },
            {
              "kind": "p",
              "text": "Confirme que q é menor que c, que [[p + q = c]] quando p é conhecido, e que o cateto b é mais curto que a hipotenusa. No exemplo, 16 é menor que 25, [[9 + 16 = 25]], e 20 é mais curto que 25. Qualquer falha aqui aponta para um erro de rotulagem, não um deslize aritmético.",
            },
          ],
          "h2": "Como Verificar o Cateto B Calculado",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Oito propriedades decorrem diretamente de [[b = \\sqrt{c \\times q}]] e da geometria por trás dela. Cada uma serve também como verificação de bom senso para uma nova resposta.",
            },
            {
              "items": [
                "O cateto b é sempre mais curto que a hipotenusa em um triângulo retângulo não degenerado, pois q é apenas parte de c.",
                "A projeção q é sempre menor que c, e é sempre positiva. Projeções zero ou negativas não descrevem nenhum triângulo real.",
                "Aumentar q mantendo c fixo aumenta b, porque o produto dentro da raiz cresce.",
                "Aumentar c mantendo q fixo aumenta b matematicamente, desde que os novos valores ainda descrevam um triângulo real com q menor que c.",
                "Trocar p e q muda qual cateto é calculado: q dá o cateto b e p dá o cateto a.",
                "Projeções iguais produzem catetos iguais. Com c = 20 e p = q = 10, ambos os catetos medem 10 vezes a raiz quadrada de 2, cerca de 14,142.",
                "O resultado é um comprimento, não uma área. O produto ao quadrado é apenas um passo intermediário, e a raiz quadrada restaura as unidades comuns de comprimento.",
                "Escalar todas as medidas pelo mesmo fator escala o cateto b por esse fator. Dobrar c e q dobra b, pois o produto quadruplica e sua raiz dobra.",
              ],
              "kind": "list",
            },
            {
              "kind": "p",
              "text": "Quando a altura cai exatamente no ponto médio da hipotenusa, o triângulo é isósceles, e os dois catetos devem coincidir, como mostra o diagrama abaixo.",
            },
          ],
          "h2": "Propriedades Importantes do Cateto B a Partir da Projeção",
          "image": {
            "alt": "Triângulo retângulo isósceles com hipotenusa 20, projeções p e q iguais a 10, e catetos a e b cada um igual a 10 raiz de 2",
            "caption": "Projeções iguais: c = 20 com p = q = 10 dá a = b = 10 raiz de 2, cerca de 14,142.",
            "src": "leg-b-equal-projections.svg",
          },
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada erro abaixo é seguido de sua correção. A maioria deles tem origem na rotulagem, não na aritmética.",
            },
            {
              "kind": "steps",
              "steps": [
                "Esquecer a raiz quadrada: informar cq como resposta. Com c = 10 e q = 6,4, a resposta é 8 cm, e não 64.",
                "Confundir b com b ao quadrado: 64 é b ao quadrado nesse exemplo, enquanto 8 é o cateto. Diga a qual deles você se refere antes de anotar um número.",
                "Usar a projeção p em vez de q: digitar p devolve o cateto a. Com c = 25 e p = 9, o resultado 15 é o cateto a, e não o cateto b.",
                "Digitar um cateto no campo da hipotenusa: a hipotenusa é o lado oposto ao ângulo reto e o lado mais longo. Um cateto digitado como c distorce todos os passos seguintes.",
                "Confundir a hipotenusa com uma projeção: c é o lado inteiro, enquanto q é apenas parte dele. Confira se q é menor que c antes de calcular.",
                "Usar q maior que ou igual a c: não existe tal triângulo, pois q é parte de c. Confira novamente os rótulos do diagrama se isso acontecer.",
                "Misturar centímetros e metros: converta primeiro, como no Exemplo 7, em que 0,5 m se tornaram 50 cm antes de multiplicar por 20 cm.",
                "Usar medidas negativas: comprimentos são positivos, por isso uma entrada negativa indica um erro de dados, não um cateto negativo.",
                "Aplicar a fórmula a um triângulo não retângulo: o teorema da projeção precisa da altura traçada a partir de um ângulo reto. Sem ângulo reto, não há projeção q nesse sentido.",
                "Arredondar cedo demais: arredondar o produto antes de extrair a raiz desloca a resposta. Mantenha a precisão total até o passo final.",
                "Usar a correspondência de lados errada no diagrama: emparelhar q com a, ou p com b, troca os catetos. Combine q com o cateto que toca o vértice B.",
                "Tratar a altura como uma projeção: a altura h é perpendicular à hipotenusa, não um pedaço dela, por isso nunca pertence ao campo q.",
              ],
            },
            {
              "kind": "p",
              "text": "Se uma resposta parecer errada, pare e rotule o diagrama novamente antes de recalcular. A maioria dos erros acima desaparece quando p e q estão claramente marcados na hipotenusa e todo o resto é deixado de lado.",
            },
          ],
          "h2": "Erros Comuns ao Encontrar o Cateto B a Partir da Projeção",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "O uso mais direto é a lição de geometria e o trabalho em sala de aula, onde os problemas de projeção testam se os alunos sabem legendar um diagrama e aplicar [[b^2 = c \\times q]] em vez de recorrer ao teorema de Pitágoras por hábito. Os exercícios de triângulos semelhantes usam a mesma configuração, pois a própria demonstração é um exercício de correspondência de lados.",
            },
            {
              "kind": "p",
              "text": "O desenho técnico usa o teorema quando um triângulo retângulo precisa ser reconstruído a partir de medidas parciais: se um desenho fornece a hipotenusa e o pé da altura, o cateto que falta segue sem medir a figura novamente. Os professores também usam a configuração como uma lição de transição entre a soma de segmentos e a semelhança.",
            },
            {
              "kind": "p",
              "text": "Uma condição limita todas as aplicações: a geometria de triângulo retângulo necessária precisa existir de fato. O teorema descreve relações geométricas exatas, não medidas aproximadas de campo, por isso nunca substitui um levantamento cuidadoso ou uma medição profissional de engenharia. Dentro de seu contexto adequado, porém, ele transforma dois comprimentos conhecidos em um terceiro com uma única multiplicação e uma raiz quadrada.",
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
              "text": "Um triângulo retângulo tem hipotenusa [[c = 36]] cm e projeção [[q = 9]] cm. Encontre o cateto b.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Projeção Decimal",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 26]] cm e [[q = 6.5]] cm, encontre o cateto b.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Hipotenusa Grande",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 100]] cm e [[q = 36]] cm, encontre o cateto b.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Conversão de Unidades",
            },
            {
              "kind": "p",
              "text": "Uma hipotenusa mede [[c = 1.5]] m e sua projeção q mede 24 cm. Encontre o cateto b em centímetros.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Encontre q a Partir de p e c Primeiro",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem hipotenusa [[c = 65]] cm e projeção [[p = 49]] cm. Encontre o cateto b.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Várias Etapas com o Cateto a e Pitágoras",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 50]] cm e [[q = 32]] cm, encontre o cateto b, depois encontre o cateto a e confira o resultado com o teorema de Pitágoras.",
            },
            {
              "kind": "h3",
              "text": "Respostas dos Problemas Práticos",
            },
            {
              "kind": "p",
              "text": "Resposta 1: [[b = \\sqrt{36 \\times 9} = \\sqrt{324} = 18]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 2: [[b = \\sqrt{26 \\times 6.5} = \\sqrt{169} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 3: [[b = \\sqrt{100 \\times 36} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 4: Converta 1,5 m para 150 cm, depois [[b = \\sqrt{150 \\times 24} = \\sqrt{3600} = 60]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 5: Primeiro [[q = 65 - 49 = 16]] cm, depois [[b = \\sqrt{65 \\times 16} = \\sqrt{1040} \\approx 32.249]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 6: [[b = \\sqrt{50 \\times 32} = \\sqrt{1600} = 40]] cm. A outra projeção é [[p = 50 - 32 = 18]] cm, logo [[a = \\sqrt{50 \\times 18} = \\sqrt{900} = 30]] cm. Confira: [[30^2 + 40^2 = 900 + 1600 = 2500 = 50^2]].",
            },
          ],
          "h2": "Problemas Práticos com Respostas",
        },
      },
      "tocHeading": "Conteúdo do Guia",
      "tocItems": {
        "sec-intro": "Calculadora de Cateto B a Partir da Projeção de Triângulo Retângulo",
        "sec-calculate": "Calcular o Cateto B de Triângulo Retângulo a Partir da Projeção",
        "sec-what-leg-b": "O Que É o Cateto B em um Triângulo Retângulo?",
        "sec-what-projection-q": "O Que É a Projeção Q em um Triângulo Retângulo?",
        "sec-formula": "Fórmula do Cateto B de Triângulo Retângulo a Partir da Projeção",
        "sec-why-sqrt": "Por Que Há uma Raiz Quadrada na Fórmula?",
        "sec-how": "Como Usar a Calculadora de Cateto B de Triângulo Retângulo",
        "sec-step-example": "Exemplo Passo a Passo de Como Encontrar o Cateto B",
        "sec-diagram": "Diagrama do Cateto B de Triângulo Retângulo a Partir da Projeção Explicado",
        "sec-proof": "Por Que o Teorema da Projeção Funciona?",
        "sec-examples": "Exemplos Resolvidos de Como Encontrar o Cateto B a Partir da Projeção",
        "sec-other-projection": "Como Encontrar o Cateto B Quando a Outra Projeção É Conhecida",
        "sec-relationship": "Relação Entre o Cateto B, a Hipotenusa e a Projeção Q",
        "sec-leg-a": "Relação Entre o Cateto B e o Cateto A",
        "sec-pythagoras": "Relação Entre a Projeção Q e o Teorema de Pitágoras",
        "sec-verify": "Como Verificar o Cateto B Calculado",
        "sec-properties": "Propriedades Importantes do Cateto B a Partir da Projeção",
        "sec-mistakes": "Erros Comuns ao Encontrar o Cateto B a Partir da Projeção",
        "sec-applications": "Aplicações Práticas do Teorema da Projeção",
        "sec-practice": "Problemas Práticos com Respostas",
        "sec-related": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
        "sec-faq": "Perguntas Frequentes",
      },
    },
};
