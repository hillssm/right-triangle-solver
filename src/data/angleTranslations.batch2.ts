/**
 * angleTranslations.batch2.ts
 * Translations of the Right Triangle Angle Calculator guide (AngleGuide.astro)
 * Batch 2: Portuguese (pt), Bengali (bn), Japanese (ja), Korean (ko), Malay (ms), Polish (pl).
 *
 * Structure per language:
 * - tocHeading, tocItems (15 entries keyed by section id)
 * - sections (14 entries: angle-intro, angle-anatomy, angle-inverse, angle-complement,
 *   angle-howto, angle-arcsin, angle-arccos, angle-arctan, angle-choose, angle-applications,
 *   angle-mistakes, angle-precision, angle-verify, angle-conclusion)
 *   Each section: h2, blocks (ordered {kind: 'h3'|'p', text}), optional list (steps),
 *   optional table ({headers, rows}), optional imgAlt/figcaption
 * - faqs (12 question/answer pairs)
 * - relatedHeading, relatedItems (6 calculator names)
 *
 * Formulas, KaTeX markup ([[...]]), variable names, numbers, URLs, and HTML IDs are
 * preserved exactly as in the English source. No em dashes anywhere.
 */

export const ANGLE_TRANSLATIONS_BATCH2 = {
  "pt": {
    "tocHeading": "Neste guia",
    "tocItems": {
      "angle-anatomy": "Entendendo os ângulos de um triângulo retângulo",
      "angle-applications": "Aplicações na vida real",
      "angle-arccos": "Encontrando ângulos com arccos",
      "angle-arcsin": "Encontrando ângulos com arcsin",
      "angle-arctan": "Encontrando ângulos com arctan",
      "angle-choose": "Quando usar cada método",
      "angle-complement": "Ângulos complementares",
      "angle-faq": "Perguntas frequentes",
      "angle-howto": "Como usar a calculadora de ângulos",
      "angle-intro": "O que é uma calculadora de ângulos de triângulo retângulo?",
      "angle-inverse": "Funções trigonométricas inversas",
      "angle-mistakes": "Erros comuns",
      "angle-precision": "Precisão e unidades dos ângulos",
      "angle-related": "Calculadoras relacionadas",
      "angle-verify": "Verificando sua resposta"
    },
    "sections": {
      "angle-intro": {
        "h2": "O que é uma calculadora de ângulos de triângulo retângulo?",
        "blocks": [
          {
            "kind": "p",
            "text": "Uma calculadora de ângulos de triângulo retângulo encontra os ângulos agudos desconhecidos de um triângulo retângulo quando você conhece os comprimentos dos lados. Enquanto o teorema de Pitágoras encontra lados desconhecidos, as funções trigonométricas inversas encontram ângulos desconhecidos. A calculadora recebe dois lados conhecidos, calcula a razão entre eles e aplica arcsin, arccos ou arctan para obter o ângulo em graus."
          },
          {
            "kind": "p",
            "text": "Os usos comuns incluem determinar a inclinação de telhados a partir de medidas de elevação e distância horizontal, encontrar ângulos de posicionamento de escadas para uma subida segura, calcular inclinações de rampas para conformidade com normas de acessibilidade e resolver tarefas de geometria. A calculadora precisa de exatamente dois comprimentos de lado para funcionar. Ela retorna o ângulo A (entre o cateto adjacente e a hipotenusa) e o ângulo B (o complemento, entre o cateto oposto e a hipotenusa)."
          },
          {
            "kind": "p",
            "text": "Por exemplo, um triângulo retângulo com cateto oposto 3 e hipotenusa 5 tem ângulo A = arcsin(3/5), que é aproximadamente 36.87 graus. O outro ângulo agudo é 90 menos 36.87, ou 53.13 graus. Este guia explica cada função inversa, mostra quando usar cada uma, apresenta dezesseis exemplos resolvidos e aborda os erros que produzem respostas erradas."
          },
          {
            "kind": "p",
            "text": "Encontrar ângulos é o inverso de encontrar lados. A calculadora de lados parte de ângulos e produz comprimentos; esta calculadora parte de comprimentos e produz ângulos. Juntas, elas resolvem qualquer triângulo retângulo por completo: dados quaisquer dois lados, encontre o terceiro lado com Pitágoras e depois encontre os dois ângulos agudos com os métodos abaixo. Sem transferidor, e os resultados têm a precisão total da calculadora."
          }
        ]
      },
      "angle-inverse": {
        "h2": "Funções trigonométricas inversas explicadas",
        "blocks": [
          {
            "kind": "p",
            "text": "As funções trigonométricas comuns recebem um ângulo e retornam uma razão. O seno de 30 graus é 0.5. As funções trigonométricas inversas fazem o caminho contrário: recebem uma razão e retornam o ângulo. O arcsin de 0.5 é 30 graus. A calculadora usa três funções inversas, cada uma associada a um par específico de lados conhecidos."
          },
          {
            "kind": "h3",
            "text": "Arcsin: cateto oposto e hipotenusa"
          },
          {
            "kind": "p",
            "text": "Quando você conhece o cateto oposto (a) e a hipotenusa (c), use arcsin. A fórmula é [[A = \\sin^{-1}(a/c)]]. A razão a/c deve ficar entre 0 e 1, já que o cateto oposto é sempre menor que a hipotenusa. Para um triângulo 3-4-5, A = arcsin(3/5) = arcsin(0.6), que é aproximadamente 36.87 graus."
          },
          {
            "kind": "h3",
            "text": "Arccos: cateto adjacente e hipotenusa"
          },
          {
            "kind": "p",
            "text": "Quando você conhece o cateto adjacente (b) e a hipotenusa (c), use arccos. A fórmula é [[A = \\cos^{-1}(b/c)]]. Como no arcsin, a razão b/c deve ficar entre 0 e 1. Para o mesmo triângulo 3-4-5, A = arccos(4/5) = arccos(0.8), que também é aproximadamente 36.87 graus. Os dois métodos concordam porque descrevem o mesmo ângulo."
          },
          {
            "kind": "h3",
            "text": "Arctan: cateto oposto e cateto adjacente"
          },
          {
            "kind": "p",
            "text": "Quando você conhece os dois catetos (a e b), mas não a hipotenusa, use arctan. A fórmula é [[A = \\tan^{-1}(a/b)]]. A razão a/b pode ser qualquer número positivo. Para o triângulo 3-4-5, A = arctan(3/4) = arctan(0.75), que é aproximadamente 36.87 graus. O arctan é a escolha mais prática para medições de campo como a inclinação de telhados, em que os dois catetos (elevação e distância horizontal) são as dimensões mais fáceis de medir."
          }
        ],
        "imgAlt": "Três painéis mostrando as fórmulas de arcsin, arccos e arctan com suas razões de lados",
        "figcaption": "As três funções inversas: arcsin usa cateto oposto sobre hipotenusa, arccos usa cateto adjacente sobre hipotenusa, arctan usa cateto oposto sobre cateto adjacente."
      },
      "angle-arcsin": {
        "h2": "Encontrando ângulos com arcsin",
        "blocks": [
          {
            "kind": "p",
            "text": "Use arcsin quando você conhece o cateto oposto ao seu ângulo-alvo e a hipotenusa. A fórmula é [[A = \\sin^{-1}(a/c)]]. A razão deve ficar entre 0 e 1. Se a sua razão passar de 1, você rotulou os lados errado: a hipotenusa precisa ser o denominador."
          },
          {
            "kind": "h3",
            "text": "Exemplo 1: o triângulo 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dados o cateto oposto a = 3 e a hipotenusa c = 5, encontre o ângulo A."
          },
          {
            "kind": "p",
            "text": "Etapa 1: escreva a fórmula. A = arcsin(a/c).<br />Etapa 2: substitua. A = arcsin(3/5).<br />Etapa 3: calcule a razão. 3/5 = 0.6.<br />Etapa 4: aplique o arcsin. A = arcsin(0.6) ≈ 36.87°."
          },
          {
            "kind": "p",
            "text": "O ângulo é aproximadamente 36.87 graus. O complemento B = 90° − 36.87° = 53.13°."
          },
          {
            "kind": "h3",
            "text": "Exemplo 2: mesmo triângulo, verificação com arccos"
          },
          {
            "kind": "p",
            "text": "Dados o cateto adjacente b = 4 e a hipotenusa c = 5, encontre o ângulo A usando arccos."
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) ≈ 36.87°. Isso confere exatamente com o Exemplo 1, confirmando que os dois métodos descrevem o mesmo ângulo. Quando dois métodos concordam, seus rótulos de lado estão corretos."
          },
          {
            "kind": "h3",
            "text": "Exemplo 3: mesmo triângulo, verificação com arctan"
          },
          {
            "kind": "p",
            "text": "Dados o cateto oposto a = 3 e o cateto adjacente b = 4, encontre o ângulo A usando arctan."
          },
          {
            "kind": "p",
            "text": "A = arctan(a/b) = arctan(3/4) = arctan(0.75) ≈ 36.87°. As três funções inversas convergem para a mesma resposta no mesmo triângulo. Essa concordância tripla é a verificação mais forte disponível."
          },
          {
            "kind": "h3",
            "text": "Exemplo 4: encontrando o complemento"
          },
          {
            "kind": "p",
            "text": "Dado o ângulo A = 36.87° do Exemplo 1, encontre o ângulo B."
          },
          {
            "kind": "p",
            "text": "B = 90° − A = 90° − 36.87° = 53.13°. Sem trigonometria. Você pode verificar calculando arcsin(4/5) = 53.13°, tratando o lado de comprimento 4 como oposto ao ângulo B."
          },
          {
            "kind": "h3",
            "text": "Exemplo 11: inclinação íngreme (arcsin)"
          },
          {
            "kind": "p",
            "text": "Um trecho de cabo sobe 7 metros ao longo de uma distância de hipotenusa de 25 metros. Encontre o ângulo de inclinação."
          },
          {
            "kind": "p",
            "text": "A = arcsin(7/25) = arcsin(0.28) ≈ 16.26°. É uma inclinação suave, típica de rampas acessíveis ou rampas de esteiras transportadoras. O ângulo raso significa que a maior parte do comprimento do cabo vai para a distância horizontal, não para a altura."
          }
        ]
      },
      "angle-arccos": {
        "h2": "Encontrando ângulos com arccos",
        "blocks": [
          {
            "kind": "p",
            "text": "Use arccos quando você conhece o cateto adjacente ao seu ângulo-alvo e a hipotenusa. A fórmula é [[A = \\cos^{-1}(b/c)]]. Como no arcsin, a razão deve ficar entre 0 e 1. O arccos é natural quando o cateto adjacente é o mais fácil de medir, como a distância horizontal de um telhado ou a distância de base na topografia."
          },
          {
            "kind": "h3",
            "text": "Exemplo 10: ângulo do caibro (arccos)"
          },
          {
            "kind": "p",
            "text": "Um caibro tem uma distância horizontal de 6 metros e um comprimento de caibro (hipotenusa) de 6.5 metros. Encontre o ângulo de inclinação no beiral."
          },
          {
            "kind": "p",
            "text": "A = arccos(6/6.5) = arccos(0.9231) ≈ 22.62°. É uma inclinação moderada de telhado. O complemento, 67.38°, é o ângulo entre o caibro e a parede vertical."
          },
          {
            "kind": "h3",
            "text": "Exemplo: triângulo 5-12-13"
          },
          {
            "kind": "p",
            "text": "Dados o cateto adjacente b = 12 e a hipotenusa c = 13, encontre o ângulo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) ≈ 22.62°. O complemento B = 67.38°. Note que arccos(5/13) daria 67.38° diretamente, tratando o lado de comprimento 5 como adjacente ao ângulo B."
          },
          {
            "kind": "h3",
            "text": "Quando o arccos supera o arcsin"
          },
          {
            "kind": "p",
            "text": "Escolha arccos quando a medida do cateto adjacente for mais confiável que a do oposto. Na estrutura de telhados, a distância horizontal costuma ser medida diretamente ao longo do barrote do forro, enquanto a elevação vertical precisa ser aprumada. A medida mais precisa produz o ângulo mais preciso. As duas funções são matematicamente equivalentes para o mesmo triângulo; a escolha diz respeito à qualidade da medição."
          }
        ]
      },
      "angle-arctan": {
        "h2": "Encontrando ângulos com arctan",
        "blocks": [
          {
            "kind": "p",
            "text": "Use arctan quando você conhece os dois catetos, mas não a hipotenusa. A fórmula é [[A = \\tan^{-1}(a/b)]]. A razão a/b pode ser qualquer valor positivo. O arctan é essencial no trabalho de campo: elevação sobre distância horizontal é o par de medidas mais comum na construção civil, no paisagismo e no projeto de estradas."
          },
          {
            "kind": "h3",
            "text": "Exemplo 5: inclinação do telhado (arctan)"
          },
          {
            "kind": "p",
            "text": "Um telhado sobe 4 pés ao longo de uma distância horizontal de 12 pés. Encontre o ângulo de inclinação."
          },
          {
            "kind": "p",
            "text": "Etapa 1: identifique cateto oposto (elevação) = 4, cateto adjacente (distância) = 12.<br />Etapa 2: A = arctan(4/12) = arctan(0.3333).<br />Etapa 3: A ≈ 18.43°."
          },
          {
            "kind": "p",
            "text": "Uma inclinação de 18.43 graus é uma inclinação residencial comum, íngreme o suficiente para escoar água, mas transitável com cuidado. Em termos de telhado, é uma inclinação de 4 em 12."
          },
          {
            "kind": "h3",
            "text": "Exemplo 6: posicionamento de escada (arctan)"
          },
          {
            "kind": "p",
            "text": "Uma escada alcança 4.5 metros de altura numa parede, com a base a 2 metros da parede. Encontre o ângulo entre a escada e o solo."
          },
          {
            "kind": "p",
            "text": "A = arctan(4.5/2) = arctan(2.25) ≈ 66.04°. As diretrizes de segurança recomendam ângulos de escada próximos de 75 graus (uma razão de 4 para 1). A 66 graus, esta escada está rasa demais e deve ser aproximada da parede."
          },
          {
            "kind": "h3",
            "text": "Exemplo 7: rampa para cadeira de rodas (arctan)"
          },
          {
            "kind": "p",
            "text": "Uma rampa sobe 0.75 metros ao longo de 9 metros de extensão. Encontre o ângulo de inclinação."
          },
          {
            "kind": "p",
            "text": "A = arctan(0.75/9) = arctan(0.0833) ≈ 4.76°. As normas de acessibilidade costumam exigir inclinações de no máximo cerca de 4.8 graus (uma razão de 1:12). Esta rampa, com 4.76°, atende à diretriz por pouco."
          },
          {
            "kind": "h3",
            "text": "Exemplo 8: ângulo de altura de árvore (arctan)"
          },
          {
            "kind": "p",
            "text": "Um observador está a 20 metros de uma árvore. O clinômetro indica o topo da árvore num ângulo correspondente a um cateto oposto de 12 metros. Encontre o ângulo de visada."
          },
          {
            "kind": "p",
            "text": "A = arctan(12/20) = arctan(0.6) ≈ 30.96°. Combinado com a altura dos olhos do observador, esse ângulo permite aos engenheiros florestais estimar a altura da árvore sem escalá-la."
          },
          {
            "kind": "h3",
            "text": "Exemplo 9: rampa de carga (arctan)"
          },
          {
            "kind": "p",
            "text": "Uma rampa de carga sobe 2.5 metros ao longo de 10 metros de extensão. Encontre o ângulo de inclinação."
          },
          {
            "kind": "p",
            "text": "A = arctan(2.5/10) = arctan(0.25) ≈ 14.04°. O valor verificado é 14.48°, refletindo valores de entrada precisos. De qualquer forma, é uma inclinação moderada, adequada para carrinhos de mão, mas íngreme para transpaletes pesados."
          },
          {
            "kind": "h3",
            "text": "Exemplo 14: escora de sustentação (arctan)"
          },
          {
            "kind": "p",
            "text": "Uma escora diagonal abrange 1.2 metros na vertical e 3.5 metros na horizontal. Encontre o ângulo da escora."
          },
          {
            "kind": "p",
            "text": "A = arctan(1.2/3.5) = arctan(0.3429) ≈ 18.92°. Esse ângulo raso significa que a escora atua principalmente na resistência ao cisalhamento horizontal, e não na transferência de carga vertical."
          },
          {
            "kind": "h3",
            "text": "Exemplo 15: inclinação de encosta (arcsin)"
          },
          {
            "kind": "p",
            "text": "Um caminho na encosta sobe 3 metros ao longo de 13 metros de distância inclinada. Encontre o ângulo de inclinação."
          },
          {
            "kind": "p",
            "text": "A = arcsin(3/13) = arcsin(0.2308) ≈ 13.34°. É uma inclinação moderadamente íngreme para trilhas. Projetistas de trilhas usam esses ângulos para planejar zigue-zagues quando a rota direta excede ângulos confortáveis de subida."
          },
          {
            "kind": "h3",
            "text": "Exemplo 12: inclinação de escada (arctan)"
          },
          {
            "kind": "p",
            "text": "Uma escada de degraus sobe 2.8 metros ao longo de 4 metros horizontais. Encontre o ângulo de inclinação."
          },
          {
            "kind": "p",
            "text": "A = arctan(2.8/4) = arctan(0.7) ≈ 34.99°. É uma inclinação confortável para escadas. As normas de construção costumam limitar os ângulos de escada a cerca de 37 graus no máximo para uso residencial, então este projeto está em conformidade."
          },
          {
            "kind": "h3",
            "text": "Exemplo 13: declividade topográfica (arctan)"
          },
          {
            "kind": "p",
            "text": "Um topógrafo mede uma variação de elevação de 7 metros ao longo de 12 metros de distância horizontal. Encontre o ângulo de declividade."
          },
          {
            "kind": "p",
            "text": "A = arctan(7/12) = arctan(0.5833) ≈ 30.26°. Essa declividade íngreme exigiria zigue-zagues para uma estrada ou trilha. Engenheiros civis usam esses ângulos para determinar as necessidades de corte e aterro."
          },
          {
            "kind": "h3",
            "text": "Exemplo 16: atalho do complemento"
          },
          {
            "kind": "p",
            "text": "Dado o ângulo A = 32°, encontre o ângulo B sem trigonometria."
          },
          {
            "kind": "p",
            "text": "B = 90° − 32° = 58°. Esse modo de complemento é o cálculo mais rápido da página quando um ângulo agudo já é conhecido a partir de um transferidor, um nível digital ou um cálculo anterior."
          }
        ]
      },
      "angle-choose": {
        "h2": "Quando usar cada método",
        "blocks": [
          {
            "kind": "p",
            "text": "As três funções inversas dão o mesmo ângulo para o mesmo triângulo. A escolha depende de quais lados você conhece e de quais medidas são mais confiáveis."
          },
          {
            "kind": "h3",
            "text": "O arcsin é melhor quando"
          },
          {
            "kind": "p",
            "text": "Você conhece o cateto oposto ao seu ângulo-alvo e a hipotenusa. Isso acontece em problemas de altura: a altura vertical é oposta ao ângulo no nível do solo, e a distância inclinada é a hipotenusa. Problemas de altura de árvores, elevação de edifícios e flecha de cabos favorecem o arcsin."
          },
          {
            "kind": "h3",
            "text": "O arccos é melhor quando"
          },
          {
            "kind": "p",
            "text": "Você conhece o cateto adjacente ao seu ângulo-alvo e a hipotenusa. A estrutura de telhados favorece o arccos porque a distância horizontal (adjacente) é medida diretamente ao longo da viga. Linhas de base topográficas também favorecem o arccos quando a distância no solo é a medida confiável."
          },
          {
            "kind": "h3",
            "text": "O arctan é melhor quando"
          },
          {
            "kind": "p",
            "text": "Você conhece os dois catetos, mas não a hipotenusa. É a situação de campo mais comum: elevação e distância horizontal são medidas diretamente, enquanto a hipotenusa exigiria um cálculo separado. O arctan dispensa a hipotenusa por completo. Sempre que você puder medir os dois catetos, o arctan é o caminho mais rápido."
          },
          {
            "kind": "h3",
            "text": "O complemento é melhor quando"
          },
          {
            "kind": "p",
            "text": "Você já conhece um ângulo agudo. Nenhuma medida de lado é necessária. Use-o após qualquer cálculo inverso para obter o segundo ângulo, ou quando um transferidor ou inclinômetro digital lhe der um ângulo diretamente."
          }
        ],
        "table": {
          "headers": [
            "Lados conhecidos",
            "Método",
            "Fórmula"
          ],
          "rows": [
            [
              "Cateto oposto (a) e hipotenusa (c)",
              "Arcsin",
              "[[A = \\sin^{-1}(a/c)]]"
            ],
            [
              "Cateto adjacente (b) e hipotenusa (c)",
              "Arccos",
              "[[A = \\cos^{-1}(b/c)]]"
            ],
            [
              "Cateto oposto (a) e cateto adjacente (b)",
              "Arctan",
              "[[A = \\tan^{-1}(a/b)]]"
            ],
            [
              "Um ângulo agudo",
              "Complemento",
              "[[B = 90^\\circ - A]]"
            ]
          ]
        }
      },
      "angle-anatomy": {
        "h2": "Entendendo os ângulos de um triângulo retângulo",
        "blocks": [
          {
            "kind": "h3",
            "text": "Quais são os três ângulos?"
          },
          {
            "kind": "p",
            "text": "Todo triângulo retângulo tem três ângulos: um ângulo reto medindo exatamente 90 graus e dois ângulos agudos medindo menos de 90 graus cada. O ângulo reto fica no vértice C. Os ângulos agudos ficam nos vértices A e B. Como os ângulos de um triângulo somam 180 graus, os dois ângulos agudos devem totalizar 90 graus."
          },
          {
            "kind": "h3",
            "text": "Como os lados são nomeados em relação a um ângulo?"
          },
          {
            "kind": "p",
            "text": "Os nomes dos lados dependem de qual ângulo você está medindo. Para o ângulo A: o lado oposto a A (que não toca o vértice A) é chamado de cateto oposto, rotulado a. O lado que toca o vértice A e não é a hipotenusa é o cateto adjacente, rotulado b. A hipotenusa, rotulada c, fica oposta ao ângulo reto e é sempre o lado mais longo. Se você passar a medir o ângulo B, os rótulos trocam: o lado oposto a B passa a ser o novo cateto oposto."
          },
          {
            "kind": "h3",
            "text": "Por que o ângulo de referência importa?"
          },
          {
            "kind": "p",
            "text": "O mesmo lado físico pode ser oposto para um ângulo e adjacente para o outro. Num triângulo 3-4-5, se o ângulo A fica entre o lado de comprimento 4 e a hipotenusa, então o lado de comprimento 3 é oposto a A. Para o ângulo B no outro canto, o lado de comprimento 3 passa a ser adjacente e o lado de comprimento 4 passa a ser oposto. Identifique sempre seu ângulo de referência antes de escolher uma fórmula."
          }
        ],
        "imgAlt": "Triângulo retângulo com ângulos A, B, C rotulados, lados a, b, c mostrados, ângulo reto em C",
        "figcaption": "Anatomia dos ângulos: C é o ângulo reto de 90 graus, A e B são agudos e somam 90 graus. Os lados a, b, c são rotulados em relação ao ângulo A."
      },
      "angle-complement": {
        "h2": "Ângulos complementares: A + B = 90 graus",
        "blocks": [
          {
            "kind": "p",
            "text": "Os dois ângulos agudos de um triângulo retângulo são complementares, ou seja, somam exatamente 90 graus. Isso dá a relação [[A + B = 90^\\circ]]. Uma vez encontrado um ângulo agudo, o outro segue imediatamente por subtração: B = 90 graus menos A."
          },
          {
            "kind": "p",
            "text": "Isso não é um método de medição separado. É uma verificação de consistência e um atalho. Se o arcsin der A = 36.87 graus, então B = 53.13 graus sem mais trigonometria. A calculadora usa essa relação em seus modos de soma de ângulos."
          },
          {
            "kind": "p",
            "text": "A relação complementar também explica por que sin(A) é igual a cos(B). Num triângulo 3-4-5, sin(36.87°) é 0.6 e cos(53.13°) também é 0.6. O seno de um ângulo agudo é sempre igual ao cosseno do outro, porque o lado oposto a um ângulo é adjacente ao outro."
          }
        ]
      },
      "angle-howto": {
        "h2": "Como usar a calculadora de ângulos de triângulo retângulo",
        "blocks": [
          {
            "kind": "p",
            "text": "Siga estas etapas para encontrar um ângulo desconhecido:"
          }
        ],
        "imgAlt": "Processo em quatro etapas para encontrar o ângulo A: rotule os lados, escolha a razão, aplique a trigonométrica inversa, verifique",
        "figcaption": "O fluxo de quatro etapas: rotule os lados em relação ao seu ângulo de referência, escolha a razão correspondente aos seus lados conhecidos, aplique a função inversa e verifique com o complemento.",
        "list": [
          "<strong>Identifique o ângulo reto.</strong> Confirme que o triângulo tem um canto de 90 graus. A calculadora só funciona para triângulos retângulos.",
          "<strong>Rotule a hipotenusa.</strong> Encontre o lado mais longo, oposto ao ângulo reto. Rotule-o c.",
          "<strong>Escolha seu ângulo de referência.</strong> Decida se você está resolvendo o ângulo A ou o ângulo B. Isso determina quais lados são oposto e adjacente.",
          "<strong>Escolha o modo correspondente.</strong> Se você conhece oposto e hipotenusa, use arcsin. Se conhece adjacente e hipotenusa, use arccos. Se conhece os dois catetos, use arctan. Se conhece um ângulo agudo, use o modo de complemento.",
          "<strong>Digite os dois comprimentos de lado.</strong> Use a mesma unidade para ambos (ambos em metros, ambos em pés etc.). As unidades se cancelam na razão, mas misturar unidades corrompe a razão.",
          "<strong>Leia o resultado em graus.</strong> A calculadora gera ângulos em graus, a unidade padrão para construção, navegação e geometria escolar.",
          "<strong>Encontre o segundo ângulo.</strong> Subtraia de 90 graus ou execute a calculadora novamente com o outro ângulo como referência.",
          "<strong>Verifique.</strong> Confira se os dois ângulos estão entre 0 e 90 graus e somam 90. Verifique com um segundo método de razão se a precisão importar."
        ]
      },
      "angle-applications": {
        "h2": "Aplicações na vida real",
        "blocks": [
          {
            "kind": "p",
            "text": "Cálculos de ângulo aparecem onde quer que inclinações, declives e linhas de visada importem. Os dezesseis exemplos acima abrangem construção, acessibilidade, topografia e educação. Aqui estão os padrões por trás deles."
          },
          {
            "kind": "h3",
            "text": "Construção e carpintaria"
          },
          {
            "kind": "p",
            "text": "Inclinação de telhado (Exemplo 5: 18.43°), ângulos de caibro (Exemplo 10: 22.62°) e inclinação de escada (Exemplo 12: 34.99°) usam arctan ou arccos em medidas diretas de campo. Carpinteiros trabalham com elevação sobre distância horizontal porque essas são as dimensões nos projetos. A calculadora converte essas dimensões em ângulos de corte para serras."
          },
          {
            "kind": "h3",
            "text": "Segurança e acessibilidade"
          },
          {
            "kind": "p",
            "text": "Posicionamento de escada (Exemplo 6: 66.04°) e rampas para cadeira de rodas (Exemplo 7: 4.76°) têm limites de segurança expressos como ângulos. Uma escada a 66° está rasa demais; a diretriz de 75° corresponde a uma razão de 3.73 para 1. Uma rampa a 4.76° atende ao máximo de acessibilidade de 1:12. A calculadora transforma verificações de ângulo de aprovação ou reprovação em verificações rápidas."
          },
          {
            "kind": "h3",
            "text": "Topografia e ar livre"
          },
          {
            "kind": "p",
            "text": "Ângulos de altura de árvore (Exemplo 8: 30.96°), declividades de encosta (Exemplo 15: 13.34°) e linhas de visada topográficas (Exemplo 13: 30.26°) usam leituras de clinômetro e distâncias medidas com trena. O ângulo preenche a lacuna entre o que você pode medir no solo e o que precisa saber sobre altura ou inclinação."
          }
        ],
        "imgAlt": "Quatro painéis mostrando cálculos de inclinação de telhado, ângulo de escada, inclinação de rampa e ângulo de altura de árvore",
        "figcaption": "Problemas de ângulo do mundo real: inclinação de telhado a partir de elevação e distância horizontal, ângulo de segurança de escada, inclinação de acessibilidade de rampa e ângulo de visada de altura de árvore."
      },
      "angle-mistakes": {
        "h2": "Erros comuns ao encontrar ângulos",
        "blocks": [
          {
            "kind": "h3",
            "text": "Trocar cateto oposto e adjacente"
          },
          {
            "kind": "p",
            "text": "O erro mais frequente. Os rótulos dependem do seu ângulo de referência. Se você calcular arctan(4/3) = 53.13° quando queria arctan(3/4) = 36.87°, você resolveu o ângulo errado. Correção: esboce o triângulo, marque seu ângulo de referência e rotule oposto (do outro lado) e adjacente (tocando-o)."
          },
          {
            "kind": "h3",
            "text": "Usar a função inversa errada"
          },
          {
            "kind": "p",
            "text": "Aplicar arcsin a uma razão de adjacente sobre hipotenusa dá o complemento do ângulo pretendido, não uma mensagem de erro. Arcsin(4/5) = 53.13° é o ângulo B, não o ângulo A. Correção: associe a função aos seus lados conhecidos usando a tabela acima."
          },
          {
            "kind": "h3",
            "text": "Esquecer que a razão precisa ser válida"
          },
          {
            "kind": "p",
            "text": "Arcsin e arccos exigem razões entre 0 e 1. Se você digitar cateto oposto = 5 e hipotenusa = 3, a razão 1.67 não tem arcsin. Isso sempre significa lados mal rotulados: a hipotenusa precisa ser o lado mais longo e o denominador. Correção: reatribua a medida mais longa como hipotenusa."
          },
          {
            "kind": "h3",
            "text": "Misturar graus e radianos"
          },
          {
            "kind": "p",
            "text": "A trigonométrica inversa em calculadoras e em código costuma usar radianos por padrão. Arctan(1) = 45° em graus, mas 0.785 em radianos. Esta calculadora gera graus. Se seu cálculo manual der 0.64 para um triângulo 3-4-5, você está em radianos; multiplique por 180/π para obter 36.87°."
          },
          {
            "kind": "h3",
            "text": "Digitar lados em unidades diferentes"
          },
          {
            "kind": "p",
            "text": "Cateto oposto em polegadas e hipotenusa em pés corrompem a razão. Converta para uma unidade comum primeiro. A razão não tem unidade, mas só quando as duas entradas compartilham a unidade."
          },
          {
            "kind": "h3",
            "text": "Arredondar a razão cedo demais"
          },
          {
            "kind": "p",
            "text": "Arcsin(0.6) = 36.87°, mas arcsin(0.60) arredondado de 0.596 dá 36.58°. Pequenos erros de razão se amplificam perto de 0 e 1, onde as funções inversas são mais íngremes. Mantenha precisão total durante o cálculo e arredonde apenas o ângulo final."
          },
          {
            "kind": "h3",
            "text": "Achar que a calculadora encontra lados"
          },
          {
            "kind": "p",
            "text": "Esta página encontra ângulos a partir de lados. Ela não encontra lados a partir de ângulos. Para problemas de lado a partir de ângulo, use a calculadora de lados dedicada. Cada ferramenta tem um trabalho."
          }
        ]
      },
      "angle-precision": {
        "h2": "Precisão e unidades dos ângulos",
        "blocks": [
          {
            "kind": "p",
            "text": "Os resultados de ângulo são tão precisos quanto as medidas de lado por trás deles. Uma leitura de trena ao milímetro mais próximo sustenta duas casas decimais no ângulo. Uma distância estimada a passos no campo sustenta graus inteiros, na melhor das hipóteses. A calculadora computa com precisão total de ponto flutuante; a decisão de arredondamento é sua."
          },
          {
            "kind": "h3",
            "text": "Como o erro de entrada afeta o ângulo"
          },
          {
            "kind": "p",
            "text": "Pequenos erros de lado causam erros de ângulo maiores quando a razão fica perto de 0 ou 1, onde as funções inversas são mais íngremes. Para arctan perto de 45°, um erro de 1% na razão desloca o ângulo em cerca de 0.3°. Perto de 5° ou 85°, o mesmo erro de 1% na razão desloca o ângulo em mais de 0.5°. Meça com cuidado em ângulos extremos ou faça várias leituras e tire a média."
          },
          {
            "kind": "h3",
            "text": "Graus vs. graus-minutos-segundos"
          },
          {
            "kind": "p",
            "text": "Topógrafos às vezes expressam ângulos como graus, minutos e segundos (GMS). Para converter 36.87° em GMS: os graus inteiros são 36, os 0.87° fracionários vezes 60 dão 52.2 minutos, e 0.2 minutos vezes 60 dão 12 segundos, resultando em 36° 52′ 12″. Esta calculadora gera graus decimais; multiplique a fração por 60 para obter minutos."
          },
          {
            "kind": "h3",
            "text": "Quando graus inteiros bastam"
          },
          {
            "kind": "p",
            "text": "Ângulos de corte de carpintaria, verificações de posicionamento de escada e estimativas aproximadas de declividade raramente precisam de decimais. Inclinação de telhado ao grau mais próximo é suficiente para pedir materiais. Reserve a precisão de duas casas decimais para usinagem, alinhamento óptico e cálculos de engenharia em que as tolerâncias são apertadas."
          }
        ]
      },
      "angle-verify": {
        "h2": "Verificando sua resposta de ângulo",
        "blocks": [
          {
            "kind": "p",
            "text": "Três verificações confirmam um cálculo de ângulo correto:"
          },
          {
            "kind": "p",
            "text": "Para trabalhos críticos, verifique também se os lados satisfazem o teorema de Pitágoras. Num triângulo 3-4-5, 9 + 16 = 25 confirma os lados antes de você confiar nos ângulos derivados deles."
          }
        ],
        "list": [
          "<strong>Verificação de intervalo.</strong> Os dois ângulos agudos devem ficar estritamente entre 0° e 90°. Um ângulo de 0°, 90° ou acima indica entradas inválidas ou um triângulo mal rotulado.",
          "<strong>Verificação de soma.</strong> A + B deve ser igual a exatamente 90°. Se seus dois ângulos somarem 89.9° ou 90.1°, o arredondamento explica. Lacunas maiores indicam erro.",
          "<strong>Verificação cruzada de métodos.</strong> Recalcule o mesmo ângulo com uma função inversa diferente. Se arcsin(3/5) = 36.87° e arctan(3/4) = 36.87°, a resposta é sólida. Divergência aponta para um erro de rotulagem."
        ]
      },
      "angle-conclusion": {
        "h2": "Encontre qualquer ângulo de triângulo retângulo com confiança",
        "blocks": [
          {
            "kind": "p",
            "text": "Comece rotulando seu triângulo: hipotenusa primeiro, depois oposto e adjacente em relação ao seu ângulo-alvo. Escolha a função inversa correspondente aos seus lados conhecidos: arcsin para oposto e hipotenusa, arccos para adjacente e hipotenusa, arctan para os dois catetos. Digite as medidas, leia o ângulo em graus e obtenha o segundo ângulo a partir de 90 menos o primeiro. Verifique com a verificação de intervalo, a verificação de soma e um cálculo cruzado de métodos. Com essas etapas, qualquer problema de ângulo de triângulo retângulo se reduz a uma rotina confiável. Volte à calculadora no topo desta página para rodar seus números."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Como encontrar um ângulo em um triângulo retângulo?",
        "answer": "Use uma função trigonométrica inversa sobre uma razão de lados. Com cateto oposto e hipotenusa, calcule arcsin(oposto/hipotenusa). Com cateto adjacente e hipotenusa, use arccos(adjacente/hipotenusa). Com os dois catetos, use arctan(oposto/adjacente). O resultado é o ângulo em graus."
      },
      {
        "question": "Qual é a diferença entre sin e arcsin?",
        "answer": "O seno recebe um ângulo e retorna uma razão: sin(30°) = 0.5. O arcsin inverte isso: recebe uma razão e retorna o ângulo, então arcsin(0.5) = 30°. Use seno quando você conhece o ângulo e precisa de um lado; use arcsin quando conhece os lados e precisa do ângulo."
      },
      {
        "question": "Quando devo usar arctan em vez de arcsin?",
        "answer": "Use arctan quando você conhece os dois catetos (oposto e adjacente), mas não a hipotenusa. O arctan dispensa a hipotenusa por completo, o que economiza uma etapa em medições de campo como a inclinação de telhados, em que elevação e distância horizontal são medidas diretamente. Use arcsin quando a hipotenusa for um dos seus lados conhecidos."
      },
      {
        "question": "Por que os dois ângulos agudos somam 90 graus?",
        "answer": "Os ângulos de um triângulo sempre somam 180 graus. O ângulo reto ocupa 90 deles, restando 90 para os outros dois juntos. Isso significa A + B = 90°, então encontrar um ângulo agudo dá imediatamente o outro por subtração."
      },
      {
        "question": "O ângulo pode ser de 90 graus?",
        "answer": "Não. O ângulo de 90 graus é o ângulo reto no vértice C, que é dado. A calculadora encontra os dois ângulos agudos A e B, cada um estritamente entre 0° e 90°. Se seu resultado atingir 0° ou 90°, as entradas descrevem um triângulo degenerado, não um válido."
      },
      {
        "question": "E se minha razão de lados for maior que 1?",
        "answer": "Para arcsin e arccos, uma razão acima de 1 é impossível e indica lados mal rotulados. A hipotenusa precisa ser o lado mais longo e o denominador. Reatribua a medida mais longa como hipotenusa (c) e recalcule. Razões de arctan podem legitimamente exceder 1."
      },
      {
        "question": "Como sei qual lado é oposto e qual é adjacente?",
        "answer": "Escolha primeiro seu ângulo de referência. O cateto oposto fica do outro lado desse ângulo (sem tocar seu vértice). O cateto adjacente toca o vértice do ângulo, mas não é a hipotenusa. O mesmo lado físico é oposto para um ângulo agudo e adjacente para o outro."
      },
      {
        "question": "Por que arcsin, arccos e arctan dão a mesma resposta?",
        "answer": "Porque descrevem o mesmo ângulo geométrico por meio de pares de lados diferentes. Num triângulo 3-4-5, arcsin(3/5), arccos(4/5) e arctan(3/4) são todos iguais a 36.87°. Essa concordância é uma verificação poderosa: se dois métodos divergirem, um lado está mal rotulado."
      },
      {
        "question": "Os ângulos devem estar em graus ou radianos?",
        "answer": "Esta calculadora usa graus, o padrão para construção, navegação e geometria escolar. Se você calcular à mão numa calculadora científica, verifique se ela está no modo de graus. Um resultado em modo radiano como 0.64 para um triângulo 3-4-5 se converte em 36.87° multiplicando por 180/π."
      },
      {
        "question": "Quão precisa deve ser minha resposta de ângulo?",
        "answer": "Combine com a precisão da sua entrada. Se os lados forem medidos ao centímetro mais próximo, duas casas decimais (36.87°) são apropriadas. Para estimativas aproximadas de campo, graus inteiros bastam. Mantenha precisão total durante o cálculo e arredonde apenas a resposta final."
      },
      {
        "question": "Posso encontrar um ângulo conhecendo apenas um lado?",
        "answer": "Não. Um lado não basta; infinitos triângulos retângulos compartilham um único comprimento de lado. Você precisa de dois lados (para a trigonométrica inversa) ou de um lado mais um ângulo agudo (para a regra do complemento). A calculadora exige exatamente duas entradas."
      },
      {
        "question": "Como posso verificar se meu ângulo está correto?",
        "answer": "Três verificações: os dois ângulos devem ficar entre 0° e 90°, devem somar exatamente 90°, e recalcular com uma função inversa diferente deve dar o mesmo resultado. Para um triângulo 3-4-5, arcsin(3/5) = 36.87° e arctan(3/4) = 36.87° se confirmam mutuamente."
      }
    ],
    "relatedHeading": "Explore calculadoras relacionadas de triângulo retângulo",
    "relatedItems": [
      "Calculadora de lados de triângulo retângulo",
      "Calculadora de lado de triângulo retângulo a partir do ângulo",
      "Calculadora de razões trigonométricas",
      "Calculadora de triângulo retângulo (tudo em um)",
      "Calculadora do teorema de Pitágoras",
      "Calculadora de triângulos retângulos especiais"
    ]
  },
  "bn": {
    "tocHeading": "এই নির্দেশিকায়",
    "tocItems": {
      "angle-anatomy": "সমকোণী ত্রিভুজের কোণগুলো বোঝা",
      "angle-applications": "বাস্তব জীবনে প্রয়োগ",
      "angle-arccos": "arccos দিয়ে কোণ নির্ণয়",
      "angle-arcsin": "arcsin দিয়ে কোণ নির্ণয়",
      "angle-arctan": "arctan দিয়ে কোণ নির্ণয়",
      "angle-choose": "কোন পদ্ধতি কখন ব্যবহার করবেন",
      "angle-complement": "পূরক কোণ",
      "angle-faq": "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
      "angle-howto": "কোণ ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
      "angle-intro": "সমকোণী ত্রিভুজের কোণ ক্যালকুলেটর কী?",
      "angle-inverse": "বিপরীত ত্রিকোণমিতিক ফাংশন",
      "angle-mistakes": "সাধারণ ভুল",
      "angle-precision": "কোণের নির্ভুলতা ও একক",
      "angle-related": "সম্পর্কিত ক্যালকুলেটর",
      "angle-verify": "আপনার উত্তর যাচাই"
    },
    "sections": {
      "angle-intro": {
        "h2": "সমকোণী ত্রিভুজের কোণ ক্যালকুলেটর কী?",
        "blocks": [
          {
            "kind": "p",
            "text": "সমকোণী ত্রিভুজের কোণ ক্যালকুলেটর বাহুর দৈর্ঘ্য জানা থাকলে সমকোণী ত্রিভুজের অজানা সূক্ষ্মকোণগুলো নির্ণয় করে। পিথাগোরাসের উপপাদ্য দিয়ে অজানা বাহু পাওয়া গেলেও, অজানা কোণ পেতে বিপরীত ত্রিকোণমিতিক ফাংশন ব্যবহার করা হয়। ক্যালকুলেটরটি দুটি জানা বাহু নেয়, তাদের অনুপাত গণনা করে, তারপর ডিগ্রিতে কোণ পেতে arcsin, arccos বা arctan প্রয়োগ করে।"
          },
          {
            "kind": "p",
            "text": "সাধারণ ব্যবহারের মধ্যে রয়েছে উচ্চতা ও অনুভূমিক দূরত্বের পরিমাপ থেকে ছাদের ঢাল নির্ণয়, নিরাপদে ওঠার জন্য মই বসানোর কোণ খুঁজে বের করা, প্রবেশগম্যতা মান মেনে চলার জন্য র‍্যাম্পের ঢাল গণনা করা এবং জ্যামিতির বাড়ির কাজ সমাধান করা। কাজ করার জন্য ক্যালকুলেটরটির ঠিক দুটি বাহুর দৈর্ঘ্য প্রয়োজন। এটি কোণ A (সন্নিহিত বাহু ও অতিভুজের মধ্যবর্তী) এবং কোণ B (পূরক কোণ, বিপরীত বাহু ও অতিভুজের মধ্যবর্তী) প্রদান করে।"
          },
          {
            "kind": "p",
            "text": "উদাহরণস্বরূপ, বিপরীত বাহু 3 ও অতিভুজ 5 বিশিষ্ট একটি সমকোণী ত্রিভুজের কোণ A = arcsin(3/5), যা প্রায় 36.87 ডিগ্রি। অন্য সূক্ষ্মকোণটি হলো 90 বিয়োগ 36.87, অর্থাৎ 53.13 ডিগ্রি। এই নির্দেশিকায় প্রতিটি বিপরীত ফাংশন ব্যাখ্যা করা হয়েছে, কোনটি কখন ব্যবহার করতে হবে তা দেখানো হয়েছে, ষোলটি সমাধানসহ উদাহরণ দেওয়া হয়েছে এবং ভুল উত্তরের কারণ হওয়া ভুলগুলো আলোচনা করা হয়েছে।"
          },
          {
            "kind": "p",
            "text": "কোণ নির্ণয় করা বাহু নির্ণয়ের বিপরীত প্রক্রিয়া। বাহুর ক্যালকুলেটর কোণ থেকে শুরু করে দৈর্ঘ্য দেয়; এই ক্যালকুলেটর দৈর্ঘ্য থেকে শুরু করে কোণ দেয়। একসাথে এগুলো যেকোনো সমকোণী ত্রিভুজ সম্পূর্ণভাবে সমাধান করে: যেকোনো দুটি বাহু দেওয়া থাকলে পিথাগোরাস দিয়ে তৃতীয় বাহু নির্ণয় করুন, তারপর নিচের পদ্ধতিগুলো দিয়ে দুটি সূক্ষ্মকোণ নির্ণয় করুন। কোনো চাঁদার প্রয়োজন নেই, এবং ফলাফলে ক্যালকুলেটরের পূর্ণ নির্ভুলতা থাকে।"
          }
        ]
      },
      "angle-inverse": {
        "h2": "বিপরীত ত্রিকোণমিতিক ফাংশন ব্যাখ্যা",
        "blocks": [
          {
            "kind": "p",
            "text": "সাধারণ ত্রিকোণমিতিক ফাংশন একটি কোণ নিয়ে একটি অনুপাত দেয়। 30 ডিগ্রির সাইন হলো 0.5। বিপরীত ত্রিকোণমিতিক ফাংশন এর উল্টোটি করে: এটি একটি অনুপাত নিয়ে কোণটি ফিরিয়ে দেয়। 0.5-এর arcsin হলো 30 ডিগ্রি। ক্যালকুলেটরটি তিনটি বিপরীত ফাংশন ব্যবহার করে, প্রতিটি জানা বাহুর একটি নির্দিষ্ট জোড়ার সাথে মিলিয়ে।"
          },
          {
            "kind": "h3",
            "text": "Arcsin: বিপরীত বাহু ও অতিভুজ"
          },
          {
            "kind": "p",
            "text": "যখন আপনি বিপরীত বাহু (a) ও অতিভুজ (c) জানেন, তখন arcsin ব্যবহার করুন। সূত্রটি হলো [[A = \\sin^{-1}(a/c)]]। a/c অনুপাতটি 0 ও 1-এর মধ্যে হতে হবে, যেহেতু বিপরীত বাহু সবসময় অতিভুজের চেয়ে ছোট। 3-4-5 ত্রিভুজের ক্ষেত্রে, A = arcsin(3/5) = arcsin(0.6), যা প্রায় 36.87 ডিগ্রি।"
          },
          {
            "kind": "h3",
            "text": "Arccos: সন্নিহিত বাহু ও অতিভুজ"
          },
          {
            "kind": "p",
            "text": "যখন আপনি সন্নিহিত বাহু (b) ও অতিভুজ (c) জানেন, তখন arccos ব্যবহার করুন। সূত্রটি হলো [[A = \\cos^{-1}(b/c)]]। arcsin-এর মতোই, b/c অনুপাতটি 0 ও 1-এর মধ্যে হতে হবে। একই 3-4-5 ত্রিভুজের ক্ষেত্রে, A = arccos(4/5) = arccos(0.8), যা প্রায় 36.87 ডিগ্রি। দুটি পদ্ধতিই মিলে যায় কারণ তারা একই কোণ বর্ণনা করে।"
          },
          {
            "kind": "h3",
            "text": "Arctan: বিপরীত বাহু ও সন্নিহিত বাহু"
          },
          {
            "kind": "p",
            "text": "যখন আপনি দুটি বাহুই (a ও b) জানেন কিন্তু অতিভুজ জানেন না, তখন arctan ব্যবহার করুন। সূত্রটি হলো [[A = \\tan^{-1}(a/b)]]। a/b অনুপাতটি যেকোনো ধনাত্মক সংখ্যা হতে পারে। 3-4-5 ত্রিভুজের ক্ষেত্রে, A = arctan(3/4) = arctan(0.75), যা প্রায় 36.87 ডিগ্রি। ছাদের ঢালের মতো মাঠের পরিমাপের ক্ষেত্রে arctan সবচেয়ে ব্যবহারিক পছন্দ, যেখানে দুটি বাহু (উচ্চতা ও অনুভূমিক দূরত্ব) মাপা সবচেয়ে সহজ।"
          }
        ],
        "imgAlt": "arcsin, arccos ও arctan সূত্রগুলো তাদের বাহুর অনুপাতসহ দেখানো তিনটি প্যানেল",
        "figcaption": "তিনটি বিপরীত ফাংশন: arcsin ব্যবহার করে বিপরীত বাহু বাই অতিভুজ, arccos ব্যবহার করে সন্নিহিত বাহু বাই অতিভুজ, arctan ব্যবহার করে বিপরীত বাহু বাই সন্নিহিত বাহু।"
      },
      "angle-arcsin": {
        "h2": "arcsin দিয়ে কোণ নির্ণয়",
        "blocks": [
          {
            "kind": "p",
            "text": "যখন আপনি আপনার লক্ষ্য কোণের বিপরীত বাহু ও অতিভুজ জানেন, তখন arcsin ব্যবহার করুন। সূত্রটি হলো [[A = \\sin^{-1}(a/c)]]। অনুপাতটি 0 ও 1-এর মধ্যে হতে হবে। আপনার অনুপাত 1 ছাড়িয়ে গেলে, আপনি বাহুগুলো ভুলভাবে চিহ্নিত করেছেন: অতিভুজকেই হর হতে হবে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 1: 3-4-5 ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "বিপরীত বাহু a = 3 ও অতিভুজ c = 5 দেওয়া আছে, কোণ A নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "ধাপ 1: সূত্রটি লিখুন। A = arcsin(a/c).<br />ধাপ 2: মান বসান। A = arcsin(3/5).<br />ধাপ 3: অনুপাতটি গণনা করুন। 3/5 = 0.6।<br />ধাপ 4: arcsin প্রয়োগ করুন। A = arcsin(0.6) ≈ 36.87°।"
          },
          {
            "kind": "p",
            "text": "কোণটি প্রায় 36.87 ডিগ্রি। পূরক কোণ B = 90° − 36.87° = 53.13°।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 2: একই ত্রিভুজ, arccos দিয়ে যাচাই"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত বাহু b = 4 ও অতিভুজ c = 5 দেওয়া আছে, arccos ব্যবহার করে কোণ A নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) ≈ 36.87°। এটি উদাহরণ 1-এর সাথে হুবহু মিলে যায়, যা নিশ্চিত করে যে দুটি পদ্ধতিই একই কোণ বর্ণনা করে। যখন দুটি পদ্ধতি মিলে যায়, তখন আপনার বাহুর চিহ্ন সঠিক।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 3: একই ত্রিভুজ, arctan দিয়ে যাচাই"
          },
          {
            "kind": "p",
            "text": "বিপরীত বাহু a = 3 ও সন্নিহিত বাহু b = 4 দেওয়া আছে, arctan ব্যবহার করে কোণ A নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "A = arctan(a/b) = arctan(3/4) = arctan(0.75) ≈ 36.87°। একই ত্রিভুজের ক্ষেত্রে তিনটি বিপরীত ফাংশনই একই উত্তরে পৌঁছায়। এই ত্রিমুখী মিলই সবচেয়ে শক্তিশালী যাচাই।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 4: পূরক কোণ নির্ণয়"
          },
          {
            "kind": "p",
            "text": "উদাহরণ 1 থেকে কোণ A = 36.87° দেওয়া আছে, কোণ B নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "B = 90° − A = 90° − 36.87° = 53.13°। কোনো ত্রিকোণমিতির প্রয়োজন নেই। 4 দৈর্ঘ্যের বাহুটিকে কোণ B-এর বিপরীত বাহু ধরে arcsin(4/5) = 53.13° গণনা করে আপনি যাচাই করতে পারেন।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 11: খাড়া ঢাল (arcsin)"
          },
          {
            "kind": "p",
            "text": "একটি কেবলের পথ 25 মিটার অতিভুজ দূরত্বে 7 মিটার ওপরে ওঠে। ঢালের কোণ নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "A = arcsin(7/25) = arcsin(0.28) ≈ 16.26°। এটি একটি মৃদু ঢাল, প্রবেশগম্য র‍্যাম্প বা কনভেয়ার ঢালের জন্য সাধারণ। অগভীর কোণের অর্থ হলো কেবলের দৈর্ঘ্যের বেশিরভাগই উচ্চতার বদলে অনুভূমিক দূরত্বে ব্যয় হয়।"
          }
        ]
      },
      "angle-arccos": {
        "h2": "arccos দিয়ে কোণ নির্ণয়",
        "blocks": [
          {
            "kind": "p",
            "text": "যখন আপনি আপনার লক্ষ্য কোণের সন্নিহিত বাহু ও অতিভুজ জানেন, তখন arccos ব্যবহার করুন। সূত্রটি হলো [[A = \\cos^{-1}(b/c)]]। arcsin-এর মতোই, অনুপাতটি 0 ও 1-এর মধ্যে হতে হবে। যখন সন্নিহিত বাহু মাপা সবচেয়ে সহজ হয়, তখন arccos স্বাভাবিক পছন্দ, যেমন ছাদের অনুভূমিক দূরত্ব বা জরিপে ভিত্তি দূরত্ব।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 10: কড়ির কোণ (arccos)"
          },
          {
            "kind": "p",
            "text": "একটি কড়ির অনুভূমিক দূরত্ব 6 মিটার এবং কড়ির দৈর্ঘ্য (অতিভুজ) 6.5 মিটার। ছাউনির কিনারায় ঢালের কোণ নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "A = arccos(6/6.5) = arccos(0.9231) ≈ 22.62°। এটি একটি মাঝারি ছাদের ঢাল। পূরক কোণ, 67.38°, হলো কড়ি ও উল্লম্ব দেয়ালের মধ্যবর্তী কোণ।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ: 5-12-13 ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত বাহু b = 12 ও অতিভুজ c = 13 দেওয়া আছে, কোণ A নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) ≈ 22.62°। পূরক কোণ B = 67.38°। লক্ষ্য করুন, 5 দৈর্ঘ্যের বাহুটিকে কোণ B-এর সন্নিহিত বাহু ধরে arccos(5/13) সরাসরি 67.38° দেবে।"
          },
          {
            "kind": "h3",
            "text": "কখন arccos arcsin-কে ছাড়িয়ে যায়"
          },
          {
            "kind": "p",
            "text": "যখন সন্নিহিত বাহুর পরিমাপ বিপরীত বাহুর চেয়ে নির্ভরযোগ্য হয়, তখন arccos বেছে নিন। ছাদের কাঠামোয়, অনুভূমিক দূরত্ব প্রায়শই সিলিংয়ের কড়ি বরাবর সরাসরি মাপা হয়, অন্যদিকে উল্লম্ব উচ্চতা উল্লম্বভাবে মাপতে হয়। আরও নির্ভুল পরিমাপ আরও নির্ভুল কোণ দেয়। একই ত্রিভুজের ক্ষেত্রে দুটি ফাংশনই গাণিতিকভাবে সমতুল্য; পছন্দটি পরিমাপের মানের ওপর নির্ভর করে।"
          }
        ]
      },
      "angle-arctan": {
        "h2": "arctan দিয়ে কোণ নির্ণয়",
        "blocks": [
          {
            "kind": "p",
            "text": "যখন আপনি দুটি বাহুই জানেন কিন্তু অতিভুজ জানেন না, তখন arctan ব্যবহার করুন। সূত্রটি হলো [[A = \\tan^{-1}(a/b)]]। a/b অনুপাতটি যেকোনো ধনাত্মক মান হতে পারে। arctan মাঠের কাজের প্রধান হাতিয়ার: উচ্চতা বাই অনুভূমিক দূরত্ব নির্মাণ, ভূদৃশ্যায়ন ও সড়ক নকশায় সবচেয়ে সাধারণ পরিমাপের জোড়া।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 5: ছাদের ঢাল (arctan)"
          },
          {
            "kind": "p",
            "text": "একটি ছাদ 12 ফুট অনুভূমিক দূরত্বে 4 ফুট ওপরে ওঠে। ঢালের কোণ নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "ধাপ 1: বিপরীত বাহু (উচ্চতা) = 4, সন্নিহিত বাহু (দূরত্ব) = 12 চিহ্নিত করুন।<br />ধাপ 2: A = arctan(4/12) = arctan(0.3333)।<br />ধাপ 3: A ≈ 18.43°।"
          },
          {
            "kind": "p",
            "text": "18.43 ডিগ্রি ঢাল একটি সাধারণ আবাসিক ছাদের ঢাল, পানি ঝরানোর জন্য যথেষ্ট খাড়া কিন্তু সতর্কতায় হাঁটার যোগ্য। ছাদের ভাষায়, এটি 12-এ 4 ঢাল।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 6: মই বসানো (arctan)"
          },
          {
            "kind": "p",
            "text": "একটি মই দেয়াল থেকে 2 মিটার দূরে ভিত্তি রেখে দেয়াল বেয়ে 4.5 মিটার ওপরে পৌঁছায়। মই ও মাটির মধ্যবর্তী কোণ নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "A = arctan(4.5/2) = arctan(2.25) ≈ 66.04°। নিরাপত্তা নির্দেশিকা 75 ডিগ্রির কাছাকাছি মইয়ের কোণ সুপারিশ করে (4-থেকে-1 অনুপাত)। 66 ডিগ্রিতে, এই মইটি খুব অগভীরভাবে বসানো হয়েছে এবং দেয়ালের কাছাকাছি সরিয়ে নেওয়া উচিত।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 7: হুইলচেয়ার র‍্যাম্প (arctan)"
          },
          {
            "kind": "p",
            "text": "একটি র‍্যাম্প 9 মিটার দূরত্বে 0.75 মিটার ওপরে ওঠে। ঢালের কোণ নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "A = arctan(0.75/9) = arctan(0.0833) ≈ 4.76°। প্রবেশগম্যতা মান সাধারণত প্রায় 4.8 ডিগ্রির (1:12 অনুপাত) বেশি খাড়া ঢাল নিষেধ করে। 4.76°-এ এই র‍্যাম্পটি নির্দেশিকা মেনে চলে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 8: গাছের উচ্চতার কোণ (arctan)"
          },
          {
            "kind": "p",
            "text": "একজন পর্যবেক্ষক একটি গাছ থেকে 20 মিটার দূরে দাঁড়িয়ে আছেন। ক্লাইনোমিটার গাছের শীর্ষকে 12 মিটার বিপরীত বাহুর সাথে সামঞ্জস্যপূর্ণ কোণে দেখায়। দৃষ্টিকোণটি নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "A = arctan(12/20) = arctan(0.6) ≈ 30.96°। পর্যবেক্ষকের চোখের উচ্চতার সাথে মিলিয়ে, এই কোণ বনকর্মীদের গাছে না উঠেই গাছের উচ্চতা অনুমান করতে দেয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 9: লোডিং র‍্যাম্প (arctan)"
          },
          {
            "kind": "p",
            "text": "একটি লোডিং র‍্যাম্প 10 মিটার দূরত্বে 2.5 মিটার ওপরে ওঠে। ঢালের কোণ নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "A = arctan(2.5/10) = arctan(0.25) ≈ 14.04°। যাচাইকৃত মান 14.48°, যা সুনির্দিষ্ট ইনপুট মান প্রতিফলিত করে। যেভাবেই হোক, এটি একটি মাঝারি ঢাল, হাতগাড়ির জন্য উপযুক্ত কিন্তু ভারী প্যালেট জ্যাকের জন্য খাড়া।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 14: সাপোর্ট ব্রেস (arctan)"
          },
          {
            "kind": "p",
            "text": "একটি তির্যক ব্রেস উল্লম্বভাবে 1.2 মিটার ও অনুভূমিকভাবে 3.5 মিটার জুড়ে বিস্তৃত। ব্রেসের কোণ নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "A = arctan(1.2/3.5) = arctan(0.3429) ≈ 18.92°। এই অগভীর কোণের অর্থ হলো ব্রেসটি উল্লম্ব ভার স্থানান্তরের বদলে মূলত অনুভূমিক শিয়ার প্রতিরোধে কাজ করে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 15: পাহাড়ের ঢাল (arcsin)"
          },
          {
            "kind": "p",
            "text": "পাহাড়ের একটি পথ 13 মিটার ঢালু দূরত্বে 3 মিটার ওপরে ওঠে। ঢালের কোণ নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "A = arcsin(3/13) = arcsin(0.2308) ≈ 13.34°। এটি মাঝারিভাবে খাড়া হাইকিং গ্রেড। সরাসরি পথ আরামদায়ক আরোহণ কোণ ছাড়িয়ে গেলে ট্রেইল ডিজাইনাররা জিগজ্যাগ পথ পরিকল্পনায় এই কোণগুলো ব্যবহার করেন।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 12: সিঁড়ির ঢাল (arctan)"
          },
          {
            "kind": "p",
            "text": "একটি সিঁড়ি 4 মিটার অনুভূমিক দূরত্বে 2.8 মিটার ওপরে ওঠে। ঢালের কোণ নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "A = arctan(2.8/4) = arctan(0.7) ≈ 34.99°। এটি একটি আরামদায়ক সিঁড়ির ঢাল। নির্মাণ বিধি সাধারণত আবাসিক ব্যবহারের জন্য সিঁড়ির কোণ সর্বোচ্চ প্রায় 37 ডিগ্রিতে সীমাবদ্ধ রাখে, তাই এই নকশা অনুমোদিত।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 13: জরিপ গ্রেড (arctan)"
          },
          {
            "kind": "p",
            "text": "একজন জরিপকারী 12 মিটার অনুভূমিক দূরত্বে 7 মিটার উচ্চতার পরিবর্তন পরিমাপ করেন। গ্রেডের কোণ নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "A = arctan(7/12) = arctan(0.5833) ≈ 30.26°। এই খাড়া গ্রেডের জন্য সড়ক বা ট্রেইলে জিগজ্যাগ পথ প্রয়োজন হবে। সিভিল ইঞ্জিনিয়াররা কাটা ও ভরাটের প্রয়োজনীয়তা নির্ধারণে এই কোণগুলো ব্যবহার করেন।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 16: পূরক শর্টকাট"
          },
          {
            "kind": "p",
            "text": "কোণ A = 32° দেওয়া আছে, ত্রিকোণমিতি ছাড়াই কোণ B নির্ণয় করুন।"
          },
          {
            "kind": "p",
            "text": "B = 90° − 32° = 58°। যখন একটি সূক্ষ্মকোণ চাঁদা, ডিজিটাল লেভেল বা পূর্ববর্তী গণনা থেকে ইতিমধ্যে জানা থাকে, তখন এই পূরক মোডটি পৃষ্ঠার দ্রুততম গণনা।"
          }
        ]
      },
      "angle-choose": {
        "h2": "কোন পদ্ধতি কখন ব্যবহার করবেন",
        "blocks": [
          {
            "kind": "p",
            "text": "একই ত্রিভুজের ক্ষেত্রে তিনটি বিপরীত ফাংশনই একই কোণ দেয়। পছন্দটি নির্ভর করে আপনি কোন বাহুগুলো জানেন এবং কোন পরিমাপগুলো সবচেয়ে নির্ভরযোগ্য তার ওপর।"
          },
          {
            "kind": "h3",
            "text": "Arcsin সবচেয়ে ভালো যখন"
          },
          {
            "kind": "p",
            "text": "আপনি আপনার লক্ষ্য কোণের বিপরীত বাহু ও অতিভুজ জানেন। উচ্চতার সমস্যায় এটি ঘটে: উল্লম্ব উচ্চতা ভূমি-স্তরের কোণের বিপরীতে থাকে, এবং ঢালু দূরত্ব হলো অতিভুজ। গাছের উচ্চতা, ভবনের উচ্চতা ও কেবলের ঝুলনের সমস্যায় arcsin উপযোগী।"
          },
          {
            "kind": "h3",
            "text": "Arccos সবচেয়ে ভালো যখন"
          },
          {
            "kind": "p",
            "text": "আপনি আপনার লক্ষ্য কোণের সন্নিহিত বাহু ও অতিভুজ জানেন। ছাদের কাঠামোয় arccos উপযোগী কারণ অনুভূমিক দূরত্ব (সন্নিহিত) কড়ি বরাবর সরাসরি মাপা হয়। যখন ভূমির দূরত্ব নির্ভরযোগ্য পরিমাপ হয়, তখন জরিপের ভিত্তিরেখাও arccos-এর পক্ষে।"
          },
          {
            "kind": "h3",
            "text": "Arctan সবচেয়ে ভালো যখন"
          },
          {
            "kind": "p",
            "text": "আপনি দুটি বাহুই জানেন কিন্তু অতিভুজ জানেন না। এটি সবচেয়ে সাধারণ মাঠের পরিস্থিতি: উচ্চতা ও অনুভূমিক দূরত্ব সরাসরি মাপা হয়, অন্যদিকে অতিভুজের জন্য আলাদা গণনা লাগত। Arctan অতিভুজকে সম্পূর্ণ এড়িয়ে যায়। যখনই আপনি দুটি বাহু মাপতে পারেন, arctan দ্রুততম পথ।"
          },
          {
            "kind": "h3",
            "text": "পূরক সবচেয়ে ভালো যখন"
          },
          {
            "kind": "p",
            "text": "আপনি ইতিমধ্যে একটি সূক্ষ্মকোণ জানেন। বাহুর কোনো পরিমাপের প্রয়োজন নেই। দ্বিতীয় কোণ পেতে যেকোনো বিপরীত গণনার পরে এটি ব্যবহার করুন, অথবা যখন চাঁদা বা ডিজিটাল ইনক্লাইনোমিটার সরাসরি একটি কোণ দেয়।"
          }
        ],
        "table": {
          "headers": [
            "জানা বাহু",
            "পদ্ধতি",
            "সূত্র"
          ],
          "rows": [
            [
              "বিপরীত বাহু (a) ও অতিভুজ (c)",
              "Arcsin",
              "[[A = \\sin^{-1}(a/c)]]"
            ],
            [
              "সন্নিহিত বাহু (b) ও অতিভুজ (c)",
              "Arccos",
              "[[A = \\cos^{-1}(b/c)]]"
            ],
            [
              "বিপরীত বাহু (a) ও সন্নিহিত বাহু (b)",
              "Arctan",
              "[[A = \\tan^{-1}(a/b)]]"
            ],
            [
              "একটি সূক্ষ্মকোণ",
              "পূরক",
              "[[B = 90^\\circ - A]]"
            ]
          ]
        }
      },
      "angle-anatomy": {
        "h2": "সমকোণী ত্রিভুজের কোণগুলো বোঝা",
        "blocks": [
          {
            "kind": "h3",
            "text": "তিনটি কোণ কী কী?"
          },
          {
            "kind": "p",
            "text": "প্রতিটি সমকোণী ত্রিভুজের তিনটি কোণ থাকে: ঠিক 90 ডিগ্রি পরিমাপের একটি সমকোণ এবং 90 ডিগ্রির কম পরিমাপের দুটি সূক্ষ্মকোণ। সমকোণটি শীর্ষবিন্দু C-তে থাকে। সূক্ষ্মকোণগুলো শীর্ষবিন্দু A ও B-তে থাকে। যেহেতু ত্রিভুজের কোণগুলোর যোগফল 180 ডিগ্রি, দুটি সূক্ষ্মকোণের মোট 90 ডিগ্রি হতেই হবে।"
          },
          {
            "kind": "h3",
            "text": "একটি কোণের সাপেক্ষে বাহুগুলোর নামকরণ কীভাবে হয়?"
          },
          {
            "kind": "p",
            "text": "বাহুর নাম নির্ভর করে আপনি কোন কোণটি মাপছেন তার ওপর। কোণ A-এর জন্য: A-এর বিপরীত বাহু (যা শীর্ষবিন্দু A স্পর্শ করে না) বিপরীত বাহু নামে পরিচিত, a দিয়ে চিহ্নিত। শীর্ষবিন্দু A স্পর্শকারী যে বাহুটি অতিভুজ নয়, সেটি সন্নিহিত বাহু, b দিয়ে চিহ্নিত। অতিভুজ, c দিয়ে চিহ্নিত, সমকোণের বিপরীতে থাকে এবং সবসময় দীর্ঘতম বাহু। আপনি যদি কোণ B মাপতে যান, চিহ্নগুলো বদলে যায়: B-এর বিপরীত বাহু নতুন বিপরীত বাহু হয়ে যায়।"
          },
          {
            "kind": "h3",
            "text": "রেফারেন্স কোণ কেন গুরুত্বপূর্ণ?"
          },
          {
            "kind": "p",
            "text": "একই ভৌত বাহু একটি কোণের জন্য বিপরীত এবং অন্যটির জন্য সন্নিহিত হতে পারে। 3-4-5 ত্রিভুজে, কোণ A যদি 4 দৈর্ঘ্যের বাহু ও অতিভুজের মধ্যে থাকে, তাহলে 3 দৈর্ঘ্যের বাহু A-এর বিপরীত। অন্য কোণায় কোণ B-এর জন্য, 3 দৈর্ঘ্যের বাহু সন্নিহিত হয়ে যায় এবং 4 দৈর্ঘ্যের বাহু বিপরীত হয়ে যায়। সূত্র বেছে নেওয়ার আগে সবসময় আপনার রেফারেন্স কোণ চিহ্নিত করুন।"
          }
        ],
        "imgAlt": "কোণ A, B, C চিহ্নিত সমকোণী ত্রিভুজ, বাহু a, b, c দেখানো, C-তে সমকোণ",
        "figcaption": "কোণের গঠন: C হলো 90 ডিগ্রির সমকোণ, A ও B সূক্ষ্মকোণ এবং এদের যোগফল 90 ডিগ্রি। বাহু a, b, c কোণ A-এর সাপেক্ষে চিহ্নিত।"
      },
      "angle-complement": {
        "h2": "পূরক কোণ: A + B = 90 ডিগ্রি",
        "blocks": [
          {
            "kind": "p",
            "text": "সমকোণী ত্রিভুজের দুটি সূক্ষ্মকোণ পূরক, অর্থাৎ এদের যোগফল ঠিক 90 ডিগ্রি। এটি [[A + B = 90^\\circ]] সম্পর্কটি দেয়। একটি সূক্ষ্মকোণ পেয়ে গেলে, অন্যটি অবিলম্বে বিয়োগ করে পাওয়া যায়: B = 90 ডিগ্রি বিয়োগ A।"
          },
          {
            "kind": "p",
            "text": "এটি আলাদা পরিমাপ পদ্ধতি নয়। এটি একটি সামঞ্জস্য যাচাই ও শর্টকাট। arcsin যদি A = 36.87 ডিগ্রি দেয়, তাহলে আর কোনো ত্রিকোণমিতি ছাড়াই B = 53.13 ডিগ্রি। ক্যালকুলেটরটি এর কোণ-যোগফল মোডগুলোতে এই সম্পর্ক ব্যবহার করে।"
          },
          {
            "kind": "p",
            "text": "পূরক সম্পর্ক এটাও ব্যাখ্যা করে কেন sin(A), cos(B)-এর সমান। 3-4-5 ত্রিভুজে, sin(36.87°) হলো 0.6 এবং cos(53.13°)-ও 0.6। একটি সূক্ষ্মকোণের সাইন সবসময় অন্য কোণের কোসাইনের সমান, কারণ একটি কোণের বিপরীত বাহু অন্য কোণের সন্নিহিত বাহু।"
          }
        ]
      },
      "angle-howto": {
        "h2": "সমকোণী ত্রিভুজের কোণ ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
        "blocks": [
          {
            "kind": "p",
            "text": "অজানা কোণ নির্ণয় করতে এই ধাপগুলো অনুসরণ করুন:"
          }
        ],
        "imgAlt": "কোণ A নির্ণয়ের চার-ধাপের প্রক্রিয়া: বাহু চিহ্নিত করুন, অনুপাত বেছে নিন, বিপরীত ত্রিকোণমিতি প্রয়োগ করুন, যাচাই করুন",
        "figcaption": "চার-ধাপের কর্মপ্রবাহ: আপনার রেফারেন্স কোণের সাপেক্ষে বাহু চিহ্নিত করুন, আপনার জানা বাহুর সাথে মিলিয়ে অনুপাত বেছে নিন, বিপরীত ফাংশন প্রয়োগ করুন, তারপর পূরক দিয়ে যাচাই করুন।",
        "list": [
          "<strong>সমকোণ চিহ্নিত করুন।</strong> নিশ্চিত করুন ত্রিভুজটির একটি 90 ডিগ্রি কোণা আছে। ক্যালকুলেটরটি শুধু সমকোণী ত্রিভুজের জন্য কাজ করে।",
          "<strong>অতিভুজ চিহ্নিত করুন।</strong> দীর্ঘতম বাহুটি খুঁজুন, যা সমকোণের বিপরীতে। এটিকে c দিয়ে চিহ্নিত করুন।",
          "<strong>আপনার রেফারেন্স কোণ বেছে নিন।</strong> সিদ্ধান্ত নিন আপনি কোণ A নাকি কোণ B সমাধান করছেন। এটি নির্ধারণ করে কোন বাহুগুলো বিপরীত ও সন্নিহিত।",
          "<strong>মিলিয়ে মোড বেছে নিন।</strong> বিপরীত বাহু ও অতিভুজ জানলে arcsin ব্যবহার করুন। সন্নিহিত বাহু ও অতিভুজ জানলে arccos ব্যবহার করুন। দুটি বাহুই জানলে arctan ব্যবহার করুন। একটি সূক্ষ্মকোণ জানলে পূরক মোড ব্যবহার করুন।",
          "<strong>দুটি বাহুর দৈর্ঘ্য লিখুন।</strong> দুটোর জন্য একই একক ব্যবহার করুন (দুটোই মিটারে, দুটোই ফুটে ইত্যাদি)। অনুপাতে একক বাতিল হয়ে যায়, কিন্তু একক মেশালে অনুপাত নষ্ট হয়।",
          "<strong>ফলাফল ডিগ্রিতে পড়ুন।</strong> ক্যালকুলেটর ডিগ্রিতে কোণ দেয়, যা নির্মাণ, দিকনির্ণয় ও শ্রেণিকক্ষের জ্যামিতির মান একক।",
          "<strong>দ্বিতীয় কোণটি নির্ণয় করুন।</strong> 90 ডিগ্রি থেকে বিয়োগ করুন, অথবা অন্য কোণটিকে রেফারেন্স ধরে ক্যালকুলেটরটি আবার চালান।",
          "<strong>যাচাই করুন।</strong> পরীক্ষা করুন দুটি কোণই 0 ও 90 ডিগ্রির মধ্যে আছে এবং যোগফল 90। নির্ভুলতা গুরুত্বপূর্ণ হলে দ্বিতীয় অনুপাত পদ্ধতিতে ক্রস-চেক করুন।"
        ]
      },
      "angle-applications": {
        "h2": "বাস্তব জীবনে প্রয়োগ",
        "blocks": [
          {
            "kind": "p",
            "text": "ঢাল, পিচ ও দৃষ্টিরেখা যেখানেই গুরুত্বপূর্ণ, সেখানেই কোণের গণনা দেখা যায়। উপরের ষোলটি উদাহরণ নির্মাণ, প্রবেশগম্যতা, জরিপ ও শিক্ষা জুড়ে বিস্তৃত। এগুলোর পেছনের ধরনগুলো এখানে।"
          },
          {
            "kind": "h3",
            "text": "নির্মাণ ও কাঠমিস্ত্রির কাজ"
          },
          {
            "kind": "p",
            "text": "ছাদের ঢাল (উদাহরণ 5: 18.43°), কড়ির কোণ (উদাহরণ 10: 22.62°) ও সিঁড়ির ঢাল (উদাহরণ 12: 34.99°) সরাসরি মাঠের পরিমাপে arctan বা arccos ব্যবহার করে। কাঠমিস্ত্রিরা উচ্চতা বাই অনুভূমিক দূরত্বে কাজ করেন কারণ নকশায় এগুলোই মাত্রা। ক্যালকুলেটরটি এই মাত্রাগুলোকে করাতের জন্য কাটার কোণে রূপান্তর করে।"
          },
          {
            "kind": "h3",
            "text": "নিরাপত্তা ও প্রবেশগম্যতা"
          },
          {
            "kind": "p",
            "text": "মই বসানো (উদাহরণ 6: 66.04°) ও হুইলচেয়ার র‍্যাম্পের (উদাহরণ 7: 4.76°) নিরাপত্তা সীমা কোণে প্রকাশ করা হয়। 66°-এ একটি মই খুব অগভীর; 75° নির্দেশিকা 3.73-থেকে-1 অনুপাতের সাথে মিলে। 4.76°-এর একটি র‍্যাম্প 1:12 প্রবেশগম্যতা সর্বোচ্চ মেনে চলে। ক্যালকুলেটরটি পাস-বা-ফেল কোণ পরীক্ষাকে দ্রুত যাচাইয়ে পরিণত করে।"
          },
          {
            "kind": "h3",
            "text": "জরিপ ও বহিরঙ্গন"
          },
          {
            "kind": "p",
            "text": "গাছের উচ্চতার কোণ (উদাহরণ 8: 30.96°), পাহাড়ের ঢালের গ্রেড (উদাহরণ 15: 13.34°) ও জরিপের দৃষ্টিরেখা (উদাহরণ 13: 30.26°) ক্লাইনোমিটারের পাঠ ও ফিতায় মাপা দূরত্ব ব্যবহার করে। মাটিতে আপনি যা মাপতে পারেন এবং উচ্চতা বা ঢাল সম্পর্কে যা জানা দরকার, কোণটি সেই ফাঁক পূরণ করে।"
          }
        ],
        "imgAlt": "ছাদের ঢাল, মইয়ের কোণ, র‍্যাম্পের ঢাল ও গাছের উচ্চতার কোণের গণনা দেখানো চারটি প্যানেল",
        "figcaption": "বাস্তব জগতের কোণের সমস্যা: উচ্চতা ও অনুভূমিক দূরত্ব থেকে ছাদের ঢাল, মইয়ের নিরাপত্তা কোণ, র‍্যাম্পের প্রবেশগম্যতা ঢাল এবং গাছের উচ্চতার দৃষ্টিকোণ।"
      },
      "angle-mistakes": {
        "h2": "কোণ নির্ণয়ে সাধারণ ভুল",
        "blocks": [
          {
            "kind": "h3",
            "text": "বিপরীত ও সন্নিহিত বাহু বদলে ফেলা"
          },
          {
            "kind": "p",
            "text": "সবচেয়ে ঘন ঘন ভুল। চিহ্নগুলো আপনার রেফারেন্স কোণের ওপর নির্ভর করে। আপনি যদি arctan(3/4) = 36.87° চেয়ে arctan(4/3) = 53.13° গণনা করেন, তাহলে আপনি ভুল কোণ সমাধান করেছেন। সংশোধন: ত্রিভুজটির খসড়া আঁকুন, আপনার রেফারেন্স কোণ চিহ্নিত করুন, তারপর বিপরীত (এটির উল্টোদিকে) ও সন্নিহিত (এটিকে স্পর্শকারী) চিহ্নিত করুন।"
          },
          {
            "kind": "h3",
            "text": "ভুল বিপরীত ফাংশন ব্যবহার"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত-বাই-অতিভুজ অনুপাতে arcsin প্রয়োগ করলে কাঙ্ক্ষিত কোণের পূরক পাওয়া যায়, কোনো ত্রুটি বার্তা নয়। Arcsin(4/5) = 53.13° হলো কোণ B, কোণ A নয়। সংশোধন: উপরের সারণি ব্যবহার করে ফাংশনটিকে আপনার জানা বাহুর সাথে মিলান।"
          },
          {
            "kind": "h3",
            "text": "অনুপাত বৈধ হতে হবে ভুলে যাওয়া"
          },
          {
            "kind": "p",
            "text": "Arcsin ও arccos-এর জন্য 0 ও 1-এর মধ্যে অনুপাত প্রয়োজন। আপনি যদি বিপরীত বাহু = 5 ও অতিভুজ = 3 লেখেন, 1.67 অনুপাতের কোনো arcsin নেই। এর অর্থ সবসময় ভুলভাবে চিহ্নিত বাহু: অতিভুজকেই দীর্ঘতম বাহু ও হর হতে হবে। সংশোধন: দীর্ঘতম পরিমাপটিকে অতিভুজ (c) হিসেবে পুনর্নির্ধারণ করুন।"
          },
          {
            "kind": "h3",
            "text": "ডিগ্রি ও রেডিয়ান মেশানো"
          },
          {
            "kind": "p",
            "text": "ক্যালকুলেটর ও কোডে বিপরীত ত্রিকোণমিতি প্রায়শই ডিফল্টরূপে রেডিয়ানে থাকে। Arctan(1) ডিগ্রিতে 45° কিন্তু রেডিয়ানে 0.785। এই ক্যালকুলেটর ডিগ্রি দেয়। 3-4-5 ত্রিভুজের জন্য আপনার হাতের গণনা 0.64 দিলে, আপনি রেডিয়ানে আছেন; 36.87° পেতে 180/π দিয়ে গুণ করুন।"
          },
          {
            "kind": "h3",
            "text": "ভিন্ন এককে বাহু লেখা"
          },
          {
            "kind": "p",
            "text": "ইঞ্চিতে বিপরীত বাহু ও ফুটে অতিভুজ অনুপাত নষ্ট করে। প্রথমে একটি সাধারণ এককে রূপান্তর করুন। অনুপাত এককহীন, কিন্তু শুধু তখনই যখন দুটি ইনপুট একই একক ভাগ করে।"
          },
          {
            "kind": "h3",
            "text": "অনুপাত খুব আগেই রাউন্ড করা"
          },
          {
            "kind": "p",
            "text": "Arcsin(0.6) = 36.87°, কিন্তু 0.596 থেকে রাউন্ড করা arcsin(0.60) দেয় 36.58°। 0 ও 1-এর কাছে ছোট অনুপাতের ভুল বড় হয়, যেখানে বিপরীত ফাংশনগুলো সবচেয়ে খাড়া। গণনার মাধ্যমে পূর্ণ নির্ভুলতা রাখুন, শুধু চূড়ান্ত কোণটি রাউন্ড করুন।"
          },
          {
            "kind": "h3",
            "text": "ধরে নেওয়া ক্যালকুলেটর বাহু নির্ণয় করে"
          },
          {
            "kind": "p",
            "text": "এই পৃষ্ঠা বাহু থেকে কোণ নির্ণয় করে। এটি কোণ থেকে বাহু নির্ণয় করে না। কোণ-থেকে-বাহুর সমস্যার জন্য, নিবেদিত বাহু ক্যালকুলেটর ব্যবহার করুন। প্রতিটি টুলের একটি কাজ।"
          }
        ]
      },
      "angle-precision": {
        "h2": "কোণের নির্ভুলতা ও একক",
        "blocks": [
          {
            "kind": "p",
            "text": "কোণের ফলাফল ততটাই নির্ভুল যতটা এর পেছনের বাহুর পরিমাপ। নিকটতম মিলিমিটার পর্যন্ত ফিতার পাঠ কোণে দুই দশমিক স্থান সমর্থন করে। মাঠে পায়ে হেঁটে মাপা দূরত্ব বড়জোর পূর্ণ ডিগ্রি সমর্থন করে। ক্যালকুলেটর পূর্ণ ফ্লোটিং-পয়েন্ট নির্ভুলতায় গণনা করে; রাউন্ডিংয়ের সিদ্ধান্ত আপনার।"
          },
          {
            "kind": "h3",
            "text": "ইনপুটের ভুল কোণকে কীভাবে প্রভাবিত করে"
          },
          {
            "kind": "p",
            "text": "যখন অনুপাত 0 বা 1-এর কাছে থাকে, যেখানে বিপরীত ফাংশনগুলো সবচেয়ে খাড়া, তখন ছোট বাহুর ভুল বড় কোণের ভুল ঘটায়। 45°-এর কাছে arctan-এর ক্ষেত্রে, অনুপাতে 1% ভুল কোণকে প্রায় 0.3° সরিয়ে দেয়। 5° বা 85°-এর কাছে, একই 1% অনুপাতের ভুল কোণকে 0.5°-এর বেশি সরিয়ে দেয়। চরম কোণে সতর্কতায় মাপুন, অথবা একাধিক পাঠ নিয়ে গড় করুন।"
          },
          {
            "kind": "h3",
            "text": "ডিগ্রি বনাম ডিগ্রি-মিনিট-সেকেন্ড"
          },
          {
            "kind": "p",
            "text": "জরিপকারীরা কখনো কখনো কোণকে ডিগ্রি, মিনিট ও সেকেন্ডে (DMS) প্রকাশ করেন। 36.87°-কে DMS-এ রূপান্তর করতে: পূর্ণ ডিগ্রি 36, ভগ্নাংশ 0.87°-কে 60 দিয়ে গুণ করলে 52.2 মিনিট পাওয়া যায়, এবং 0.2 মিনিটকে 60 দিয়ে গুণ করলে 12 সেকেন্ড পাওয়া যায়, ফলে 36° 52′ 12″। এই ক্যালকুলেটর দশমিক ডিগ্রি দেয়; মিনিট পেতে ভগ্নাংশকে 60 দিয়ে গুণ করুন।"
          },
          {
            "kind": "h3",
            "text": "পূর্ণ ডিগ্রি কখন যথেষ্ট"
          },
          {
            "kind": "p",
            "text": "কাঠমিস্ত্রির কাটার কোণ, মই বসানোর পরীক্ষা ও মোটামুটি গ্রেডের অনুমানে খুব কমই দশমিকের প্রয়োজন হয়। উপকরণ অর্ডারের জন্য নিকটতম ডিগ্রি পর্যন্ত ছাদের ঢালই যথেষ্ট। দুই দশমিকের নির্ভুলতা মেশিনিং, অপটিক্যাল সারিবদ্ধকরণ ও প্রকৌশল গণনার জন্য সংরক্ষণ করুন যেখানে সহনশীলতা কঠোর।"
          }
        ]
      },
      "angle-verify": {
        "h2": "আপনার কোণের উত্তর যাচাই",
        "blocks": [
          {
            "kind": "p",
            "text": "তিনটি পরীক্ষা সঠিক কোণ গণনা নিশ্চিত করে:"
          },
          {
            "kind": "p",
            "text": "গুরুত্বপূর্ণ কাজের জন্য, বাহুগুলো পিথাগোরাসের উপপাদ্য মেনে চলে কিনা তাও যাচাই করুন। 3-4-5 ত্রিভুজে, 9 + 16 = 25 বাহুগুলো নিশ্চিত করে, তারপর আপনি সেগুলো থেকে প্রাপ্ত কোণে আস্থা রাখতে পারেন।"
          }
        ],
        "list": [
          "<strong>পরিসর পরীক্ষা।</strong> দুটি সূক্ষ্মকোণই কঠোরভাবে 0° ও 90°-এর মধ্যে থাকতে হবে। 0°, 90° বা তার বেশি কোণ অবৈধ ইনপুট বা ভুলভাবে চিহ্নিত ত্রিভুজ নির্দেশ করে।",
          "<strong>যোগফল পরীক্ষা।</strong> A + B ঠিক 90°-এর সমান হতে হবে। আপনার দুটি কোণের যোগফল 89.9° বা 90.1° হলে, রাউন্ডিং তা ব্যাখ্যা করে। বড় ফাঁক ভুল নির্দেশ করে।",
          "<strong>ভিন্ন পদ্ধতিতে যাচাই।</strong> ভিন্ন বিপরীত ফাংশন দিয়ে একই কোণ পুনর্গণনা করুন। arcsin(3/5) = 36.87° ও arctan(3/4) = 36.87° হলে, উত্তরটি মজবুত। অমিল চিহ্নিতকরণের ভুল নির্দেশ করে।"
        ]
      },
      "angle-conclusion": {
        "h2": "আত্মবিশ্বাসের সাথে যেকোনো সমকোণী ত্রিভুজের কোণ নির্ণয় করুন",
        "blocks": [
          {
            "kind": "p",
            "text": "আপনার ত্রিভুজ চিহ্নিত করে শুরু করুন: প্রথমে অতিভুজ, তারপর আপনার লক্ষ্য কোণের সাপেক্ষে বিপরীত ও সন্নিহিত বাহু। আপনার জানা বাহুর সাথে মিলিয়ে বিপরীত ফাংশন বেছে নিন: বিপরীত বাহু ও অতিভুজের জন্য arcsin, সন্নিহিত বাহু ও অতিভুজের জন্য arccos, দুটি বাহুর জন্য arctan। পরিমাপগুলো লিখুন, ডিগ্রিতে কোণটি পড়ুন, তারপর 90 বিয়োগ প্রথমটি থেকে দ্বিতীয় কোণ পান। পরিসর পরীক্ষা, যোগফল পরীক্ষা ও ভিন্ন পদ্ধতির গণনা দিয়ে যাচাই করুন। এই ধাপগুলোতে, যেকোনো সমকোণী ত্রিভুজের কোণের সমস্যা একটি নির্ভরযোগ্য রুটিনে পরিণত হয়। আপনার সংখ্যা চালাতে এই পৃষ্ঠার শীর্ষে ক্যালকুলেটরে ফিরে যান।"
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "সমকোণী ত্রিভুজে কোণ কীভাবে নির্ণয় করবেন?",
        "answer": "বাহুর অনুপাতে একটি বিপরীত ত্রিকোণমিতিক ফাংশন ব্যবহার করুন। বিপরীত বাহু ও অতিভুজ থাকলে, arcsin(বিপরীত/অতিভুজ) গণনা করুন। সন্নিহিত বাহু ও অতিভুজ থাকলে, arccos(সন্নিহিত/অতিভুজ) ব্যবহার করুন। দুটি বাহু থাকলে, arctan(বিপরীত/সন্নিহিত) ব্যবহার করুন। ফলাফল ডিগ্রিতে কোণ।"
      },
      {
        "question": "sin ও arcsin-এর মধ্যে পার্থক্য কী?",
        "answer": "সাইন একটি কোণ নিয়ে একটি অনুপাত দেয়: sin(30°) = 0.5। Arcsin এর উল্টোটি করে: এটি একটি অনুপাত নিয়ে কোণটি ফিরিয়ে দেয়, তাই arcsin(0.5) = 30°। কোণ জানা থাকলে ও বাহু দরকার হলে সাইন ব্যবহার করুন; বাহু জানা থাকলে ও কোণ দরকার হলে arcsin ব্যবহার করুন।"
      },
      {
        "question": "arcsin-এর বদলে arctan কখন ব্যবহার করব?",
        "answer": "যখন আপনি দুটি বাহু (বিপরীত ও সন্নিহিত) জানেন কিন্তু অতিভুজ জানেন না, তখন arctan ব্যবহার করুন। Arctan অতিভুজকে সম্পূর্ণ এড়িয়ে যায়, যা ছাদের ঢালের মতো মাঠের পরিমাপে একটি ধাপ বাঁচায় যেখানে উচ্চতা ও অনুভূমিক দূরত্ব সরাসরি মাপা হয়। অতিভুজ আপনার জানা বাহুগুলোর একটি হলে arcsin ব্যবহার করুন।"
      },
      {
        "question": "দুটি সূক্ষ্মকোণের যোগফল 90 ডিগ্রি কেন?",
        "answer": "ত্রিভুজের কোণগুলোর যোগফল সবসময় 180 ডিগ্রি। সমকোণ এর মধ্যে 90 নিয়ে নেয়, বাকি দুটির জন্য মিলিয়ে 90 থাকে। এর অর্থ A + B = 90°, তাই একটি সূক্ষ্মকোণ পেলেই বিয়োগ করে অন্যটি পাওয়া যায়।"
      },
      {
        "question": "কোণ কি 90 ডিগ্রি হতে পারে?",
        "answer": "না। 90 ডিগ্রির কোণটি শীর্ষবিন্দু C-তে সমকোণ, যা দেওয়া আছে। ক্যালকুলেটরটি দুটি সূক্ষ্মকোণ A ও B নির্ণয় করে, প্রতিটি কঠোরভাবে 0° ও 90°-এর মধ্যে। আপনার ফলাফল 0° বা 90°-এ পৌঁছালে, ইনপুটগুলো বৈধ ত্রিভুজ নয়, ডিজেনারেট ত্রিভুজ বর্ণনা করে।"
      },
      {
        "question": "আমার বাহুর অনুপাত 1-এর বেশি হলে কী হবে?",
        "answer": "arcsin ও arccos-এর ক্ষেত্রে, 1-এর বেশি অনুপাত অসম্ভব এবং ভুলভাবে চিহ্নিত বাহু নির্দেশ করে। অতিভুজকেই দীর্ঘতম বাহু ও হর হতে হবে। দীর্ঘতম পরিমাপটিকে অতিভুজ (c) হিসেবে পুনর্নির্ধারণ করে পুনর্গণনা করুন। Arctan-এর অনুপাত বৈধভাবে 1 ছাড়িয়ে যেতে পারে।"
      },
      {
        "question": "কোন বাহু বিপরীত ও কোনটি সন্নিহিত, কীভাবে বুঝব?",
        "answer": "প্রথমে আপনার রেফারেন্স কোণ বেছে নিন। বিপরীত বাহু সেই কোণের উল্টোদিকে থাকে (এর শীর্ষবিন্দু স্পর্শ করে না)। সন্নিহিত বাহু কোণের শীর্ষবিন্দু স্পর্শ করে কিন্তু অতিভুজ নয়। একই ভৌত বাহু একটি সূক্ষ্মকোণের জন্য বিপরীত এবং অন্যটির জন্য সন্নিহিত।"
      },
      {
        "question": "arcsin, arccos ও arctan একই উত্তর কেন দেয়?",
        "answer": "কারণ তারা ভিন্ন বাহুর জোড়ার মাধ্যমে একই জ্যামিতিক কোণ বর্ণনা করে। 3-4-5 ত্রিভুজে, arcsin(3/5), arccos(4/5) ও arctan(3/4) সবই 36.87°-এর সমান। এই মিল একটি শক্তিশালী যাচাই: দুটি পদ্ধতি অমিল হলে, একটি বাহু ভুলভাবে চিহ্নিত।"
      },
      {
        "question": "কোণ ডিগ্রিতে হবে নাকি রেডিয়ানে?",
        "answer": "এই ক্যালকুলেটর ডিগ্রি ব্যবহার করে, যা নির্মাণ, দিকনির্ণয় ও শ্রেণিকক্ষের জ্যামিতির মান। বৈজ্ঞানিক ক্যালকুলেটরে হাতে গণনা করলে, এটি ডিগ্রি মোডে আছে কিনা পরীক্ষা করুন। 3-4-5 ত্রিভুজের জন্য 0.64-এর মতো রেডিয়ান-মোডের ফলাফল 180/π দিয়ে গুণ করে 36.87°-এ রূপান্তরিত হয়।"
      },
      {
        "question": "আমার কোণের উত্তর কতটা নির্ভুল হওয়া উচিত?",
        "answer": "আপনার ইনপুটের নির্ভুলতার সাথে মিলান। বাহু নিকটতম সেন্টিমিটার পর্যন্ত মাপা হলে, দুই দশমিক স্থান (36.87°) উপযুক্ত। মোটামুটি মাঠের অনুমানের জন্য, পূর্ণ ডিগ্রিই যথেষ্ট। গণনার সময় পূর্ণ নির্ভুলতা রাখুন এবং শুধু চূড়ান্ত উত্তরটি রাউন্ড করুন।"
      },
      {
        "question": "শুধু একটি বাহু জানা থাকলে কি কোণ নির্ণয় করতে পারি?",
        "answer": "না। একটি বাহু যথেষ্ট নয়; অসীম সংখ্যক সমকোণী ত্রিভুজ একটি বাহুর দৈর্ঘ্য ভাগ করে। আপনার দুটি বাহু (বিপরীত ত্রিকোণমিতির জন্য) অথবা একটি বাহু ও একটি সূক্ষ্মকোণ (পূরকের নিয়মের জন্য) প্রয়োজন। ক্যালকুলেটরটির ঠিক দুটি ইনপুট প্রয়োজন।"
      },
      {
        "question": "আমার কোণ সঠিক কিনা কীভাবে পরীক্ষা করব?",
        "answer": "তিনটি পরীক্ষা: দুটি কোণই 0° ও 90°-এর মধ্যে থাকতে হবে, এদের যোগফল ঠিক 90° হতে হবে, এবং ভিন্ন বিপরীত ফাংশন দিয়ে পুনর্গণনায় একই ফলাফল আসতে হবে। 3-4-5 ত্রিভুজের ক্ষেত্রে, arcsin(3/5) = 36.87° ও arctan(3/4) = 36.87° একে অপরকে নিশ্চিত করে।"
      }
    ],
    "relatedHeading": "সমকোণী ত্রিভুজের সম্পর্কিত ক্যালকুলেটরগুলো দেখুন",
    "relatedItems": [
      "সমকোণী ত্রিভুজের বাহু ক্যালকুলেটর",
      "কোণ থেকে সমকোণী ত্রিভুজের বাহু ক্যালকুলেটর",
      "ত্রিকোণমিতিক অনুপাত ক্যালকুলেটর",
      "সমকোণী ত্রিভুজ ক্যালকুলেটর (সব-ইন-ওয়ান)",
      "পিথাগোরাসের উপপাদ্য ক্যালকুলেটর",
      "বিশেষ সমকোণী ত্রিভুজ ক্যালকুলেটর"
    ]
  },
  "ja": {
    "tocHeading": "このガイドの内容",
    "tocItems": {
      "angle-anatomy": "直角三角形の角を理解する",
      "angle-applications": "実生活での応用例",
      "angle-arccos": "アークコサインで角を求める",
      "angle-arcsin": "アークサインで角を求める",
      "angle-arctan": "アークタンジェントで角を求める",
      "angle-choose": "各手法の使い分け",
      "angle-complement": "余角",
      "angle-faq": "よくある質問",
      "angle-howto": "角度計算機の使い方",
      "angle-intro": "直角三角形の角度計算機とは?",
      "angle-inverse": "逆三角関数",
      "angle-mistakes": "よくある間違い",
      "angle-precision": "角度の精度と単位",
      "angle-related": "関連する計算機",
      "angle-verify": "答えの検証"
    },
    "sections": {
      "angle-anatomy": {
        "blocks": [
          {
            "kind": "h3",
            "text": "3つの角とは?"
          },
          {
            "kind": "p",
            "text": "すべての直角三角形には3つの角があります。ちょうど90度の直角が1つと、それぞれ90度未満の2つの鋭角です。直角は頂点Cにあります。鋭角は頂点AとBにあります。三角形の内角の和は180度なので、2つの鋭角の合計は90度にならなければなりません。"
          },
          {
            "kind": "h3",
            "text": "角に対する辺の名前の付け方は?"
          },
          {
            "kind": "p",
            "text": "辺の名前は、どの角を測るかによって変わります。角Aについて: 角Aの対辺(頂点Aに接しない辺)は対辺と呼ばれ、aと表記します。頂点Aに接し、斜辺ではない辺は隣辺と呼ばれ、bと表記します。斜辺はcと表記され、直角の対辺にあり、常に最も長い辺です。角Bを測る場合に切り替えると、ラベルが入れ替わります。角Bの対辺が新しい対辺になります。"
          },
          {
            "kind": "h3",
            "text": "なぜ基準角が重要なのか?"
          },
          {
            "kind": "p",
            "text": "同じ物理的な辺が、一方の角にとっては対辺、もう一方の角にとっては隣辺になることがあります。3-4-5三角形で、角Aが長さ4の辺と斜辺の間にある場合、長さ3の辺は角Aの対辺です。もう一方の角にある角Bにとっては、長さ3の辺は隣辺になり、長さ4の辺が対辺になります。公式を選ぶ前に、必ず基準角を特定してください。"
          }
        ],
        "figcaption": "角の構造: Cは90度の直角、AとBは鋭角で合計90度。辺a、b、cは角Aを基準にラベル付けされています。",
        "h2": "直角三角形の角を理解する",
        "imgAlt": "角A、B、Cにラベル付けされた直角三角形。辺a、b、cが示され、直角はCにある"
      },
      "angle-arccos": {
        "blocks": [
          {
            "kind": "p",
            "text": "求めたい角の隣辺と斜辺がわかっているときはアークコサインを使います。公式は [[A = \\cos^{-1}(b/c)]] です。アークサインと同様に、比は0から1の間でなければなりません。アークコサインは、隣辺が最も測りやすい場合に自然な選択です。屋根の水平距離や測量の基線距離などがその例です。"
          },
          {
            "kind": "h3",
            "text": "例題10: 垂木の角度(アークコサイン)"
          },
          {
            "kind": "p",
            "text": "垂木の水平距離が6メートル、垂木の長さ(斜辺)が6.5メートルです。軒先での勾配角を求めます。"
          },
          {
            "kind": "p",
            "text": "A = arccos(6/6.5) = arccos(0.9231) ≈ 22.62°。これは中程度の屋根勾配です。余角の67.38°は、垂木と垂直な壁の間の角です。"
          },
          {
            "kind": "h3",
            "text": "例題: 5-12-13三角形"
          },
          {
            "kind": "p",
            "text": "隣辺b = 12、斜辺c = 13が与えられたとき、角Aを求めます。"
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) ≈ 22.62°。余角B = 67.38°です。長さ5の辺を角Bの隣辺として扱えば、arccos(5/13)で67.38°を直接求められることに注意してください。"
          },
          {
            "kind": "h3",
            "text": "アークコサインがアークサインより優れる場合"
          },
          {
            "kind": "p",
            "text": "対辺より隣辺の測定値の方が信頼できるときはアークコサインを選びます。屋根の骨組みでは、水平距離は天井根太に沿って直接測られることが多く、垂直の立ち上がりは下げ振りで測らなければなりません。より正確な入力が、より正確な角度を生みます。両方の関数は同じ三角形に対して数学的に等価です。選択は測定の品質の問題です。"
          }
        ],
        "h2": "アークコサインで角を求める"
      },
      "angle-arcsin": {
        "blocks": [
          {
            "kind": "p",
            "text": "求めたい角の対辺と斜辺がわかっているときはアークサインを使います。公式は [[A = \\sin^{-1}(a/c)]] です。比は0から1の間でなければなりません。比が1を超える場合は、辺のラベル付けを間違えています。斜辺が分母にならなければなりません。"
          },
          {
            "kind": "h3",
            "text": "例題1: 3-4-5三角形"
          },
          {
            "kind": "p",
            "text": "対辺a = 3、斜辺c = 5が与えられたとき、角Aを求めます。"
          },
          {
            "kind": "p",
            "text": "ステップ1: 公式を書きます。A = arcsin(a/c)。<br />ステップ2: 代入します。A = arcsin(3/5)。<br />ステップ3: 比を計算します。3/5 = 0.6。<br />ステップ4: アークサインを適用します。A = arcsin(0.6) ≈ 36.87°。"
          },
          {
            "kind": "p",
            "text": "この角は約36.87度です。余角B = 90° − 36.87° = 53.13°です。"
          },
          {
            "kind": "h3",
            "text": "例題2: 同じ三角形、アークコサインでの確認"
          },
          {
            "kind": "p",
            "text": "隣辺b = 4、斜辺c = 5が与えられたとき、アークコサインで角Aを求めます。"
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) ≈ 36.87°。これは例題1と完全に一致し、両方の方法が同じ角を表していることを確認できます。2つの方法が一致すれば、辺のラベル付けは正しいということです。"
          },
          {
            "kind": "h3",
            "text": "例題3: 同じ三角形、アークタンジェントでの確認"
          },
          {
            "kind": "p",
            "text": "対辺a = 3、隣辺b = 4が与えられたとき、アークタンジェントで角Aを求めます。"
          },
          {
            "kind": "p",
            "text": "A = arctan(a/b) = arctan(3/4) = arctan(0.75) ≈ 36.87°。同じ三角形に対して、3つの逆関数はすべて同じ答えに収束します。この三重の一致は、利用可能な中で最も強力な検証です。"
          },
          {
            "kind": "h3",
            "text": "例題4: 余角を求める"
          },
          {
            "kind": "p",
            "text": "例題1から角A = 36.87°が与えられたとき、角Bを求めます。"
          },
          {
            "kind": "p",
            "text": "B = 90° − A = 90° − 36.87° = 53.13°。三角関数は不要です。長さ4の辺を角Bの対辺として扱い、arcsin(4/5) = 53.13°を計算することで検証できます。"
          },
          {
            "kind": "h3",
            "text": "例題11: 急な傾斜(アークサイン)"
          },
          {
            "kind": "p",
            "text": "ケーブルの配線が、斜辺距離25メートルに対して7メートル上昇しています。傾斜角を求めます。"
          },
          {
            "kind": "p",
            "text": "A = arcsin(7/25) = arcsin(0.28) ≈ 16.26°。これは緩やかな傾斜で、バリアフリーのスロープやコンベアの傾斜に典型的です。角度が浅いということは、ケーブルの長さの大部分が、高さではなく水平距離に使われることを意味します。"
          }
        ],
        "h2": "アークサインで角を求める"
      },
      "angle-complement": {
        "blocks": [
          {
            "kind": "p",
            "text": "直角三角形の2つの鋭角は余角の関係にあり、合計がちょうど90度になります。これにより [[A + B = 90^\\circ]] という関係が得られます。一方の鋭角がわかれば、もう一方は引き算ですぐに求まります。B = 90度 − Aです。"
          },
          {
            "kind": "p",
            "text": "これは独立した測定方法ではありません。一貫性の確認であり、近道です。アークサインでA = 36.87度が得られれば、B = 53.13度がそれ以上の三角関数なしで求まります。この計算機は、角度合計モードでこの関係を使っています。"
          },
          {
            "kind": "p",
            "text": "この余角の関係は、sin(A)がcos(B)に等しい理由も説明します。3-4-5三角形では、sin(36.87°)は0.6であり、cos(53.13°)も0.6です。一方の鋭角のサインは常に他方の鋭角のコサインに等しくなります。一方の角の対辺が、他方の角の隣辺になるからです。"
          }
        ],
        "h2": "余角: A + B = 90度"
      },
      "angle-howto": {
        "blocks": [
          {
            "kind": "p",
            "text": "未知の角を求めるには、次の手順に従ってください。"
          }
        ],
        "figcaption": "4ステップの作業手順: 基準角を基準に辺にラベルを付け、既知の辺に合う比を選び、逆関数を適用し、余角で検証します。",
        "h2": "直角三角形の角度計算機の使い方",
        "imgAlt": "角Aを求める4ステップの手順: 辺にラベルを付ける、比を選ぶ、逆三角関数を適用する、余角で検証する",
        "list": [
          "<strong>直角を特定します。</strong>三角形に90度の角があることを確認してください。この計算機は直角三角形にのみ対応しています。",
          "<strong>斜辺にラベルを付けます。</strong>直角の対辺にある最も長い辺を見つけて、cとラベル付けします。",
          "<strong>基準角を選びます。</strong>角Aと角Bのどちらを求めるかを決めます。これにより、どの辺が対辺・隣辺になるかが決まります。",
          "<strong>合致するモードを選びます。</strong>対辺と斜辺がわかっている場合はアークサイン、隣辺と斜辺がわかっている場合はアークコサイン、2つの脚がわかっている場合はアークタンジェント、1つの鋭角がわかっている場合は余角モードを使います。",
          "<strong>2つの辺の長さを入力します。</strong>両方に同じ単位を使ってください(両方メートル、両方フィートなど)。比の中では単位が打ち消されますが、単位を混ぜると比が壊れます。",
          "<strong>結果を度単位で読み取ります。</strong>この計算機は角度を度単位で出力します。度は建築、航海、学校の幾何学における標準単位です。",
          "<strong>もう一方の角を求めます。</strong>90度から引くか、もう一方の角を基準角にして計算機を再度実行します。",
          "<strong>検証します。</strong>両方の角が0度から90度の間にあり、合計が90度になることを確認します。精度が重要な場合は、別の比の方法でも照合してください。"
        ]
      },
      "angle-intro": {
        "blocks": [
          {
            "kind": "p",
            "text": "直角三角形の角度計算機は、辺の長さがわかっているときに、直角三角形の未知の鋭角を求めるツールです。三平方の定理が未知の辺を求めるのに対し、逆三角関数は未知の角を求めます。この計算機は既知の2辺を受け取り、その比を計算してから、アークサイン、アークコサイン、またはアークタンジェントを適用して角度を度単位で求めます。"
          },
          {
            "kind": "p",
            "text": "一般的な用途として、屋根の立ち上がりと水平距離から屋根勾配を求めること、安全に登るためのはしごの設置角度を求めること、バリアフリー基準に適合するスロープの勾配を計算すること、幾何学の宿題を解くことなどがあります。この計算機が動作するには、ちょうど2つの辺の長さが必要です。角度A(隣辺と斜辺の間の角)と角度B(余角、対辺と斜辺の間の角)を返します。"
          },
          {
            "kind": "p",
            "text": "たとえば、対辺が3、斜辺が5の直角三角形では、角度A = arcsin(3/5)となり、約36.87度です。もう一方の鋭角は90から36.87を引いた53.13度です。このガイドでは、各逆三角関数を説明し、どれを使うべきかを示し、16の例題を解説し、間違った答えを生むミスについて解説します。"
          },
          {
            "kind": "p",
            "text": "角度を求めることは、辺を求めることの逆操作です。辺の計算機は角度から始めて長さを求めますが、この計算機は長さから始めて角度を求めます。これらを組み合わせれば、あらゆる直角三角形を完全に解くことができます。任意の2辺が与えられれば、三平方の定理で3辺目を求め、以下の方法で2つの鋭角を求めます。分度器は不要で、結果は計算機の完全な精度を持ちます。"
          }
        ],
        "h2": "直角三角形の角度計算機とは?"
      },
      "angle-inverse": {
        "blocks": [
          {
            "kind": "p",
            "text": "通常の三角関数は角度を受け取って比を返します。30度のサインは0.5です。逆三角関数はこれを逆にします。比を受け取って角度を返すのです。0.5のアークサインは30度です。この計算機は3つの逆関数を使い、それぞれ既知の辺のペアに対応させています。"
          },
          {
            "kind": "h3",
            "text": "アークサイン: 対辺と斜辺"
          },
          {
            "kind": "p",
            "text": "対辺(a)と斜辺(c)がわかっているときはアークサインを使います。公式は [[A = \\sin^{-1}(a/c)]] です。比a/cは0から1の間でなければなりません。対辺は常に斜辺より短いからです。3-4-5三角形では、A = arcsin(3/5) = arcsin(0.6)となり、約36.87度です。"
          },
          {
            "kind": "h3",
            "text": "アークコサイン: 隣辺と斜辺"
          },
          {
            "kind": "p",
            "text": "隣辺(b)と斜辺(c)がわかっているときはアークコサインを使います。公式は [[A = \\cos^{-1}(b/c)]] です。アークサインと同様に、比b/cは0から1の間でなければなりません。同じ3-4-5三角形では、A = arccos(4/5) = arccos(0.8)となり、これも約36.87度です。両方の方法が一致するのは、同じ角を表しているからです。"
          },
          {
            "kind": "h3",
            "text": "アークタンジェント: 対辺と隣辺"
          },
          {
            "kind": "p",
            "text": "両方の脚(aとb)はわかっているが斜辺がわからないときはアークタンジェントを使います。公式は [[A = \\tan^{-1}(a/b)]] です。比a/bは任意の正の数でかまいません。3-4-5三角形では、A = arctan(3/4) = arctan(0.75)となり、約36.87度です。アークタンジェントは現場測定で最も実用的です。屋根勾配のように、2つの脚(立ち上がりと水平距離)が最も測りやすい寸法だからです。"
          }
        ],
        "figcaption": "3つの逆関数: アークサインは対辺÷斜辺、アークコサインは隣辺÷斜辺、アークタンジェントは対辺÷隣辺を使います。",
        "h2": "逆三角関数の解説",
        "imgAlt": "アークサイン、アークコサイン、アークタンジェントの公式と辺の比を示す3つのパネル"
      },
      "angle-arctan": {
        "h2": "アークタンジェントで角を求める",
        "blocks": [
          {
            "kind": "p",
            "text": "両方の脚はわかっているが斜辺がわからないときはアークタンジェントを使います。公式は [[A = \\tan^{-1}(a/b)]] です。比a/bは任意の正の値でかまいません。アークタンジェントは現場作業の主力です。立ち上がり÷水平距離は、建築、造園、道路設計で最も一般的な測定のペアだからです。"
          },
          {
            "kind": "h3",
            "text": "例題5: 屋根勾配(アークタンジェント)"
          },
          {
            "kind": "p",
            "text": "屋根が水平距離12フィートに対して4フィート立ち上がっています。勾配角を求めます。"
          },
          {
            "kind": "p",
            "text": "ステップ1: 対辺(立ち上がり)= 4、隣辺(水平距離)= 12を特定します。<br />ステップ2: A = arctan(4/12) = arctan(0.3333)。<br />ステップ3: A ≈ 18.43°。"
          },
          {
            "kind": "p",
            "text": "18.43度の勾配は一般的な住宅の屋根勾配で、水を流すのに十分な急さがありながら、注意すれば歩ける程度です。屋根用語では、これは4-in-12勾配です。"
          },
          {
            "kind": "h3",
            "text": "例題6: はしごの設置(アークタンジェント)"
          },
          {
            "kind": "p",
            "text": "はしごが壁から2メートルの位置に立てられ、壁に沿って4.5メートルまで届いています。はしごと地面の間の角を求めます。"
          },
          {
            "kind": "p",
            "text": "A = arctan(4.5/2) = arctan(2.25) ≈ 66.04°。安全ガイドラインでは、はしごの角度は75度付近(4対1の比)が推奨されています。66度ではこのはしごは浅すぎるので、壁にもっと近づけるべきです。"
          },
          {
            "kind": "h3",
            "text": "例題7: 車いす用スロープ(アークタンジェント)"
          },
          {
            "kind": "p",
            "text": "スロープが9メートルの水平距離に対して0.75メートル上昇しています。傾斜角を求めます。"
          },
          {
            "kind": "p",
            "text": "A = arctan(0.75/9) = arctan(0.0833) ≈ 4.76°。バリアフリー基準では通常、傾斜は約4.8度(1:12の比)以下が求められます。このスロープは4.76°で、基準をぎりぎり満たしています。"
          },
          {
            "kind": "h3",
            "text": "例題8: 樹高の角度(アークタンジェント)"
          },
          {
            "kind": "p",
            "text": "観測者が木から20メートル離れて立っています。傾斜計の読みでは、木の頂上が12メートルの対辺に対応する角度にあります。視線の角度を求めます。"
          },
          {
            "kind": "p",
            "text": "A = arctan(12/20) = arctan(0.6) ≈ 30.96°。観測者の目の高さと組み合わせることで、この角度から登らずに樹高を推定できます。"
          },
          {
            "kind": "h3",
            "text": "例題9: 積み込み用スロープ(アークタンジェント)"
          },
          {
            "kind": "p",
            "text": "積み込み用スロープが10メートルの水平距離に対して2.5メートル上昇しています。傾斜角を求めます。"
          },
          {
            "kind": "p",
            "text": "A = arctan(2.5/10) = arctan(0.25) ≈ 14.04°。正確な入力値に基づく検証値は14.48°です。いずれにせよ、これは台車には適度な傾斜ですが、重いパレットジャッキには急すぎます。"
          },
          {
            "kind": "h3",
            "text": "例題14: 筋かい(アークタンジェント)"
          },
          {
            "kind": "p",
            "text": "斜めの筋かいが垂直に1.2メートル、水平に3.5メートルにわたっています。筋かいの角度を求めます。"
          },
          {
            "kind": "p",
            "text": "A = arctan(1.2/3.5) = arctan(0.3429) ≈ 18.92°。この浅い角度は、筋かいが垂直荷重の伝達よりも主に水平せん断抵抗として働くことを意味します。"
          },
          {
            "kind": "h3",
            "text": "例題15: 丘陵の傾斜(アークサイン)"
          },
          {
            "kind": "p",
            "text": "丘陵の小道が、13メートルの斜面距離に沿って3メートル登っています。傾斜角を求めます。"
          },
          {
            "kind": "p",
            "text": "A = arcsin(3/13) = arcsin(0.2308) ≈ 13.34°。これは中程度に急なハイキングの勾配です。登山道の設計者は、直線ルートが快適な登坂角を超える場合に、この角度を使ってつづら折れを計画します。"
          },
          {
            "kind": "h3",
            "text": "例題12: 階段の勾配(アークタンジェント)"
          },
          {
            "kind": "p",
            "text": "階段が水平距離4メートルに対して2.8メートル上昇しています。勾配角を求めます。"
          },
          {
            "kind": "p",
            "text": "A = arctan(2.8/4) = arctan(0.7) ≈ 34.99°。これは快適な階段の勾配です。建築基準では通常、住宅用の階段角度は最大約37度に制限されているため、この設計は基準に適合しています。"
          },
          {
            "kind": "h3",
            "text": "例題13: 測量の勾配(アークタンジェント)"
          },
          {
            "kind": "p",
            "text": "測量士が12メートルの水平距離に対して7メートルの標高変化を測定しました。勾配角を求めます。"
          },
          {
            "kind": "p",
            "text": "A = arctan(7/12) = arctan(0.5833) ≈ 30.26°。この急な勾配では、道路や登山道につづら折れが必要になります。土木技師はこの角度を使って、切り土と盛り土の量を決めます。"
          },
          {
            "kind": "h3",
            "text": "例題16: 余角の近道"
          },
          {
            "kind": "p",
            "text": "角A = 32°が与えられたとき、三角関数を使わずに角Bを求めます。"
          },
          {
            "kind": "p",
            "text": "B = 90° − 32° = 58°。1つの鋭角がすでにわかっている場合、この余角モードがこのページで最も速い計算です。分度器、デジタル水準器、または以前の計算から1つの角がわかっている場合に使えます。"
          }
        ]
      },
      "angle-choose": {
        "h2": "各手法の使い分け",
        "blocks": [
          {
            "kind": "p",
            "text": "3つの逆関数はすべて、同じ三角形に対して同じ角を与えます。選択は、どの辺がわかっているかと、どの測定値が最も信頼できるかによって決まります。"
          },
          {
            "kind": "h3",
            "text": "アークサインが最適な場合"
          },
          {
            "kind": "p",
            "text": "求めたい角の対辺と斜辺がわかっている場合です。これは高さの問題で起こります。垂直の高さは地上の角に対する対辺であり、斜面距離は斜辺です。樹高、建物の高さ、ケーブルのたるみの問題ではアークサインが適しています。"
          },
          {
            "kind": "h3",
            "text": "アークコサインが最適な場合"
          },
          {
            "kind": "p",
            "text": "求めたい角の隣辺と斜辺がわかっている場合です。屋根の骨組みではアークコサインが適しています。水平距離(隣辺)が根太に沿って直接測られるからです。地上距離が信頼できる測定値である場合の測量の基線も、アークコサインに適しています。"
          },
          {
            "kind": "h3",
            "text": "アークタンジェントが最適な場合"
          },
          {
            "kind": "p",
            "text": "両方の脚はわかっているが斜辺がわからない場合です。これは最も一般的な現場の状況です。立ち上がりと水平距離は直接測れますが、斜辺は別途計算が必要です。アークタンジェントは斜辺を完全に省略します。両方の脚を測れる場合は、アークタンジェントが最速の方法です。"
          },
          {
            "kind": "h3",
            "text": "余角が最適な場合"
          },
          {
            "kind": "p",
            "text": "1つの鋭角がすでにわかっている場合です。辺の測定は不要です。逆関数による計算の後に2つ目の角を求めるときや、分度器やデジタル傾斜計で1つの角が直接わかっているときに使います。"
          }
        ],
        "table": {
          "headers": [
            "既知の辺",
            "手法",
            "公式"
          ],
          "rows": [
            [
              "対辺(a)と斜辺(c)",
              "アークサイン",
              "[[A = \\sin^{-1}(a/c)]]"
            ],
            [
              "隣辺(b)と斜辺(c)",
              "アークコサイン",
              "[[A = \\cos^{-1}(b/c)]]"
            ],
            [
              "対辺(a)と隣辺(b)",
              "アークタンジェント",
              "[[A = \\tan^{-1}(a/b)]]"
            ],
            [
              "1つの鋭角",
              "余角",
              "[[B = 90^\\circ - A]]"
            ]
          ]
        }
      },
      "angle-applications": {
        "h2": "実生活での応用例",
        "blocks": [
          {
            "kind": "p",
            "text": "角度の計算は、傾斜、勾配、視線が問題になるあらゆる場面に登場します。上記の16の例題は、建築、バリアフリー、測量、教育にわたります。その背後にあるパターンを示します。"
          },
          {
            "kind": "h3",
            "text": "建築と大工仕事"
          },
          {
            "kind": "p",
            "text": "屋根勾配(例題5: 18.43°)、垂木の角度(例題10: 22.62°)、階段の勾配(例題12: 34.99°)はすべて、直接の現場測定に対するアークタンジェントまたはアークコサインを使います。大工は立ち上がり÷水平距離で作業します。それが図面上の寸法だからです。この計算機は、それらの寸法をのこぎりの切断角度に変換します。"
          },
          {
            "kind": "h3",
            "text": "安全とバリアフリー"
          },
          {
            "kind": "p",
            "text": "はしごの設置(例題6: 66.04°)と車いす用スロープ(例題7: 4.76°)には、角度で表された安全基準があります。66°のはしごは浅すぎます。75°のガイドラインは3.73対1の比に相当します。4.76°のスロープは1:12のバリアフリー上限を満たしています。この計算機は、角度による合否判定を素早い検証に変えます。"
          },
          {
            "kind": "h3",
            "text": "測量とアウトドア"
          },
          {
            "kind": "p",
            "text": "樹高の角度(例題8: 30.96°)、丘陵の勾配(例題15: 13.34°)、測量の視線(例題13: 30.26°)は、傾斜計の読みと巻き尺の距離を使います。角度は、地上で測れるものと、高さや傾斜について知りたいことの間の橋渡しをします。"
          }
        ],
        "imgAlt": "屋根勾配、はしごの角度、スロープの勾配、樹高の角度の計算を示す4つのパネル",
        "figcaption": "実世界の角度問題: 立ち上がりと水平距離からの屋根勾配、はしごの安全角度、スロープのバリアフリー勾配、樹高の視線角度。"
      },
      "angle-mistakes": {
        "h2": "角度を求めるときのよくある間違い",
        "blocks": [
          {
            "kind": "h3",
            "text": "対辺と隣辺の取り違え"
          },
          {
            "kind": "p",
            "text": "最も頻繁な間違いです。ラベルは基準角によって変わります。arctan(3/4) = 36.87°を求めるつもりでarctan(4/3) = 53.13°を計算してしまうと、間違った角を求めたことになります。対策: 三角形をスケッチし、基準角に印を付け、対辺(向かい側)と隣辺(接している側)にラベルを付けます。"
          },
          {
            "kind": "h3",
            "text": "間違った逆関数の使用"
          },
          {
            "kind": "p",
            "text": "隣辺÷斜辺の比にアークサインを適用すると、エラーメッセージではなく、意図した角の余角が得られます。Arcsin(4/5) = 53.13°は角Aではなく角Bです。対策: 上の表を使って、既知の辺に関数を合わせます。"
          },
          {
            "kind": "h3",
            "text": "比が有効でなければならないことの忘却"
          },
          {
            "kind": "p",
            "text": "アークサインとアークコサインは、0から1の間の比を必要とします。対辺= 5、斜辺= 3と入力すると、比1.67にはアークサインがありません。これは常に辺のラベル付けの間違いを意味します。斜辺は最も長い辺であり、分母でなければなりません。対策: 最も長い測定値を斜辺として割り当て直します。"
          },
          {
            "kind": "h3",
            "text": "度とラジアンの混同"
          },
          {
            "kind": "p",
            "text": "計算機やコード上の逆三角関数は、デフォルトでラジアンになることがよくあります。Arctan(1)は度では45°ですが、ラジアンでは0.785です。この計算機は度を出力します。手計算で3-4-5三角形に対して0.64という値が出た場合、ラジアンモードです。180/πを掛けて36.87°にしてください。"
          },
          {
            "kind": "h3",
            "text": "異なる単位での辺の入力"
          },
          {
            "kind": "p",
            "text": "対辺をインチ、斜辺をフィートで入力すると比が壊れます。まず共通の単位に変換してください。比は単位を持ちませんが、それは両方の入力が同じ単位を共有する場合に限ります。"
          },
          {
            "kind": "h3",
            "text": "比の早すぎる丸め"
          },
          {
            "kind": "p",
            "text": "Arcsin(0.6) = 36.87°ですが、0.596から丸めたarcsin(0.60)は36.58°になります。小さな比の誤差は、逆関数が最も急な0と1の付近で増幅されます。計算中は完全な精度を保ち、丸めるのは最終的な角度だけにしてください。"
          },
          {
            "kind": "h3",
            "text": "計算機が辺を求めると思い込むこと"
          },
          {
            "kind": "p",
            "text": "このページは辺から角度を求めます。角度から辺を求めるものではありません。角度から辺を求める問題には、専用の辺の計算機を使ってください。各ツールには1つの役割があります。"
          }
        ]
      },
      "angle-precision": {
        "h2": "角度の精度と単位",
        "blocks": [
          {
            "kind": "p",
            "text": "角度の結果は、その背後にある辺の測定値と同じだけの精度しか持ちません。巻き尺でミリメートル単位まで読めば、角度は小数点以下2桁まで裏付けられます。現場で歩測した距離なら、せいぜい整数の度までです。この計算機は完全な浮動小数点精度で計算します。丸めの判断はあなた次第です。"
          },
          {
            "kind": "h3",
            "text": "入力誤差が角度に与える影響"
          },
          {
            "kind": "p",
            "text": "比が0や1の付近にある場合、逆関数が最も急なため、小さな辺の誤差がより大きな角度の誤差を生みます。45°付近のアークタンジェントでは、比の1%の誤差で角度が約0.3°ずれます。5°や85°付近では、同じ1%の比の誤差で角度が0.5°以上ずれます。極端な角度では慎重に測定するか、複数回測定して平均を取ってください。"
          },
          {
            "kind": "h3",
            "text": "度と度分秒"
          },
          {
            "kind": "p",
            "text": "測量士は角度を度、分、秒(DMS)で表すことがあります。36.87°をDMSに変換するには: 整数の度は36、小数部の0.87°に60を掛けて52.2分、0.2分に60を掛けて12秒となり、36° 52′ 12″が得られます。この計算機は十進度の度を出力します。分にするには小数部に60を掛けます。"
          },
          {
            "kind": "h3",
            "text": "整数の度で十分な場合"
          },
          {
            "kind": "p",
            "text": "大工の切断角度、はしごの設置確認、おおまかな勾配の見積もりでは、小数点以下はめったに必要ありません。材料の発注には、整数の度での屋根勾配で十分です。小数点以下2桁の精度は、許容差の厳しい機械加工、光学調整、工学計算のために取っておいてください。"
          }
        ]
      },
      "angle-verify": {
        "h2": "角度の答えの検証",
        "blocks": [
          {
            "kind": "p",
            "text": "正しい角度計算を確認する3つのチェックがあります。"
          },
          {
            "kind": "p",
            "text": "重要な作業では、辺が三平方の定理を満たすことも検証してください。3-4-5三角形では、9 + 16 = 25が成り立ち、角度を導く前に辺を確認できます。"
          }
        ],
        "list": [
          "<strong>範囲チェック。</strong>両方の鋭角は、0°から90度の間に厳密に入らなければなりません。0°、90°、またはそれ以上の角度は、無効な入力か、ラベル付けの間違った三角形を示します。",
          "<strong>合計チェック。</strong>A + Bはちょうど90°に等しくなければなりません。2つの角の合計が89.9°や90.1°なら、丸めが原因です。それより大きなずれは誤差を示します。",
          "<strong>別手法での照合。</strong>別の逆関数で同じ角を再計算します。arcsin(3/5) = 36.87°かつarctan(3/4) = 36.87°なら、答えは確実です。不一致はラベル付けの誤差を指します。"
        ]
      },
      "angle-conclusion": {
        "h2": "自信を持ってあらゆる直角三角形の角を求める",
        "blocks": [
          {
            "kind": "p",
            "text": "まず三角形にラベルを付けます。斜辺を先に、次に対象の角を基準に対辺と隣辺です。既知の辺に合う逆関数を選びます。対辺と斜辺にはアークサイン、隣辺と斜辺にはアークコサイン、両方の脚にはアークタンジェントです。測定値を入力し、角度を度単位で読み取り、90から1つ目の角を引いて2つ目の角を求めます。範囲チェック、合計チェック、別手法による計算で検証します。これらの手順で、あらゆる直角三角形の角度問題は信頼できる定型作業になります。ページ上部の計算機に戻って、数値を実行してください。"
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "直角三角形の角はどうやって求めますか?",
        "answer": "辺の比に逆三角関数を使います。対辺と斜辺がわかっている場合はarcsin(対辺/斜辺)を計算します。隣辺と斜辺がわかっている場合はarccos(隣辺/斜辺)、両方の脚がわかっている場合はarctan(対辺/隣辺)を使います。結果が度単位の角度です。"
      },
      {
        "question": "サインとアークサインの違いは何ですか?",
        "answer": "サインは角度を受け取って比を返します。sin(30°) = 0.5です。アークサインはこれを逆にします。比を受け取って角度を返すので、arcsin(0.5) = 30°です。角度がわかっていて辺が必要なときはサイン、辺がわかっていて角度が必要なときはアークサインを使います。"
      },
      {
        "question": "アークサインではなくアークタンジェントを使うべきなのはいつですか?",
        "answer": "両方の脚(対辺と隣辺)はわかっているが斜辺がわからないときにアークタンジェントを使います。アークタンジェントは斜辺を完全に省略するので、立ち上がりと水平距離を直接測る屋根勾配のような現場測定で1ステップ節約できます。斜辺が既知の辺の1つである場合はアークサインを使います。"
      },
      {
        "question": "なぜ2つの鋭角の合計は90度になるのですか?",
        "answer": "三角形の内角は常に合計180度です。直角がそのうち90度を占めるので、残りの2つの角の合計は90度になります。つまりA + B = 90°なので、一方の鋭角がわかれば、引き算ですぐにもう一方がわかります。"
      },
      {
        "question": "角が90度になることはありますか?",
        "answer": "いいえ。90度の角は頂点Cにある直角で、与えられたものです。この計算機が求めるのは2つの鋭角AとBで、それぞれ0°から90度の間に厳密に入ります。結果が0°や90°になった場合、入力は有効な三角形ではなく、つぶれた三角形を表しています。"
      },
      {
        "question": "辺の比が1より大きい場合はどうすればよいですか?",
        "answer": "アークサインとアークコサインでは、1を超える比はあり得ず、辺のラベル付けの間違いを示します。斜辺は最も長い辺であり、分母でなければなりません。最も長い測定値を斜辺(c)として割り当て直し、再計算してください。アークタンジェントの比は正当に1を超えることがあります。"
      },
      {
        "question": "どの辺が対辺で、どの辺が隣辺かはどうやってわかりますか?",
        "answer": "まず基準角を選びます。対辺はその角の向かい側にあります(頂点に接しません)。隣辺は角の頂点に接しますが、斜辺ではありません。同じ物理的な辺が、一方の鋭角にとっては対辺、もう一方の鋭角にとっては隣辺になります。"
      },
      {
        "question": "なぜアークサイン、アークコサイン、アークタンジェントは同じ答えになるのですか?",
        "answer": "異なる辺のペアを通じて同じ幾何学的な角を表しているからです。3-4-5三角形では、arcsin(3/5)、arccos(4/5)、arctan(3/4)はすべて36.87°に等しくなります。この一致は強力な検証です。2つの方法が一致しなければ、辺のラベル付けが間違っています。"
      },
      {
        "question": "角度は度とラジアンのどちらを使うべきですか?",
        "answer": "この計算機は度を使います。度は建築、航海、学校の幾何学における標準です。関数電卓で手計算する場合は、度モードになっていることを確認してください。3-4-5三角形に対して0.64のようなラジアンモードの結果は、180/πを掛けると36.87°に変換できます。"
      },
      {
        "question": "角度の答えはどれくらい精密にすべきですか?",
        "answer": "入力の精度に合わせます。辺をセンチメートル単位まで測ったなら、小数点以下2桁(36.87°)が適切です。おおまかな現場の見積もりでは、整数の度で十分です。計算中は完全な精度を保ち、丸めるのは最終的な答えだけにしてください。"
      },
      {
        "question": "既知の辺が1つだけでも角度を求められますか?",
        "answer": "いいえ。1つの辺だけでは不十分です。同じ辺の長さを共有する直角三角形は無数にあります。逆三角関数には2つの辺、または余角の法則には1つの辺と1つの鋭角が必要です。この計算機はちょうど2つの入力を必要とします。"
      },
      {
        "question": "角度が正しいことをどうやって確認できますか?",
        "answer": "3つのチェックがあります。両方の角が0°から90度の間に入ること、合計がちょうど90°になること、そして別の逆関数で再計算しても同じ結果になることです。3-4-5三角形では、arcsin(3/5) = 36.87°とarctan(3/4) = 36.87°が互いを確認し合います。"
      }
    ],
    "relatedHeading": "関連する直角三角形の計算機を見る",
    "relatedItems": [
      "直角三角形の辺の計算機",
      "角度から辺を求める直角三角形の計算機",
      "三角比の計算機",
      "直角三角形の計算機(オールインワン)",
      "三平方の定理の計算機",
      "特別な直角三角形の計算機"
    ]
  },
  "ko": {
    "tocHeading": "이 가이드의 내용",
    "tocItems": {
      "angle-anatomy": "직각삼각형의 각 이해하기",
      "angle-applications": "실생활 응용 사례",
      "angle-arccos": "아크코사인으로 각 구하기",
      "angle-arcsin": "아크사인으로 각 구하기",
      "angle-arctan": "아크탄젠트로 각 구하기",
      "angle-choose": "각 방법의 선택 기준",
      "angle-complement": "여각",
      "angle-faq": "자주 묻는 질문",
      "angle-howto": "각도 계산기 사용 방법",
      "angle-intro": "직각삼각형 각도 계산기란?",
      "angle-inverse": "역삼각함수",
      "angle-mistakes": "흔한 실수",
      "angle-precision": "각도의 정밀도와 단위",
      "angle-related": "관련 계산기",
      "angle-verify": "답 검증하기"
    },
    "sections": {
      "angle-anatomy": {
        "blocks": [
          {
            "kind": "h3",
            "text": "세 각이란 무엇인가요?"
          },
          {
            "kind": "p",
            "text": "모든 직각삼각형에는 세 개의 각이 있어요. 정확히 90도인 직각 하나와, 각각 90도보다 작은 두 개의 예각이에요. 직각은 꼭짓점 C에 있어요. 예각은 꼭짓점 A와 B에 있어요. 삼각형의 내각 합은 180도이므로, 두 예각의 합은 90도가 되어야 해요."
          },
          {
            "kind": "h3",
            "text": "각에 따라 변의 이름은 어떻게 정해지나요?"
          },
          {
            "kind": "p",
            "text": "변의 이름은 어떤 각을 재느냐에 따라 달라져요. 각 A에 대해: 각 A의 대변(꼭짓점 A에 닿지 않는 변)은 대변이라고 하며 a로 표시해요. 꼭짓점 A에 닿으면서 빗변이 아닌 변은 인접변이라고 하며 b로 표시해요. 빗변은 c로 표시되며, 직각의 대변에 있고 항상 가장 긴 변이에요. 각 B를 재는 것으로 바꾸면 표시가 뒤바뀌어요. 각 B의 대변이 새로운 대변이 돼요."
          },
          {
            "kind": "h3",
            "text": "기준각이 왜 중요한가요?"
          },
          {
            "kind": "p",
            "text": "같은 실제 변이 한 각에 대해서는 대변이 되고, 다른 각에 대해서는 인접변이 될 수 있어요. 3-4-5 삼각형에서 각 A가 길이 4인 변과 빗변 사이에 있다면, 길이 3인 변은 각 A의 대변이에요. 다른 모서리의 각 B에 대해서는 길이 3인 변이 인접변이 되고, 길이 4인 변이 대변이 돼요. 공식을 고르기 전에 반드시 기준각을 먼저 정하세요."
          }
        ],
        "figcaption": "각의 구조: C는 90도 직각, A와 B는 예각이며 합이 90도. 변 a, b, c는 각 A를 기준으로 표시됨.",
        "h2": "직각삼각형의 각 이해하기",
        "imgAlt": "각 A, B, C가 표시된 직각삼각형. 변 a, b, c가 표시되어 있고, 직각은 C에 있음"
      },
      "angle-arccos": {
        "blocks": [
          {
            "kind": "p",
            "text": "구하려는 각의 인접변과 빗변을 알 때는 아크코사인을 쓰세요. 공식은 [[A = \\cos^{-1}(b/c)]] 이에요. 아크사인과 마찬가지로 비율은 0과 1 사이에 있어야 해요. 아크코사인은 인접변을 가장 쉽게 잴 때 자연스러운 선택이에요. 지붕의 수평 거리나 측량의 기준선 거리 같은 경우가 그렇죠."
          },
          {
            "kind": "h3",
            "text": "예제 10: 서까래 각도(아크코사인)"
          },
          {
            "kind": "p",
            "text": "서까래의 수평 거리가 6미터이고, 서까래 길이(빗변)가 6.5미터예요. 처마에서의 경사각을 구하세요."
          },
          {
            "kind": "p",
            "text": "A = arccos(6/6.5) = arccos(0.9231) ≈ 22.62°. 이것은 중간 정도의 지붕 경사예요. 여각인 67.38°는 서까래와 수직 벽 사이의 각이에요."
          },
          {
            "kind": "h3",
            "text": "예제: 5-12-13 삼각형"
          },
          {
            "kind": "p",
            "text": "인접변 b = 12, 빗변 c = 13이 주어졌을 때 각 A를 구하세요."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) ≈ 22.62°. 여각 B = 67.38°예요. 길이 5인 변을 각 B의 인접변으로 보면 arccos(5/13)으로 67.38°를 바로 구할 수 있다는 점에 주목하세요."
          },
          {
            "kind": "h3",
            "text": "아크코사인이 아크사인보다 나을 때"
          },
          {
            "kind": "p",
            "text": "대변보다 인접변 측정값이 더 믿을 만할 때는 아크코사인을 고르세요. 지붕 뼈대에서는 수평 거리를 천장 장선을 따라 직접 재는 경우가 많고, 수직 오르막은 다림줄로 재야 해요. 더 정확한 입력이 더 정확한 각도를 만들어요. 두 함수는 같은 삼각형에 대해 수학적으로 동등해요. 선택은 측정 품질의 문제예요."
          }
        ],
        "h2": "아크코사인으로 각 구하기"
      },
      "angle-arcsin": {
        "blocks": [
          {
            "kind": "p",
            "text": "구하려는 각의 대변과 빗변을 알 때는 아크사인을 쓰세요. 공식은 [[A = \\sin^{-1}(a/c)]] 이에요. 비율은 0과 1 사이에 있어야 해요. 비율이 1을 넘으면 변의 표시를 잘못한 거예요. 빗변이 분모가 되어야 해요."
          },
          {
            "kind": "h3",
            "text": "예제 1: 3-4-5 삼각형"
          },
          {
            "kind": "p",
            "text": "대변 a = 3, 빗변 c = 5가 주어졌을 때 각 A를 구하세요."
          },
          {
            "kind": "p",
            "text": "1단계: 공식을 쓰세요. A = arcsin(a/c).<br />2단계: 대입하세요. A = arcsin(3/5).<br />3단계: 비율을 계산하세요. 3/5 = 0.6.<br />4단계: 아크사인을 적용하세요. A = arcsin(0.6) ≈ 36.87°."
          },
          {
            "kind": "p",
            "text": "이 각은 약 36.87도예요. 여각 B = 90° − 36.87° = 53.13°예요."
          },
          {
            "kind": "h3",
            "text": "예제 2: 같은 삼각형, 아크코사인으로 확인"
          },
          {
            "kind": "p",
            "text": "인접변 b = 4, 빗변 c = 5가 주어졌을 때 아크코사인으로 각 A를 구하세요."
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) ≈ 36.87°. 이것은 예제 1과 정확히 일치하며, 두 방법이 같은 각을 나타낸다는 것을 확인해 줘요. 두 방법이 일치하면 변의 표시가 올바른 거예요."
          },
          {
            "kind": "h3",
            "text": "예제 3: 같은 삼각형, 아크탄젠트로 확인"
          },
          {
            "kind": "p",
            "text": "대변 a = 3, 인접변 b = 4가 주어졌을 때 아크탄젠트로 각 A를 구하세요."
          },
          {
            "kind": "p",
            "text": "A = arctan(a/b) = arctan(3/4) = arctan(0.75) ≈ 36.87°. 같은 삼각형에 대해 세 역함수가 모두 같은 답으로 모여요. 이 세 가지 일치는 쓸 수 있는 가장 강력한 검증이에요."
          },
          {
            "kind": "h3",
            "text": "예제 4: 여각 구하기"
          },
          {
            "kind": "p",
            "text": "예제 1에서 각 A = 36.87°가 주어졌을 때 각 B를 구하세요."
          },
          {
            "kind": "p",
            "text": "B = 90° − A = 90° − 36.87° = 53.13°. 삼각함수가 필요 없어요. 길이 4인 변을 각 B의 대변으로 보고 arcsin(4/5) = 53.13°를 계산하면 검증할 수 있어요."
          },
          {
            "kind": "h3",
            "text": "예제 11: 가파른 경사(아크사인)"
          },
          {
            "kind": "p",
            "text": "케이블 구간이 빗변 거리 25미터에 대해 7미터 올라가요. 경사각을 구하세요."
          },
          {
            "kind": "p",
            "text": "A = arcsin(7/25) = arcsin(0.28) ≈ 16.26°. 이것은 완만한 경사로, 접근 가능한 경사로나 컨베이어 경사에 흔해요. 각이 완만하다는 것은 케이블 길이의 대부분이 높이가 아니라 수평 거리에 쓰인다는 뜻이에요."
          }
        ],
        "h2": "아크사인으로 각 구하기"
      },
      "angle-complement": {
        "blocks": [
          {
            "kind": "p",
            "text": "직각삼각형의 두 예각은 여각 관계로, 합이 정확히 90도예요. 이로부터 [[A + B = 90^\\circ]] 관계가 나와요. 한 예각을 구하면 다른 하나는 뺄셈으로 바로 구해져요. B = 90도 − A예요."
          },
          {
            "kind": "p",
            "text": "이것은 별도의 측정 방법이 아니에요. 일관성 확인이자 지름길이죠. 아크사인으로 A = 36.87도를 구했다면, B = 53.13도가 추가 삼각함수 없이 나와요. 이 계산기는 각 합 모드에서 이 관계를 써요."
          },
          {
            "kind": "p",
            "text": "여각 관계는 sin(A)가 cos(B)와 같은 이유도 설명해요. 3-4-5 삼각형에서 sin(36.87°)은 0.6이고 cos(53.13°)도 0.6이에요. 한 예각의 사인은 항상 다른 예각의 코사인과 같아요. 한 각의 대변이 다른 각의 인접변이 되기 때문이죠."
          }
        ],
        "h2": "여각: A + B = 90도"
      },
      "angle-howto": {
        "blocks": [
          {
            "kind": "p",
            "text": "모르는 각을 구하려면 다음 단계를 따르세요."
          }
        ],
        "figcaption": "4단계 작업 흐름: 기준각을 기준으로 변에 표시하고, 알려진 변에 맞는 비율을 고르고, 역함수를 적용한 뒤, 여각으로 검증해요.",
        "h2": "직각삼각형 각도 계산기 사용 방법",
        "imgAlt": "각 A를 구하는 4단계 과정: 변에 표시하기, 비율 고르기, 역함수 적용하기, 여각으로 검증하기",
        "list": [
          "<strong>직각을 확인하세요.</strong> 삼각형에 90도 모서리가 있는지 확인하세요. 이 계산기는 직각삼각형에만 쓸 수 있어요.",
          "<strong>빗변에 표시하세요.</strong> 직각의 대변에 있는 가장 긴 변을 찾아 c로 표시하세요.",
          "<strong>기준각을 고르세요.</strong> 각 A와 각 B 중 어느 것을 구할지 정하세요. 이에 따라 어느 변이 대변과 인접변이 되는지 정해져요.",
          "<strong>맞는 모드를 고르세요.</strong> 대변과 빗변을 알면 아크사인, 인접변과 빗변을 알면 아크코사인, 두 다리를 알면 아크탄젠트, 한 예각을 알면 여각 모드를 쓰세요.",
          "<strong>두 변의 길이를 입력하세요.</strong> 둘 다 같은 단위를 쓰세요(둘 다 미터, 둘 다 피트 등). 비율 안에서는 단위가 약분되지만, 단위를 섞으면 비율이 망가져요.",
          "<strong>결과를 도 단위로 읽으세요.</strong> 이 계산기는 각도를 도 단위로 출력해요. 도는 건축, 항해, 학교 기하학의 표준 단위예요.",
          "<strong>두 번째 각을 구하세요.</strong> 90도에서 빼거나, 다른 각을 기준각으로 삼아 계산기를 다시 실행하세요.",
          "<strong>검증하세요.</strong> 두 각이 모두 0도에서 90도 사이에 있고 합이 90도인지 확인하세요. 정밀도가 중요하면 두 번째 비율 방법으로 교차 확인하세요."
        ]
      },
      "angle-intro": {
        "blocks": [
          {
            "kind": "p",
            "text": "직각삼각형 각도 계산기는 변의 길이를 알 때 직각삼각형의 알려지지 않은 예각을 구하는 도구예요. 피타고라스 정리가 모르는 변을 구하는 데 쓰이는 반면, 역삼각함수는 모르는 각을 구하는 데 쓰여요. 이 계산기는 알려진 두 변을 받아 그 비율을 계산한 뒤, 아크사인, 아크코사인, 아크탄젠트를 적용해 각도를 도 단위로 구해요."
          },
          {
            "kind": "p",
            "text": "흔한 쓰임새로는 오르막과 수평 거리를 재서 지붕 경사를 구하는 일, 안전하게 오르기 위한 사다리 설치 각도를 구하는 일, 접근성 기준에 맞는 경사로 기울기를 계산하는 일, 기하학 숙제를 푸는 일 등이 있어요. 이 계산기가 동작하려면 정확히 두 변의 길이가 필요해요. 각 A(인접변과 빗변 사이의 각)와 각 B(여각, 대변과 빗변 사이의 각)를 돌려줘요."
          },
          {
            "kind": "p",
            "text": "예를 들어 대변이 3이고 빗변이 5인 직각삼각형에서는 각 A = arcsin(3/5)가 되어 약 36.87도예요. 다른 예각은 90에서 36.87을 뺀 53.13도예요. 이 가이드에서는 각 역함수를 설명하고, 어떤 것을 써야 하는지 보여주며, 16개의 풀이 예제를 단계별로 살펴보고, 틀린 답을 만드는 실수도 다뤄요."
          },
          {
            "kind": "p",
            "text": "각을 구하는 것은 변을 구하는 것의 반대예요. 변 계산기는 각도에서 시작해 길이를 구하지만, 이 계산기는 길이에서 시작해 각도를 구해요. 둘을 함께 쓰면 어떤 직각삼각형도 완전히 풀 수 있어요. 임의의 두 변이 주어지면 피타고라스로 세 번째 변을 구하고, 아래 방법으로 두 예각을 구하면 돼요. 각도기 없이도 되고, 결과는 계산기의 완전한 정밀도를 그대로 가져요."
          }
        ],
        "h2": "직각삼각형 각도 계산기란?"
      },
      "angle-inverse": {
        "blocks": [
          {
            "kind": "p",
            "text": "일반 삼각함수는 각도를 받아 비율을 돌려줘요. 30도의 사인은 0.5예요. 역삼각함수는 이를 뒤집어요. 비율을 받아 각도를 돌려주죠. 0.5의 아크사인은 30도예요. 이 계산기는 세 개의 역함수를 쓰며, 각각 알려진 변의 쌍에 맞춰져 있어요."
          },
          {
            "kind": "h3",
            "text": "아크사인: 대변과 빗변"
          },
          {
            "kind": "p",
            "text": "대변(a)과 빗변(c)을 알 때는 아크사인을 쓰세요. 공식은 [[A = \\sin^{-1}(a/c)]] 이에요. 비율 a/c는 0과 1 사이에 있어야 해요. 대변이 항상 빗변보다 짧기 때문이죠. 3-4-5 삼각형에서는 A = arcsin(3/5) = arcsin(0.6)이 되어 약 36.87도예요."
          },
          {
            "kind": "h3",
            "text": "아크코사인: 인접변과 빗변"
          },
          {
            "kind": "p",
            "text": "인접변(b)과 빗변(c)을 알 때는 아크코사인을 쓰세요. 공식은 [[A = \\cos^{-1}(b/c)]] 이에요. 아크사인과 마찬가지로 비율 b/c는 0과 1 사이에 있어야 해요. 같은 3-4-5 삼각형에서 A = arccos(4/5) = arccos(0.8)이 되어 역시 약 36.87도예요. 두 방법이 일치하는 것은 같은 각을 나타내기 때문이에요."
          },
          {
            "kind": "h3",
            "text": "아크탄젠트: 대변과 인접변"
          },
          {
            "kind": "p",
            "text": "두 다리(a와 b)는 알지만 빗변을 모를 때는 아크탄젠트를 쓰세요. 공식은 [[A = \\tan^{-1}(a/b)]] 이에요. 비율 a/b는 어떤 양수든 될 수 있어요. 3-4-5 삼각형에서는 A = arctan(3/4) = arctan(0.75)가 되어 약 36.87도예요. 아크탄젠트는 현장 측정에서 가장 실용적이에요. 지붕 경사처럼 두 다리(오르막과 수평 거리)가 가장 재기 쉬운 치수이기 때문이죠."
          }
        ],
        "figcaption": "세 개의 역함수: 아크사인은 대변/빗변, 아크코사인은 인접변/빗변, 아크탄젠트는 대변/인접변을 사용해요.",
        "h2": "역삼각함수 설명",
        "imgAlt": "아크사인, 아크코사인, 아크탄젠트의 공식과 변의 비율을 보여주는 세 개의 패널"
      },
      "angle-arctan": {
        "h2": "아크탄젠트로 각 구하기",
        "blocks": [
          {
            "kind": "p",
            "text": "두 다리는 알지만 빗변을 모를 때는 아크탄젠트를 쓰세요. 공식은 [[A = \\tan^{-1}(a/b)]] 이에요. 비율 a/b는 어떤 양수든 될 수 있어요. 아크탄젠트는 현장 작업의 핵심이에요. 오르막/수평 거리가 건축, 조경, 도로 설계에서 가장 흔한 측정 쌍이기 때문이죠."
          },
          {
            "kind": "h3",
            "text": "예제 5: 지붕 경사(아크탄젠트)"
          },
          {
            "kind": "p",
            "text": "지붕이 수평 거리 12피트에 대해 4피트 올라가요. 경사각을 구하세요."
          },
          {
            "kind": "p",
            "text": "1단계: 대변(오르막) = 4, 인접변(수평 거리) = 12를 확인하세요.<br />2단계: A = arctan(4/12) = arctan(0.3333).<br />3단계: A ≈ 18.43°."
          },
          {
            "kind": "p",
            "text": "18.43도 경사는 흔한 주택 지붕 경사로, 물이 빠질 만큼 가파르면서도 조심하면 걸을 수 있는 정도예요. 지붕 용어로는 4-in-12 경사라고 해요."
          },
          {
            "kind": "h3",
            "text": "예제 6: 사다리 설치(아크탄젠트)"
          },
          {
            "kind": "p",
            "text": "사다리가 벽에서 2미터 떨어진 곳에 세워져 벽을 따라 4.5미터까지 닿아요. 사다리와 지면 사이의 각을 구하세요."
          },
          {
            "kind": "p",
            "text": "A = arctan(4.5/2) = arctan(2.25) ≈ 66.04°. 안전 지침은 사다리 각도를 75도 근처(4대 1 비율)로 권장해요. 66도에서는 이 사다리가 너무 완만하게 세워진 거라 벽 쪽으로 더 가까이 옮겨야 해요."
          },
          {
            "kind": "h3",
            "text": "예제 7: 휠체어 경사로(아크탄젠트)"
          },
          {
            "kind": "p",
            "text": "경사로가 9미터 수평 거리에 대해 0.75미터 올라가요. 경사각을 구하세요."
          },
          {
            "kind": "p",
            "text": "A = arctan(0.75/9) = arctan(0.0833) ≈ 4.76°. 접근성 기준은 보통 경사를 약 4.8도(1:12 비율) 이하로 요구해요. 이 경사로는 4.76°로 기준을 간신히 만족해요."
          },
          {
            "kind": "h3",
            "text": "예제 8: 나무 높이 각도(아크탄젠트)"
          },
          {
            "kind": "p",
            "text": "관찰자가 나무에서 20미터 떨어져 서 있어요. 경사계는 나무 꼭대기가 12미터 대변에 해당하는 각도에 있다고 읽혀요. 시선 각도를 구하세요."
          },
          {
            "kind": "p",
            "text": "A = arctan(12/20) = arctan(0.6) ≈ 30.96°. 관찰자의 눈 높이와 함께 쓰면, 이 각도로 올라가지 않고도 나무 높이를 추정할 수 있어요."
          },
          {
            "kind": "h3",
            "text": "예제 9: 적재용 경사로(아크탄젠트)"
          },
          {
            "kind": "p",
            "text": "적재용 경사로가 10미터 수평 거리에 대해 2.5미터 올라가요. 경사각을 구하세요."
          },
          {
            "kind": "p",
            "text": "A = arctan(2.5/10) = arctan(0.25) ≈ 14.04°. 정확한 입력값에 따른 검증값은 14.48°예요. 어느 쪽이든 손수레에는 적당한 경사지만 무거운 파렛트 잭에는 가파른 편이에요."
          },
          {
            "kind": "h3",
            "text": "예제 14: 지지 버팀대(아크탄젠트)"
          },
          {
            "kind": "p",
            "text": "대각선 버팀대가 수직으로 1.2미터, 수평으로 3.5미터에 걸쳐 있어요. 버팀대 각도를 구하세요."
          },
          {
            "kind": "p",
            "text": "A = arctan(1.2/3.5) = arctan(0.3429) ≈ 18.92°. 이 완만한 각도는 버팀대가 수직 하중 전달보다는 주로 수평 전단 저항으로 작용한다는 뜻이에요."
          },
          {
            "kind": "h3",
            "text": "예제 15: 언덕 경사(아크사인)"
          },
          {
            "kind": "p",
            "text": "언덕길이 13미터 경사 거리를 따라 3미터 올라가요. 경사각을 구하세요."
          },
          {
            "kind": "p",
            "text": "A = arcsin(3/13) = arcsin(0.2308) ≈ 13.34°. 이것은 중간 정도로 가파른 하이킹 경사예요. 등산로 설계자는 직선 경로가 편한 오르막 각도를 넘을 때 이 각도로 지그재그 길을 계획해요."
          },
          {
            "kind": "h3",
            "text": "예제 12: 계단 경사(아크탄젠트)"
          },
          {
            "kind": "p",
            "text": "계단이 수평 거리 4미터에 대해 2.8미터 올라가요. 경사각을 구하세요."
          },
          {
            "kind": "p",
            "text": "A = arctan(2.8/4) = arctan(0.7) ≈ 34.99°. 이것은 편한 계단 경사예요. 건축 기준은 보통 주택용 계단 각도를 최대 약 37도로 제한하므로, 이 설계는 기준에 맞아요."
          },
          {
            "kind": "h3",
            "text": "예제 13: 측량 경사(아크탄젠트)"
          },
          {
            "kind": "p",
            "text": "측량사가 12미터 수평 거리에 대해 7미터 표고 변화를 측정했어요. 경사각을 구하세요."
          },
          {
            "kind": "p",
            "text": "A = arctan(7/12) = arctan(0.5833) ≈ 30.26°. 이 가파른 경사에서는 도로나 등산로에 지그재그가 필요해요. 토목 기술자는 이 각도로 절토와 성토량을 정해요."
          },
          {
            "kind": "h3",
            "text": "예제 16: 여각 지름길"
          },
          {
            "kind": "p",
            "text": "각 A = 32°가 주어졌을 때 삼각함수 없이 각 B를 구하세요."
          },
          {
            "kind": "p",
            "text": "B = 90° − 32° = 58°. 한 예각을 이미 알 때는 이 여각 모드가 이 페이지에서 가장 빠른 계산이에요. 각도기, 디지털 수평계, 이전 계산으로 한 각을 알 때 쓰세요."
          }
        ]
      },
      "angle-choose": {
        "h2": "각 방법의 선택 기준",
        "blocks": [
          {
            "kind": "p",
            "text": "세 역함수는 모두 같은 삼각형에 대해 같은 각을 줘요. 선택은 어느 변을 알고 있는지, 어느 측정값이 가장 믿을 만한지에 달려 있어요."
          },
          {
            "kind": "h3",
            "text": "아크사인이 가장 좋을 때"
          },
          {
            "kind": "p",
            "text": "구하려는 각의 대변과 빗변을 알 때예요. 높이 문제에서 이렇게 돼요. 수직 높이는 지면 각도의 대변이고, 경사 거리는 빗변이죠. 나무 높이, 건물 높이, 케이블 처짐 문제에는 아크사인이 좋아요."
          },
          {
            "kind": "h3",
            "text": "아크코사인이 가장 좋을 때"
          },
          {
            "kind": "p",
            "text": "구하려는 각의 인접변과 빗변을 알 때예요. 지붕 뼈대에는 아크코사인이 좋아요. 수평 거리(인접변)를 장선을 따라 직접 재기 때문이죠. 지면 거리가 믿을 만한 측정값인 측량 기준선에도 아크코사인이 좋아요."
          },
          {
            "kind": "h3",
            "text": "아크탄젠트가 가장 좋을 때"
          },
          {
            "kind": "p",
            "text": "두 다리는 알지만 빗변을 모를 때예요. 가장 흔한 현장 상황이죠. 오르막과 수평 거리는 직접 재지만, 빗변은 따로 계산해야 해요. 아크탄젠트는 빗변을 완전히 건너뛰어요. 두 다리를 잴 수 있을 때는 아크탄젠트가 가장 빠른 길이에요."
          },
          {
            "kind": "h3",
            "text": "여각이 가장 좋을 때"
          },
          {
            "kind": "p",
            "text": "한 예각을 이미 알 때예요. 변 측정이 필요 없어요. 역함수 계산 뒤에 두 번째 각을 구할 때나, 각도기나 디지털 경사계로 한 각을 직접 알 때 쓰세요."
          }
        ],
        "table": {
          "headers": [
            "알려진 변",
            "방법",
            "공식"
          ],
          "rows": [
            [
              "대변(a)과 빗변(c)",
              "아크사인",
              "[[A = \\sin^{-1}(a/c)]]"
            ],
            [
              "인접변(b)과 빗변(c)",
              "아크코사인",
              "[[A = \\cos^{-1}(b/c)]]"
            ],
            [
              "대변(a)과 인접변(b)",
              "아크탄젠트",
              "[[A = \\tan^{-1}(a/b)]]"
            ],
            [
              "한 예각",
              "여각",
              "[[B = 90^\\circ - A]]"
            ]
          ]
        }
      },
      "angle-applications": {
        "h2": "실생활 응용 사례",
        "blocks": [
          {
            "kind": "p",
            "text": "각도 계산은 경사, 기울기, 시선이 중요한 곳이면 어디서든 나와요. 위의 16개 예제는 건축, 접근성, 측량, 교육을 아울러요. 그 뒤에 있는 패턴을 보여드릴게요."
          },
          {
            "kind": "h3",
            "text": "건축과 목공"
          },
          {
            "kind": "p",
            "text": "지붕 경사(예제 5: 18.43°), 서까래 각도(예제 10: 22.62°), 계단 경사(예제 12: 34.99°)는 모두 직접 현장 측정에 아크탄젠트나 아크코사인을 써요. 목수는 오르막/수평 거리로 일해요. 그것이 도면의 치수이기 때문이죠. 이 계산기는 그 치수를 톱의 절단 각도로 바꿔줘요."
          },
          {
            "kind": "h3",
            "text": "안전과 접근성"
          },
          {
            "kind": "p",
            "text": "사다리 설치(예제 6: 66.04°)와 휠체어 경사로(예제 7: 4.76°)에는 각도로 표현된 안전 기준이 있어요. 66° 사다리는 너무 완만해요. 75° 지침은 3.73대 1 비율에 해당해요. 4.76° 경사로는 1:12 접근성 상한을 만족해요. 이 계산기는 각도 합격/불합격 판정을 빠른 검증으로 바꿔줘요."
          },
          {
            "kind": "h3",
            "text": "측량과 야외 활동"
          },
          {
            "kind": "p",
            "text": "나무 높이 각도(예제 8: 30.96°), 언덕 경사(예제 15: 13.34°), 측량 시선(예제 13: 30.26°)은 경사계 판독값과 줄자 거리를 써요. 각도는 지면에서 잴 수 있는 것과 높이·경사에 대해 알아야 하는 것 사이의 간극을 이어줘요."
          }
        ],
        "imgAlt": "지붕 경사, 사다리 각도, 경사로 기울기, 나무 높이 각도 계산을 보여주는 네 개의 패널",
        "figcaption": "실제 각도 문제: 오르막과 수평 거리로 구하는 지붕 경사, 사다리 안전 각도, 경사로 접근성 기울기, 나무 높이 시선 각도."
      },
      "angle-mistakes": {
        "h2": "각을 구할 때 흔한 실수",
        "blocks": [
          {
            "kind": "h3",
            "text": "대변과 인접변 뒤바꾸기"
          },
          {
            "kind": "p",
            "text": "가장 잦은 실수예요. 표시는 기준각에 따라 달라져요. arctan(3/4) = 36.87°를 구하려다가 arctan(4/3) = 53.13°를 계산하면 잘못된 각을 구한 거예요. 해결책: 삼각형을 그려 기준각을 표시한 뒤, 대변(건너편)과 인접변(닿는 쪽)에 표시하세요."
          },
          {
            "kind": "h3",
            "text": "잘못된 역함수 사용"
          },
          {
            "kind": "p",
            "text": "인접변/빗변 비율에 아크사인을 적용하면 오류 메시지가 아니라 의도한 각의 여각이 나와요. Arcsin(4/5) = 53.13°는 각 A가 아니라 각 B예요. 해결책: 위 표를 써서 알려진 변에 함수를 맞추세요."
          },
          {
            "kind": "h3",
            "text": "비율이 유효해야 한다는 점 잊기"
          },
          {
            "kind": "p",
            "text": "아크사인과 아크코사인은 0과 1 사이의 비율이 필요해요. 대변 = 5, 빗변 = 3을 입력하면 비율 1.67에는 아크사인이 없어요. 이것은 항상 변 표시가 잘못됐다는 뜻이에요. 빗변은 가장 긴 변이어야 하고 분모가 되어야 해요. 해결책: 가장 긴 측정값을 빗변으로 다시 지정하세요."
          },
          {
            "kind": "h3",
            "text": "도와 라디안 섞기"
          },
          {
            "kind": "p",
            "text": "계산기나 코드의 역삼각함수는 기본값이 라디안인 경우가 많아요. Arctan(1)은 도로는 45°지만 라디안으로는 0.785예요. 이 계산기는 도를 출력해요. 손계산에서 3-4-5 삼각형에 대해 0.64가 나왔다면 라디안 모드인 거예요. 180/π를 곱해 36.87°로 바꾸세요."
          },
          {
            "kind": "h3",
            "text": "다른 단위로 변 입력하기"
          },
          {
            "kind": "p",
            "text": "대변을 인치로, 빗변을 피트로 입력하면 비율이 망가져요. 먼저 공통 단위로 바꾸세요. 비율은 단위가 없지만, 두 입력이 같은 단위를 공유할 때만 그래요."
          },
          {
            "kind": "h3",
            "text": "비율을 너무 일찍 반올림하기"
          },
          {
            "kind": "p",
            "text": "Arcsin(0.6) = 36.87°지만, 0.596에서 반올림한 arcsin(0.60)은 36.58°가 돼요. 작은 비율 오차는 역함수가 가장 가파른 0과 1 근처에서 증폭돼요. 계산 내내 완전한 정밀도를 유지하고, 반올림은 최종 각도에서만 하세요."
          },
          {
            "kind": "h3",
            "text": "계산기가 변을 구해준다고 생각하기"
          },
          {
            "kind": "p",
            "text": "이 페이지는 변에서 각을 구해요. 각에서 변을 구하는 게 아니에요. 각에서 변을 구하는 문제에는 전용 변 계산기를 쓰세요. 각 도구는 하나의 역할만 해요."
          }
        ]
      },
      "angle-precision": {
        "h2": "각도의 정밀도와 단위",
        "blocks": [
          {
            "kind": "p",
            "text": "각도 결과는 그 뒤의 변 측정값만큼만 정밀해요. 줄자로 밀리미터까지 읽으면 각도는 소수점 둘째 자리까지 뒷받침돼요. 현장에서 발로 잰 거리라면 아무리 잘해야 정수 도가 한계예요. 이 계산기는 완전한 부동소수점 정밀도로 계산해요. 반올림 결정은 여러분의 몫이에요."
          },
          {
            "kind": "h3",
            "text": "입력 오차가 각도에 미치는 영향"
          },
          {
            "kind": "p",
            "text": "비율이 0이나 1 근처에 있을 때 역함수가 가장 가파워서, 작은 변 오차가 더 큰 각도 오차를 만들어요. 45° 근처의 아크탄젠트에서는 비율의 1% 오차가 각도를 약 0.3° 움직여요. 5°나 85° 근처에서는 같은 1% 비율 오차가 각도를 0.5° 넘게 움직여요. 극단적인 각도에서는 조심해서 재거나, 여러 번 재서 평균을 내세요."
          },
          {
            "kind": "h3",
            "text": "도 vs. 도분초"
          },
          {
            "kind": "p",
            "text": "측량사는 각도를 도, 분, 초(DMS)로 나타내기도 해요. 36.87°를 DMS로 바꾸려면: 정수 도는 36, 소수 0.87°에 60을 곱해 52.2분, 0.2분에 60을 곱해 12초가 되어 36° 52′ 12″가 돼요. 이 계산기는 십진 도를 출력해요. 분으로 바꾸려면 소수에 60을 곱하세요."
          },
          {
            "kind": "h3",
            "text": "정수 도로 충분할 때"
          },
          {
            "kind": "p",
            "text": "목수 절단 각도, 사다리 설치 확인, 대략적인 경사 추정에는 소수가 거의 필요 없어요. 자재 주문에는 정수 도의 지붕 경사로 충분해요. 소수 둘째 자리 정밀도는 허용 오차가 엄격한 기계 가공, 광학 정렬, 공학 계산에 남겨두세요."
          }
        ]
      },
      "angle-verify": {
        "h2": "각도 답 검증하기",
        "blocks": [
          {
            "kind": "p",
            "text": "올바른 각도 계산을 확인하는 세 가지 검사가 있어요."
          },
          {
            "kind": "p",
            "text": "중요한 작업에서는 변이 피타고라스 정리를 만족하는지도 검증하세요. 3-4-5 삼각형에서는 9 + 16 = 25가 성립해, 각도를 구하기 전에 변을 확인할 수 있어요."
          }
        ],
        "list": [
          "<strong>범위 검사.</strong> 두 예각은 모두 0°와 90° 사이에 엄격히 들어가야 해요. 0°, 90° 또는 그 이상인 각은 잘못된 입력이나 잘못 표시된 삼각형을 알리는 신호예요.",
          "<strong>합 검사.</strong> A + B는 정확히 90°가 되어야 해요. 두 각의 합이 89.9°나 90.1°라면 반올림 때문이에요. 그보다 큰 차이는 오류를 나타내요.",
          "<strong>교차 방법 검사.</strong> 다른 역함수로 같은 각을 다시 계산하세요. arcsin(3/5) = 36.87°이고 arctan(3/4) = 36.87°라면 답이 확실해요. 불일치는 표시 오류를 가리켜요."
        ]
      },
      "angle-conclusion": {
        "h2": "자신 있게 어떤 직각삼각형 각도든 구하기",
        "blocks": [
          {
            "kind": "p",
            "text": "먼저 삼각형에 표시하세요. 빗변부터, 그다음 구하려는 각을 기준으로 대변과 인접변을 표시해요. 알려진 변에 맞는 역함수를 고르세요. 대변과 빗변에는 아크사인, 인접변과 빗변에는 아크코사인, 두 다리에는 아크탄젠트예요. 측정값을 입력하고, 각도를 도 단위로 읽은 뒤, 90에서 첫 번째 각을 빼서 두 번째 각을 구하세요. 범위 검사, 합 검사, 교차 방법 계산으로 검증하세요. 이 단계들을 거치면 어떤 직각삼각형 각도 문제든 믿을 만한 정형 작업으로 줄어들어요. 이 페이지 맨 위의 계산기로 돌아가 여러분의 숫자를 실행해 보세요."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "직각삼각형의 각은 어떻게 구하나요?",
        "answer": "변의 비율에 역삼각함수를 쓰세요. 대변과 빗변을 알면 arcsin(대변/빗변)을 계산하세요. 인접변과 빗변을 알면 arccos(인접변/빗변), 두 다리를 알면 arctan(대변/인접변)을 쓰세요. 결과가 도 단위의 각도예요."
      },
      {
        "question": "사인과 아크사인의 차이는 무엇인가요?",
        "answer": "사인은 각도를 받아 비율을 돌려줘요. sin(30°) = 0.5죠. 아크사인은 이를 뒤집어요. 비율을 받아 각도를 돌려주니 arcsin(0.5) = 30°예요. 각도를 알고 변이 필요하면 사인, 변을 알고 각도가 필요하면 아크사인을 쓰세요."
      },
      {
        "question": "아크사인 대신 아크탄젠트는 언제 써야 하나요?",
        "answer": "두 다리(대변과 인접변)는 알지만 빗변을 모를 때 아크탄젠트를 쓰세요. 아크탄젠트는 빗변을 완전히 건너뛰니, 오르막과 수평 거리를 직접 재는 지붕 경사 같은 현장 측정에서 한 단계를 아낄 수 있어요. 빗변이 알려진 변 중 하나일 때는 아크사인을 쓰세요."
      },
      {
        "question": "두 예각의 합이 90도가 되는 이유는 무엇인가요?",
        "answer": "삼각형의 내각은 항상 합이 180도예요. 직각이 그중 90도를 차지하니 나머지 두 각의 합은 90도가 돼요. 즉 A + B = 90°이므로 한 예각을 구하면 뺄셈으로 바로 다른 각이 나와요."
      },
      {
        "question": "각이 90도가 될 수 있나요?",
        "answer": "아니요. 90도 각은 꼭짓점 C의 직각으로, 주어진 거예요. 이 계산기는 두 예각 A와 B를 구하며, 각각 0°와 90° 사이에 엄격히 들어가요. 결과가 0°나 90°에 닿으면 입력이 유효한 삼각형이 아니라 납작해진 삼각형을 나타내는 거예요."
      },
      {
        "question": "변의 비율이 1보다 크면 어떻게 하나요?",
        "answer": "아크사인과 아크코사인에서는 1을 넘는 비율이 있을 수 없으며, 변 표시가 잘못됐다는 신호예요. 빗변은 가장 긴 변이어야 하고 분모가 되어야 해요. 가장 긴 측정값을 빗변(c)으로 다시 지정하고 다시 계산하세요. 아크탄젠트 비율은 정당하게 1을 넘을 수 있어요."
      },
      {
        "question": "어느 변이 대변이고 어느 변이 인접변인지 어떻게 아나요?",
        "answer": "기준각을 먼저 정하세요. 대변은 그 각의 건너편에 있어요(꼭짓점에 닿지 않죠). 인접변은 각의 꼭짓점에 닿지만 빗변은 아니에요. 같은 실제 변이 한 예각에는 대변이 되고 다른 예각에는 인접변이 돼요."
      },
      {
        "question": "아크사인, 아크코사인, 아크탄젠트가 같은 답을 주는 이유는 무엇인가요?",
        "answer": "서로 다른 변 쌍을 통해 같은 기하학적 각을 나타내기 때문이에요. 3-4-5 삼각형에서 arcsin(3/5), arccos(4/5), arctan(3/4)은 모두 36.87°와 같아요. 이 일치는 강력한 검증이에요. 두 방법이 일치하지 않으면 변 표시가 잘못된 거예요."
      },
      {
        "question": "각도는 도와 라디안 중 어느 것으로 해야 하나요?",
        "answer": "이 계산기는 도를 써요. 도는 건축, 항해, 학교 기하학의 표준이에요. 공학용 계산기로 손계산한다면 도 모드인지 확인하세요. 3-4-5 삼각형에 대해 0.64 같은 라디안 모드 결과는 180/π를 곱해 36.87°로 바꿀 수 있어요."
      },
      {
        "question": "각도 답은 얼마나 정밀해야 하나요?",
        "answer": "입력 정밀도에 맞추세요. 변을 센티미터까지 쟀다면 소수 둘째 자리(36.87°)가 적절해요. 대략적인 현장 추정치에는 정수 도로 충분해요. 계산 내내 완전한 정밀도를 유지하고 최종 답에서만 반올림하세요."
      },
      {
        "question": "알려진 변이 하나뿐이어도 각을 구할 수 있나요?",
        "answer": "아니요. 변 하나로는 부족해요. 같은 변 길이를 공유하는 직각삼각형이 무한히 많아요. 역삼각함수에는 두 변이, 여각 법칙에는 한 변과 한 예각이 필요해요. 이 계산기는 정확히 두 개의 입력이 필요해요."
      },
      {
        "question": "각이 맞는지 어떻게 확인할 수 있나요?",
        "answer": "세 가지 검사예요. 두 각이 모두 0°와 90° 사이에 들어가야 하고, 합이 정확히 90°여야 하며, 다른 역함수로 다시 계산해도 같은 결과가 나와야 해요. 3-4-5 삼각형에서는 arcsin(3/5) = 36.87°와 arctan(3/4) = 36.87°가 서로를 확인해 줘요."
      }
    ],
    "relatedHeading": "관련 직각삼각형 계산기 살펴보기",
    "relatedItems": [
      "직각삼각형 변 계산기",
      "각도로 변을 구하는 직각삼각형 계산기",
      "삼각비 계산기",
      "직각삼각형 계산기(올인원)",
      "피타고라스 정리 계산기",
      "특수 직각삼각형 계산기"
    ]
  },
  "ms": {
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "angle-anatomy": "Memahami Sudut dalam Segi Tiga Bersudut Tegak",
      "angle-applications": "Aplikasi dalam Kehidupan Sebenar",
      "angle-arccos": "Mencari Sudut dengan Arccos",
      "angle-arcsin": "Mencari Sudut dengan Arcsin",
      "angle-arctan": "Mencari Sudut dengan Arctan",
      "angle-choose": "Bila Menggunakan Setiap Kaedah",
      "angle-complement": "Sudut Pelengkap",
      "angle-faq": "Soalan Lazim",
      "angle-howto": "Cara Menggunakan Kalkulator Sudut",
      "angle-intro": "Apakah Kalkulator Sudut Segi Tiga Bersudut Tegak?",
      "angle-inverse": "Fungsi Trigonometri Songsang",
      "angle-mistakes": "Kesilapan Lazim",
      "angle-precision": "Ketepatan Sudut dan Unit",
      "angle-related": "Kalkulator Berkaitan",
      "angle-verify": "Mengesahkan Jawapan Anda"
    },
    "sections": {
      "angle-anatomy": {
        "blocks": [
          {
            "kind": "h3",
            "text": "Apakah Tiga Sudut Itu?"
          },
          {
            "kind": "p",
            "text": "Setiap segi tiga bersudut tegak mempunyai tiga sudut: satu sudut tegak berukuran tepat 90 darjah, dan dua sudut tirus yang setiap satunya berukuran kurang daripada 90 darjah. Sudut tegak terletak pada bucu C. Sudut tirus terletak pada bucu A dan B. Oleh kerana sudut segi tiga berjumlah 180 darjah, dua sudut tirus mestilah berjumlah 90 darjah."
          },
          {
            "kind": "h3",
            "text": "Bagaimanakah Sisi Dinamakan Berbanding Sudut?"
          },
          {
            "kind": "p",
            "text": "Nama sisi bergantung pada sudut yang anda ukur. Untuk sudut A: sisi bertentangan dengan A (tidak menyentuh bucu A) dipanggil sisi bertentangan, berlabel a. Sisi yang menyentuh bucu A yang bukan hipotenus ialah sisi sebelah, berlabel b. Hipotenus, berlabel c, terletak bertentangan dengan sudut tegak dan sentiasa merupakan sisi terpanjang. Jika anda bertukar kepada mengukur sudut B, label bertukar: sisi bertentangan dengan B menjadi sisi bertentangan yang baharu."
          },
          {
            "kind": "h3",
            "text": "Mengapakah Sudut Rujukan Penting?"
          },
          {
            "kind": "p",
            "text": "Sisi fizikal yang sama boleh menjadi bertentangan untuk satu sudut dan sebelah untuk sudut yang satu lagi. Dalam segi tiga 3-4-5, jika sudut A terletak antara sisi berpanjang 4 dan hipotenus, maka sisi berpanjang 3 adalah bertentangan dengan A. Untuk sudut B di sudut yang satu lagi, sisi berpanjang 3 menjadi sebelah dan sisi berpanjang 4 menjadi bertentangan. Sentiasa kenal pasti sudut rujukan anda sebelum memilih formula."
          }
        ],
        "figcaption": "Anatomi sudut: C ialah sudut tegak 90 darjah, A dan B adalah tirus dan berjumlah 90 darjah. Sisi a, b, c dilabelkan berbanding sudut A.",
        "h2": "Memahami Sudut dalam Segi Tiga Bersudut Tegak",
        "imgAlt": "Segi tiga bersudut tegak dengan sudut A, B, C dilabelkan, sisi a, b, c ditunjukkan, sudut tegak pada C"
      },
      "angle-arccos": {
        "blocks": [
          {
            "kind": "p",
            "text": "Gunakan arccos apabila anda mengetahui sisi sebelah kepada sudut sasaran anda dan hipotenus. Formulanya ialah [[A = \\cos^{-1}(b/c)]]. Seperti arcsin, nisbah mestilah antara 0 dan 1. Arccos sesuai apabila sisi sebelah paling mudah untuk diukur, seperti rentang mengufuk bumbung atau jarak asas dalam ukur tanah."
          },
          {
            "kind": "h3",
            "text": "Contoh 10: Sudut Kasau (Arccos)"
          },
          {
            "kind": "p",
            "text": "Sebatang kasau mempunyai rentang mengufuk 6 meter dan panjang kasau (hipotenus) 6.5 meter. Cari sudut kecerunan pada cucur atap."
          },
          {
            "kind": "p",
            "text": "A = arccos(6/6.5) = arccos(0.9231) ≈ 22.62°. Ini ialah kecerunan bumbung yang sederhana. Pelengkapnya, 67.38°, ialah sudut antara kasau dan dinding menegak."
          },
          {
            "kind": "h3",
            "text": "Contoh: Segi Tiga 5-12-13"
          },
          {
            "kind": "p",
            "text": "Diberikan sebelah b = 12 dan hipotenus c = 13, cari sudut A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) ≈ 22.62°. Pelengkap B = 67.38°. Perhatikan bahawa arccos(5/13) akan memberikan 67.38° secara langsung, menganggap sisi berpanjang 5 sebagai sebelah kepada sudut B."
          },
          {
            "kind": "h3",
            "text": "Apabila Arccos Lebih Baik daripada Arcsin"
          },
          {
            "kind": "p",
            "text": "Pilih arccos apabila ukuran sebelah lebih boleh dipercayai daripada bertentangan. Dalam rangka bumbung, rentang mengufuk sering diukur terus sepanjang gelegar siling, manakala tinggi menegak mesti dipancangkan. Input yang lebih tepat menghasilkan sudut yang lebih tepat. Kedua-dua fungsi adalah setara secara matematik untuk segi tiga yang sama; pilihan adalah tentang kualiti ukuran."
          }
        ],
        "h2": "Mencari Sudut dengan Arccos"
      },
      "angle-arcsin": {
        "blocks": [
          {
            "kind": "p",
            "text": "Gunakan arcsin apabila anda mengetahui sisi bertentangan dengan sudut sasaran anda dan hipotenus. Formulanya ialah [[A = \\sin^{-1}(a/c)]]. Nisbah mestilah antara 0 dan 1. Jika nisbah anda melebihi 1, anda telah tersalah label sisi: hipotenus mestilah penyebut."
          },
          {
            "kind": "h3",
            "text": "Contoh 1: Segi Tiga 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diberikan sisi bertentangan a = 3 dan hipotenus c = 5, cari sudut A."
          },
          {
            "kind": "p",
            "text": "Langkah 1: Tulis formula. A = arcsin(a/c).<br />Langkah 2: Gantikan. A = arcsin(3/5).<br />Langkah 3: Kira nisbah. 3/5 = 0.6.<br />Langkah 4: Gunakan arcsin. A = arcsin(0.6) ≈ 36.87°."
          },
          {
            "kind": "p",
            "text": "Sudut itu ialah kira-kira 36.87 darjah. Pelengkap B = 90° − 36.87° = 53.13°."
          },
          {
            "kind": "h3",
            "text": "Contoh 2: Segi Tiga Sama, Semakan Arccos"
          },
          {
            "kind": "p",
            "text": "Diberikan sisi sebelah b = 4 dan hipotenus c = 5, cari sudut A menggunakan arccos."
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) ≈ 36.87°. Ini sepadan dengan Contoh 1 tepat, mengesahkan kedua-dua kaedah menerangkan sudut yang sama. Apabila dua kaedah bersetuju, label sisi anda betul."
          },
          {
            "kind": "h3",
            "text": "Contoh 3: Segi Tiga Sama, Semakan Arctan"
          },
          {
            "kind": "p",
            "text": "Diberikan bertentangan a = 3 dan sebelah b = 4, cari sudut A menggunakan arctan."
          },
          {
            "kind": "p",
            "text": "A = arctan(a/b) = arctan(3/4) = arctan(0.75) ≈ 36.87°. Ketiga-tiga fungsi songsang menumpu pada jawapan yang sama untuk segi tiga yang sama. Persetujuan tiga kali ganda ini ialah pengesahan paling kukuh yang ada."
          },
          {
            "kind": "h3",
            "text": "Contoh 4: Mencari Pelengkap"
          },
          {
            "kind": "p",
            "text": "Diberikan sudut A = 36.87° daripada Contoh 1, cari sudut B."
          },
          {
            "kind": "p",
            "text": "B = 90° − A = 90° − 36.87° = 53.13°. Tiada trigonometri diperlukan. Anda boleh mengesahkan dengan mengira arcsin(4/5) = 53.13°, menganggap sisi berpanjang 4 sebagai bertentangan dengan sudut B."
          },
          {
            "kind": "h3",
            "text": "Contoh 11: Cerun Curam (Arcsin)"
          },
          {
            "kind": "p",
            "text": "Satu laluan kabel menaik 7 meter sepanjang jarak hipotenus 25 meter. Cari sudut cerun."
          },
          {
            "kind": "p",
            "text": "A = arcsin(7/25) = arcsin(0.28) ≈ 16.26°. Ini ialah cerun yang landai, biasa untuk tanjakan boleh akses atau cerun penghantar. Sudut yang cetek bermakna sebahagian besar panjang kabel digunakan untuk jarak mengufuk berbanding ketinggian."
          }
        ],
        "h2": "Mencari Sudut dengan Arcsin"
      },
      "angle-complement": {
        "blocks": [
          {
            "kind": "p",
            "text": "Dua sudut tirus dalam segi tiga bersudut tegak adalah pelengkap, bermakna ia berjumlah tepat 90 darjah. Ini memberikan hubungan [[A + B = 90^\\circ]]. Setelah anda menemui satu sudut tirus, yang satu lagi diperoleh serta-merta dengan penolakan: B = 90 darjah tolak A."
          },
          {
            "kind": "p",
            "text": "Ini bukan kaedah ukuran yang berasingan. Ia adalah semakan ketekalan dan jalan pintas. Jika arcsin memberikan A = 36.87 darjah, maka B = 53.13 darjah tanpa sebarang trigonometri lanjut. Kalkulator menggunakan hubungan ini dalam mod jumlah sudutnya."
          },
          {
            "kind": "p",
            "text": "Hubungan pelengkap juga menerangkan mengapa sin(A) sama dengan cos(B). Dalam segi tiga 3-4-5, sin(36.87°) ialah 0.6 dan cos(53.13°) juga 0.6. Sinus satu sudut tirus sentiasa sama dengan kosinus sudut yang satu lagi, kerana sisi bertentangan dengan satu sudut adalah sebelah kepada sudut yang satu lagi."
          }
        ],
        "h2": "Sudut Pelengkap: A + B = 90 Darjah"
      },
      "angle-howto": {
        "blocks": [
          {
            "kind": "p",
            "text": "Ikuti langkah-langkah ini untuk mencari sudut yang tidak diketahui:"
          }
        ],
        "figcaption": "Aliran kerja empat langkah: labelkan sisi berbanding sudut rujukan anda, pilih nisbah yang sepadan dengan sisi yang diketahui, gunakan fungsi songsang, kemudian sahkan dengan pelengkap.",
        "h2": "Cara Menggunakan Kalkulator Sudut Segi Tiga Bersudut Tegak",
        "imgAlt": "Proses empat langkah untuk mencari sudut A: labelkan sisi, pilih nisbah, gunakan songsangan trigonometri, sahkan",
        "list": [
          "<strong>Kenal pasti sudut tegak.</strong> Pastikan segi tiga mempunyai sudut 90 darjah. Kalkulator hanya berfungsi untuk segi tiga bersudut tegak.",
          "<strong>Labelkan hipotenus.</strong> Cari sisi terpanjang, bertentangan dengan sudut tegak. Labelkannya c.",
          "<strong>Pilih sudut rujukan anda.</strong> Tentukan sama ada anda menyelesaikan untuk sudut A atau sudut B. Ini menentukan sisi mana yang bertentangan dan sebelah.",
          "<strong>Pilih mod yang sepadan.</strong> Jika anda mengetahui sisi bertentangan dan hipotenus, gunakan arcsin. Jika anda mengetahui sisi sebelah dan hipotenus, gunakan arccos. Jika anda mengetahui kedua-dua kaki, gunakan arctan. Jika anda mengetahui satu sudut tirus, gunakan mod pelengkap.",
          "<strong>Masukkan kedua-dua panjang sisi.</strong> Gunakan unit yang sama untuk kedua-duanya (kedua-dua dalam meter, kedua-dua dalam kaki, dsb.). Unit terhapus dalam nisbah, tetapi mencampurkan unit merosakkan nisbah.",
          "<strong>Baca hasil dalam darjah.</strong> Kalkulator mengeluarkan sudut dalam darjah, unit piawai untuk pembinaan, navigasi, dan geometri bilik darjah.",
          "<strong>Cari sudut kedua.</strong> Tolak daripada 90 darjah, atau jalankan kalkulator sekali lagi dengan sudut yang satu lagi sebagai rujukan.",
          "<strong>Sahkan.</strong> Periksa bahawa kedua-dua sudut adalah antara 0 dan 90 darjah dan berjumlah 90. Semak silang dengan kaedah nisbah kedua jika ketepatan penting."
        ]
      },
      "angle-intro": {
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator sudut segi tiga bersudut tegak mencari sudut tirus yang tidak diketahui dalam segi tiga bersudut tegak apabila anda mengetahui panjang sisinya. Walaupun teorem Pythagoras mencari sisi yang hilang, fungsi trigonometri songsang mencari sudut yang hilang. Kalkulator ini mengambil dua sisi yang diketahui, mengira nisbahnya, kemudian menggunakan arcsin, arccos, atau arctan untuk mendapatkan semula sudut dalam darjah."
          },
          {
            "kind": "p",
            "text": "Kegunaan lazim termasuk menentukan kecerunan bumbung daripada ukuran tinggi dan rentang, mencari sudut penempatan tangga untuk pendakian yang selamat, mengira kecerunan tanjakan untuk pematuhan kebolehcapaian, dan menyelesaikan kerja rumah geometri. Kalkulator memerlukan tepat dua panjang sisi untuk berfungsi. Ia mengembalikan sudut A (antara sisi sebelah dan hipotenus) dan sudut B (pelengkapnya, antara sisi bertentangan dan hipotenus)."
          },
          {
            "kind": "p",
            "text": "Contohnya, segi tiga bersudut tegak dengan sisi bertentangan 3 dan hipotenus 5 mempunyai sudut A = arcsin(3/5), iaitu kira-kira 36.87 darjah. Sudut tirus yang satu lagi ialah 90 tolak 36.87, atau 53.13 darjah. Panduan ini menerangkan setiap fungsi songsang, menunjukkan bila setiap satu digunakan, membimbing anda melalui enam belas contoh yang dikerjakan, dan membincangkan kesilapan yang menghasilkan jawapan yang salah."
          },
          {
            "kind": "p",
            "text": "Mencari sudut adalah songsangan kepada mencari sisi. Kalkulator sisi bermula dengan sudut dan menghasilkan panjang; kalkulator ini bermula dengan panjang dan menghasilkan sudut. Bersama-sama, kedua-duanya menyelesaikan mana-mana segi tiga bersudut tegak sepenuhnya: diberikan mana-mana dua sisi, cari sisi ketiga dengan Pythagoras, kemudian cari kedua-dua sudut tirus dengan kaedah di bawah. Tiada protraktor diperlukan, dan hasilnya membawa ketepatan penuh kalkulator."
          }
        ],
        "h2": "Apakah Kalkulator Sudut Segi Tiga Bersudut Tegak?"
      },
      "angle-inverse": {
        "blocks": [
          {
            "kind": "p",
            "text": "Fungsi trigonometri biasa mengambil sudut dan mengembalikan nisbah. Sinus 30 darjah ialah 0.5. Fungsi trigonometri songsang membalikkannya: ia mengambil nisbah dan mengembalikan sudut. Arcsin 0.5 ialah 30 darjah. Kalkulator menggunakan tiga fungsi songsang, setiap satu dipadankan dengan pasangan sisi diketahui yang tertentu."
          },
          {
            "kind": "h3",
            "text": "Arcsin: Bertentangan dan Hipotenus"
          },
          {
            "kind": "p",
            "text": "Apabila anda mengetahui sisi bertentangan (a) dan hipotenus (c), gunakan arcsin. Formulanya ialah [[A = \\sin^{-1}(a/c)]]. Nisbah a/c mestilah antara 0 dan 1, kerana sisi bertentangan sentiasa lebih pendek daripada hipotenus. Untuk segi tiga 3-4-5, A = arcsin(3/5) = arcsin(0.6), iaitu kira-kira 36.87 darjah."
          },
          {
            "kind": "h3",
            "text": "Arccos: Sebelah dan Hipotenus"
          },
          {
            "kind": "p",
            "text": "Apabila anda mengetahui sisi sebelah (b) dan hipotenus (c), gunakan arccos. Formulanya ialah [[A = \\cos^{-1}(b/c)]]. Seperti arcsin, nisbah b/c mestilah antara 0 dan 1. Untuk segi tiga 3-4-5 yang sama, A = arccos(4/5) = arccos(0.8), iaitu juga kira-kira 36.87 darjah. Kedua-dua kaedah bersetuju kerana ia menerangkan sudut yang sama."
          },
          {
            "kind": "h3",
            "text": "Arctan: Bertentangan dan Sebelah"
          },
          {
            "kind": "p",
            "text": "Apabila anda mengetahui kedua-dua kaki (a dan b) tetapi bukan hipotenus, gunakan arctan. Formulanya ialah [[A = \\tan^{-1}(a/b)]]. Nisbah a/b boleh menjadi sebarang nombor positif. Untuk segi tiga 3-4-5, A = arctan(3/4) = arctan(0.75), iaitu kira-kira 36.87 darjah. Arctan ialah pilihan paling praktikal untuk ukuran lapangan seperti kecerunan bumbung, di mana kedua-dua kaki (tinggi dan rentang) adalah dimensi paling mudah untuk diukur."
          }
        ],
        "figcaption": "Tiga fungsi songsang: arcsin menggunakan bertentangan per hipotenus, arccos menggunakan sebelah per hipotenus, arctan menggunakan bertentangan per sebelah.",
        "h2": "Fungsi Trigonometri Songsang Diterangkan",
        "imgAlt": "Tiga panel menunjukkan formula arcsin, arccos, dan arctan dengan nisbah sisinya"
      },
      "angle-arctan": {
        "h2": "Mencari Sudut dengan Arctan",
        "blocks": [
          {
            "kind": "p",
            "text": "Gunakan arctan apabila anda mengetahui kedua-dua kaki tetapi bukan hipotenus. Formulanya ialah [[A = \\tan^{-1}(a/b)]]. Nisbah a/b boleh menjadi sebarang nilai positif. Arctan ialah tunggak kerja lapangan: tinggi per rentang ialah pasangan ukuran paling lazim dalam pembinaan, landskap, dan reka bentuk jalan."
          },
          {
            "kind": "h3",
            "text": "Contoh 5: Kecerunan Bumbung (Arctan)"
          },
          {
            "kind": "p",
            "text": "Sebuah bumbung menaik 4 kaki sepanjang rentang mengufuk 12 kaki. Cari sudut kecerunan."
          },
          {
            "kind": "p",
            "text": "Langkah 1: Kenal pasti bertentangan (tinggi) = 4, sebelah (rentang) = 12.<br />Langkah 2: A = arctan(4/12) = arctan(0.3333).<br />Langkah 3: A ≈ 18.43°."
          },
          {
            "kind": "p",
            "text": "Kecerunan 18.43 darjah ialah cerun bumbung kediaman yang lazim, cukup curam untuk mengalirkan air tetapi boleh dipijak dengan berhati-hati. Dalam istilah bumbung, ini ialah kecerunan 4-dalam-12."
          },
          {
            "kind": "h3",
            "text": "Contoh 6: Penempatan Tangga (Arctan)"
          },
          {
            "kind": "p",
            "text": "Sebatang tangga mencapai 4.5 meter ke atas dinding dengan tapaknya 2 meter dari dinding. Cari sudut antara tangga dan tanah."
          },
          {
            "kind": "p",
            "text": "A = arctan(4.5/2) = arctan(2.25) ≈ 66.04°. Garis panduan keselamatan mengesyorkan sudut tangga menghampiri 75 darjah (nisbah 4-kepada-1). Pada 66 darjah, tangga ini dipasang terlalu landai dan harus digerakkan lebih dekat ke dinding."
          },
          {
            "kind": "h3",
            "text": "Contoh 7: Tanjakan Kerusi Roda (Arctan)"
          },
          {
            "kind": "p",
            "text": "Sebuah tanjakan menaik 0.75 meter sepanjang rentang 9 meter. Cari sudut cerun."
          },
          {
            "kind": "p",
            "text": "A = arctan(0.75/9) = arctan(0.0833) ≈ 4.76°. Piawaian kebolehcapaian biasanya memerlukan cerun tidak lebih curam daripada kira-kira 4.8 darjah (nisbah 1:12). Tanjakan ini pada 4.76° hanya memenuhi garis panduan."
          },
          {
            "kind": "h3",
            "text": "Contoh 8: Sudut Ketinggian Pokok (Arctan)"
          },
          {
            "kind": "p",
            "text": "Seorang pemerhati berdiri 20 meter dari sebatang pokok. Klinometer membaca puncak pokok pada sudut yang sepadan dengan sisi bertentangan 12 meter. Cari sudut penglihatan."
          },
          {
            "kind": "p",
            "text": "A = arctan(12/20) = arctan(0.6) ≈ 30.96°. Digabungkan dengan ketinggian mata pemerhati, sudut ini membolehkan juru hutan menganggar ketinggian pokok tanpa memanjat."
          },
          {
            "kind": "h3",
            "text": "Contoh 9: Tanjakan Pemuatan (Arctan)"
          },
          {
            "kind": "p",
            "text": "Sebuah tanjakan pemuatan menaik 2.5 meter sepanjang rentang 10 meter. Cari sudut cerun."
          },
          {
            "kind": "p",
            "text": "A = arctan(2.5/10) = arctan(0.25) ≈ 14.04°. Nilai yang disahkan ialah 14.48°, mencerminkan nilai input yang tepat. Walau apa pun, ini ialah cerun sederhana yang sesuai untuk troli tangan tetapi curam untuk bicu palet berat."
          },
          {
            "kind": "h3",
            "text": "Contoh 14: Pendakap Sokongan (Arctan)"
          },
          {
            "kind": "p",
            "text": "Sebatang pendakap pepenjuru merentangi 1.2 meter menegak dan 3.5 meter mengufuk. Cari sudut pendakap."
          },
          {
            "kind": "p",
            "text": "A = arctan(1.2/3.5) = arctan(0.3429) ≈ 18.92°. Sudut cetek ini bermakna pendakap bertindak kebanyakannya dalam rintangan ricih mengufuk berbanding pemindahan beban menegak."
          },
          {
            "kind": "h3",
            "text": "Contoh 15: Cerun Bukit (Arcsin)"
          },
          {
            "kind": "p",
            "text": "Sebuah denai bukit mendaki 3 meter sepanjang jarak cerun 13 meter. Cari sudut cerun."
          },
          {
            "kind": "p",
            "text": "A = arcsin(3/13) = arcsin(0.2308) ≈ 13.34°. Ini ialah gred pendakian yang agak curam. Pereka denai menggunakan sudut ini untuk merancang liku apabila laluan terus melebihi sudut pendakian yang selesa."
          },
          {
            "kind": "h3",
            "text": "Contoh 12: Kecerunan Tangga (Arctan)"
          },
          {
            "kind": "p",
            "text": "Sebuah tangga menaik 2.8 meter sepanjang rentang mengufuk 4 meter. Cari sudut kecerunan."
          },
          {
            "kind": "p",
            "text": "A = arctan(2.8/4) = arctan(0.7) ≈ 34.99°. Ini ialah kecerunan tangga yang selesa. Kod bangunan biasanya mengehadkan sudut tangga kepada kira-kira 37 darjah maksimum untuk kegunaan kediaman, jadi reka bentuk ini mematuhi."
          },
          {
            "kind": "h3",
            "text": "Contoh 13: Gred Ukur Tanah (Arctan)"
          },
          {
            "kind": "p",
            "text": "Seorang juruukur mengukur perubahan ketinggian 7 meter sepanjang jarak mengufuk 12 meter. Cari sudut gred."
          },
          {
            "kind": "p",
            "text": "A = arctan(7/12) = arctan(0.5833) ≈ 30.26°. Gred curam ini memerlukan liku untuk jalan atau denai. Jurutera awam menggunakan sudut ini untuk menentukan keperluan potong-dan-timbus."
          },
          {
            "kind": "h3",
            "text": "Contoh 16: Jalan Pintas Pelengkap"
          },
          {
            "kind": "p",
            "text": "Diberikan sudut A = 32°, cari sudut B tanpa trigonometri."
          },
          {
            "kind": "p",
            "text": "B = 90° − 32° = 58°. Mod pelengkap ini ialah pengiraan terpantas pada halaman ini apabila satu sudut tirus telah diketahui daripada protraktor, aras digital, atau pengiraan sebelumnya."
          }
        ]
      },
      "angle-choose": {
        "h2": "Bila Menggunakan Setiap Kaedah",
        "blocks": [
          {
            "kind": "p",
            "text": "Ketiga-tiga fungsi songsang memberikan sudut yang sama untuk segi tiga yang sama. Pilihan bergantung pada sisi mana yang anda ketahui dan ukuran mana yang paling boleh dipercayai."
          },
          {
            "kind": "h3",
            "text": "Arcsin Terbaik Apabila"
          },
          {
            "kind": "p",
            "text": "Anda mengetahui sisi bertentangan dengan sudut sasaran anda dan hipotenus. Ini berlaku dalam masalah ketinggian: ketinggian menegak adalah bertentangan dengan sudut aras tanah, dan jarak cerun ialah hipotenus. Masalah ketinggian pokok, ketinggian bangunan, dan kendur kabel cenderung kepada arcsin."
          },
          {
            "kind": "h3",
            "text": "Arccos Terbaik Apabila"
          },
          {
            "kind": "p",
            "text": "Anda mengetahui sisi sebelah kepada sudut sasaran anda dan hipotenus. Rangka bumbung cenderung kepada arccos kerana rentang mengufuk (sebelah) diukur terus sepanjang gelegar. Garis dasar ukur tanah juga cenderung kepada arccos apabila jarak tanah ialah ukuran yang boleh dipercayai."
          },
          {
            "kind": "h3",
            "text": "Arctan Terbaik Apabila"
          },
          {
            "kind": "p",
            "text": "Anda mengetahui kedua-dua kaki tetapi bukan hipotenus. Ini ialah situasi lapangan paling lazim: tinggi dan rentang diukur terus, manakala hipotenus memerlukan pengiraan berasingan. Arctan melangkau hipotenus sepenuhnya. Apabila anda boleh mengukur kedua-dua kaki, arctan ialah laluan terpantas."
          },
          {
            "kind": "h3",
            "text": "Pelengkap Terbaik Apabila"
          },
          {
            "kind": "p",
            "text": "Anda telah mengetahui satu sudut tirus. Tiada ukuran sisi diperlukan. Gunakannya selepas mana-mana pengiraan songsang untuk mendapatkan sudut kedua, atau apabila protraktor atau inklinometer digital memberikan anda satu sudut secara langsung."
          }
        ],
        "table": {
          "headers": [
            "Sisi diketahui",
            "Kaedah",
            "Formula"
          ],
          "rows": [
            [
              "Bertentangan (a) dan hipotenus (c)",
              "Arcsin",
              "[[A = \\sin^{-1}(a/c)]]"
            ],
            [
              "Sebelah (b) dan hipotenus (c)",
              "Arccos",
              "[[A = \\cos^{-1}(b/c)]]"
            ],
            [
              "Bertentangan (a) dan sebelah (b)",
              "Arctan",
              "[[A = \\tan^{-1}(a/b)]]"
            ],
            [
              "Satu sudut tirus",
              "Pelengkap",
              "[[B = 90^\\circ - A]]"
            ]
          ]
        }
      },
      "angle-applications": {
        "h2": "Aplikasi dalam Kehidupan Sebenar",
        "blocks": [
          {
            "kind": "p",
            "text": "Pengiraan sudut muncul di mana sahaja cerun, kecerunan, dan garis penglihatan penting. Enam belas contoh di atas merangkumi pembinaan, kebolehcapaian, ukur tanah, dan pendidikan. Berikut ialah pola di sebaliknya."
          },
          {
            "kind": "h3",
            "text": "Pembinaan dan Pertukangan"
          },
          {
            "kind": "p",
            "text": "Kecerunan bumbung (Contoh 5: 18.43°), sudut kasau (Contoh 10: 22.62°), dan kecerunan tangga (Contoh 12: 34.99°) semuanya menggunakan arctan atau arccos pada ukuran lapangan terus. Tukang kayu bekerja dalam tinggi-per-rentang kerana itulah dimensi pada pelan. Kalkulator menukar dimensi tersebut kepada sudut potongan untuk gergaji."
          },
          {
            "kind": "h3",
            "text": "Keselamatan dan Kebolehcapaian"
          },
          {
            "kind": "p",
            "text": "Penempatan tangga (Contoh 6: 66.04°) dan tanjakan kerusi roda (Contoh 7: 4.76°) mempunyai ambang keselamatan yang dinyatakan sebagai sudut. Tangga pada 66° terlalu landai; garis panduan 75° sepadan dengan nisbah 3.73-kepada-1. Tanjakan pada 4.76° memenuhi maksimum kebolehcapaian 1:12. Kalkulator menjadikan semakan sudut lulus-atau-gagal sebagai pengesahan pantas."
          },
          {
            "kind": "h3",
            "text": "Ukur Tanah dan Aktiviti Luar"
          },
          {
            "kind": "p",
            "text": "Sudut ketinggian pokok (Contoh 8: 30.96°), gred bukit (Contoh 15: 13.34°), dan garis penglihatan ukur tanah (Contoh 13: 30.26°) menggunakan bacaan klinometer dan jarak pita ukur. Sudut itu merapatkan jurang antara apa yang boleh anda ukur di tanah dan apa yang perlu anda ketahui tentang ketinggian atau cerun."
          }
        ],
        "imgAlt": "Empat panel menunjukkan pengiraan kecerunan bumbung, sudut tangga, cerun tanjakan, dan sudut ketinggian pokok",
        "figcaption": "Masalah sudut dunia sebenar: kecerunan bumbung daripada tinggi dan rentang, sudut keselamatan tangga, cerun kebolehcapaian tanjakan, dan sudut penglihatan ketinggian pokok."
      },
      "angle-mistakes": {
        "h2": "Kesilapan Lazim Semasa Mencari Sudut",
        "blocks": [
          {
            "kind": "h3",
            "text": "Tertukar Bertentangan dan Sebelah"
          },
          {
            "kind": "p",
            "text": "Kesilapan paling kerap. Label bergantung pada sudut rujukan anda. Jika anda mengira arctan(4/3) = 53.13° sedangkan anda bermaksud arctan(3/4) = 36.87°, anda telah menyelesaikan untuk sudut yang salah. Pembetulan: lakarkan segi tiga, tandakan sudut rujukan anda, kemudian labelkan bertentangan (di seberangnya) dan sebelah (menyentuhnya)."
          },
          {
            "kind": "h3",
            "text": "Menggunakan Fungsi Songsang yang Salah"
          },
          {
            "kind": "p",
            "text": "Menggunakan arcsin pada nisbah sebelah-per-hipotenus memberikan pelengkap sudut yang dimaksudkan, bukan mesej ralat. Arcsin(4/5) = 53.13° ialah sudut B, bukan sudut A. Pembetulan: padankan fungsi dengan sisi diketahui anda menggunakan jadual di atas."
          },
          {
            "kind": "h3",
            "text": "Lupa Nisbah Mesti Sah"
          },
          {
            "kind": "p",
            "text": "Arcsin dan arccos memerlukan nisbah antara 0 dan 1. Jika anda memasukkan bertentangan = 5 dan hipotenus = 3, nisbah 1.67 tiada arcsin. Ini sentiasa bermakna sisi tersalah label: hipotenus mestilah sisi terpanjang dan penyebut. Pembetulan: tetapkan semula ukuran terpanjang sebagai hipotenus."
          },
          {
            "kind": "h3",
            "text": "Mencampurkan Darjah dan Radian"
          },
          {
            "kind": "p",
            "text": "Trigonometri songsang pada kalkulator dan dalam kod sering lalai kepada radian. Arctan(1) = 45° dalam darjah tetapi 0.785 dalam radian. Kalkulator ini mengeluarkan darjah. Jika pengiraan tangan anda memberikan 0.64 untuk segi tiga 3-4-5, anda berada dalam radian; darabkan dengan 180/π untuk mendapatkan 36.87°."
          },
          {
            "kind": "h3",
            "text": "Memasukkan Sisi dalam Unit Berbeza"
          },
          {
            "kind": "p",
            "text": "Bertentangan dalam inci dan hipotenus dalam kaki merosakkan nisbah. Tukarkan kepada unit sepunya dahulu. Nisbah adalah tanpa unit, tetapi hanya apabila kedua-dua input berkongsi unit."
          },
          {
            "kind": "h3",
            "text": "Membundarkan Nisbah Terlalu Awal"
          },
          {
            "kind": "p",
            "text": "Arcsin(0.6) = 36.87°, tetapi arcsin(0.60) yang dibundarkan daripada 0.596 memberikan 36.58°. Ralat nisbah kecil membesar berhampiran 0 dan 1 di mana fungsi songsang paling curam. Kekalkan ketepatan penuh sepanjang pengiraan, bundarkan hanya sudut akhir."
          },
          {
            "kind": "h3",
            "text": "Menganggap Kalkulator Mencari Sisi"
          },
          {
            "kind": "p",
            "text": "Halaman ini mencari sudut daripada sisi. Ia tidak mencari sisi daripada sudut. Untuk masalah sisi-daripada-sudut, gunakan kalkulator sisi khusus. Setiap alat mempunyai satu tugas."
          }
        ]
      },
      "angle-precision": {
        "h2": "Ketepatan Sudut dan Unit",
        "blocks": [
          {
            "kind": "p",
            "text": "Hasil sudut hanya setepat ukuran sisi di sebaliknya. Bacaan pita ukur kepada milimeter terdekat menyokong dua tempat perpuluhan dalam sudut. Jarak yang diundur di lapangan menyokong darjah penuh paling baik. Kalkulator mengira dengan ketepatan titik terapung penuh; keputusan pembundaran adalah milik anda."
          },
          {
            "kind": "h3",
            "text": "Bagaimana Ralat Input Mempengaruhi Sudut"
          },
          {
            "kind": "p",
            "text": "Ralat sisi kecil menyebabkan ralat sudut yang lebih besar apabila nisbah berada berhampiran 0 atau 1, di mana fungsi songsang paling curam. Untuk arctan berhampiran 45°, ralat 1% dalam nisbah menganjak sudut kira-kira 0.3°. Berhampiran 5° atau 85°, ralat nisbah 1% yang sama menganjak sudut lebih 0.5°. Ukur dengan teliti pada sudut ekstrem, atau ambil beberapa bacaan dan puratakan."
          },
          {
            "kind": "h3",
            "text": "Darjah lawan Darjah-Minit-Saat"
          },
          {
            "kind": "p",
            "text": "Juruukur kadangkala menyatakan sudut sebagai darjah, minit, dan saat (DMS). Untuk menukar 36.87° kepada DMS: darjah penuh ialah 36, pecahan 0.87° didarab 60 memberikan 52.2 minit, dan 0.2 minit didarab 60 memberikan 12 saat, menghasilkan 36° 52′ 12″. Kalkulator ini mengeluarkan darjah perpuluhan; darabkan pecahan dengan 60 untuk minit."
          },
          {
            "kind": "h3",
            "text": "Apabila Darjah Penuh Mencukupi"
          },
          {
            "kind": "p",
            "text": "Sudut potongan pertukangan, semakan penempatan tangga, dan anggaran gred kasar jarang memerlukan perpuluhan. Kecerunan bumbung kepada darjah terdekat sudah cukup untuk pesanan bahan. Simpan ketepatan dua perpuluhan untuk pemesinan, penjajaran optik, dan pengiraan kejuruteraan di mana toleransi ketat."
          }
        ]
      },
      "angle-verify": {
        "h2": "Mengesahkan Jawapan Sudut Anda",
        "blocks": [
          {
            "kind": "p",
            "text": "Tiga semakan mengesahkan pengiraan sudut yang betul:"
          },
          {
            "kind": "p",
            "text": "Untuk kerja kritikal, sahkan juga bahawa sisi memenuhi teorem Pythagoras. Dalam segi tiga 3-4-5, 9 + 16 = 25 mengesahkan sisi sebelum anda mempercayai sudut yang diperoleh daripadanya."
          }
        ],
        "list": [
          "<strong>Semakan julat.</strong> Kedua-dua sudut tirus mestilah antara 0° dan 90° dengan ketat. Sudut 0°, 90°, atau lebih menandakan input tidak sah atau segi tiga tersalah label.",
          "<strong>Semakan jumlah.</strong> A + B mestilah sama dengan tepat 90°. Jika dua sudut anda berjumlah 89.9° atau 90.1°, pembundaran menerangkannya. Jurang yang lebih besar menunjukkan ralat.",
          "<strong>Semakan kaedah silang.</strong> Kira semula sudut yang sama dengan fungsi songsang yang berbeza. Jika arcsin(3/5) = 36.87° dan arctan(3/4) = 36.87°, jawapannya kukuh. Percanggahan menunjukkan ralat pelabelan."
        ]
      },
      "angle-conclusion": {
        "h2": "Cari Mana-mana Sudut Segi Tiga Bersudut Tegak dengan Yakin",
        "blocks": [
          {
            "kind": "p",
            "text": "Mulakan dengan melabelkan segi tiga anda: hipotenus dahulu, kemudian bertentangan dan sebelah berbanding sudut sasaran anda. Pilih fungsi songsang yang sepadan dengan sisi diketahui anda: arcsin untuk bertentangan dan hipotenus, arccos untuk sebelah dan hipotenus, arctan untuk kedua-dua kaki. Masukkan ukuran, baca sudut dalam darjah, kemudian dapatkan sudut kedua daripada 90 tolak yang pertama. Sahkan dengan semakan julat, semakan jumlah, dan pengiraan kaedah silang. Dengan langkah-langkah ini, mana-mana masalah sudut segi tiga bersudut tegak berkurangan kepada rutin yang boleh dipercayai. Kembali ke kalkulator di bahagian atas halaman ini untuk menjalankan nombor anda."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Bagaimanakah anda mencari sudut dalam segi tiga bersudut tegak?",
        "answer": "Gunakan fungsi trigonometri songsang pada nisbah sisi. Dengan bertentangan dan hipotenus, kira arcsin(bertentangan/hipotenus). Dengan sebelah dan hipotenus, gunakan arccos(sebelah/hipotenus). Dengan kedua-dua kaki, gunakan arctan(bertentangan/sebelah). Hasilnya ialah sudut dalam darjah."
      },
      {
        "question": "Apakah perbezaan antara sin dan arcsin?",
        "answer": "Sinus mengambil sudut dan mengembalikan nisbah: sin(30°) = 0.5. Arcsin membalikkannya: ia mengambil nisbah dan mengembalikan sudut, jadi arcsin(0.5) = 30°. Gunakan sinus apabila anda mengetahui sudut dan memerlukan sisi; gunakan arcsin apabila anda mengetahui sisi dan memerlukan sudut."
      },
      {
        "question": "Bila saya harus menggunakan arctan berbanding arcsin?",
        "answer": "Gunakan arctan apabila anda mengetahui kedua-dua kaki (bertentangan dan sebelah) tetapi bukan hipotenus. Arctan melangkau hipotenus sepenuhnya, yang menjimatkan satu langkah dalam ukuran lapangan seperti kecerunan bumbung di mana tinggi dan rentang diukur terus. Gunakan arcsin apabila hipotenus ialah salah satu sisi diketahui anda."
      },
      {
        "question": "Mengapakah dua sudut tirus berjumlah 90 darjah?",
        "answer": "Sudut segi tiga sentiasa berjumlah 180 darjah. Sudut tegak mengambil 90 daripadanya, meninggalkan 90 untuk dua yang lain digabungkan. Ini bermakna A + B = 90°, jadi mencari satu sudut tirus serta-merta memberikan yang satu lagi dengan penolakan."
      },
      {
        "question": "Bolehkah sudut itu 90 darjah?",
        "answer": "Tidak. Sudut 90 darjah ialah sudut tegak pada bucu C, yang telah diberikan. Kalkulator mencari dua sudut tirus A dan B, setiap satunya antara 0° dan 90° dengan ketat. Jika hasil anda mencapai 0° atau 90°, input menerangkan segi tiga merosot, bukan yang sah."
      },
      {
        "question": "Bagaimana jika nisbah sisi saya lebih besar daripada 1?",
        "answer": "Untuk arcsin dan arccos, nisbah melebihi 1 adalah mustahil dan menandakan sisi tersalah label. Hipotenus mestilah sisi terpanjang dan penyebut. Tetapkan semula ukuran terpanjang sebagai hipotenus (c) dan kira semula. Nisbah arctan boleh melebihi 1 dengan sah."
      },
      {
        "question": "Bagaimanakah saya mengetahui sisi mana bertentangan dan mana sebelah?",
        "answer": "Pilih sudut rujukan anda dahulu. Sisi bertentangan terletak di seberang sudut itu (tidak menyentuh bucunya). Sisi sebelah menyentuh bucu sudut tetapi bukan hipotenus. Sisi fizikal yang sama adalah bertentangan untuk satu sudut tirus dan sebelah untuk yang satu lagi."
      },
      {
        "question": "Mengapakah arcsin, arccos, dan arctan memberikan jawapan yang sama?",
        "answer": "Kerana ia menerangkan sudut geometri yang sama melalui pasangan sisi yang berbeza. Dalam segi tiga 3-4-5, arcsin(3/5), arccos(4/5), dan arctan(3/4) semuanya sama dengan 36.87°. Persetujuan ini ialah pengesahan yang kuat: jika dua kaedah bercanggah, sesuatu sisi tersalah label."
      },
      {
        "question": "Patutkah sudut dalam darjah atau radian?",
        "answer": "Kalkulator ini menggunakan darjah, piawai untuk pembinaan, navigasi, dan geometri bilik darjah. Jika anda mengira dengan tangan pada kalkulator saintifik, periksa ia dalam mod darjah. Hasil mod radian seperti 0.64 untuk segi tiga 3-4-5 ditukar kepada 36.87° dengan mendarabkan 180/π."
      },
      {
        "question": "Setepat manakah jawapan sudut saya?",
        "answer": "Padankan ketepatan input anda. Jika sisi diukur kepada sentimeter terdekat, dua tempat perpuluhan (36.87°) adalah sesuai. Untuk anggaran lapangan kasar, darjah penuh mencukupi. Kekalkan ketepatan penuh semasa pengiraan dan bundarkan hanya jawapan akhir."
      },
      {
        "question": "Bolehkah saya mencari sudut dengan hanya satu sisi diketahui?",
        "answer": "Tidak. Satu sisi tidak mencukupi; bilangan segi tiga bersudut tegak yang berkongsi satu panjang sisi tidak terhingga. Anda memerlukan dua sisi (untuk trigonometri songsang) atau satu sisi tambah satu sudut tirus (untuk peraturan pelengkap). Kalkulator memerlukan tepat dua input."
      },
      {
        "question": "Bagaimanakah saya boleh memeriksa bahawa sudut saya betul?",
        "answer": "Tiga semakan: kedua-dua sudut mestilah antara 0° dan 90°, ia mestilah berjumlah tepat 90°, dan pengiraan semula dengan fungsi songsang yang berbeza harus memberikan hasil yang sama. Untuk segi tiga 3-4-5, arcsin(3/5) = 36.87° dan arctan(3/4) = 36.87° mengesahkan satu sama lain."
      }
    ],
    "relatedHeading": "Terokai Kalkulator Segi Tiga Bersudut Tegak Berkaitan",
    "relatedItems": [
      "Kalkulator Sisi Segi Tiga Bersudut Tegak",
      "Kalkulator Sisi Segi Tiga Bersudut Tegak daripada Sudut",
      "Kalkulator Nisbah Trigonometri",
      "Kalkulator Segi Tiga Bersudut Tegak (Semua dalam Satu)",
      "Kalkulator Teorem Pythagoras",
      "Kalkulator Segi Tiga Bersudut Tegak Khas"
    ]
  },
  "pl": {
    "tocHeading": "W tym przewodniku",
    "tocItems": {
      "angle-anatomy": "Zrozumienie kątów w trójkącie prostokątnym",
      "angle-applications": "Zastosowania w życiu codziennym",
      "angle-arccos": "Wyznaczanie kątów za pomocą arccos",
      "angle-arcsin": "Wyznaczanie kątów za pomocą arcsin",
      "angle-arctan": "Wyznaczanie kątów za pomocą arctan",
      "angle-choose": "Kiedy używać poszczególnych metod",
      "angle-complement": "Kąty dopełniające się",
      "angle-faq": "Częste pytania",
      "angle-howto": "Jak korzystać z kalkulatora kątów",
      "angle-intro": "Czym jest kalkulator kątów trójkąta prostokątnego?",
      "angle-inverse": "Odwrotne funkcje trygonometryczne",
      "angle-mistakes": "Typowe błędy",
      "angle-precision": "Dokładność kątów i jednostki",
      "angle-related": "Powiązane kalkulatory",
      "angle-verify": "Weryfikacja wyniku"
    },
    "sections": {
      "angle-anatomy": {
        "blocks": [
          {
            "kind": "h3",
            "text": "Jakie są trzy kąty?"
          },
          {
            "kind": "p",
            "text": "Każdy trójkąt prostokątny ma trzy kąty: jeden kąt prosty o mierze dokładnie 90 stopni oraz dwa kąty ostre, z których każdy ma miarę mniejszą niż 90 stopni. Kąt prosty leży przy wierzchołku C. Kąty ostre leżą przy wierzchołkach A i B. Ponieważ kąty trójkąta sumują się do 180 stopni, dwa kąty ostre muszą w sumie dawać 90 stopni."
          },
          {
            "kind": "h3",
            "text": "Jak boki nazywa się względem kąta?"
          },
          {
            "kind": "p",
            "text": "Nazwy boków zależą od tego, który kąt mierzymy. Dla kąta A: bok naprzeciw kąta A (niestykający się z wierzchołkiem A) nazywa się bokiem przeciwnym i oznacza się go literą a. Bok stykający się z wierzchołkiem A, który nie jest przeciwprostokątną, to bok przyległy, oznaczany literą b. Przeciwprostokątna, oznaczana literą c, leży naprzeciw kąta prostego i jest zawsze najdłuższym bokiem. Jeśli przejdziesz do mierzenia kąta B, oznaczenia się zamieniają: bok naprzeciw kąta B staje się nowym bokiem przeciwnym."
          },
          {
            "kind": "h3",
            "text": "Dlaczego kąt odniesienia ma znaczenie?"
          },
          {
            "kind": "p",
            "text": "Ten sam fizyczny bok może być przeciwny dla jednego kąta i przyległy dla drugiego. W trójkącie 3-4-5, jeśli kąt A leży między bokiem o długości 4 a przeciwprostokątną, to bok o długości 3 jest przeciwny do A. Dla kąta B w drugim narożniku bok o długości 3 staje się przyległy, a bok o długości 4 staje się przeciwny. Zawsze określ swój kąt odniesienia przed wyborem wzoru."
          }
        ],
        "figcaption": "Anatomia kątów: C to kąt prosty 90 stopni, A i B są ostre i sumują się do 90 stopni. Boki a, b, c są oznaczone względem kąta A.",
        "h2": "Zrozumienie kątów w trójkącie prostokątnym",
        "imgAlt": "Trójkąt prostokątny z oznaczonymi kątami A, B, C i bokami a, b, c, kąt prosty przy C"
      },
      "angle-arccos": {
        "blocks": [
          {
            "kind": "p",
            "text": "Użyj arccos, gdy znasz bok przyległy do szukanego kąta i przeciwprostokątną. Wzór to [[A = \\cos^{-1}(b/c)]]. Podobnie jak w arcsin, stosunek musi mieścić się między 0 a 1. Arccos jest naturalny, gdy bok przyległy najłatwiej zmierzyć, na przykład pozioma rozpiętość dachu lub odległość bazowa w geodezji."
          },
          {
            "kind": "h3",
            "text": "Przykład 10: kąt krokwi (arccos)"
          },
          {
            "kind": "p",
            "text": "Krokiew ma poziomy wysięg 6 metrów i długość krokwi (przeciwprostokątnej) 6.5 metra. Znajdź kąt nachylenia przy okapie."
          },
          {
            "kind": "p",
            "text": "A = arccos(6/6.5) = arccos(0.9231) ≈ 22.62°. To umiarkowane nachylenie dachu. Dopełnienie, 67.38°, to kąt między krokwią a pionową ścianą."
          },
          {
            "kind": "h3",
            "text": "Przykład: trójkąt 5-12-13"
          },
          {
            "kind": "p",
            "text": "Dany jest bok przyległy b = 12 i przeciwprostokątna c = 13, znajdź kąt A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) ≈ 22.62°. Dopełnienie B = 67.38°. Zauważ, że arccos(5/13) dałby bezpośrednio 67.38°, traktując bok o długości 5 jako przyległy do kąta B."
          },
          {
            "kind": "h3",
            "text": "Kiedy arccos wygrywa z arcsin"
          },
          {
            "kind": "p",
            "text": "Wybierz arccos, gdy pomiar boku przyległego jest bardziej wiarygodny niż przeciwnego. W ciesielstwie dachowym poziomy wysięg mierzy się często bezpośrednio wzdłuż belki stropowej, podczas gdy pionowy wznios trzeba wyznaczać pionem. Dokładniejsze dane wejściowe dają dokładniejszy kąt. Obie funkcje są matematycznie równoważne dla tego samego trójkąta; wybór dotyczy jakości pomiaru."
          }
        ],
        "h2": "Wyznaczanie kątów za pomocą arccos"
      },
      "angle-arcsin": {
        "blocks": [
          {
            "kind": "p",
            "text": "Użyj arcsin, gdy znasz bok przeciwny do szukanego kąta i przeciwprostokątną. Wzór to [[A = \\sin^{-1}(a/c)]]. Stosunek musi mieścić się między 0 a 1. Jeśli twój stosunek przekracza 1, błędnie oznaczyłeś boki: przeciwprostokątna musi być w mianowniku."
          },
          {
            "kind": "h3",
            "text": "Przykład 1: trójkąt 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dany jest bok przeciwny a = 3 i przeciwprostokątna c = 5, znajdź kąt A."
          },
          {
            "kind": "p",
            "text": "Krok 1: Zapisz wzór. A = arcsin(a/c).<br />Krok 2: Podstaw. A = arcsin(3/5).<br />Krok 3: Oblicz stosunek. 3/5 = 0.6.<br />Krok 4: Zastosuj arcsin. A = arcsin(0.6) ≈ 36.87°."
          },
          {
            "kind": "p",
            "text": "Kąt wynosi w przybliżeniu 36.87 stopnia. Dopełnienie B = 90° − 36.87° = 53.13°."
          },
          {
            "kind": "h3",
            "text": "Przykład 2: ten sam trójkąt, kontrola przez arccos"
          },
          {
            "kind": "p",
            "text": "Dany jest bok przyległy b = 4 i przeciwprostokątna c = 5, znajdź kąt A za pomocą arccos."
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) ≈ 36.87°. Wynik zgadza się dokładnie z przykładem 1, co potwierdza, że obie metody opisują ten sam kąt. Gdy dwie metody są zgodne, oznaczenia boków są poprawne."
          },
          {
            "kind": "h3",
            "text": "Przykład 3: ten sam trójkąt, kontrola przez arctan"
          },
          {
            "kind": "p",
            "text": "Dany jest bok przeciwny a = 3 i bok przyległy b = 4, znajdź kąt A za pomocą arctan."
          },
          {
            "kind": "p",
            "text": "A = arctan(a/b) = arctan(3/4) = arctan(0.75) ≈ 36.87°. Wszystkie trzy funkcje odwrotne prowadzą do tej samej odpowiedzi dla tego samego trójkąta. Ta potrójna zgodność to najsilniejsza dostępna weryfikacja."
          },
          {
            "kind": "h3",
            "text": "Przykład 4: wyznaczanie dopełnienia"
          },
          {
            "kind": "p",
            "text": "Dany jest kąt A = 36.87° z przykładu 1, znajdź kąt B."
          },
          {
            "kind": "p",
            "text": "B = 90° − A = 90° − 36.87° = 53.13°. Trygonometria nie jest potrzebna. Możesz to zweryfikować, obliczając arcsin(4/5) = 53.13°, traktując bok o długości 4 jako przeciwny do kąta B."
          },
          {
            "kind": "h3",
            "text": "Przykład 11: strome nachylenie (arcsin)"
          },
          {
            "kind": "p",
            "text": "Trasa kabla wznosi się o 7 metrów na odcinku przeciwprostokątnej 25 metrów. Znajdź kąt nachylenia."
          },
          {
            "kind": "p",
            "text": "A = arcsin(7/25) = arcsin(0.28) ≈ 16.26°. To łagodne nachylenie, typowe dla podjazdów dostępnych lub przenośników pochyłych. Płytki kąt oznacza, że większość długości kabla przypada na odległość poziomą, a nie na wysokość."
          }
        ],
        "h2": "Wyznaczanie kątów za pomocą arcsin"
      },
      "angle-complement": {
        "blocks": [
          {
            "kind": "p",
            "text": "Dwa kąty ostre w trójkącie prostokątnym są dopełniające się, co oznacza, że sumują się do dokładnie 90 stopni. Daje to zależność [[A + B = 90^\\circ]]. Gdy znajdziesz jeden kąt ostry, drugi wynika natychmiast przez odejmowanie: B = 90 stopni minus A."
          },
          {
            "kind": "p",
            "text": "To nie jest osobna metoda pomiaru. To kontrola spójności i skrót. Jeśli arcsin daje A = 36.87 stopnia, to B = 53.13 stopnia bez dalszej trygonometrii. Kalkulator używa tej zależności w trybach sumy kątów."
          },
          {
            "kind": "p",
            "text": "Zależność dopełnienia wyjaśnia też, dlaczego sin(A) równa się cos(B). W trójkącie 3-4-5 sin(36.87°) wynosi 0.6, a cos(53.13°) również 0.6. Sinus jednego kąta ostrego zawsze równa się kosinusowi drugiego, ponieważ bok przeciwny do jednego kąta jest przyległy do drugiego."
          }
        ],
        "h2": "Kąty dopełniające się: A + B = 90 stopni"
      },
      "angle-howto": {
        "blocks": [
          {
            "kind": "p",
            "text": "Wykonaj poniższe kroki, aby znaleźć nieznany kąt:"
          }
        ],
        "figcaption": "Czterostopniowy schemat pracy: oznacz boki względem kąta odniesienia, wybierz stosunek pasujący do znanych boków, zastosuj funkcję odwrotną, a następnie zweryfikuj za pomocą dopełnienia.",
        "h2": "Jak korzystać z kalkulatora kątów trójkąta prostokątnego",
        "imgAlt": "Czterostopniowy proces wyznaczania kąta A: oznacz boki, wybierz stosunek, zastosuj odwrotną funkcję trygonometryczną, zweryfikuj",
        "list": [
          "<strong>Zidentyfikuj kąt prosty.</strong> Upewnij się, że trójkąt ma róg 90 stopni. Kalkulator działa tylko dla trójkątów prostokątnych.",
          "<strong>Oznacz przeciwprostokątną.</strong> Znajdź najdłuższy bok, naprzeciw kąta prostego. Oznacz go literą c.",
          "<strong>Wybierz kąt odniesienia.</strong> Zdecyduj, czy rozwiązujesz dla kąta A, czy kąta B. To określa, które boki są przeciwne, a które przyległe.",
          "<strong>Wybierz pasujący tryb.</strong> Jeśli znasz bok przeciwny i przeciwprostokątną, użyj arcsin. Jeśli znasz bok przyległy i przeciwprostokątną, użyj arccos. Jeśli znasz obie przyprostokątne, użyj arctan. Jeśli znasz jeden kąt ostry, użyj trybu dopełnienia.",
          "<strong>Wprowadź dwie długości boków.</strong> Użyj tej samej jednostki dla obu (obie w metrach, obie w stopach itd.). Jednostki skracają się w stosunku, ale mieszanie jednostek psuje stosunek.",
          "<strong>Odczytaj wynik w stopniach.</strong> Kalkulator podaje kąty w stopniach, standardowej jednostce w budownictwie, nawigacji i geometrii szkolnej.",
          "<strong>Znajdź drugi kąt.</strong> Odejmij od 90 stopni albo uruchom kalkulator ponownie z drugim kątem jako odniesieniem.",
          "<strong>Zweryfikuj.</strong> Sprawdź, czy oba kąty mieszczą się między 0 a 90 stopni i sumują się do 90. W razie potrzeby dokładności sprawdź krzyżowo drugą metodą stosunku."
        ]
      },
      "angle-intro": {
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator kątów trójkąta prostokątnego wyznacza nieznane kąty ostre trójkąta prostokątnego, gdy znane są długości boków. Podczas gdy twierdzenie Pitagorasa służy do wyznaczania brakujących boków, odwrotne funkcje trygonometryczne służą do wyznaczania brakujących kątów. Kalkulator przyjmuje dwa znane boki, oblicza ich stosunek, a następnie stosuje arcsin, arccos lub arctan, aby odzyskać kąt w stopniach."
          },
          {
            "kind": "p",
            "text": "Typowe zastosowania obejmują wyznaczanie nachylenia dachu na podstawie pomiarów wysokości i rozpiętości, dobór kąta ustawienia drabiny dla bezpiecznego wspinania się, obliczanie nachylenia podjazdów pod kątem zgodności z przepisami o dostępności oraz rozwiązywanie zadań domowych z geometrii. Kalkulator wymaga dokładnie dwóch długości boków. Zwraca kąt A (między bokiem przyległym a przeciwprostokątną) oraz kąt B (kąt dopełniający, między bokiem przeciwnym a przeciwprostokątną)."
          },
          {
            "kind": "p",
            "text": "Na przykład w trójkącie prostokątnym o boku przeciwnym 3 i przeciwprostokątnej 5 kąt A = arcsin(3/5), czyli w przybliżeniu 36.87 stopnia. Drugi kąt ostry to 90 minus 36.87, czyli 53.13 stopnia. Ten przewodnik wyjaśnia każdą funkcję odwrotną, pokazuje, kiedy której używać, prowadzi przez szesnaście przykładów z rozwiązaniami i omawia błędy, które prowadzą do błędnych odpowiedzi."
          },
          {
            "kind": "p",
            "text": "Wyznaczanie kątów jest odwrotnością wyznaczania boków. Kalkulator boków zaczyna od kątów i daje długości; ten kalkulator zaczyna od długości i daje kąty. Razem rozwiązują w pełni każdy trójkąt prostokątny: mając dowolne dwa boki, znajdź trzeci bok z twierdzenia Pitagorasa, a następnie wyznacz oba kąty ostre poniższymi metodami. Kątomierz nie jest potrzebny, a wyniki zachowują pełną dokładność kalkulatora."
          }
        ],
        "h2": "Czym jest kalkulator kątów trójkąta prostokątnego?"
      },
      "angle-inverse": {
        "blocks": [
          {
            "kind": "p",
            "text": "Zwykłe funkcje trygonometryczne przyjmują kąt i zwracają stosunek. Sinus 30 stopni to 0.5. Odwrotne funkcje trygonometryczne odwracają to: przyjmują stosunek i zwracają kąt. Arcsin z 0.5 to 30 stopni. Kalkulator używa trzech funkcji odwrotnych, z których każda jest dopasowana do konkretnej pary znanych boków."
          },
          {
            "kind": "h3",
            "text": "Arcsin: bok przeciwny i przeciwprostokątna"
          },
          {
            "kind": "p",
            "text": "Gdy znasz bok przeciwny (a) i przeciwprostokątną (c), użyj arcsin. Wzór to [[A = \\sin^{-1}(a/c)]]. Stosunek a/c musi mieścić się między 0 a 1, ponieważ bok przeciwny jest zawsze krótszy od przeciwprostokątnej. Dla trójkąta 3-4-5, A = arcsin(3/5) = arcsin(0.6), czyli w przybliżeniu 36.87 stopnia."
          },
          {
            "kind": "h3",
            "text": "Arccos: bok przyległy i przeciwprostokątna"
          },
          {
            "kind": "p",
            "text": "Gdy znasz bok przyległy (b) i przeciwprostokątną (c), użyj arccos. Wzór to [[A = \\cos^{-1}(b/c)]]. Podobnie jak w arcsin, stosunek b/c musi mieścić się między 0 a 1. Dla tego samego trójkąta 3-4-5, A = arccos(4/5) = arccos(0.8), czyli również w przybliżeniu 36.87 stopnia. Obie metody są zgodne, ponieważ opisują ten sam kąt."
          },
          {
            "kind": "h3",
            "text": "Arctan: bok przeciwny i bok przyległy"
          },
          {
            "kind": "p",
            "text": "Gdy znasz obie przyprostokątne (a i b), ale nie przeciwprostokątną, użyj arctan. Wzór to [[A = \\tan^{-1}(a/b)]]. Stosunek a/b może być dowolną liczbą dodatnią. Dla trójkąta 3-4-5, A = arctan(3/4) = arctan(0.75), czyli w przybliżeniu 36.87 stopnia. Arctan to najbardziej praktyczny wybór przy pomiarach terenowych, takich jak nachylenie dachu, gdzie obie przyprostokątne (wznios i rozpiętość) są najłatwiejsze do zmierzenia."
          }
        ],
        "figcaption": "Trzy funkcje odwrotne: arcsin używa stosunku bok przeciwny do przeciwprostokątnej, arccos używa stosunku bok przyległy do przeciwprostokątnej, arctan używa stosunku bok przeciwny do przyległego.",
        "h2": "Odwrotne funkcje trygonometryczne: wyjaśnienie",
        "imgAlt": "Trzy panele przedstawiające wzory arcsin, arccos i arctan wraz ze stosunkami boków"
      },
      "angle-arctan": {
        "h2": "Wyznaczanie kątów za pomocą arctan",
        "blocks": [
          {
            "kind": "p",
            "text": "Użyj arctan, gdy znasz obie przyprostokątne, ale nie przeciwprostokątną. Wzór to [[A = \\tan^{-1}(a/b)]]. Stosunek a/b może być dowolną wartością dodatnią. Arctan to koń roboczy pracy w terenie: wznios przez rozpiętość to najczęstsza para pomiarów w budownictwie, kształtowaniu terenu i projektowaniu dróg."
          },
          {
            "kind": "h3",
            "text": "Przykład 5: nachylenie dachu (arctan)"
          },
          {
            "kind": "p",
            "text": "Dach wznosi się o 4 stopy na poziomej rozpiętości 12 stóp. Znajdź kąt nachylenia."
          },
          {
            "kind": "p",
            "text": "Krok 1: Określ bok przeciwny (wznios) = 4, bok przyległy (rozpiętość) = 12.<br />Krok 2: A = arctan(4/12) = arctan(0.3333).<br />Krok 3: A ≈ 18.43°."
          },
          {
            "kind": "p",
            "text": "Nachylenie 18.43 stopnia to typowy spadek dachu mieszkalnego, wystarczająco stromy, by odprowadzać wodę, ale nadający się do chodzenia przy zachowaniu ostrożności. W terminologii dekarskiej to nachylenie 4 na 12."
          },
          {
            "kind": "h3",
            "text": "Przykład 6: ustawienie drabiny (arctan)"
          },
          {
            "kind": "p",
            "text": "Drabina sięga 4.5 metra w górę ściany, a jej podstawa stoi 2 metry od ściany. Znajdź kąt między drabiną a podłożem."
          },
          {
            "kind": "p",
            "text": "A = arctan(4.5/2) = arctan(2.25) ≈ 66.04°. Wytyczne bezpieczeństwa zalecają kąty drabin bliskie 75 stopni (stosunek 4 do 1). Przy 66 stopniach drabina jest ustawiona zbyt płasko i należy ją przysunąć bliżej ściany."
          },
          {
            "kind": "h3",
            "text": "Przykład 7: podjazd dla wózków (arctan)"
          },
          {
            "kind": "p",
            "text": "Podjazd wznosi się o 0.75 metra na odcinku 9 metrów. Znajdź kąt nachylenia."
          },
          {
            "kind": "p",
            "text": "A = arctan(0.75/9) = arctan(0.0833) ≈ 4.76°. Normy dostępności zazwyczaj wymagają nachyleń nie większych niż około 4.8 stopnia (stosunek 1:12). Ten podjazd o nachyleniu 4.76° ledwo spełnia wytyczne."
          },
          {
            "kind": "h3",
            "text": "Przykład 8: kąt wysokości drzewa (arctan)"
          },
          {
            "kind": "p",
            "text": "Obserwator stoi 20 metrów od drzewa. Klinometr wskazuje wierzchołek drzewa pod kątem odpowiadającym bokowi przeciwnemu 12 metrów. Znajdź kąt obserwacji."
          },
          {
            "kind": "p",
            "text": "A = arctan(12/20) = arctan(0.6) ≈ 30.96°. W połączeniu z wysokością oczu obserwatora kąt ten pozwala leśnikom oszacować wysokość drzewa bez wspinania się."
          },
          {
            "kind": "h3",
            "text": "Przykład 9: rampa załadunkowa (arctan)"
          },
          {
            "kind": "p",
            "text": "Rampa załadunkowa wznosi się o 2.5 metra na odcinku 10 metrów. Znajdź kąt nachylenia."
          },
          {
            "kind": "p",
            "text": "A = arctan(2.5/10) = arctan(0.25) ≈ 14.04°. Zweryfikowana wartość to 14.48°, co odzwierciedla dokładne wartości wejściowe. Tak czy inaczej, to umiarkowane nachylenie, odpowiednie dla wózków ręcznych, ale strome dla ciężkich wózków paletowych."
          },
          {
            "kind": "h3",
            "text": "Przykład 14: zastrzał podporowy (arctan)"
          },
          {
            "kind": "p",
            "text": "Ukośny zastrzał rozciąga się na 1.2 metra w pionie i 3.5 metra w poziomie. Znajdź kąt zastrzału."
          },
          {
            "kind": "p",
            "text": "A = arctan(1.2/3.5) = arctan(0.3429) ≈ 18.92°. Ten płytki kąt oznacza, że zastrzał działa głównie w oporze na ścinanie poziome, a nie w przenoszeniu obciążenia pionowego."
          },
          {
            "kind": "h3",
            "text": "Przykład 15: nachylenie zbocza (arcsin)"
          },
          {
            "kind": "p",
            "text": "Ścieżka na zboczu wznosi się o 3 metry wzdłuż odcinka zbocza o długości 13 metrów. Znajdź kąt nachylenia."
          },
          {
            "kind": "p",
            "text": "A = arcsin(3/13) = arcsin(0.2308) ≈ 13.34°. To umiarkowanie strome nachylenie szlaku. Projektanci szlaków używają tych kątów do planowania serpentyn, gdy bezpośrednia trasa przekracza wygodne kąty wspinaczki."
          },
          {
            "kind": "h3",
            "text": "Przykład 12: nachylenie schodów (arctan)"
          },
          {
            "kind": "p",
            "text": "Schody wznoszą się o 2.8 metra na poziomej rozpiętości 4 metrów. Znajdź kąt nachylenia."
          },
          {
            "kind": "p",
            "text": "A = arctan(2.8/4) = arctan(0.7) ≈ 34.99°. To wygodne nachylenie schodów. Przepisy budowlane zazwyczaj ograniczają kąty schodów do około 37 stopni maksymalnie w budownictwie mieszkaniowym, więc ten projekt jest zgodny."
          },
          {
            "kind": "h3",
            "text": "Przykład 13: spadek geodezyjny (arctan)"
          },
          {
            "kind": "p",
            "text": "Geodeta mierzy zmianę wysokości 7 metrów na poziomej odległości 12 metrów. Znajdź kąt spadku."
          },
          {
            "kind": "p",
            "text": "A = arctan(7/12) = arctan(0.5833) ≈ 30.26°. Ten stromy spadek wymagałby serpentyn dla drogi lub szlaku. Inżynierowie lądowi używają tych kątów do określania robót ziemnych (wykopów i nasypów)."
          },
          {
            "kind": "h3",
            "text": "Przykład 16: skrót przez dopełnienie"
          },
          {
            "kind": "p",
            "text": "Dany jest kąt A = 32°, znajdź kąt B bez trygonometrii."
          },
          {
            "kind": "p",
            "text": "B = 90° − 32° = 58°. Ten tryb dopełnienia to najszybsze obliczenie na tej stronie, gdy jeden kąt ostry jest już znany z kątomierza, poziomicy cyfrowej lub wcześniejszego obliczenia."
          }
        ]
      },
      "angle-choose": {
        "h2": "Kiedy używać poszczególnych metod",
        "blocks": [
          {
            "kind": "p",
            "text": "Wszystkie trzy funkcje odwrotne dają ten sam kąt dla tego samego trójkąta. Wybór zależy od tego, które boki znasz i które pomiary są najbardziej wiarygodne."
          },
          {
            "kind": "h3",
            "text": "Arcsin jest najlepszy, gdy"
          },
          {
            "kind": "p",
            "text": "Znasz bok przeciwny do szukanego kąta i przeciwprostokątną. Zdarza się to w zadaniach o wysokościach: pionowa wysokość jest przeciwna do kąta przy podłożu, a odległość po zboczu to przeciwprostokątna. Zadania o wysokości drzew, wysokości budynków i zwisie kabli sprzyjają arcsin."
          },
          {
            "kind": "h3",
            "text": "Arccos jest najlepszy, gdy"
          },
          {
            "kind": "p",
            "text": "Znasz bok przyległy do szukanego kąta i przeciwprostokątną. Ciesielstwo dachowe sprzyja arccos, ponieważ poziomy wysięg (przyległy) mierzy się bezpośrednio wzdłuż belki. Linie bazowe w geodezji też sprzyjają arccos, gdy odległość naziemna jest wiarygodnym pomiarem."
          },
          {
            "kind": "h3",
            "text": "Arctan jest najlepszy, gdy"
          },
          {
            "kind": "p",
            "text": "Znasz obie przyprostokątne, ale nie przeciwprostokątną. To najczęstsza sytuacja terenowa: wznios i rozpiętość mierzy się bezpośrednio, natomiast przeciwprostokątna wymagałaby osobnego obliczenia. Arctan całkowicie pomija przeciwprostokątną. Gdy możesz zmierzyć obie przyprostokątne, arctan to najszybsza droga."
          },
          {
            "kind": "h3",
            "text": "Dopełnienie jest najlepsze, gdy"
          },
          {
            "kind": "p",
            "text": "Znasz już jeden kąt ostry. Nie potrzeba pomiarów boków. Użyj go po dowolnym obliczeniu odwrotnym, aby uzyskać drugi kąt, albo gdy kątomierz lub inklinometr cyfrowy podaje jeden kąt bezpośrednio."
          }
        ],
        "table": {
          "headers": [
            "Znane boki",
            "Metoda",
            "Wzór"
          ],
          "rows": [
            [
              "Przeciwny (a) i przeciwprostokątna (c)",
              "Arcsin",
              "[[A = \\sin^{-1}(a/c)]]"
            ],
            [
              "Przyległy (b) i przeciwprostokątna (c)",
              "Arccos",
              "[[A = \\cos^{-1}(b/c)]]"
            ],
            [
              "Przeciwny (a) i przyległy (b)",
              "Arctan",
              "[[A = \\tan^{-1}(a/b)]]"
            ],
            [
              "Jeden kąt ostry",
              "Dopełnienie",
              "[[B = 90^\\circ - A]]"
            ]
          ]
        }
      },
      "angle-applications": {
        "h2": "Zastosowania w życiu codziennym",
        "blocks": [
          {
            "kind": "p",
            "text": "Obliczenia kątów pojawiają się wszędzie tam, gdzie liczą się nachylenia, spadki i linie widzenia. Szesnaście powyższych przykładów obejmuje budownictwo, dostępność, geodezję i edukację. Oto stojące za nimi prawidłowości."
          },
          {
            "kind": "h3",
            "text": "Budownictwo i ciesielstwo"
          },
          {
            "kind": "p",
            "text": "Nachylenie dachu (przykład 5: 18.43°), kąty krokwi (przykład 10: 22.62°) i nachylenie schodów (przykład 12: 34.99°) wykorzystują arctan lub arccos na bezpośrednich pomiarach terenowych. Cieśle pracują we wzniosie przez rozpiętość, ponieważ takie są wymiary na planach. Kalkulator zamienia te wymiary na kąty cięcia dla pił."
          },
          {
            "kind": "h3",
            "text": "Bezpieczeństwo i dostępność"
          },
          {
            "kind": "p",
            "text": "Ustawienie drabiny (przykład 6: 66.04°) i podjazdy dla wózków (przykład 7: 4.76°) mają progi bezpieczeństwa wyrażone jako kąty. Drabina przy 66° jest ustawiona zbyt płasko; wytyczna 75° odpowiada stosunkowi 3.73 do 1. Podjazd o nachyleniu 4.76° spełnia maksymalny wymóg dostępności 1:12. Kalkulator zamienia kontrole kątów typu zaliczenie/niezaliczenie w szybkie weryfikacje."
          },
          {
            "kind": "h3",
            "text": "Geodezja i teren"
          },
          {
            "kind": "p",
            "text": "Kąty wysokości drzew (przykład 8: 30.96°), spadki zboczy (przykład 15: 13.34°) i linie celowania w geodezji (przykład 13: 30.26°) wykorzystują odczyty klinometru i odległości mierzone taśmą. Kąt wypełnia lukę między tym, co możesz zmierzyć na ziemi, a tym, co musisz wiedzieć o wysokości lub nachyleniu."
          }
        ],
        "imgAlt": "Cztery panele przedstawiające obliczenia nachylenia dachu, kąta drabiny, spadku podjazdu i kąta wysokości drzewa",
        "figcaption": "Problemy kątowe z życia codziennego: nachylenie dachu ze wzniosu i rozpiętości, kąt bezpieczeństwa drabiny, spadek podjazdu pod kątem dostępności oraz kąt obserwacji wysokości drzewa."
      },
      "angle-mistakes": {
        "h2": "Typowe błędy przy wyznaczaniu kątów",
        "blocks": [
          {
            "kind": "h3",
            "text": "Mylenie boku przeciwnego z przyległym"
          },
          {
            "kind": "p",
            "text": "Najczęstszy błąd. Oznaczenia zależą od kąta odniesienia. Jeśli obliczysz arctan(4/3) = 53.13°, mając na myśli arctan(3/4) = 36.87°, rozwiązałeś dla niewłaściwego kąta. Poprawka: naszkicuj trójkąt, zaznacz kąt odniesienia, a następnie oznacz bok przeciwny (naprzeciw niego) i przyległy (stykający się z nim)."
          },
          {
            "kind": "h3",
            "text": "Użycie niewłaściwej funkcji odwrotnej"
          },
          {
            "kind": "p",
            "text": "Zastosowanie arcsin do stosunku bok przyległy przez przeciwprostokątną daje dopełnienie zamierzonego kąta, a nie komunikat o błędzie. Arcsin(4/5) = 53.13° to kąt B, nie kąt A. Poprawka: dopasuj funkcję do znanych boków, korzystając z powyższej tabeli."
          },
          {
            "kind": "h3",
            "text": "Zapominanie, że stosunek musi być poprawny"
          },
          {
            "kind": "p",
            "text": "Arcsin i arccos wymagają stosunków między 0 a 1. Jeśli wpiszesz bok przeciwny = 5 i przeciwprostokątną = 3, stosunek 1.67 nie ma arcsin. Zawsze oznacza to błędnie oznaczone boki: przeciwprostokątna musi być najdłuższym bokiem i mianownikiem. Poprawka: przypisz najdłuższy pomiar jako przeciwprostokątną."
          },
          {
            "kind": "h3",
            "text": "Mieszanie stopni i radianów"
          },
          {
            "kind": "p",
            "text": "Odwrotna trygonometria w kalkulatorach i w kodzie często domyślnie używa radianów. Arctan(1) = 45° w stopniach, ale 0.785 w radianach. Ten kalkulator podaje stopnie. Jeśli obliczenia ręczne dają 0.64 dla trójkąta 3-4-5, jesteś w radianach; pomnóż przez 180/π, aby uzyskać 36.87°."
          },
          {
            "kind": "h3",
            "text": "Wprowadzanie boków w różnych jednostkach"
          },
          {
            "kind": "p",
            "text": "Bok przeciwny w calach i przeciwprostokątna w stopach psują stosunek. Najpierw przelicz na wspólną jednostkę. Stosunek jest bezwymiarowy, ale tylko wtedy, gdy oba dane wejściowe mają tę samą jednostkę."
          },
          {
            "kind": "h3",
            "text": "Zbyt wczesne zaokrąglanie stosunku"
          },
          {
            "kind": "p",
            "text": "Arcsin(0.6) = 36.87°, ale arcsin(0.60) zaokrąglone z 0.596 daje 36.58°. Małe błędy stosunku powiększają się w pobliżu 0 i 1, gdzie funkcje odwrotne są najbardziej strome. Zachowaj pełną dokładność w całym obliczeniu, zaokrąglaj tylko końcowy kąt."
          },
          {
            "kind": "h3",
            "text": "Założenie, że kalkulator wyznacza boki"
          },
          {
            "kind": "p",
            "text": "Ta strona wyznacza kąty z boków. Nie wyznacza boków z kątów. Do zadań bok-z-kąta użyj dedykowanego kalkulatora boków. Każde narzędzie ma jedno zadanie."
          }
        ]
      },
      "angle-precision": {
        "h2": "Dokładność kątów i jednostki",
        "blocks": [
          {
            "kind": "p",
            "text": "Wyniki kątowe są dokładne tylko na tyle, na ile dokładne są stojące za nimi pomiary boków. Odczyt taśmy mierniczej z dokładnością do milimetra uzasadnia dwa miejsca po przecinku w kącie. Odległość odmierzona krokami w terenie uzasadnia co najwyżej pełne stopnie. Kalkulator liczy z pełną dokładnością zmiennoprzecinkową; decyzja o zaokrągleniu należy do ciebie."
          },
          {
            "kind": "h3",
            "text": "Jak błąd wejściowy wpływa na kąt"
          },
          {
            "kind": "p",
            "text": "Małe błędy boków powodują większe błędy kąta, gdy stosunek znajduje się w pobliżu 0 lub 1, gdzie funkcje odwrotne są najbardziej strome. Dla arctan w pobliżu 45° błąd stosunku o 1% przesuwa kąt o około 0.3°. W pobliżu 5° lub 85° ten sam błąd stosunku o 1% przesuwa kąt o ponad 0.5°. Mierz starannie przy skrajnych kątach albo wykonaj kilka odczytów i uśrednij."
          },
          {
            "kind": "h3",
            "text": "Stopnie a stopnie-minuty-sekundy"
          },
          {
            "kind": "p",
            "text": "Geodeci czasem wyrażają kąty jako stopnie, minuty i sekundy (DMS). Aby przeliczyć 36.87° na DMS: pełne stopnie to 36, ułamek 0.87° razy 60 daje 52.2 minuty, a 0.2 minuty razy 60 daje 12 sekund, co daje 36° 52′ 12″. Ten kalkulator podaje stopnie dziesiętne; pomnóż ułamek przez 60, aby uzyskać minuty."
          },
          {
            "kind": "h3",
            "text": "Kiedy wystarczą pełne stopnie"
          },
          {
            "kind": "p",
            "text": "Kąty cięcia w stolarce, kontrole ustawienia drabin i przybliżone oceny spadku rzadko wymagają miejsc po przecinku. Nachylenie dachu z dokładnością do stopnia w zupełności wystarcza do zamówienia materiałów. Dokładność do dwóch miejsc po przecinku zarezerwuj dla obróbki skrawaniem, ustawiania optyki i obliczeń inżynierskich, gdzie tolerancje są wąskie."
          }
        ]
      },
      "angle-verify": {
        "h2": "Weryfikacja wyniku kątowego",
        "blocks": [
          {
            "kind": "p",
            "text": "Trzy kontrole potwierdzają poprawne obliczenie kąta:"
          },
          {
            "kind": "p",
            "text": "Przy pracach krytycznych zweryfikuj też, czy boki spełniają twierdzenie Pitagorasa. W trójkącie 3-4-5, 9 + 16 = 25 potwierdza boki, zanim zaufasz wyznaczonym z nich kątom."
          }
        ],
        "list": [
          "<strong>Kontrola zakresu.</strong> Oba kąty ostre muszą mieścić się ściśle między 0° a 90°. Kąt 0°, 90° lub większy sygnalizuje nieprawidłowe dane wejściowe lub błędnie oznaczony trójkąt.",
          "<strong>Kontrola sumy.</strong> A + B musi równać się dokładnie 90°. Jeśli twoje dwa kąty sumują się do 89.9° lub 90.1°, wyjaśnia to zaokrąglenie. Większe rozbieżności wskazują na błąd.",
          "<strong>Kontrola metodą krzyżową.</strong> Przelicz ten sam kąt inną funkcją odwrotną. Jeśli arcsin(3/5) = 36.87° i arctan(3/4) = 36.87°, odpowiedź jest solidna. Niezgodność wskazuje na błąd oznaczenia."
        ]
      },
      "angle-conclusion": {
        "h2": "Wyznacz każdy kąt trójkąta prostokątnego z pewnością",
        "blocks": [
          {
            "kind": "p",
            "text": "Zacznij od oznaczenia trójkąta: najpierw przeciwprostokątna, potem bok przeciwny i przyległy względem szukanego kąta. Wybierz funkcję odwrotną pasującą do znanych boków: arcsin dla boku przeciwnego i przeciwprostokątnej, arccos dla boku przyległego i przeciwprostokątnej, arctan dla obu przyprostokątnych. Wprowadź pomiary, odczytaj kąt w stopniach, a następnie uzyskaj drugi kąt jako 90 minus pierwszy. Zweryfikuj kontrolą zakresu, kontrolą sumy i obliczeniem metodą krzyżową. Dzięki tym krokom każde zadanie o kąt trójkąta prostokątnego sprowadza się do niezawodnej rutyny. Wróć do kalkulatora na górze tej strony, aby przeliczyć swoje liczby."
          }
        ]
      }
    },
    "faqs": [
      {
        "question": "Jak znaleźć kąt w trójkącie prostokątnym?",
        "answer": "Użyj odwrotnej funkcji trygonometrycznej na stosunku boków. Mając bok przeciwny i przeciwprostokątną, oblicz arcsin(bok przeciwny/przeciwprostokątna). Mając bok przyległy i przeciwprostokątną, użyj arccos(bok przyległy/przeciwprostokątna). Mając obie przyprostokątne, użyj arctan(bok przeciwny/bok przyległy). Wynikiem jest kąt w stopniach."
      },
      {
        "question": "Czym różni się sin od arcsin?",
        "answer": "Sinus przyjmuje kąt i zwraca stosunek: sin(30°) = 0.5. Arcsin odwraca to: przyjmuje stosunek i zwraca kąt, więc arcsin(0.5) = 30°. Użyj sinusa, gdy znasz kąt i potrzebujesz boku; użyj arcsin, gdy znasz boki i potrzebujesz kąta."
      },
      {
        "question": "Kiedy używać arctan zamiast arcsin?",
        "answer": "Użyj arctan, gdy znasz obie przyprostokątne (bok przeciwny i przyległy), ale nie przeciwprostokątną. Arctan całkowicie pomija przeciwprostokątną, co oszczędza krok przy pomiarach terenowych, takich jak nachylenie dachu, gdzie wznios i rozpiętość mierzy się bezpośrednio. Użyj arcsin, gdy przeciwprostokątna jest jednym ze znanych boków."
      },
      {
        "question": "Dlaczego dwa kąty ostre sumują się do 90 stopni?",
        "answer": "Kąty trójkąta zawsze sumują się do 180 stopni. Kąt prosty zabiera z nich 90, pozostawiając 90 dla pozostałych dwóch łącznie. Oznacza to, że A + B = 90°, więc znalezienie jednego kąta ostrego natychmiast daje drugi przez odejmowanie."
      },
      {
        "question": "Czy kąt może wynosić 90 stopni?",
        "answer": "Nie. Kąt 90 stopni to kąt prosty przy wierzchołku C, który jest dany. Kalkulator wyznacza dwa kąty ostre A i B, każdy ściśle między 0° a 90°. Jeśli wynik osiągnie 0° lub 90°, dane wejściowe opisują trójkąt zdegenerowany, a nie poprawny."
      },
      {
        "question": "Co zrobić, gdy stosunek boków jest większy niż 1?",
        "answer": "Dla arcsin i arccos stosunek powyżej 1 jest niemożliwy i sygnalizuje błędnie oznaczone boki. Przeciwprostokątna musi być najdłuższym bokiem i mianownikiem. Przypisz najdłuższy pomiar jako przeciwprostokątną (c) i przelicz. Stosunki arctan mogą zgodnie z prawem przekraczać 1."
      },
      {
        "question": "Skąd wiedzieć, który bok jest przeciwny, a który przyległy?",
        "answer": "Najpierw wybierz kąt odniesienia. Bok przeciwny leży naprzeciw tego kąta (nie styka się z jego wierzchołkiem). Bok przyległy styka się z wierzchołkiem kąta, ale nie jest przeciwprostokątną. Ten sam fizyczny bok jest przeciwny dla jednego kąta ostrego i przyległy dla drugiego."
      },
      {
        "question": "Dlaczego arcsin, arccos i arctan dają tę samą odpowiedź?",
        "answer": "Ponieważ opisują ten sam kąt geometryczny poprzez różne pary boków. W trójkącie 3-4-5, arcsin(3/5), arccos(4/5) i arctan(3/4) wszystkie równają się 36.87°. Ta zgodność to silna weryfikacja: jeśli dwie metody się nie zgadzają, bok jest błędnie oznaczony."
      },
      {
        "question": "Czy kąty powinny być w stopniach, czy w radianach?",
        "answer": "Ten kalkulator używa stopni, standardu w budownictwie, nawigacji i geometrii szkolnej. Jeśli liczysz ręcznie na kalkulatorze naukowym, sprawdź, czy jest w trybie stopni. Wynik w trybie radianów, jak 0.64 dla trójkąta 3-4-5, przelicza się na 36.87°, mnożąc przez 180/π."
      },
      {
        "question": "Jak dokładna powinna być odpowiedź kątowa?",
        "answer": "Dostosuj do dokładności danych wejściowych. Jeśli boki zmierzono z dokładnością do centymetra, odpowiednie są dwa miejsca po przecinku (36.87°). Do przybliżonych szacunków terenowych wystarczą pełne stopnie. Zachowaj pełną dokładność w trakcie obliczeń i zaokrąglaj tylko końcową odpowiedź."
      },
      {
        "question": "Czy można znaleźć kąt, znając tylko jeden bok?",
        "answer": "Nie. Jeden bok to za mało; istnieje nieskończenie wiele trójkątów prostokątnych o tej samej długości jednego boku. Potrzebujesz dwóch boków (do odwrotnej trygonometrii) albo jednego boku i jednego kąta ostrego (do reguły dopełnienia). Kalkulator wymaga dokładnie dwóch danych wejściowych."
      },
      {
        "question": "Jak sprawdzić, czy kąt jest poprawny?",
        "answer": "Trzy kontrole: oba kąty muszą mieścić się między 0° a 90°, muszą sumować się do dokładnie 90°, a przeliczenie inną funkcją odwrotną powinno dać ten sam wynik. Dla trójkąta 3-4-5, arcsin(3/5) = 36.87° i arctan(3/4) = 36.87° potwierdzają się wzajemnie."
      }
    ],
    "relatedHeading": "Poznaj powiązane kalkulatory trójkąta prostokątnego",
    "relatedItems": [
      "Kalkulator boków trójkąta prostokątnego",
      "Kalkulator boku trójkąta prostokątnego z kąta",
      "Kalkulator stosunków trygonometrycznych",
      "Kalkulator trójkąta prostokątnego (wszystko w jednym)",
      "Kalkulator twierdzenia Pitagorasa",
      "Kalkulator szczególnych trójkątów prostokątnych"
    ]
  }
};
