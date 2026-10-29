/**
 * SIDE_GUIDE_TRANSLATIONS_BATCH2 - Localized content for the Right Triangle Side Calculator guide.
 * Batch 2: pt, bn, ja, ko, ms, pl. Produced from the English SideGuide.astro master (2026-10-29).
 *
 * Conventions:
 * - tocItems: 16 TOC labels keyed by section id (side-summary has no TOC entry).
 * - sections: 17 sections; each has h2, h3s, paragraphs (convenience arrays) and blocks
 *   (ordered {kind:'h3'|'p', text} array in exact document order for rendering).
 * - Extra fields where applicable: imgAlt, figcaption, list (ordered steps), table
 *   ({headers, rows}), linkAnchor (translated anchor text; URL unchanged).
 * - faqs: 12 {question, answer} pairs. relatedItems: 7 calculator names (anchor text;
 *   destination URLs stay /right-triangle-calculator/ etc., unchanged).
 * - Preserved verbatim everywhere: math formulas (a² + b² = c², c = √(a² + b²),
 *   b = √(c² − a²), a = √(c² − b²)), KaTeX [[...]]/[[[...]]] markup incl. LaTeX,
 *   variable names a/b/c, numbers and example values, unit symbols, table formula/example/
 *   verification cells. No em dashes anywhere.
 */
export const SIDE_GUIDE_TRANSLATIONS_BATCH2 = {
  "pt": {
    "tocHeading": "Neste Guia",
    "tocItems": {
      "side-intro": "Como Encontrar um Lado Desconhecido",
      "side-anatomy": "Conhecendo os Três Lados",
      "side-pythagoras": "O Teorema de Pitágoras",
      "side-hypotenuse": "Encontrando a Hipotenusa",
      "side-leg": "Encontrando um Cateto Desconhecido",
      "side-howto": "Como Usar a Calculadora",
      "side-formulas": "Fórmulas em Resumo",
      "side-applications": "Exemplos da Vida Real",
      "side-triples": "Ternos Pitagóricos",
      "side-units": "Unidades e Precisão",
      "side-invalid": "Entradas Inválidas",
      "side-verify": "Verificando a Sua Resposta",
      "side-mistakes": "Erros Comuns",
      "side-beyond": "Quando Pitágoras Não É Suficiente",
      "side-related": "Calculadoras Relacionadas",
      "side-faq": "Perguntas Frequentes"
    },
    "sections": {
      "side-intro": {
        "h2": "Como Encontrar o Lado Desconhecido de um Triângulo Retângulo",
        "h3s": [],
        "paragraphs": [
          "Uma calculadora de lados de triângulo retângulo encontra o comprimento desconhecido em um triângulo retângulo quando você conhece os outros dois lados. Usos comuns incluem medir diagonais de cômodos, verificar vigas de sustentação ou conferir respostas de exercícios. A calculadora precisa de exatamente dois comprimentos de lado para funcionar. Ela aplica o teorema de Pitágoras, que relaciona os três lados de todo triângulo retângulo. Encontrar a hipotenusa usa adição sob uma raiz quadrada, enquanto encontrar um cateto desconhecido usa subtração. O método funciona apenas para triângulos retângulos, pois a relação depende do ângulo de 90 graus. Por exemplo, um triângulo retângulo com lados perpendiculares de 6 cm e 8 cm tem hipotenusa de 10 cm. Esse mesmo princípio mede distâncias reais, de comprimentos de escadas a diagonais de telas."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Uma calculadora de lados de triângulo retângulo encontra o comprimento desconhecido em um triângulo retângulo quando você conhece os outros dois lados. Usos comuns incluem medir diagonais de cômodos, verificar vigas de sustentação ou conferir respostas de exercícios. A calculadora precisa de exatamente dois comprimentos de lado para funcionar. Ela aplica o teorema de Pitágoras, que relaciona os três lados de todo triângulo retângulo. Encontrar a hipotenusa usa adição sob uma raiz quadrada, enquanto encontrar um cateto desconhecido usa subtração. O método funciona apenas para triângulos retângulos, pois a relação depende do ângulo de 90 graus. Por exemplo, um triângulo retângulo com lados perpendiculares de 6 cm e 8 cm tem hipotenusa de 10 cm. Esse mesmo princípio mede distâncias reais, de comprimentos de escadas a diagonais de telas."
          }
        ]
      },
      "side-anatomy": {
        "h2": "Conhecendo os Três Lados de um Triângulo Retângulo",
        "h3s": [
          "O Que É um Triângulo Retângulo?",
          "O Que É a Hipotenusa?",
          "O Que São os Dois Catetos?",
          "Como Identificar o Lado Correto?"
        ],
        "paragraphs": [
          "Um triângulo retângulo contém um ângulo que mede exatamente 90 graus, igual ao canto de um quadrado ou retângulo. Os outros dois ângulos devem ser agudos, ou seja, cada um mede menos de 90 graus. Como os ângulos de um triângulo somam 180 graus, os dois ângulos não retos totalizam 90 graus. Isso difere dos triângulos acutângulos (todos os ângulos abaixo de 90°) e dos triângulos obtusângulos (um ângulo acima de 90°). O ângulo reto cria a relação perpendicular por trás do teorema de Pitágoras.",
          "A hipotenusa fica oposta ao ângulo reto, atravessando o canto de 90 graus. É sempre o lado mais longo porque abrange a maior distância entre dois vértices. Em diagramas rotacionados, o lado que não toca o marcador do ângulo reto é a hipotenusa. Esta calculadora a rotula como c, seguindo a convenção padrão em que c denota a hipotenusa na fórmula [[a^2 + b^2 = c^2]].",
          "Os catetos são os dois lados que formam o ângulo reto, encontrando-se a 90 graus. Eles são rotulados como a e b nesta calculadora. Trocar os rótulos não muda a hipotenusa, pois a² + b² é igual a b² + a². A calculadora os mantém separados para que os modos de cateto desconhecido saibam qual cateto resolver. Quando você conhece os dois catetos, qualquer ordem funciona para encontrar a hipotenusa.",
          "Localize o marcador do ângulo reto (o pequeno quadrado). O lado oposto é a hipotenusa; os dois lados que o tocam são os catetos. Para diagramas rotacionados, imagine girar o triângulo até que o ângulo reto fique no canto inferior esquerdo, com um cateto na horizontal e o outro na vertical. Sem um marcador de ângulo reto, confirme que o triângulo é retângulo antes de usar esta calculadora."
        ],
        "blocks": [
          {
            "kind": "h3",
            "text": "O Que É um Triângulo Retângulo?"
          },
          {
            "kind": "p",
            "text": "Um triângulo retângulo contém um ângulo que mede exatamente 90 graus, igual ao canto de um quadrado ou retângulo. Os outros dois ângulos devem ser agudos, ou seja, cada um mede menos de 90 graus. Como os ângulos de um triângulo somam 180 graus, os dois ângulos não retos totalizam 90 graus. Isso difere dos triângulos acutângulos (todos os ângulos abaixo de 90°) e dos triângulos obtusângulos (um ângulo acima de 90°). O ângulo reto cria a relação perpendicular por trás do teorema de Pitágoras."
          },
          {
            "kind": "h3",
            "text": "O Que É a Hipotenusa?"
          },
          {
            "kind": "p",
            "text": "A hipotenusa fica oposta ao ângulo reto, atravessando o canto de 90 graus. É sempre o lado mais longo porque abrange a maior distância entre dois vértices. Em diagramas rotacionados, o lado que não toca o marcador do ângulo reto é a hipotenusa. Esta calculadora a rotula como c, seguindo a convenção padrão em que c denota a hipotenusa na fórmula [[a^2 + b^2 = c^2]]."
          },
          {
            "kind": "h3",
            "text": "O Que São os Dois Catetos?"
          },
          {
            "kind": "p",
            "text": "Os catetos são os dois lados que formam o ângulo reto, encontrando-se a 90 graus. Eles são rotulados como a e b nesta calculadora. Trocar os rótulos não muda a hipotenusa, pois a² + b² é igual a b² + a². A calculadora os mantém separados para que os modos de cateto desconhecido saibam qual cateto resolver. Quando você conhece os dois catetos, qualquer ordem funciona para encontrar a hipotenusa."
          },
          {
            "kind": "h3",
            "text": "Como Identificar o Lado Correto?"
          },
          {
            "kind": "p",
            "text": "Localize o marcador do ângulo reto (o pequeno quadrado). O lado oposto é a hipotenusa; os dois lados que o tocam são os catetos. Para diagramas rotacionados, imagine girar o triângulo até que o ângulo reto fique no canto inferior esquerdo, com um cateto na horizontal e o outro na vertical. Sem um marcador de ângulo reto, confirme que o triângulo é retângulo antes de usar esta calculadora."
          }
        ],
        "imgAlt": "Triângulo retângulo rotulado mostrando os catetos a e b, a hipotenusa c, o ângulo reto em C e os ângulos agudos A e B",
        "figcaption": "Partes de um triângulo retângulo: os catetos a e b formam o ângulo reto em C, a hipotenusa c fica oposta, com os ângulos agudos A e B."
      },
      "side-pythagoras": {
        "h2": "Como o Teorema de Pitágoras Calcula os Lados do Triângulo",
        "h3s": [
          "Entendendo Por Que a Fórmula Funciona"
        ],
        "paragraphs": [
          "O teorema de Pitágoras afirma que [[a^2 + b^2 = c^2]], onde a e b são os catetos e c é a hipotenusa. Cada variável é um comprimento de lado. Elevar ao quadrado multiplica um número por ele mesmo (6² = 36); a raiz quadrada reverte isso (√100 = 10). Você extrai a raiz porque a fórmula relaciona comprimentos ao quadrado, não os comprimentos em si. Somar os comprimentos dos catetos (6 + 8 = 14) está errado; some seus quadrados (36 + 64 = 100) e depois extraia a raiz. O teorema exige o ângulo de 90 graus; triângulos não retângulos exigem a Lei dos Cossenos. Os três modos da calculadora rearranjam esta equação: [[c = \\\\sqrt{a^2 + b^2}]], [[b = \\\\sqrt{c^2 - a^2}]], [[a = \\\\sqrt{c^2 - b^2}]].",
          "Desenhe um quadrado em cada lado: áreas a², b² e c². O teorema diz que as duas áreas menores somam-se à maior. Para 3-4-5: quadrados de 9 e 16 unidades quadradas somam 25, a área do quadrado da hipotenusa. Elevar ao quadrado importa porque você compara áreas, não comprimentos."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "O teorema de Pitágoras afirma que [[a^2 + b^2 = c^2]], onde a e b são os catetos e c é a hipotenusa. Cada variável é um comprimento de lado. Elevar ao quadrado multiplica um número por ele mesmo (6² = 36); a raiz quadrada reverte isso (√100 = 10). Você extrai a raiz porque a fórmula relaciona comprimentos ao quadrado, não os comprimentos em si. Somar os comprimentos dos catetos (6 + 8 = 14) está errado; some seus quadrados (36 + 64 = 100) e depois extraia a raiz. O teorema exige o ângulo de 90 graus; triângulos não retângulos exigem a Lei dos Cossenos. Os três modos da calculadora rearranjam esta equação: [[c = \\\\sqrt{a^2 + b^2}]], [[b = \\\\sqrt{c^2 - a^2}]], [[a = \\\\sqrt{c^2 - b^2}]]."
          },
          {
            "kind": "h3",
            "text": "Entendendo Por Que a Fórmula Funciona"
          },
          {
            "kind": "p",
            "text": "Desenhe um quadrado em cada lado: áreas a², b² e c². O teorema diz que as duas áreas menores somam-se à maior. Para 3-4-5: quadrados de 9 e 16 unidades quadradas somam 25, a área do quadrado da hipotenusa. Elevar ao quadrado importa porque você compara áreas, não comprimentos."
          }
        ],
        "imgAlt": "Triângulo retângulo 3-4-5 com quadrados em cada lado rotulados 9, 16 e 25 unidades quadradas mostrando que 9 mais 16 é igual a 25",
        "figcaption": "Prova visual: os quadrados de 9 e 16 unidades quadradas sobre os catetos combinam-se para igualar o quadrado de 25 unidades quadradas sobre a hipotenusa."
      },
      "side-hypotenuse": {
        "h2": "Como Encontrar a Hipotenusa Usando os Dois Catetos",
        "h3s": [
          "Exemplo 1: Encontrando a Hipotenusa de um Triângulo Retângulo 6-8",
          "Exemplo 2: Encontrando uma Hipotenusa com Medidas Decimais",
          "Quando Usar Este Modo da Calculadora?"
        ],
        "paragraphs": [
          "Resolver [[a^2 + b^2 = c^2]] para c resulta em [[c = \\\\sqrt{a^2 + b^2}]]. O processo: identifique os dois catetos, eleve cada um ao quadrado, some os quadrados, extraia a raiz, escreva a unidade e confirme que o resultado é maior que ambos os catetos.",
          "Dados os catetos a = 6 cm e b = 8 cm: eleve cada um ao quadrado (36 e 64), some (100), extraia a raiz (10). A hipotenusa é 10 cm, maior que ambos os catetos, como esperado.",
          "Dados a = 2.5 m, b = 6 m: 2.5² + 6² = 6.25 + 36 = 42.25, √42.25 = 6.5 m. Decimais exigem aritmética cuidadosa; mantenha a precisão total até o arredondamento final.",
          "Use o modo hipotenusa com dois catetos conhecidos: diagonais de cômodos, escoras de suporte ou problemas de geometria que fornecem lados perpendiculares. Com a hipotenusa mais um cateto, mude para o modo de cateto desconhecido."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Resolver [[a^2 + b^2 = c^2]] para c resulta em [[c = \\\\sqrt{a^2 + b^2}]]. O processo: identifique os dois catetos, eleve cada um ao quadrado, some os quadrados, extraia a raiz, escreva a unidade e confirme que o resultado é maior que ambos os catetos."
          },
          {
            "kind": "h3",
            "text": "Exemplo 1: Encontrando a Hipotenusa de um Triângulo Retângulo 6-8"
          },
          {
            "kind": "p",
            "text": "Dados os catetos a = 6 cm e b = 8 cm: eleve cada um ao quadrado (36 e 64), some (100), extraia a raiz (10). A hipotenusa é 10 cm, maior que ambos os catetos, como esperado."
          },
          {
            "kind": "h3",
            "text": "Exemplo 2: Encontrando uma Hipotenusa com Medidas Decimais"
          },
          {
            "kind": "p",
            "text": "Dados a = 2.5 m, b = 6 m: 2.5² + 6² = 6.25 + 36 = 42.25, √42.25 = 6.5 m. Decimais exigem aritmética cuidadosa; mantenha a precisão total até o arredondamento final."
          },
          {
            "kind": "h3",
            "text": "Quando Usar Este Modo da Calculadora?"
          },
          {
            "kind": "p",
            "text": "Use o modo hipotenusa com dois catetos conhecidos: diagonais de cômodos, escoras de suporte ou problemas de geometria que fornecem lados perpendiculares. Com a hipotenusa mais um cateto, mude para o modo de cateto desconhecido."
          }
        ]
      },
      "side-leg": {
        "h2": "Como Encontrar um Cateto Desconhecido de um Triângulo Retângulo",
        "h3s": [
          "Encontrar o Cateto b Quando a Hipotenusa c e o Cateto a São Conhecidos",
          "Exemplo 3: Encontrar o Cateto b a Partir de uma Hipotenusa de 13 cm",
          "Encontrar o Cateto a Quando a Hipotenusa c e o Cateto b São Conhecidos",
          "Exemplo 4: Encontrando o Cateto Desconhecido"
        ],
        "paragraphs": [
          "Quando você conhece a hipotenusa e um cateto, rearranje o teorema de Pitágoras para isolar o cateto desconhecido. Começando de [[a^2 + b^2 = c^2]], subtraia o quadrado do cateto conhecido de ambos os lados. Isso gera duas fórmulas, uma para cada cateto.",
          "A fórmula é [[b = \\\\sqrt{c^2 - a^2}]]. Derivação: comece com [[a^2 + b^2 = c^2]], subtraia a² de ambos os lados para obter [[b^2 = c^2 - a^2]] e extraia a raiz quadrada. A subtração reflete que o quadrado da hipotenusa contém os quadrados de ambos os catetos, então remover um deixa o outro.",
          "Dados c = 13 cm e a = 5 cm, encontre o cateto b. Eleve ambos ao quadrado: 13² = 169 e 5² = 25. Subtraia: 169 − 25 = 144. Extraia a raiz: √144 = 12. O cateto b mede 12 cm. Verifique: 5² + 12² = 25 + 144 = 169 = 13². O terno 5-12-13 confirma o resultado.",
          "A fórmula é [[a = \\\\sqrt{c^2 - b^2}]]. Os catetos são intercambiáveis na relação pitagórica; rotular um como a e o outro como b é uma convenção. A calculadora oferece os dois modos para que você possa combinar os rótulos dos campos com o seu problema específico sem trocar as variáveis mentalmente.",
          "Dados c = 17 polegadas e b = 15 polegadas, encontre o cateto a. Eleve ao quadrado: 17² = 289 e 15² = 225. Subtraia: 289 − 225 = 64. Extraia a raiz: √64 = 8. O cateto a é 8 polegadas. Este é o terno 8-15-17. Os dois modos de cateto desconhecido diferem apenas em qual cateto é conhecido; a matemática é idêntica."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Quando você conhece a hipotenusa e um cateto, rearranje o teorema de Pitágoras para isolar o cateto desconhecido. Começando de [[a^2 + b^2 = c^2]], subtraia o quadrado do cateto conhecido de ambos os lados. Isso gera duas fórmulas, uma para cada cateto."
          },
          {
            "kind": "h3",
            "text": "Encontrar o Cateto b Quando a Hipotenusa c e o Cateto a São Conhecidos"
          },
          {
            "kind": "p",
            "text": "A fórmula é [[b = \\\\sqrt{c^2 - a^2}]]. Derivação: comece com [[a^2 + b^2 = c^2]], subtraia a² de ambos os lados para obter [[b^2 = c^2 - a^2]] e extraia a raiz quadrada. A subtração reflete que o quadrado da hipotenusa contém os quadrados de ambos os catetos, então remover um deixa o outro."
          },
          {
            "kind": "h3",
            "text": "Exemplo 3: Encontrar o Cateto b a Partir de uma Hipotenusa de 13 cm"
          },
          {
            "kind": "p",
            "text": "Dados c = 13 cm e a = 5 cm, encontre o cateto b. Eleve ambos ao quadrado: 13² = 169 e 5² = 25. Subtraia: 169 − 25 = 144. Extraia a raiz: √144 = 12. O cateto b mede 12 cm. Verifique: 5² + 12² = 25 + 144 = 169 = 13². O terno 5-12-13 confirma o resultado."
          },
          {
            "kind": "h3",
            "text": "Encontrar o Cateto a Quando a Hipotenusa c e o Cateto b São Conhecidos"
          },
          {
            "kind": "p",
            "text": "A fórmula é [[a = \\\\sqrt{c^2 - b^2}]]. Os catetos são intercambiáveis na relação pitagórica; rotular um como a e o outro como b é uma convenção. A calculadora oferece os dois modos para que você possa combinar os rótulos dos campos com o seu problema específico sem trocar as variáveis mentalmente."
          },
          {
            "kind": "h3",
            "text": "Exemplo 4: Encontrando o Cateto Desconhecido"
          },
          {
            "kind": "p",
            "text": "Dados c = 17 polegadas e b = 15 polegadas, encontre o cateto a. Eleve ao quadrado: 17² = 289 e 15² = 225. Subtraia: 289 − 225 = 64. Extraia a raiz: √64 = 8. O cateto a é 8 polegadas. Este é o terno 8-15-17. Os dois modos de cateto desconhecido diferem apenas em qual cateto é conhecido; a matemática é idêntica."
          }
        ],
        "imgAlt": "Diagrama dividido mostrando dois triângulos retângulos resolvendo catetos desconhecidos usando o teorema de Pitágoras",
        "figcaption": "Dois cálculos de cateto desconhecido: encontrando b no triângulo 5-12-13 e encontrando a no triângulo 8-15-17.",
        "table": {
          "headers": [
            "Conhecidos",
            "Encontrar",
            "Fórmula",
            "Modo da Calculadora"
          ],
          "rows": [
            [
              "c = 13, a = 5",
              "b",
              "b = √(c² − a²)",
              "Cateto Desconhecido a Partir de c e a"
            ],
            [
              "c = 17, b = 15",
              "a",
              "a = √(c² − b²)",
              "Cateto Desconhecido a Partir de c e b"
            ]
          ]
        }
      },
      "side-howto": {
        "h2": "Como Usar a Calculadora de Lados de Triângulo Retângulo",
        "h3s": [],
        "paragraphs": [
          "A calculadora não salva resultados nem gera relatórios para download. Use a opção de redefinir para limpar os campos para um novo cálculo."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "A calculadora não salva resultados nem gera relatórios para download. Use a opção de redefinir para limpar os campos para um novo cálculo."
          }
        ],
        "list": [
          {
            "lead": "Identifique as duas medidas que você conhece.",
            "text": "Elas devem ser ambas comprimentos de lado, não ângulos."
          },
          {
            "lead": "Determine se o valor desconhecido é a hipotenusa ou um cateto.",
            "text": "Se você conhece os dois catetos, precisa da hipotenusa. Se você conhece a hipotenusa e um cateto, precisa do outro cateto."
          },
          {
            "lead": "Escolha o modo correto.",
            "text": "Selecione \"Teorema de Pitágoras\" para dois catetos conhecidos, \"Cateto Desconhecido a Partir de c e a\" quando você conhece a hipotenusa e o cateto a, ou \"Cateto Desconhecido a Partir de c e b\" quando você conhece a hipotenusa e o cateto b."
          },
          {
            "lead": "Insira as duas medidas nos campos correspondentes.",
            "text": "Verifique se cada valor vai para o campo correto; trocar a hipotenusa por um cateto produz um erro."
          },
          {
            "lead": "Escolha a unidade de medida.",
            "text": "Use a mesma unidade para as duas entradas."
          },
          {
            "lead": "Calcule.",
            "text": "O resultado aparece com os passos da solução mostrando a substituição e a aritmética."
          },
          {
            "lead": "Revise o resultado e os passos.",
            "text": "Confirme que a fórmula corresponde à sua situação e que a aritmética parece correta."
          },
          {
            "lead": "Verifique se a resposta faz sentido.",
            "text": "A hipotenusa deve ser maior que ambos os catetos. Um cateto desconhecido deve ser menor que a hipotenusa. Se isso falhar, verifique suas entradas."
          }
        ]
      },
      "side-formulas": {
        "h2": "Fórmulas de Lados de Triângulo Retângulo em Resumo",
        "h3s": [],
        "paragraphs": [
          "Você não precisa decorar três fórmulas separadas. Lembre-se apenas de [[a^2 + b^2 = c^2]] e resolva para o desconhecido. Se c for desconhecido, some os quadrados dos catetos e extraia a raiz. Se um cateto for desconhecido, subtraia o quadrado do cateto conhecido de c² e extraia a raiz. Os nomes dos modos da calculadora dizem qual arranjo usar."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Você não precisa decorar três fórmulas separadas. Lembre-se apenas de [[a^2 + b^2 = c^2]] e resolva para o desconhecido. Se c for desconhecido, some os quadrados dos catetos e extraia a raiz. Se um cateto for desconhecido, subtraia o quadrado do cateto conhecido de c² e extraia a raiz. Os nomes dos modos da calculadora dizem qual arranjo usar."
          }
        ],
        "table": {
          "headers": [
            "Medidas Conhecidas",
            "Lado Desconhecido",
            "Fórmula",
            "Modo da Calculadora",
            "Exemplo"
          ],
          "rows": [
            [
              "Catetos a e b",
              "Hipotenusa c",
              "c = √(a² + b²)",
              "Teorema de Pitágoras",
              "a=6, b=8 → c=10"
            ],
            [
              "Hipotenusa c, cateto a",
              "Cateto b",
              "b = √(c² − a²)",
              "Cateto Desconhecido a Partir de c e a",
              "c=13, a=5 → b=12"
            ],
            [
              "Hipotenusa c, cateto b",
              "Cateto a",
              "a = √(c² − b²)",
              "Cateto Desconhecido a Partir de c e b",
              "c=17, b=15 → a=8"
            ]
          ]
        }
      },
      "side-applications": {
        "h2": "Exemplos da Vida Real de Cálculos de Lados de Triângulo Retângulo",
        "h3s": [
          "Exemplo 5: Escada Encostada na Parede",
          "Exemplo 6: Diagonal de um Cômodo Retangular",
          "Exemplo 7: Comprimento do Caibro do Telhado",
          "Exemplo 8: Diagonal de TV ou Monitor",
          "Exemplo 9: Medindo uma Rampa",
          "Exemplo 10: Caminho Diagonal em um Jardim Retangular",
          "Exemplo 11: Escora de Suporte com uma Diagonal Conhecida",
          "Exemplo 12: Desenho de Engenharia com Valores Decimais"
        ],
        "paragraphs": [
          "Uma escada alcança 2.4 m verticalmente na parede, com sua base a 1.8 m da parede. A parede e o chão formam um ângulo reto, criando um triângulo retângulo em que a escada é a hipotenusa. Conhecidos: a = 1.8 m (base), b = 2.4 m (altura). Encontrar: c (comprimento da escada). Fórmula: [[c = \\\\sqrt{a^2 + b^2}]]. Substitua: c = √(1.8² + 2.4²) = √(3.24 + 5.76) = √9 = 3. A escada mede 3 m. Isso diz o comprimento de escada necessário para alcançar essa altura a essa distância. Observação: esta geometria não avalia a segurança da escada; siga as diretrizes do fabricante e as normas de segurança para uso real.",
          "Um cômodo mede 9 pés de comprimento e 12 pés de largura. A diagonal entre cantos opostos forma a hipotenusa de um triângulo retângulo com as paredes como catetos. Conhecidos: a = 9 ft, b = 12 ft. Encontrar: c. Fórmula: c = √(9² + 12²) = √(81 + 144) = √225 = 15. A diagonal é 15 ft. Isso ajuda ao verificar se um cômodo é quadrado (as duas diagonais devem coincidir) ou ao determinar a maior distância em linha reta para posicionar móveis.",
          "Uma seção transversal simplificada do telhado tem uma projeção horizontal de 12 ft e uma elevação vertical de 5 ft. O caibro forma a hipotenusa. Conhecidos: projeção = 12 ft, elevação = 5 ft. Encontrar: comprimento do caibro. Fórmula: c = √(12² + 5²) = √(144 + 25) = √169 = 13. O caibro tem 13 ft de comprimento. Este cálculo básico exclui beirais, espessura da cumeeira e folgas de conexão que a construção real exige. Consulte os projetos de construção para especificações completas.",
          "Uma tela retangular mede 16 polegadas de largura e 9 polegadas de altura. A diagonal é a hipotenusa. Conhecidos: largura = 16 in, altura = 9 in. Encontrar: diagonal. Fórmula: d = √(16² + 9²) = √(256 + 81) = √337 ≈ 18.36. A diagonal mede aproximadamente 18.36 polegadas. Isso usa as dimensões declaradas; os tamanhos comerciais de tela podem diferir conforme os métodos de medição do fabricante.",
          "Uma rampa tem uma projeção horizontal de 6 m e uma elevação de 0.75 m. A superfície inclinada é a hipotenusa. Conhecidos: projeção = 6 m, elevação = 0.75 m. Encontrar: comprimento da inclinação. Fórmula: s = √(6² + 0.75²) = √(36 + 0.5625) = √36.5625 ≈ 6.05. A inclinação mede cerca de 6.05 m. A projeção horizontal (6 m) difere do comprimento da inclinação (6.05 m); a inclinação é sempre um pouco maior. Isso não verifica a conformidade com acessibilidade; consulte os códigos locais de construção para os requisitos de rampas.",
          "Um jardim retangular tem 30 ft de largura e 40 ft de comprimento. Um caminho diagonal o atravessa. Conhecidos: a = 30 ft, b = 40 ft. Encontrar: comprimento do caminho. Fórmula: c = √(30² + 40²) = √(900 + 1600) = √2500 = 50. O caminho tem 50 ft. Caminhar pela diagonal (50 ft) é mais curto do que caminhar pelos dois lados (70 ft), e é por isso que caminhos diagonais economizam tempo.",
          "Uma escora de suporte mede 10 ft de comprimento (hipotenusa) e abrange 8 ft na horizontal. Encontre a distância vertical. Conhecidos: c = 10 ft, a = 8 ft. Encontrar: b. Fórmula: b = √(c² − a²) = √(100 − 64) = √36 = 6. A distância vertical é 6 ft. A subtração é necessária porque o quadrado da hipotenusa contém os quadrados de ambos os catetos; remover o componente horizontal conhecido deixa o vertical.",
          "Um projeto de suporte especifica uma hipotenusa de 250 mm e um cateto de 70 mm. Encontre o outro cateto. Conhecidos: c = 250 mm, b = 70 mm. Encontrar: a. Fórmula: a = √(c² − b²) = √(62500 − 4900) = √57600 = 240. O cateto mede 240 mm. Com entradas em milímetros, o resultado é exato aqui, mas na prática arredonde para a precisão da sua medida menos precisa. Não informe mais casas decimais do que seus instrumentos podem medir."
        ],
        "blocks": [
          {
            "kind": "h3",
            "text": "Exemplo 5: Escada Encostada na Parede"
          },
          {
            "kind": "p",
            "text": "Uma escada alcança 2.4 m verticalmente na parede, com sua base a 1.8 m da parede. A parede e o chão formam um ângulo reto, criando um triângulo retângulo em que a escada é a hipotenusa. Conhecidos: a = 1.8 m (base), b = 2.4 m (altura). Encontrar: c (comprimento da escada). Fórmula: [[c = \\\\sqrt{a^2 + b^2}]]. Substitua: c = √(1.8² + 2.4²) = √(3.24 + 5.76) = √9 = 3. A escada mede 3 m. Isso diz o comprimento de escada necessário para alcançar essa altura a essa distância. Observação: esta geometria não avalia a segurança da escada; siga as diretrizes do fabricante e as normas de segurança para uso real."
          },
          {
            "kind": "h3",
            "text": "Exemplo 6: Diagonal de um Cômodo Retangular"
          },
          {
            "kind": "p",
            "text": "Um cômodo mede 9 pés de comprimento e 12 pés de largura. A diagonal entre cantos opostos forma a hipotenusa de um triângulo retângulo com as paredes como catetos. Conhecidos: a = 9 ft, b = 12 ft. Encontrar: c. Fórmula: c = √(9² + 12²) = √(81 + 144) = √225 = 15. A diagonal é 15 ft. Isso ajuda ao verificar se um cômodo é quadrado (as duas diagonais devem coincidir) ou ao determinar a maior distância em linha reta para posicionar móveis."
          },
          {
            "kind": "h3",
            "text": "Exemplo 7: Comprimento do Caibro do Telhado"
          },
          {
            "kind": "p",
            "text": "Uma seção transversal simplificada do telhado tem uma projeção horizontal de 12 ft e uma elevação vertical de 5 ft. O caibro forma a hipotenusa. Conhecidos: projeção = 12 ft, elevação = 5 ft. Encontrar: comprimento do caibro. Fórmula: c = √(12² + 5²) = √(144 + 25) = √169 = 13. O caibro tem 13 ft de comprimento. Este cálculo básico exclui beirais, espessura da cumeeira e folgas de conexão que a construção real exige. Consulte os projetos de construção para especificações completas."
          },
          {
            "kind": "h3",
            "text": "Exemplo 8: Diagonal de TV ou Monitor"
          },
          {
            "kind": "p",
            "text": "Uma tela retangular mede 16 polegadas de largura e 9 polegadas de altura. A diagonal é a hipotenusa. Conhecidos: largura = 16 in, altura = 9 in. Encontrar: diagonal. Fórmula: d = √(16² + 9²) = √(256 + 81) = √337 ≈ 18.36. A diagonal mede aproximadamente 18.36 polegadas. Isso usa as dimensões declaradas; os tamanhos comerciais de tela podem diferir conforme os métodos de medição do fabricante."
          },
          {
            "kind": "h3",
            "text": "Exemplo 9: Medindo uma Rampa"
          },
          {
            "kind": "p",
            "text": "Uma rampa tem uma projeção horizontal de 6 m e uma elevação de 0.75 m. A superfície inclinada é a hipotenusa. Conhecidos: projeção = 6 m, elevação = 0.75 m. Encontrar: comprimento da inclinação. Fórmula: s = √(6² + 0.75²) = √(36 + 0.5625) = √36.5625 ≈ 6.05. A inclinação mede cerca de 6.05 m. A projeção horizontal (6 m) difere do comprimento da inclinação (6.05 m); a inclinação é sempre um pouco maior. Isso não verifica a conformidade com acessibilidade; consulte os códigos locais de construção para os requisitos de rampas."
          },
          {
            "kind": "h3",
            "text": "Exemplo 10: Caminho Diagonal em um Jardim Retangular"
          },
          {
            "kind": "p",
            "text": "Um jardim retangular tem 30 ft de largura e 40 ft de comprimento. Um caminho diagonal o atravessa. Conhecidos: a = 30 ft, b = 40 ft. Encontrar: comprimento do caminho. Fórmula: c = √(30² + 40²) = √(900 + 1600) = √2500 = 50. O caminho tem 50 ft. Caminhar pela diagonal (50 ft) é mais curto do que caminhar pelos dois lados (70 ft), e é por isso que caminhos diagonais economizam tempo."
          },
          {
            "kind": "h3",
            "text": "Exemplo 11: Escora de Suporte com uma Diagonal Conhecida"
          },
          {
            "kind": "p",
            "text": "Uma escora de suporte mede 10 ft de comprimento (hipotenusa) e abrange 8 ft na horizontal. Encontre a distância vertical. Conhecidos: c = 10 ft, a = 8 ft. Encontrar: b. Fórmula: b = √(c² − a²) = √(100 − 64) = √36 = 6. A distância vertical é 6 ft. A subtração é necessária porque o quadrado da hipotenusa contém os quadrados de ambos os catetos; remover o componente horizontal conhecido deixa o vertical."
          },
          {
            "kind": "h3",
            "text": "Exemplo 12: Desenho de Engenharia com Valores Decimais"
          },
          {
            "kind": "p",
            "text": "Um projeto de suporte especifica uma hipotenusa de 250 mm e um cateto de 70 mm. Encontre o outro cateto. Conhecidos: c = 250 mm, b = 70 mm. Encontrar: a. Fórmula: a = √(c² − b²) = √(62500 − 4900) = √57600 = 240. O cateto mede 240 mm. Com entradas em milímetros, o resultado é exato aqui, mas na prática arredonde para a precisão da sua medida menos precisa. Não informe mais casas decimais do que seus instrumentos podem medir."
          }
        ],
        "imgAlt": "Quatro painéis mostrando escada encostada na parede, diagonal de cômodo, caibro de telhado e caminho em jardim com medidas de triângulo retângulo",
        "figcaption": "Triângulos retângulos do dia a dia: escada (3 m), diagonal de cômodo (15 ft), caibro de telhado (13 ft) e caminho no jardim (50 ft)."
      },
      "side-triples": {
        "h2": "Ternos Pitagóricos Comuns e Por Que Eles Importam",
        "h3s": [],
        "paragraphs": [
          "Um terno pitagórico consiste em três números inteiros que satisfazem [[a^2 + b^2 = c^2]]. Esses ternos oferecem verificações mentais rápidas; se suas entradas coincidem com um terno, você sabe a resposta sem calcular. Ternos escalados também funcionam: multiplicar 3-4-5 por 2 dá 6-8-10, que ainda satisfaz a equação (36 + 64 = 100). Nem todo triângulo retângulo tem lados inteiros; a maioria produz decimais ou números irracionais.",
          "Verifique 5-12-13: 5² = 25, 12² = 144, 25 + 144 = 169, √169 = 13. Verifique 8-15-17: 8² = 64, 15² = 225, 64 + 225 = 289, √289 = 17. Quando sua calculadora retornar um número inteiro, confira se ele forma um terno com suas entradas como verificação de sanidade."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Um terno pitagórico consiste em três números inteiros que satisfazem [[a^2 + b^2 = c^2]]. Esses ternos oferecem verificações mentais rápidas; se suas entradas coincidem com um terno, você sabe a resposta sem calcular. Ternos escalados também funcionam: multiplicar 3-4-5 por 2 dá 6-8-10, que ainda satisfaz a equação (36 + 64 = 100). Nem todo triângulo retângulo tem lados inteiros; a maioria produz decimais ou números irracionais."
          },
          {
            "kind": "p",
            "text": "Verifique 5-12-13: 5² = 25, 12² = 144, 25 + 144 = 169, √169 = 13. Verifique 8-15-17: 8² = 64, 15² = 225, 64 + 225 = 289, √289 = 17. Quando sua calculadora retornar um número inteiro, confira se ele forma um terno com suas entradas como verificação de sanidade."
          }
        ],
        "table": {
          "headers": [
            "Terno",
            "Verificação"
          ],
          "rows": [
            [
              "3-4-5",
              "9 + 16 = 25 ✓"
            ],
            [
              "5-12-13",
              "25 + 144 = 169 ✓"
            ],
            [
              "8-15-17",
              "64 + 225 = 289 ✓"
            ],
            [
              "7-24-25",
              "49 + 576 = 625 ✓"
            ],
            [
              "9-40-41",
              "81 + 1600 = 1681 ✓"
            ],
            [
              "6-8-10",
              "36 + 64 = 100 ✓ (scaled 3-4-5)"
            ]
          ]
        }
      },
      "side-units": {
        "h2": "Unidades de Medida, Respostas Decimais e Arredondamento",
        "h3s": [],
        "paragraphs": [
          "Use unidades consistentes: milímetros, centímetros, metros, polegadas, pés, jardas ou quilômetros. Unidades misturadas produzem respostas erradas; 3 pés e 6 polegadas devem virar 3.5 pés ou 42 polegadas antes de calcular. Converta primeiro, depois calcule. Selecione a unidade correspondente na calculadora para as duas entradas. Arredonde somente após o cálculo final, não durante os passos intermediários, para evitar erros acumulados. Uma resposta exata como 10 cm difere de um decimal arredondado como 6.50 m; este último implica precisão de medição. Seu resultado não pode ser mais preciso que sua entrada menos precisa. Se você mede com aproximação ao centímetro, não informe milímetros.",
          "Exemplo com pés e polegadas: uma tábua mede 2 ft 6 in por 3 ft. Converta para polegadas: 30 in e 36 in. Calcule: c = √(30² + 36²) = √(900 + 1296) = √2196 ≈ 46.86 in. Converta de volta: 46.86 in = 3 ft 10.86 in, ou cerca de 3 ft 10.9 in.",
          "Observação: elevar um comprimento ao quadrado produz unidades quadradas (cm²), mas a raiz quadrada final retorna unidades lineares (cm). A calculadora lida com isso automaticamente."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Use unidades consistentes: milímetros, centímetros, metros, polegadas, pés, jardas ou quilômetros. Unidades misturadas produzem respostas erradas; 3 pés e 6 polegadas devem virar 3.5 pés ou 42 polegadas antes de calcular. Converta primeiro, depois calcule. Selecione a unidade correspondente na calculadora para as duas entradas. Arredonde somente após o cálculo final, não durante os passos intermediários, para evitar erros acumulados. Uma resposta exata como 10 cm difere de um decimal arredondado como 6.50 m; este último implica precisão de medição. Seu resultado não pode ser mais preciso que sua entrada menos precisa. Se você mede com aproximação ao centímetro, não informe milímetros."
          },
          {
            "kind": "p",
            "text": "Exemplo com pés e polegadas: uma tábua mede 2 ft 6 in por 3 ft. Converta para polegadas: 30 in e 36 in. Calcule: c = √(30² + 36²) = √(900 + 1296) = √2196 ≈ 46.86 in. Converta de volta: 46.86 in = 3 ft 10.86 in, ou cerca de 3 ft 10.9 in."
          },
          {
            "kind": "p",
            "text": "Observação: elevar um comprimento ao quadrado produz unidades quadradas (cm²), mas a raiz quadrada final retorna unidades lineares (cm). A calculadora lida com isso automaticamente."
          }
        ]
      },
      "side-invalid": {
        "h2": "Por Que Algumas Medidas de Triângulo Não Produzem uma Resposta Válida",
        "h3s": [],
        "paragraphs": [
          "Um triângulo retângulo válido precisa de três comprimentos de lado positivos em que a hipotenusa seja maior que cada cateto. Para cálculos de cateto desconhecido, o valor sob a raiz quadrada (c² − cateto²) deve ser positivo.",
          "<strong>Inválido:</strong> c = 8, a = 10. A hipotenusa (8) é menor que o cateto (10). Isso viola a regra de que a hipotenusa é o lado mais longo. Você provavelmente trocou os rótulos; o 10 deveria ser a hipotenusa.",
          "<strong>Inválido:</strong> c = 5, a = 5. Então b = √(25 − 25) = √0 = 0. Um lado de comprimento zero colapsa o triângulo em um segmento de reta, não em um triângulo válido.",
          "<strong>Inválido:</strong> a = −3, b = 4. Comprimentos negativos não têm significado geométrico. Os comprimentos dos lados devem ser positivos."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Um triângulo retângulo válido precisa de três comprimentos de lado positivos em que a hipotenusa seja maior que cada cateto. Para cálculos de cateto desconhecido, o valor sob a raiz quadrada (c² − cateto²) deve ser positivo."
          },
          {
            "kind": "p",
            "text": "<strong>Inválido:</strong> c = 8, a = 10. A hipotenusa (8) é menor que o cateto (10). Isso viola a regra de que a hipotenusa é o lado mais longo. Você provavelmente trocou os rótulos; o 10 deveria ser a hipotenusa."
          },
          {
            "kind": "p",
            "text": "<strong>Inválido:</strong> c = 5, a = 5. Então b = √(25 − 25) = √0 = 0. Um lado de comprimento zero colapsa o triângulo em um segmento de reta, não em um triângulo válido."
          },
          {
            "kind": "p",
            "text": "<strong>Inválido:</strong> a = −3, b = 4. Comprimentos negativos não têm significado geométrico. Os comprimentos dos lados devem ser positivos."
          }
        ],
        "table": {
          "headers": [
            "Problema",
            "Causa",
            "Solução"
          ],
          "rows": [
            [
              "Hipotenusa menor que o cateto",
              "Rótulos trocados",
              "Atribua o lado mais longo como c"
            ],
            [
              "Zero sob a raiz quadrada",
              "c é igual ao cateto conhecido",
              "Verifique as medidas; o triângulo é degenerado"
            ],
            [
              "Valor negativo sob a raiz quadrada",
              "c menor que o cateto conhecido",
              "Os valores não formam um triângulo retângulo"
            ],
            [
              "Entrada negativa",
              "Erro de digitação ou de sinal",
              "Use apenas comprimentos positivos"
            ],
            [
              "Entrada zero",
              "Medida ausente",
              "Informe o comprimento real"
            ],
            [
              "Unidades misturadas",
              "Pés com polegadas",
              "Converta para uma unidade primeiro"
            ],
            [
              "Triângulo não retângulo",
              "Sem ângulo de 90°",
              "Use a Lei dos Cossenos"
            ]
          ]
        }
      },
      "side-verify": {
        "h2": "Como Verificar se o Lado Calculado Está Correto",
        "h3s": [],
        "paragraphs": [
          "<strong>Método 1: Substitua de volta.</strong> Insira os três lados em [[a^2 + b^2 = c^2]]. Para o triângulo 6-8-10: 36 + 64 = 100. Se os dois lados coincidirem, a resposta está correta.",
          "<strong>Método 2: Verifique se a hipotenusa é a mais longa.</strong> Se você resolveu para c, confirme que ela é maior que a e b. Se você resolveu para um cateto, confirme que ele é menor que c.",
          "<strong>Método 3: Compare com ternos.</strong> Se suas entradas são números inteiros, veja se elas formam um terno conhecido. Entradas 9 e 12 resultando em 15 correspondem ao terno 3-4-5 escalado.",
          "<strong>Método 4: Estime a razoabilidade.</strong> A hipotenusa deve ser maior que cada cateto, mas menor que a soma deles. Para catetos 6 e 8, a hipotenusa 10 satisfaz 8 < 10 < 14.",
          "<strong>Método 5: Verifique unidades e arredondamento.</strong> Confirme que a unidade corresponde às suas entradas e que as casas decimais refletem a precisão da sua medição.",
          "<strong>Exemplo de Verificação 1:</strong> Você calcula c = 13 a partir de a = 5, b = 12. Verifique: 5² + 12² = 25 + 144 = 169 = 13². A hipotenusa 13 é maior que ambos os catetos. Isso corresponde ao terno 5-12-13. Válido.",
          "<strong>Exemplo de Verificação 2:</strong> Você calcula b = 7.5 a partir de c = 12.5, a = 10. Verifique: 10² + 7.5² = 100 + 56.25 = 156.25 = 12.5². O cateto 7.5 é menor que a hipotenusa 12.5. Estimativa: 10 < 12.5 < 20. Válido."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "<strong>Método 1: Substitua de volta.</strong> Insira os três lados em [[a^2 + b^2 = c^2]]. Para o triângulo 6-8-10: 36 + 64 = 100. Se os dois lados coincidirem, a resposta está correta."
          },
          {
            "kind": "p",
            "text": "<strong>Método 2: Verifique se a hipotenusa é a mais longa.</strong> Se você resolveu para c, confirme que ela é maior que a e b. Se você resolveu para um cateto, confirme que ele é menor que c."
          },
          {
            "kind": "p",
            "text": "<strong>Método 3: Compare com ternos.</strong> Se suas entradas são números inteiros, veja se elas formam um terno conhecido. Entradas 9 e 12 resultando em 15 correspondem ao terno 3-4-5 escalado."
          },
          {
            "kind": "p",
            "text": "<strong>Método 4: Estime a razoabilidade.</strong> A hipotenusa deve ser maior que cada cateto, mas menor que a soma deles. Para catetos 6 e 8, a hipotenusa 10 satisfaz 8 < 10 < 14."
          },
          {
            "kind": "p",
            "text": "<strong>Método 5: Verifique unidades e arredondamento.</strong> Confirme que a unidade corresponde às suas entradas e que as casas decimais refletem a precisão da sua medição."
          },
          {
            "kind": "p",
            "text": "<strong>Exemplo de Verificação 1:</strong> Você calcula c = 13 a partir de a = 5, b = 12. Verifique: 5² + 12² = 25 + 144 = 169 = 13². A hipotenusa 13 é maior que ambos os catetos. Isso corresponde ao terno 5-12-13. Válido."
          },
          {
            "kind": "p",
            "text": "<strong>Exemplo de Verificação 2:</strong> Você calcula b = 7.5 a partir de c = 12.5, a = 10. Verifique: 10² + 7.5² = 100 + 56.25 = 156.25 = 12.5². O cateto 7.5 é menor que a hipotenusa 12.5. Estimativa: 10 < 12.5 < 20. Válido."
          }
        ]
      },
      "side-mistakes": {
        "h2": "Erros Comuns ao Calcular Lados de Triângulo Retângulo",
        "h3s": [],
        "paragraphs": [
          "<strong>1. Somar os catetos em vez de seus quadrados.</strong> Calcular 6 + 8 = 14 em vez de √(36 + 64) = 10. O teorema soma áreas ao quadrado, não comprimentos. Eleve ao quadrado primeiro.",
          "<strong>2. Esquecer a raiz quadrada.</strong> Responder 100 em vez de 10 para o triângulo 6-8. A fórmula dá c²; você precisa de c. Extraia a raiz como passo final.",
          "<strong>3. Subtrair ao encontrar a hipotenusa.</strong> Usar √(64 − 36) = √28 em vez de √(64 + 36) = 10. A adição se aplica ao encontrar a hipotenusa a partir de dois catetos.",
          "<strong>4. Somar ao encontrar um cateto desconhecido.</strong> Usar √(169 + 25) em vez de √(169 − 25) = 12. A subtração se aplica quando a hipotenusa é conhecida.",
          "<strong>5. Confundir um cateto com a hipotenusa.</strong> Rotular o lado mais longo como a ou b. A hipotenusa é sempre oposta ao ângulo reto e sempre rotulada como c.",
          "<strong>6. Aplicar o teorema a um triângulo não retângulo.</strong> Usar a² + b² = c² sem um ângulo de 90 graus. Verifique primeiro o ângulo reto.",
          "<strong>7. Arredondar cálculos intermediários.</strong> Arredondar 6.25 para 6.3 no meio do cálculo e obter uma resposta final ligeiramente errada. Mantenha a precisão total até o fim.",
          "<strong>8. Misturar unidades de medida.</strong> Inserir 3 pés e 6 polegadas como 3 e 6. Converta para uma única unidade antes de calcular.",
          "<strong>9. Inserir valores nos campos errados.</strong> Colocar a hipotenusa em um campo de cateto. Combine cada medida com seu rótulo correto.",
          "<strong>10. Interpretar mal um valor negativo sob a raiz.</strong> Ver √(25 − 36) e forçar um cálculo. Um radicando negativo significa que as entradas não formam um triângulo retângulo; verifique seus rótulos."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "<strong>1. Somar os catetos em vez de seus quadrados.</strong> Calcular 6 + 8 = 14 em vez de √(36 + 64) = 10. O teorema soma áreas ao quadrado, não comprimentos. Eleve ao quadrado primeiro."
          },
          {
            "kind": "p",
            "text": "<strong>2. Esquecer a raiz quadrada.</strong> Responder 100 em vez de 10 para o triângulo 6-8. A fórmula dá c²; você precisa de c. Extraia a raiz como passo final."
          },
          {
            "kind": "p",
            "text": "<strong>3. Subtrair ao encontrar a hipotenusa.</strong> Usar √(64 − 36) = √28 em vez de √(64 + 36) = 10. A adição se aplica ao encontrar a hipotenusa a partir de dois catetos."
          },
          {
            "kind": "p",
            "text": "<strong>4. Somar ao encontrar um cateto desconhecido.</strong> Usar √(169 + 25) em vez de √(169 − 25) = 12. A subtração se aplica quando a hipotenusa é conhecida."
          },
          {
            "kind": "p",
            "text": "<strong>5. Confundir um cateto com a hipotenusa.</strong> Rotular o lado mais longo como a ou b. A hipotenusa é sempre oposta ao ângulo reto e sempre rotulada como c."
          },
          {
            "kind": "p",
            "text": "<strong>6. Aplicar o teorema a um triângulo não retângulo.</strong> Usar a² + b² = c² sem um ângulo de 90 graus. Verifique primeiro o ângulo reto."
          },
          {
            "kind": "p",
            "text": "<strong>7. Arredondar cálculos intermediários.</strong> Arredondar 6.25 para 6.3 no meio do cálculo e obter uma resposta final ligeiramente errada. Mantenha a precisão total até o fim."
          },
          {
            "kind": "p",
            "text": "<strong>8. Misturar unidades de medida.</strong> Inserir 3 pés e 6 polegadas como 3 e 6. Converta para uma única unidade antes de calcular."
          },
          {
            "kind": "p",
            "text": "<strong>9. Inserir valores nos campos errados.</strong> Colocar a hipotenusa em um campo de cateto. Combine cada medida com seu rótulo correto."
          },
          {
            "kind": "p",
            "text": "<strong>10. Interpretar mal um valor negativo sob a raiz.</strong> Ver √(25 − 36) e forçar um cálculo. Um radicando negativo significa que as entradas não formam um triângulo retângulo; verifique seus rótulos."
          }
        ]
      },
      "side-beyond": {
        "h2": "Quando Você Precisa de uma Fórmula Diferente para o Triângulo Retângulo?",
        "h3s": [],
        "paragraphs": [
          "O teorema de Pitágoras precisa de dois lados conhecidos. Informações diferentes exigem ferramentas diferentes.",
          "<strong>Um lado e um ângulo agudo:</strong> Use seno, cosseno ou tangente. O seno relaciona o cateto oposto sobre a hipotenusa, o cosseno relaciona o cateto adjacente sobre a hipotenusa e a tangente relaciona o cateto oposto sobre o adjacente. Por exemplo, com a hipotenusa c e o ângulo A, o cateto a = c × sen(A).",
          "<strong>Dois ângulos, nenhum lado:</strong> Impossível. Ângulos determinam a forma, mas não o tamanho; um triângulo 3-4-5 e um triângulo 6-8-10 compartilham os ângulos, mas diferem em escala. Você precisa de pelo menos um comprimento de lado.",
          "<strong>Triângulo não retângulo:</strong> Use a Lei dos Cossenos (c² = a² + b² − 2ab×cos(C)) ou a Lei dos Senos. O teorema de Pitágoras é um caso especial da Lei dos Cossenos quando C = 90°.",
          "<strong>Triângulos retângulos especiais:</strong> O triângulo 45-45-90 tem catetos na proporção 1:1:√2, e o 30-60-90 tem lados na proporção 1:√3:2. Estes permitem cálculos mentais rápidos.",
          "Se você conhece um lado e um ângulo agudo, use a Calculadora de Lados de Triângulo Retângulo Usando Ângulo neste site."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "O teorema de Pitágoras precisa de dois lados conhecidos. Informações diferentes exigem ferramentas diferentes."
          },
          {
            "kind": "p",
            "text": "<strong>Um lado e um ângulo agudo:</strong> Use seno, cosseno ou tangente. O seno relaciona o cateto oposto sobre a hipotenusa, o cosseno relaciona o cateto adjacente sobre a hipotenusa e a tangente relaciona o cateto oposto sobre o adjacente. Por exemplo, com a hipotenusa c e o ângulo A, o cateto a = c × sen(A)."
          },
          {
            "kind": "p",
            "text": "<strong>Dois ângulos, nenhum lado:</strong> Impossível. Ângulos determinam a forma, mas não o tamanho; um triângulo 3-4-5 e um triângulo 6-8-10 compartilham os ângulos, mas diferem em escala. Você precisa de pelo menos um comprimento de lado."
          },
          {
            "kind": "p",
            "text": "<strong>Triângulo não retângulo:</strong> Use a Lei dos Cossenos (c² = a² + b² − 2ab×cos(C)) ou a Lei dos Senos. O teorema de Pitágoras é um caso especial da Lei dos Cossenos quando C = 90°."
          },
          {
            "kind": "p",
            "text": "<strong>Triângulos retângulos especiais:</strong> O triângulo 45-45-90 tem catetos na proporção 1:1:√2, e o 30-60-90 tem lados na proporção 1:√3:2. Estes permitem cálculos mentais rápidos."
          },
          {
            "kind": "p",
            "text": "Se você conhece um lado e um ângulo agudo, use a Calculadora de Lados de Triângulo Retângulo Usando Ângulo neste site."
          }
        ],
        "linkAnchor": "Calculadora de Lados de Triângulo Retângulo Usando Ângulo"
      },
      "side-related": {
        "h2": "Outras Calculadoras de Triângulo Retângulo que Podem Ser Úteis",
        "h3s": [],
        "paragraphs": [
          "Depois de encontrar o seu lado desconhecido, continue com estas calculadoras relacionadas para completar a análise do seu triângulo."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Depois de encontrar o seu lado desconhecido, continue com estas calculadoras relacionadas para completar a análise do seu triângulo."
          }
        ]
      },
      "side-faq": {
        "h2": "Perguntas Frequentes",
        "h3s": [],
        "paragraphs": [],
        "blocks": []
      },
      "side-summary": {
        "h2": "Calcule Lados de Triângulo Retângulo com Confiança",
        "h3s": [],
        "paragraphs": [
          "Identifique primeiro os seus dois lados conhecidos. Se ambos forem catetos, você precisa da hipotenusa; se um for a hipotenusa, você precisa do cateto desconhecido. Escolha a fórmula ou o modo da calculadora correspondente. Insira as duas medidas na mesma unidade. Calcule e verifique: a hipotenusa deve ser a mais longa, e substituir de volta em a² + b² = c² deve equilibrar. Verifique suas unidades e o arredondamento. Com esses passos, você resolve qualquer problema de lado de triângulo retângulo com segurança. Volte à calculadora no topo desta página para calcular seus números."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Identifique primeiro os seus dois lados conhecidos. Se ambos forem catetos, você precisa da hipotenusa; se um for a hipotenusa, você precisa do cateto desconhecido. Escolha a fórmula ou o modo da calculadora correspondente. Insira as duas medidas na mesma unidade. Calcule e verifique: a hipotenusa deve ser a mais longa, e substituir de volta em a² + b² = c² deve equilibrar. Verifique suas unidades e o arredondamento. Com esses passos, você resolve qualquer problema de lado de triângulo retângulo com segurança. Volte à calculadora no topo desta página para calcular seus números."
          }
        ]
      }
    },
    "faqs": [
      {
        "answer": "Use o teorema de Pitágoras: a² + b² = c². Se você conhece os dois catetos, calcule c = √(a² + b²). Se você conhece a hipotenusa e um cateto, calcule o cateto desconhecido como √(c² − cateto conhecido²). Você precisa de exatamente dois comprimentos de lado; o teorema não funciona com apenas um lado ou somente com ângulos.",
        "question": "Como calcular o lado desconhecido de um triângulo retângulo?"
      },
      {
        "answer": "Sim. Dois lados são suficientes. Se os dois lados conhecidos são os catetos, use a fórmula da hipotenusa. Se um dos lados conhecidos é a hipotenusa, use a fórmula do cateto desconhecido. A calculadora determina qual modo se aplica com base em se a hipotenusa está entre suas entradas.",
        "question": "É possível encontrar um lado desconhecido se eu conheço dois lados?"
      },
      {
        "answer": "Eleve os dois catetos ao quadrado, some os quadrados e extraia a raiz quadrada. Para catetos 6 e 8: 6² + 8² = 36 + 64 = 100, √100 = 10. A hipotenusa é sempre o lado mais longo, então verifique se a sua resposta é maior que ambos os catetos.",
        "question": "Como encontrar a hipotenusa?"
      },
      {
        "answer": "Eleve a hipotenusa e o cateto conhecido ao quadrado, subtraia o quadrado do cateto do quadrado da hipotenusa e extraia a raiz quadrada. Para hipotenusa 13 e cateto 5: 169 − 25 = 144, √144 = 12. O resultado deve ser menor que a hipotenusa.",
        "question": "Como encontrar um cateto desconhecido?"
      },
      {
        "answer": "A fórmula é a² + b² = c², onde a e b são os catetos (os lados que formam o ângulo reto) e c é a hipotenusa (o lado oposto ao ângulo reto). Esta relação vale para todo triângulo retângulo.",
        "question": "Qual é a fórmula do teorema de Pitágoras?"
      },
      {
        "answer": "Sim. A hipotenusa abrange a maior distância entre os vértices, oposta ao maior ângulo (90 graus). Em qualquer triângulo, o lado mais longo fica oposto ao maior ângulo. Se a hipotenusa calculada for menor que um cateto, verifique suas entradas.",
        "question": "A hipotenusa é sempre o lado mais longo?"
      },
      {
        "answer": "Não, apenas em triângulos retângulos. O teorema depende do ângulo de 90 graus. Para triângulos acutângulos ou obtusângulos, use a Lei dos Cossenos. Aplicar Pitágoras a um triângulo não retângulo produz resultados incorretos.",
        "question": "Posso usar o teorema de Pitágoras em qualquer triângulo?"
      },
      {
        "answer": "Decimais são normais; a maioria dos triângulos retângulos não tem lados inteiros. Calcule com precisão total e arredonde a resposta final para corresponder à precisão da sua entrada. Por exemplo, √42.25 = 6.5 exatamente, mas √50 ≈ 7.071 exige arredondamento.",
        "question": "E se a resposta for um decimal?"
      },
      {
        "answer": "Sim. Este é o triângulo retângulo isósceles 45-45-90, em que os catetos são iguais e a hipotenusa é igual ao cateto × √2. Para catetos de 5, a hipotenusa é 5√2 ≈ 7.071.",
        "question": "Um triângulo retângulo pode ter dois catetos iguais?"
      },
      {
        "answer": "As entradas são inválidas. A hipotenusa deve ser o lado mais longo. Você provavelmente trocou os rótulos; atribua a maior medida como a hipotenusa (c) e recalcule.",
        "question": "E se a hipotenusa for menor que um cateto conhecido?"
      },
      {
        "answer": "Sim, mas não apenas com o teorema de Pitágoras. Use razões trigonométricas: seno, cosseno ou tangente relacionam o lado conhecido e o ângulo ao lado desconhecido. Este site oferece uma calculadora dedicada para problemas de lado a partir de ângulo.",
        "question": "Posso calcular um lado desconhecido usando um ângulo e um lado?"
      },
      {
        "answer": "Substitua os três lados de volta em a² + b² = c². Confirme que a hipotenusa é a mais longa. Verifique se os números formam um terno pitagórico conhecido. Estime que a hipotenusa fique entre o cateto mais longo e a soma dos dois catetos.",
        "question": "Como posso verificar se a minha resposta está correta?"
      }
    ],
    "relatedHeading": "Outras Calculadoras de Triângulo Retângulo que Podem Ser Úteis",
    "relatedIntro": "Depois de encontrar o seu lado desconhecido, continue com estas calculadoras relacionadas para completar a análise do seu triângulo.",
    "relatedItems": [
      "Calculadora de Triângulo Retângulo",
      "Calculadora de Ângulos de Triângulo Retângulo",
      "Calculadora de Lados de Triângulo Retângulo Usando Ângulo",
      "Calculadora de Área de Triângulo Retângulo",
      "Calculadora de Perímetro e Semiperímetro de Triângulo Retângulo",
      "Calculadora de Triângulos Retângulos Especiais",
      "Calculadora de Ternos Pitagóricos"
    ]
  },
  "bn": {
    "tocHeading": "এই নির্দেশনায়",
    "tocItems": {
      "side-intro": "অজানা বাহু কীভাবে বের করবেন",
      "side-anatomy": "তিনটি বাহু বোঝা",
      "side-pythagoras": "পিথাগোরাসের উপপাদ্য",
      "side-hypotenuse": "অতিভুজ বের করা",
      "side-leg": "অজানা বাহু বের করা",
      "side-howto": "ক্যালকুলেটর ব্যবহার",
      "side-formulas": "সূত্র এক নজরে",
      "side-applications": "বাস্তব জীবনের উদাহরণ",
      "side-triples": "পিথাগোরীয় ত্রয়ী",
      "side-units": "একক ও নির্ভুলতা",
      "side-invalid": "অবৈধ ইনপুট",
      "side-verify": "উত্তর যাচাই",
      "side-mistakes": "সাধারণ ভুল",
      "side-beyond": "পিথাগোরাস কখন যথেষ্ট নয়",
      "side-related": "সম্পর্কিত ক্যালকুলেটর",
      "side-faq": "সাধারণ জিজ্ঞাসা"
    },
    "sections": {
      "side-intro": {
        "h2": "সমকোণী ত্রিভুজের অজানা বাহু কীভাবে বের করবেন",
        "h3s": [],
        "paragraphs": [
          "সমকোণী ত্রিভুজের বাহুর ক্যালকুলেটর অন্য দুটি বাহু জানা থাকলে অজানা দৈর্ঘ্য বের করে দেয়। এর সাধারণ ব্যবহার হলো ঘরের কর্ণ মাপা, সাপোর্ট বীম পরীক্ষা করা বা বাড়ির কাজের উত্তর মিলিয়ে দেখা। কাজ করতে ক্যালকুলেটরের ঠিক দুটি বাহুর দৈর্ঘ্য দরকার হয়। এটি পিথাগোরাসের উপপাদ্য প্রয়োগ করে, যা প্রতিটি সমকোণী ত্রিভুজের তিনটি বাহুকে যুক্ত করে। অতিভুজ বের করতে বর্গমূলের নিচে যোগ করা হয়, আর অজানা বাহু বের করতে বিয়োগ করা হয়। এই পদ্ধতি শুধু সমকোণী ত্রিভুজের জন্য কাজ করে, কারণ সম্পর্কটি 90-ডিগ্রি কোণের ওপর নির্ভর করে। উদাহরণস্বরূপ, 6 cm ও 8 cm লম্ব দুটি বাহুবিশিষ্ট একটি সমকোণী ত্রিভুজের অতিভুজ 10 cm। এই একই নীতি দিয়ে বাস্তব দূরত্ব মাপা হয়, মইয়ের দৈর্ঘ্য থেকে স্ক্রিনের কর্ণ পর্যন্ত।"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "সমকোণী ত্রিভুজের বাহুর ক্যালকুলেটর অন্য দুটি বাহু জানা থাকলে অজানা দৈর্ঘ্য বের করে দেয়। এর সাধারণ ব্যবহার হলো ঘরের কর্ণ মাপা, সাপোর্ট বীম পরীক্ষা করা বা বাড়ির কাজের উত্তর মিলিয়ে দেখা। কাজ করতে ক্যালকুলেটরের ঠিক দুটি বাহুর দৈর্ঘ্য দরকার হয়। এটি পিথাগোরাসের উপপাদ্য প্রয়োগ করে, যা প্রতিটি সমকোণী ত্রিভুজের তিনটি বাহুকে যুক্ত করে। অতিভুজ বের করতে বর্গমূলের নিচে যোগ করা হয়, আর অজানা বাহু বের করতে বিয়োগ করা হয়। এই পদ্ধতি শুধু সমকোণী ত্রিভুজের জন্য কাজ করে, কারণ সম্পর্কটি 90-ডিগ্রি কোণের ওপর নির্ভর করে। উদাহরণস্বরূপ, 6 cm ও 8 cm লম্ব দুটি বাহুবিশিষ্ট একটি সমকোণী ত্রিভুজের অতিভুজ 10 cm। এই একই নীতি দিয়ে বাস্তব দূরত্ব মাপা হয়, মইয়ের দৈর্ঘ্য থেকে স্ক্রিনের কর্ণ পর্যন্ত।"
          }
        ]
      },
      "side-anatomy": {
        "h2": "সমকোণী ত্রিভুজের তিনটি বাহু বোঝা",
        "h3s": [
          "সমকোণী ত্রিভুজ কী?",
          "অতিভুজ কী?",
          "দুটি বাহু (লম্ব ও ভূমি) কী?",
          "সঠিক বাহু কীভাবে চিনবেন?"
        ],
        "paragraphs": [
          "সমকোণী ত্রিভুজে একটি কোণ ঠিক 90 ডিগ্রি হয়, যা বর্গক্ষেত্র বা আয়তক্ষেত্রের কোণের সমান। বাকি দুটি কোণ সূক্ষ্মকোণ হতেই হবে, অর্থাৎ প্রতিটি 90 ডিগ্রির কম। যেহেতু ত্রিভুজের কোণগুলোর যোগফল 180 ডিগ্রি, তাই সমকোণ ছাড়া বাকি দুটি কোণের মোট 90 ডিগ্রি। এটি সূক্ষ্মকোণী ত্রিভুজ (সব কোণ 90°-এর কম) ও স্থূলকোণী ত্রিভুজ (একটি কোণ 90°-এর বেশি) থেকে আলাদা। সমকোণই পিথাগোরাসের উপপাদ্যের পেছনের লম্ব সম্পর্ক তৈরি করে।",
          "অতিভুজ সমকোণের বিপরীতে থাকে, 90-ডিগ্রি কোণ থেকে দূরে বিস্তৃত। এটি সবসময় সবচেয়ে লম্বা বাহু, কারণ যেকোনো দুটি শীর্ষবিন্দুর মধ্যে সবচেয়ে বেশি দূরত্ব এটি অতিক্রম করে। ঘোরানো চিত্রে, সমকোণের চিহ্নটি যে বাহু স্পর্শ করে না, সেটিই অতিভুজ। এই ক্যালকুলেটর এটিকে c দিয়ে চিহ্নিত করে, প্রচলিত নিয়ম অনুযায়ী যেখানে সূত্রে [[a^2 + b^2 = c^2]] c অতিভুজ বোঝায়।",
          "বাহু দুটি হলো সেই দুই পাশ যা সমকোণ তৈরি করে, 90 ডিগ্রিতে মিলিত হয়। এই ক্যালকুলেটরে এগুলোকে a ও b দিয়ে চিহ্নিত করা হয়। লেবেল অদলবদল করলেও অতিভুজ বদলায় না, যেহেতু a² + b² সমান b² + a²। ক্যালকুলেটর এগুলো আলাদা রাখে যাতে অজানা-বাহুর মোডগুলো জানতে পারে কোন বাহুটির জন্য সমাধান করতে হবে। দুটি বাহু জানা থাকলে অতিভুজ বের করতে যেকোনো ক্রমেই কাজ হয়।",
          "সমকোণের চিহ্নটি (ছোট বর্গক্ষেত্র) খুঁজুন। বিপরীত বাহুটি অতিভুজ; চিহ্নটি স্পর্শ করা দুটি বাহু হলো লম্ব ও ভূমি। ঘোরানো চিত্রের জন্য কল্পনা করুন ত্রিভুজটিকে এমনভাবে ঘোরানো হচ্ছে যাতে সমকোণটি নিচে বামে থাকে, একটি বাহু অনুভূমিক ও অন্যটি উল্লম্ব। সমকোণের চিহ্ন না থাকলে এই ক্যালকুলেটর ব্যবহারের আগে নিশ্চিত করুন ত্রিভুজটি সমকোণী।"
        ],
        "blocks": [
          {
            "kind": "h3",
            "text": "সমকোণী ত্রিভুজ কী?"
          },
          {
            "kind": "p",
            "text": "সমকোণী ত্রিভুজে একটি কোণ ঠিক 90 ডিগ্রি হয়, যা বর্গক্ষেত্র বা আয়তক্ষেত্রের কোণের সমান। বাকি দুটি কোণ সূক্ষ্মকোণ হতেই হবে, অর্থাৎ প্রতিটি 90 ডিগ্রির কম। যেহেতু ত্রিভুজের কোণগুলোর যোগফল 180 ডিগ্রি, তাই সমকোণ ছাড়া বাকি দুটি কোণের মোট 90 ডিগ্রি। এটি সূক্ষ্মকোণী ত্রিভুজ (সব কোণ 90°-এর কম) ও স্থূলকোণী ত্রিভুজ (একটি কোণ 90°-এর বেশি) থেকে আলাদা। সমকোণই পিথাগোরাসের উপপাদ্যের পেছনের লম্ব সম্পর্ক তৈরি করে।"
          },
          {
            "kind": "h3",
            "text": "অতিভুজ কী?"
          },
          {
            "kind": "p",
            "text": "অতিভুজ সমকোণের বিপরীতে থাকে, 90-ডিগ্রি কোণ থেকে দূরে বিস্তৃত। এটি সবসময় সবচেয়ে লম্বা বাহু, কারণ যেকোনো দুটি শীর্ষবিন্দুর মধ্যে সবচেয়ে বেশি দূরত্ব এটি অতিক্রম করে। ঘোরানো চিত্রে, সমকোণের চিহ্নটি যে বাহু স্পর্শ করে না, সেটিই অতিভুজ। এই ক্যালকুলেটর এটিকে c দিয়ে চিহ্নিত করে, প্রচলিত নিয়ম অনুযায়ী যেখানে সূত্রে [[a^2 + b^2 = c^2]] c অতিভুজ বোঝায়।"
          },
          {
            "kind": "h3",
            "text": "দুটি বাহু (লম্ব ও ভূমি) কী?"
          },
          {
            "kind": "p",
            "text": "বাহু দুটি হলো সেই দুই পাশ যা সমকোণ তৈরি করে, 90 ডিগ্রিতে মিলিত হয়। এই ক্যালকুলেটরে এগুলোকে a ও b দিয়ে চিহ্নিত করা হয়। লেবেল অদলবদল করলেও অতিভুজ বদলায় না, যেহেতু a² + b² সমান b² + a²। ক্যালকুলেটর এগুলো আলাদা রাখে যাতে অজানা-বাহুর মোডগুলো জানতে পারে কোন বাহুটির জন্য সমাধান করতে হবে। দুটি বাহু জানা থাকলে অতিভুজ বের করতে যেকোনো ক্রমেই কাজ হয়।"
          },
          {
            "kind": "h3",
            "text": "সঠিক বাহু কীভাবে চিনবেন?"
          },
          {
            "kind": "p",
            "text": "সমকোণের চিহ্নটি (ছোট বর্গক্ষেত্র) খুঁজুন। বিপরীত বাহুটি অতিভুজ; চিহ্নটি স্পর্শ করা দুটি বাহু হলো লম্ব ও ভূমি। ঘোরানো চিত্রের জন্য কল্পনা করুন ত্রিভুজটিকে এমনভাবে ঘোরানো হচ্ছে যাতে সমকোণটি নিচে বামে থাকে, একটি বাহু অনুভূমিক ও অন্যটি উল্লম্ব। সমকোণের চিহ্ন না থাকলে এই ক্যালকুলেটর ব্যবহারের আগে নিশ্চিত করুন ত্রিভুজটি সমকোণী।"
          }
        ],
        "imgAlt": "লেবেলযুক্ত সমকোণী ত্রিভুজ যেখানে বাহু a ও b, অতিভুজ c, C-তে সমকোণ এবং সূক্ষ্মকোণ A ও B দেখানো হয়েছে",
        "figcaption": "সমকোণী ত্রিভুজের অংশ: বাহু a ও b C-তে সমকোণ তৈরি করে, অতিভুজ c বিপরীতে থাকে, সঙ্গে সূক্ষ্মকোণ A ও B।"
      },
      "side-pythagoras": {
        "h2": "পিথাগোরাসের উপপাদ্য ত্রিভুজের বাহু কীভাবে নির্ণয় করে",
        "h3s": [
          "সূত্রটি কেন কাজ করে তা বোঝা"
        ],
        "paragraphs": [
          "পিথাগোরাসের উপপাদ্য বলে [[a^2 + b^2 = c^2]], যেখানে a ও b হলো দুটি বাহু এবং c হলো অতিভুজ। প্রতিটি চলক একটি বাহুর দৈর্ঘ্য। বর্গ করা মানে একটি সংখ্যাকে নিজের সঙ্গে গুণ করা (6² = 36); বর্গমূল এই প্রক্রিয়ার বিপরীত (√100 = 10)। বর্গমূল নিতে হয় কারণ সূত্রটি দৈর্ঘ্যের বর্গকে যুক্ত করে, দৈর্ঘ্যকে নয়। বাহুর দৈর্ঘ্য যোগ করা (6 + 8 = 14) ভুল; এগুলোর বর্গ যোগ করুন (36 + 64 = 100), তারপর বর্গমূল নিন। এই উপপাদ্যের জন্য 90-ডিগ্রি কোণ দরকার; সমকোণী নয় এমন ত্রিভুজের জন্য কোসাইন সূত্র (Law of Cosines) লাগে। তিনটি ক্যালকুলেটর মোডই এই সমীকরণকে নতুনভাবে সাজায়: [[c = \\sqrt{a^2 + b^2}]], [[b = \\sqrt{c^2 - a^2}]], [[a = \\sqrt{c^2 - b^2}]]।",
          "প্রতিটি বাহুর ওপর একটি বর্গক্ষেত্র আঁকুন: ক্ষেত্রফল a², b² ও c²। উপপাদ্য বলে ছোট দুটি ক্ষেত্রফলের যোগফল বড়টির সমান। 3-4-5 এর ক্ষেত্রে: 9 ও 16 বর্গ এককের বর্গক্ষেত্র মিলে 25 হয়, যা অতিভুজের বর্গক্ষেত্রের ক্ষেত্রফল। বর্গ করা গুরুত্বপূর্ণ কারণ আপনি ক্ষেত্রফলের তুলনা করছেন, দৈর্ঘ্যের নয়।"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "পিথাগোরাসের উপপাদ্য বলে [[a^2 + b^2 = c^2]], যেখানে a ও b হলো দুটি বাহু এবং c হলো অতিভুজ। প্রতিটি চলক একটি বাহুর দৈর্ঘ্য। বর্গ করা মানে একটি সংখ্যাকে নিজের সঙ্গে গুণ করা (6² = 36); বর্গমূল এই প্রক্রিয়ার বিপরীত (√100 = 10)। বর্গমূল নিতে হয় কারণ সূত্রটি দৈর্ঘ্যের বর্গকে যুক্ত করে, দৈর্ঘ্যকে নয়। বাহুর দৈর্ঘ্য যোগ করা (6 + 8 = 14) ভুল; এগুলোর বর্গ যোগ করুন (36 + 64 = 100), তারপর বর্গমূল নিন। এই উপপাদ্যের জন্য 90-ডিগ্রি কোণ দরকার; সমকোণী নয় এমন ত্রিভুজের জন্য কোসাইন সূত্র (Law of Cosines) লাগে। তিনটি ক্যালকুলেটর মোডই এই সমীকরণকে নতুনভাবে সাজায়: [[c = \\sqrt{a^2 + b^2}]], [[b = \\sqrt{c^2 - a^2}]], [[a = \\sqrt{c^2 - b^2}]]।"
          },
          {
            "kind": "h3",
            "text": "সূত্রটি কেন কাজ করে তা বোঝা"
          },
          {
            "kind": "p",
            "text": "প্রতিটি বাহুর ওপর একটি বর্গক্ষেত্র আঁকুন: ক্ষেত্রফল a², b² ও c²। উপপাদ্য বলে ছোট দুটি ক্ষেত্রফলের যোগফল বড়টির সমান। 3-4-5 এর ক্ষেত্রে: 9 ও 16 বর্গ এককের বর্গক্ষেত্র মিলে 25 হয়, যা অতিভুজের বর্গক্ষেত্রের ক্ষেত্রফল। বর্গ করা গুরুত্বপূর্ণ কারণ আপনি ক্ষেত্রফলের তুলনা করছেন, দৈর্ঘ্যের নয়।"
          }
        ],
        "imgAlt": "3-4-5 সমকোণী ত্রিভুজ, প্রতিটি বাহুর ওপর বর্গক্ষেত্র যেগুলোতে 9, 16 ও 25 বর্গ একক লেখা আছে, দেখাচ্ছে 9 যোগ 16 সমান 25",
        "figcaption": "চিত্রভিত্তিক প্রমাণ: বাহু দুটির ওপর 9 ও 16 বর্গ এককের বর্গক্ষেত্র মিলে অতিভুজের ওপর 25 বর্গ এককের বর্গক্ষেত্রের সমান হয়।"
      },
      "side-hypotenuse": {
        "h2": "দুটি বাহু ব্যবহার করে অতিভুজ কীভাবে বের করবেন",
        "h3s": [
          "উদাহরণ ১: 6-8 সমকোণী ত্রিভুজের অতিভুজ বের করা",
          "উদাহরণ ২: দশমিক মাপের অতিভুজ বের করা",
          "এই ক্যালকুলেটর মোড কখন ব্যবহার করবেন?"
        ],
        "paragraphs": [
          "[[a^2 + b^2 = c^2]] থেকে c-এর জন্য সমাধান করলে পাওয়া যায় [[c = \\sqrt{a^2 + b^2}]]। প্রক্রিয়া: দুটি বাহু চিহ্নিত করুন, প্রতিটির বর্গ করুন, বর্গগুলো যোগ করুন, বর্গমূল নিন, একক লিখুন এবং নিশ্চিত করুন ফলাফল দুটি বাহুর চেয়ে বড়।",
          "বাহু a = 6 cm ও b = 8 cm দেওয়া আছে: প্রতিটির বর্গ করুন (36 ও 64), যোগ করুন (100), বর্গমূল নিন (10)। অতিভুজ 10 cm, প্রত্যাশা অনুযায়ী দুটি বাহুর চেয়ে বড়।",
          "a = 2.5 m, b = 6 m দেওয়া আছে: 2.5² + 6² = 6.25 + 36 = 42.25, √42.25 = 6.5 m। দশমিকে সাবধানে হিসাব করতে হয়; চূড়ান্ত পূর্ণসংখ্যায় রূপান্তরের আগে পূর্ণ নির্ভুলতা ধরে রাখুন।",
          "দুটি জানা বাহুর জন্য অতিভুজ মোড ব্যবহার করুন: ঘরের কর্ণ, সাপোর্ট ব্রেস, বা লম্ব বাহু দেওয়া জ্যামিতির সমস্যা। অতিভুজ ও একটি বাহু থাকলে অজানা-বাহুর মোডে যান।"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "[[a^2 + b^2 = c^2]] থেকে c-এর জন্য সমাধান করলে পাওয়া যায় [[c = \\sqrt{a^2 + b^2}]]। প্রক্রিয়া: দুটি বাহু চিহ্নিত করুন, প্রতিটির বর্গ করুন, বর্গগুলো যোগ করুন, বর্গমূল নিন, একক লিখুন এবং নিশ্চিত করুন ফলাফল দুটি বাহুর চেয়ে বড়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ১: 6-8 সমকোণী ত্রিভুজের অতিভুজ বের করা"
          },
          {
            "kind": "p",
            "text": "বাহু a = 6 cm ও b = 8 cm দেওয়া আছে: প্রতিটির বর্গ করুন (36 ও 64), যোগ করুন (100), বর্গমূল নিন (10)। অতিভুজ 10 cm, প্রত্যাশা অনুযায়ী দুটি বাহুর চেয়ে বড়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ২: দশমিক মাপের অতিভুজ বের করা"
          },
          {
            "kind": "p",
            "text": "a = 2.5 m, b = 6 m দেওয়া আছে: 2.5² + 6² = 6.25 + 36 = 42.25, √42.25 = 6.5 m। দশমিকে সাবধানে হিসাব করতে হয়; চূড়ান্ত পূর্ণসংখ্যায় রূপান্তরের আগে পূর্ণ নির্ভুলতা ধরে রাখুন।"
          },
          {
            "kind": "h3",
            "text": "এই ক্যালকুলেটর মোড কখন ব্যবহার করবেন?"
          },
          {
            "kind": "p",
            "text": "দুটি জানা বাহুর জন্য অতিভুজ মোড ব্যবহার করুন: ঘরের কর্ণ, সাপোর্ট ব্রেস, বা লম্ব বাহু দেওয়া জ্যামিতির সমস্যা। অতিভুজ ও একটি বাহু থাকলে অজানা-বাহুর মোডে যান।"
          }
        ]
      },
      "side-leg": {
        "h2": "সমকোণী ত্রিভুজের অজানা বাহু কীভাবে বের করবেন",
        "h3s": [
          "অতিভুজ c ও বাহু a জানা থাকলে বাহু b বের করুন",
          "উদাহরণ ৩: 13 cm অতিভুজ থেকে বাহু b বের করুন",
          "অতিভুজ c ও বাহু b জানা থাকলে বাহু a বের করুন",
          "উদাহরণ ৪: অজানা বাহু বের করা"
        ],
        "paragraphs": [
          "অতিভুজ ও একটি বাহু জানা থাকলে পিথাগোরাসের উপপাদ্যকে নতুনভাবে সাজিয়ে অজানা বাহুটিকে আলাদা করুন। [[a^2 + b^2 = c^2]] থেকে শুরু করে দুই পাশ থেকে জানা বাহুর বর্গ বিয়োগ করুন। এতে দুটি সূত্র পাওয়া যায়, প্রতিটি বাহুর জন্য একটি করে।",
          "সূত্রটি হলো [[b = \\sqrt{c^2 - a^2}]]। উৎপন্ন করুন: [[a^2 + b^2 = c^2]] থেকে শুরু করে দুই পাশ থেকে a² বিয়োগ করে পান [[b^2 = c^2 - a^2]], তারপর বর্গমূল নিন। বিয়োগটি বোঝায় যে অতিভুজের বর্গে দুটি বাহুর বর্গই রয়েছে, তাই একটি সরিয়ে নিলে অন্যটি থাকে।",
          "c = 13 cm ও a = 5 cm দেওয়া আছে, বাহু b বের করুন। দুটির বর্গ করুন: 13² = 169 ও 5² = 25। বিয়োগ করুন: 169 − 25 = 144। বর্গমূল নিন: √144 = 12। বাহু b হলো 12 cm। যাচাই: 5² + 12² = 25 + 144 = 169 = 13²। 5-12-13 ত্রয়ী ফলাফলটি নিশ্চিত করে।",
          "সূত্রটি হলো [[a = \\sqrt{c^2 - b^2}]]। পিথাগোরীয় সম্পর্কে বাহু দুটি বিনিময়যোগ্য; একটিকে a ও অন্যটিকে b নাম দেওয়া একটি প্রচলিত নিয়ম মাত্র। ক্যালকুলেটর দুটি মোডই দেয় যাতে মনে মনে চলক অদলবদল না করে ঘরের লেবেলগুলো আপনার নির্দিষ্ট সমস্যার সঙ্গে মিলিয়ে নিতে পারেন।",
          "c = 17 inches ও b = 15 inches দেওয়া আছে, বাহু a বের করুন। বর্গ করুন: 17² = 289 ও 15² = 225। বিয়োগ করুন: 289 − 225 = 64। বর্গমূল নিন: √64 = 8। বাহু a হলো 8 inches। এটি 8-15-17 ত্রয়ী। অজানা-বাহুর দুটি মোডে পার্থক্য শুধু কোন বাহুটি জানা তা নিয়ে; গণিত একই।"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "অতিভুজ ও একটি বাহু জানা থাকলে পিথাগোরাসের উপপাদ্যকে নতুনভাবে সাজিয়ে অজানা বাহুটিকে আলাদা করুন। [[a^2 + b^2 = c^2]] থেকে শুরু করে দুই পাশ থেকে জানা বাহুর বর্গ বিয়োগ করুন। এতে দুটি সূত্র পাওয়া যায়, প্রতিটি বাহুর জন্য একটি করে।"
          },
          {
            "kind": "h3",
            "text": "অতিভুজ c ও বাহু a জানা থাকলে বাহু b বের করুন"
          },
          {
            "kind": "p",
            "text": "সূত্রটি হলো [[b = \\sqrt{c^2 - a^2}]]। উৎপন্ন করুন: [[a^2 + b^2 = c^2]] থেকে শুরু করে দুই পাশ থেকে a² বিয়োগ করে পান [[b^2 = c^2 - a^2]], তারপর বর্গমূল নিন। বিয়োগটি বোঝায় যে অতিভুজের বর্গে দুটি বাহুর বর্গই রয়েছে, তাই একটি সরিয়ে নিলে অন্যটি থাকে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ৩: 13 cm অতিভুজ থেকে বাহু b বের করুন"
          },
          {
            "kind": "p",
            "text": "c = 13 cm ও a = 5 cm দেওয়া আছে, বাহু b বের করুন। দুটির বর্গ করুন: 13² = 169 ও 5² = 25। বিয়োগ করুন: 169 − 25 = 144। বর্গমূল নিন: √144 = 12। বাহু b হলো 12 cm। যাচাই: 5² + 12² = 25 + 144 = 169 = 13²। 5-12-13 ত্রয়ী ফলাফলটি নিশ্চিত করে।"
          },
          {
            "kind": "h3",
            "text": "অতিভুজ c ও বাহু b জানা থাকলে বাহু a বের করুন"
          },
          {
            "kind": "p",
            "text": "সূত্রটি হলো [[a = \\sqrt{c^2 - b^2}]]। পিথাগোরীয় সম্পর্কে বাহু দুটি বিনিময়যোগ্য; একটিকে a ও অন্যটিকে b নাম দেওয়া একটি প্রচলিত নিয়ম মাত্র। ক্যালকুলেটর দুটি মোডই দেয় যাতে মনে মনে চলক অদলবদল না করে ঘরের লেবেলগুলো আপনার নির্দিষ্ট সমস্যার সঙ্গে মিলিয়ে নিতে পারেন।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ৪: অজানা বাহু বের করা"
          },
          {
            "kind": "p",
            "text": "c = 17 inches ও b = 15 inches দেওয়া আছে, বাহু a বের করুন। বর্গ করুন: 17² = 289 ও 15² = 225। বিয়োগ করুন: 289 − 225 = 64। বর্গমূল নিন: √64 = 8। বাহু a হলো 8 inches। এটি 8-15-17 ত্রয়ী। অজানা-বাহুর দুটি মোডে পার্থক্য শুধু কোন বাহুটি জানা তা নিয়ে; গণিত একই।"
          }
        ],
        "imgAlt": "বিভক্ত চিত্রে পিথাগোরাসের উপপাদ্য ব্যবহার করে অজানা বাহু বের করার দুটি সমকোণী ত্রিভুজ",
        "figcaption": "অজানা বাহুর দুটি হিসাব: 5-12-13 ত্রিভুজ থেকে b বের করা এবং 8-15-17 ত্রিভুজ থেকে a বের করা।",
        "table": {
          "headers": [
            "জানা আছে",
            "বের করুন",
            "সূত্র",
            "ক্যালকুলেটর মোড"
          ],
          "rows": [
            [
              "c = 13, a = 5",
              "b",
              "b = √(c² − a²)",
              "c ও a থেকে অজানা বাহু"
            ],
            [
              "c = 17, b = 15",
              "a",
              "a = √(c² − b²)",
              "c ও b থেকে অজানা বাহু"
            ]
          ]
        }
      },
      "side-howto": {
        "h2": "সমকোণী ত্রিভুজের বাহুর ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
        "h3s": [],
        "paragraphs": [
          "ক্যালকুলেটর ফলাফল সংরক্ষণ করে না বা ডাউনলোডযোগ্য রিপোর্ট তৈরি করে না। নতুন হিসাবের জন্য ঘরগুলো মুছতে রিসেট অপশন ব্যবহার করুন।"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "ক্যালকুলেটর ফলাফল সংরক্ষণ করে না বা ডাউনলোডযোগ্য রিপোর্ট তৈরি করে না। নতুন হিসাবের জন্য ঘরগুলো মুছতে রিসেট অপশন ব্যবহার করুন।"
          }
        ],
        "list": [
          "জানা দুটি মাপ চিহ্নিত করুন। দুটোই বাহুর দৈর্ঘ্য হতে হবে, কোণ নয়।",
          "অজানা মানটি অতিভুজ না একটি বাহু, তা নির্ধারণ করুন। দুটি বাহু জানা থাকলে অতিভুজ বের করতে হবে। অতিভুজ ও একটি বাহু জানা থাকলে অন্য বাহু বের করতে হবে।",
          "সঠিক মোড বেছে নিন। দুটি জানা বাহুর জন্য \"পিথাগোরীয় উপপাদ্য\" বেছে নিন, অতিভুজ ও বাহু a জানা থাকলে \"c ও a থেকে অজানা বাহু\", অথবা অতিভুজ ও বাহু b জানা থাকলে \"c ও b থেকে অজানা বাহু\"।",
          "দুটি মাপ নিজ নিজ ঘরে লিখুন। প্রতিটি মান সঠিক ঘরে গেছে কিনা ভালো করে দেখুন; অতিভুজ আর বাহু অদলবদল হলে ত্রুটি দেখাবে।",
          "মাপের একক বেছে নিন। দুটি ইনপুটের জন্য একই একক ব্যবহার করুন।",
          "হিসাব করুন। ফলাফলের সঙ্গে সমাধানের ধাপগুলো দেখাবে, যেখানে মান বসানো ও গাণিতিক হিসাব থাকবে।",
          "ফলাফল ও ধাপগুলো পর্যালোচনা করুন। নিশ্চিত করুন সূত্রটি আপনার সমস্যার সঙ্গে মিলেছে এবং হিসাব ঠিক দেখাচ্ছে।",
          "উত্তরটি যুক্তিসংগত কিনা দেখুন। অতিভুজ দুটি বাহুর চেয়ে বড় হতেই হবে। অজানা বাহু অতিভুজের চেয়ে ছোট হতে হবে। এগুলো না মিললে আপনার ইনপুটগুলো আবার দেখুন।"
        ]
      },
      "side-formulas": {
        "h2": "সমকোণী ত্রিভুজের বাহুর সূত্র এক নজরে",
        "h3s": [],
        "paragraphs": [
          "আলাদা তিনটি সূত্র মুখস্থ করার দরকার নেই। শুধু [[a^2 + b^2 = c^2]] মনে রাখুন, তারপর অজানাটির জন্য সমাধান করুন। c অজানা হলে বাহুগুলোর বর্গ যোগ করে বর্গমূল নিন। একটি বাহু অজানা হলে জানা বাহুর বর্গ c² থেকে বিয়োগ করে বর্গমূল নিন। ক্যালকুলেটরের মোডের নামই বলে দেয় কোন সাজানো রূপ ব্যবহার করতে হবে।"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "আলাদা তিনটি সূত্র মুখস্থ করার দরকার নেই। শুধু [[a^2 + b^2 = c^2]] মনে রাখুন, তারপর অজানাটির জন্য সমাধান করুন। c অজানা হলে বাহুগুলোর বর্গ যোগ করে বর্গমূল নিন। একটি বাহু অজানা হলে জানা বাহুর বর্গ c² থেকে বিয়োগ করে বর্গমূল নিন। ক্যালকুলেটরের মোডের নামই বলে দেয় কোন সাজানো রূপ ব্যবহার করতে হবে।"
          }
        ],
        "table": {
          "headers": [
            "জানা মাপ",
            "অজানা বাহু",
            "সূত্র",
            "ক্যালকুলেটর মোড",
            "উদাহরণ"
          ],
          "rows": [
            [
              "বাহু a ও b",
              "অতিভুজ c",
              "c = √(a² + b²)",
              "পিথাগোরীয় উপপাদ্য",
              "a=6, b=8 → c=10"
            ],
            [
              "অতিভুজ c, বাহু a",
              "বাহু b",
              "b = √(c² − a²)",
              "c ও a থেকে অজানা বাহু",
              "c=13, a=5 → b=12"
            ],
            [
              "অতিভুজ c, বাহু b",
              "বাহু a",
              "a = √(c² − b²)",
              "c ও b থেকে অজানা বাহু",
              "c=17, b=15 → a=8"
            ]
          ]
        }
      },
      "side-applications": {
        "h2": "সমকোণী ত্রিভুজের বাহুর হিসাবের বাস্তব উদাহরণ",
        "h3s": [
          "উদাহরণ ৫: দেয়ালে ঠেস দেওয়া মই",
          "উদাহরণ ৬: আয়তাকার ঘরের কর্ণ",
          "উদাহরণ ৭: চালের কাঠামোর (রাফটার) দৈর্ঘ্য",
          "উদাহরণ ৮: টিভি বা মনিটরের কর্ণ",
          "উদাহরণ ৯: ঢালু পথ (র্যাম্প) মাপা",
          "উদাহরণ ১০: আয়তাকার বাগানের পথ",
          "উদাহরণ ১১: জানা কর্ণবিশিষ্ট সাপোর্ট ব্রেস",
          "উদাহরণ ১২: দশমিক মানসহ প্রকৌশল অঙ্কন"
        ],
        "paragraphs": [
          "একটি মই দেয়াল বেয়ে 2.4 m উচ্চতা পর্যন্ত পৌঁছায়, এর ভিত্তি দেয়াল থেকে 1.8 m দূরে। দেয়াল ও মাটি সমকোণ তৈরি করে, ফলে একটি সমকোণী ত্রিভুজ গঠিত হয় যেখানে মইটি অতিভুজ। জানা আছে: a = 1.8 m (ভিত্তি), b = 2.4 m (উচ্চতা)। বের করুন: c (মইয়ের দৈর্ঘ্য)। সূত্র: [[c = \\sqrt{a^2 + b^2}]]। মান বসান: c = √(1.8² + 2.4²) = √(3.24 + 5.76) = √9 = 3। মইটির দৈর্ঘ্য 3 m। এ থেকে জানা যায় ওই দূরত্বে ওই উচ্চতায় পৌঁছাতে কত দৈর্ঘ্যের মই দরকার। লক্ষ্য করুন: এই জ্যামিতি মইয়ের নিরাপত্তা মূল্যায়ন করে না; বাস্তবে ব্যবহারের জন্য প্রস্তুতকারকের নির্দেশনা ও নিরাপত্তা বিধি মেনে চলুন।",
          "একটি ঘর 9 ft লম্বা ও 12 ft চওড়া। বিপরীত কোণদ্বয়ের কর্ণ দেয়াল দুটিকে বাহু ধরে একটি সমকোণী ত্রিভুজের অতিভুজ তৈরি করে। জানা আছে: a = 9 ft, b = 12 ft। বের করুন: c। সূত্র: c = √(9² + 12²) = √(81 + 144) = √225 = 15। কর্ণটি 15 ft। ঘরটি বর্গাকার কিনা যাচাই করতে (দুটি কর্ণ মিলতে হবে) বা আসবাব বসানোর জন্য সবচেয়ে লম্বা সরলরৈখিক দূরত্ব নির্ণয়ে এটি কাজে লাগে।",
          "একটি সরলীকৃত চালের প্রস্থচ্ছেদে অনুভূমিক দূরত্ব 12 ft ও উল্লম্ব উচ্চতা 5 ft। কাঠামোটি (রাফটার) অতিভুজ তৈরি করে। জানা আছে: দূরত্ব = 12 ft, উচ্চতা = 5 ft। বের করুন: কাঠামোর দৈর্ঘ্য। সূত্র: c = √(12² + 5²) = √(144 + 25) = √169 = 13। কাঠামোটি 13 ft লম্বা। এই মৌলিক হিসাবে বাস্তব নির্মাণে প্রয়োজনীয় ঝুলন্ত অংশ, শীর্ষের পুরুত্ব ও সংযোগের ছাড় অন্তর্ভুক্ত নয়। সম্পূর্ণ নির্দেশনার জন্য ভবনের নকশা দেখুন।",
          "একটি আয়তাকার ডিসপ্লে 16 inches চওড়া ও 9 inches লম্বা। কর্ণটি অতিভুজ। জানা আছে: প্রস্থ = 16 in, উচ্চতা = 9 in। বের করুন: কর্ণ। সূত্র: d = √(16² + 9²) = √(256 + 81) = √337 ≈ 18.36। কর্ণটি প্রায় 18.36 inches। এতে উল্লিখিত মাত্রা ব্যবহার করা হয়েছে; প্রস্তুতকারকের মাপার পদ্ধতির ভিত্তিতে বাণিজ্যিক স্ক্রিনের আকার ভিন্ন হতে পারে।",
          "একটি ঢালু পথের অনুভূমিক দূরত্ব 6 m ও উচ্চতা 0.75 m। ঢালু পৃষ্ঠটি অতিভুজ। জানা আছে: দূরত্ব = 6 m, উচ্চতা = 0.75 m। বের করুন: ঢালের দৈর্ঘ্য। সূত্র: s = √(6² + 0.75²) = √(36 + 0.5625) = √36.5625 ≈ 6.05। ঢালটি প্রায় 6.05 m। অনুভূমিক দূরত্ব (6 m) ঢালের দৈর্ঘ্য (6.05 m) থেকে ভিন্ন; ঢাল সবসময় সামান্য লম্বা হয়। এটি প্রতিবন্ধী-বান্ধব মানের অনুসরণ যাচাই করে না; ঢালু পথের প্রয়োজনীয়তার জন্য স্থানীয় ভবন বিধি দেখুন।",
          "একটি আয়তাকার বাগান 30 ft চওড়া ও 40 ft লম্বা। একটি কর্ণপথ এটিকে ছেদ করে গেছে। জানা আছে: a = 30 ft, b = 40 ft। বের করুন: পথের দৈর্ঘ্য। সূত্র: c = √(30² + 40²) = √(900 + 1600) = √2500 = 50। পথটি 50 ft। কর্ণ বরাবর হাঁটা (50 ft) দুই পাশ ধরে হাঁটার (70 ft) চেয়ে কম, এ কারণেই কর্ণপথে সময় বাঁচে।",
          "একটি সাপোর্ট ব্রেস 10 ft লম্বা (অতিভুজ) এবং অনুভূমিকভাবে 8 ft বিস্তৃত। উল্লম্ব দূরত্ব বের করুন। জানা আছে: c = 10 ft, a = 8 ft। বের করুন: b। সূত্র: b = √(c² − a²) = √(100 − 64) = √36 = 6। উল্লম্ব দূরত্ব 6 ft। বিয়োগ প্রয়োজন কারণ অতিভুজের বর্গে দুটি বাহুর বর্গই থাকে; জানা অনুভূমিক অংশ সরিয়ে নিলে উল্লম্ব অংশ থাকে।",
          "একটি ব্র্যাকেটের নকশায় অতিভুজ 250 mm ও একটি বাহু 70 mm নির্দিষ্ট করা আছে। অন্য বাহুটি বের করুন। জানা আছে: c = 250 mm, b = 70 mm। বের করুন: a। সূত্র: a = √(c² − b²) = √(62500 − 4900) = √57600 = 240। বাহুটি 240 mm। মিলিমিটার ইনপুটে ফলাফল এখানে নির্ভুল, কিন্তু বাস্তবে আপনার সবচেয়ে কম নির্ভুল মাপের নির্ভুলতায় পূর্ণসংখ্যায় রূপান্তর করুন। আপনার যন্ত্র যত দশমিক পর্যন্ত মাপতে পারে তার চেয়ে বেশি দশমিক লিখবেন না।"
        ],
        "blocks": [
          {
            "kind": "h3",
            "text": "উদাহরণ ৫: দেয়ালে ঠেস দেওয়া মই"
          },
          {
            "kind": "p",
            "text": "একটি মই দেয়াল বেয়ে 2.4 m উচ্চতা পর্যন্ত পৌঁছায়, এর ভিত্তি দেয়াল থেকে 1.8 m দূরে। দেয়াল ও মাটি সমকোণ তৈরি করে, ফলে একটি সমকোণী ত্রিভুজ গঠিত হয় যেখানে মইটি অতিভুজ। জানা আছে: a = 1.8 m (ভিত্তি), b = 2.4 m (উচ্চতা)। বের করুন: c (মইয়ের দৈর্ঘ্য)। সূত্র: [[c = \\sqrt{a^2 + b^2}]]। মান বসান: c = √(1.8² + 2.4²) = √(3.24 + 5.76) = √9 = 3। মইটির দৈর্ঘ্য 3 m। এ থেকে জানা যায় ওই দূরত্বে ওই উচ্চতায় পৌঁছাতে কত দৈর্ঘ্যের মই দরকার। লক্ষ্য করুন: এই জ্যামিতি মইয়ের নিরাপত্তা মূল্যায়ন করে না; বাস্তবে ব্যবহারের জন্য প্রস্তুতকারকের নির্দেশনা ও নিরাপত্তা বিধি মেনে চলুন।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ৬: আয়তাকার ঘরের কর্ণ"
          },
          {
            "kind": "p",
            "text": "একটি ঘর 9 ft লম্বা ও 12 ft চওড়া। বিপরীত কোণদ্বয়ের কর্ণ দেয়াল দুটিকে বাহু ধরে একটি সমকোণী ত্রিভুজের অতিভুজ তৈরি করে। জানা আছে: a = 9 ft, b = 12 ft। বের করুন: c। সূত্র: c = √(9² + 12²) = √(81 + 144) = √225 = 15। কর্ণটি 15 ft। ঘরটি বর্গাকার কিনা যাচাই করতে (দুটি কর্ণ মিলতে হবে) বা আসবাব বসানোর জন্য সবচেয়ে লম্বা সরলরৈখিক দূরত্ব নির্ণয়ে এটি কাজে লাগে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ৭: চালের কাঠামোর (রাফটার) দৈর্ঘ্য"
          },
          {
            "kind": "p",
            "text": "একটি সরলীকৃত চালের প্রস্থচ্ছেদে অনুভূমিক দূরত্ব 12 ft ও উল্লম্ব উচ্চতা 5 ft। কাঠামোটি (রাফটার) অতিভুজ তৈরি করে। জানা আছে: দূরত্ব = 12 ft, উচ্চতা = 5 ft। বের করুন: কাঠামোর দৈর্ঘ্য। সূত্র: c = √(12² + 5²) = √(144 + 25) = √169 = 13। কাঠামোটি 13 ft লম্বা। এই মৌলিক হিসাবে বাস্তব নির্মাণে প্রয়োজনীয় ঝুলন্ত অংশ, শীর্ষের পুরুত্ব ও সংযোগের ছাড় অন্তর্ভুক্ত নয়। সম্পূর্ণ নির্দেশনার জন্য ভবনের নকশা দেখুন।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ৮: টিভি বা মনিটরের কর্ণ"
          },
          {
            "kind": "p",
            "text": "একটি আয়তাকার ডিসপ্লে 16 inches চওড়া ও 9 inches লম্বা। কর্ণটি অতিভুজ। জানা আছে: প্রস্থ = 16 in, উচ্চতা = 9 in। বের করুন: কর্ণ। সূত্র: d = √(16² + 9²) = √(256 + 81) = √337 ≈ 18.36। কর্ণটি প্রায় 18.36 inches। এতে উল্লিখিত মাত্রা ব্যবহার করা হয়েছে; প্রস্তুতকারকের মাপার পদ্ধতির ভিত্তিতে বাণিজ্যিক স্ক্রিনের আকার ভিন্ন হতে পারে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ৯: ঢালু পথ (র্যাম্প) মাপা"
          },
          {
            "kind": "p",
            "text": "একটি ঢালু পথের অনুভূমিক দূরত্ব 6 m ও উচ্চতা 0.75 m। ঢালু পৃষ্ঠটি অতিভুজ। জানা আছে: দূরত্ব = 6 m, উচ্চতা = 0.75 m। বের করুন: ঢালের দৈর্ঘ্য। সূত্র: s = √(6² + 0.75²) = √(36 + 0.5625) = √36.5625 ≈ 6.05। ঢালটি প্রায় 6.05 m। অনুভূমিক দূরত্ব (6 m) ঢালের দৈর্ঘ্য (6.05 m) থেকে ভিন্ন; ঢাল সবসময় সামান্য লম্বা হয়। এটি প্রতিবন্ধী-বান্ধব মানের অনুসরণ যাচাই করে না; ঢালু পথের প্রয়োজনীয়তার জন্য স্থানীয় ভবন বিধি দেখুন।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ১০: আয়তাকার বাগানের পথ"
          },
          {
            "kind": "p",
            "text": "একটি আয়তাকার বাগান 30 ft চওড়া ও 40 ft লম্বা। একটি কর্ণপথ এটিকে ছেদ করে গেছে। জানা আছে: a = 30 ft, b = 40 ft। বের করুন: পথের দৈর্ঘ্য। সূত্র: c = √(30² + 40²) = √(900 + 1600) = √2500 = 50। পথটি 50 ft। কর্ণ বরাবর হাঁটা (50 ft) দুই পাশ ধরে হাঁটার (70 ft) চেয়ে কম, এ কারণেই কর্ণপথে সময় বাঁচে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ১১: জানা কর্ণবিশিষ্ট সাপোর্ট ব্রেস"
          },
          {
            "kind": "p",
            "text": "একটি সাপোর্ট ব্রেস 10 ft লম্বা (অতিভুজ) এবং অনুভূমিকভাবে 8 ft বিস্তৃত। উল্লম্ব দূরত্ব বের করুন। জানা আছে: c = 10 ft, a = 8 ft। বের করুন: b। সূত্র: b = √(c² − a²) = √(100 − 64) = √36 = 6। উল্লম্ব দূরত্ব 6 ft। বিয়োগ প্রয়োজন কারণ অতিভুজের বর্গে দুটি বাহুর বর্গই থাকে; জানা অনুভূমিক অংশ সরিয়ে নিলে উল্লম্ব অংশ থাকে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ ১২: দশমিক মানসহ প্রকৌশল অঙ্কন"
          },
          {
            "kind": "p",
            "text": "একটি ব্র্যাকেটের নকশায় অতিভুজ 250 mm ও একটি বাহু 70 mm নির্দিষ্ট করা আছে। অন্য বাহুটি বের করুন। জানা আছে: c = 250 mm, b = 70 mm। বের করুন: a। সূত্র: a = √(c² − b²) = √(62500 − 4900) = √57600 = 240। বাহুটি 240 mm। মিলিমিটার ইনপুটে ফলাফল এখানে নির্ভুল, কিন্তু বাস্তবে আপনার সবচেয়ে কম নির্ভুল মাপের নির্ভুলতায় পূর্ণসংখ্যায় রূপান্তর করুন। আপনার যন্ত্র যত দশমিক পর্যন্ত মাপতে পারে তার চেয়ে বেশি দশমিক লিখবেন না।"
          }
        ],
        "imgAlt": "চারটি প্যানেলে দেয়ালে ঠেস দেওয়া মই, ঘরের কর্ণ, চালের কাঠামো ও বাগানের পথের সমকোণী ত্রিভুজের মাপ",
        "figcaption": "প্রতিদিনের সমকোণী ত্রিভুজ: মই (3 m), ঘরের কর্ণ (15 ft), চালের কাঠামো (13 ft) ও বাগানের পথ (50 ft)।"
      },
      "side-triples": {
        "h2": "সাধারণ পিথাগোরীয় ত্রয়ী ও এগুলোর গুরুত্ব",
        "h3s": [],
        "paragraphs": [
          "পিথাগোরীয় ত্রয়ী হলো তিনটি পূর্ণসংখ্যা যা [[a^2 + b^2 = c^2]] পূরণ করে। এই ত্রয়ীগুলো দ্রুত মানসিক যাচাই দেয়; আপনার ইনপুট কোনো ত্রয়ীর সঙ্গে মিললে হিসাব না করেই উত্তর জেনে যাবেন। স্কেল করা ত্রয়ীও কাজ করে: 3-4-5 কে 2 দিয়ে গুণ করলে 6-8-10 পাওয়া যায়, যা সমীকরণটি পূরণ করে (36 + 64 = 100)। প্রতিটি সমকোণী ত্রিভুজের বাহু পূর্ণসংখ্যা হয় না; বেশিরভাগের ফলাফল দশমিক বা অমূলদ সংখ্যা হয়।",
          "5-12-13 যাচাই করুন: 5² = 25, 12² = 144, 25 + 144 = 169, √169 = 13। 8-15-17 যাচাই করুন: 8² = 64, 15² = 225, 64 + 225 = 289, √289 = 17। ক্যালকুলেটর পূর্ণসংখ্যা দিলে দেখুন আপনার ইনপুটগুলোর সঙ্গে এটি ত্রয়ী তৈরি করে কিনা, যুক্তিসংগত যাচাই হিসেবে।"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "পিথাগোরীয় ত্রয়ী হলো তিনটি পূর্ণসংখ্যা যা [[a^2 + b^2 = c^2]] পূরণ করে। এই ত্রয়ীগুলো দ্রুত মানসিক যাচাই দেয়; আপনার ইনপুট কোনো ত্রয়ীর সঙ্গে মিললে হিসাব না করেই উত্তর জেনে যাবেন। স্কেল করা ত্রয়ীও কাজ করে: 3-4-5 কে 2 দিয়ে গুণ করলে 6-8-10 পাওয়া যায়, যা সমীকরণটি পূরণ করে (36 + 64 = 100)। প্রতিটি সমকোণী ত্রিভুজের বাহু পূর্ণসংখ্যা হয় না; বেশিরভাগের ফলাফল দশমিক বা অমূলদ সংখ্যা হয়।"
          },
          {
            "kind": "p",
            "text": "5-12-13 যাচাই করুন: 5² = 25, 12² = 144, 25 + 144 = 169, √169 = 13। 8-15-17 যাচাই করুন: 8² = 64, 15² = 225, 64 + 225 = 289, √289 = 17। ক্যালকুলেটর পূর্ণসংখ্যা দিলে দেখুন আপনার ইনপুটগুলোর সঙ্গে এটি ত্রয়ী তৈরি করে কিনা, যুক্তিসংগত যাচাই হিসেবে।"
          }
        ],
        "table": {
          "headers": [
            "ত্রয়ী",
            "যাচাই"
          ],
          "rows": [
            [
              "3-4-5",
              "9 + 16 = 25 ✓"
            ],
            [
              "5-12-13",
              "25 + 144 = 169 ✓"
            ],
            [
              "8-15-17",
              "64 + 225 = 289 ✓"
            ],
            [
              "7-24-25",
              "49 + 576 = 625 ✓"
            ],
            [
              "9-40-41",
              "81 + 1600 = 1681 ✓"
            ],
            [
              "6-8-10",
              "36 + 64 = 100 ✓ (scaled 3-4-5)"
            ]
          ]
        }
      },
      "side-units": {
        "h2": "মাপের একক, দশমিক উত্তর ও পূর্ণসংখ্যায় রূপান্তর",
        "h3s": [],
        "paragraphs": [
          "সামঞ্জস্যপূর্ণ একক ব্যবহার করুন: মিলিমিটার, সেন্টিমিটার, মিটার, ইঞ্চি, ফুট, গজ বা কিলোমিটার। মিশ্র এককে ভুল উত্তর আসে; হিসাবের আগে 3 feet ও 6 inches কে 3.5 feet বা 42 inches করতে হবে। আগে রূপান্তর করুন, তারপর হিসাব করুন। দুটি ইনপুটের জন্য ক্যালকুলেটরে মিলিয়ে একক বেছে নিন। চূড়ান্ত হিসাবের পরেই পূর্ণসংখ্যায় রূপান্তর করুন, মাঝের ধাপে নয়, যাতে ত্রুটি জমে না যায়। 10 cm এর মতো নির্ভুল উত্তর 6.50 m এর মতো পূর্ণসংখ্যায় রূপান্তরিত দশমিক থেকে আলাদা; পরেরটি মাপের নির্ভুলতা বোঝায়। আপনার ফলাফল সবচেয়ে কম নির্ভুল ইনপুটের চেয়ে বেশি নির্ভুল হতে পারে না। নিকটতম সেন্টিমিটার পর্যন্ত মাপলে মিলিমিটার লিখবেন না।",
          "ফুট ও ইঞ্চির উদাহরণ: একটি তক্তা 2 ft 6 in বাই 3 ft। ইঞ্চিতে রূপান্তর করুন: 30 in ও 36 in। হিসাব করুন: c = √(30² + 36²) = √(900 + 1296) = √2196 ≈ 46.86 in। ফিরিয়ে রূপান্তর করুন: 46.86 in = 3 ft 10.86 in, বা প্রায় 3 ft 10.9 in।",
          "লক্ষ্য করুন: দৈর্ঘ্যের বর্গ করলে বর্গ একক (cm²) হয়, কিন্তু চূড়ান্ত বর্গমূলে রৈখিক একক (cm) ফিরে আসে। ক্যালকুলেটর এটি স্বয়ংক্রিয়ভাবে সামলায়।"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "সামঞ্জস্যপূর্ণ একক ব্যবহার করুন: মিলিমিটার, সেন্টিমিটার, মিটার, ইঞ্চি, ফুট, গজ বা কিলোমিটার। মিশ্র এককে ভুল উত্তর আসে; হিসাবের আগে 3 feet ও 6 inches কে 3.5 feet বা 42 inches করতে হবে। আগে রূপান্তর করুন, তারপর হিসাব করুন। দুটি ইনপুটের জন্য ক্যালকুলেটরে মিলিয়ে একক বেছে নিন। চূড়ান্ত হিসাবের পরেই পূর্ণসংখ্যায় রূপান্তর করুন, মাঝের ধাপে নয়, যাতে ত্রুটি জমে না যায়। 10 cm এর মতো নির্ভুল উত্তর 6.50 m এর মতো পূর্ণসংখ্যায় রূপান্তরিত দশমিক থেকে আলাদা; পরেরটি মাপের নির্ভুলতা বোঝায়। আপনার ফলাফল সবচেয়ে কম নির্ভুল ইনপুটের চেয়ে বেশি নির্ভুল হতে পারে না। নিকটতম সেন্টিমিটার পর্যন্ত মাপলে মিলিমিটার লিখবেন না।"
          },
          {
            "kind": "p",
            "text": "ফুট ও ইঞ্চির উদাহরণ: একটি তক্তা 2 ft 6 in বাই 3 ft। ইঞ্চিতে রূপান্তর করুন: 30 in ও 36 in। হিসাব করুন: c = √(30² + 36²) = √(900 + 1296) = √2196 ≈ 46.86 in। ফিরিয়ে রূপান্তর করুন: 46.86 in = 3 ft 10.86 in, বা প্রায় 3 ft 10.9 in।"
          },
          {
            "kind": "p",
            "text": "লক্ষ্য করুন: দৈর্ঘ্যের বর্গ করলে বর্গ একক (cm²) হয়, কিন্তু চূড়ান্ত বর্গমূলে রৈখিক একক (cm) ফিরে আসে। ক্যালকুলেটর এটি স্বয়ংক্রিয়ভাবে সামলায়।"
          }
        ]
      },
      "side-invalid": {
        "h2": "কিছু ত্রিভুজের মাপ কেন সঠিক উত্তর দিতে পারে না",
        "h3s": [],
        "paragraphs": [
          "বৈধ সমকোণী ত্রিভুজের জন্য তিনটি ধনাত্মক বাহুর দৈর্ঘ্য দরকার যেখানে অতিভুজ প্রতিটি বাহুর চেয়ে বড়। অজানা-বাহুর হিসাবে বর্গমূলের নিচের মান (c² − leg²) ধনাত্মক হতেই হবে।",
          "অবৈধ: c = 8, a = 10। অতিভুজ (8) বাহুর (10) চেয়ে ছোট। এটি অতিভুজ-সবচেয়ে-লম্বা নিয়ম লঙ্ঘন করে। সম্ভবত আপনি লেবেল অদলবদল করেছেন; 10-ই অতিভুজ হওয়া উচিত।",
          "অবৈধ: c = 5, a = 5। তখন b = √(25 − 25) = √0 = 0। শূন্য দৈর্ঘ্যের বাহু ত্রিভুজকে রেখাংশে পরিণত করে, বৈধ ত্রিভুজ থাকে না।",
          "অবৈধ: a = −3, b = 4। ঋণাত্মক দৈর্ঘ্যের কোনো জ্যামিতিক অর্থ নেই। বাহুর দৈর্ঘ্য ধনাত্মক হতেই হবে।"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "বৈধ সমকোণী ত্রিভুজের জন্য তিনটি ধনাত্মক বাহুর দৈর্ঘ্য দরকার যেখানে অতিভুজ প্রতিটি বাহুর চেয়ে বড়। অজানা-বাহুর হিসাবে বর্গমূলের নিচের মান (c² − leg²) ধনাত্মক হতেই হবে।"
          },
          {
            "kind": "p",
            "text": "অবৈধ: c = 8, a = 10। অতিভুজ (8) বাহুর (10) চেয়ে ছোট। এটি অতিভুজ-সবচেয়ে-লম্বা নিয়ম লঙ্ঘন করে। সম্ভবত আপনি লেবেল অদলবদল করেছেন; 10-ই অতিভুজ হওয়া উচিত।"
          },
          {
            "kind": "p",
            "text": "অবৈধ: c = 5, a = 5। তখন b = √(25 − 25) = √0 = 0। শূন্য দৈর্ঘ্যের বাহু ত্রিভুজকে রেখাংশে পরিণত করে, বৈধ ত্রিভুজ থাকে না।"
          },
          {
            "kind": "p",
            "text": "অবৈধ: a = −3, b = 4। ঋণাত্মক দৈর্ঘ্যের কোনো জ্যামিতিক অর্থ নেই। বাহুর দৈর্ঘ্য ধনাত্মক হতেই হবে।"
          }
        ],
        "table": {
          "headers": [
            "সমস্যা",
            "কারণ",
            "সমাধান"
          ],
          "rows": [
            [
              "অতিভুজ বাহুর চেয়ে ছোট",
              "লেবেল অদলবদল হয়েছে",
              "সবচেয়ে লম্বা বাহুটিকে c ধরুন"
            ],
            [
              "বর্গমূলের নিচে শূন্য",
              "c জানা বাহুর সমান",
              "মাপগুলো দেখুন; ত্রিভুজটি বিনষ্ট"
            ],
            [
              "বর্গমূলের নিচে ঋণাত্মক",
              "c জানা বাহুর চেয়ে ছোট",
              "ইনপুটগুলো দিয়ে সমকোণী ত্রিভুজ সম্ভব নয়"
            ],
            [
              "ঋণাত্মক ইনপুট",
              "টাইপিং ভুল বা চিহ্নের ভুল",
              "শুধু ধনাত্মক দৈর্ঘ্য ব্যবহার করুন"
            ],
            [
              "শূন্য ইনপুট",
              "মাপ অনুপস্থিত",
              "আসল দৈর্ঘ্য লিখুন"
            ],
            [
              "ভুল একক মেশানো",
              "ফুটের সঙ্গে ইঞ্চি",
              "আগে এক এককে রূপান্তর করুন"
            ],
            [
              "সমকোণী নয় এমন ত্রিভুজ",
              "90° কোণ নেই",
              "বরং কোসাইন সূত্র (Law of Cosines) ব্যবহার করুন"
            ]
          ]
        }
      },
      "side-verify": {
        "h2": "হিসাব করা বাহু সঠিক কিনা কীভাবে যাচাই করবেন",
        "h3s": [],
        "paragraphs": [
          "পদ্ধতি ১: ফিরিয়ে বসান। তিনটি বাহুই [[a^2 + b^2 = c^2]]-তে বসান। 6-8-10 ত্রিভুজের ক্ষেত্রে: 36 + 64 = 100। দুই পাশ মিলে গেলে উত্তর সঠিক।",
          "পদ্ধতি ২: অতিভুজ সবচেয়ে লম্বা কিনা দেখুন। c-এর জন্য সমাধান করলে নিশ্চিত করুন এটি a ও b দুটোর চেয়ে বড়। কোনো বাহুর জন্য সমাধান করলে নিশ্চিত করুন এটি c-এর চেয়ে ছোট।",
          "পদ্ধতি ৩: ত্রয়ীর সঙ্গে তুলনা করুন। ইনপুট পূর্ণসংখ্যা হলে দেখুন এগুলো কোনো পরিচিত ত্রয়ী তৈরি করে কিনা। 9 ও 12 ইনপুটে 15 পাওয়া স্কেল করা 3-4-5 ত্রয়ীর সঙ্গে মেলে।",
          "পদ্ধতি ৪: যুক্তিসংগততা অনুমান করুন। অতিভুজ যেকোনো বাহুর চেয়ে লম্বা কিন্তু দুটির যোগফলের চেয়ে ছোট হওয়া উচিত। 6 ও 8 বাহুর ক্ষেত্রে অতিভুজ 10, যা 8 < 10 < 14 পূরণ করে।",
          "পদ্ধতি ৫: একক ও পূর্ণসংখ্যায় রূপান্তর দেখুন। নিশ্চিত করুন একক আপনার ইনপুটের সঙ্গে মিলেছে এবং দশমিকের ঘরগুলো আপনার মাপের নির্ভুলতা প্রতিফলিত করে।",
          "যাচাইয়ের উদাহরণ ১: a = 5, b = 12 থেকে c = 13 হিসাব করলেন। দেখুন: 5² + 12² = 25 + 144 = 169 = 13²। অতিভুজ 13 দুটি বাহুর চেয়ে বড়। এটি 5-12-13 ত্রয়ীর সঙ্গে মেলে। বৈধ।",
          "যাচাইয়ের উদাহরণ ২: c = 12.5, a = 10 থেকে b = 7.5 হিসাব করলেন। দেখুন: 10² + 7.5² = 100 + 56.25 = 156.25 = 12.5²। বাহু 7.5 অতিভুজ 12.5-এর চেয়ে ছোট। অনুমান: 10 < 12.5 < 20। বৈধ।"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "পদ্ধতি ১: ফিরিয়ে বসান। তিনটি বাহুই [[a^2 + b^2 = c^2]]-তে বসান। 6-8-10 ত্রিভুজের ক্ষেত্রে: 36 + 64 = 100। দুই পাশ মিলে গেলে উত্তর সঠিক।"
          },
          {
            "kind": "p",
            "text": "পদ্ধতি ২: অতিভুজ সবচেয়ে লম্বা কিনা দেখুন। c-এর জন্য সমাধান করলে নিশ্চিত করুন এটি a ও b দুটোর চেয়ে বড়। কোনো বাহুর জন্য সমাধান করলে নিশ্চিত করুন এটি c-এর চেয়ে ছোট।"
          },
          {
            "kind": "p",
            "text": "পদ্ধতি ৩: ত্রয়ীর সঙ্গে তুলনা করুন। ইনপুট পূর্ণসংখ্যা হলে দেখুন এগুলো কোনো পরিচিত ত্রয়ী তৈরি করে কিনা। 9 ও 12 ইনপুটে 15 পাওয়া স্কেল করা 3-4-5 ত্রয়ীর সঙ্গে মেলে।"
          },
          {
            "kind": "p",
            "text": "পদ্ধতি ৪: যুক্তিসংগততা অনুমান করুন। অতিভুজ যেকোনো বাহুর চেয়ে লম্বা কিন্তু দুটির যোগফলের চেয়ে ছোট হওয়া উচিত। 6 ও 8 বাহুর ক্ষেত্রে অতিভুজ 10, যা 8 < 10 < 14 পূরণ করে।"
          },
          {
            "kind": "p",
            "text": "পদ্ধতি ৫: একক ও পূর্ণসংখ্যায় রূপান্তর দেখুন। নিশ্চিত করুন একক আপনার ইনপুটের সঙ্গে মিলেছে এবং দশমিকের ঘরগুলো আপনার মাপের নির্ভুলতা প্রতিফলিত করে।"
          },
          {
            "kind": "p",
            "text": "যাচাইয়ের উদাহরণ ১: a = 5, b = 12 থেকে c = 13 হিসাব করলেন। দেখুন: 5² + 12² = 25 + 144 = 169 = 13²। অতিভুজ 13 দুটি বাহুর চেয়ে বড়। এটি 5-12-13 ত্রয়ীর সঙ্গে মেলে। বৈধ।"
          },
          {
            "kind": "p",
            "text": "যাচাইয়ের উদাহরণ ২: c = 12.5, a = 10 থেকে b = 7.5 হিসাব করলেন। দেখুন: 10² + 7.5² = 100 + 56.25 = 156.25 = 12.5²। বাহু 7.5 অতিভুজ 12.5-এর চেয়ে ছোট। অনুমান: 10 < 12.5 < 20। বৈধ।"
          }
        ]
      },
      "side-mistakes": {
        "h2": "সমকোণী ত্রিভুজের বাহু হিসাবের সাধারণ ভুল",
        "h3s": [],
        "paragraphs": [
          "১. বাহুগুলোর বর্গের বদলে বাহু যোগ করা। √(36 + 64) = 10 এর বদলে 6 + 8 = 14 হিসাব করা। উপপাদ্য দৈর্ঘ্য নয়, বর্গক্ষেত্রের ক্ষেত্রফল যোগ করে। সবসময় আগে বর্গ করুন।",
          "২. বর্গমূল নিতে ভুলে যাওয়া। 6-8 ত্রিভুজের জন্য 10 এর বদলে 100 উত্তর দেওয়া। সূত্র দেয় c²; আপনার দরকার c। চূড়ান্ত ধাপে বর্গমূল নিন।",
          "৩. অতিভুজ বের করার সময় বিয়োগ করা। √(64 + 36) = 10 এর বদলে √(64 − 36) = √28 ব্যবহার করা। দুটি বাহু থেকে অতিভুজ বের করতে যোগ প্রযোজ্য।",
          "৪. অজানা বাহু বের করার সময় যোগ করা। √(169 − 25) = 12 এর বদলে √(169 + 25) ব্যবহার করা। অতিভুজ জানা থাকলে বিয়োগ প্রযোজ্য।",
          "৫. বাহুকে অতিভুজ ভেবে ভুল করা। সবচেয়ে লম্বা বাহুকে a বা b নাম দেওয়া। অতিভুজ সবসময় সমকোণের বিপরীতে থাকে এবং সবসময় c নামে চিহ্নিত।",
          "৬. সমকোণী নয় এমন ত্রিভুজে উপপাদ্য প্রয়োগ করা। 90-ডিগ্রি কোণ ছাড়াই a² + b² = c² ব্যবহার করা। আগে সমকোণ যাচাই করুন।",
          "৭. মাঝের হিসাব পূর্ণসংখ্যায় রূপান্তর করা। হিসাবের মাঝে 6.25 কে 6.3 করে শেষে সামান্য ভুল উত্তর পাওয়া। শেষ পর্যন্ত পূর্ণ নির্ভুলতা ধরে রাখুন।",
          "৮. মাপের একক মেশানো। 3 feet ও 6 inches কে 3 ও 6 হিসেবে লেখা। হিসাবের আগে এক এককে রূপান্তর করুন।",
          "৯. ভুল ঘরে মান লেখা। অতিভুজকে বাহুর ঘরে বসানো। প্রতিটি মাপ সঠিক লেবেলের সঙ্গে মিলিয়ে নিন।",
          "১০. বর্গমূলের নিচের ঋণাত্মক মান ভুলভাবে ব্যাখ্যা করা। √(25 − 36) দেখে জোর করে হিসাব চালিয়ে যাওয়া। ঋণাত্মক বর্গমূলীয় মান মানে ইনপুটগুলো দিয়ে সমকোণী ত্রিভুজ সম্ভব নয়; আপনার লেবেলগুলো দেখুন।"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "১. বাহুগুলোর বর্গের বদলে বাহু যোগ করা। √(36 + 64) = 10 এর বদলে 6 + 8 = 14 হিসাব করা। উপপাদ্য দৈর্ঘ্য নয়, বর্গক্ষেত্রের ক্ষেত্রফল যোগ করে। সবসময় আগে বর্গ করুন।"
          },
          {
            "kind": "p",
            "text": "২. বর্গমূল নিতে ভুলে যাওয়া। 6-8 ত্রিভুজের জন্য 10 এর বদলে 100 উত্তর দেওয়া। সূত্র দেয় c²; আপনার দরকার c। চূড়ান্ত ধাপে বর্গমূল নিন।"
          },
          {
            "kind": "p",
            "text": "৩. অতিভুজ বের করার সময় বিয়োগ করা। √(64 + 36) = 10 এর বদলে √(64 − 36) = √28 ব্যবহার করা। দুটি বাহু থেকে অতিভুজ বের করতে যোগ প্রযোজ্য।"
          },
          {
            "kind": "p",
            "text": "৪. অজানা বাহু বের করার সময় যোগ করা। √(169 − 25) = 12 এর বদলে √(169 + 25) ব্যবহার করা। অতিভুজ জানা থাকলে বিয়োগ প্রযোজ্য।"
          },
          {
            "kind": "p",
            "text": "৫. বাহুকে অতিভুজ ভেবে ভুল করা। সবচেয়ে লম্বা বাহুকে a বা b নাম দেওয়া। অতিভুজ সবসময় সমকোণের বিপরীতে থাকে এবং সবসময় c নামে চিহ্নিত।"
          },
          {
            "kind": "p",
            "text": "৬. সমকোণী নয় এমন ত্রিভুজে উপপাদ্য প্রয়োগ করা। 90-ডিগ্রি কোণ ছাড়াই a² + b² = c² ব্যবহার করা। আগে সমকোণ যাচাই করুন।"
          },
          {
            "kind": "p",
            "text": "৭. মাঝের হিসাব পূর্ণসংখ্যায় রূপান্তর করা। হিসাবের মাঝে 6.25 কে 6.3 করে শেষে সামান্য ভুল উত্তর পাওয়া। শেষ পর্যন্ত পূর্ণ নির্ভুলতা ধরে রাখুন।"
          },
          {
            "kind": "p",
            "text": "৮. মাপের একক মেশানো। 3 feet ও 6 inches কে 3 ও 6 হিসেবে লেখা। হিসাবের আগে এক এককে রূপান্তর করুন।"
          },
          {
            "kind": "p",
            "text": "৯. ভুল ঘরে মান লেখা। অতিভুজকে বাহুর ঘরে বসানো। প্রতিটি মাপ সঠিক লেবেলের সঙ্গে মিলিয়ে নিন।"
          },
          {
            "kind": "p",
            "text": "১০. বর্গমূলের নিচের ঋণাত্মক মান ভুলভাবে ব্যাখ্যা করা। √(25 − 36) দেখে জোর করে হিসাব চালিয়ে যাওয়া। ঋণাত্মক বর্গমূলীয় মান মানে ইনপুটগুলো দিয়ে সমকোণী ত্রিভুজ সম্ভব নয়; আপনার লেবেলগুলো দেখুন।"
          }
        ]
      },
      "side-beyond": {
        "h2": "কখন আপনার ভিন্ন সূত্র দরকার?",
        "h3s": [],
        "paragraphs": [
          "পিথাগোরাসের উপপাদ্যের জন্য দুটি জানা বাহু দরকার। ভিন্ন তথ্যের জন্য ভিন্ন উপায় লাগে।",
          "একটি বাহু ও একটি সূক্ষ্মকোণ: সাইন, কোসাইন বা ট্যানজেন্ট ব্যবহার করুন। সাইন বিপরীত বাহু ও অতিভুজের সম্পর্ক দেখায়, কোসাইন সংলগ্ন বাহু ও অতিভুজের, আর ট্যানজেন্ট বিপরীত ও সংলগ্ন বাহুর। উদাহরণস্বরূপ, অতিভুজ c ও কোণ A থাকলে বাহু a = c × sin(A)।",
          "দুটি কোণ, কোনো বাহু নেই: অসম্ভব। কোণ আকৃতি নির্ধারণ করে, আকার নয়; 3-4-5 ত্রিভুজ ও 6-8-10 ত্রিভুজের কোণ একই কিন্তু আকার ভিন্ন। অন্তত একটি বাহুর দৈর্ঘ্য দরকার।",
          "সমকোণী নয় এমন ত্রিভুজ: কোসাইন সূত্র (c² = a² + b² − 2ab×cos(C)) বা সাইন সূত্র ব্যবহার করুন। C = 90° হলে পিথাগোরাসের উপপাদ্য কোসাইন সূত্রের একটি বিশেষ ক্ষেত্র।",
          "বিশেষ সমকোণী ত্রিভুজ: 45-45-90 ত্রিভুজের বাহুগুলোর অনুপাত 1:1:√2, আর 30-60-90 ত্রিভুজের বাহুর অনুপাত 1:√3:2। এগুলো দিয়ে দ্রুত মানসিক হিসাব করা যায়।",
          "একটি বাহু ও একটি সূক্ষ্মকোণ জানা থাকলে এই সাইটের কোণ ব্যবহার করে সমকোণী ত্রিভুজের বাহুর ক্যালকুলেটর ব্যবহার করুন।"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "পিথাগোরাসের উপপাদ্যের জন্য দুটি জানা বাহু দরকার। ভিন্ন তথ্যের জন্য ভিন্ন উপায় লাগে।"
          },
          {
            "kind": "p",
            "text": "একটি বাহু ও একটি সূক্ষ্মকোণ: সাইন, কোসাইন বা ট্যানজেন্ট ব্যবহার করুন। সাইন বিপরীত বাহু ও অতিভুজের সম্পর্ক দেখায়, কোসাইন সংলগ্ন বাহু ও অতিভুজের, আর ট্যানজেন্ট বিপরীত ও সংলগ্ন বাহুর। উদাহরণস্বরূপ, অতিভুজ c ও কোণ A থাকলে বাহু a = c × sin(A)।"
          },
          {
            "kind": "p",
            "text": "দুটি কোণ, কোনো বাহু নেই: অসম্ভব। কোণ আকৃতি নির্ধারণ করে, আকার নয়; 3-4-5 ত্রিভুজ ও 6-8-10 ত্রিভুজের কোণ একই কিন্তু আকার ভিন্ন। অন্তত একটি বাহুর দৈর্ঘ্য দরকার।"
          },
          {
            "kind": "p",
            "text": "সমকোণী নয় এমন ত্রিভুজ: কোসাইন সূত্র (c² = a² + b² − 2ab×cos(C)) বা সাইন সূত্র ব্যবহার করুন। C = 90° হলে পিথাগোরাসের উপপাদ্য কোসাইন সূত্রের একটি বিশেষ ক্ষেত্র।"
          },
          {
            "kind": "p",
            "text": "বিশেষ সমকোণী ত্রিভুজ: 45-45-90 ত্রিভুজের বাহুগুলোর অনুপাত 1:1:√2, আর 30-60-90 ত্রিভুজের বাহুর অনুপাত 1:√3:2। এগুলো দিয়ে দ্রুত মানসিক হিসাব করা যায়।"
          },
          {
            "kind": "p",
            "text": "একটি বাহু ও একটি সূক্ষ্মকোণ জানা থাকলে এই সাইটের কোণ ব্যবহার করে সমকোণী ত্রিভুজের বাহুর ক্যালকুলেটর ব্যবহার করুন।"
          }
        ],
        "linkAnchor": "কোণ ব্যবহার করে সমকোণী ত্রিভুজের বাহুর ক্যালকুলেটর"
      },
      "side-related": {
        "h2": "আরও যেসব সমকোণী ত্রিভুজ ক্যালকুলেটর আপনার কাজে লাগতে পারে",
        "h3s": [],
        "paragraphs": [
          "অজানা বাহু বের করার পর ত্রিভুজের বিশ্লেষণ সম্পূর্ণ করতে এই সম্পর্কিত ক্যালকুলেটরগুলো ব্যবহার করুন।"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "অজানা বাহু বের করার পর ত্রিভুজের বিশ্লেষণ সম্পূর্ণ করতে এই সম্পর্কিত ক্যালকুলেটরগুলো ব্যবহার করুন।"
          }
        ]
      },
      "side-faq": {
        "h2": "সাধারণ জিজ্ঞাসা",
        "h3s": [],
        "paragraphs": [],
        "blocks": []
      },
      "side-summary": {
        "h2": "আত্মবিশ্বাসের সঙ্গে সমকোণী ত্রিভুজের বাহু হিসাব করুন",
        "h3s": [],
        "paragraphs": [
          "আগে আপনার জানা দুটি বাহু চিহ্নিত করুন। দুটিই বাহু হলে অতিভুজ দরকার; একটি অতিভুজ হলে অজানা বাহু দরকার। মিলিয়ে সূত্র বা ক্যালকুলেটর মোড বেছে নিন। দুটি মাপ একই এককে লিখুন। হিসাব করুন, তারপর যাচাই করুন: অতিভুজ সবচেয়ে লম্বা হতেই হবে, এবং a² + b² = c²-তে ফিরিয়ে বসালে মিলতে হবে। একক ও পূর্ণসংখ্যায় রূপান্তর দেখুন। এই ধাপগুলো অনুসরণে যেকোনো সমকোণী ত্রিভুজের বাহুর সমস্যা নির্ভরযোগ্যভাবে সমাধান করতে পারবেন। আপনার সংখ্যা হিসাব করতে এই পৃষ্ঠার উপরে ক্যালকুলেটরে ফিরে যান।"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "আগে আপনার জানা দুটি বাহু চিহ্নিত করুন। দুটিই বাহু হলে অতিভুজ দরকার; একটি অতিভুজ হলে অজানা বাহু দরকার। মিলিয়ে সূত্র বা ক্যালকুলেটর মোড বেছে নিন। দুটি মাপ একই এককে লিখুন। হিসাব করুন, তারপর যাচাই করুন: অতিভুজ সবচেয়ে লম্বা হতেই হবে, এবং a² + b² = c²-তে ফিরিয়ে বসালে মিলতে হবে। একক ও পূর্ণসংখ্যায় রূপান্তর দেখুন। এই ধাপগুলো অনুসরণে যেকোনো সমকোণী ত্রিভুজের বাহুর সমস্যা নির্ভরযোগ্যভাবে সমাধান করতে পারবেন। আপনার সংখ্যা হিসাব করতে এই পৃষ্ঠার উপরে ক্যালকুলেটরে ফিরে যান।"
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "সমকোণী ত্রিভুজের অজানা বাহু কীভাবে হিসাব করবেন?",
        "answer": "পিথাগোরাসের উপপাদ্য ব্যবহার করুন: a² + b² = c²। দুটি বাহু জানা থাকলে c = √(a² + b²) হিসাব করুন। অতিভুজ ও একটি বাহু জানা থাকলে অজানা বাহু হিসাব করুন √(c² − জানা বাহু²)। ঠিক দুটি বাহুর দৈর্ঘ্য দরকার; শুধু একটি বাহু বা শুধু কোণ দিয়ে উপপাদ্য কাজ করে না।"
      },
      {
        "question": "দুটি বাহু জানা থাকলে কি অজানা বাহু বের করা যায়?",
        "answer": "হ্যাঁ। দুটি বাহুই যথেষ্ট। জানা দুটি বাহু হলে অতিভুজের সূত্র ব্যবহার করুন। জানা একটি অতিভুজ হলে অজানা-বাহুর সূত্র ব্যবহার করুন। আপনার ইনপুটে অতিভুজ আছে কিনা তার ভিত্তিতে ক্যালকুলেটর নির্ধারণ করে কোন মোড প্রযোজ্য।"
      },
      {
        "question": "অতিভুজ কীভাবে বের করবেন?",
        "answer": "দুটি বাহুর বর্গ করুন, বর্গগুলো যোগ করুন, বর্গমূল নিন। 6 ও 8 বাহুর ক্ষেত্রে: 6² + 8² = 36 + 64 = 100, √100 = 10। অতিভুজ সবসময় সবচেয়ে লম্বা বাহু, তাই আপনার উত্তর দুটি বাহুর চেয়ে বড় কিনা যাচাই করুন।"
      },
      {
        "question": "অজানা বাহু কীভাবে বের করবেন?",
        "answer": "অতিভুজ ও জানা বাহুর বর্গ করুন, অতিভুজের বর্গ থেকে বাহুর বর্গ বিয়োগ করুন, বর্গমূল নিন। অতিভুজ 13 ও বাহু 5 এর ক্ষেত্রে: 169 − 25 = 144, √144 = 12। ফলাফল অতিভুজের চেয়ে ছোট হতেই হবে।"
      },
      {
        "question": "পিথাগোরাসের উপপাদ্যের সূত্র কী?",
        "answer": "সূত্রটি হলো a² + b² = c², যেখানে a ও b হলো দুটি বাহু (সমকোণ তৈরি করা পাশগুলো) এবং c হলো অতিভুজ (সমকোণের বিপরীত বাহু)। প্রতিটি সমকোণী ত্রিভুজে এই সম্পর্ক প্রযোজ্য।"
      },
      {
        "question": "অতিভুজ কি সবসময় সবচেয়ে লম্বা বাহু?",
        "answer": "হ্যাঁ। অতিভুজ শীর্ষবিন্দুগুলোর মধ্যে সবচেয়ে বেশি দূরত্ব অতিক্রম করে, সবচেয়ে বড় কোণের (90 ডিগ্রি) বিপরীতে। যেকোনো ত্রিভুজে সবচেয়ে লম্বা বাহু সবচেয়ে বড় কোণের বিপরীতে থাকে। হিসাব করা অতিভুজ কোনো বাহুর চেয়ে ছোট হলে আপনার ইনপুট আবার দেখুন।"
      },
      {
        "question": "যেকোনো ত্রিভুজে কি পিথাগোরাসের উপপাদ্য ব্যবহার করা যায়?",
        "answer": "না, শুধু সমকোণী ত্রিভুজে। উপপাদ্যটি 90-ডিগ্রি কোণের ওপর নির্ভর করে। সূক্ষ্মকোণী বা স্থূলকোণী ত্রিভুজের জন্য কোসাইন সূত্র ব্যবহার করুন। সমকোণী নয় এমন ত্রিভুজে পিথাগোরাস প্রয়োগে ভুল ফলাফল আসে।"
      },
      {
        "question": "উত্তর দশমিক হলে কী হবে?",
        "answer": "দশমিক স্বাভাবিক; বেশিরভাগ সমকোণী ত্রিভুজের বাহু পূর্ণসংখ্যা হয় না। পূর্ণ নির্ভুলতায় হিসাব করুন, তারপর ইনপুটের নির্ভুলতার সঙ্গে মিলিয়ে চূড়ান্ত উত্তর পূর্ণসংখ্যায় রূপান্তর করুন। উদাহরণস্বরূপ, √42.25 = 6.5 নির্ভুল, কিন্তু √50 ≈ 7.071 এ পূর্ণসংখ্যায় রূপান্তর দরকার।"
      },
      {
        "question": "সমকোণী ত্রিভুজের দুটি বাহু কি সমান হতে পারে?",
        "answer": "হ্যাঁ। এটি 45-45-90 সমদ্বিবাহু সমকোণী ত্রিভুজ, যেখানে বাহু দুটি সমান এবং অতিভুজ = বাহু × √2। 5 বাহুর ক্ষেত্রে অতিভুজ 5√2 ≈ 7.071।"
      },
      {
        "question": "অতিভুজ জানা বাহুর চেয়ে ছোট হলে কী হবে?",
        "answer": "ইনপুটগুলো অবৈধ। অতিভুজ সবচেয়ে লম্বা বাহু হতেই হবে। সম্ভবত আপনি লেবেল অদলবদল করেছেন; সবচেয়ে লম্বা মাপটিকে অতিভুজ (c) ধরুন এবং আবার হিসাব করুন।"
      },
      {
        "question": "একটি কোণ ও একটি বাহু দিয়ে কি অজানা বাহু হিসাব করতে পারি?",
        "answer": "হ্যাঁ, কিন্তু শুধু পিথাগোরাসের উপপাদ্য দিয়ে নয়। ত্রিকোণমিতিক অনুপাত ব্যবহার করুন: সাইন, কোসাইন বা ট্যানজেন্ট জানা বাহু ও কোণকে অজানা বাহুর সঙ্গে যুক্ত করে। এই সাইটে বাহু-থেকে-কোণ সমস্যার জন্য আলাদা ক্যালকুলেটর আছে।"
      },
      {
        "question": "আমার উত্তর সঠিক কিনা কীভাবে যাচাই করব?",
        "answer": "তিনটি বাহুই a² + b² = c²-তে ফিরিয়ে বসান। নিশ্চিত করুন অতিভুজ সবচেয়ে লম্বা। দেখুন সংখ্যাগুলো কোনো পরিচিত পিথাগোরীয় ত্রয়ী তৈরি করে কিনা। অনুমান করুন অতিভুজ লম্বা বাহু ও দুটি বাহুর যোগফলের মাঝে পড়ে।"
      }
    ],
    "relatedHeading": "আরও যেসব সমকোণী ত্রিভুজ ক্যালকুলেটর আপনার কাজে লাগতে পারে",
    "relatedIntro": "অজানা বাহু বের করার পর ত্রিভুজের বিশ্লেষণ সম্পূর্ণ করতে এই সম্পর্কিত ক্যালকুলেটরগুলো ব্যবহার করুন।",
    "relatedItems": [
      "সমকোণী ত্রিভুজ ক্যালকুলেটর",
      "সমকোণী ত্রিভুজের কোণ ক্যালকুলেটর",
      "কোণ ব্যবহার করে সমকোণী ত্রিভুজের বাহুর ক্যালকুলেটর",
      "সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর",
      "সমকোণী ত্রিভুজের পরিসীমা ও অর্ধ-পরিসীমা ক্যালকুলেটর",
      "বিশেষ সমকোণী ত্রিভুজ ক্যালকুলেটর",
      "পিথাগোরীয় ত্রয়ী ক্যালকুলেটর"
    ]
  },
  "ja": {
    "tocHeading": "このガイドの内容",
    "tocItems": {
      "side-intro": "不足している辺の求め方",
      "side-anatomy": "三つの辺の理解",
      "side-pythagoras": "三平方の定理",
      "side-hypotenuse": "斜辺の求め方",
      "side-leg": "不足している脚の求め方",
      "side-howto": "計算機の使い方",
      "side-formulas": "公式一覧",
      "side-applications": "実生活の例",
      "side-triples": "ピタゴラス数",
      "side-units": "単位と精度",
      "side-invalid": "無効な入力",
      "side-verify": "答えの検証",
      "side-mistakes": "よくある間違い",
      "side-beyond": "三平方の定理だけでは足りない場合",
      "side-related": "関連する計算機",
      "side-faq": "よくある質問"
    },
    "sections": {
      "side-intro": {
        "h2": "直角三角形の不足している辺の求め方",
        "h3s": [],
        "paragraphs": [
          "直角三角形の辺計算機は、他の二辺がわかっているときに、直角三角形の未知の辺の長さを求めます。部屋の対角線の測定、支柱の確認、宿題の答え合わせなどによく使われます。この計算機を使うには、辺の長さがちょうど二つ必要です。すべての直角三角形の三辺を関係付ける三平方の定理を適用します。斜辺を求めるには平方根の中で加算を使い、不足している脚を求めるには減算を使います。この方法は直角三角形にのみ有効です。この関係は 90 度の角に依存しているからです。例えば、垂直に交わる辺が 6 cm と 8 cm の直角三角形の斜辺は 10 cm です。この同じ原理で、はしごの長さから画面の対角線まで、実際の距離を測定できます。"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "直角三角形の辺計算機は、他の二辺がわかっているときに、直角三角形の未知の辺の長さを求めます。部屋の対角線の測定、支柱の確認、宿題の答え合わせなどによく使われます。この計算機を使うには、辺の長さがちょうど二つ必要です。すべての直角三角形の三辺を関係付ける三平方の定理を適用します。斜辺を求めるには平方根の中で加算を使い、不足している脚を求めるには減算を使います。この方法は直角三角形にのみ有効です。この関係は 90 度の角に依存しているからです。例えば、垂直に交わる辺が 6 cm と 8 cm の直角三角形の斜辺は 10 cm です。この同じ原理で、はしごの長さから画面の対角線まで、実際の距離を測定できます。"
          }
        ]
      },
      "side-anatomy": {
        "h2": "直角三角形の三つの辺の理解",
        "h3s": [
          "直角三角形とは何ですか",
          "斜辺とは何ですか",
          "二つの脚とは何ですか",
          "正しい辺をどのように見分けますか"
        ],
        "paragraphs": [
          "直角三角形は、ちょうど 90 度の角を一つ含みます。これは正方形や長方形の角と同じです。残りの二つの角は鋭角でなければならず、それぞれ 90 度未満です。三角形の角の合計は 180 度なので、直角でない二つの角の合計は 90 度になります。これは鋭角三角形（すべての角が 90° 未満）や鈍角三角形（一つの角が 90° を超える）とは異なります。直角が、三平方の定理の背景にある垂直関係を生み出します。",
          "斜辺は直角の向かい側にあり、90 度の角から対角に伸びています。斜辺は常に最も長い辺です。任意の二つの頂点の間で最も長い距離を占めるからです。回転した図では、直角マークに触れていない辺が斜辺です。この計算機では、公式 [[a^2 + b^2 = c^2]] で斜辺を表す標準的な慣習に従って、斜辺を c と表記します。",
          "脚は、90 度で交わって直角を形成する二つの辺です。この計算機では a と b で表記します。a² + b² は b² + a² に等しいため、ラベルを入れ替えても斜辺は変わりません。計算機では二つの脚を区別しています。不足する脚のモードが、どちらの脚を求めるべきかを把握できるようにするためです。両方の脚がわかっている場合は、どちらの順番でも斜辺を求められます。",
          "直角マーク（小さな正方形）を見つけます。その向かい側の辺が斜辺で、接している二つの辺が脚です。回転した図の場合は、直角が左下に来て、一方の脚が水平、もう一方が垂直になるまで三角形を回転させた様子を想像します。直角マークがない場合は、この計算機を使う前に、その三角形が直角三角形であることを確認してください。"
        ],
        "blocks": [
          {
            "kind": "h3",
            "text": "直角三角形とは何ですか"
          },
          {
            "kind": "p",
            "text": "直角三角形は、ちょうど 90 度の角を一つ含みます。これは正方形や長方形の角と同じです。残りの二つの角は鋭角でなければならず、それぞれ 90 度未満です。三角形の角の合計は 180 度なので、直角でない二つの角の合計は 90 度になります。これは鋭角三角形（すべての角が 90° 未満）や鈍角三角形（一つの角が 90° を超える）とは異なります。直角が、三平方の定理の背景にある垂直関係を生み出します。"
          },
          {
            "kind": "h3",
            "text": "斜辺とは何ですか"
          },
          {
            "kind": "p",
            "text": "斜辺は直角の向かい側にあり、90 度の角から対角に伸びています。斜辺は常に最も長い辺です。任意の二つの頂点の間で最も長い距離を占めるからです。回転した図では、直角マークに触れていない辺が斜辺です。この計算機では、公式 [[a^2 + b^2 = c^2]] で斜辺を表す標準的な慣習に従って、斜辺を c と表記します。"
          },
          {
            "kind": "h3",
            "text": "二つの脚とは何ですか"
          },
          {
            "kind": "p",
            "text": "脚は、90 度で交わって直角を形成する二つの辺です。この計算機では a と b で表記します。a² + b² は b² + a² に等しいため、ラベルを入れ替えても斜辺は変わりません。計算機では二つの脚を区別しています。不足する脚のモードが、どちらの脚を求めるべきかを把握できるようにするためです。両方の脚がわかっている場合は、どちらの順番でも斜辺を求められます。"
          },
          {
            "kind": "h3",
            "text": "正しい辺をどのように見分けますか"
          },
          {
            "kind": "p",
            "text": "直角マーク（小さな正方形）を見つけます。その向かい側の辺が斜辺で、接している二つの辺が脚です。回転した図の場合は、直角が左下に来て、一方の脚が水平、もう一方が垂直になるまで三角形を回転させた様子を想像します。直角マークがない場合は、この計算機を使う前に、その三角形が直角三角形であることを確認してください。"
          }
        ],
        "imgAlt": "脚 a と b、斜辺 c、頂点 C の直角、鋭角 A と B を示した、ラベル付きの直角三角形",
        "figcaption": "直角三角形の各部: 脚 a と b は頂点 C で直角を形成し、斜辺 c はその向かい側にあり、鋭角 A と B が存在します。"
      },
      "side-pythagoras": {
        "h2": "三平方の定理で三角形の辺を計算する仕組み",
        "h3s": [
          "公式が成り立つ理由"
        ],
        "paragraphs": [
          "三平方の定理は、[[a^2 + b^2 = c^2]] が成り立つと述べています。ここで a と b は脚、c は斜辺です。各変数は辺の長さを表します。2乗とは数をその数自体で掛けることです（6² = 36）。平方根はその逆の操作です（√100 = 10）。この公式は長さそのものではなく、2乗された長さを関係付けるため、平方根を取ります。脚の長さを加える（6 + 8 = 14）のは誤りです。それぞれの2乗を加えて（36 + 64 = 100）、平方根を取ります。この定理には 90 度の角が必要です。直角三角形でない場合は余弦定理が必要です。三つの計算機モードは、すべてこの式を変形したものです: [[c = \\sqrt{a^2 + b^2}]]、[[b = \\sqrt{c^2 - a^2}]]、[[a = \\sqrt{c^2 - b^2}]]。",
          "各辺に正方形を描きます。面積は a²、b²、c² です。この定理は、小さい二つの面積の合計が最大の面積に等しいと述べています。3-4-5 の場合: 9 平方単位と 16 平方単位の正方形の合計が、斜辺の正方形の面積である 25 になります。比較するのは長さではなく面積なので、2乗することが重要です。"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "三平方の定理は、[[a^2 + b^2 = c^2]] が成り立つと述べています。ここで a と b は脚、c は斜辺です。各変数は辺の長さを表します。2乗とは数をその数自体で掛けることです（6² = 36）。平方根はその逆の操作です（√100 = 10）。この公式は長さそのものではなく、2乗された長さを関係付けるため、平方根を取ります。脚の長さを加える（6 + 8 = 14）のは誤りです。それぞれの2乗を加えて（36 + 64 = 100）、平方根を取ります。この定理には 90 度の角が必要です。直角三角形でない場合は余弦定理が必要です。三つの計算機モードは、すべてこの式を変形したものです: [[c = \\sqrt{a^2 + b^2}]]、[[b = \\sqrt{c^2 - a^2}]]、[[a = \\sqrt{c^2 - b^2}]]。"
          },
          {
            "kind": "h3",
            "text": "公式が成り立つ理由"
          },
          {
            "kind": "p",
            "text": "各辺に正方形を描きます。面積は a²、b²、c² です。この定理は、小さい二つの面積の合計が最大の面積に等しいと述べています。3-4-5 の場合: 9 平方単位と 16 平方単位の正方形の合計が、斜辺の正方形の面積である 25 になります。比較するのは長さではなく面積なので、2乗することが重要です。"
          }
        ],
        "imgAlt": "3-4-5 の直角三角形。各辺に描かれた正方形には 9、16、25 平方単位とラベル付けされ、9 + 16 = 25 であることを示しています",
        "figcaption": "視覚的な証明: 脚の上にある 9 平方単位と 16 平方単位の正方形を合わせると、斜辺の上の 25 平方単位の正方形に等しくなります。"
      },
      "side-hypotenuse": {
        "h2": "二つの脚から斜辺を求める方法",
        "h3s": [
          "例1: 6 と 8 の直角三角形の斜辺を求める",
          "例2: 小数の測定値から斜辺を求める",
          "この計算機モードはいつ使うべきですか"
        ],
        "paragraphs": [
          "[[a^2 + b^2 = c^2]] を c について解くと [[c = \\sqrt{a^2 + b^2}]] になります。手順は次の通りです。両方の脚を特定し、それぞれを2乗し、2乗した値を加え、平方根を取り、単位を書き、結果が両方の脚より長いことを確認します。",
          "脚 a = 6 cm、b = 8 cm が与えられた場合: それぞれを2乗し（36 と 64）、加え（100）、平方根を取ります（10）。斜辺は 10 cm で、予想通り両方の脚より長くなります。",
          "a = 2.5 m、b = 6 m が与えられた場合: 2.5² + 6² = 6.25 + 36 = 42.25、√42.25 = 6.5 m です。小数の計算は注意が必要です。最終的な丸めまで完全な精度を保ちます。",
          "二つの脚がわかっている場合は斜辺モードを使います。部屋の対角線、支柱、垂直に交わる辺が与えられる幾何の問題などです。斜辺と一つの脚がわかっている場合は、不足する脚のモードに切り替えます。"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "[[a^2 + b^2 = c^2]] を c について解くと [[c = \\sqrt{a^2 + b^2}]] になります。手順は次の通りです。両方の脚を特定し、それぞれを2乗し、2乗した値を加え、平方根を取り、単位を書き、結果が両方の脚より長いことを確認します。"
          },
          {
            "kind": "h3",
            "text": "例1: 6 と 8 の直角三角形の斜辺を求める"
          },
          {
            "kind": "p",
            "text": "脚 a = 6 cm、b = 8 cm が与えられた場合: それぞれを2乗し（36 と 64）、加え（100）、平方根を取ります（10）。斜辺は 10 cm で、予想通り両方の脚より長くなります。"
          },
          {
            "kind": "h3",
            "text": "例2: 小数の測定値から斜辺を求める"
          },
          {
            "kind": "p",
            "text": "a = 2.5 m、b = 6 m が与えられた場合: 2.5² + 6² = 6.25 + 36 = 42.25、√42.25 = 6.5 m です。小数の計算は注意が必要です。最終的な丸めまで完全な精度を保ちます。"
          },
          {
            "kind": "h3",
            "text": "この計算機モードはいつ使うべきですか"
          },
          {
            "kind": "p",
            "text": "二つの脚がわかっている場合は斜辺モードを使います。部屋の対角線、支柱、垂直に交わる辺が与えられる幾何の問題などです。斜辺と一つの脚がわかっている場合は、不足する脚のモードに切り替えます。"
          }
        ]
      },
      "side-leg": {
        "h2": "直角三角形の不足している脚の求め方",
        "h3s": [
          "斜辺 c と脚 a がわかっているときに脚 b を求める",
          "例3: 13 cm の斜辺から脚 b を求める",
          "斜辺 c と脚 b がわかっているときに脚 a を求める",
          "例4: 未知の脚を求める"
        ],
        "paragraphs": [
          "斜辺と一つの脚がわかっている場合は、三平方の定理を変形して未知の脚を分離します。[[a^2 + b^2 = c^2]] から始めて、既知の脚の2乗を両辺から引きます。これにより、各脚に対する二つの公式が得られます。",
          "公式は [[b = \\sqrt{c^2 - a^2}]] です。導出は次の通りです。[[a^2 + b^2 = c^2]] から始めて、両辺から a² を引くと [[b^2 = c^2 - a^2]] になり、平方根を取ります。引き算を使うのは、斜辺の2乗が両方の脚の2乗を含んでいるため、一方を取り除くと他方が残るからです。",
          "c = 13 cm、a = 5 cm が与えられた場合、脚 b を求めます。両方を2乗します: 13² = 169、5² = 25。引きます: 169 − 25 = 144。平方根を取ります: √144 = 12。脚 b は 12 cm です。検証: 5² + 12² = 25 + 144 = 169 = 13²。ピタゴラス数 5-12-13 が結果を裏付けます。",
          "公式は [[a = \\sqrt{c^2 - b^2}]] です。三平方の関係において二つの脚は入れ替え可能です。一方を a、他方を b とするのは慣習です。計算機では両方のモードを用意しています。変数を頭の中で入れ替えることなく、入力欄のラベルを自分の問題に合わせられるようにするためです。",
          "c = 17 インチ、b = 15 インチが与えられた場合、脚 a を求めます。2乗します: 17² = 289、15² = 225。引きます: 289 − 225 = 64。平方根を取ります: √64 = 8。脚 a は 8 インチです。これは 8-15-17 のピタゴラス数です。二つの不足する脚のモードは、どちらの脚がわかっているかが違うだけです。数学的な内容は同じです。"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "斜辺と一つの脚がわかっている場合は、三平方の定理を変形して未知の脚を分離します。[[a^2 + b^2 = c^2]] から始めて、既知の脚の2乗を両辺から引きます。これにより、各脚に対する二つの公式が得られます。"
          },
          {
            "kind": "h3",
            "text": "斜辺 c と脚 a がわかっているときに脚 b を求める"
          },
          {
            "kind": "p",
            "text": "公式は [[b = \\sqrt{c^2 - a^2}]] です。導出は次の通りです。[[a^2 + b^2 = c^2]] から始めて、両辺から a² を引くと [[b^2 = c^2 - a^2]] になり、平方根を取ります。引き算を使うのは、斜辺の2乗が両方の脚の2乗を含んでいるため、一方を取り除くと他方が残るからです。"
          },
          {
            "kind": "h3",
            "text": "例3: 13 cm の斜辺から脚 b を求める"
          },
          {
            "kind": "p",
            "text": "c = 13 cm、a = 5 cm が与えられた場合、脚 b を求めます。両方を2乗します: 13² = 169、5² = 25。引きます: 169 − 25 = 144。平方根を取ります: √144 = 12。脚 b は 12 cm です。検証: 5² + 12² = 25 + 144 = 169 = 13²。ピタゴラス数 5-12-13 が結果を裏付けます。"
          },
          {
            "kind": "h3",
            "text": "斜辺 c と脚 b がわかっているときに脚 a を求める"
          },
          {
            "kind": "p",
            "text": "公式は [[a = \\sqrt{c^2 - b^2}]] です。三平方の関係において二つの脚は入れ替え可能です。一方を a、他方を b とするのは慣習です。計算機では両方のモードを用意しています。変数を頭の中で入れ替えることなく、入力欄のラベルを自分の問題に合わせられるようにするためです。"
          },
          {
            "kind": "h3",
            "text": "例4: 未知の脚を求める"
          },
          {
            "kind": "p",
            "text": "c = 17 インチ、b = 15 インチが与えられた場合、脚 a を求めます。2乗します: 17² = 289、15² = 225。引きます: 289 − 225 = 64。平方根を取ります: √64 = 8。脚 a は 8 インチです。これは 8-15-17 のピタゴラス数です。二つの不足する脚のモードは、どちらの脚がわかっているかが違うだけです。数学的な内容は同じです。"
          }
        ],
        "imgAlt": "三平方の定理を使って不足する脚を求める二つの直角三角形を示した分割図",
        "figcaption": "二つの不足する脚の計算: 5-12-13 の三角形から b を求める場合と、8-15-17 の三角形から a を求める場合。",
        "table": {
          "headers": [
            "既知の値",
            "求める辺",
            "公式",
            "計算機モード"
          ],
          "rows": [
            [
              "c = 13, a = 5",
              "b",
              "b = √(c² − a²)",
              "c と a から不足する脚"
            ],
            [
              "c = 17, b = 15",
              "a",
              "a = √(c² − b²)",
              "c と b から不足する脚"
            ]
          ]
        }
      },
      "side-howto": {
        "h2": "直角三角形の辺計算機の使い方",
        "h3s": [],
        "paragraphs": [
          "この計算機は結果を保存したり、ダウンロード可能なレポートを生成したりしません。新しい計算のために入力欄を消去するには、リセット機能を使ってください。"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "この計算機は結果を保存したり、ダウンロード可能なレポートを生成したりしません。新しい計算のために入力欄を消去するには、リセット機能を使ってください。"
          }
        ],
        "list": [
          "<strong>わかっている2つの測定値を特定します。</strong>どちらも角度ではなく、辺の長さでなければなりません。",
          "<strong>不足している値が斜辺か脚かを判断します。</strong>両方の脚がわかっている場合は斜辺を求めます。斜辺と一つの脚がわかっている場合は、もう一方の脚を求めます。",
          "<strong>正しいモードを選択します。</strong>既知の二辺が両方とも脚の場合は「三平方の定理」、斜辺と脚 a がわかっている場合は「c と a から不足する脚」、斜辺と脚 b がわかっている場合は「c と b から不足する脚」を選択します。",
          "<strong>二つの測定値を対応する入力欄に入力します。</strong>各値が正しい欄に入っていることを再確認します。斜辺と脚を入れ替えるとエラーになります。",
          "<strong>測定単位を選択します。</strong>二つの入力には同じ単位を使います。",
          "<strong>計算します。</strong>結果が、代入と計算過程の手順とともに表示されます。",
          "<strong>結果と手順を確認します。</strong>公式が自分の状況に合っていること、計算が正しいことを確認します。",
          "<strong>答えが妥当か確認します。</strong>斜辺は両方の脚より長くなければなりません。不足していた脚は斜辺より短くなければなりません。これらに当てはまらない場合は、入力を確認し直してください。"
        ]
      },
      "side-formulas": {
        "h2": "直角三角形の辺の公式一覧",
        "h3s": [],
        "paragraphs": [
          "三つの公式を別々に覚える必要はありません。[[a^2 + b^2 = c^2]] だけ覚えて、未知の辺について解けばよいのです。c が未知の場合は脚の2乗を加えて平方根を取り、脚が未知の場合は c² から既知の脚の2乗を引いて平方根を取ります。計算機のモード名が、どの形を使うべきかを示しています。"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "三つの公式を別々に覚える必要はありません。[[a^2 + b^2 = c^2]] だけ覚えて、未知の辺について解けばよいのです。c が未知の場合は脚の2乗を加えて平方根を取り、脚が未知の場合は c² から既知の脚の2乗を引いて平方根を取ります。計算機のモード名が、どの形を使うべきかを示しています。"
          }
        ],
        "table": {
          "headers": [
            "既知の測定値",
            "求める辺",
            "公式",
            "計算機モード",
            "例"
          ],
          "rows": [
            [
              "脚 a と b",
              "斜辺 c",
              "c = √(a² + b²)",
              "三平方の定理",
              "a=6, b=8 → c=10"
            ],
            [
              "斜辺 c、脚 a",
              "脚 b",
              "b = √(c² − a²)",
              "c と a から不足する脚",
              "c=13, a=5 → b=12"
            ],
            [
              "斜辺 c、脚 b",
              "脚 a",
              "a = √(c² − b²)",
              "c と b から不足する脚",
              "c=17, b=15 → a=8"
            ]
          ]
        }
      },
      "side-applications": {
        "h2": "直角三角形の辺の計算の実生活の例",
        "h3s": [
          "例5: 壁に立てかけたはしご",
          "例6: 長方形の部屋の対角線",
          "例7: 屋根の垂木の長さ",
          "例8: テレビやモニターの対角線",
          "例9: スロープの測定",
          "例10: 長方形の庭の小道",
          "例11: 対角線がわかっている支柱",
          "例12: 小数を含む設計図面"
        ],
        "paragraphs": [
          "はしごが壁に沿って垂直に 2.4 m まで届き、はしごの根元は壁から 1.8 m 離れています。壁と地面は直角をなし、はしごが斜辺となる直角三角形ができます。既知の値: a = 1.8 m（根元の距離）、b = 2.4 m（高さ）。求める値: c（はしごの長さ）。公式: [[c = \\sqrt{a^2 + b^2}]]。代入します: c = √(1.8² + 2.4²) = √(3.24 + 5.76) = √9 = 3。はしごの長さは 3 m です。これで、その距離からその高さに届くのに必要なはしごの長さがわかります。注意: この幾何学的な計算ははしごの安全性を評価するものではありません。実際の使用では、メーカーの指針と安全規則に従ってください。",
          "部屋の大きさは縦 9 ft、横 12 ft です。向かい合う角の間の対角線は、壁を脚とする直角三角形の斜辺になります。既知の値: a = 9 ft、b = 12 ft。求める値: c。公式: c = √(9² + 12²) = √(81 + 144) = √225 = 15。対角線は 15 ft です。これは、部屋が正方形かどうかを確認するとき（二つの対角線が一致すべきです）や、家具配置のための最も長い直線距離を決めるときに役立ちます。",
          "簡略化した屋根の断面は、水平方向の長さが 12 ft、垂直方向の高さが 5 ft です。垂木は斜辺になります。既知の値: 水平距離 = 12 ft、高さ = 5 ft。求める値: 垂木の長さ。公式: c = √(12² + 5²) = √(144 + 25) = √169 = 13。垂木は 13 ft です。この基本的な計算では、実際の建築に必要な軒の出、棟木の厚み、接合部の余裕は含まれていません。完全な仕様は建築図面で確認してください。",
          "長方形のディスプレイは幅 16 インチ、高さ 9 インチです。対角線が斜辺になります。既知の値: 幅 = 16 in、高さ = 9 in。求める値: 対角線。公式: d = √(16² + 9²) = √(256 + 81) = √337 ≈ 18.36。対角線は約 18.36 インチです。これは記載された寸法に基づいています。市販の画面サイズは、メーカーの測定方法によって異なる場合があります。",
          "スロープの水平距離は 6 m、高さは 0.75 m です。傾斜面が斜辺になります。既知の値: 水平距離 = 6 m、高さ = 0.75 m。求める値: 傾斜面の長さ。公式: s = √(6² + 0.75²) = √(36 + 0.5625) = √36.5625 ≈ 6.05。傾斜面の長さは約 6.05 m です。水平距離（6 m）と傾斜面の長さ（6.05 m）は異なります。傾斜面は常に少し長くなります。これはバリアフリー基準への適合を検証するものではありません。スロープの要件は地域の建築基準で確認してください。",
          "長方形の庭は幅 30 ft、奥行き 40 ft です。対角線上の小道が横切っています。既知の値: a = 30 ft、b = 40 ft。求める値: 小道の長さ。公式: c = √(30² + 40²) = √(900 + 1600) = √2500 = 50。小道は 50 ft です。対角線を歩く（50 ft）ほうが、二辺に沿って歩く（70 ft）より短くなります。対角線の小道が時間を節約できるのはそのためです。",
          "支柱の長さは 10 ft（斜辺）で、水平方向に 8 ft 張っています。垂直方向の距離を求めます。既知の値: c = 10 ft、a = 8 ft。求める値: b。公式: b = √(c² − a²) = √(100 − 64) = √36 = 6。垂直方向の距離は 6 ft です。引き算が必要なのは、斜辺の2乗が両方の脚の2乗を含んでいるため、既知の水平成分を取り除くと垂直成分が残るからです。",
          "金具の設計では、斜辺 250 mm、一つの脚 70 mm が指定されています。もう一方の脚を求めます。既知の値: c = 250 mm、b = 70 mm。求める値: a。公式: a = √(c² − b²) = √(62500 − 4900) = √57600 = 240。脚は 240 mm です。ミリメートル単位の入力では、ここでの結果は正確ですが、実際には最も精度の低い測定値に合わせて丸めます。測定器具で測れる精度を超える小数点以下の桁数を報告しないでください。"
        ],
        "blocks": [
          {
            "kind": "h3",
            "text": "例5: 壁に立てかけたはしご"
          },
          {
            "kind": "p",
            "text": "はしごが壁に沿って垂直に 2.4 m まで届き、はしごの根元は壁から 1.8 m 離れています。壁と地面は直角をなし、はしごが斜辺となる直角三角形ができます。既知の値: a = 1.8 m（根元の距離）、b = 2.4 m（高さ）。求める値: c（はしごの長さ）。公式: [[c = \\sqrt{a^2 + b^2}]]。代入します: c = √(1.8² + 2.4²) = √(3.24 + 5.76) = √9 = 3。はしごの長さは 3 m です。これで、その距離からその高さに届くのに必要なはしごの長さがわかります。注意: この幾何学的な計算ははしごの安全性を評価するものではありません。実際の使用では、メーカーの指針と安全規則に従ってください。"
          },
          {
            "kind": "h3",
            "text": "例6: 長方形の部屋の対角線"
          },
          {
            "kind": "p",
            "text": "部屋の大きさは縦 9 ft、横 12 ft です。向かい合う角の間の対角線は、壁を脚とする直角三角形の斜辺になります。既知の値: a = 9 ft、b = 12 ft。求める値: c。公式: c = √(9² + 12²) = √(81 + 144) = √225 = 15。対角線は 15 ft です。これは、部屋が正方形かどうかを確認するとき（二つの対角線が一致すべきです）や、家具配置のための最も長い直線距離を決めるときに役立ちます。"
          },
          {
            "kind": "h3",
            "text": "例7: 屋根の垂木の長さ"
          },
          {
            "kind": "p",
            "text": "簡略化した屋根の断面は、水平方向の長さが 12 ft、垂直方向の高さが 5 ft です。垂木は斜辺になります。既知の値: 水平距離 = 12 ft、高さ = 5 ft。求める値: 垂木の長さ。公式: c = √(12² + 5²) = √(144 + 25) = √169 = 13。垂木は 13 ft です。この基本的な計算では、実際の建築に必要な軒の出、棟木の厚み、接合部の余裕は含まれていません。完全な仕様は建築図面で確認してください。"
          },
          {
            "kind": "h3",
            "text": "例8: テレビやモニターの対角線"
          },
          {
            "kind": "p",
            "text": "長方形のディスプレイは幅 16 インチ、高さ 9 インチです。対角線が斜辺になります。既知の値: 幅 = 16 in、高さ = 9 in。求める値: 対角線。公式: d = √(16² + 9²) = √(256 + 81) = √337 ≈ 18.36。対角線は約 18.36 インチです。これは記載された寸法に基づいています。市販の画面サイズは、メーカーの測定方法によって異なる場合があります。"
          },
          {
            "kind": "h3",
            "text": "例9: スロープの測定"
          },
          {
            "kind": "p",
            "text": "スロープの水平距離は 6 m、高さは 0.75 m です。傾斜面が斜辺になります。既知の値: 水平距離 = 6 m、高さ = 0.75 m。求める値: 傾斜面の長さ。公式: s = √(6² + 0.75²) = √(36 + 0.5625) = √36.5625 ≈ 6.05。傾斜面の長さは約 6.05 m です。水平距離（6 m）と傾斜面の長さ（6.05 m）は異なります。傾斜面は常に少し長くなります。これはバリアフリー基準への適合を検証するものではありません。スロープの要件は地域の建築基準で確認してください。"
          },
          {
            "kind": "h3",
            "text": "例10: 長方形の庭の小道"
          },
          {
            "kind": "p",
            "text": "長方形の庭は幅 30 ft、奥行き 40 ft です。対角線上の小道が横切っています。既知の値: a = 30 ft、b = 40 ft。求める値: 小道の長さ。公式: c = √(30² + 40²) = √(900 + 1600) = √2500 = 50。小道は 50 ft です。対角線を歩く（50 ft）ほうが、二辺に沿って歩く（70 ft）より短くなります。対角線の小道が時間を節約できるのはそのためです。"
          },
          {
            "kind": "h3",
            "text": "例11: 対角線がわかっている支柱"
          },
          {
            "kind": "p",
            "text": "支柱の長さは 10 ft（斜辺）で、水平方向に 8 ft 張っています。垂直方向の距離を求めます。既知の値: c = 10 ft、a = 8 ft。求める値: b。公式: b = √(c² − a²) = √(100 − 64) = √36 = 6。垂直方向の距離は 6 ft です。引き算が必要なのは、斜辺の2乗が両方の脚の2乗を含んでいるため、既知の水平成分を取り除くと垂直成分が残るからです。"
          },
          {
            "kind": "h3",
            "text": "例12: 小数を含む設計図面"
          },
          {
            "kind": "p",
            "text": "金具の設計では、斜辺 250 mm、一つの脚 70 mm が指定されています。もう一方の脚を求めます。既知の値: c = 250 mm、b = 70 mm。求める値: a。公式: a = √(c² − b²) = √(62500 − 4900) = √57600 = 240。脚は 240 mm です。ミリメートル単位の入力では、ここでの結果は正確ですが、実際には最も精度の低い測定値に合わせて丸めます。測定器具で測れる精度を超える小数点以下の桁数を報告しないでください。"
          }
        ],
        "imgAlt": "壁に立てかけたはしご、部屋の対角線、屋根の垂木、庭の小道を、それぞれ直角三角形の測定値とともに示した四つのパネル",
        "figcaption": "身の回りの直角三角形: はしご (3 m)、部屋の対角線 (15 ft)、屋根の垂木 (13 ft)、庭の小道 (50 ft)。"
      },
      "side-triples": {
        "h2": "代表的なピタゴラス数とその重要性",
        "h3s": [],
        "paragraphs": [
          "ピタゴラス数は、[[a^2 + b^2 = c^2]] を満たす三つの整数の組です。ピタゴラス数を使うと素早く暗算で確認できます。入力がピタゴラス数に当てはまれば、計算しなくても答えがわかります。拡大したピタゴラス数も有効です: 3-4-5 に 2 を掛けると 6-8-10 になり、依然として式を満たします（36 + 64 = 100）。すべての直角三角形の辺が整数になるわけではありません。ほとんどは小数や無理数になります。",
          "5-12-13 の検証: 5² = 25、12² = 144、25 + 144 = 169、√169 = 13。8-15-17 の検証: 8² = 64、15² = 225、64 + 225 = 289、√289 = 17。計算機が整数を返したら、入力と合わせてピタゴラス数になっているか、妥当性確認として調べてみます。"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "ピタゴラス数は、[[a^2 + b^2 = c^2]] を満たす三つの整数の組です。ピタゴラス数を使うと素早く暗算で確認できます。入力がピタゴラス数に当てはまれば、計算しなくても答えがわかります。拡大したピタゴラス数も有効です: 3-4-5 に 2 を掛けると 6-8-10 になり、依然として式を満たします（36 + 64 = 100）。すべての直角三角形の辺が整数になるわけではありません。ほとんどは小数や無理数になります。"
          },
          {
            "kind": "p",
            "text": "5-12-13 の検証: 5² = 25、12² = 144、25 + 144 = 169、√169 = 13。8-15-17 の検証: 8² = 64、15² = 225、64 + 225 = 289、√289 = 17。計算機が整数を返したら、入力と合わせてピタゴラス数になっているか、妥当性確認として調べてみます。"
          }
        ],
        "table": {
          "headers": [
            "ピタゴラス数",
            "検証"
          ],
          "rows": [
            [
              "3-4-5",
              "9 + 16 = 25 ✓"
            ],
            [
              "5-12-13",
              "25 + 144 = 169 ✓"
            ],
            [
              "8-15-17",
              "64 + 225 = 289 ✓"
            ],
            [
              "7-24-25",
              "49 + 576 = 625 ✓"
            ],
            [
              "9-40-41",
              "81 + 1600 = 1681 ✓"
            ],
            [
              "6-8-10",
              "36 + 64 = 100 ✓ (scaled 3-4-5)"
            ]
          ]
        }
      },
      "side-units": {
        "h2": "測定単位、小数の答え、丸め",
        "h3s": [],
        "paragraphs": [
          "単位を統一します: ミリメートル、センチメートル、メートル、インチ、フィート、ヤード、キロメートルのいずれかです。単位が混在すると誤った答えになります。3 フィートと 6 インチは、計算前に 3.5 フィートまたは 42 インチに直さなければなりません。先に換算し、それから計算します。二つの入力には、計算機で同じ単位を選択します。丸めるのは最終的な計算の後だけです。途中の手順で丸めると誤差が積み重なります。10 cm のような正確な答えは、6.50 m のような丸めた小数とは意味が異なります。後者は測定精度を暗示します。結果は、最も精度の低い入力よりも正確にはなり得ません。センチメートル単位で測定したなら、ミリメートルを報告しないでください。",
          "フィートとインチの例: 板の大きさは 2 フィート 6 インチ × 3 フィートです。インチに換算します: 30 in と 36 in。計算します: c = √(30² + 36²) = √(900 + 1296) = √2196 ≈ 46.86 in。戻して換算します: 46.86 in = 3 ft 10.86 in、つまり約 3 ft 10.9 in です。",
          "注意: 長さを2乗すると平方単位（cm²）になりますが、最後に平方根を取ると長さの単位（cm）に戻ります。計算機はこれを自動的に処理します。"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "単位を統一します: ミリメートル、センチメートル、メートル、インチ、フィート、ヤード、キロメートルのいずれかです。単位が混在すると誤った答えになります。3 フィートと 6 インチは、計算前に 3.5 フィートまたは 42 インチに直さなければなりません。先に換算し、それから計算します。二つの入力には、計算機で同じ単位を選択します。丸めるのは最終的な計算の後だけです。途中の手順で丸めると誤差が積み重なります。10 cm のような正確な答えは、6.50 m のような丸めた小数とは意味が異なります。後者は測定精度を暗示します。結果は、最も精度の低い入力よりも正確にはなり得ません。センチメートル単位で測定したなら、ミリメートルを報告しないでください。"
          },
          {
            "kind": "p",
            "text": "フィートとインチの例: 板の大きさは 2 フィート 6 インチ × 3 フィートです。インチに換算します: 30 in と 36 in。計算します: c = √(30² + 36²) = √(900 + 1296) = √2196 ≈ 46.86 in。戻して換算します: 46.86 in = 3 ft 10.86 in、つまり約 3 ft 10.9 in です。"
          },
          {
            "kind": "p",
            "text": "注意: 長さを2乗すると平方単位（cm²）になりますが、最後に平方根を取ると長さの単位（cm）に戻ります。計算機はこれを自動的に処理します。"
          }
        ]
      },
      "side-invalid": {
        "h2": "三角形の測定値によっては有効な答えが得られない理由",
        "h3s": [],
        "paragraphs": [
          "有効な直角三角形には三つの正の辺の長さが必要で、斜辺は各脚より長くなければなりません。不足する脚の計算では、平方根の中の値（c² − 脚²）が正でなければなりません。",
          "<strong>無効:</strong> c = 8、a = 10。斜辺（8）が脚（10）より短いです。これは「斜辺が最も長い」という規則に反します。ラベルを取り違えている可能性が高いです。10 のほうが斜辺になるべきです。",
          "<strong>無効:</strong> c = 5、a = 5。この場合 b = √(25 − 25) = √0 = 0 となります。長さゼロの辺があると、三角形は線分につぶれてしまい、有効な三角形になりません。",
          "<strong>無効:</strong> a = −3、b = 4。負の長さには幾何学的な意味がありません。辺の長さは正でなければなりません。"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "有効な直角三角形には三つの正の辺の長さが必要で、斜辺は各脚より長くなければなりません。不足する脚の計算では、平方根の中の値（c² − 脚²）が正でなければなりません。"
          },
          {
            "kind": "p",
            "text": "<strong>無効:</strong> c = 8、a = 10。斜辺（8）が脚（10）より短いです。これは「斜辺が最も長い」という規則に反します。ラベルを取り違えている可能性が高いです。10 のほうが斜辺になるべきです。"
          },
          {
            "kind": "p",
            "text": "<strong>無効:</strong> c = 5、a = 5。この場合 b = √(25 − 25) = √0 = 0 となります。長さゼロの辺があると、三角形は線分につぶれてしまい、有効な三角形になりません。"
          },
          {
            "kind": "p",
            "text": "<strong>無効:</strong> a = −3、b = 4。負の長さには幾何学的な意味がありません。辺の長さは正でなければなりません。"
          }
        ],
        "table": {
          "headers": [
            "問題",
            "原因",
            "対処法"
          ],
          "rows": [
            [
              "斜辺が脚より短い",
              "ラベルを取り違え",
              "最も長い辺を c に割り当てる"
            ],
            [
              "平方根の中がゼロ",
              "c が既知の脚と等しい",
              "測定値を確認します（退化三角形です）"
            ],
            [
              "平方根の中が負",
              "c が既知の脚より短い",
              "その入力では直角三角形を作れません"
            ],
            [
              "負の入力",
              "入力ミスまたは符号の間違い",
              "正の長さのみを使用します"
            ],
            [
              "ゼロの入力",
              "測定値の欠落",
              "実際の長さを入力します"
            ],
            [
              "単位の混在",
              "フィートとインチの混在",
              "先に一つの単位に換算します"
            ],
            [
              "直角三角形でない",
              "90° の角がない",
              "代わりに余弦定理を使います"
            ]
          ]
        }
      },
      "side-verify": {
        "h2": "計算した辺が正しいかどうかを確認する方法",
        "h3s": [],
        "paragraphs": [
          "<strong>方法1: 代入して確かめます。</strong>三つの辺をすべて [[a^2 + b^2 = c^2]] に代入します。6-8-10 の三角形の場合: 36 + 64 = 100。両辺が一致すれば、答えは正しいです。",
          "<strong>方法2: 斜辺が最も長いことを確認します。</strong>c を求めた場合は、a と b の両方より長いことを確認します。脚を求めた場合は、c より短いことを確認します。",
          "<strong>方法3: ピタゴラス数と照合します。</strong>入力が整数の場合は、既知のピタゴラス数になっているか調べます。9 と 12 から 15 が得られるのは、拡大した 3-4-5 のピタゴラス数に当てはまります。",
          "<strong>方法4: 妥当性を概算します。</strong>斜辺はどちらの脚よりも長く、二辺の合計よりは短くなるはずです。脚が 6 と 8 の場合、斜辺 10 は 8 &lt; 10 &lt; 14 を満たします。",
          "<strong>方法5: 単位と丸めを確認します。</strong>単位が入力と一致していること、小数点以下の桁数が測定精度を反映していることを確認します。",
          "<strong>検証例1:</strong> a = 5、b = 12 から c = 13 を計算しました。確認: 5² + 12² = 25 + 144 = 169 = 13²。斜辺 13 は両方の脚より長いです。これは 5-12-13 のピタゴラス数に当てはまります。有効です。",
          "<strong>検証例2:</strong> c = 12.5、a = 10 から b = 7.5 を計算しました。確認: 10² + 7.5² = 100 + 56.25 = 156.25 = 12.5²。脚 7.5 は斜辺 12.5 より短いです。概算: 10 &lt; 12.5 &lt; 20。有効です。"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "<strong>方法1: 代入して確かめます。</strong>三つの辺をすべて [[a^2 + b^2 = c^2]] に代入します。6-8-10 の三角形の場合: 36 + 64 = 100。両辺が一致すれば、答えは正しいです。"
          },
          {
            "kind": "p",
            "text": "<strong>方法2: 斜辺が最も長いことを確認します。</strong>c を求めた場合は、a と b の両方より長いことを確認します。脚を求めた場合は、c より短いことを確認します。"
          },
          {
            "kind": "p",
            "text": "<strong>方法3: ピタゴラス数と照合します。</strong>入力が整数の場合は、既知のピタゴラス数になっているか調べます。9 と 12 から 15 が得られるのは、拡大した 3-4-5 のピタゴラス数に当てはまります。"
          },
          {
            "kind": "p",
            "text": "<strong>方法4: 妥当性を概算します。</strong>斜辺はどちらの脚よりも長く、二辺の合計よりは短くなるはずです。脚が 6 と 8 の場合、斜辺 10 は 8 &lt; 10 &lt; 14 を満たします。"
          },
          {
            "kind": "p",
            "text": "<strong>方法5: 単位と丸めを確認します。</strong>単位が入力と一致していること、小数点以下の桁数が測定精度を反映していることを確認します。"
          },
          {
            "kind": "p",
            "text": "<strong>検証例1:</strong> a = 5、b = 12 から c = 13 を計算しました。確認: 5² + 12² = 25 + 144 = 169 = 13²。斜辺 13 は両方の脚より長いです。これは 5-12-13 のピタゴラス数に当てはまります。有効です。"
          },
          {
            "kind": "p",
            "text": "<strong>検証例2:</strong> c = 12.5、a = 10 から b = 7.5 を計算しました。確認: 10² + 7.5² = 100 + 56.25 = 156.25 = 12.5²。脚 7.5 は斜辺 12.5 より短いです。概算: 10 &lt; 12.5 &lt; 20。有効です。"
          }
        ]
      },
      "side-mistakes": {
        "h2": "直角三角形の辺を計算するときによくある間違い",
        "h3s": [],
        "paragraphs": [
          "<strong>1. 2乗した値ではなく脚そのものを加えてしまう。</strong> √(36 + 64) = 10 ではなく、6 + 8 = 14 と計算してしまう。この定理が加えるのは2乗された面積であり、長さではありません。必ず先に2乗します。",
          "<strong>2. 平方根を取り忘れる。</strong>6 と 8 の三角形で 10 ではなく 100 と答えてしまう。公式が与えるのは c² で、必要なのは c です。最後の手順で平方根を取ります。",
          "<strong>3. 斜辺を求めるときに引き算を使ってしまう。</strong> √(64 + 36) = 10 ではなく、√(64 − 36) = √28 としてしまう。二つの脚から斜辺を求めるときは加算を使います。",
          "<strong>4. 不足している脚を求めるときに加算を使ってしまう。</strong> √(169 − 25) = 12 ではなく、√(169 + 25) としてしまう。斜辺がわかっているときは減算を使います。",
          "<strong>5. 脚を斜辺と間違える。</strong>最も長い辺を a や b としてしまう。斜辺は常に直角の向かい側にあり、常に c と表記します。",
          "<strong>6. 直角三角形でない三角形に定理を適用する。</strong>90 度の角がないのに a² + b² = c² を使ってしまう。先に直角を確認します。",
          "<strong>7. 途中の計算で丸める。</strong>計算の途中で 6.25 を 6.3 に丸めてしまい、最終的な答えがわずかにずれる。最後まで完全な精度を保ちます。",
          "<strong>8. 測定単位を混在させる。</strong>3 フィートと 6 インチを 3 と 6 として入力してしまう。計算前に一つの単位に換算します。",
          "<strong>9. 値を間違った入力欄に入れる。</strong>斜辺を脚の入力欄に入れてしまう。各測定値を正しいラベルに合わせます。",
          "<strong>10. 平方根の中の負の値を誤って解釈する。</strong>√(25 − 36) を見て無理に計算してしまう。被開平数が負の場合は、その入力では直角三角形を作れないという意味です。ラベルを確認します。"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "<strong>1. 2乗した値ではなく脚そのものを加えてしまう。</strong> √(36 + 64) = 10 ではなく、6 + 8 = 14 と計算してしまう。この定理が加えるのは2乗された面積であり、長さではありません。必ず先に2乗します。"
          },
          {
            "kind": "p",
            "text": "<strong>2. 平方根を取り忘れる。</strong>6 と 8 の三角形で 10 ではなく 100 と答えてしまう。公式が与えるのは c² で、必要なのは c です。最後の手順で平方根を取ります。"
          },
          {
            "kind": "p",
            "text": "<strong>3. 斜辺を求めるときに引き算を使ってしまう。</strong> √(64 + 36) = 10 ではなく、√(64 − 36) = √28 としてしまう。二つの脚から斜辺を求めるときは加算を使います。"
          },
          {
            "kind": "p",
            "text": "<strong>4. 不足している脚を求めるときに加算を使ってしまう。</strong> √(169 − 25) = 12 ではなく、√(169 + 25) としてしまう。斜辺がわかっているときは減算を使います。"
          },
          {
            "kind": "p",
            "text": "<strong>5. 脚を斜辺と間違える。</strong>最も長い辺を a や b としてしまう。斜辺は常に直角の向かい側にあり、常に c と表記します。"
          },
          {
            "kind": "p",
            "text": "<strong>6. 直角三角形でない三角形に定理を適用する。</strong>90 度の角がないのに a² + b² = c² を使ってしまう。先に直角を確認します。"
          },
          {
            "kind": "p",
            "text": "<strong>7. 途中の計算で丸める。</strong>計算の途中で 6.25 を 6.3 に丸めてしまい、最終的な答えがわずかにずれる。最後まで完全な精度を保ちます。"
          },
          {
            "kind": "p",
            "text": "<strong>8. 測定単位を混在させる。</strong>3 フィートと 6 インチを 3 と 6 として入力してしまう。計算前に一つの単位に換算します。"
          },
          {
            "kind": "p",
            "text": "<strong>9. 値を間違った入力欄に入れる。</strong>斜辺を脚の入力欄に入れてしまう。各測定値を正しいラベルに合わせます。"
          },
          {
            "kind": "p",
            "text": "<strong>10. 平方根の中の負の値を誤って解釈する。</strong>√(25 − 36) を見て無理に計算してしまう。被開平数が負の場合は、その入力では直角三角形を作れないという意味です。ラベルを確認します。"
          }
        ]
      },
      "side-beyond": {
        "h2": "別の直角三角形の公式が必要になるのはどんなとき？",
        "h3s": [],
        "paragraphs": [
          "三平方の定理には二つの既知の辺が必要です。情報が異なれば、異なる道具が必要です。",
          "<strong>一辺と一つの鋭角がわかっている場合:</strong> サイン、コサイン、タンジェントを使います。サインは（向かい側の辺）/（斜辺）、コサインは（隣接する辺）/（斜辺）、タンジェントは（向かい側の辺）/（隣接する辺）を関係付けます。例えば、斜辺 c と角 A がわかっている場合、脚 a = c × sin(A) です。",
          "<strong>二つの角のみで辺がない場合:</strong> 不可能です。角度は形を決めますが大きさは決めません。3-4-5 の三角形と 6-8-10 の三角形は角度が同じですが大きさが異なります。少なくとも一つの辺の長さが必要です。",
          "<strong>直角三角形でない場合:</strong> 余弦定理（c² = a² + b² − 2ab×cos(C)）または正弦定理を使います。三平方の定理は、C = 90° のときの余弦定理の特別な場合です。",
          "<strong>特殊な直角三角形:</strong> 45-45-90 の三角形の脚の比は 1:1:√2、30-60-90 の三角形の辺の比は 1:√3:2 です。これらを使うと素早く暗算できます。",
          "一辺と一つの鋭角がわかっている場合は、このサイトの角度から辺を求める直角三角形計算機を使ってください。"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "三平方の定理には二つの既知の辺が必要です。情報が異なれば、異なる道具が必要です。"
          },
          {
            "kind": "p",
            "text": "<strong>一辺と一つの鋭角がわかっている場合:</strong> サイン、コサイン、タンジェントを使います。サインは（向かい側の辺）/（斜辺）、コサインは（隣接する辺）/（斜辺）、タンジェントは（向かい側の辺）/（隣接する辺）を関係付けます。例えば、斜辺 c と角 A がわかっている場合、脚 a = c × sin(A) です。"
          },
          {
            "kind": "p",
            "text": "<strong>二つの角のみで辺がない場合:</strong> 不可能です。角度は形を決めますが大きさは決めません。3-4-5 の三角形と 6-8-10 の三角形は角度が同じですが大きさが異なります。少なくとも一つの辺の長さが必要です。"
          },
          {
            "kind": "p",
            "text": "<strong>直角三角形でない場合:</strong> 余弦定理（c² = a² + b² − 2ab×cos(C)）または正弦定理を使います。三平方の定理は、C = 90° のときの余弦定理の特別な場合です。"
          },
          {
            "kind": "p",
            "text": "<strong>特殊な直角三角形:</strong> 45-45-90 の三角形の脚の比は 1:1:√2、30-60-90 の三角形の辺の比は 1:√3:2 です。これらを使うと素早く暗算できます。"
          },
          {
            "kind": "p",
            "text": "一辺と一つの鋭角がわかっている場合は、このサイトの角度から辺を求める直角三角形計算機を使ってください。"
          }
        ],
        "linkAnchor": "角度から辺を求める直角三角形計算機"
      },
      "side-related": {
        "h2": "役立つその他の直角三角形計算機",
        "h3s": [],
        "paragraphs": [
          "不足していた辺が求まったら、これらの関連計算機で三角形の分析を続けましょう。"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "不足していた辺が求まったら、これらの関連計算機で三角形の分析を続けましょう。"
          }
        ]
      },
      "side-faq": {
        "h2": "よくある質問",
        "h3s": [],
        "paragraphs": [],
        "blocks": []
      },
      "side-summary": {
        "h2": "自信を持って直角三角形の辺を計算する",
        "h3s": [],
        "paragraphs": [
          "まず、わかっている二つの辺を特定します。両方が脚なら斜辺、一方が斜辺なら不足している脚を求めます。対応する公式または計算機モードを選びます。二つの測定値を同じ単位で入力します。計算したら検証します。斜辺が最も長くなければならず、a² + b² = c² に代入し直して等号が成り立つはずです。単位と丸めを確認します。これらの手順で、直角三角形の辺の問題は確実に解けます。計算するには、このページの上部にある計算機に戻ってください。"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "まず、わかっている二つの辺を特定します。両方が脚なら斜辺、一方が斜辺なら不足している脚を求めます。対応する公式または計算機モードを選びます。二つの測定値を同じ単位で入力します。計算したら検証します。斜辺が最も長くなければならず、a² + b² = c² に代入し直して等号が成り立つはずです。単位と丸めを確認します。これらの手順で、直角三角形の辺の問題は確実に解けます。計算するには、このページの上部にある計算機に戻ってください。"
          }
        ]
      }
    },
    "faqs": [
      {
        "answer": "三平方の定理を使います: a² + b² = c²。両方の脚がわかっている場合は、c = √(a² + b²) で計算します。斜辺と一つの脚がわかっている場合は、c² から既知の脚の2乗を引いて平方根を取り、不足している脚を求めます。辺の長さはちょうど二つ必要です。辺が一つだけ、または角度だけではこの定理は使えません。",
        "question": "直角三角形の不足している辺はどのように計算しますか。"
      },
      {
        "answer": "はい。辺が二つあれば十分です。既知の二辺が両方とも脚の場合は、斜辺の公式を使います。一方が斜辺の場合は、不足する脚の公式を使います。計算機は、斜辺が入力に含まれているかどうかで適切なモードを判断します。",
        "question": "二辺がわかっていれば、不足している辺を求められますか。"
      },
      {
        "answer": "両方の脚を2乗して加え、その平方根を取ります。脚が 6 と 8 の場合: 6² + 8² = 36 + 64 = 100、√100 = 10 です。斜辺は常に最も長い辺なので、答えが両方の脚より長いことを確認してください。",
        "question": "斜辺はどのように求めますか。"
      },
      {
        "answer": "斜辺と既知の脚を2乗し、斜辺の2乗から脚の2乗を引いて平方根を取ります。斜辺 13、脚 5 の場合: 169 − 25 = 144、√144 = 12 です。結果は斜辺より短くなければなりません。",
        "question": "不足している脚はどのように求めますか。"
      },
      {
        "answer": "公式は a² + b² = c² です。ここで a と b は脚（直角を形成する辺）、c は斜辺（直角の向かい側の辺）です。この関係は、すべての直角三角形に成り立ちます。",
        "question": "三平方の定理の公式は何ですか。"
      },
      {
        "answer": "はい。斜辺は頂点間の最も長い距離を占め、最も大きな角（90度）の向かい側にあります。どの三角形でも、最も長い辺は最も大きな角の向かい側にあります。計算した斜辺が脚より短い場合は、入力を確認し直してください。",
        "question": "斜辺は常に最も長い辺ですか。"
      },
      {
        "answer": "いいえ、直角三角形にのみ使えます。この定理は 90 度の角に依存しています。鋭角三角形や鈍角三角形には余弦定理を使います。三平方の定理を直角三角形でない三角形に適用すると、間違った結果になります。",
        "question": "三平方の定理はどんな三角形にも使えますか。"
      },
      {
        "answer": "小数は正常です。ほとんどの直角三角形の辺は整数にはなりません。計算は完全な精度で行い、最後に入力の精度に合わせて丸めます。例えば √42.25 = 6.5 は正確ですが、√50 ≈ 7.071 は丸めが必要です。",
        "question": "答えが小数になる場合はどうすればよいですか。"
      },
      {
        "answer": "はい。これは 45-45-90 の二等辺直角三角形で、脚が等しく、斜辺は 脚 × √2 になります。脚が 5 の場合、斜辺は 5√2 ≈ 7.071 です。",
        "question": "直角三角形の二つの脚が等しくなることはありますか。"
      },
      {
        "answer": "その入力は無効です。斜辺は最も長い辺でなければなりません。ラベルを取り違えている可能性が高いので、最も長い測定値を斜辺 (c) として割り当て、再計算してください。",
        "question": "斜辺が既知の脚より短い場合はどうすればよいですか。"
      },
      {
        "answer": "はい、ただし三平方の定理だけではできません。三角比（サイン、コサイン、タンジェント）を使って、既知の辺と角度から未知の辺を関係付けます。このサイトには、角度から辺を求める問題専用の計算機があります。",
        "question": "一つの角度と一辺から不足している辺を計算できますか。"
      },
      {
        "answer": "三つの辺をすべて a² + b² = c² に代入してみます。斜辺が最も長いことを確認します。これらの数が既知のピタゴラス数になっているか確かめます。斜辺が、長い方の脚と二辺の合計の間に入っているかを概算で確かめます。",
        "question": "答えが正しいかどうかはどのように確認できますか。"
      }
    ],
    "relatedHeading": "役立つその他の直角三角形計算機",
    "relatedIntro": "不足していた辺が求まったら、これらの関連計算機で三角形の分析を続けましょう。",
    "relatedItems": [
      "直角三角形計算機",
      "直角三角形角度計算機",
      "角度から辺を求める直角三角形計算機",
      "直角三角形面積計算機",
      "直角三角形の周長・半周計算機",
      "特殊直角三角形計算機",
      "ピタゴラス数計算機"
    ]
  },
  "ko": {
    "tocHeading": "목차",
    "tocItems": {
      "side-intro": "미지 변 구하는 방법",
      "side-anatomy": "세 변의 이해",
      "side-pythagoras": "피타고라스 정리",
      "side-hypotenuse": "빗변 구하기",
      "side-leg": "미지 직각변 구하기",
      "side-howto": "계산기 사용법",
      "side-formulas": "핵심 공식 한눈에 보기",
      "side-applications": "실생활 예제",
      "side-triples": "피타고라스 수",
      "side-units": "단위와 정밀도",
      "side-invalid": "잘못된 입력",
      "side-verify": "답 검증하기",
      "side-mistakes": "흔한 실수",
      "side-beyond": "피타고라스 정리가 부족할 때",
      "side-related": "관련 계산기",
      "side-faq": "자주 묻는 질문"
    },
    "sections": {
      "side-intro": {
        "h2": "직각삼각형의 미지 변 구하는 방법",
        "h3s": [],
        "paragraphs": [
          "직각삼각형 변 계산기는 나머지 두 변을 알고 있을 때 직각삼각형의 미지 길이를 구합니다. 방의 대각선 측정, 지지 보 확인, 숙제 답 검증 등에 자주 사용됩니다. 계산기가 동작하려면 정확히 두 개의 변 길이가 필요합니다. 이 계산기는 모든 직각삼각형의 세 변 사이의 관계인 피타고라스 정리를 적용합니다. 빗변을 구할 때는 제곱근 아래에서 덧셈을 사용하고, 미지 직각변을 구할 때는 뺄셈을 사용합니다. 이 관계는 90도 각에 의존하므로 직각삼각형에만 적용됩니다. 예를 들어, 수직인 두 변이 6 cm와 8 cm인 직각삼각형의 빗변은 10 cm입니다. 같은 원리로 사다리 길이부터 화면 대각선까지 실제 거리를 잴 수 있습니다."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "직각삼각형 변 계산기는 나머지 두 변을 알고 있을 때 직각삼각형의 미지 길이를 구합니다. 방의 대각선 측정, 지지 보 확인, 숙제 답 검증 등에 자주 사용됩니다. 계산기가 동작하려면 정확히 두 개의 변 길이가 필요합니다. 이 계산기는 모든 직각삼각형의 세 변 사이의 관계인 피타고라스 정리를 적용합니다. 빗변을 구할 때는 제곱근 아래에서 덧셈을 사용하고, 미지 직각변을 구할 때는 뺄셈을 사용합니다. 이 관계는 90도 각에 의존하므로 직각삼각형에만 적용됩니다. 예를 들어, 수직인 두 변이 6 cm와 8 cm인 직각삼각형의 빗변은 10 cm입니다. 같은 원리로 사다리 길이부터 화면 대각선까지 실제 거리를 잴 수 있습니다."
          }
        ]
      },
      "side-anatomy": {
        "h2": "직각삼각형의 세 변 이해하기",
        "h3s": [
          "직각삼각형이란?",
          "빗변이란?",
          "두 직각변이란?",
          "올바른 변을 식별하는 방법은?"
        ],
        "paragraphs": [
          "직각삼각형은 정확히 90도인 각 하나를 포함하며, 이는 정사각형이나 직사각형의 모서리와 같습니다. 나머지 두 각은 예각이어야 하며, 즉 각각 90도보다 작아야 합니다. 삼각형의 내각 합이 180도이므로, 직각이 아닌 두 각의 합은 90도입니다. 이는 예각삼각형(모든 각이 90도 미만)이나 둔각삼각형(한 각이 90도 초과)과 다릅니다. 직각은 피타고라스 정리의 배후에 있는 수직 관계를 만듭니다.",
          "빗변은 직각의 맞은편에 자리하며, 90도 모서리 건너편에 걸쳐 있습니다. 두 꼭짓점 사이의 거리가 가장 길기 때문에 항상 가장 긴 변입니다. 회전된 도형에서는 직각 표시와 닿지 않은 변이 빗변입니다. 이 계산기에서는 이를 c라고 표기하는데, 공식 [[a^2 + b^2 = c^2]] 에서 c가 빗변을 나타낸다는 표준 관례를 따릅니다.",
          "직각변은 직각을 이루는 두 변으로, 90도로 만납니다. 이 계산기에서는 a와 b로 표기합니다. a² + b² = b² + a²이므로 표기를 바꿔도 빗변은 변하지 않습니다. 계산기는 두 직각변을 구분하므로, 미지 직각변 모드에서 어느 직각변을 구할지 알 수 있습니다. 두 직각변을 모두 알면 어느 순서로 입력해도 빗변을 구할 수 있습니다.",
          "직각 표시(작은 정사각형)를 찾습니다. 맞은편 변이 빗변, 닿는 두 변이 직각변입니다. 회전된 도형에서는 삼각형을 돌려 직각이 왼쪽 아래에 오고, 한 직각변이 수평, 다른 직각변이 수직이 되게 상상합니다. 직각 표시가 없으면 이 계산기를 사용하기 전에 삼각형이 직각삼각형인지 확인합니다."
        ],
        "blocks": [
          {
            "kind": "h3",
            "text": "직각삼각형이란?"
          },
          {
            "kind": "p",
            "text": "직각삼각형은 정확히 90도인 각 하나를 포함하며, 이는 정사각형이나 직사각형의 모서리와 같습니다. 나머지 두 각은 예각이어야 하며, 즉 각각 90도보다 작아야 합니다. 삼각형의 내각 합이 180도이므로, 직각이 아닌 두 각의 합은 90도입니다. 이는 예각삼각형(모든 각이 90도 미만)이나 둔각삼각형(한 각이 90도 초과)과 다릅니다. 직각은 피타고라스 정리의 배후에 있는 수직 관계를 만듭니다."
          },
          {
            "kind": "h3",
            "text": "빗변이란?"
          },
          {
            "kind": "p",
            "text": "빗변은 직각의 맞은편에 자리하며, 90도 모서리 건너편에 걸쳐 있습니다. 두 꼭짓점 사이의 거리가 가장 길기 때문에 항상 가장 긴 변입니다. 회전된 도형에서는 직각 표시와 닿지 않은 변이 빗변입니다. 이 계산기에서는 이를 c라고 표기하는데, 공식 [[a^2 + b^2 = c^2]] 에서 c가 빗변을 나타낸다는 표준 관례를 따릅니다."
          },
          {
            "kind": "h3",
            "text": "두 직각변이란?"
          },
          {
            "kind": "p",
            "text": "직각변은 직각을 이루는 두 변으로, 90도로 만납니다. 이 계산기에서는 a와 b로 표기합니다. a² + b² = b² + a²이므로 표기를 바꿔도 빗변은 변하지 않습니다. 계산기는 두 직각변을 구분하므로, 미지 직각변 모드에서 어느 직각변을 구할지 알 수 있습니다. 두 직각변을 모두 알면 어느 순서로 입력해도 빗변을 구할 수 있습니다."
          },
          {
            "kind": "h3",
            "text": "올바른 변을 식별하는 방법은?"
          },
          {
            "kind": "p",
            "text": "직각 표시(작은 정사각형)를 찾습니다. 맞은편 변이 빗변, 닿는 두 변이 직각변입니다. 회전된 도형에서는 삼각형을 돌려 직각이 왼쪽 아래에 오고, 한 직각변이 수평, 다른 직각변이 수직이 되게 상상합니다. 직각 표시가 없으면 이 계산기를 사용하기 전에 삼각형이 직각삼각형인지 확인합니다."
          }
        ],
        "imgAlt": "직각변 a와 b, 빗변 c, 꼭짓점 C의 직각, 예각 A와 B가 표시된 직각삼각형",
        "figcaption": "직각삼각형의 구성 요소: 직각변 a와 b는 꼭짓점 C에서 직각을 이루고, 빗변 c는 맞은편에 있으며, 예각 A와 B가 있습니다."
      },
      "side-pythagoras": {
        "h2": "피타고라스 정리로 삼각형 변을 구하는 방법",
        "h3s": [
          "공식이 성립하는 이유 이해하기"
        ],
        "paragraphs": [
          "피타고라스 정리는 [[a^2 + b^2 = c^2]] 라고 말하며, 여기서 a와 b는 직각변, c는 빗변입니다. 각 변수는 변의 길이입니다. 제곱은 수를 자기 자신과 곱하는 것(6² = 36)이고, 제곱근은 그 역연산(√100 = 10)입니다. 제곱근을 취하는 이유는 공식이 길이 자체가 아니라 제곱된 길이들의 관계를 다루기 때문입니다. 직각변의 길이들을 더하는 것(6 + 8 = 14)은 틀렸습니다. 제곱들을 더한 뒤(36 + 64 = 100) 제곱근을 취합니다. 이 정리는 90도 각이 필요합니다. 직각삼각형이 아니면 코사인 법칙이 필요합니다. 계산기의 세 가지 모드는 모두 이 방정식을 변형한 것입니다. [[c = \\\\sqrt{a^2 + b^2}]], [[b = \\\\sqrt{c^2 - a^2}]], [[a = \\\\sqrt{c^2 - b^2}]].",
          "각 변 위에 정사각형을 그립니다. 넓이는 a², b², c²입니다. 이 정리는 작은 두 넓이의 합이 가장 큰 넓이와 같다고 말합니다. 3-4-5의 경우: 9와 16 제곱단위의 정사각형 넓이 합이 25이며, 이는 빗변 위 정사각형의 넓이입니다. 길이가 아니라 넓이를 비교하므로 제곱이 중요합니다."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "피타고라스 정리는 [[a^2 + b^2 = c^2]] 라고 말하며, 여기서 a와 b는 직각변, c는 빗변입니다. 각 변수는 변의 길이입니다. 제곱은 수를 자기 자신과 곱하는 것(6² = 36)이고, 제곱근은 그 역연산(√100 = 10)입니다. 제곱근을 취하는 이유는 공식이 길이 자체가 아니라 제곱된 길이들의 관계를 다루기 때문입니다. 직각변의 길이들을 더하는 것(6 + 8 = 14)은 틀렸습니다. 제곱들을 더한 뒤(36 + 64 = 100) 제곱근을 취합니다. 이 정리는 90도 각이 필요합니다. 직각삼각형이 아니면 코사인 법칙이 필요합니다. 계산기의 세 가지 모드는 모두 이 방정식을 변형한 것입니다. [[c = \\\\sqrt{a^2 + b^2}]], [[b = \\\\sqrt{c^2 - a^2}]], [[a = \\\\sqrt{c^2 - b^2}]]."
          },
          {
            "kind": "h3",
            "text": "공식이 성립하는 이유 이해하기"
          },
          {
            "kind": "p",
            "text": "각 변 위에 정사각형을 그립니다. 넓이는 a², b², c²입니다. 이 정리는 작은 두 넓이의 합이 가장 큰 넓이와 같다고 말합니다. 3-4-5의 경우: 9와 16 제곱단위의 정사각형 넓이 합이 25이며, 이는 빗변 위 정사각형의 넓이입니다. 길이가 아니라 넓이를 비교하므로 제곱이 중요합니다."
          }
        ],
        "imgAlt": "각 변 위에 9, 16, 25 제곱단위라고 표시된 정사각형이 그려진 3-4-5 직각삼각형으로, 9 더하기 16은 25임을 보여 줌",
        "figcaption": "시각적 증명: 직각변 위의 9와 16 제곱단위 정사각형을 합하면 빗변 위의 25 제곱단위 정사각형과 같습니다."
      },
      "side-hypotenuse": {
        "h2": "두 직각변으로 빗변 구하는 방법",
        "h3s": [
          "예제 1: 6-8 직각삼각형의 빗변 구하기",
          "예제 2: 소수 측정값으로 빗변 구하기",
          "이 계산기 모드를 언제 사용해야 합니까?"
        ],
        "paragraphs": [
          "[[a^2 + b^2 = c^2]] 를 c에 대해 풀면 [[c = \\\\sqrt{a^2 + b^2}]] 가 됩니다. 과정은 다음과 같습니다. 두 직각변을 확인하고, 각각 제곱하고, 제곱들을 더하고, 제곱근을 취하고, 단위를 쓰고, 결과가 두 직각변보다 큰지 확인합니다.",
          "직각변 a = 6 cm, b = 8 cm이 주어졌습니다. 각각 제곱(36과 64)하고, 더하고(100), 제곱근을 취합니다(10). 빗변은 10 cm로, 예상대로 두 직각변보다 큽니다.",
          "a = 2.5 m, b = 6 m이 주어졌습니다. 2.5² + 6² = 6.25 + 36 = 42.25, √42.25 = 6.5 m입니다. 소수 계산은 주의가 필요합니다. 최종 반올림 전까지는 완전한 정밀도를 유지합니다.",
          "두 직각변을 알 때 빗변 모드를 사용합니다. 방의 대각선, 지지대, 수직인 두 변이 주어진 기하 문제 등이 해당합니다. 빗변과 한 직각변을 알면 미지 직각변 모드로 전환합니다."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "[[a^2 + b^2 = c^2]] 를 c에 대해 풀면 [[c = \\\\sqrt{a^2 + b^2}]] 가 됩니다. 과정은 다음과 같습니다. 두 직각변을 확인하고, 각각 제곱하고, 제곱들을 더하고, 제곱근을 취하고, 단위를 쓰고, 결과가 두 직각변보다 큰지 확인합니다."
          },
          {
            "kind": "h3",
            "text": "예제 1: 6-8 직각삼각형의 빗변 구하기"
          },
          {
            "kind": "p",
            "text": "직각변 a = 6 cm, b = 8 cm이 주어졌습니다. 각각 제곱(36과 64)하고, 더하고(100), 제곱근을 취합니다(10). 빗변은 10 cm로, 예상대로 두 직각변보다 큽니다."
          },
          {
            "kind": "h3",
            "text": "예제 2: 소수 측정값으로 빗변 구하기"
          },
          {
            "kind": "p",
            "text": "a = 2.5 m, b = 6 m이 주어졌습니다. 2.5² + 6² = 6.25 + 36 = 42.25, √42.25 = 6.5 m입니다. 소수 계산은 주의가 필요합니다. 최종 반올림 전까지는 완전한 정밀도를 유지합니다."
          },
          {
            "kind": "h3",
            "text": "이 계산기 모드를 언제 사용해야 합니까?"
          },
          {
            "kind": "p",
            "text": "두 직각변을 알 때 빗변 모드를 사용합니다. 방의 대각선, 지지대, 수직인 두 변이 주어진 기하 문제 등이 해당합니다. 빗변과 한 직각변을 알면 미지 직각변 모드로 전환합니다."
          }
        ]
      },
      "side-leg": {
        "h2": "직각삼각형의 미지 직각변 구하는 방법",
        "h3s": [
          "빗변 c와 직각변 a를 알 때 직각변 b 구하기",
          "예제 3: 13 cm 빗변에서 직각변 b 구하기",
          "빗변 c와 직각변 b를 알 때 직각변 a 구하기",
          "예제 4: 미지 직각변 구하기"
        ],
        "paragraphs": [
          "빗변과 한 직각변을 알면 피타고라스 정리를 변형하여 미지 직각변을 분리합니다. [[a^2 + b^2 = c^2]] 에서 시작하여 양변에서 알려진 직각변의 제곱을 뺍니다. 이렇게 각 직각변에 대한 두 개의 공식이 얻어집니다.",
          "공식은 [[b = \\\\sqrt{c^2 - a^2}]] 입니다. 유도 과정: [[a^2 + b^2 = c^2]] 에서 시작하여 양변에서 a²을 빼면 [[b^2 = c^2 - a^2]] 가 되고, 제곱근을 취합니다. 뺄셈을 사용하는 이유는 빗변의 제곱이 두 직각변의 제곱을 모두 포함하므로, 하나를 제거하면 다른 하나가 남기 때문입니다.",
          "c = 13 cm, a = 5 cm이 주어졌을 때 직각변 b를 구합니다. 양변을 제곱합니다. 13² = 169, 5² = 25. 뺍니다. 169 − 25 = 144. 제곱근을 취합니다. √144 = 12. 직각변 b는 12 cm입니다. 검증: 5² + 12² = 25 + 144 = 169 = 13². 5-12-13 피타고라스 수가 결과를 확인해 줍니다.",
          "공식은 [[a = \\\\sqrt{c^2 - b^2}]] 입니다. 피타고라스 관계에서 두 직각변은 서로 바꿀 수 있습니다. 하나를 a, 다른 하나를 b라고 표기하는 것은 관례일 뿐입니다. 계산기는 두 모드를 모두 제공하므로, 변수를 머릿속으로 바꾸지 않고도 문제에 맞게 입력란 표기를 맞출 수 있습니다.",
          "c = 17인치, b = 15인치가 주어졌을 때 직각변 a를 구합니다. 제곱합니다. 17² = 289, 15² = 225. 뺍니다. 289 − 225 = 64. 제곱근을 취합니다. √64 = 8. 직각변 a는 8인치입니다. 이는 8-15-17 피타고라스 수입니다. 두 미지 직각변 모드는 알려진 직각변이 어느 것인지에서만 다릅니다. 수학은 동일합니다."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "빗변과 한 직각변을 알면 피타고라스 정리를 변형하여 미지 직각변을 분리합니다. [[a^2 + b^2 = c^2]] 에서 시작하여 양변에서 알려진 직각변의 제곱을 뺍니다. 이렇게 각 직각변에 대한 두 개의 공식이 얻어집니다."
          },
          {
            "kind": "h3",
            "text": "빗변 c와 직각변 a를 알 때 직각변 b 구하기"
          },
          {
            "kind": "p",
            "text": "공식은 [[b = \\\\sqrt{c^2 - a^2}]] 입니다. 유도 과정: [[a^2 + b^2 = c^2]] 에서 시작하여 양변에서 a²을 빼면 [[b^2 = c^2 - a^2]] 가 되고, 제곱근을 취합니다. 뺄셈을 사용하는 이유는 빗변의 제곱이 두 직각변의 제곱을 모두 포함하므로, 하나를 제거하면 다른 하나가 남기 때문입니다."
          },
          {
            "kind": "h3",
            "text": "예제 3: 13 cm 빗변에서 직각변 b 구하기"
          },
          {
            "kind": "p",
            "text": "c = 13 cm, a = 5 cm이 주어졌을 때 직각변 b를 구합니다. 양변을 제곱합니다. 13² = 169, 5² = 25. 뺍니다. 169 − 25 = 144. 제곱근을 취합니다. √144 = 12. 직각변 b는 12 cm입니다. 검증: 5² + 12² = 25 + 144 = 169 = 13². 5-12-13 피타고라스 수가 결과를 확인해 줍니다."
          },
          {
            "kind": "h3",
            "text": "빗변 c와 직각변 b를 알 때 직각변 a 구하기"
          },
          {
            "kind": "p",
            "text": "공식은 [[a = \\\\sqrt{c^2 - b^2}]] 입니다. 피타고라스 관계에서 두 직각변은 서로 바꿀 수 있습니다. 하나를 a, 다른 하나를 b라고 표기하는 것은 관례일 뿐입니다. 계산기는 두 모드를 모두 제공하므로, 변수를 머릿속으로 바꾸지 않고도 문제에 맞게 입력란 표기를 맞출 수 있습니다."
          },
          {
            "kind": "h3",
            "text": "예제 4: 미지 직각변 구하기"
          },
          {
            "kind": "p",
            "text": "c = 17인치, b = 15인치가 주어졌을 때 직각변 a를 구합니다. 제곱합니다. 17² = 289, 15² = 225. 뺍니다. 289 − 225 = 64. 제곱근을 취합니다. √64 = 8. 직각변 a는 8인치입니다. 이는 8-15-17 피타고라스 수입니다. 두 미지 직각변 모드는 알려진 직각변이 어느 것인지에서만 다릅니다. 수학은 동일합니다."
          }
        ],
        "imgAlt": "피타고라스 정리로 미지 직각변을 구하는 두 직각삼각형을 보여 주는 분할 도표",
        "figcaption": "두 미지 직각변 계산: 5-12-13 삼각형에서 b 구하기와 8-15-17 삼각형에서 a 구하기.",
        "table": {
          "headers": [
            "알려진 값",
            "구할 값",
            "공식",
            "계산기 모드"
          ],
          "rows": [
            [
              "c = 13, a = 5",
              "b",
              "b = √(c² − a²)",
              "c와 a로 미지 직각변 구하기"
            ],
            [
              "c = 17, b = 15",
              "a",
              "a = √(c² − b²)",
              "c와 b로 미지 직각변 구하기"
            ]
          ]
        }
      },
      "side-howto": {
        "h2": "직각삼각형 변 계산기 사용법",
        "h3s": [],
        "paragraphs": [
          "계산기는 결과를 저장하거나 다운로드 가능한 보고서를 생성하지 않습니다. 새로 계산하려면 초기화 옵션을 사용해 입력란을 비웁니다."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "계산기는 결과를 저장하거나 다운로드 가능한 보고서를 생성하지 않습니다. 새로 계산하려면 초기화 옵션을 사용해 입력란을 비웁니다."
          }
        ],
        "list": [
          "알고 있는 두 측정값을 확인합니다. 둘 다 각이 아니라 변의 길이여야 합니다.",
          "미지 값이 빗변인지 직각변인지 판단합니다. 두 직각변을 모두 알면 빗변이 필요하고, 빗변과 한 직각변을 알면 다른 직각변이 필요합니다.",
          "올바른 모드를 선택합니다. 두 직각변을 알면 피타고라스 정리를, 빗변과 직각변 a를 알면 c와 a로 미지 직각변 구하기를, 빗변과 직각변 b를 알면 c와 b로 미지 직각변 구하기를 선택합니다.",
          "두 측정값을 해당하는 입력란에 입력합니다. 각 값이 올바른 입력란에 들어갔는지 다시 확인합니다. 빗변과 직각변을 바꾸면 오류가 발생합니다.",
          "측정 단위를 선택합니다. 두 입력값에 같은 단위를 사용합니다.",
          "계산합니다. 대입과 계산 과정이 표시된 풀이 단계와 함께 결과가 나타납니다.",
          "결과와 단계를 검토합니다. 공식이 상황에 맞는지, 계산이 올바른지 확인합니다.",
          "답이 타당한지 확인합니다. 빗변은 두 직각변보다 커야 합니다. 미지 직각변은 빗변보다 짧아야 합니다. 이 조건을 만족하지 않으면 입력값을 다시 확인합니다."
        ]
      },
      "side-formulas": {
        "h2": "직각삼각형 변 공식 한눈에 보기",
        "h3s": [],
        "paragraphs": [
          "세 개의 공식을 따로 외울 필요는 없습니다. [[a^2 + b^2 = c^2]] 하나만 기억한 뒤, 미지 값을 구합니다. c가 미지이면 직각변 제곱들을 더하고 제곱근을 취합니다. 직각변이 미지이면 c²에서 알려진 직각변의 제곱을 빼고 제곱근을 취합니다. 계산기 모드 이름이 어느 배치를 사용할지 알려 줍니다."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "세 개의 공식을 따로 외울 필요는 없습니다. [[a^2 + b^2 = c^2]] 하나만 기억한 뒤, 미지 값을 구합니다. c가 미지이면 직각변 제곱들을 더하고 제곱근을 취합니다. 직각변이 미지이면 c²에서 알려진 직각변의 제곱을 빼고 제곱근을 취합니다. 계산기 모드 이름이 어느 배치를 사용할지 알려 줍니다."
          }
        ],
        "table": {
          "headers": [
            "알려진 측정값",
            "미지 변",
            "공식",
            "계산기 모드",
            "예제"
          ],
          "rows": [
            [
              "직각변 a와 b",
              "빗변 c",
              "c = √(a² + b²)",
              "피타고라스 정리",
              "a=6, b=8 → c=10"
            ],
            [
              "빗변 c, 직각변 a",
              "직각변 b",
              "b = √(c² − a²)",
              "c와 a로 미지 직각변 구하기",
              "c=13, a=5 → b=12"
            ],
            [
              "빗변 c, 직각변 b",
              "직각변 a",
              "a = √(c² − b²)",
              "c와 b로 미지 직각변 구하기",
              "c=17, b=15 → a=8"
            ]
          ]
        }
      },
      "side-applications": {
        "h2": "직각삼각형 변 계산의 실생활 예제",
        "h3s": [
          "예제 5: 벽에 기대어 세운 사다리",
          "예제 6: 직사각형 방의 대각선",
          "예제 7: 지붕 서까래 길이",
          "예제 8: TV 또는 모니터 대각선",
          "예제 9: 경사로 측정",
          "예제 10: 직사각형 정원의 대각선 오솔길",
          "예제 11: 대각선을 아는 지지대",
          "예제 12: 소수 값이 포함된 공학 도면"
        ],
        "paragraphs": [
          "사다리가 벽을 따라 수직으로 2.4 m 높이까지 닿고, 사다리 밑바탕은 벽에서 1.8 m 떨어져 있습니다. 벽과 바닥이 직각을 이루어 직각삼각형이 만들어지며, 사다리가 빗변이 됩니다. 알려진 값: a = 1.8 m(밑변), b = 2.4 m(높이). 구할 값: c(사다리 길이). 공식: [[c = \\\\sqrt{a^2 + b^2}]]. 대입: c = √(1.8² + 2.4²) = √(3.24 + 5.76) = √9 = 3. 사다리 길이는 3 m입니다. 이 거리에서 이 높이까지 닿으려면 필요한 사다리 길이를 알 수 있습니다. 참고: 이 기하학적 계산은 사다리 안전성을 평가하지 않습니다. 실제 사용 시에는 제조업체 지침과 안전 규정을 따릅니다.",
          "방의 길이는 9 ft, 너비는 12 ft입니다. 마주 보는 모서리 사이의 대각선은 벽을 직각변으로 하는 직각삼각형의 빗변이 됩니다. 알려진 값: a = 9 ft, b = 12 ft. 구할 값: c. 공식: c = √(9² + 12²) = √(81 + 144) = √225 = 15. 대각선은 15 ft입니다. 방이 직사각형인지 확인할 때(두 대각선이 같아야 함)나 가구 배치를 위한 최장 직선 거리를 구할 때 유용합니다.",
          "간략화한 지붕 단면의 수평 거리(run)는 12 ft, 수직 높이(rise)는 5 ft입니다. 서까래가 빗변을 이룹니다. 알려진 값: run = 12 ft, rise = 5 ft. 구할 값: 서까래 길이. 공식: c = √(12² + 5²) = √(144 + 25) = √169 = 13. 서까래 길이는 13 ft입니다. 이 기본 계산은 돌출부, 용마루 두께, 접합 여유 등 실제 시공에 필요한 요소를 제외합니다. 완전한 사양은 건축 도면을 확인합니다.",
          "직사각형 화면의 너비는 16인치, 높이는 9인치입니다. 대각선이 빗변입니다. 알려진 값: 너비 = 16 in, 높이 = 9 in. 구할 값: 대각선. 공식: d = √(16² + 9²) = √(256 + 81) = √337 ≈ 18.36. 대각선은 약 18.36인치입니다. 표시된 치수를 사용한 것이며, 상업용 화면 크기는 제조업체의 측정 방식에 따라 다를 수 있습니다.",
          "경사로의 수평 거리는 6 m, 높이는 0.75 m입니다. 기울어진 면이 빗변입니다. 알려진 값: run = 6 m, rise = 0.75 m. 구할 값: 경사 길이. 공식: s = √(6² + 0.75²) = √(36 + 0.5625) = √36.5625 ≈ 6.05. 경사 길이는 약 6.05 m입니다. 수평 거리(6 m)와 경사 길이(6.05 m)는 다릅니다. 경사는 항상 약간 더 깁니다. 이는 접근성 규정 준수를 검증하지 않습니다. 경사로 요건은 현지 건축 법규를 확인합니다.",
          "직사각형 정원의 너비는 30 ft, 길이는 40 ft입니다. 대각선 오솔길이 가로지릅니다. 알려진 값: a = 30 ft, b = 40 ft. 구할 값: 오솔길 길이. 공식: c = √(30² + 40²) = √(900 + 1600) = √2500 = 50. 오솔길은 50 ft입니다. 대각선으로 걷는 것(50 ft)은 두 변을 따라 걷는 것(70 ft)보다 짧으므로, 대각선 오솔길은 시간을 절약해 줍니다.",
          "지지대의 길이는 10 ft(빗변)이고, 수평으로 8 ft를 가로지릅니다. 수직 거리를 구합니다. 알려진 값: c = 10 ft, a = 8 ft. 구할 값: b. 공식: b = √(c² − a²) = √(100 − 64) = √36 = 6. 수직 거리는 6 ft입니다. 빗변의 제곱이 두 직각변의 제곱을 모두 포함하므로 뺄셈이 필요합니다. 알려진 수평 성분을 제거하면 수직 성분이 남습니다.",
          "브라켓 설계 도면에는 빗변 250 mm와 한 직각변 70 mm가 지정되어 있습니다. 다른 직각변을 구합니다. 알려진 값: c = 250 mm, b = 70 mm. 구할 값: a. 공식: a = √(c² − b²) = √(62500 − 4900) = √57600 = 240. 직각변은 240 mm입니다. 밀리미터 입력에서는 여기서 결과가 정확하지만, 실제로는 가장 덜 정밀한 측정값의 정밀도에 맞추어 반올림합니다. 측정 도구가 잴 수 있는 자리수보다 더 많은 소수 자리수를 보고하지 않습니다."
        ],
        "blocks": [
          {
            "kind": "h3",
            "text": "예제 5: 벽에 기대어 세운 사다리"
          },
          {
            "kind": "p",
            "text": "사다리가 벽을 따라 수직으로 2.4 m 높이까지 닿고, 사다리 밑바탕은 벽에서 1.8 m 떨어져 있습니다. 벽과 바닥이 직각을 이루어 직각삼각형이 만들어지며, 사다리가 빗변이 됩니다. 알려진 값: a = 1.8 m(밑변), b = 2.4 m(높이). 구할 값: c(사다리 길이). 공식: [[c = \\\\sqrt{a^2 + b^2}]]. 대입: c = √(1.8² + 2.4²) = √(3.24 + 5.76) = √9 = 3. 사다리 길이는 3 m입니다. 이 거리에서 이 높이까지 닿으려면 필요한 사다리 길이를 알 수 있습니다. 참고: 이 기하학적 계산은 사다리 안전성을 평가하지 않습니다. 실제 사용 시에는 제조업체 지침과 안전 규정을 따릅니다."
          },
          {
            "kind": "h3",
            "text": "예제 6: 직사각형 방의 대각선"
          },
          {
            "kind": "p",
            "text": "방의 길이는 9 ft, 너비는 12 ft입니다. 마주 보는 모서리 사이의 대각선은 벽을 직각변으로 하는 직각삼각형의 빗변이 됩니다. 알려진 값: a = 9 ft, b = 12 ft. 구할 값: c. 공식: c = √(9² + 12²) = √(81 + 144) = √225 = 15. 대각선은 15 ft입니다. 방이 직사각형인지 확인할 때(두 대각선이 같아야 함)나 가구 배치를 위한 최장 직선 거리를 구할 때 유용합니다."
          },
          {
            "kind": "h3",
            "text": "예제 7: 지붕 서까래 길이"
          },
          {
            "kind": "p",
            "text": "간략화한 지붕 단면의 수평 거리(run)는 12 ft, 수직 높이(rise)는 5 ft입니다. 서까래가 빗변을 이룹니다. 알려진 값: run = 12 ft, rise = 5 ft. 구할 값: 서까래 길이. 공식: c = √(12² + 5²) = √(144 + 25) = √169 = 13. 서까래 길이는 13 ft입니다. 이 기본 계산은 돌출부, 용마루 두께, 접합 여유 등 실제 시공에 필요한 요소를 제외합니다. 완전한 사양은 건축 도면을 확인합니다."
          },
          {
            "kind": "h3",
            "text": "예제 8: TV 또는 모니터 대각선"
          },
          {
            "kind": "p",
            "text": "직사각형 화면의 너비는 16인치, 높이는 9인치입니다. 대각선이 빗변입니다. 알려진 값: 너비 = 16 in, 높이 = 9 in. 구할 값: 대각선. 공식: d = √(16² + 9²) = √(256 + 81) = √337 ≈ 18.36. 대각선은 약 18.36인치입니다. 표시된 치수를 사용한 것이며, 상업용 화면 크기는 제조업체의 측정 방식에 따라 다를 수 있습니다."
          },
          {
            "kind": "h3",
            "text": "예제 9: 경사로 측정"
          },
          {
            "kind": "p",
            "text": "경사로의 수평 거리는 6 m, 높이는 0.75 m입니다. 기울어진 면이 빗변입니다. 알려진 값: run = 6 m, rise = 0.75 m. 구할 값: 경사 길이. 공식: s = √(6² + 0.75²) = √(36 + 0.5625) = √36.5625 ≈ 6.05. 경사 길이는 약 6.05 m입니다. 수평 거리(6 m)와 경사 길이(6.05 m)는 다릅니다. 경사는 항상 약간 더 깁니다. 이는 접근성 규정 준수를 검증하지 않습니다. 경사로 요건은 현지 건축 법규를 확인합니다."
          },
          {
            "kind": "h3",
            "text": "예제 10: 직사각형 정원의 대각선 오솔길"
          },
          {
            "kind": "p",
            "text": "직사각형 정원의 너비는 30 ft, 길이는 40 ft입니다. 대각선 오솔길이 가로지릅니다. 알려진 값: a = 30 ft, b = 40 ft. 구할 값: 오솔길 길이. 공식: c = √(30² + 40²) = √(900 + 1600) = √2500 = 50. 오솔길은 50 ft입니다. 대각선으로 걷는 것(50 ft)은 두 변을 따라 걷는 것(70 ft)보다 짧으므로, 대각선 오솔길은 시간을 절약해 줍니다."
          },
          {
            "kind": "h3",
            "text": "예제 11: 대각선을 아는 지지대"
          },
          {
            "kind": "p",
            "text": "지지대의 길이는 10 ft(빗변)이고, 수평으로 8 ft를 가로지릅니다. 수직 거리를 구합니다. 알려진 값: c = 10 ft, a = 8 ft. 구할 값: b. 공식: b = √(c² − a²) = √(100 − 64) = √36 = 6. 수직 거리는 6 ft입니다. 빗변의 제곱이 두 직각변의 제곱을 모두 포함하므로 뺄셈이 필요합니다. 알려진 수평 성분을 제거하면 수직 성분이 남습니다."
          },
          {
            "kind": "h3",
            "text": "예제 12: 소수 값이 포함된 공학 도면"
          },
          {
            "kind": "p",
            "text": "브라켓 설계 도면에는 빗변 250 mm와 한 직각변 70 mm가 지정되어 있습니다. 다른 직각변을 구합니다. 알려진 값: c = 250 mm, b = 70 mm. 구할 값: a. 공식: a = √(c² − b²) = √(62500 − 4900) = √57600 = 240. 직각변은 240 mm입니다. 밀리미터 입력에서는 여기서 결과가 정확하지만, 실제로는 가장 덜 정밀한 측정값의 정밀도에 맞추어 반올림합니다. 측정 도구가 잴 수 있는 자리수보다 더 많은 소수 자리수를 보고하지 않습니다."
          }
        ],
        "imgAlt": "사다리 대 벽, 방 대각선, 지붕 서까래, 정원 오솔길의 직각삼각형 측정값을 보여 주는 네 개의 패널",
        "figcaption": "일상 속 직각삼각형: 사다리(3 m), 방 대각선(15 ft), 지붕 서까래(13 ft), 정원 오솔길(50 ft)."
      },
      "side-triples": {
        "h2": "흔한 피타고라스 수와 그 중요성",
        "h3s": [],
        "paragraphs": [
          "피타고라스 수는 [[a^2 + b^2 = c^2]] 를 만족하는 세 개의 자연수입니다. 이 수들은 빠른 암산 검산 수단이 됩니다. 입력값이 피타고라스 수와 일치하면 계산 없이 답을 알 수 있습니다. 배율 적용도 가능합니다. 3-4-5에 2를 곱한 6-8-10도 방정식을 만족합니다(36 + 64 = 100). 모든 직각삼각형이 자연수 변을 갖는 것은 아닙니다. 대부분은 소수나 무리수가 나옵니다.",
          "5-12-13 검증: 5² = 25, 12² = 144, 25 + 144 = 169, √169 = 13. 8-15-17 검증: 8² = 64, 15² = 225, 64 + 225 = 289, √289 = 17. 계산기 결과가 자연수로 나오면 입력값과 함께 피타고라스 수를 이루는지 확인하여 검산합니다."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "피타고라스 수는 [[a^2 + b^2 = c^2]] 를 만족하는 세 개의 자연수입니다. 이 수들은 빠른 암산 검산 수단이 됩니다. 입력값이 피타고라스 수와 일치하면 계산 없이 답을 알 수 있습니다. 배율 적용도 가능합니다. 3-4-5에 2를 곱한 6-8-10도 방정식을 만족합니다(36 + 64 = 100). 모든 직각삼각형이 자연수 변을 갖는 것은 아닙니다. 대부분은 소수나 무리수가 나옵니다."
          },
          {
            "kind": "p",
            "text": "5-12-13 검증: 5² = 25, 12² = 144, 25 + 144 = 169, √169 = 13. 8-15-17 검증: 8² = 64, 15² = 225, 64 + 225 = 289, √289 = 17. 계산기 결과가 자연수로 나오면 입력값과 함께 피타고라스 수를 이루는지 확인하여 검산합니다."
          }
        ],
        "table": {
          "headers": [
            "피타고라스 수",
            "검증"
          ],
          "rows": [
            [
              "3-4-5",
              "9 + 16 = 25 ✓"
            ],
            [
              "5-12-13",
              "25 + 144 = 169 ✓"
            ],
            [
              "8-15-17",
              "64 + 225 = 289 ✓"
            ],
            [
              "7-24-25",
              "49 + 576 = 625 ✓"
            ],
            [
              "9-40-41",
              "81 + 1600 = 1681 ✓"
            ],
            [
              "6-8-10",
              "36 + 64 = 100 ✓ (3-4-5의 배율 적용)"
            ]
          ]
        }
      },
      "side-units": {
        "h2": "측정 단위, 소수 답, 반올림",
        "h3s": [],
        "paragraphs": [
          "단위를 일관되게 사용합니다. 밀리미터, 센티미터, 미터, 인치, 피트, 야드, 킬로미터 중 하나를 선택합니다. 단위를 섞으면 틀린 답이 나옵니다. 3피트와 6인치는 계산 전에 3.5피트 또는 42인치로 바꿔야 합니다. 먼저 변환한 뒤 계산합니다. 계산기에서 두 입력값에 맞는 단위를 선택합니다. 중간 단계가 아니라 최종 계산 후에만 반올림하여 오차가 누적되지 않게 합니다. 10 cm 같은 정확한 답과 6.50 m 같은 반올림된 소수는 다릅니다. 후자는 측정 정밀도를 암시합니다. 결과는 가장 덜 정밀한 입력값보다 더 정밀할 수 없습니다. 센티미터 단위까지 쟀다면 밀리미터 단위로 보고하지 않습니다.",
          "피트와 인치 예제: 판자 크기가 2 ft 6 in × 3 ft입니다. 인치로 변환: 30 in와 36 in. 계산: c = √(30² + 36²) = √(900 + 1296) = √2196 ≈ 46.86 in. 다시 변환: 46.86 in = 3 ft 10.86 in, 즉 약 3 ft 10.9 in입니다.",
          "참고: 길이를 제곱하면 제곱단위(cm²)가 되지만, 마지막 제곱근을 취하면 선형 단위(cm)로 돌아옵니다. 계산기가 이를 자동으로 처리합니다."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "단위를 일관되게 사용합니다. 밀리미터, 센티미터, 미터, 인치, 피트, 야드, 킬로미터 중 하나를 선택합니다. 단위를 섞으면 틀린 답이 나옵니다. 3피트와 6인치는 계산 전에 3.5피트 또는 42인치로 바꿔야 합니다. 먼저 변환한 뒤 계산합니다. 계산기에서 두 입력값에 맞는 단위를 선택합니다. 중간 단계가 아니라 최종 계산 후에만 반올림하여 오차가 누적되지 않게 합니다. 10 cm 같은 정확한 답과 6.50 m 같은 반올림된 소수는 다릅니다. 후자는 측정 정밀도를 암시합니다. 결과는 가장 덜 정밀한 입력값보다 더 정밀할 수 없습니다. 센티미터 단위까지 쟀다면 밀리미터 단위로 보고하지 않습니다."
          },
          {
            "kind": "p",
            "text": "피트와 인치 예제: 판자 크기가 2 ft 6 in × 3 ft입니다. 인치로 변환: 30 in와 36 in. 계산: c = √(30² + 36²) = √(900 + 1296) = √2196 ≈ 46.86 in. 다시 변환: 46.86 in = 3 ft 10.86 in, 즉 약 3 ft 10.9 in입니다."
          },
          {
            "kind": "p",
            "text": "참고: 길이를 제곱하면 제곱단위(cm²)가 되지만, 마지막 제곱근을 취하면 선형 단위(cm)로 돌아옵니다. 계산기가 이를 자동으로 처리합니다."
          }
        ]
      },
      "side-invalid": {
        "h2": "어떤 삼각형 측정값은 유효한 답을 낼 수 없는 이유",
        "h3s": [],
        "paragraphs": [
          "유효한 직각삼각형은 빗변이 각 직각변보다 긴 세 개의 양수 변 길이가 필요합니다. 미지 직각변 계산에서는 제곱근 안의 값(c² − 직각변²)이 양수여야 합니다.",
          "잘못됨: c = 8, a = 10. 빗변(8)이 직각변(10)보다 짧습니다. 빗변-최장 규칙을 위반합니다. 표기를 바꾼 것일 가능성이 큽니다. 10이 빗변이 되어야 합니다.",
          "잘못됨: c = 5, a = 5. 그러면 b = √(25 − 25) = √0 = 0입니다. 길이가 0인 변은 삼각형을 선분으로 붕괴시키므로 유효한 삼각형이 아닙니다.",
          "잘못됨: a = −3, b = 4. 음수 길이는 기하학적 의미가 없습니다. 변의 길이는 양수여야 합니다."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "유효한 직각삼각형은 빗변이 각 직각변보다 긴 세 개의 양수 변 길이가 필요합니다. 미지 직각변 계산에서는 제곱근 안의 값(c² − 직각변²)이 양수여야 합니다."
          },
          {
            "kind": "p",
            "text": "잘못됨: c = 8, a = 10. 빗변(8)이 직각변(10)보다 짧습니다. 빗변-최장 규칙을 위반합니다. 표기를 바꾼 것일 가능성이 큽니다. 10이 빗변이 되어야 합니다."
          },
          {
            "kind": "p",
            "text": "잘못됨: c = 5, a = 5. 그러면 b = √(25 − 25) = √0 = 0입니다. 길이가 0인 변은 삼각형을 선분으로 붕괴시키므로 유효한 삼각형이 아닙니다."
          },
          {
            "kind": "p",
            "text": "잘못됨: a = −3, b = 4. 음수 길이는 기하학적 의미가 없습니다. 변의 길이는 양수여야 합니다."
          }
        ],
        "table": {
          "headers": [
            "문제",
            "원인",
            "해결 방법"
          ],
          "rows": [
            [
              "빗변이 직각변보다 짧음",
              "표기가 바뀜",
              "가장 긴 변을 c로 지정"
            ],
            [
              "제곱근 안이 0",
              "c가 알려진 직각변과 같음",
              "측정값을 확인합니다. 삼각형이 퇴화되었습니다"
            ],
            [
              "제곱근 안이 음수",
              "c가 알려진 직각변보다 짧음",
              "이 입력값으로는 직각삼각형을 만들 수 없습니다"
            ],
            [
              "음수 입력",
              "오타 또는 부호 오류",
              "양수 길이만 사용"
            ],
            [
              "0 입력",
              "측정값 누락",
              "실제 길이를 입력"
            ],
            [
              "잘못된 단위 혼합",
              "피트와 인치",
              "먼저 하나의 단위로 변환"
            ],
            [
              "직각삼각형이 아님",
              "90도 각이 없음",
              "대신 코사인 법칙 사용"
            ]
          ]
        }
      },
      "side-verify": {
        "h2": "계산한 변이 맞는지 확인하는 방법",
        "h3s": [],
        "paragraphs": [
          "방법 1: 다시 대입합니다. 세 변을 모두 [[a^2 + b^2 = c^2]] 에 대입합니다. 6-8-10 삼각형의 경우: 36 + 64 = 100. 양변이 일치하면 답이 맞습니다.",
          "방법 2: 빗변이 가장 긴지 확인합니다. c를 구했다면 a와 b보다 큰지 확인합니다. 직각변을 구했다면 c보다 짧은지 확인합니다.",
          "방법 3: 피타고라스 수와 비교합니다. 입력값이 자연수이면 알려진 피타고라스 수를 이루는지 확인합니다. 9와 12에서 15가 나오면 3-4-5의 배율 적용 삼각형과 일치합니다.",
          "방법 4: 타당성을 어림합니다. 빗변은 어느 직각변보다도 길지만 두 직각변의 합보다는 짧아야 합니다. 직각변 6과 8의 경우 빗변 10은 8 < 10 < 14를 만족합니다.",
          "방법 5: 단위와 반올림을 확인합니다. 단위가 입력값과 일치하고, 소수 자리수가 측정 정밀도를 반영하는지 확인합니다.",
          "검증 예제 1: a = 5, b = 12에서 c = 13을 구했습니다. 확인: 5² + 12² = 25 + 144 = 169 = 13². 빗변 13은 두 직각변보다 큽니다. 5-12-13 피타고라스 수와 일치합니다. 유효합니다.",
          "검증 예제 2: c = 12.5, a = 10에서 b = 7.5를 구했습니다. 확인: 10² + 7.5² = 100 + 56.25 = 156.25 = 12.5². 직각변 7.5는 빗변 12.5보다 짧습니다. 어림: 10 < 12.5 < 20. 유효합니다."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "방법 1: 다시 대입합니다. 세 변을 모두 [[a^2 + b^2 = c^2]] 에 대입합니다. 6-8-10 삼각형의 경우: 36 + 64 = 100. 양변이 일치하면 답이 맞습니다."
          },
          {
            "kind": "p",
            "text": "방법 2: 빗변이 가장 긴지 확인합니다. c를 구했다면 a와 b보다 큰지 확인합니다. 직각변을 구했다면 c보다 짧은지 확인합니다."
          },
          {
            "kind": "p",
            "text": "방법 3: 피타고라스 수와 비교합니다. 입력값이 자연수이면 알려진 피타고라스 수를 이루는지 확인합니다. 9와 12에서 15가 나오면 3-4-5의 배율 적용 삼각형과 일치합니다."
          },
          {
            "kind": "p",
            "text": "방법 4: 타당성을 어림합니다. 빗변은 어느 직각변보다도 길지만 두 직각변의 합보다는 짧아야 합니다. 직각변 6과 8의 경우 빗변 10은 8 < 10 < 14를 만족합니다."
          },
          {
            "kind": "p",
            "text": "방법 5: 단위와 반올림을 확인합니다. 단위가 입력값과 일치하고, 소수 자리수가 측정 정밀도를 반영하는지 확인합니다."
          },
          {
            "kind": "p",
            "text": "검증 예제 1: a = 5, b = 12에서 c = 13을 구했습니다. 확인: 5² + 12² = 25 + 144 = 169 = 13². 빗변 13은 두 직각변보다 큽니다. 5-12-13 피타고라스 수와 일치합니다. 유효합니다."
          },
          {
            "kind": "p",
            "text": "검증 예제 2: c = 12.5, a = 10에서 b = 7.5를 구했습니다. 확인: 10² + 7.5² = 100 + 56.25 = 156.25 = 12.5². 직각변 7.5는 빗변 12.5보다 짧습니다. 어림: 10 < 12.5 < 20. 유효합니다."
          }
        ]
      },
      "side-mistakes": {
        "h2": "직각삼각형 변을 계산할 때 흔한 실수",
        "h3s": [],
        "paragraphs": [
          "1. 직각변들을 제곱하지 않고 더하기. √(36 + 64) = 10 대신 6 + 8 = 14를 계산합니다. 이 정리는 길이가 아니라 제곱된 넓이를 더합니다. 항상 먼저 제곱합니다.",
          "2. 제곱근을 취하지 않기. 6-8 삼각형의 빗변으로 10 대신 100을 답합니다. 공식은 c²을 주므로 c가 필요합니다. 마지막 단계에서 제곱근을 취합니다.",
          "3. 빗변을 구할 때 뺄셈하기. √(64 + 36) = 10 대신 √(64 − 36) = √28을 사용합니다. 두 직각변에서 빗변을 구할 때는 덧셈을 적용합니다.",
          "4. 미지 직각변을 구할 때 덧셈하기. √(169 − 25) = 12 대신 √(169 + 25)를 사용합니다. 빗변을 알 때는 뺄셈을 적용합니다.",
          "5. 직각변을 빗변으로 착각하기. 가장 긴 변을 a나 b로 표기합니다. 빗변은 항상 직각의 맞은편에 있으며 항상 c로 표기합니다.",
          "6. 직각삼각형이 아닌 삼각형에 정리를 적용하기. 90도 각 없이 a² + b² = c²을 사용합니다. 먼저 직각을 확인합니다.",
          "7. 중간 계산에서 반올림하기. 6.25를 계산 중간에 6.3으로 반올림한 뒤 최종 답이 약간 틀립니다. 끝까지 완전한 정밀도를 유지합니다.",
          "8. 측정 단위 섞기. 3피트와 6인치를 3과 6으로 입력합니다. 계산 전에 하나의 단위로 변환합니다.",
          "9. 값을 잘못된 입력란에 입력하기. 빗변을 직각변 입력란에 넣습니다. 각 측정값을 올바른 표기에 맞춥니다.",
          "10. 제곱근 안의 음수를 잘못 해석하기. √(25 − 36)을 보고 억지로 계산합니다. 근호 안이 음수이면 입력값으로 직각삼각형을 만들 수 없다는 뜻입니다. 표기를 확인합니다."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "1. 직각변들을 제곱하지 않고 더하기. √(36 + 64) = 10 대신 6 + 8 = 14를 계산합니다. 이 정리는 길이가 아니라 제곱된 넓이를 더합니다. 항상 먼저 제곱합니다."
          },
          {
            "kind": "p",
            "text": "2. 제곱근을 취하지 않기. 6-8 삼각형의 빗변으로 10 대신 100을 답합니다. 공식은 c²을 주므로 c가 필요합니다. 마지막 단계에서 제곱근을 취합니다."
          },
          {
            "kind": "p",
            "text": "3. 빗변을 구할 때 뺄셈하기. √(64 + 36) = 10 대신 √(64 − 36) = √28을 사용합니다. 두 직각변에서 빗변을 구할 때는 덧셈을 적용합니다."
          },
          {
            "kind": "p",
            "text": "4. 미지 직각변을 구할 때 덧셈하기. √(169 − 25) = 12 대신 √(169 + 25)를 사용합니다. 빗변을 알 때는 뺄셈을 적용합니다."
          },
          {
            "kind": "p",
            "text": "5. 직각변을 빗변으로 착각하기. 가장 긴 변을 a나 b로 표기합니다. 빗변은 항상 직각의 맞은편에 있으며 항상 c로 표기합니다."
          },
          {
            "kind": "p",
            "text": "6. 직각삼각형이 아닌 삼각형에 정리를 적용하기. 90도 각 없이 a² + b² = c²을 사용합니다. 먼저 직각을 확인합니다."
          },
          {
            "kind": "p",
            "text": "7. 중간 계산에서 반올림하기. 6.25를 계산 중간에 6.3으로 반올림한 뒤 최종 답이 약간 틀립니다. 끝까지 완전한 정밀도를 유지합니다."
          },
          {
            "kind": "p",
            "text": "8. 측정 단위 섞기. 3피트와 6인치를 3과 6으로 입력합니다. 계산 전에 하나의 단위로 변환합니다."
          },
          {
            "kind": "p",
            "text": "9. 값을 잘못된 입력란에 입력하기. 빗변을 직각변 입력란에 넣습니다. 각 측정값을 올바른 표기에 맞춥니다."
          },
          {
            "kind": "p",
            "text": "10. 제곱근 안의 음수를 잘못 해석하기. √(25 − 36)을 보고 억지로 계산합니다. 근호 안이 음수이면 입력값으로 직각삼각형을 만들 수 없다는 뜻입니다. 표기를 확인합니다."
          }
        ]
      },
      "side-beyond": {
        "h2": "다른 직각삼각형 공식이 필요할 때는?",
        "h3s": [],
        "paragraphs": [
          "피타고라스 정리에는 알려진 변이 두 개 필요합니다. 정보가 다르면 다른 도구가 필요합니다.",
          "한 변과 한 예각: 사인, 코사인, 탄젠트를 사용합니다. 사인은 대변과 빗변의 관계, 코사인은 이웃변과 빗변의 관계, 탄젠트는 대변과 이웃변의 관계입니다. 예를 들어, 빗변 c와 각 A가 있으면 직각변 a = c × sin(A)입니다.",
          "두 각, 변 없음: 불가능합니다. 각은 모양을 정하지만 크기는 정하지 않습니다. 3-4-5 삼각형과 6-8-10 삼각형은 각이 같지만 크기가 다릅니다. 최소 하나의 변 길이가 필요합니다.",
          "직각삼각형이 아님: 코사인 법칙(c² = a² + b² − 2ab×cos(C)) 또는 사인 법칙을 사용합니다. 피타고라스 정리는 C = 90도인 경우의 코사인 법칙 특수 케이스입니다.",
          "특수 직각삼각형: 45-45-90 삼각형의 변 비율은 1:1:√2이고, 30-60-90은 1:√3:2입니다. 이 비율로 빠른 암산이 가능합니다.",
          "한 변과 한 예각을 알면 이 사이트의 각도를 이용한 직각삼각형 변 계산기를 사용합니다."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "피타고라스 정리에는 알려진 변이 두 개 필요합니다. 정보가 다르면 다른 도구가 필요합니다."
          },
          {
            "kind": "p",
            "text": "한 변과 한 예각: 사인, 코사인, 탄젠트를 사용합니다. 사인은 대변과 빗변의 관계, 코사인은 이웃변과 빗변의 관계, 탄젠트는 대변과 이웃변의 관계입니다. 예를 들어, 빗변 c와 각 A가 있으면 직각변 a = c × sin(A)입니다."
          },
          {
            "kind": "p",
            "text": "두 각, 변 없음: 불가능합니다. 각은 모양을 정하지만 크기는 정하지 않습니다. 3-4-5 삼각형과 6-8-10 삼각형은 각이 같지만 크기가 다릅니다. 최소 하나의 변 길이가 필요합니다."
          },
          {
            "kind": "p",
            "text": "직각삼각형이 아님: 코사인 법칙(c² = a² + b² − 2ab×cos(C)) 또는 사인 법칙을 사용합니다. 피타고라스 정리는 C = 90도인 경우의 코사인 법칙 특수 케이스입니다."
          },
          {
            "kind": "p",
            "text": "특수 직각삼각형: 45-45-90 삼각형의 변 비율은 1:1:√2이고, 30-60-90은 1:√3:2입니다. 이 비율로 빠른 암산이 가능합니다."
          },
          {
            "kind": "p",
            "text": "한 변과 한 예각을 알면 이 사이트의 각도를 이용한 직각삼각형 변 계산기를 사용합니다."
          }
        ],
        "linkAnchor": "각도를 이용한 직각삼각형 변 계산기"
      },
      "side-related": {
        "h2": "도움이 될 만한 다른 직각삼각형 계산기",
        "h3s": [],
        "paragraphs": [],
        "blocks": []
      },
      "side-faq": {
        "h2": "자주 묻는 질문",
        "h3s": [],
        "paragraphs": [],
        "blocks": []
      },
      "side-summary": {
        "h2": "자신 있게 직각삼각형의 변을 계산합니다",
        "h3s": [],
        "paragraphs": [
          "먼저 알려진 두 변을 확인합니다. 두 변이 모두 직각변이면 빗변이 필요하고, 하나가 빗변이면 미지 직각변이 필요합니다. 맞는 공식이나 계산기 모드를 선택합니다. 두 측정값을 같은 단위로 입력합니다. 계산한 뒤 검증합니다. 빗변은 가장 길어야 하며, a² + b² = c²에 다시 대입하면 양변이 균형을 이루어야 합니다. 단위와 반올림을 확인합니다. 이 단계를 따르면 직각삼각형의 변 문제를 어떤 것이든 안정적으로 풀 수 있습니다. 이 페이지 상단의 계산기로 돌아가서 숫자를 계산해 보십시오."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "먼저 알려진 두 변을 확인합니다. 두 변이 모두 직각변이면 빗변이 필요하고, 하나가 빗변이면 미지 직각변이 필요합니다. 맞는 공식이나 계산기 모드를 선택합니다. 두 측정값을 같은 단위로 입력합니다. 계산한 뒤 검증합니다. 빗변은 가장 길어야 하며, a² + b² = c²에 다시 대입하면 양변이 균형을 이루어야 합니다. 단위와 반올림을 확인합니다. 이 단계를 따르면 직각삼각형의 변 문제를 어떤 것이든 안정적으로 풀 수 있습니다. 이 페이지 상단의 계산기로 돌아가서 숫자를 계산해 보십시오."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "직각삼각형의 미지 변은 어떻게 계산합니까?",
        "answer": "피타고라스 정리를 사용합니다. a² + b² = c²입니다. 두 직각변을 알면 c = √(a² + b²)로 계산합니다. 빗변과 한 직각변을 알면 미지 직각변을 √(c² − 알려진 직각변²)로 계산합니다. 변 길이가 정확히 두 개 필요합니다. 한 변만으로는, 각도만으로는 이 정리가 동작하지 않습니다."
      },
      {
        "question": "두 변을 알면 미지 변을 구할 수 있습니까?",
        "answer": "네. 두 변이면 충분합니다. 알려진 두 변이 직각변이면 빗변 공식을 사용하고, 알려진 한 변이 빗변이면 미지 직각변 공식을 사용합니다. 계산기는 빗변이 입력값에 포함되어 있는지를 기준으로 어느 모드가 적용되는지 판단합니다."
      },
      {
        "question": "빗변은 어떻게 구합니까?",
        "answer": "두 직각변을 각각 제곱하고, 제곱들을 더한 뒤, 제곱근을 취합니다. 직각변 6과 8의 경우: 6² + 8² = 36 + 64 = 100, √100 = 10. 빗변은 항상 가장 긴 변이므로, 답이 두 직각변보다 큰지 확인합니다."
      },
      {
        "question": "미지 직각변은 어떻게 구합니까?",
        "answer": "빗변과 알려진 직각변을 각각 제곱하고, 빗변 제곱에서 직각변 제곱을 뺀 뒤, 제곱근을 취합니다. 빗변 13과 직각변 5의 경우: 169 − 25 = 144, √144 = 12. 결과는 빗변보다 짧아야 합니다."
      },
      {
        "question": "피타고라스 정리 공식은 무엇입니까?",
        "answer": "공식은 a² + b² = c²이며, 여기서 a와 b는 직각변(직각을 이루는 변), c는 빗변(직각의 맞은편 변)입니다. 이 관계는 모든 직각삼각형에 성립합니다."
      },
      {
        "question": "빗변이 항상 가장 긴 변입니까?",
        "answer": "네. 빗변은 가장 큰 각(90도)의 맞은편에 있어 꼭짓점 사이의 거리가 가장 깁니다. 어떤 삼각형에서든 가장 긴 변은 가장 큰 각의 맞은편에 있습니다. 계산한 빗변이 직각변보다 짧으면 입력값을 다시 확인합니다."
      },
      {
        "question": "피타고라스 정리를 모든 삼각형에 사용할 수 있습니까?",
        "answer": "아니요, 직각삼각형에만 사용할 수 있습니다. 이 정리는 90도 각에 의존합니다. 예각삼각형이나 둔각삼각형에는 코사인 법칙을 사용합니다. 직각삼각형이 아닌 삼각형에 피타고라스를 적용하면 틀린 결과가 나옵니다."
      },
      {
        "question": "답이 소수로 나오면 어떻게 합니까?",
        "answer": "소수는 정상입니다. 대부분의 직각삼각형은 자연수 변을 갖지 않습니다. 완전한 정밀도로 계산한 뒤, 최종 답을 입력값의 정밀도에 맞추어 반올림합니다. 예를 들어 √42.25 = 6.5는 정확하지만, √50 ≈ 7.071은 반올림이 필요합니다."
      },
      {
        "question": "직각삼각형의 두 직각변이 같을 수 있습니까?",
        "answer": "네. 직각변이 같고 빗변이 직각변 × √2인 45-45-90 이등변 직각삼각형입니다. 직각변이 5이면 빗변은 5√2 ≈ 7.071입니다."
      },
      {
        "question": "빗변이 알려진 직각변보다 작으면 어떻게 합니까?",
        "answer": "입력값이 잘못되었습니다. 빗변은 가장 긴 변이어야 합니다. 표기를 바꾼 것일 가능성이 큽니다. 가장 긴 측정값을 빗변(c)으로 지정하고 다시 계산합니다."
      },
      {
        "question": "한 각과 한 변으로 미지 변을 계산할 수 있습니까?",
        "answer": "네, 하지만 피타고라스 정리만으로는 안 됩니다. 삼각비인 사인, 코사인, 탄젠트를 사용합니다. 알려진 변과 각을 미지 변과 연결해 줍니다. 이 사이트에는 각도로 변을 구하는 전용 계산기가 있습니다."
      },
      {
        "question": "답이 맞는지 어떻게 확인합니까?",
        "answer": "세 변을 모두 a² + b² = c²에 다시 대입합니다. 빗변이 가장 긴지 확인합니다. 숫자들이 알려진 피타고라스 수를 이루는지 확인합니다. 빗변은 긴 직각변과 두 직각변의 합 사이에 있어야 함을 어림으로 확인합니다."
      }
    ],
    "relatedHeading": "도움이 될 만한 다른 직각삼각형 계산기",
    "relatedIntro": "미지 변을 구한 뒤에는 이 관련 계산기들로 삼각형 분석을 이어갑니다.",
    "relatedItems": [
      "직각삼각형 계산기",
      "직각삼각형 각 계산기",
      "각도를 이용한 직각삼각형 변 계산기",
      "직각삼각형 넓이 계산기",
      "직각삼각형 둘레 및 반둘레 계산기",
      "특수 직각삼각형 계산기",
      "피타고라스 수 계산기"
    ]
  },
  "ms": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "side-intro": "Cara Mencari Sisi yang Hilang",
      "side-anatomy": "Memahami Ketiga-tiga Sisi",
      "side-pythagoras": "Teorem Pythagoras",
      "side-hypotenuse": "Mencari Hipotenus",
      "side-leg": "Mencari Kaki yang Hilang",
      "side-howto": "Menggunakan Kalkulator",
      "side-formulas": "Rumus Secara Ringkas",
      "side-applications": "Contoh Kehidupan Sebenar",
      "side-triples": "Tigaan Pythagoras",
      "side-units": "Unit dan Kejituan",
      "side-invalid": "Input Tidak Sah",
      "side-verify": "Mengesahkan Jawapan Anda",
      "side-mistakes": "Kesilapan Lazim",
      "side-beyond": "Apabila Pythagoras Tidak Mencukupi",
      "side-related": "Kalkulator Berkaitan",
      "side-faq": "Soalan Lazim"
    },
    "sections": {
      "side-intro": {
        "h2": "Cara Mencari Sisi yang Hilang bagi Segi Tiga Bersudut Tepat",
        "h3s": [],
        "paragraphs": [
          "Kalkulator sisi segi tiga bersudut tepat mencari panjang yang tidak diketahui dalam segi tiga bersudut tepat apabila anda tahu dua sisi yang lain. Kegunaan lazim termasuk mengukur pepenjuru bilik, menyemak rasuk sokongan, atau mengesahkan jawapan kerja rumah. Kalkulator memerlukan tepat dua panjang sisi untuk berfungsi. Ia menggunakan teorem Pythagoras yang mengaitkan ketiga-tiga sisi setiap segi tiga bersudut tepat. Mencari hipotenus menggunakan penambahan di bawah punca kuasa dua, manakala mencari kaki yang hilang menggunakan penolakan. Kaedah ini hanya berfungsi untuk segi tiga bersudut tepat, kerana hubungan ini bergantung pada sudut 90 darjah. Contohnya, segi tiga bersudut tepat dengan sisi berserenjang 6 cm dan 8 cm mempunyai hipotenus 10 cm. Prinsip yang sama ini mengukur jarak sebenar, daripada panjang tangga hingga pepenjuru skrin."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator sisi segi tiga bersudut tepat mencari panjang yang tidak diketahui dalam segi tiga bersudut tepat apabila anda tahu dua sisi yang lain. Kegunaan lazim termasuk mengukur pepenjuru bilik, menyemak rasuk sokongan, atau mengesahkan jawapan kerja rumah. Kalkulator memerlukan tepat dua panjang sisi untuk berfungsi. Ia menggunakan teorem Pythagoras yang mengaitkan ketiga-tiga sisi setiap segi tiga bersudut tepat. Mencari hipotenus menggunakan penambahan di bawah punca kuasa dua, manakala mencari kaki yang hilang menggunakan penolakan. Kaedah ini hanya berfungsi untuk segi tiga bersudut tepat, kerana hubungan ini bergantung pada sudut 90 darjah. Contohnya, segi tiga bersudut tepat dengan sisi berserenjang 6 cm dan 8 cm mempunyai hipotenus 10 cm. Prinsip yang sama ini mengukur jarak sebenar, daripada panjang tangga hingga pepenjuru skrin."
          }
        ]
      },
      "side-anatomy": {
        "h2": "Memahami Ketiga-tiga Sisi Segi Tiga Bersudut Tepat",
        "h3s": [
          "Apakah Segi Tiga Bersudut Tepat?",
          "Apakah Hipotenus?",
          "Apakah Dua Kaki Itu?",
          "Bagaimana Anda Boleh Mengenal Pasti Sisi yang Betul?"
        ],
        "paragraphs": [
          "Segi tiga bersudut tepat mengandungi satu sudut yang berukuran tepat 90 darjah, sama seperti sudut segi empat sama atau segi empat tepat. Dua sudut yang lain mestilah tirus, bermaksud setiap satunya berukuran kurang daripada 90 darjah. Memandangkan jumlah sudut segi tiga ialah 180 darjah, dua sudut bukan tepat itu berjumlah 90 darjah. Ini berbeza dengan segi tiga tirus (semua sudut di bawah 90°) dan segi tiga cakah (satu sudut melebihi 90°). Sudut tepat mewujudkan hubungan berserenjang di sebalik teorem Pythagoras.",
          "Hipotenus terletak bertentangan dengan sudut tepat, merentang dari sudut 90 darjah. Ia sentiasa sisi terpanjang kerana merangkumi jarak terbesar antara mana-mana dua bucu. Dalam rajah yang diputar, sisi yang tidak menyentuh penanda sudut tepat ialah hipotenus. Kalkulator ini melabelkannya c, mengikut kelaziman piawai di mana c menandakan hipotenus dalam rumus [[a^2 + b^2 = c^2]].",
          "Kaki ialah dua sisi yang membentuk sudut tepat, bertemu pada 90 darjah. Ia dilabelkan a dan b dalam kalkulator ini. Menukar label tidak mengubah hipotenus, kerana a² + b² sama dengan b² + a². Kalkulator memisahkannya supaya mod kaki-hilang tahu kaki mana yang perlu diselesaikan. Apabila anda tahu kedua-dua kaki, mana-mana susunan boleh digunakan untuk mencari hipotenus.",
          "Cari penanda sudut tepat (segi empat kecil). Sisi yang bertentangan ialah hipotenus; dua sisi yang menyentuhnya ialah kaki. Untuk rajah yang diputar, bayangkan memutar segi tiga sehingga sudut tepat berada di kiri bawah dengan satu kaki mengufuk dan satu lagi menegak. Tanpa penanda sudut tepat, sahkan segi tiga itu bersudut tepat sebelum menggunakan kalkulator ini."
        ],
        "blocks": [
          {
            "kind": "h3",
            "text": "Apakah Segi Tiga Bersudut Tepat?"
          },
          {
            "kind": "p",
            "text": "Segi tiga bersudut tepat mengandungi satu sudut yang berukuran tepat 90 darjah, sama seperti sudut segi empat sama atau segi empat tepat. Dua sudut yang lain mestilah tirus, bermaksud setiap satunya berukuran kurang daripada 90 darjah. Memandangkan jumlah sudut segi tiga ialah 180 darjah, dua sudut bukan tepat itu berjumlah 90 darjah. Ini berbeza dengan segi tiga tirus (semua sudut di bawah 90°) dan segi tiga cakah (satu sudut melebihi 90°). Sudut tepat mewujudkan hubungan berserenjang di sebalik teorem Pythagoras."
          },
          {
            "kind": "h3",
            "text": "Apakah Hipotenus?"
          },
          {
            "kind": "p",
            "text": "Hipotenus terletak bertentangan dengan sudut tepat, merentang dari sudut 90 darjah. Ia sentiasa sisi terpanjang kerana merangkumi jarak terbesar antara mana-mana dua bucu. Dalam rajah yang diputar, sisi yang tidak menyentuh penanda sudut tepat ialah hipotenus. Kalkulator ini melabelkannya c, mengikut kelaziman piawai di mana c menandakan hipotenus dalam rumus [[a^2 + b^2 = c^2]]."
          },
          {
            "kind": "h3",
            "text": "Apakah Dua Kaki Itu?"
          },
          {
            "kind": "p",
            "text": "Kaki ialah dua sisi yang membentuk sudut tepat, bertemu pada 90 darjah. Ia dilabelkan a dan b dalam kalkulator ini. Menukar label tidak mengubah hipotenus, kerana a² + b² sama dengan b² + a². Kalkulator memisahkannya supaya mod kaki-hilang tahu kaki mana yang perlu diselesaikan. Apabila anda tahu kedua-dua kaki, mana-mana susunan boleh digunakan untuk mencari hipotenus."
          },
          {
            "kind": "h3",
            "text": "Bagaimana Anda Boleh Mengenal Pasti Sisi yang Betul?"
          },
          {
            "kind": "p",
            "text": "Cari penanda sudut tepat (segi empat kecil). Sisi yang bertentangan ialah hipotenus; dua sisi yang menyentuhnya ialah kaki. Untuk rajah yang diputar, bayangkan memutar segi tiga sehingga sudut tepat berada di kiri bawah dengan satu kaki mengufuk dan satu lagi menegak. Tanpa penanda sudut tepat, sahkan segi tiga itu bersudut tepat sebelum menggunakan kalkulator ini."
          }
        ],
        "imgAlt": "Segi tiga bersudut tepat berlabel yang menunjukkan kaki a dan b, hipotenus c, sudut tepat di C, serta sudut tirus A dan B",
        "figcaption": "Bahagian segi tiga bersudut tepat: kaki a dan b membentuk sudut tepat di C, hipotenus c bertentangan dengannya, dengan sudut tirus A dan B."
      },
      "side-pythagoras": {
        "h2": "Bagaimana Teorem Pythagoras Mengira Sisi Segi Tiga",
        "h3s": [
          "Memahami Mengapa Rumus Ini Berfungsi"
        ],
        "paragraphs": [
          "Teorem Pythagoras menyatakan bahawa [[a^2 + b^2 = c^2]], di mana a dan b ialah kaki dan c ialah hipotenus. Setiap pemboleh ubah ialah panjang sisi. Pengkuadratan mendarabkan nombor dengan dirinya sendiri (6² = 36); punca kuasa dua membalikkannya (√100 = 10). Anda mengambil punca kerana rumus mengaitkan panjang terkuasa dua, bukan panjang itu sendiri. Menambah panjang kaki (6 + 8 = 14) adalah salah; tambah kuasa duanya (36 + 64 = 100), kemudian ambil puncanya. Teorem memerlukan sudut 90 darjah; segi tiga bukan tepat memerlukan Hukum Kosinus. Ketiga-tiga mod kalkulator menyusun semula persamaan ini: [[c = \\sqrt{a^2 + b^2}]], [[b = \\sqrt{c^2 - a^2}]], [[a = \\sqrt{c^2 - b^2}]].",
          "Lukis segi empat sama pada setiap sisi: luas a², b² dan c². Teorem menyatakan dua luas yang lebih kecil berjumlah kepada yang terbesar. Untuk 3-4-5: segi empat sama 9 dan 16 unit persegi berjumlah 25, luas segi empat sama hipotenus. Pengkuadratan penting kerana anda membandingkan luas, bukan panjang."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Teorem Pythagoras menyatakan bahawa [[a^2 + b^2 = c^2]], di mana a dan b ialah kaki dan c ialah hipotenus. Setiap pemboleh ubah ialah panjang sisi. Pengkuadratan mendarabkan nombor dengan dirinya sendiri (6² = 36); punca kuasa dua membalikkannya (√100 = 10). Anda mengambil punca kerana rumus mengaitkan panjang terkuasa dua, bukan panjang itu sendiri. Menambah panjang kaki (6 + 8 = 14) adalah salah; tambah kuasa duanya (36 + 64 = 100), kemudian ambil puncanya. Teorem memerlukan sudut 90 darjah; segi tiga bukan tepat memerlukan Hukum Kosinus. Ketiga-tiga mod kalkulator menyusun semula persamaan ini: [[c = \\sqrt{a^2 + b^2}]], [[b = \\sqrt{c^2 - a^2}]], [[a = \\sqrt{c^2 - b^2}]]."
          },
          {
            "kind": "h3",
            "text": "Memahami Mengapa Rumus Ini Berfungsi"
          },
          {
            "kind": "p",
            "text": "Lukis segi empat sama pada setiap sisi: luas a², b² dan c². Teorem menyatakan dua luas yang lebih kecil berjumlah kepada yang terbesar. Untuk 3-4-5: segi empat sama 9 dan 16 unit persegi berjumlah 25, luas segi empat sama hipotenus. Pengkuadratan penting kerana anda membandingkan luas, bukan panjang."
          }
        ],
        "imgAlt": "Segi tiga bersudut tepat 3-4-5 dengan segi empat sama pada setiap sisi berlabel 9, 16 dan 25 unit persegi yang menunjukkan 9 tambah 16 sama dengan 25",
        "figcaption": "Bukti visual: segi empat sama 9 dan 16 unit persegi pada kaki bergabung menjadi segi empat sama 25 unit persegi pada hipotenus."
      },
      "side-hypotenuse": {
        "h2": "Cara Mencari Hipotenus Menggunakan Dua Kaki",
        "h3s": [
          "Contoh 1: Mencari Hipotenus Segi Tiga Bersudut Tepat 6-8",
          "Contoh 2: Mencari Hipotenus dengan Ukuran Perpuluhan",
          "Bilakah Anda Harus Menggunakan Mod Kalkulator Ini?"
        ],
        "paragraphs": [
          "Menyelesaikan [[a^2 + b^2 = c^2]] untuk c menghasilkan [[c = \\sqrt{a^2 + b^2}]]. Prosesnya: kenal pasti kedua-dua kaki, kuasa duakan setiap satu, tambah kuasa duanya, ambil punca, tulis unit, dan sahkan hasilnya melebihi kedua-dua kaki.",
          "Diberi kaki a = 6 cm dan b = 8 cm: kuasa duakan setiap satu (36 dan 64), tambah (100), ambil punca (10). Hipotenusnya ialah 10 cm, melebihi kedua-dua kaki seperti yang dijangka.",
          "Diberi a = 2.5 m, b = 6 m: 2.5² + 6² = 6.25 + 36 = 42.25, √42.25 = 6.5 m. Perpuluhan memerlukan aritmetik yang teliti; kekalkan kejituan penuh sehingga pembundaran akhir.",
          "Gunakan mod hipotenus dengan dua kaki yang diketahui: pepenjuru bilik, pendakap sokongan, atau masalah geometri yang memberikan sisi berserenjang. Dengan hipotenus ditambah satu kaki, tukar kepada mod kaki-hilang."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Menyelesaikan [[a^2 + b^2 = c^2]] untuk c menghasilkan [[c = \\sqrt{a^2 + b^2}]]. Prosesnya: kenal pasti kedua-dua kaki, kuasa duakan setiap satu, tambah kuasa duanya, ambil punca, tulis unit, dan sahkan hasilnya melebihi kedua-dua kaki."
          },
          {
            "kind": "h3",
            "text": "Contoh 1: Mencari Hipotenus Segi Tiga Bersudut Tepat 6-8"
          },
          {
            "kind": "p",
            "text": "Diberi kaki a = 6 cm dan b = 8 cm: kuasa duakan setiap satu (36 dan 64), tambah (100), ambil punca (10). Hipotenusnya ialah 10 cm, melebihi kedua-dua kaki seperti yang dijangka."
          },
          {
            "kind": "h3",
            "text": "Contoh 2: Mencari Hipotenus dengan Ukuran Perpuluhan"
          },
          {
            "kind": "p",
            "text": "Diberi a = 2.5 m, b = 6 m: 2.5² + 6² = 6.25 + 36 = 42.25, √42.25 = 6.5 m. Perpuluhan memerlukan aritmetik yang teliti; kekalkan kejituan penuh sehingga pembundaran akhir."
          },
          {
            "kind": "h3",
            "text": "Bilakah Anda Harus Menggunakan Mod Kalkulator Ini?"
          },
          {
            "kind": "p",
            "text": "Gunakan mod hipotenus dengan dua kaki yang diketahui: pepenjuru bilik, pendakap sokongan, atau masalah geometri yang memberikan sisi berserenjang. Dengan hipotenus ditambah satu kaki, tukar kepada mod kaki-hilang."
          }
        ]
      },
      "side-leg": {
        "h2": "Cara Mencari Kaki yang Hilang bagi Segi Tiga Bersudut Tepat",
        "h3s": [
          "Cari Kaki b Apabila Hipotenus c dan Kaki a Diketahui",
          "Contoh 3: Cari Kaki b daripada Hipotenus 13 cm",
          "Cari Kaki a Apabila Hipotenus c dan Kaki b Diketahui",
          "Contoh 4: Mencari Kaki yang Tidak Diketahui"
        ],
        "paragraphs": [
          "Apabila anda tahu hipotenus dan satu kaki, susun semula teorem Pythagoras untuk mengasingkan kaki yang tidak diketahui. Bermula daripada [[a^2 + b^2 = c^2]], tolak kuasa dua kaki yang diketahui daripada kedua-dua belah. Ini menghasilkan dua rumus, satu untuk setiap kaki.",
          "Rumusnya ialah [[b = \\sqrt{c^2 - a^2}]]. Terbitkannya: mulakan dengan [[a^2 + b^2 = c^2]], tolak a² daripada kedua-dua belah untuk mendapatkan [[b^2 = c^2 - a^2]], kemudian ambil punca kuasa dua. Penolakan mencerminkan bahawa kuasa dua hipotenus mengandungi kedua-dua kuasa dua kaki, jadi membuang satu meninggalkannya yang satu lagi.",
          "Diberi c = 13 cm dan a = 5 cm, cari kaki b. Kuasa duakan kedua-duanya: 13² = 169 dan 5² = 25. Tolak: 169 − 25 = 144. Ambil punca: √144 = 12. Kaki b berukuran 12 cm. Sahkan: 5² + 12² = 25 + 144 = 169 = 13². Tigaan 5-12-13 mengesahkan hasilnya.",
          "Rumusnya ialah [[a = \\sqrt{c^2 - b^2}]]. Kaki boleh ditukar ganti dalam hubungan Pythagoras; melabelkan satu sebagai a dan satu lagi sebagai b ialah kelaziman. Kalkulator menawarkan kedua-dua mod supaya anda boleh memadankan label medan dengan masalah khusus anda tanpa menukar pemboleh ubah secara mental.",
          "Diberi c = 17 inci dan b = 15 inci, cari kaki a. Kuasa dua: 17² = 289 dan 15² = 225. Tolak: 289 − 225 = 64. Ambil punca: √64 = 8. Kaki a ialah 8 inci. Ini ialah tigaan 8-15-17. Kedua-dua mod kaki-hilang hanya berbeza pada kaki yang diketahui; matematiknya serupa."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Apabila anda tahu hipotenus dan satu kaki, susun semula teorem Pythagoras untuk mengasingkan kaki yang tidak diketahui. Bermula daripada [[a^2 + b^2 = c^2]], tolak kuasa dua kaki yang diketahui daripada kedua-dua belah. Ini menghasilkan dua rumus, satu untuk setiap kaki."
          },
          {
            "kind": "h3",
            "text": "Cari Kaki b Apabila Hipotenus c dan Kaki a Diketahui"
          },
          {
            "kind": "p",
            "text": "Rumusnya ialah [[b = \\sqrt{c^2 - a^2}]]. Terbitkannya: mulakan dengan [[a^2 + b^2 = c^2]], tolak a² daripada kedua-dua belah untuk mendapatkan [[b^2 = c^2 - a^2]], kemudian ambil punca kuasa dua. Penolakan mencerminkan bahawa kuasa dua hipotenus mengandungi kedua-dua kuasa dua kaki, jadi membuang satu meninggalkannya yang satu lagi."
          },
          {
            "kind": "h3",
            "text": "Contoh 3: Cari Kaki b daripada Hipotenus 13 cm"
          },
          {
            "kind": "p",
            "text": "Diberi c = 13 cm dan a = 5 cm, cari kaki b. Kuasa duakan kedua-duanya: 13² = 169 dan 5² = 25. Tolak: 169 − 25 = 144. Ambil punca: √144 = 12. Kaki b berukuran 12 cm. Sahkan: 5² + 12² = 25 + 144 = 169 = 13². Tigaan 5-12-13 mengesahkan hasilnya."
          },
          {
            "kind": "h3",
            "text": "Cari Kaki a Apabila Hipotenus c dan Kaki b Diketahui"
          },
          {
            "kind": "p",
            "text": "Rumusnya ialah [[a = \\sqrt{c^2 - b^2}]]. Kaki boleh ditukar ganti dalam hubungan Pythagoras; melabelkan satu sebagai a dan satu lagi sebagai b ialah kelaziman. Kalkulator menawarkan kedua-dua mod supaya anda boleh memadankan label medan dengan masalah khusus anda tanpa menukar pemboleh ubah secara mental."
          },
          {
            "kind": "h3",
            "text": "Contoh 4: Mencari Kaki yang Tidak Diketahui"
          },
          {
            "kind": "p",
            "text": "Diberi c = 17 inci dan b = 15 inci, cari kaki a. Kuasa dua: 17² = 289 dan 15² = 225. Tolak: 289 − 225 = 64. Ambil punca: √64 = 8. Kaki a ialah 8 inci. Ini ialah tigaan 8-15-17. Kedua-dua mod kaki-hilang hanya berbeza pada kaki yang diketahui; matematiknya serupa."
          }
        ],
        "imgAlt": "Rajah berpecah yang menunjukkan dua segi tiga bersudut tepat yang menyelesaikan kaki yang hilang menggunakan teorem Pythagoras",
        "figcaption": "Dua pengiraan kaki hilang: mencari b daripada segi tiga 5-12-13 dan mencari a daripada segi tiga 8-15-17.",
        "table": {
          "headers": [
            "Diketahui",
            "Cari",
            "Rumus",
            "Mod Kalkulator"
          ],
          "rows": [
            [
              "c = 13, a = 5",
              "b",
              "b = √(c² − a²)",
              "Kaki Hilang dari c dan a"
            ],
            [
              "c = 17, b = 15",
              "a",
              "a = √(c² − b²)",
              "Kaki Hilang dari c dan b"
            ]
          ]
        }
      },
      "side-howto": {
        "h2": "Cara Menggunakan Kalkulator Sisi Segi Tiga Bersudut Tepat",
        "h3s": [],
        "paragraphs": [
          "Kalkulator tidak menyimpan hasil atau menjana laporan yang boleh dimuat turun. Gunakan pilihan tetapkan semula untuk mengosongkan medan bagi pengiraan baharu."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator tidak menyimpan hasil atau menjana laporan yang boleh dimuat turun. Gunakan pilihan tetapkan semula untuk mengosongkan medan bagi pengiraan baharu."
          }
        ],
        "list": [
          {
            "lead": "Kenal pasti dua ukuran yang anda tahu.",
            "text": "Kedua-duanya mestilah panjang sisi, bukan sudut."
          },
          {
            "lead": "Tentukan sama ada nilai yang hilang ialah hipotenus atau kaki.",
            "text": "Jika anda tahu kedua-dua kaki, anda memerlukan hipotenus. Jika anda tahu hipotenus dan satu kaki, anda memerlukan kaki yang satu lagi."
          },
          {
            "lead": "Pilih mod yang betul.",
            "text": "Pilih \"Teorem Pythagoras\" untuk dua kaki yang diketahui, \"Kaki Hilang dari c dan a\" apabila anda tahu hipotenus dan kaki a, atau \"Kaki Hilang dari c dan b\" apabila anda tahu hipotenus dan kaki b."
          },
          {
            "lead": "Masukkan kedua-dua ukuran ke dalam medan yang sepadan.",
            "text": "Semak semula bahawa setiap nilai dimasukkan ke dalam medan yang betul; menukar hipotenus dengan kaki akan menghasilkan ralat."
          },
          {
            "lead": "Pilih unit ukuran.",
            "text": "Gunakan unit yang sama untuk kedua-dua input."
          },
          {
            "lead": "Kira.",
            "text": "Hasil dipaparkan bersama langkah penyelesaian yang menunjukkan penggantian dan pengiraan."
          },
          {
            "lead": "Semak hasil dan langkah.",
            "text": "Pastikan rumus sepadan dengan situasi anda dan pengiraan kelihatan betul."
          },
          {
            "lead": "Pastikan jawapan masuk akal.",
            "text": "Hipotenus mestilah melebihi kedua-dua kaki. Kaki yang hilang mestilah lebih pendek daripada hipotenus. Jika tidak, semak semula input anda."
          }
        ]
      },
      "side-formulas": {
        "h2": "Rumus Sisi Segi Tiga Bersudut Tepat Secara Ringkas",
        "h3s": [],
        "paragraphs": [
          "Anda tidak perlu menghafal tiga rumus berasingan. Ingat sahaja [[a^2 + b^2 = c^2]], kemudian selesaikan untuk yang tidak diketahui. Jika c tidak diketahui, tambah kuasa dua kaki dan ambil puncanya. Jika kaki tidak diketahui, tolak kuasa dua kaki yang diketahui daripada c² dan ambil puncanya. Nama mod kalkulator memberitahu anda susunan mana yang perlu digunakan."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Anda tidak perlu menghafal tiga rumus berasingan. Ingat sahaja [[a^2 + b^2 = c^2]], kemudian selesaikan untuk yang tidak diketahui. Jika c tidak diketahui, tambah kuasa dua kaki dan ambil puncanya. Jika kaki tidak diketahui, tolak kuasa dua kaki yang diketahui daripada c² dan ambil puncanya. Nama mod kalkulator memberitahu anda susunan mana yang perlu digunakan."
          }
        ],
        "table": {
          "headers": [
            "Ukuran Diketahui",
            "Sisi yang Hilang",
            "Rumus",
            "Mod Kalkulator",
            "Contoh"
          ],
          "rows": [
            [
              "Kaki a dan b",
              "Hipotenus c",
              "c = √(a² + b²)",
              "Teorem Pythagoras",
              "a=6, b=8 → c=10"
            ],
            [
              "Hipotenus c, kaki a",
              "Kaki b",
              "b = √(c² − a²)",
              "Kaki Hilang dari c dan a",
              "c=13, a=5 → b=12"
            ],
            [
              "Hipotenus c, kaki b",
              "Kaki a",
              "a = √(c² − b²)",
              "Kaki Hilang dari c dan b",
              "c=17, b=15 → a=8"
            ]
          ]
        }
      },
      "side-applications": {
        "h2": "Contoh Kehidupan Sebenar Pengiraan Sisi Segi Tiga Bersudut Tepat",
        "h3s": [
          "Contoh 5: Tangga Bersandar pada Dinding",
          "Contoh 6: Pepenjuru Bilik Segi Empat Tepat",
          "Contoh 7: Panjang Kasau Bumbung",
          "Contoh 8: Pepenjuru TV atau Monitor",
          "Contoh 9: Mengukur Tanjakan",
          "Contoh 10: Laluan Taman Segi Empat Tepat",
          "Contoh 11: Pendakap Sokongan dengan Pepenjuru Diketahui",
          "Contoh 12: Lukisan Kejuruteraan dengan Nilai Perpuluhan"
        ],
        "paragraphs": [
          "Sebatang tangga mencapai 2.4 m secara menegak ke atas dinding, dengan tapaknya 1.8 m dari dinding. Dinding dan tanah membentuk sudut tepat, mewujudkan segi tiga bersudut tepat di mana tangga ialah hipotenus. Diketahui: a = 1.8 m (tapak), b = 2.4 m (tinggi). Cari: c (panjang tangga). Rumus: [[c = \\sqrt{a^2 + b^2}]]. Gantikan: c = √(1.8² + 2.4²) = √(3.24 + 5.76) = √9 = 3. Tangga berukuran 3 m. Ini memberitahu anda panjang tangga yang diperlukan untuk mencapai ketinggian itu pada jarak tersebut. Nota: geometri ini tidak menilai keselamatan tangga; ikuti garis panduan pengeluar dan peraturan keselamatan untuk penggunaan sebenar.",
          "Sebuah bilik berukuran 9 ft panjang dan 12 ft lebar. Pepenjuru antara sudut bertentangan membentuk hipotenus segi tiga bersudut tepat dengan dinding sebagai kaki. Diketahui: a = 9 ft, b = 12 ft. Cari: c. Rumus: c = √(9² + 12²) = √(81 + 144) = √225 = 15. Pepenjurunya ialah 15 ft. Ini membantu apabila menyemak sama ada bilik itu segi empat tepat (kedua-dua pepenjuru harus sepadan) atau menentukan jarak garis lurus terpanjang untuk penempatan perabot.",
          "Keratan rentas bumbung yang dipermudahkan mempunyai rentang mengufuk 12 ft dan kenaikan menegak 5 ft. Kasau membentuk hipotenus. Diketahui: rentang = 12 ft, kenaikan = 5 ft. Cari: panjang kasau. Rumus: c = √(12² + 5²) = √(144 + 25) = √169 = 13. Kasau itu 13 ft panjang. Pengiraan asas ini tidak termasuk unjuran, ketebalan rabung, dan elaun sambungan yang diperlukan dalam pembinaan sebenar. Rujuk pelan bangunan untuk spesifikasi lengkap.",
          "Paparan segi empat tepat berukuran 16 inci lebar dan 9 inci tinggi. Pepenjurunya ialah hipotenus. Diketahui: lebar = 16 in, tinggi = 9 in. Cari: pepenjuru. Rumus: d = √(16² + 9²) = √(256 + 81) = √337 ≈ 18.36. Pepenjurunya berukuran kira-kira 18.36 inci. Ini menggunakan dimensi yang dinyatakan; saiz skrin komersial mungkin berbeza berdasarkan kaedah pengukuran pengeluar.",
          "Tanjakan mempunyai rentang mengufuk 6 m dan kenaikan 0.75 m. Permukaan condong ialah hipotenus. Diketahui: rentang = 6 m, kenaikan = 0.75 m. Cari: panjang cerun. Rumus: s = √(6² + 0.75²) = √(36 + 0.5625) = √36.5625 ≈ 6.05. Cerun berukuran kira-kira 6.05 m. Rentang mengufuk (6 m) berbeza daripada panjang cerun (6.05 m); cerun sentiasa sedikit lebih panjang. Ini tidak mengesahkan pematuhan kebolehcapaian; semak kod bangunan tempatan untuk keperluan tanjakan.",
          "Taman segi empat tepat 30 ft lebar dan 40 ft panjang. Laluan pepenjuru memotong merentasinya. Diketahui: a = 30 ft, b = 40 ft. Cari: panjang laluan. Rumus: c = √(30² + 40²) = √(900 + 1600) = √2500 = 50. Laluannya 50 ft. Berjalan mengikut pepenjuru (50 ft) lebih pendek daripada berjalan di sepanjang dua sisi (70 ft), itulah sebabnya laluan pepenjuru menjimatkan masa.",
          "Pendakap sokongan berukuran 10 ft panjang (hipotenus) dan merentang 8 ft secara mengufuk. Cari jarak menegak. Diketahui: c = 10 ft, a = 8 ft. Cari: b. Rumus: b = √(c² − a²) = √(100 − 64) = √36 = 6. Jarak menegaknya ialah 6 ft. Penolakan perlu kerana kuasa dua hipotenus mengandungi kedua-dua kuasa dua kaki; membuang komponen mengufuk yang diketahui meninggalkan yang menegak.",
          "Reka bentuk pendakap menetapkan hipotenus 250 mm dan satu kaki 70 mm. Cari kaki yang satu lagi. Diketahui: c = 250 mm, b = 70 mm. Cari: a. Rumus: a = √(c² − b²) = √(62500 − 4900) = √57600 = 240. Kaki itu berukuran 240 mm. Dengan input milimeter, hasilnya tepat di sini, tetapi dalam amalan bundarkan mengikut kejituan ukuran anda yang paling tidak jitu. Jangan laporkan lebih banyak tempat perpuluhan daripada yang dapat diukur oleh alat anda."
        ],
        "blocks": [
          {
            "kind": "h3",
            "text": "Contoh 5: Tangga Bersandar pada Dinding"
          },
          {
            "kind": "p",
            "text": "Sebatang tangga mencapai 2.4 m secara menegak ke atas dinding, dengan tapaknya 1.8 m dari dinding. Dinding dan tanah membentuk sudut tepat, mewujudkan segi tiga bersudut tepat di mana tangga ialah hipotenus. Diketahui: a = 1.8 m (tapak), b = 2.4 m (tinggi). Cari: c (panjang tangga). Rumus: [[c = \\sqrt{a^2 + b^2}]]. Gantikan: c = √(1.8² + 2.4²) = √(3.24 + 5.76) = √9 = 3. Tangga berukuran 3 m. Ini memberitahu anda panjang tangga yang diperlukan untuk mencapai ketinggian itu pada jarak tersebut. Nota: geometri ini tidak menilai keselamatan tangga; ikuti garis panduan pengeluar dan peraturan keselamatan untuk penggunaan sebenar."
          },
          {
            "kind": "h3",
            "text": "Contoh 6: Pepenjuru Bilik Segi Empat Tepat"
          },
          {
            "kind": "p",
            "text": "Sebuah bilik berukuran 9 ft panjang dan 12 ft lebar. Pepenjuru antara sudut bertentangan membentuk hipotenus segi tiga bersudut tepat dengan dinding sebagai kaki. Diketahui: a = 9 ft, b = 12 ft. Cari: c. Rumus: c = √(9² + 12²) = √(81 + 144) = √225 = 15. Pepenjurunya ialah 15 ft. Ini membantu apabila menyemak sama ada bilik itu segi empat tepat (kedua-dua pepenjuru harus sepadan) atau menentukan jarak garis lurus terpanjang untuk penempatan perabot."
          },
          {
            "kind": "h3",
            "text": "Contoh 7: Panjang Kasau Bumbung"
          },
          {
            "kind": "p",
            "text": "Keratan rentas bumbung yang dipermudahkan mempunyai rentang mengufuk 12 ft dan kenaikan menegak 5 ft. Kasau membentuk hipotenus. Diketahui: rentang = 12 ft, kenaikan = 5 ft. Cari: panjang kasau. Rumus: c = √(12² + 5²) = √(144 + 25) = √169 = 13. Kasau itu 13 ft panjang. Pengiraan asas ini tidak termasuk unjuran, ketebalan rabung, dan elaun sambungan yang diperlukan dalam pembinaan sebenar. Rujuk pelan bangunan untuk spesifikasi lengkap."
          },
          {
            "kind": "h3",
            "text": "Contoh 8: Pepenjuru TV atau Monitor"
          },
          {
            "kind": "p",
            "text": "Paparan segi empat tepat berukuran 16 inci lebar dan 9 inci tinggi. Pepenjurunya ialah hipotenus. Diketahui: lebar = 16 in, tinggi = 9 in. Cari: pepenjuru. Rumus: d = √(16² + 9²) = √(256 + 81) = √337 ≈ 18.36. Pepenjurunya berukuran kira-kira 18.36 inci. Ini menggunakan dimensi yang dinyatakan; saiz skrin komersial mungkin berbeza berdasarkan kaedah pengukuran pengeluar."
          },
          {
            "kind": "h3",
            "text": "Contoh 9: Mengukur Tanjakan"
          },
          {
            "kind": "p",
            "text": "Tanjakan mempunyai rentang mengufuk 6 m dan kenaikan 0.75 m. Permukaan condong ialah hipotenus. Diketahui: rentang = 6 m, kenaikan = 0.75 m. Cari: panjang cerun. Rumus: s = √(6² + 0.75²) = √(36 + 0.5625) = √36.5625 ≈ 6.05. Cerun berukuran kira-kira 6.05 m. Rentang mengufuk (6 m) berbeza daripada panjang cerun (6.05 m); cerun sentiasa sedikit lebih panjang. Ini tidak mengesahkan pematuhan kebolehcapaian; semak kod bangunan tempatan untuk keperluan tanjakan."
          },
          {
            "kind": "h3",
            "text": "Contoh 10: Laluan Taman Segi Empat Tepat"
          },
          {
            "kind": "p",
            "text": "Taman segi empat tepat 30 ft lebar dan 40 ft panjang. Laluan pepenjuru memotong merentasinya. Diketahui: a = 30 ft, b = 40 ft. Cari: panjang laluan. Rumus: c = √(30² + 40²) = √(900 + 1600) = √2500 = 50. Laluannya 50 ft. Berjalan mengikut pepenjuru (50 ft) lebih pendek daripada berjalan di sepanjang dua sisi (70 ft), itulah sebabnya laluan pepenjuru menjimatkan masa."
          },
          {
            "kind": "h3",
            "text": "Contoh 11: Pendakap Sokongan dengan Pepenjuru Diketahui"
          },
          {
            "kind": "p",
            "text": "Pendakap sokongan berukuran 10 ft panjang (hipotenus) dan merentang 8 ft secara mengufuk. Cari jarak menegak. Diketahui: c = 10 ft, a = 8 ft. Cari: b. Rumus: b = √(c² − a²) = √(100 − 64) = √36 = 6. Jarak menegaknya ialah 6 ft. Penolakan perlu kerana kuasa dua hipotenus mengandungi kedua-dua kuasa dua kaki; membuang komponen mengufuk yang diketahui meninggalkan yang menegak."
          },
          {
            "kind": "h3",
            "text": "Contoh 12: Lukisan Kejuruteraan dengan Nilai Perpuluhan"
          },
          {
            "kind": "p",
            "text": "Reka bentuk pendakap menetapkan hipotenus 250 mm dan satu kaki 70 mm. Cari kaki yang satu lagi. Diketahui: c = 250 mm, b = 70 mm. Cari: a. Rumus: a = √(c² − b²) = √(62500 − 4900) = √57600 = 240. Kaki itu berukuran 240 mm. Dengan input milimeter, hasilnya tepat di sini, tetapi dalam amalan bundarkan mengikut kejituan ukuran anda yang paling tidak jitu. Jangan laporkan lebih banyak tempat perpuluhan daripada yang dapat diukur oleh alat anda."
          }
        ],
        "imgAlt": "Empat panel yang menunjukkan tangga bersandar pada dinding, pepenjuru bilik, kasau bumbung, dan laluan taman dengan ukuran segi tiga bersudut tepat",
        "figcaption": "Segi tiga bersudut tepat seharian: tangga (3 m), pepenjuru bilik (15 ft), kasau bumbung (13 ft), dan laluan taman (50 ft)."
      },
      "side-triples": {
        "h2": "Tigaan Pythagoras Lazim dan Mengapa Ia Penting",
        "h3s": [],
        "paragraphs": [
          "Tigaan Pythagoras terdiri daripada tiga nombor bulat yang memenuhi [[a^2 + b^2 = c^2]]. Tigaan ini memberikan semakan mental yang cepat; jika input anda sepadan dengan tigaan, anda tahu jawapannya tanpa mengira. Tigaan berskala juga berfungsi: mendarab 3-4-5 dengan 2 menghasilkan 6-8-10, yang masih memenuhi persamaan (36 + 64 = 100). Bukan setiap segi tiga bersudut tepat mempunyai sisi nombor bulat; kebanyakannya menghasilkan perpuluhan atau nombor tak nisbah.",
          "Sahkan 5-12-13: 5² = 25, 12² = 144, 25 + 144 = 169, √169 = 13. Sahkan 8-15-17: 8² = 64, 15² = 225, 64 + 225 = 289, √289 = 17. Apabila kalkulator anda mengembalikan nombor bulat, semak sama ada ia membentuk tigaan dengan input anda sebagai semakan kewarasan."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Tigaan Pythagoras terdiri daripada tiga nombor bulat yang memenuhi [[a^2 + b^2 = c^2]]. Tigaan ini memberikan semakan mental yang cepat; jika input anda sepadan dengan tigaan, anda tahu jawapannya tanpa mengira. Tigaan berskala juga berfungsi: mendarab 3-4-5 dengan 2 menghasilkan 6-8-10, yang masih memenuhi persamaan (36 + 64 = 100). Bukan setiap segi tiga bersudut tepat mempunyai sisi nombor bulat; kebanyakannya menghasilkan perpuluhan atau nombor tak nisbah."
          },
          {
            "kind": "p",
            "text": "Sahkan 5-12-13: 5² = 25, 12² = 144, 25 + 144 = 169, √169 = 13. Sahkan 8-15-17: 8² = 64, 15² = 225, 64 + 225 = 289, √289 = 17. Apabila kalkulator anda mengembalikan nombor bulat, semak sama ada ia membentuk tigaan dengan input anda sebagai semakan kewarasan."
          }
        ],
        "table": {
          "headers": [
            "Tigaan",
            "Pengesahan"
          ],
          "rows": [
            [
              "3-4-5",
              "9 + 16 = 25 ✓"
            ],
            [
              "5-12-13",
              "25 + 144 = 169 ✓"
            ],
            [
              "8-15-17",
              "64 + 225 = 289 ✓"
            ],
            [
              "7-24-25",
              "49 + 576 = 625 ✓"
            ],
            [
              "9-40-41",
              "81 + 1600 = 1681 ✓"
            ],
            [
              "6-8-10",
              "36 + 64 = 100 ✓ (scaled 3-4-5)"
            ]
          ]
        }
      },
      "side-units": {
        "h2": "Unit Ukuran, Jawapan Perpuluhan, dan Pembundaran",
        "h3s": [],
        "paragraphs": [
          "Gunakan unit yang konsisten: milimeter, sentimeter, meter, inci, kaki, ela, atau kilometer. Unit bercampur menghasilkan jawapan salah; 3 kaki dan 6 inci mestilah menjadi 3.5 kaki atau 42 inci sebelum mengira. Tukar dahulu, kemudian kira. Pilih unit yang sepadan dalam kalkulator untuk kedua-dua input. Bundarkan hanya selepas pengiraan akhir, bukan semasa langkah perantaraan, untuk mengelakkan ralat terkumpul. Jawapan tepat seperti 10 cm berbeza daripada perpuluhan dibundar seperti 6.50 m; yang kedua membayangkan kejituan ukuran. Hasil anda tidak boleh lebih jitu daripada input anda yang paling tidak jitu. Jika anda mengukur kepada sentimeter terdekat, jangan laporkan milimeter.",
          "Contoh dengan kaki dan inci: papan berukuran 2 ft 6 in dengan 3 ft. Tukar kepada inci: 30 in dan 36 in. Kira: c = √(30² + 36²) = √(900 + 1296) = √2196 ≈ 46.86 in. Tukar kembali: 46.86 in = 3 ft 10.86 in, atau kira-kira 3 ft 10.9 in.",
          "Nota: mengkuasa duakan panjang menghasilkan unit persegi (cm²), tetapi punca kuasa dua akhir mengembalikan unit linear (cm). Kalkulator mengendalikan ini secara automatik."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Gunakan unit yang konsisten: milimeter, sentimeter, meter, inci, kaki, ela, atau kilometer. Unit bercampur menghasilkan jawapan salah; 3 kaki dan 6 inci mestilah menjadi 3.5 kaki atau 42 inci sebelum mengira. Tukar dahulu, kemudian kira. Pilih unit yang sepadan dalam kalkulator untuk kedua-dua input. Bundarkan hanya selepas pengiraan akhir, bukan semasa langkah perantaraan, untuk mengelakkan ralat terkumpul. Jawapan tepat seperti 10 cm berbeza daripada perpuluhan dibundar seperti 6.50 m; yang kedua membayangkan kejituan ukuran. Hasil anda tidak boleh lebih jitu daripada input anda yang paling tidak jitu. Jika anda mengukur kepada sentimeter terdekat, jangan laporkan milimeter."
          },
          {
            "kind": "p",
            "text": "Contoh dengan kaki dan inci: papan berukuran 2 ft 6 in dengan 3 ft. Tukar kepada inci: 30 in dan 36 in. Kira: c = √(30² + 36²) = √(900 + 1296) = √2196 ≈ 46.86 in. Tukar kembali: 46.86 in = 3 ft 10.86 in, atau kira-kira 3 ft 10.9 in."
          },
          {
            "kind": "p",
            "text": "Nota: mengkuasa duakan panjang menghasilkan unit persegi (cm²), tetapi punca kuasa dua akhir mengembalikan unit linear (cm). Kalkulator mengendalikan ini secara automatik."
          }
        ]
      },
      "side-invalid": {
        "h2": "Mengapa Sesetengah Ukuran Segi Tiga Tidak Dapat Menghasilkan Jawapan yang Sah",
        "h3s": [],
        "paragraphs": [
          "Segi tiga bersudut tepat yang sah memerlukan tiga panjang sisi positif di mana hipotenus melebihi setiap kaki. Untuk pengiraan kaki-hilang, nilai di bawah punca kuasa dua (c² − kaki²) mestilah positif.",
          "<strong>Tidak sah:</strong> c = 8, a = 10. Hipotenus (8) lebih pendek daripada kaki (10). Ini melanggar peraturan hipotenus-paling-panjang. Anda mungkin tertukar label; 10 itu sepatutnya hipotenus.",
          "<strong>Tidak sah:</strong> c = 5, a = 5. Maka b = √(25 − 25) = √0 = 0. Sisi sifar panjang meruntuhkan segi tiga menjadi segmen garis, bukan segi tiga yang sah.",
          "<strong>Tidak sah:</strong> a = −3, b = 4. Panjang negatif tidak mempunyai makna geometri. Panjang sisi mestilah positif."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Segi tiga bersudut tepat yang sah memerlukan tiga panjang sisi positif di mana hipotenus melebihi setiap kaki. Untuk pengiraan kaki-hilang, nilai di bawah punca kuasa dua (c² − kaki²) mestilah positif."
          },
          {
            "kind": "p",
            "text": "<strong>Tidak sah:</strong> c = 8, a = 10. Hipotenus (8) lebih pendek daripada kaki (10). Ini melanggar peraturan hipotenus-paling-panjang. Anda mungkin tertukar label; 10 itu sepatutnya hipotenus."
          },
          {
            "kind": "p",
            "text": "<strong>Tidak sah:</strong> c = 5, a = 5. Maka b = √(25 − 25) = √0 = 0. Sisi sifar panjang meruntuhkan segi tiga menjadi segmen garis, bukan segi tiga yang sah."
          },
          {
            "kind": "p",
            "text": "<strong>Tidak sah:</strong> a = −3, b = 4. Panjang negatif tidak mempunyai makna geometri. Panjang sisi mestilah positif."
          }
        ],
        "table": {
          "headers": [
            "Masalah",
            "Punca",
            "Pembetulan"
          ],
          "rows": [
            [
              "Hipotenus lebih pendek daripada kaki",
              "Label tertukar",
              "Tetapkan sisi terpanjang sebagai c"
            ],
            [
              "Sifar di bawah punca kuasa dua",
              "c sama dengan kaki yang diketahui",
              "Semak ukuran; segi tiga merosot"
            ],
            [
              "Negatif di bawah punca kuasa dua",
              "c lebih pendek daripada kaki yang diketahui",
              "Input tidak dapat membentuk segi tiga bersudut tepat"
            ],
            [
              "Input negatif",
              "Salah taip atau salah tanda",
              "Gunakan panjang positif sahaja"
            ],
            [
              "Input sifar",
              "Ukuran tiada",
              "Masukkan panjang sebenar"
            ],
            [
              "Unit tercampur",
              "Kaki dengan inci",
              "Tukar kepada satu unit dahulu"
            ],
            [
              "Segi tiga bukan bersudut tepat",
              "Tiada sudut 90°",
              "Gunakan Hukum Kosinus sebaliknya"
            ]
          ]
        }
      },
      "side-verify": {
        "h2": "Cara Menyemak Sama Ada Sisi yang Anda Kira Betul",
        "h3s": [],
        "paragraphs": [
          "<strong>Kaedah 1: Gantikan semula.</strong> Masukkan ketiga-tiga sisi ke dalam [[a^2 + b^2 = c^2]]. Untuk segi tiga 6-8-10: 36 + 64 = 100. Jika kedua-dua belah sepadan, jawapannya betul.",
          "<strong>Kaedah 2: Semak hipotenus paling panjang.</strong> Jika anda menyelesaikan untuk c, sahkan ia melebihi kedua-dua a dan b. Jika anda menyelesaikan untuk kaki, sahkan ia lebih pendek daripada c.",
          "<strong>Kaedah 3: Bandingkan dengan tigaan.</strong> Jika input anda nombor bulat, lihat sama ada ia membentuk tigaan yang diketahui. Input 9 dan 12 yang menghasilkan 15 sepadan dengan tigaan 3-4-5 berskala.",
          "<strong>Kaedah 4: Anggarkan kewajaran.</strong> Hipotenus harus lebih panjang daripada mana-mana kaki tetapi lebih pendek daripada jumlahnya. Untuk kaki 6 dan 8, hipotenus 10 memenuhi 8 < 10 < 14.",
          "<strong>Kaedah 5: Semak unit dan pembundaran.</strong> Sahkan unit sepadan dengan input anda dan tempat perpuluhan mencerminkan kejituan ukuran anda.",
          "<strong>Contoh Pengesahan 1:</strong> Anda mengira c = 13 daripada a = 5, b = 12. Semak: 5² + 12² = 25 + 144 = 169 = 13². Hipotenus 13 melebihi kedua-dua kaki. Ini sepadan dengan tigaan 5-12-13. Sah.",
          "<strong>Contoh Pengesahan 2:</strong> Anda mengira b = 7.5 daripada c = 12.5, a = 10. Semak: 10² + 7.5² = 100 + 56.25 = 156.25 = 12.5². Kaki 7.5 lebih pendek daripada hipotenus 12.5. Anggaran: 10 < 12.5 < 20. Sah."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "<strong>Kaedah 1: Gantikan semula.</strong> Masukkan ketiga-tiga sisi ke dalam [[a^2 + b^2 = c^2]]. Untuk segi tiga 6-8-10: 36 + 64 = 100. Jika kedua-dua belah sepadan, jawapannya betul."
          },
          {
            "kind": "p",
            "text": "<strong>Kaedah 2: Semak hipotenus paling panjang.</strong> Jika anda menyelesaikan untuk c, sahkan ia melebihi kedua-dua a dan b. Jika anda menyelesaikan untuk kaki, sahkan ia lebih pendek daripada c."
          },
          {
            "kind": "p",
            "text": "<strong>Kaedah 3: Bandingkan dengan tigaan.</strong> Jika input anda nombor bulat, lihat sama ada ia membentuk tigaan yang diketahui. Input 9 dan 12 yang menghasilkan 15 sepadan dengan tigaan 3-4-5 berskala."
          },
          {
            "kind": "p",
            "text": "<strong>Kaedah 4: Anggarkan kewajaran.</strong> Hipotenus harus lebih panjang daripada mana-mana kaki tetapi lebih pendek daripada jumlahnya. Untuk kaki 6 dan 8, hipotenus 10 memenuhi 8 < 10 < 14."
          },
          {
            "kind": "p",
            "text": "<strong>Kaedah 5: Semak unit dan pembundaran.</strong> Sahkan unit sepadan dengan input anda dan tempat perpuluhan mencerminkan kejituan ukuran anda."
          },
          {
            "kind": "p",
            "text": "<strong>Contoh Pengesahan 1:</strong> Anda mengira c = 13 daripada a = 5, b = 12. Semak: 5² + 12² = 25 + 144 = 169 = 13². Hipotenus 13 melebihi kedua-dua kaki. Ini sepadan dengan tigaan 5-12-13. Sah."
          },
          {
            "kind": "p",
            "text": "<strong>Contoh Pengesahan 2:</strong> Anda mengira b = 7.5 daripada c = 12.5, a = 10. Semak: 10² + 7.5² = 100 + 56.25 = 156.25 = 12.5². Kaki 7.5 lebih pendek daripada hipotenus 12.5. Anggaran: 10 < 12.5 < 20. Sah."
          }
        ]
      },
      "side-mistakes": {
        "h2": "Kesilapan Lazim Apabila Mengira Sisi Segi Tiga Bersudut Tepat",
        "h3s": [],
        "paragraphs": [
          "<strong>1. Menambah kaki dan bukannya kuasa duanya.</strong> Mengira 6 + 8 = 14 dan bukannya √(36 + 64) = 10. Teorem menambah luas terkuasa dua, bukan panjang. Sentiasa kuasa duakan dahulu.",
          "<strong>2. Lupa punca kuasa dua.</strong> Menjawab 100 dan bukannya 10 untuk segi tiga 6-8. Rumus memberikan c²; anda memerlukan c. Ambil punca sebagai langkah akhir.",
          "<strong>3. Menolak apabila mencari hipotenus.</strong> Menggunakan √(64 − 36) = √28 dan bukannya √(64 + 36) = 10. Penambahan digunakan apabila mencari hipotenus daripada dua kaki.",
          "<strong>4. Menambah apabila mencari kaki yang hilang.</strong> Menggunakan √(169 + 25) dan bukannya √(169 − 25) = 12. Penolakan digunakan apabila hipotenus diketahui.",
          "<strong>5. Menyangka kaki sebagai hipotenus.</strong> Melabelkan sisi terpanjang sebagai a atau b. Hipotenus sentiasa bertentangan dengan sudut tepat dan sentiasa dilabelkan c.",
          "<strong>6. Menggunakan teorem pada segi tiga bukan bersudut tepat.</strong> Menggunakan a² + b² = c² tanpa sudut 90 darjah. Sahkan sudut tepat dahulu.",
          "<strong>7. Membundar pengiraan perantaraan.</strong> Membundar 6.25 kepada 6.3 di tengah pengiraan, kemudian mendapat jawapan akhir yang sedikit salah. Kekalkan kejituan penuh sehingga akhir.",
          "<strong>8. Mencampur unit ukuran.</strong> Memasukkan 3 kaki dan 6 inci sebagai 3 dan 6. Tukar kepada satu unit sebelum mengira.",
          "<strong>9. Memasukkan nilai ke dalam medan yang salah.</strong> Meletakkan hipotenus dalam medan kaki. Padankan setiap ukuran dengan label yang betul.",
          "<strong>10. Mentafsir negatif di bawah punca dengan salah.</strong> Melihat √(25 − 36) dan memaksa pengiraan. Radikan negatif bermaksud input tidak dapat membentuk segi tiga bersudut tepat; semak label anda."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "<strong>1. Menambah kaki dan bukannya kuasa duanya.</strong> Mengira 6 + 8 = 14 dan bukannya √(36 + 64) = 10. Teorem menambah luas terkuasa dua, bukan panjang. Sentiasa kuasa duakan dahulu."
          },
          {
            "kind": "p",
            "text": "<strong>2. Lupa punca kuasa dua.</strong> Menjawab 100 dan bukannya 10 untuk segi tiga 6-8. Rumus memberikan c²; anda memerlukan c. Ambil punca sebagai langkah akhir."
          },
          {
            "kind": "p",
            "text": "<strong>3. Menolak apabila mencari hipotenus.</strong> Menggunakan √(64 − 36) = √28 dan bukannya √(64 + 36) = 10. Penambahan digunakan apabila mencari hipotenus daripada dua kaki."
          },
          {
            "kind": "p",
            "text": "<strong>4. Menambah apabila mencari kaki yang hilang.</strong> Menggunakan √(169 + 25) dan bukannya √(169 − 25) = 12. Penolakan digunakan apabila hipotenus diketahui."
          },
          {
            "kind": "p",
            "text": "<strong>5. Menyangka kaki sebagai hipotenus.</strong> Melabelkan sisi terpanjang sebagai a atau b. Hipotenus sentiasa bertentangan dengan sudut tepat dan sentiasa dilabelkan c."
          },
          {
            "kind": "p",
            "text": "<strong>6. Menggunakan teorem pada segi tiga bukan bersudut tepat.</strong> Menggunakan a² + b² = c² tanpa sudut 90 darjah. Sahkan sudut tepat dahulu."
          },
          {
            "kind": "p",
            "text": "<strong>7. Membundar pengiraan perantaraan.</strong> Membundar 6.25 kepada 6.3 di tengah pengiraan, kemudian mendapat jawapan akhir yang sedikit salah. Kekalkan kejituan penuh sehingga akhir."
          },
          {
            "kind": "p",
            "text": "<strong>8. Mencampur unit ukuran.</strong> Memasukkan 3 kaki dan 6 inci sebagai 3 dan 6. Tukar kepada satu unit sebelum mengira."
          },
          {
            "kind": "p",
            "text": "<strong>9. Memasukkan nilai ke dalam medan yang salah.</strong> Meletakkan hipotenus dalam medan kaki. Padankan setiap ukuran dengan label yang betul."
          },
          {
            "kind": "p",
            "text": "<strong>10. Mentafsir negatif di bawah punca dengan salah.</strong> Melihat √(25 − 36) dan memaksa pengiraan. Radikan negatif bermaksud input tidak dapat membentuk segi tiga bersudut tepat; semak label anda."
          }
        ]
      },
      "side-beyond": {
        "h2": "Bilakah Anda Memerlukan Rumus Segi Tiga Bersudut Tepat yang Berbeza?",
        "h3s": [],
        "paragraphs": [
          "Teorem Pythagoras memerlukan dua sisi yang diketahui. Maklumat berbeza memerlukan alat berbeza.",
          "<strong>Satu sisi dan satu sudut tirus:</strong> Gunakan sinus, kosinus, atau tangen. Sinus mengaitkan bertentangan per hipotenus, kosinus mengaitkan bersebelahan per hipotenus, dan tangen mengaitkan bertentangan per bersebelahan. Contohnya, dengan hipotenus c dan sudut A, kaki a = c × sin(A).",
          "<strong>Dua sudut, tiada sisi:</strong> Mustahil. Sudut menentukan bentuk tetapi bukan saiz; segi tiga 3-4-5 dan segi tiga 6-8-10 berkongsi sudut tetapi berbeza skala. Anda memerlukan sekurang-kurangnya satu panjang sisi.",
          "<strong>Segi tiga bukan bersudut tepat:</strong> Gunakan Hukum Kosinus (c² = a² + b² − 2ab×cos(C)) atau Hukum Sinus. Teorem Pythagoras ialah kes khas Hukum Kosinus apabila C = 90°.",
          "<strong>Segi tiga bersudut tepat khas:</strong> Segi tiga 45-45-90 mempunyai kaki dalam nisbah 1:1:√2, dan 30-60-90 mempunyai sisi dalam nisbah 1:√3:2. Ini membolehkan pengiraan mental yang cepat.",
          "Jika anda tahu satu sisi dan satu sudut tirus, gunakan Kalkulator Sisi Segi Tiga Bersudut Tepat Menggunakan Sudut di laman ini."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Teorem Pythagoras memerlukan dua sisi yang diketahui. Maklumat berbeza memerlukan alat berbeza."
          },
          {
            "kind": "p",
            "text": "<strong>Satu sisi dan satu sudut tirus:</strong> Gunakan sinus, kosinus, atau tangen. Sinus mengaitkan bertentangan per hipotenus, kosinus mengaitkan bersebelahan per hipotenus, dan tangen mengaitkan bertentangan per bersebelahan. Contohnya, dengan hipotenus c dan sudut A, kaki a = c × sin(A)."
          },
          {
            "kind": "p",
            "text": "<strong>Dua sudut, tiada sisi:</strong> Mustahil. Sudut menentukan bentuk tetapi bukan saiz; segi tiga 3-4-5 dan segi tiga 6-8-10 berkongsi sudut tetapi berbeza skala. Anda memerlukan sekurang-kurangnya satu panjang sisi."
          },
          {
            "kind": "p",
            "text": "<strong>Segi tiga bukan bersudut tepat:</strong> Gunakan Hukum Kosinus (c² = a² + b² − 2ab×cos(C)) atau Hukum Sinus. Teorem Pythagoras ialah kes khas Hukum Kosinus apabila C = 90°."
          },
          {
            "kind": "p",
            "text": "<strong>Segi tiga bersudut tepat khas:</strong> Segi tiga 45-45-90 mempunyai kaki dalam nisbah 1:1:√2, dan 30-60-90 mempunyai sisi dalam nisbah 1:√3:2. Ini membolehkan pengiraan mental yang cepat."
          },
          {
            "kind": "p",
            "text": "Jika anda tahu satu sisi dan satu sudut tirus, gunakan Kalkulator Sisi Segi Tiga Bersudut Tepat Menggunakan Sudut di laman ini."
          }
        ],
        "linkAnchor": "Kalkulator Sisi Segi Tiga Bersudut Tepat Menggunakan Sudut"
      },
      "side-related": {
        "h2": "Kalkulator Segi Tiga Bersudut Tepat Lain yang Mungkin Berguna",
        "h3s": [],
        "paragraphs": [
          "Selepas mencari sisi yang hilang, teruskan dengan kalkulator berkaitan ini untuk melengkapkan analisis segi tiga anda."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Selepas mencari sisi yang hilang, teruskan dengan kalkulator berkaitan ini untuk melengkapkan analisis segi tiga anda."
          }
        ]
      },
      "side-faq": {
        "h2": "Soalan Lazim",
        "h3s": [],
        "paragraphs": [],
        "blocks": []
      },
      "side-summary": {
        "h2": "Kira Sisi Segi Tiga Bersudut Tepat dengan Yakin",
        "h3s": [],
        "paragraphs": [
          "Kenal pasti dua sisi yang anda tahu dahulu. Jika kedua-duanya kaki, anda memerlukan hipotenus; jika satu ialah hipotenus, anda memerlukan kaki yang hilang. Pilih rumus atau mod kalkulator yang sepadan. Masukkan kedua-dua ukuran dalam unit yang sama. Kira, kemudian sahkan: hipotenus mestilah paling panjang, dan menggantikan semula ke dalam a² + b² = c² harus seimbang. Semak unit dan pembundaran anda. Dengan langkah ini, anda boleh menyelesaikan sebarang masalah sisi segi tiga bersudut tepat dengan andal. Kembali ke kalkulator di bahagian atas halaman ini untuk menjalankan nombor anda."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Kenal pasti dua sisi yang anda tahu dahulu. Jika kedua-duanya kaki, anda memerlukan hipotenus; jika satu ialah hipotenus, anda memerlukan kaki yang hilang. Pilih rumus atau mod kalkulator yang sepadan. Masukkan kedua-dua ukuran dalam unit yang sama. Kira, kemudian sahkan: hipotenus mestilah paling panjang, dan menggantikan semula ke dalam a² + b² = c² harus seimbang. Semak unit dan pembundaran anda. Dengan langkah ini, anda boleh menyelesaikan sebarang masalah sisi segi tiga bersudut tepat dengan andal. Kembali ke kalkulator di bahagian atas halaman ini untuk menjalankan nombor anda."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Bagaimanakah anda mengira sisi yang hilang bagi segi tiga bersudut tepat?",
        "answer": "Gunakan teorem Pythagoras: a² + b² = c². Jika anda tahu kedua-dua kaki, kira c = √(a² + b²). Jika anda tahu hipotenus dan satu kaki, kira kaki yang hilang sebagai √(c² − kaki yang diketahui²). Anda memerlukan tepat dua panjang sisi; teorem tidak berfungsi dengan hanya satu sisi atau dengan sudut sahaja."
      },
      {
        "question": "Bolehkah anda mencari sisi yang hilang jika anda tahu dua sisi?",
        "answer": "Ya. Dua sisi mencukupi. Jika dua sisi yang diketahui ialah kaki, gunakan rumus hipotenus. Jika satu sisi yang diketahui ialah hipotenus, gunakan rumus kaki-hilang. Kalkulator menentukan mod mana yang sesuai berdasarkan sama ada hipotenus termasuk dalam input anda."
      },
      {
        "question": "Bagaimanakah anda mencari hipotenus?",
        "answer": "Kuasa duakan kedua-dua kaki, tambah kuasa duanya, dan ambil punca kuasa dua. Untuk kaki 6 dan 8: 6² + 8² = 36 + 64 = 100, √100 = 10. Hipotenus sentiasa sisi terpanjang, jadi sahkan jawapan anda melebihi kedua-dua kaki."
      },
      {
        "question": "Bagaimanakah anda mencari kaki yang hilang?",
        "answer": "Kuasa duakan hipotenus dan kaki yang diketahui, tolak kuasa dua kaki daripada kuasa dua hipotenus, dan ambil punca kuasa dua. Untuk hipotenus 13 dan kaki 5: 169 − 25 = 144, √144 = 12. Hasilnya mestilah lebih pendek daripada hipotenus."
      },
      {
        "question": "Apakah rumus teorem Pythagoras?",
        "answer": "Rumusnya ialah a² + b² = c², di mana a dan b ialah kaki (sisi yang membentuk sudut tepat) dan c ialah hipotenus (sisi yang bertentangan dengan sudut tepat). Hubungan ini berlaku untuk setiap segi tiga bersudut tepat."
      },
      {
        "question": "Adakah hipotenus sentiasa sisi terpanjang?",
        "answer": "Ya. Hipotenus merangkumi jarak terbesar antara bucu, bertentangan dengan sudut terbesar (90 darjah). Dalam mana-mana segi tiga, sisi terpanjang terletak bertentangan dengan sudut terbesar. Jika hipotenus yang anda kira lebih pendek daripada kaki, semak semula input anda."
      },
      {
        "question": "Bolehkah anda menggunakan teorem Pythagoras pada sebarang segi tiga?",
        "answer": "Tidak, hanya pada segi tiga bersudut tepat. Teorem bergantung pada sudut 90 darjah. Untuk segi tiga tirus atau cakah, gunakan Hukum Kosinus. Menggunakan Pythagoras pada segi tiga bukan bersudut tepat menghasilkan hasil yang salah."
      },
      {
        "question": "Bagaimana jika jawapannya perpuluhan?",
        "answer": "Perpuluhan adalah normal; kebanyakan segi tiga bersudut tepat tidak mempunyai sisi nombor bulat. Kira dengan kejituan penuh, kemudian bundarkan jawapan akhir mengikut kejituan input anda. Contohnya, √42.25 = 6.5 tepat, tetapi √50 ≈ 7.071 memerlukan pembundaran."
      },
      {
        "question": "Bolehkah segi tiga bersudut tepat mempunyai dua kaki yang sama?",
        "answer": "Ya. Ini ialah segi tiga bersudut tepat kaki sama 45-45-90, di mana kaki sama dan hipotenus sama dengan kaki × √2. Untuk kaki 5, hipotenusnya ialah 5√2 ≈ 7.071."
      },
      {
        "question": "Bagaimana jika hipotenus lebih kecil daripada kaki yang diketahui?",
        "answer": "Input tidak sah. Hipotenus mestilah sisi terpanjang. Anda mungkin tertukar label; tetapkan ukuran terpanjang sebagai hipotenus (c) dan kira semula."
      },
      {
        "question": "Bolehkah saya mengira sisi yang hilang menggunakan satu sudut dan satu sisi?",
        "answer": "Ya, tetapi bukan dengan teorem Pythagoras sahaja. Gunakan nisbah trigonometri: sinus, kosinus, atau tangen mengaitkan sisi yang diketahui dan sudut dengan sisi yang tidak diketahui. Laman ini menawarkan kalkulator khusus untuk masalah sisi-daripada-sudut."
      },
      {
        "question": "Bagaimanakah saya boleh menyemak bahawa jawapan saya betul?",
        "answer": "Gantikan ketiga-tiga sisi semula ke dalam a² + b² = c². Sahkan hipotenus paling panjang. Semak sama ada nombor membentuk tigaan Pythagoras yang diketahui. Anggarkan bahawa hipotenus berada antara kaki yang lebih panjang dan jumlah kedua-dua kaki."
      }
    ],
    "relatedHeading": "Kalkulator Segi Tiga Bersudut Tepat Lain yang Mungkin Berguna",
    "relatedIntro": "Selepas mencari sisi yang hilang, teruskan dengan kalkulator berkaitan ini untuk melengkapkan analisis segi tiga anda.",
    "relatedItems": [
      "Kalkulator Segi Tiga Bersudut Tepat",
      "Kalkulator Sudut Segi Tiga Bersudut Tepat",
      "Kalkulator Sisi Segi Tiga Bersudut Tepat Menggunakan Sudut",
      "Kalkulator Luas Segi Tiga Bersudut Tepat",
      "Kalkulator Perimeter dan Semiperimeter Segi Tiga Bersudut Tepat",
      "Kalkulator Segi Tiga Bersudut Tepat Khas",
      "Kalkulator Tigaan Pythagoras"
    ]
  },
  "pl": {
    "tocHeading": "W tym poradniku",
    "tocItems": {
      "side-intro": "Jak znaleźć brakujący bok",
      "side-anatomy": "Poznaj trzy boki",
      "side-pythagoras": "Twierdzenie Pitagorasa",
      "side-hypotenuse": "Znajdowanie przeciwprostokątnej",
      "side-leg": "Znajdowanie brakującej przyprostokątnej",
      "side-howto": "Jak korzystać z kalkulatora",
      "side-formulas": "Wzory w skrócie",
      "side-applications": "Przykłady z życia",
      "side-triples": "Trójki pitagorejskie",
      "side-units": "Jednostki i dokładność",
      "side-invalid": "Nieprawidłowe dane",
      "side-verify": "Sprawdzanie odpowiedzi",
      "side-mistakes": "Częste błędy",
      "side-beyond": "Kiedy Pitagoras nie wystarcza",
      "side-related": "Powiązane kalkulatory",
      "side-faq": "Często zadawane pytania"
    },
    "sections": {
      "side-intro": {
        "h2": "Jak znaleźć brakujący bok trójkąta prostokątnego",
        "h3s": [],
        "paragraphs": [
          "Kalkulator boków trójkąta prostokątnego znajduje nieznaną długość w trójkącie prostokątnym, gdy znasz pozostałe dwa boki. Typowe zastosowania to mierzenie przekątnych pomieszczeń, sprawdzanie belek wsporczych czy weryfikowanie odpowiedzi do zadań domowych. Kalkulator potrzebuje dokładnie dwóch długości boków, aby działać. Stosuje twierdzenie Pitagorasa, które wiąże trzy boki każdego trójkąta prostokątnego. Znajdowanie przeciwprostokątnej wykorzystuje dodawanie pod pierwiastkiem kwadratowym, natomiast znajdowanie brakującej przyprostokątnej wykorzystuje odejmowanie. Metoda działa tylko dla trójkątów prostokątnych, ponieważ zależność opiera się na kącie 90 stopni. Na przykład trójkąt prostokątny o przyprostokątnych 6 cm i 8 cm ma przeciwprostokątną 10 cm. Ta sama zasada mierzy rzeczywiste odległości, od długości drabin po przekątne ekranów."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator boków trójkąta prostokątnego znajduje nieznaną długość w trójkącie prostokątnym, gdy znasz pozostałe dwa boki. Typowe zastosowania to mierzenie przekątnych pomieszczeń, sprawdzanie belek wsporczych czy weryfikowanie odpowiedzi do zadań domowych. Kalkulator potrzebuje dokładnie dwóch długości boków, aby działać. Stosuje twierdzenie Pitagorasa, które wiąże trzy boki każdego trójkąta prostokątnego. Znajdowanie przeciwprostokątnej wykorzystuje dodawanie pod pierwiastkiem kwadratowym, natomiast znajdowanie brakującej przyprostokątnej wykorzystuje odejmowanie. Metoda działa tylko dla trójkątów prostokątnych, ponieważ zależność opiera się na kącie 90 stopni. Na przykład trójkąt prostokątny o przyprostokątnych 6 cm i 8 cm ma przeciwprostokątną 10 cm. Ta sama zasada mierzy rzeczywiste odległości, od długości drabin po przekątne ekranów."
          }
        ]
      },
      "side-anatomy": {
        "h2": "Poznaj trzy boki trójkąta prostokątnego",
        "h3s": [
          "Czym jest trójkąt prostokątny?",
          "Czym jest przeciwprostokątna?",
          "Czym są przyprostokątne?",
          "Jak rozpoznać właściwy bok?"
        ],
        "paragraphs": [
          "Trójkąt prostokątny zawiera jeden kąt mierzący dokładnie 90 stopni, taki sam jak róg kwadratu lub prostokąta. Pozostałe dwa kąty muszą być ostre, czyli każdy mierzy mniej niż 90 stopni. Ponieważ suma kątów trójkąta wynosi 180 stopni, dwa kąty nieproste sumują się do 90 stopni. Różni się to od trójkątów ostrokątnych (wszystkie kąty poniżej 90°) i rozwartokątnych (jeden kąt powyżej 90°). Kąt prosty tworzy prostopadłą zależność, na której opiera się twierdzenie Pitagorasa.",
          "Przeciwprostokątna leży naprzeciw kąta prostego, rozciągając się w poprzek od rogu 90 stopni. Jest zawsze najdłuższym bokiem, ponieważ łączy największą odległość między dowolnymi dwoma wierzchołkami. Na obróconych rysunkach bok nie dotykający oznaczenia kąta prostego jest przeciwprostokątną. Ten kalkulator oznacza ją literą c, zgodnie ze standardową konwencją, w której c oznacza przeciwprostokątną we wzorze [[a^2 + b^2 = c^2]].",
          "Przyprostokątne to dwa boki tworzące kąt prosty, spotykające się pod kątem 90 stopni. W tym kalkulatorze oznaczone są literami a i b. Zamiana oznaczeń nie zmienia przeciwprostokątnej, ponieważ a² + b² równa się b² + a². Kalkulator trzyma je oddzielnie, aby tryby brakującej przyprostokątnej wiedziały, którą przyprostokątną rozwiązać. Gdy znasz obie przyprostokątne, kolejność nie ma znaczenia przy znajdowaniu przeciwprostokątnej.",
          "Znajdź oznaczenie kąta prostego (mały kwadrat). Bok przeciwległy to przeciwprostokątna; dwa stykające się boki to przyprostokątne. Na obróconych rysunkach wyobraź sobie obrót trójkąta, aż kąt prosty znajdzie się w lewym dolnym rogu, z jedną przyprostokątną poziomo i drugą pionowo. Bez oznaczenia kąta prostego potwierdź, że trójkąt jest prostokątny, zanim użyjesz tego kalkulatora."
        ],
        "blocks": [
          {
            "kind": "h3",
            "text": "Czym jest trójkąt prostokątny?"
          },
          {
            "kind": "p",
            "text": "Trójkąt prostokątny zawiera jeden kąt mierzący dokładnie 90 stopni, taki sam jak róg kwadratu lub prostokąta. Pozostałe dwa kąty muszą być ostre, czyli każdy mierzy mniej niż 90 stopni. Ponieważ suma kątów trójkąta wynosi 180 stopni, dwa kąty nieproste sumują się do 90 stopni. Różni się to od trójkątów ostrokątnych (wszystkie kąty poniżej 90°) i rozwartokątnych (jeden kąt powyżej 90°). Kąt prosty tworzy prostopadłą zależność, na której opiera się twierdzenie Pitagorasa."
          },
          {
            "kind": "h3",
            "text": "Czym jest przeciwprostokątna?"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna leży naprzeciw kąta prostego, rozciągając się w poprzek od rogu 90 stopni. Jest zawsze najdłuższym bokiem, ponieważ łączy największą odległość między dowolnymi dwoma wierzchołkami. Na obróconych rysunkach bok nie dotykający oznaczenia kąta prostego jest przeciwprostokątną. Ten kalkulator oznacza ją literą c, zgodnie ze standardową konwencją, w której c oznacza przeciwprostokątną we wzorze [[a^2 + b^2 = c^2]]."
          },
          {
            "kind": "h3",
            "text": "Czym są przyprostokątne?"
          },
          {
            "kind": "p",
            "text": "Przyprostokątne to dwa boki tworzące kąt prosty, spotykające się pod kątem 90 stopni. W tym kalkulatorze oznaczone są literami a i b. Zamiana oznaczeń nie zmienia przeciwprostokątnej, ponieważ a² + b² równa się b² + a². Kalkulator trzyma je oddzielnie, aby tryby brakującej przyprostokątnej wiedziały, którą przyprostokątną rozwiązać. Gdy znasz obie przyprostokątne, kolejność nie ma znaczenia przy znajdowaniu przeciwprostokątnej."
          },
          {
            "kind": "h3",
            "text": "Jak rozpoznać właściwy bok?"
          },
          {
            "kind": "p",
            "text": "Znajdź oznaczenie kąta prostego (mały kwadrat). Bok przeciwległy to przeciwprostokątna; dwa stykające się boki to przyprostokątne. Na obróconych rysunkach wyobraź sobie obrót trójkąta, aż kąt prosty znajdzie się w lewym dolnym rogu, z jedną przyprostokątną poziomo i drugą pionowo. Bez oznaczenia kąta prostego potwierdź, że trójkąt jest prostokątny, zanim użyjesz tego kalkulatora."
          }
        ],
        "imgAlt": "Oznaczony trójkąt prostokątny pokazujący przyprostokątne a i b, przeciwprostokątną c, kąt prosty przy C oraz kąty ostre A i B",
        "figcaption": "Części trójkąta prostokątnego: przyprostokątne a i b tworzą kąt prosty przy C, przeciwprostokątna c leży naprzeciw, z kątami ostrymi A i B."
      },
      "side-pythagoras": {
        "h2": "Jak twierdzenie Pitagorasa oblicza boki trójkąta",
        "h3s": [
          "Dlaczego wzór działa"
        ],
        "paragraphs": [
          "Twierdzenie Pitagorasa mówi, że [[a^2 + b^2 = c^2]], gdzie a i b są przyprostokątnymi, a c jest przeciwprostokątną. Każda zmienna oznacza długość boku. Podnoszenie do kwadratu mnoży liczbę przez samą siebie (6² = 36); pierwiastek kwadratowy odwraca tę operację (√100 = 10). Pierwiastek bierzesz, ponieważ wzór wiąże długości podniesione do kwadratu, a nie same długości. Dodawanie długości przyprostokątnych (6 + 8 = 14) jest błędne; dodaj ich kwadraty (36 + 64 = 100), a następnie wyciągnij pierwiastek. Twierdzenie wymaga kąta 90 stopni; trójkąty nieprostokątne wymagają twierdzenia cosinusów. Wszystkie trzy tryby kalkulatora przekształcają to równanie: [[c = \\sqrt{a^2 + b^2}]], [[b = \\sqrt{c^2 - a^2}]], [[a = \\sqrt{c^2 - b^2}]].",
          "Narysuj kwadrat na każdym boku: pola a², b² i c². Twierdzenie mówi, że dwa mniejsze pola sumują się do największego. Dla 3-4-5: kwadraty o 9 i 16 jednostkach kwadratowych sumują się do 25, czyli pola kwadratu na przeciwprostokątnej. Podnoszenie do kwadratu ma znaczenie, ponieważ porównujesz pola, a nie długości."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Twierdzenie Pitagorasa mówi, że [[a^2 + b^2 = c^2]], gdzie a i b są przyprostokątnymi, a c jest przeciwprostokątną. Każda zmienna oznacza długość boku. Podnoszenie do kwadratu mnoży liczbę przez samą siebie (6² = 36); pierwiastek kwadratowy odwraca tę operację (√100 = 10). Pierwiastek bierzesz, ponieważ wzór wiąże długości podniesione do kwadratu, a nie same długości. Dodawanie długości przyprostokątnych (6 + 8 = 14) jest błędne; dodaj ich kwadraty (36 + 64 = 100), a następnie wyciągnij pierwiastek. Twierdzenie wymaga kąta 90 stopni; trójkąty nieprostokątne wymagają twierdzenia cosinusów. Wszystkie trzy tryby kalkulatora przekształcają to równanie: [[c = \\sqrt{a^2 + b^2}]], [[b = \\sqrt{c^2 - a^2}]], [[a = \\sqrt{c^2 - b^2}]]."
          },
          {
            "kind": "h3",
            "text": "Dlaczego wzór działa"
          },
          {
            "kind": "p",
            "text": "Narysuj kwadrat na każdym boku: pola a², b² i c². Twierdzenie mówi, że dwa mniejsze pola sumują się do największego. Dla 3-4-5: kwadraty o 9 i 16 jednostkach kwadratowych sumują się do 25, czyli pola kwadratu na przeciwprostokątnej. Podnoszenie do kwadratu ma znaczenie, ponieważ porównujesz pola, a nie długości."
          }
        ],
        "imgAlt": "Trójkąt prostokątny 3-4-5 z kwadratami na każdym boku oznaczonymi 9, 16 i 25 jednostek kwadratowych, pokazujący, że 9 plus 16 równa się 25",
        "figcaption": "Wizualny dowód: kwadraty o 9 i 16 jednostkach kwadratowych na przyprostokątnych łączą się, dając kwadrat o 25 jednostkach kwadratowych na przeciwprostokątnej."
      },
      "side-hypotenuse": {
        "h2": "Jak znaleźć przeciwprostokątną, znając dwie przyprostokątne",
        "h3s": [
          "Przykład 1: Znajdowanie przeciwprostokątnej trójkąta prostokątnego 6-8",
          "Przykład 2: Znajdowanie przeciwprostokątnej przy pomiarach dziesiętnych",
          "Kiedy używać tego trybu kalkulatora?"
        ],
        "paragraphs": [
          "Rozwiązanie [[a^2 + b^2 = c^2]] względem c daje [[c = \\sqrt{a^2 + b^2}]]. Proces: rozpoznaj obie przyprostokątne, podnieś każdą do kwadratu, dodaj kwadraty, wyciągnij pierwiastek, zapisz jednostkę i potwierdź, że wynik przewyższa obie przyprostokątne.",
          "Dane przyprostokątne a = 6 cm i b = 8 cm: podnieś każdą do kwadratu (36 i 64), dodaj (100), wyciągnij pierwiastek (10). Przeciwprostokątna wynosi 10 cm, przewyższając obie przyprostokątne, jak oczekiwano. [[[c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ cm}]]]",
          "Dane a = 2.5 m, b = 6 m: 2.5² + 6² = 6.25 + 36 = 42.25, √42.25 = 6.5 m. Liczby dziesiętne wymagają starannej arytmetyki; zachowaj pełną precyzję aż do końcowego zaokrąglenia. [[[c = \\sqrt{2.5^2 + 6^2} = \\sqrt{6.25 + 36} = \\sqrt{42.25} = 6.5\\text{ m}]]]",
          "Użyj trybu przeciwprostokątnej przy dwóch znanych przyprostokątnych: przekątne pomieszczeń, zastrzały wsporcze lub zadania geometryczne podające prostopadłe boki. Przy przeciwprostokątnej plus jednej przyprostokątnej przełącz na tryb brakującej przyprostokątnej."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Rozwiązanie [[a^2 + b^2 = c^2]] względem c daje [[c = \\sqrt{a^2 + b^2}]]. Proces: rozpoznaj obie przyprostokątne, podnieś każdą do kwadratu, dodaj kwadraty, wyciągnij pierwiastek, zapisz jednostkę i potwierdź, że wynik przewyższa obie przyprostokątne."
          },
          {
            "kind": "h3",
            "text": "Przykład 1: Znajdowanie przeciwprostokątnej trójkąta prostokątnego 6-8"
          },
          {
            "kind": "p",
            "text": "Dane przyprostokątne a = 6 cm i b = 8 cm: podnieś każdą do kwadratu (36 i 64), dodaj (100), wyciągnij pierwiastek (10). Przeciwprostokątna wynosi 10 cm, przewyższając obie przyprostokątne, jak oczekiwano. [[[c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\text{ cm}]]]"
          },
          {
            "kind": "h3",
            "text": "Przykład 2: Znajdowanie przeciwprostokątnej przy pomiarach dziesiętnych"
          },
          {
            "kind": "p",
            "text": "Dane a = 2.5 m, b = 6 m: 2.5² + 6² = 6.25 + 36 = 42.25, √42.25 = 6.5 m. Liczby dziesiętne wymagają starannej arytmetyki; zachowaj pełną precyzję aż do końcowego zaokrąglenia. [[[c = \\sqrt{2.5^2 + 6^2} = \\sqrt{6.25 + 36} = \\sqrt{42.25} = 6.5\\text{ m}]]]"
          },
          {
            "kind": "h3",
            "text": "Kiedy używać tego trybu kalkulatora?"
          },
          {
            "kind": "p",
            "text": "Użyj trybu przeciwprostokątnej przy dwóch znanych przyprostokątnych: przekątne pomieszczeń, zastrzały wsporcze lub zadania geometryczne podające prostopadłe boki. Przy przeciwprostokątnej plus jednej przyprostokątnej przełącz na tryb brakującej przyprostokątnej."
          }
        ]
      },
      "side-leg": {
        "h2": "Jak znaleźć brakującą przyprostokątną trójkąta prostokątnego",
        "h3s": [
          "Znajdź przyprostokątną b, gdy znana jest przeciwprostokątna c i przyprostokątna a",
          "Przykład 3: Znajdź przyprostokątną b przy przeciwprostokątnej 13 cm",
          "Znajdź przyprostokątną a, gdy znana jest przeciwprostokątna c i przyprostokątna b",
          "Przykład 4: Znajdowanie nieznanej przyprostokątnej"
        ],
        "paragraphs": [
          "Gdy znasz przeciwprostokątną i jedną przyprostokątną, przekształć twierdzenie Pitagorasa, aby wyizolować nieznaną przyprostokątną. Zaczynając od [[a^2 + b^2 = c^2]], odejmij kwadrat znanej przyprostokątnej od obu stron. Daje to dwa wzory, po jednym dla każdej przyprostokątnej.",
          "Wzór to [[b = \\sqrt{c^2 - a^2}]]. Wyprowadzenie: zacznij od [[a^2 + b^2 = c^2]], odejmij a² od obu stron, aby otrzymać [[b^2 = c^2 - a^2]], a następnie wyciągnij pierwiastek kwadratowy. Odejmowanie odzwierciedla to, że kwadrat przeciwprostokątnej zawiera kwadraty obu przyprostokątnych, więc usunięcie jednego pozostawia drugi.",
          "Dane c = 13 cm i a = 5 cm, znajdź przyprostokątną b. Podnieś obie do kwadratu: 13² = 169 i 5² = 25. Odejmij: 169 − 25 = 144. Wyciągnij pierwiastek: √144 = 12. Przyprostokątna b mierzy 12 cm. Sprawdź: 5² + 12² = 25 + 144 = 169 = 13². Trójka 5-12-13 potwierdza wynik. [[[b = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}]]]",
          "Wzór to [[a = \\sqrt{c^2 - b^2}]]. Przyprostokątne są wymienne w zależności pitagorejskiej; oznaczenie jednej jako a, a drugiej jako b jest konwencją. Kalkulator oferuje oba tryby, aby dopasować etykiety pól do konkretnego zadania bez mentalnej zamiany zmiennych.",
          "Dane c = 17 cali i b = 15 cali, znajdź przyprostokątną a. Podnieś do kwadratu: 17² = 289 i 15² = 225. Odejmij: 289 − 225 = 64. Wyciągnij pierwiastek: √64 = 8. Przyprostokątna a ma 8 cali. To trójka 8-15-17. Dwa tryby brakującej przyprostokątnej różnią się tylko tym, która przyprostokątna jest znana; matematyka jest identyczna. [[[a = \\sqrt{17^2 - 15^2} = \\sqrt{289 - 225} = \\sqrt{64} = 8\\text{ inches}]]]"
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Gdy znasz przeciwprostokątną i jedną przyprostokątną, przekształć twierdzenie Pitagorasa, aby wyizolować nieznaną przyprostokątną. Zaczynając od [[a^2 + b^2 = c^2]], odejmij kwadrat znanej przyprostokątnej od obu stron. Daje to dwa wzory, po jednym dla każdej przyprostokątnej."
          },
          {
            "kind": "h3",
            "text": "Znajdź przyprostokątną b, gdy znana jest przeciwprostokątna c i przyprostokątna a"
          },
          {
            "kind": "p",
            "text": "Wzór to [[b = \\sqrt{c^2 - a^2}]]. Wyprowadzenie: zacznij od [[a^2 + b^2 = c^2]], odejmij a² od obu stron, aby otrzymać [[b^2 = c^2 - a^2]], a następnie wyciągnij pierwiastek kwadratowy. Odejmowanie odzwierciedla to, że kwadrat przeciwprostokątnej zawiera kwadraty obu przyprostokątnych, więc usunięcie jednego pozostawia drugi."
          },
          {
            "kind": "h3",
            "text": "Przykład 3: Znajdź przyprostokątną b przy przeciwprostokątnej 13 cm"
          },
          {
            "kind": "p",
            "text": "Dane c = 13 cm i a = 5 cm, znajdź przyprostokątną b. Podnieś obie do kwadratu: 13² = 169 i 5² = 25. Odejmij: 169 − 25 = 144. Wyciągnij pierwiastek: √144 = 12. Przyprostokątna b mierzy 12 cm. Sprawdź: 5² + 12² = 25 + 144 = 169 = 13². Trójka 5-12-13 potwierdza wynik. [[[b = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}]]]"
          },
          {
            "kind": "h3",
            "text": "Znajdź przyprostokątną a, gdy znana jest przeciwprostokątna c i przyprostokątna b"
          },
          {
            "kind": "p",
            "text": "Wzór to [[a = \\sqrt{c^2 - b^2}]]. Przyprostokątne są wymienne w zależności pitagorejskiej; oznaczenie jednej jako a, a drugiej jako b jest konwencją. Kalkulator oferuje oba tryby, aby dopasować etykiety pól do konkretnego zadania bez mentalnej zamiany zmiennych."
          },
          {
            "kind": "h3",
            "text": "Przykład 4: Znajdowanie nieznanej przyprostokątnej"
          },
          {
            "kind": "p",
            "text": "Dane c = 17 cali i b = 15 cali, znajdź przyprostokątną a. Podnieś do kwadratu: 17² = 289 i 15² = 225. Odejmij: 289 − 225 = 64. Wyciągnij pierwiastek: √64 = 8. Przyprostokątna a ma 8 cali. To trójka 8-15-17. Dwa tryby brakującej przyprostokątnej różnią się tylko tym, która przyprostokątna jest znana; matematyka jest identyczna. [[[a = \\sqrt{17^2 - 15^2} = \\sqrt{289 - 225} = \\sqrt{64} = 8\\text{ inches}]]]"
          }
        ],
        "imgAlt": "Podzielony rysunek pokazujący dwa trójkąty prostokątne, w których rozwiązuje się brakujące przyprostokątne przy użyciu twierdzenia Pitagorasa",
        "figcaption": "Dwa obliczenia brakującej przyprostokątnej: znajdowanie b w trójkącie 5-12-13 oraz znajdowanie a w trójkącie 8-15-17.",
        "table": {
          "headers": [
            "Znane",
            "Szukane",
            "Wzór",
            "Tryb kalkulatora"
          ],
          "rows": [
            [
              "c = 13, a = 5",
              "b",
              "b = √(c² − a²)",
              "Missing Leg From c and a"
            ],
            [
              "c = 17, b = 15",
              "a",
              "a = √(c² − b²)",
              "Missing Leg From c and b"
            ]
          ]
        }
      },
      "side-howto": {
        "h2": "Jak korzystać z kalkulatora boków trójkąta prostokątnego",
        "h3s": [],
        "paragraphs": [
          "Kalkulator nie zapisuje wyników ani nie generuje raportów do pobrania. Użyj opcji resetowania, aby wyczyścić pola przed nowym obliczeniem."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator nie zapisuje wyników ani nie generuje raportów do pobrania. Użyj opcji resetowania, aby wyczyścić pola przed nowym obliczeniem."
          }
        ],
        "list": [
          "Rozpoznaj dwa pomiary, które znasz. Oba muszą być długościami boków, a nie kątami.",
          "Ustal, czy brakującą wartością jest przeciwprostokątna, czy przyprostokątna. Jeśli znasz obie przyprostokątne, potrzebujesz przeciwprostokątnej. Jeśli znasz przeciwprostokątną i jedną przyprostokątną, potrzebujesz drugiej przyprostokątnej.",
          "Wybierz właściwy tryb. Wybierz „Twierdzenie Pitagorasa” dla dwóch znanych przyprostokątnych, „Missing Leg From c and a”, gdy znasz przeciwprostokątną i przyprostokątną a, lub „Missing Leg From c and b”, gdy znasz przeciwprostokątną i przyprostokątną b.",
          "Wprowadź oba pomiary w odpowiednich polach. Sprawdź dokładnie, czy każda wartość trafia do właściwego pola; zamiana przeciwprostokątnej z przyprostokątną powoduje błąd.",
          "Wybierz jednostkę miary. Użyj tej samej jednostki dla obu danych wejściowych.",
          "Oblicz. Wynik pojawia się wraz z krokami rozwiązania pokazującymi podstawienie i obliczenia.",
          "Przejrzyj wynik i kroki. Potwierdź, że wzór odpowiada Twojej sytuacji i że obliczenia wyglądają poprawnie.",
          "Sprawdź, czy odpowiedź ma sens. Przeciwprostokątna musi przewyższać obie przyprostokątne. Brakująca przyprostokątna musi być krótsza od przeciwprostokątnej. Jeśli to się nie zgadza, sprawdź dane wejściowe ponownie."
        ]
      },
      "side-formulas": {
        "h2": "Wzory na boki trójkąta prostokątnego w skrócie",
        "h3s": [],
        "paragraphs": [
          "Nie musisz zapamiętywać trzech oddzielnych wzorów. Zapamiętaj tylko [[a^2 + b^2 = c^2]], a następnie rozwiąż względem nieznanej. Jeśli c jest nieznane, dodaj kwadraty przyprostokątnych i wyciągnij pierwiastek. Jeśli nieznana jest przyprostokątna, odejmij kwadrat znanej przyprostokątnej od c² i wyciągnij pierwiastek. Nazwy trybów kalkulatora mówią, którego układu użyć."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Nie musisz zapamiętywać trzech oddzielnych wzorów. Zapamiętaj tylko [[a^2 + b^2 = c^2]], a następnie rozwiąż względem nieznanej. Jeśli c jest nieznane, dodaj kwadraty przyprostokątnych i wyciągnij pierwiastek. Jeśli nieznana jest przyprostokątna, odejmij kwadrat znanej przyprostokątnej od c² i wyciągnij pierwiastek. Nazwy trybów kalkulatora mówią, którego układu użyć."
          }
        ],
        "table": {
          "headers": [
            "Znane pomiary",
            "Brakujący bok",
            "Wzór",
            "Tryb kalkulatora",
            "Przykład"
          ],
          "rows": [
            [
              "Przyprostokątne a i b",
              "Przeciwprostokątna c",
              "c = √(a² + b²)",
              "Pythagorean Theorem",
              "a=6, b=8 → c=10"
            ],
            [
              "Przeciwprostokątna c, przyprostokątna a",
              "Przyprostokątna b",
              "b = √(c² − a²)",
              "Missing Leg From c and a",
              "c=13, a=5 → b=12"
            ],
            [
              "Przeciwprostokątna c, przyprostokątna b",
              "Przyprostokątna a",
              "a = √(c² − b²)",
              "Missing Leg From c and b",
              "c=17, b=15 → a=8"
            ]
          ]
        }
      },
      "side-applications": {
        "h2": "Przykłady z życia obliczeń boków trójkąta prostokątnego",
        "h3s": [
          "Przykład 5: Drabina przy ścianie",
          "Przykład 6: Przekątna prostokątnego pokoju",
          "Przykład 7: Długość krokwi dachowej",
          "Przykład 8: Przekątna telewizora lub monitora",
          "Przykład 9: Pomiar rampy",
          "Przykład 10: Prostokątna ścieżka w ogrodzie",
          "Przykład 11: Zastrzał wsporczy o znanej przekątnej",
          "Przykład 12: Rysunek techniczny z wartościami dziesiętnymi"
        ],
        "paragraphs": [
          "Drabina sięga 2.4 m w górę ściany, a jej podstawa znajduje się 1.8 m od ściany. Ściana i grunt tworzą kąt prosty, powstaje trójkąt prostokątny, w którym drabina jest przeciwprostokątną. Znane: a = 1.8 m (podstawa), b = 2.4 m (wysokość). Znajdź: c (długość drabiny). Wzór: [[c = \\sqrt{a^2 + b^2}]]. Podstaw: c = √(1.8² + 2.4²) = √(3.24 + 5.76) = √9 = 3. Drabina mierzy 3 m. To mówi, jakiej długości drabiny potrzebujesz, aby sięgnąć na tę wysokość z tej odległości. Uwaga: ta geometria nie ocenia bezpieczeństwa drabiny; przy rzeczywistym użytkowaniu postępuj zgodnie z wytycznymi producenta i przepisami bezpieczeństwa.",
          "Pokój mierzy 9 ft długości i 12 ft szerokości. Przekątna między przeciwległymi rogami tworzy przeciwprostokątną trójkąta prostokątnego, którego przyprostokątnymi są ściany. Znane: a = 9 ft, b = 12 ft. Znajdź: c. Wzór: c = √(9² + 12²) = √(81 + 144) = √225 = 15. Przekątna wynosi 15 ft. Pomaga to sprawdzić, czy pokój jest prostokątny (obie przekątne powinny być równe), lub ustalić najdłuższą odległość w linii prostej przy ustawianiu mebli.",
          "Uproszczony przekrój dachu ma poziomy wysięg 12 ft i pionowy wznios 5 ft. Krokiew tworzy przeciwprostokątną. Znane: wysięg = 12 ft, wznios = 5 ft. Znajdź: długość krokwi. Wzór: c = √(12² + 5²) = √(144 + 25) = √169 = 13. Krokiew ma 13 ft długości. To podstawowe obliczenie nie uwzględnia okapów, grubości kalenicy ani zapasów na połączenia, których wymaga prawdziwe budownictwo. Pełne specyfikacje znajdziesz w planach budowlanych.",
          "Prostokątny wyświetlacz mierzy 16 cali szerokości i 9 cali wysokości. Przekątna jest przeciwprostokątną. Znane: szerokość = 16 in, wysokość = 9 in. Znajdź: przekątną. Wzór: d = √(16² + 9²) = √(256 + 81) = √337 ≈ 18.36. Przekątna mierzy około 18.36 cala. Wykorzystuje podane wymiary; komercyjne rozmiary ekranów mogą się różnić w zależności od metod pomiaru producenta.",
          "Rampa ma poziomy wybieg 6 m i wznios 0.75 m. Pochyła powierzchnia jest przeciwprostokątną. Znane: wybieg = 6 m, wznios = 0.75 m. Znajdź: długość pochylni. Wzór: s = √(6² + 0.75²) = √(36 + 0.5625) = √36.5625 ≈ 6.05. Pochylnia mierzy około 6.05 m. Poziomy wybieg (6 m) różni się od długości pochylni (6.05 m); pochylnia jest zawsze nieco dłuższa. Nie weryfikuje to zgodności z przepisami dostępności; wymagania dotyczące ramp sprawdź w lokalnych przepisach budowlanych.",
          "Prostokątny ogród ma 30 ft szerokości i 40 ft długości. Ścieżka po przekątnej przecina go w poprzek. Znane: a = 30 ft, b = 40 ft. Znajdź: długość ścieżki. Wzór: c = √(30² + 40²) = √(900 + 1600) = √2500 = 50. Ścieżka ma 50 ft. Przejście po przekątnej (50 ft) jest krótsze niż przejście wzdłuż dwóch boków (70 ft), dlatego ścieżki po przekątnej oszczędzają czas.",
          "Zastrzał wsporczy mierzy 10 ft długości (przeciwprostokątna) i rozciąga się 8 ft poziomo. Znajdź odległość pionową. Znane: c = 10 ft, a = 8 ft. Znajdź: b. Wzór: b = √(c² − a²) = √(100 − 64) = √36 = 6. Odległość pionowa wynosi 6 ft. Odejmowanie jest konieczne, ponieważ kwadrat przeciwprostokątnej zawiera kwadraty obu przyprostokątnych; usunięcie znanej poziomej składowej pozostawia pionową.",
          "W projekcie wspornika podano przeciwprostokątną 250 mm i jedną przyprostokątną 70 mm. Znajdź drugą przyprostokątną. Znane: c = 250 mm, b = 70 mm. Znajdź: a. Wzór: a = √(c² − b²) = √(62500 − 4900) = √57600 = 240. Przyprostokątna mierzy 240 mm. Przy danych w milimetrach wynik jest tu dokładny, ale w praktyce zaokrąglaj do precyzji najmniej dokładnego pomiaru. Nie podawaj więcej miejsc dziesiętnych, niż potrafią zmierzyć Twoje narzędzia."
        ],
        "blocks": [
          {
            "kind": "h3",
            "text": "Przykład 5: Drabina przy ścianie"
          },
          {
            "kind": "p",
            "text": "Drabina sięga 2.4 m w górę ściany, a jej podstawa znajduje się 1.8 m od ściany. Ściana i grunt tworzą kąt prosty, powstaje trójkąt prostokątny, w którym drabina jest przeciwprostokątną. Znane: a = 1.8 m (podstawa), b = 2.4 m (wysokość). Znajdź: c (długość drabiny). Wzór: [[c = \\sqrt{a^2 + b^2}]]. Podstaw: c = √(1.8² + 2.4²) = √(3.24 + 5.76) = √9 = 3. Drabina mierzy 3 m. To mówi, jakiej długości drabiny potrzebujesz, aby sięgnąć na tę wysokość z tej odległości. Uwaga: ta geometria nie ocenia bezpieczeństwa drabiny; przy rzeczywistym użytkowaniu postępuj zgodnie z wytycznymi producenta i przepisami bezpieczeństwa."
          },
          {
            "kind": "h3",
            "text": "Przykład 6: Przekątna prostokątnego pokoju"
          },
          {
            "kind": "p",
            "text": "Pokój mierzy 9 ft długości i 12 ft szerokości. Przekątna między przeciwległymi rogami tworzy przeciwprostokątną trójkąta prostokątnego, którego przyprostokątnymi są ściany. Znane: a = 9 ft, b = 12 ft. Znajdź: c. Wzór: c = √(9² + 12²) = √(81 + 144) = √225 = 15. Przekątna wynosi 15 ft. Pomaga to sprawdzić, czy pokój jest prostokątny (obie przekątne powinny być równe), lub ustalić najdłuższą odległość w linii prostej przy ustawianiu mebli."
          },
          {
            "kind": "h3",
            "text": "Przykład 7: Długość krokwi dachowej"
          },
          {
            "kind": "p",
            "text": "Uproszczony przekrój dachu ma poziomy wysięg 12 ft i pionowy wznios 5 ft. Krokiew tworzy przeciwprostokątną. Znane: wysięg = 12 ft, wznios = 5 ft. Znajdź: długość krokwi. Wzór: c = √(12² + 5²) = √(144 + 25) = √169 = 13. Krokiew ma 13 ft długości. To podstawowe obliczenie nie uwzględnia okapów, grubości kalenicy ani zapasów na połączenia, których wymaga prawdziwe budownictwo. Pełne specyfikacje znajdziesz w planach budowlanych."
          },
          {
            "kind": "h3",
            "text": "Przykład 8: Przekątna telewizora lub monitora"
          },
          {
            "kind": "p",
            "text": "Prostokątny wyświetlacz mierzy 16 cali szerokości i 9 cali wysokości. Przekątna jest przeciwprostokątną. Znane: szerokość = 16 in, wysokość = 9 in. Znajdź: przekątną. Wzór: d = √(16² + 9²) = √(256 + 81) = √337 ≈ 18.36. Przekątna mierzy około 18.36 cala. Wykorzystuje podane wymiary; komercyjne rozmiary ekranów mogą się różnić w zależności od metod pomiaru producenta."
          },
          {
            "kind": "h3",
            "text": "Przykład 9: Pomiar rampy"
          },
          {
            "kind": "p",
            "text": "Rampa ma poziomy wybieg 6 m i wznios 0.75 m. Pochyła powierzchnia jest przeciwprostokątną. Znane: wybieg = 6 m, wznios = 0.75 m. Znajdź: długość pochylni. Wzór: s = √(6² + 0.75²) = √(36 + 0.5625) = √36.5625 ≈ 6.05. Pochylnia mierzy około 6.05 m. Poziomy wybieg (6 m) różni się od długości pochylni (6.05 m); pochylnia jest zawsze nieco dłuższa. Nie weryfikuje to zgodności z przepisami dostępności; wymagania dotyczące ramp sprawdź w lokalnych przepisach budowlanych."
          },
          {
            "kind": "h3",
            "text": "Przykład 10: Prostokątna ścieżka w ogrodzie"
          },
          {
            "kind": "p",
            "text": "Prostokątny ogród ma 30 ft szerokości i 40 ft długości. Ścieżka po przekątnej przecina go w poprzek. Znane: a = 30 ft, b = 40 ft. Znajdź: długość ścieżki. Wzór: c = √(30² + 40²) = √(900 + 1600) = √2500 = 50. Ścieżka ma 50 ft. Przejście po przekątnej (50 ft) jest krótsze niż przejście wzdłuż dwóch boków (70 ft), dlatego ścieżki po przekątnej oszczędzają czas."
          },
          {
            "kind": "h3",
            "text": "Przykład 11: Zastrzał wsporczy o znanej przekątnej"
          },
          {
            "kind": "p",
            "text": "Zastrzał wsporczy mierzy 10 ft długości (przeciwprostokątna) i rozciąga się 8 ft poziomo. Znajdź odległość pionową. Znane: c = 10 ft, a = 8 ft. Znajdź: b. Wzór: b = √(c² − a²) = √(100 − 64) = √36 = 6. Odległość pionowa wynosi 6 ft. Odejmowanie jest konieczne, ponieważ kwadrat przeciwprostokątnej zawiera kwadraty obu przyprostokątnych; usunięcie znanej poziomej składowej pozostawia pionową."
          },
          {
            "kind": "h3",
            "text": "Przykład 12: Rysunek techniczny z wartościami dziesiętnymi"
          },
          {
            "kind": "p",
            "text": "W projekcie wspornika podano przeciwprostokątną 250 mm i jedną przyprostokątną 70 mm. Znajdź drugą przyprostokątną. Znane: c = 250 mm, b = 70 mm. Znajdź: a. Wzór: a = √(c² − b²) = √(62500 − 4900) = √57600 = 240. Przyprostokątna mierzy 240 mm. Przy danych w milimetrach wynik jest tu dokładny, ale w praktyce zaokrąglaj do precyzji najmniej dokładnego pomiaru. Nie podawaj więcej miejsc dziesiętnych, niż potrafią zmierzyć Twoje narzędzia."
          }
        ],
        "imgAlt": "Cztery panele pokazujące drabinę przy ścianie, przekątną pokoju, krokiew dachową i ścieżkę w ogrodzie z pomiarami trójkąta prostokątnego",
        "figcaption": "Codzienne trójkąty prostokątne: drabina (3 m), przekątna pokoju (15 ft), krokiew dachowa (13 ft) i ścieżka w ogrodzie (50 ft)."
      },
      "side-triples": {
        "h2": "Popularne trójki pitagorejskie i dlaczego mają znaczenie",
        "h3s": [],
        "paragraphs": [
          "Trójka pitagorejska składa się z trzech liczb całkowitych spełniających [[a^2 + b^2 = c^2]]. Te trójki dają szybkie kontrole w pamięci; jeśli Twoje dane pasują do trójki, znasz odpowiedź bez obliczeń. Skalowane trójki też działają: pomnożenie 3-4-5 przez 2 daje 6-8-10, co nadal spełnia równanie (36 + 64 = 100). Nie każdy trójkąt prostokątny ma boki całkowite; większość daje liczby dziesiętne lub niewymierne.",
          "Sprawdź 5-12-13: 5² = 25, 12² = 144, 25 + 144 = 169, √169 = 13. Sprawdź 8-15-17: 8² = 64, 15² = 225, 64 + 225 = 289, √289 = 17. Gdy kalkulator zwraca liczbę całkowitą, sprawdź, czy tworzy trójkę z Twoimi danymi, jako kontrolę poprawności."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Trójka pitagorejska składa się z trzech liczb całkowitych spełniających [[a^2 + b^2 = c^2]]. Te trójki dają szybkie kontrole w pamięci; jeśli Twoje dane pasują do trójki, znasz odpowiedź bez obliczeń. Skalowane trójki też działają: pomnożenie 3-4-5 przez 2 daje 6-8-10, co nadal spełnia równanie (36 + 64 = 100). Nie każdy trójkąt prostokątny ma boki całkowite; większość daje liczby dziesiętne lub niewymierne."
          },
          {
            "kind": "p",
            "text": "Sprawdź 5-12-13: 5² = 25, 12² = 144, 25 + 144 = 169, √169 = 13. Sprawdź 8-15-17: 8² = 64, 15² = 225, 64 + 225 = 289, √289 = 17. Gdy kalkulator zwraca liczbę całkowitą, sprawdź, czy tworzy trójkę z Twoimi danymi, jako kontrolę poprawności."
          }
        ],
        "table": {
          "headers": [
            "Trójka",
            "Weryfikacja"
          ],
          "rows": [
            [
              "3-4-5",
              "9 + 16 = 25 ✓"
            ],
            [
              "5-12-13",
              "25 + 144 = 169 ✓"
            ],
            [
              "8-15-17",
              "64 + 225 = 289 ✓"
            ],
            [
              "7-24-25",
              "49 + 576 = 625 ✓"
            ],
            [
              "9-40-41",
              "81 + 1600 = 1681 ✓"
            ],
            [
              "6-8-10",
              "36 + 64 = 100 ✓ (scaled 3-4-5)"
            ]
          ]
        }
      },
      "side-units": {
        "h2": "Jednostki miary, odpowiedzi dziesiętne i zaokrąglanie",
        "h3s": [],
        "paragraphs": [
          "Używaj spójnych jednostek: milimetry, centymetry, metry, cale, stopy, jardy lub kilometry. Mieszane jednostki dają błędne odpowiedzi; 3 stopy i 6 cali trzeba zamienić na 3.5 stopy lub 42 cale przed obliczeniem. Najpierw przelicz, potem oblicz. Wybierz pasującą jednostkę w kalkulatorze dla obu danych wejściowych. Zaokrąglaj dopiero po końcowym obliczeniu, nie w trakcie kroków pośrednich, aby uniknąć narastania błędów. Dokładna odpowiedź jak 10 cm różni się od zaokrąglonej liczby dziesiętnej jak 6.50 m; ta druga sugeruje precyzję pomiaru. Twój wynik nie może być dokładniejszy niż najmniej dokładne dane wejściowe. Jeśli mierzysz z dokładnością do centymetra, nie podawaj milimetrów.",
          "Przykład ze stopami i calami: deska mierzy 2 ft 6 in na 3 ft. Przelicz na cale: 30 in i 36 in. Oblicz: c = √(30² + 36²) = √(900 + 1296) = √2196 ≈ 46.86 in. Przelicz z powrotem: 46.86 in = 3 ft 10.86 in, czyli około 3 ft 10.9 in.",
          "Uwaga: podniesienie długości do kwadratu daje jednostki kwadratowe (cm²), ale końcowy pierwiastek kwadratowy zwraca jednostki liniowe (cm). Kalkulator obsługuje to automatycznie."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Używaj spójnych jednostek: milimetry, centymetry, metry, cale, stopy, jardy lub kilometry. Mieszane jednostki dają błędne odpowiedzi; 3 stopy i 6 cali trzeba zamienić na 3.5 stopy lub 42 cale przed obliczeniem. Najpierw przelicz, potem oblicz. Wybierz pasującą jednostkę w kalkulatorze dla obu danych wejściowych. Zaokrąglaj dopiero po końcowym obliczeniu, nie w trakcie kroków pośrednich, aby uniknąć narastania błędów. Dokładna odpowiedź jak 10 cm różni się od zaokrąglonej liczby dziesiętnej jak 6.50 m; ta druga sugeruje precyzję pomiaru. Twój wynik nie może być dokładniejszy niż najmniej dokładne dane wejściowe. Jeśli mierzysz z dokładnością do centymetra, nie podawaj milimetrów."
          },
          {
            "kind": "p",
            "text": "Przykład ze stopami i calami: deska mierzy 2 ft 6 in na 3 ft. Przelicz na cale: 30 in i 36 in. Oblicz: c = √(30² + 36²) = √(900 + 1296) = √2196 ≈ 46.86 in. Przelicz z powrotem: 46.86 in = 3 ft 10.86 in, czyli około 3 ft 10.9 in."
          },
          {
            "kind": "p",
            "text": "Uwaga: podniesienie długości do kwadratu daje jednostki kwadratowe (cm²), ale końcowy pierwiastek kwadratowy zwraca jednostki liniowe (cm). Kalkulator obsługuje to automatycznie."
          }
        ]
      },
      "side-invalid": {
        "h2": "Dlaczego niektóre pomiary trójkąta nie mogą dać poprawnej odpowiedzi",
        "h3s": [],
        "paragraphs": [
          "Poprawny trójkąt prostokątny potrzebuje trzech dodatnich długości boków, przy czym przeciwprostokątna przewyższa każdą przyprostokątną. Przy obliczeniach brakującej przyprostokątnej wartość pod pierwiastkiem (c² − przyprostokątna²) musi być dodatnia.",
          "Nieprawidłowe: c = 8, a = 10. Przeciwprostokątna (8) jest krótsza od przyprostokątnej (10). Narusza to zasadę, że przeciwprostokątna jest najdłuższa. Prawdopodobnie zamieniłeś oznaczenia; 10 powinno być przeciwprostokątną.",
          "Nieprawidłowe: c = 5, a = 5. Wtedy b = √(25 − 25) = √0 = 0. Bok o zerowej długości zapada trójkąt w odcinek linii, a nie poprawny trójkąt.",
          "Nieprawidłowe: a = −3, b = 4. Ujemne długości nie mają znaczenia geometrycznego. Długości boków muszą być dodatnie."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Poprawny trójkąt prostokątny potrzebuje trzech dodatnich długości boków, przy czym przeciwprostokątna przewyższa każdą przyprostokątną. Przy obliczeniach brakującej przyprostokątnej wartość pod pierwiastkiem (c² − przyprostokątna²) musi być dodatnia."
          },
          {
            "kind": "p",
            "text": "Nieprawidłowe: c = 8, a = 10. Przeciwprostokątna (8) jest krótsza od przyprostokątnej (10). Narusza to zasadę, że przeciwprostokątna jest najdłuższa. Prawdopodobnie zamieniłeś oznaczenia; 10 powinno być przeciwprostokątną."
          },
          {
            "kind": "p",
            "text": "Nieprawidłowe: c = 5, a = 5. Wtedy b = √(25 − 25) = √0 = 0. Bok o zerowej długości zapada trójkąt w odcinek linii, a nie poprawny trójkąt."
          },
          {
            "kind": "p",
            "text": "Nieprawidłowe: a = −3, b = 4. Ujemne długości nie mają znaczenia geometrycznego. Długości boków muszą być dodatnie."
          }
        ],
        "table": {
          "headers": [
            "Problem",
            "Przyczyna",
            "Rozwiązanie"
          ],
          "rows": [
            [
              "Przeciwprostokątna krótsza od przyprostokątnej",
              "Zamienione oznaczenia",
              "Oznacz najdłuższy bok jako c"
            ],
            [
              "Zero pod pierwiastkiem kwadratowym",
              "c równa się znanej przyprostokątnej",
              "Sprawdź pomiary; trójkąt jest zdegenerowany"
            ],
            [
              "Wartość ujemna pod pierwiastkiem kwadratowym",
              "c krótsza od znanej przyprostokątnej",
              "Dane wejściowe nie mogą utworzyć trójkąta prostokątnego"
            ],
            [
              "Ujemne dane wejściowe",
              "Literówka lub błąd znaku",
              "Używaj tylko dodatnich długości"
            ],
            [
              "Zerowe dane wejściowe",
              "Brakujący pomiar",
              "Wprowadź rzeczywistą długość"
            ],
            [
              "Pomieszane jednostki",
              "Stopy z calami",
              "Najpierw przelicz na jedną jednostkę"
            ],
            [
              "Trójkąt nieprostokątny",
              "Brak kąta 90°",
              "Zamiast tego użyj twierdzenia cosinusów"
            ]
          ]
        }
      },
      "side-verify": {
        "h2": "Jak sprawdzić, czy obliczony bok jest poprawny",
        "h3s": [],
        "paragraphs": [
          "Metoda 1: Podstawienie z powrotem. Wstaw wszystkie trzy boki do [[a^2 + b^2 = c^2]]. Dla trójkąta 6-8-10: 36 + 64 = 100. Jeśli obie strony się zgadzają, odpowiedź jest poprawna.",
          "Metoda 2: Sprawdź, czy przeciwprostokątna jest najdłuższa. Jeśli rozwiązywałeś c, potwierdź, że przewyższa zarówno a, jak i b. Jeśli rozwiązywałeś przyprostokątną, potwierdź, że jest krótsza od c.",
          "Metoda 3: Porównaj z trójkami. Jeśli Twoje dane są liczbami całkowitymi, sprawdź, czy tworzą znaną trójkę. Dane 9 i 12 dające 15 pasują do przeskalowanej trójki 3-4-5.",
          "Metoda 4: Oszacuj sensowność. Przeciwprostokątna powinna być dłuższa od każdej przyprostokątnej, ale krótsza od ich sumy. Dla przyprostokątnych 6 i 8 przeciwprostokątna 10 spełnia 8 < 10 < 14.",
          "Metoda 5: Sprawdź jednostki i zaokrąglenie. Potwierdź, że jednostka odpowiada danym wejściowym, a miejsca dziesiętne odzwierciedlają precyzję pomiaru.",
          "Przykład weryfikacji 1: Obliczasz c = 13 z a = 5, b = 12. Sprawdź: 5² + 12² = 25 + 144 = 169 = 13². Przeciwprostokątna 13 przewyższa obie przyprostokątne. Pasuje to do trójki 5-12-13. Poprawne.",
          "Przykład weryfikacji 2: Obliczasz b = 7.5 z c = 12.5, a = 10. Sprawdź: 10² + 7.5² = 100 + 56.25 = 156.25 = 12.5². Przyprostokątna 7.5 jest krótsza od przeciwprostokątnej 12.5. Oszacowanie: 10 < 12.5 < 20. Poprawne."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Metoda 1: Podstawienie z powrotem. Wstaw wszystkie trzy boki do [[a^2 + b^2 = c^2]]. Dla trójkąta 6-8-10: 36 + 64 = 100. Jeśli obie strony się zgadzają, odpowiedź jest poprawna."
          },
          {
            "kind": "p",
            "text": "Metoda 2: Sprawdź, czy przeciwprostokątna jest najdłuższa. Jeśli rozwiązywałeś c, potwierdź, że przewyższa zarówno a, jak i b. Jeśli rozwiązywałeś przyprostokątną, potwierdź, że jest krótsza od c."
          },
          {
            "kind": "p",
            "text": "Metoda 3: Porównaj z trójkami. Jeśli Twoje dane są liczbami całkowitymi, sprawdź, czy tworzą znaną trójkę. Dane 9 i 12 dające 15 pasują do przeskalowanej trójki 3-4-5."
          },
          {
            "kind": "p",
            "text": "Metoda 4: Oszacuj sensowność. Przeciwprostokątna powinna być dłuższa od każdej przyprostokątnej, ale krótsza od ich sumy. Dla przyprostokątnych 6 i 8 przeciwprostokątna 10 spełnia 8 < 10 < 14."
          },
          {
            "kind": "p",
            "text": "Metoda 5: Sprawdź jednostki i zaokrąglenie. Potwierdź, że jednostka odpowiada danym wejściowym, a miejsca dziesiętne odzwierciedlają precyzję pomiaru."
          },
          {
            "kind": "p",
            "text": "Przykład weryfikacji 1: Obliczasz c = 13 z a = 5, b = 12. Sprawdź: 5² + 12² = 25 + 144 = 169 = 13². Przeciwprostokątna 13 przewyższa obie przyprostokątne. Pasuje to do trójki 5-12-13. Poprawne."
          },
          {
            "kind": "p",
            "text": "Przykład weryfikacji 2: Obliczasz b = 7.5 z c = 12.5, a = 10. Sprawdź: 10² + 7.5² = 100 + 56.25 = 156.25 = 12.5². Przyprostokątna 7.5 jest krótsza od przeciwprostokątnej 12.5. Oszacowanie: 10 < 12.5 < 20. Poprawne."
          }
        ]
      },
      "side-mistakes": {
        "h2": "Częste błędy przy obliczaniu boków trójkąta prostokątnego",
        "h3s": [],
        "paragraphs": [
          "1. Dodawanie przyprostokątnych zamiast ich kwadratów. Obliczanie 6 + 8 = 14 zamiast √(36 + 64) = 10. Twierdzenie dodaje pola kwadratów, a nie długości. Zawsze najpierw podnoś do kwadratu.",
          "2. Zapominanie o pierwiastku kwadratowym. Odpowiadanie 100 zamiast 10 dla trójkąta 6-8. Wzór daje c²; potrzebujesz c. Wyciągnij pierwiastek jako ostatni krok.",
          "3. Odejmowanie przy znajdowaniu przeciwprostokątnej. Używanie √(64 − 36) = √28 zamiast √(64 + 36) = 10. Dodawanie stosuje się przy znajdowaniu przeciwprostokątnej z dwóch przyprostokątnych.",
          "4. Dodawanie przy znajdowaniu brakującej przyprostokątnej. Używanie √(169 + 25) zamiast √(169 − 25) = 12. Odejmowanie stosuje się, gdy znana jest przeciwprostokątna.",
          "5. Mylenie przyprostokątnej z przeciwprostokątną. Oznaczanie najdłuższego boku jako a lub b. Przeciwprostokątna jest zawsze naprzeciw kąta prostego i zawsze oznaczona c.",
          "6. Stosowanie twierdzenia do trójkąta nieprostokątnego. Używanie a² + b² = c² bez kąta 90 stopni. Najpierw sprawdź kąt prosty.",
          "7. Zaokrąglanie obliczeń pośrednich. Zaokrąglanie 6.25 do 6.3 w trakcie obliczeń, a potem otrzymywanie nieco błędnej końcowej odpowiedzi. Zachowaj pełną precyzję do końca.",
          "8. Mieszanie jednostek miary. Wprowadzanie 3 stóp i 6 cali jako 3 i 6. Przelicz na jedną jednostkę przed obliczeniem.",
          "9. Wprowadzanie wartości w złe pola. Wpisywanie przeciwprostokątnej w pole przyprostokątnej. Dopasuj każdy pomiar do właściwej etykiety.",
          "10. Błędna interpretacja wartości ujemnej pod pierwiastkiem. Widzenie √(25 − 36) i wymuszanie obliczenia. Ujemna liczba podpierwiastkowa oznacza, że dane wejściowe nie mogą utworzyć trójkąta prostokątnego; sprawdź oznaczenia."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "1. Dodawanie przyprostokątnych zamiast ich kwadratów. Obliczanie 6 + 8 = 14 zamiast √(36 + 64) = 10. Twierdzenie dodaje pola kwadratów, a nie długości. Zawsze najpierw podnoś do kwadratu."
          },
          {
            "kind": "p",
            "text": "2. Zapominanie o pierwiastku kwadratowym. Odpowiadanie 100 zamiast 10 dla trójkąta 6-8. Wzór daje c²; potrzebujesz c. Wyciągnij pierwiastek jako ostatni krok."
          },
          {
            "kind": "p",
            "text": "3. Odejmowanie przy znajdowaniu przeciwprostokątnej. Używanie √(64 − 36) = √28 zamiast √(64 + 36) = 10. Dodawanie stosuje się przy znajdowaniu przeciwprostokątnej z dwóch przyprostokątnych."
          },
          {
            "kind": "p",
            "text": "4. Dodawanie przy znajdowaniu brakującej przyprostokątnej. Używanie √(169 + 25) zamiast √(169 − 25) = 12. Odejmowanie stosuje się, gdy znana jest przeciwprostokątna."
          },
          {
            "kind": "p",
            "text": "5. Mylenie przyprostokątnej z przeciwprostokątną. Oznaczanie najdłuższego boku jako a lub b. Przeciwprostokątna jest zawsze naprzeciw kąta prostego i zawsze oznaczona c."
          },
          {
            "kind": "p",
            "text": "6. Stosowanie twierdzenia do trójkąta nieprostokątnego. Używanie a² + b² = c² bez kąta 90 stopni. Najpierw sprawdź kąt prosty."
          },
          {
            "kind": "p",
            "text": "7. Zaokrąglanie obliczeń pośrednich. Zaokrąglanie 6.25 do 6.3 w trakcie obliczeń, a potem otrzymywanie nieco błędnej końcowej odpowiedzi. Zachowaj pełną precyzję do końca."
          },
          {
            "kind": "p",
            "text": "8. Mieszanie jednostek miary. Wprowadzanie 3 stóp i 6 cali jako 3 i 6. Przelicz na jedną jednostkę przed obliczeniem."
          },
          {
            "kind": "p",
            "text": "9. Wprowadzanie wartości w złe pola. Wpisywanie przeciwprostokątnej w pole przyprostokątnej. Dopasuj każdy pomiar do właściwej etykiety."
          },
          {
            "kind": "p",
            "text": "10. Błędna interpretacja wartości ujemnej pod pierwiastkiem. Widzenie √(25 − 36) i wymuszanie obliczenia. Ujemna liczba podpierwiastkowa oznacza, że dane wejściowe nie mogą utworzyć trójkąta prostokątnego; sprawdź oznaczenia."
          }
        ]
      },
      "side-beyond": {
        "h2": "Kiedy potrzebujesz innego wzoru na trójkąt prostokątny?",
        "h3s": [],
        "paragraphs": [
          "Twierdzenie Pitagorasa wymaga dwóch znanych boków. Inne informacje wymagają innych narzędzi.",
          "Jeden bok i jeden kąt ostry: Użyj sinusa, cosinusa lub tangensa. Sinus wiąże bok przeciwległy z przeciwprostokątną, cosinus wiąże bok przyległy z przeciwprostokątną, a tangens wiąże bok przeciwległy z przyległym. Na przykład przy przeciwprostokątnej c i kącie A przyprostokątna a = c × sin(A).",
          "Dwa kąty, zero boków: Niemożliwe. Kąty określają kształt, ale nie rozmiar; trójkąt 3-4-5 i trójkąt 6-8-10 mają te same kąty, ale różnią się skalą. Potrzebujesz co najmniej jednej długości boku.",
          "Trójkąt nieprostokątny: Użyj twierdzenia cosinusów (c² = a² + b² − 2ab×cos(C)) lub twierdzenia sinusów. Twierdzenie Pitagorasa jest szczególnym przypadkiem twierdzenia cosinusów, gdy C = 90°.",
          "Specjalne trójkąty prostokątne: Trójkąt 45-45-90 ma przyprostokątne w stosunku 1:1:√2, a trójkąt 30-60-90 ma boki w stosunku 1:√3:2. Pozwalają na szybkie obliczenia w pamięci.",
          "Jeśli znasz jeden bok i jeden kąt ostry, użyj kalkulatora boków trójkąta prostokątnego z kąta na tej stronie."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Twierdzenie Pitagorasa wymaga dwóch znanych boków. Inne informacje wymagają innych narzędzi."
          },
          {
            "kind": "p",
            "text": "Jeden bok i jeden kąt ostry: Użyj sinusa, cosinusa lub tangensa. Sinus wiąże bok przeciwległy z przeciwprostokątną, cosinus wiąże bok przyległy z przeciwprostokątną, a tangens wiąże bok przeciwległy z przyległym. Na przykład przy przeciwprostokątnej c i kącie A przyprostokątna a = c × sin(A)."
          },
          {
            "kind": "p",
            "text": "Dwa kąty, zero boków: Niemożliwe. Kąty określają kształt, ale nie rozmiar; trójkąt 3-4-5 i trójkąt 6-8-10 mają te same kąty, ale różnią się skalą. Potrzebujesz co najmniej jednej długości boku."
          },
          {
            "kind": "p",
            "text": "Trójkąt nieprostokątny: Użyj twierdzenia cosinusów (c² = a² + b² − 2ab×cos(C)) lub twierdzenia sinusów. Twierdzenie Pitagorasa jest szczególnym przypadkiem twierdzenia cosinusów, gdy C = 90°."
          },
          {
            "kind": "p",
            "text": "Specjalne trójkąty prostokątne: Trójkąt 45-45-90 ma przyprostokątne w stosunku 1:1:√2, a trójkąt 30-60-90 ma boki w stosunku 1:√3:2. Pozwalają na szybkie obliczenia w pamięci."
          },
          {
            "kind": "p",
            "text": "Jeśli znasz jeden bok i jeden kąt ostry, użyj kalkulatora boków trójkąta prostokątnego z kąta na tej stronie."
          }
        ],
        "linkAnchor": "kalkulatora boków trójkąta prostokątnego z kąta"
      },
      "side-related": {
        "h2": "Inne kalkulatory trójkąta prostokątnego, które mogą Ci się przydać",
        "h3s": [],
        "paragraphs": [
          "Po znalezieniu brakującego boku kontynuuj z tymi powiązanymi kalkulatorami, aby dokończyć analizę trójkąta."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Po znalezieniu brakującego boku kontynuuj z tymi powiązanymi kalkulatorami, aby dokończyć analizę trójkąta."
          }
        ]
      },
      "side-faq": {
        "h2": "Często zadawane pytania",
        "h3s": [],
        "paragraphs": [],
        "blocks": []
      },
      "side-summary": {
        "h2": "Obliczaj boki trójkąta prostokątnego z pewnością",
        "h3s": [],
        "paragraphs": [
          "Najpierw rozpoznaj dwa znane boki. Jeśli oba są przyprostokątnymi, potrzebujesz przeciwprostokątnej; jeśli jeden jest przeciwprostokątną, potrzebujesz brakującej przyprostokątnej. Wybierz pasujący wzór lub tryb kalkulatora. Wprowadź oba pomiary w tej samej jednostce. Oblicz, a następnie zweryfikuj: przeciwprostokątna musi być najdłuższa, a podstawienie z powrotem do a² + b² = c² powinno się zgadzać. Sprawdź jednostki i zaokrąglenie. Dzięki tym krokom możesz niezawodnie rozwiązać każde zadanie na bok trójkąta prostokątnego. Wróć do kalkulatora na górze tej strony, aby uruchomić swoje liczby."
        ],
        "blocks": [
          {
            "kind": "p",
            "text": "Najpierw rozpoznaj dwa znane boki. Jeśli oba są przyprostokątnymi, potrzebujesz przeciwprostokątnej; jeśli jeden jest przeciwprostokątną, potrzebujesz brakującej przyprostokątnej. Wybierz pasujący wzór lub tryb kalkulatora. Wprowadź oba pomiary w tej samej jednostce. Oblicz, a następnie zweryfikuj: przeciwprostokątna musi być najdłuższa, a podstawienie z powrotem do a² + b² = c² powinno się zgadzać. Sprawdź jednostki i zaokrąglenie. Dzięki tym krokom możesz niezawodnie rozwiązać każde zadanie na bok trójkąta prostokątnego. Wróć do kalkulatora na górze tej strony, aby uruchomić swoje liczby."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Jak obliczyć brakujący bok trójkąta prostokątnego?",
        "answer": "Użyj twierdzenia Pitagorasa: a² + b² = c². Jeśli znasz obie przyprostokątne, oblicz c = √(a² + b²). Jeśli znasz przeciwprostokątną i jedną przyprostokątną, oblicz brakującą przyprostokątną jako √(c² − znana przyprostokątna²). Potrzebujesz dokładnie dwóch długości boków; twierdzenie nie działa przy jednym boku ani przy samych kątach."
      },
      {
        "question": "Czy można znaleźć brakujący bok, znając dwa boki?",
        "answer": "Tak. Dwa boki wystarczą. Jeśli dwa znane boki to przyprostokątne, użyj wzoru na przeciwprostokątną. Jeśli jeden znany bok to przeciwprostokątna, użyj wzoru na brakującą przyprostokątną. Kalkulator określa, który tryb zastosować, na podstawie tego, czy przeciwprostokątna jest wśród danych wejściowych."
      },
      {
        "question": "Jak znaleźć przeciwprostokątną?",
        "answer": "Podnieś obie przyprostokątne do kwadratu, dodaj kwadraty i wyciągnij pierwiastek kwadratowy. Dla przyprostokątnych 6 i 8: 6² + 8² = 36 + 64 = 100, √100 = 10. Przeciwprostokątna jest zawsze najdłuższym bokiem, więc sprawdź, czy Twoja odpowiedź przewyższa obie przyprostokątne."
      },
      {
        "question": "Jak znaleźć brakującą przyprostokątną?",
        "answer": "Podnieś do kwadratu przeciwprostokątną i znaną przyprostokątną, odejmij kwadrat przyprostokątnej od kwadratu przeciwprostokątnej i wyciągnij pierwiastek kwadratowy. Dla przeciwprostokątnej 13 i przyprostokątnej 5: 169 − 25 = 144, √144 = 12. Wynik musi być krótszy od przeciwprostokątnej."
      },
      {
        "question": "Jaki jest wzór twierdzenia Pitagorasa?",
        "answer": "Wzór to a² + b² = c², gdzie a i b są przyprostokątnymi (bokami tworzącymi kąt prosty), a c jest przeciwprostokątną (bokiem naprzeciw kąta prostego). Ta zależność zachodzi dla każdego trójkąta prostokątnego."
      },
      {
        "question": "Czy przeciwprostokątna jest zawsze najdłuższym bokiem?",
        "answer": "Tak. Przeciwprostokątna łączy największą odległość między wierzchołkami, naprzeciw największego kąta (90 stopni). W każdym trójkącie najdłuższy bok leży naprzeciw największego kąta. Jeśli obliczona przeciwprostokątna jest krótsza od przyprostokątnej, sprawdź dane wejściowe ponownie."
      },
      {
        "question": "Czy twierdzenia Pitagorasa można używać w dowolnym trójkącie?",
        "answer": "Nie, tylko w trójkątach prostokątnych. Twierdzenie zależy od kąta 90 stopni. Dla trójkątów ostrokątnych lub rozwartokątnych użyj twierdzenia cosinusów. Zastosowanie twierdzenia Pitagorasa do trójkąta nieprostokątnego daje niepoprawne wyniki."
      },
      {
        "question": "Co jeśli odpowiedź jest liczbą dziesiętną?",
        "answer": "Liczby dziesiętne są normalne; większość trójkątów prostokątnych nie ma boków całkowitych. Obliczaj z pełną precyzją, a następnie zaokrąglij końcową odpowiedź do precyzji danych wejściowych. Na przykład √42.25 = 6.5 dokładnie, ale √50 ≈ 7.071 wymaga zaokrąglenia."
      },
      {
        "question": "Czy trójkąt prostokątny może mieć dwie równe przyprostokątne?",
        "answer": "Tak. To równoramienny trójkąt prostokątny 45-45-90, w którym przyprostokątne są równe, a przeciwprostokątna równa się przyprostokątna × √2. Dla przyprostokątnych 5 przeciwprostokątna wynosi 5√2 ≈ 7.071."
      },
      {
        "question": "Co jeśli przeciwprostokątna jest mniejsza od znanej przyprostokątnej?",
        "answer": "Dane wejściowe są nieprawidłowe. Przeciwprostokątna musi być najdłuższym bokiem. Prawdopodobnie zamieniłeś oznaczenia; oznacz najdłuższy pomiar jako przeciwprostokątną (c) i oblicz ponownie."
      },
      {
        "question": "Czy mogę obliczyć brakujący bok, znając jeden kąt i jeden bok?",
        "answer": "Tak, ale nie samym twierdzeniem Pitagorasa. Użyj stosunków trygonometrycznych: sinus, cosinus lub tangens wiążą znany bok i kąt z nieznanym bokiem. Ta strona oferuje dedykowany kalkulator do zadań typu bok z kąta."
      },
      {
        "question": "Jak mogę sprawdzić, czy moja odpowiedź jest poprawna?",
        "answer": "Podstaw wszystkie trzy boki z powrotem do a² + b² = c². Potwierdź, że przeciwprostokątna jest najdłuższa. Sprawdź, czy liczby tworzą znaną trójkę pitagorejską. Oszacuj, że przeciwprostokątna mieści się między dłuższą przyprostokątną a sumą obu przyprostokątnych."
      }
    ],
    "relatedHeading": "Inne kalkulatory trójkąta prostokątnego, które mogą Ci się przydać",
    "relatedIntro": "Po znalezieniu brakującego boku kontynuuj z tymi powiązanymi kalkulatorami, aby dokończyć analizę trójkąta.",
    "relatedItems": [
      "Kalkulator trójkąta prostokątnego",
      "Kalkulator kątów trójkąta prostokątnego",
      "Kalkulator boków trójkąta prostokątnego z kąta",
      "Kalkulator pola trójkąta prostokątnego",
      "Kalkulator obwodu i półobwodu trójkąta prostokątnego",
      "Kalkulator specjalnych trójkątów prostokątnych",
      "Kalkulator trójek pitagorejskich"
    ]
  }
};
