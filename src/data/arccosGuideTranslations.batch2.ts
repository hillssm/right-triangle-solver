/**
 * arccosGuideTranslations.batch2.ts
 * Translations of the Right Triangle Angle From Cosine Calculator guide (ArccosGuide.astro)
 * Batch 2: Portuguese (pt), Bengali (bn), Japanese (ja), Korean (ko), Malay (ms), Polish (pl).
 *
 * Structure per language (mirrors arcsinGuideTranslations.batch1.ts):
 * - tocHeading, tocItems (12 entries keyed by section id)
 * - sections (12 entries: arccos-intro, arccos-what, arccos-vs, arccos-anatomy,
 *   arccos-howto, arccos-examples, arccos-special, arccos-mistakes, arccos-verify,
 *   arccos-applications, arccos-related, arccos-conclusion)
 *   Each section: h2, blocks (ordered {kind: 'p'|'h3', text}), optional steps,
 *   imgAlt, figcaption.
 * - faqs (12 question/answer pairs)
 * - relatedHeading, relatedItems (6 calculator names)
 *
 * Formulas, KaTeX markup ([[...]]), variable names, numbers, and HTML tags are preserved
 * exactly as in the English source.
 */

export const ARCCOS_TRANSLATIONS_BATCH2 = {
  "pt": {
    "faqs": [
      {
        "question": "O que A = arccos(b / c) realmente significa?",
        "answer": "Significa que você divide o cateto adjacente pela hipotenusa e depois trabalha de trás para frente a partir desse decimal para encontrar o ângulo cujo cosseno é igual a ele. O resultado é o ângulo agudo entre o cateto adjacente e a hipotenusa."
      },
      {
        "question": "Quando devo usar o arccos em vez do arcsin?",
        "answer": "Use o arccos quando conhecer o cateto adjacente e a hipotenusa. Use o arcsin quando conhecer o cateto oposto e a hipotenusa. Ambos dão o mesmo ângulo para o mesmo triângulo; a escolha depende de quais lados você mediu."
      },
      {
        "question": "Por que estou recebendo um erro matemático do arccos?",
        "answer": "A causa mais comum é uma razão maior que 1, o que acontece quando o cateto adjacente digitado é mais longo que a hipotenusa. Em um triângulo retângulo válido, a hipotenusa é sempre a mais longa, então verifique os rótulos dos seus lados."
      },
      {
        "question": "Posso usar o arccos sem conhecer o cateto oposto?",
        "answer": "Sim. Essa é a principal vantagem do arccos: ele precisa apenas do cateto adjacente e da hipotenusa. O cateto oposto nunca entra no cálculo."
      },
      {
        "question": "Qual é a diferença entre cos e arccos?",
        "answer": "O cosseno pega um ângulo e devolve uma razão: cos(60 graus) = 0.5. O arccos inverte isso: ele pega uma razão e devolve o ângulo, então arccos(0.5) = 60 graus. Use o cosseno quando conhecer o ângulo; use o arccos quando conhecer os lados."
      },
      {
        "question": "Por que o arccos, o arcsin e o arctan dão a mesma resposta?",
        "answer": "Porque eles descrevem o mesmo ângulo geométrico através de pares de lados diferentes. Em um triângulo 3-4-5, arccos(4/5), arcsin(3/5) e arctan(3/4) valem todos 36.87 graus. A concordância entre os métodos confirma que os rótulos dos lados estão corretos."
      },
      {
        "question": "O que significa se b/c for exatamente 0.5?",
        "answer": "O ângulo é exatamente 60 graus. Este é o triângulo especial 30-60-90, onde o lado adjacente ao ângulo de 60 graus é metade da hipotenusa."
      },
      {
        "question": "A resposta deve estar em graus ou radianos?",
        "answer": "Esta calculadora usa graus, o padrão para construção, topografia e geometria em sala de aula. Se você calcular à mão, certifique-se de que a calculadora está no modo de graus; um resultado no modo de radianos, como 0.64, se converte para 36.87 graus multiplicando por 180/pi."
      },
      {
        "question": "Como encontro o outro ângulo agudo?",
        "answer": "Subtraia de 90 graus. Se o arccos der A = 36.87 graus, então B = 90 - 36.87 = 53.13 graus. Nenhuma outra trigonometria é necessária."
      },
      {
        "question": "O resultado do arccos pode ser 90 graus?",
        "answer": "Apenas como limite: arccos(0) = 90 graus, mas um cateto adjacente zero significa um triângulo degenerado, não um triângulo real. Ângulos de triângulo retângulo válidos obtidos por arccos ficam sempre estritamente entre 0 e 90 graus."
      },
      {
        "question": "Como posso verificar minha resposta do arccos?",
        "answer": "Calcule cos(A) e confirme que ele é igual a b/c. Também recalcule com arcsin ou arctan usando o terceiro lado; todos os métodos precisam concordar. Por fim, verifique que os dois ângulos agudos somam exatamente 90 graus."
      },
      {
        "question": "Mudar a escala do triângulo altera o resultado do arccos?",
        "answer": "Não. Triângulos semelhantes têm ângulos idênticos. Um triângulo 3-4-5 e um triângulo 6-8-10 dão ambos arccos(0.8) = 36.87 graus, porque a razão b/c não muda com a escala."
      }
    ],
    "relatedHeading": "Explorar calculadoras relacionadas de triângulos retângulos",
    "relatedItems": [
      "Calculadora de Ângulo do Triângulo Retângulo",
      "Calculadora de Ângulo do Triângulo Retângulo a partir do Seno",
      "Calculadora de Ângulo do Triângulo Retângulo a partir da Tangente",
      "Calculadora de Ângulo Desconhecido do Triângulo Retângulo",
      "Calculadora de Razões Trigonométricas do Triângulo Retângulo",
      "Calculadora de Razão Cosseno"
    ],
    "tocHeading": "Neste Guia",
    "tocItems": {
      "arccos-intro": "O que é a calculadora de ângulo a partir do cosseno?",
      "arccos-what": "Entendendo o arccos (cosseno inverso)",
      "arccos-vs": "Arccos vs. arcsin vs. arctan",
      "arccos-anatomy": "Cateto adjacente e hipotenusa",
      "arccos-howto": "Como usar a calculadora",
      "arccos-examples": "16 exemplos resolvidos",
      "arccos-special": "Valores especiais de ângulos",
      "arccos-mistakes": "Erros comuns",
      "arccos-verify": "Verificando sua resposta",
      "arccos-applications": "Aplicações na vida real",
      "arccos-related": "Calculadoras relacionadas",
      "arccos-conclusion": "Encontre qualquer ângulo a partir do cosseno com confiança",
      "arccos-faq": "Perguntas frequentes"
    },
    "sections": {
      "arccos-intro": {
        "h2": "O que é a calculadora de ângulo do triângulo retângulo a partir do cosseno?",
        "blocks": [
          {
            "kind": "p",
            "text": "A calculadora de ângulo do triângulo retângulo a partir do cosseno encontra um ângulo agudo quando você conhece o cateto adjacente e a hipotenusa. Ela aplica a função cosseno inverso, escrita como arccos ou cos[[-1]], à razão entre esses dois lados. O resultado é o ângulo A em graus."
          },
          {
            "kind": "p",
            "text": "Esta ferramenta existe para uma situação específica de medição: você pode medir o lado ao lado do seu ângulo-alvo e o lado mais longo do triângulo, mas o cateto oposto é desconhecido ou difícil de alcançar. Em vez de calcular primeiro o cateto oposto, o arccos o ignora por completo e converte a razão adjacente-sobre-hipotenusa diretamente no ângulo."
          },
          {
            "kind": "p",
            "text": "Por exemplo, um cateto adjacente de 4 e uma hipotenusa de 5 geram a razão 0.8. O arccos de 0.8 é aproximadamente 36.87 graus. Esse é o ângulo A. O outro ângulo agudo segue da regra do complemento: 90 menos 36.87, ou 53.13 graus."
          },
          {
            "kind": "p",
            "text": "O arccos é uma das três ferramentas trigonométricas inversas neste site. Se os lados conhecidos são o cateto oposto e a hipotenusa, a <a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">calculadora de ângulo a partir do seno</a> é a escolha certa. Se você conhece os dois catetos mas não a hipotenusa, use a <a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\">calculadora de ângulo a partir da tangente</a>. Esta página cobre o caso do cosseno em total profundidade."
          }
        ]
      },
      "arccos-what": {
        "h2": "Entendendo o arccos (cosseno inverso)",
        "blocks": [
          {
            "kind": "p",
            "text": "O cosseno comum pega um ângulo e devolve uma razão. O cosseno de 60 graus é 0.5. O arccos inverte isso: ele pega uma razão e devolve o ângulo. O arccos de 0.5 é 60 graus. As duas funções se desfazem mutuamente, por isso o arccos também é escrito como cos[[-1]]."
          },
          {
            "kind": "p",
            "text": "A fórmula usada por esta calculadora é [[A = \\cos^{-1}(b/c)]]. Aqui b é o cateto adjacente, c é a hipotenusa, e A é o ângulo entre eles. A razão b/c sempre fica entre 0 e 1 para um triângulo retângulo válido, porque o cateto adjacente é sempre menor que a hipotenusa."
          },
          {
            "kind": "p",
            "text": "Pense no arccos como uma pergunta: \"Qual ângulo tem este valor de cosseno?\" Se b/c é igual a 0.8, a pergunta se torna \"qual ângulo tem cosseno igual a 0.8?\" A resposta, 36.87 graus, é o ângulo cujo cateto adjacente tem 80 por cento do comprimento da hipotenusa."
          },
          {
            "kind": "h3",
            "text": "A razão conta uma história"
          },
          {
            "kind": "p",
            "text": "O valor de b/c descreve a forma do triângulo. Uma razão perto de 1 significa que o cateto adjacente é quase tão longo quanto a hipotenusa, então o ângulo entre eles é minúsculo. Uma razão perto de 0 significa que o cateto adjacente é muito curto em comparação com a hipotenusa, então o ângulo se abre em direção a 90 graus. Uma razão de exatamente 0.5 significa sempre 60 graus."
          },
          {
            "kind": "h3",
            "text": "Domínio do arccos"
          },
          {
            "kind": "p",
            "text": "O arccos só aceita entradas de 0 a 1 neste contexto geométrico. Uma razão acima de 1 é impossível para um triângulo retângulo e indica um erro de rotulagem: a hipotenusa deve ser o denominador e deve ser o lado mais longo. Uma razão negativa descreveria um ângulo obtuso, que não pode aparecer como o ângulo A em um triângulo retângulo."
          }
        ],
        "imgAlt": "Diagrama mostrando as duas etapas do arccos: dividir b por c e depois aplicar o arccos para obter o ângulo",
        "figcaption": "Como o arccos funciona: divida o cateto adjacente pela hipotenusa e depois aplique o cosseno inverso para recuperar o ângulo."
      },
      "arccos-vs": {
        "h2": "Arccos vs. arcsin vs. arctan: quando usar cada um",
        "blocks": [
          {
            "kind": "p",
            "text": "As três funções inversas encontram o mesmo ângulo quando aplicadas ao mesmo triângulo. Elas diferem apenas nos lados que exigem. Escolher corretamente evita que você calcule um lado de que não precisa."
          },
          {
            "kind": "p",
            "text": "Use <strong>arccos</strong> quando conhecer o cateto adjacente (b) e a hipotenusa (c). A fórmula é [[A = \\cos^{-1}(b/c)]]. Esta é a escolha natural quando a hipotenusa foi medida diretamente, por exemplo com uma fita ao longo de uma rampa, e a distância horizontal é conhecida."
          },
          {
            "kind": "p",
            "text": "Use <strong>arcsin</strong> quando conhecer o cateto oposto (a) e a hipotenusa (c). A fórmula é [[A = \\sin^{-1}(a/c)]]. Problemas de altura favorecem o arcsin: a elevação vertical é oposta ao ângulo no nível do solo. A <a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">calculadora de ângulo a partir do seno</a> trata desse caso."
          },
          {
            "kind": "p",
            "text": "Use <strong>arctan</strong> quando conhecer os dois catetos (a e b) mas não a hipotenusa. A fórmula é [[A = \\tan^{-1}(a/b)]]. Medições de campo como a altura sobre a largura do telhado favorecem o arctan porque os dois catetos são medidos diretamente. Veja a <a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\">calculadora de ângulo a partir da tangente</a> para esse método."
          },
          {
            "kind": "h3",
            "text": "Elas precisam concordar"
          },
          {
            "kind": "p",
            "text": "Para qualquer triângulo individual, arccos(b/c), arcsin(a/c) e arctan(a/b) produzem o ângulo idêntico. Em um triângulo 3-4-5, arccos(4/5), arcsin(3/5) e arctan(3/4) valem todos 36.87 graus. Se dois métodos discordarem, um lado está mal rotulado. Essa verificação cruzada é a verificação mais confiável disponível, e a <a href=\"/right-triangle-trig-ratios-calculator/\" class=\"text-primary hover:underline\">calculadora de razões trigonométricas</a> pode confirmar as três razões de uma vez."
          },
          {
            "kind": "h3",
            "text": "Por que não usar sempre o arctan?"
          },
          {
            "kind": "p",
            "text": "O arctan precisa dos dois catetos. Se o cateto oposto é desconhecido e difícil de medir, calculá-lo primeiro só para usar o arctan acrescenta uma etapa desnecessária e uma chance extra de erro. O arccos vai direto dos dois lados que você tem até o ângulo que você quer. Combine a função com suas medições, não com o hábito."
          }
        ]
      },
      "arccos-anatomy": {
        "h2": "Cateto adjacente e hipotenusa: as duas entradas",
        "blocks": [
          {
            "kind": "p",
            "text": "O arccos precisa de exatamente dois lados: o cateto adjacente b e a hipotenusa c. Acertar esses rótulos é toda a batalha. Depois disso, tudo é aritmética."
          },
          {
            "kind": "h3",
            "text": "Identificando o cateto adjacente"
          },
          {
            "kind": "p",
            "text": "O cateto adjacente é o cateto que toca o ângulo A. Ele forma uma borda do próprio ângulo. No diagrama abaixo, o lado b corre ao longo da base, do ângulo reto até o ângulo A. Se você estiver resolvendo para o outro ângulo agudo B, os rótulos trocam: o lado adjacente a B é aquele que toca B."
          },
          {
            "kind": "h3",
            "text": "Identificando a hipotenusa"
          },
          {
            "kind": "p",
            "text": "A hipotenusa é o lado oposto ao ângulo reto. É sempre o lado mais longo do triângulo. Ela nunca toca o vértice do ângulo reto. Se sua \"hipotenusa\" não for a mais longa das suas três medições, rotule de novo antes de calcular. A <a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">calculadora do teorema de Pitágoras</a> pode confirmar qual lado é o mais longo quando você tem os três."
          },
          {
            "kind": "h3",
            "text": "Por que o cateto oposto fica de fora"
          },
          {
            "kind": "p",
            "text": "O cosseno é definido como adjacente sobre hipotenusa. O cateto oposto simplesmente não aparece nessa razão. Esse é o objetivo desta calculadora: quando o cateto oposto é desconhecido, está enterrado ou é irrelevante para seu esquema de medição, o arccos ainda entrega o ângulo. Você não está ignorando o cateto oposto; está usando uma razão que nunca precisou dele."
          }
        ],
        "imgAlt": "Triângulo retângulo com o cateto adjacente b e a hipotenusa c destacados para a fórmula do arccos",
        "figcaption": "Anatomia para o arccos: b é o cateto adjacente que toca o ângulo A, c é a hipotenusa oposta ao ângulo reto."
      },
      "arccos-howto": {
        "h2": "Como usar a calculadora de ângulo a partir do cosseno",
        "blocks": [],
        "steps": [
          "<strong>Confirme o ângulo reto.</strong> A calculadora só funciona para triângulos retângulos. Identifique primeiro o canto de 90 graus.",
          "<strong>Escolha seu ângulo-alvo.</strong> Decida se você está resolvendo para o ângulo A ou o ângulo B. O cateto adjacente é definido em relação a essa escolha.",
          "<strong>Meça o cateto adjacente b.</strong> Este é o cateto que toca seu ângulo-alvo. Registre-o em qualquer unidade.",
          "<strong>Meça a hipotenusa c.</strong> Este é o lado mais longo, em frente ao ângulo reto. Use a mesma unidade que b.",
          "<strong>Verifique que b é menor que c.</strong> Se não for, os lados estão mal rotulados. A hipotenusa deve ser a mais longa.",
          "<strong>Digite ambos os valores e pressione Calcular.</strong> A ferramenta calcula b/c, aplica o arccos e devolve o ângulo A em graus.",
          "<strong>Encontre o segundo ângulo.</strong> Subtraia de 90 graus: B = 90[[^\\circ]] menos A.",
          "<strong>Verifique.</strong> Calcule cos(A) em uma calculadora e confirme que ele é igual a b/c. Se for, a resposta é sólida."
        ],
        "imgAlt": "Exemplo trabalhado em quatro etapas de arccos com b igual a 4 e c igual a 5",
        "figcaption": "Exemplo trabalhado: b = 4, c = 5 dá A = arccos(0.8), aproximadamente 36.87 graus, verificado pela ida e volta."
      },
      "arccos-examples": {
        "h2": "16 exemplos resolvidos",
        "blocks": [
          {
            "kind": "p",
            "text": "Cada exemplo segue as mesmas quatro etapas: escreva a fórmula, substitua, divida, aplique o arccos. Os ângulos são arredondados para duas casas decimais."
          },
          {
            "kind": "h3",
            "text": "Exemplo 1: o triângulo 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dados cateto adjacente b = 4 e hipotenusa c = 5, encontre o ângulo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) [[\\approx 36.87^\\circ]]. O complemento B = 53.13[[^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Exemplo 2: o triângulo 5-12-13"
          },
          {
            "kind": "p",
            "text": "Dados cateto adjacente b = 12 e hipotenusa c = 13, encontre o ângulo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) [[\\approx 22.62^\\circ]]. O complemento B = 67.38[[^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Exemplo 3: o triângulo 8-15-17"
          },
          {
            "kind": "p",
            "text": "Dados cateto adjacente b = 8 e hipotenusa c = 17, encontre o ângulo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(8/17) = arccos(0.4706) [[\\approx 61.93^\\circ]]. O complemento B = 28.07[[^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Exemplo 4: mesmo triângulo, outro ângulo"
          },
          {
            "kind": "p",
            "text": "Dados cateto adjacente b = 15 e hipotenusa c = 17 (resolvendo para o ângulo B do triângulo 8-15-17)."
          },
          {
            "kind": "p",
            "text": "B = arccos(15/17) = arccos(0.8824) [[\\approx 28.07^\\circ]]. Note que 61.93 + 28.07 = 90, como exigido."
          },
          {
            "kind": "h3",
            "text": "Exemplo 5: 5-12-13, outro ângulo"
          },
          {
            "kind": "p",
            "text": "Dados cateto adjacente b = 5 e hipotenusa c = 13."
          },
          {
            "kind": "p",
            "text": "B = arccos(5/13) = arccos(0.3846) [[\\approx 67.38^\\circ]]. Isso corresponde ao complemento do Exemplo 2."
          },
          {
            "kind": "h3",
            "text": "Exemplo 6: 3-4-5, outro ângulo"
          },
          {
            "kind": "p",
            "text": "Dados cateto adjacente b = 3 e hipotenusa c = 5."
          },
          {
            "kind": "p",
            "text": "B = arccos(3/5) = arccos(0.6) [[\\approx 53.13^\\circ]]. Isso corresponde ao complemento do Exemplo 1."
          },
          {
            "kind": "h3",
            "text": "Exemplo 7: o caso especial de 60 graus"
          },
          {
            "kind": "p",
            "text": "Dados cateto adjacente b = 1 e hipotenusa c = 2."
          },
          {
            "kind": "p",
            "text": "A = arccos(1/2) = arccos(0.5) = 60[[^\\circ]] exatamente. Este é o triângulo especial 30-60-90. A <a href=\"/special-right-triangle-calculator/\" class=\"text-primary hover:underline\">calculadora de triângulos retângulos especiais</a> cobre esses valores exatos."
          },
          {
            "kind": "h3",
            "text": "Exemplo 8: o triângulo 7-24-25"
          },
          {
            "kind": "p",
            "text": "Dados cateto adjacente b = 7 e hipotenusa c = 25, encontre o ângulo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(7/25) = arccos(0.28) [[\\approx 73.74^\\circ]]. O complemento B = 16.26[[^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Exemplo 9: 7-24-25, outro ângulo"
          },
          {
            "kind": "p",
            "text": "Dados cateto adjacente b = 24 e hipotenusa c = 25."
          },
          {
            "kind": "p",
            "text": "B = arccos(24/25) = arccos(0.96) [[\\approx 16.26^\\circ]]. Corresponde ao complemento do Exemplo 8."
          },
          {
            "kind": "h3",
            "text": "Exemplo 10: o triângulo 9-40-41"
          },
          {
            "kind": "p",
            "text": "Dados cateto adjacente b = 9 e hipotenusa c = 41, encontre o ângulo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(9/41) = arccos(0.2195) [[\\approx 77.32^\\circ]]. Um cateto adjacente pequeno gera um ângulo amplo."
          },
          {
            "kind": "h3",
            "text": "Exemplo 11: 9-40-41, outro ângulo"
          },
          {
            "kind": "p",
            "text": "Dados cateto adjacente b = 40 e hipotenusa c = 41."
          },
          {
            "kind": "p",
            "text": "B = arccos(40/41) = arccos(0.9756) [[\\approx 12.68^\\circ]]. Note que 77.32 + 12.68 = 90."
          },
          {
            "kind": "h3",
            "text": "Exemplo 12: o triângulo 20-21-29"
          },
          {
            "kind": "p",
            "text": "Dados cateto adjacente b = 20 e hipotenusa c = 29, encontre o ângulo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(20/29) = arccos(0.6897) [[\\approx 46.40^\\circ]]. O complemento B = 43.60[[^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Exemplo 13: 20-21-29, outro ângulo"
          },
          {
            "kind": "p",
            "text": "Dados cateto adjacente b = 21 e hipotenusa c = 29."
          },
          {
            "kind": "p",
            "text": "B = arccos(21/29) = arccos(0.7241) [[\\approx 43.60^\\circ]]. Corresponde ao complemento do Exemplo 12."
          },
          {
            "kind": "h3",
            "text": "Exemplo 14: o triângulo 6-8-10"
          },
          {
            "kind": "p",
            "text": "Dados cateto adjacente b = 6 e hipotenusa c = 10, encontre o ângulo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(6/10) = arccos(0.6) [[\\approx 53.13^\\circ]]. Mesmo ângulo do Exemplo 6, pois 6-8-10 é um 3-4-5 em escala."
          },
          {
            "kind": "h3",
            "text": "Exemplo 15: 6-8-10, outro ângulo"
          },
          {
            "kind": "p",
            "text": "Dados cateto adjacente b = 8 e hipotenusa c = 10."
          },
          {
            "kind": "p",
            "text": "B = arccos(8/10) = arccos(0.8) [[\\approx 36.87^\\circ]]. Mesmo que o Exemplo 1, confirmando que triângulos semelhantes compartilham os ângulos."
          },
          {
            "kind": "h3",
            "text": "Exemplo 16: o triângulo 12-16-20"
          },
          {
            "kind": "p",
            "text": "Dados cateto adjacente b = 12 e hipotenusa c = 20, encontre o ângulo A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/20) = arccos(0.6) [[\\approx 53.13^\\circ]]. Outro 3-4-5 em escala, mesmo ângulo de novo. Mudar a escala dos lados nunca muda os ângulos."
          }
        ]
      },
      "arccos-special": {
        "h2": "Valores especiais de ângulos que valem a pena memorizar",
        "blocks": [
          {
            "kind": "p",
            "text": "Alguns valores de arccos aparecem com tanta frequência que reconhecê-los economiza tempo. Eles vêm dos triângulos retângulos especiais."
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(1) = 0^\\circ]]: o cateto adjacente é igual à hipotenusa, então o ângulo colapsa para zero. Este é um caso degenerado, não um triângulo real, mas ele ancora a escala."
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(\\sqrt{3}/2) \\approx 30^\\circ]]: do triângulo 30-60-90. Quando o cateto adjacente é cerca de 86.6 por cento da hipotenusa, o ângulo é 30 graus."
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(\\sqrt{2}/2) = 45^\\circ]]: do triângulo 45-45-90. Catetos iguais geram esse valor exato."
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(1/2) = 60^\\circ]]: do triângulo 30-60-90, o caso do Exemplo 7. Quando o cateto adjacente é exatamente metade da hipotenusa, o ângulo é exatamente 60 graus."
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(0) = 90^\\circ]]: o cateto adjacente encolhe até zero, então o ângulo se abre até um ângulo reto. Como o caso do zero, este é um limite, não um ângulo de triângulo real."
          },
          {
            "kind": "p",
            "text": "Entre esses marcos, o arccos diminui suavemente à medida que a razão aumenta. Memorizar os cinco pontos de referência permite estimar qualquer arccos mentalmente: uma razão de 0.7 fica entre 0.5 (60 graus) e 0.866 (30 graus), um pouco mais perto de 45 graus. O valor verdadeiro é cerca de 45.57 graus."
          }
        ]
      },
      "arccos-mistakes": {
        "h2": "Erros comuns ao usar o arccos",
        "blocks": [
          {
            "kind": "h3",
            "text": "Usar o cateto oposto em vez do cateto adjacente"
          },
          {
            "kind": "p",
            "text": "O erro mais frequente. O arccos precisa do lado que toca o ângulo A, não do lado em frente a ele. Se você alimentar o cateto oposto no arccos, obtém o complemento do ângulo pretendido. Em um triângulo 3-4-5, arccos(3/5) = 53.13 graus é o ângulo B, não o ângulo A. Correção: esboce o triângulo, marque seu ângulo-alvo e trace qual cateto o toca."
          },
          {
            "kind": "h3",
            "text": "Colocar a hipotenusa no numerador"
          },
          {
            "kind": "p",
            "text": "O arccos espera adjacente sobre hipotenusa, um número abaixo de 1. Digitar c/b em vez de b/c gera uma razão acima de 1, e a calculadora devolve um erro matemático. Correção: a hipotenusa é sempre o denominador na razão do arccos."
          },
          {
            "kind": "h3",
            "text": "Confundir arccos com cosseno"
          },
          {
            "kind": "p",
            "text": "Em muitas calculadoras, a tecla do cosseno e a tecla do cosseno inverso (geralmente rotulada como cos[[-1]] ou arccos) ficam próximas. Pressionar cos(0.8) em vez de arccos(0.8) dá 0.6967, uma razão sem sentido, em vez de 36.87 graus. Correção: verifique que sua calculadora está no modo de graus e que você pressionou a tecla inversa."
          },
          {
            "kind": "h3",
            "text": "Misturar graus e radianos"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) é 36.87 graus mas 0.6435 radianos. Se seu cálculo manual der 0.64 para um triângulo 3-4-5, a calculadora está no modo de radianos. Multiplique por 180/pi para converter, ou mude o modo para graus. Esta calculadora produz graus."
          },
          {
            "kind": "h3",
            "text": "Digitar lados em unidades diferentes"
          },
          {
            "kind": "p",
            "text": "Cateto adjacente em polegadas e hipotenusa em pés corrompem a razão. Converta para uma unidade comum primeiro. A razão não tem unidade, mas apenas quando ambas as entradas compartilham a unidade."
          },
          {
            "kind": "h3",
            "text": "Arredondar a razão cedo demais"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) = 36.87 graus, mas arccos(0.80) arredondado de 0.795 dá 37.24 graus. Perto de razões de 0 e 1, onde o arccos é mais íngreme, pequenos erros na razão se amplificam. Mantenha a precisão total durante a divisão e arredonde apenas o ângulo final."
          },
          {
            "kind": "h3",
            "text": "Esquecer qual ângulo foi resolvido"
          },
          {
            "kind": "p",
            "text": "O arccos devolve o ângulo cujo cateto adjacente você digitou. Se você digitou o lado que toca o ângulo B, o resultado é o ângulo B. Rotule a resposta com o nome correto do ângulo, ou verifique com o complemento: os dois ângulos agudos precisam somar 90 graus."
          }
        ]
      },
      "arccos-verify": {
        "h2": "Verificando sua resposta do arccos",
        "blocks": [
          {
            "kind": "p",
            "text": "Três verificações confirmam um cálculo correto de arccos:"
          },
          {
            "kind": "p",
            "text": "Para o triângulo 3-4-5, verifique também que os lados satisfazem o teorema de Pitágoras: 9 + 16 = 25. Confirmar os lados antes de confiar no ângulo derivado deles é uma boa prática, e a <a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">calculadora do teorema de Pitágoras</a> torna isso rápido."
          },
          {
            "kind": "p",
            "text": "Uma quarta verificação usa o complemento. Calcule B = 90[[^\\circ]] menos A e depois verifique se o arccos da outra razão dá B. No Exemplo 1, arccos(3/5) = 53.13[[^\\circ]], o que corresponde a 90 menos 36.87. Quando as quatro verificações passam, a resposta está além de qualquer dúvida."
          }
        ],
        "steps": [
          "<strong>Verificação de intervalo.</strong> O resultado deve ficar estritamente entre 0 e 90 graus. Qualquer coisa fora disso indica entradas inválidas ou lados mal rotulados.",
          "<strong>Verificação de ida e volta.</strong> Calcule cos(A) e confirme que ele é igual a b/c. Para o Exemplo 1, cos(36.87[[^\\circ]]) [[\\approx]] 0.8 = 4/5. Se a ida e volta falhar, o ângulo está errado.",
          "<strong>Verificação cruzada de métodos.</strong> Recalcule com arcsin ou arctan usando o terceiro lado. Se arccos(4/5) = 36.87[[^\\circ]] e arctan(3/4) = 36.87[[^\\circ]], a resposta é sólida. A discordância aponta para um erro de rotulagem."
        ]
      },
      "arccos-applications": {
        "h2": "Aplicações do arccos na vida real",
        "blocks": [
          {
            "kind": "p",
            "text": "O arccos aparece onde quer que uma distância inclinada e uma distância horizontal sejam as medições naturais. A hipotenusa é medida ao longo da própria rampa, e o cateto adjacente é o componente horizontal."
          },
          {
            "kind": "h3",
            "text": "Levantamento de rampas"
          },
          {
            "kind": "p",
            "text": "Um topógrafo mede 65 metros ao longo de uma rampa e 60 metros na horizontal. O ângulo da rampa é arccos(60/65), cerca de 22.6 graus. Esta é a situação padrão do arccos: a distância inclinada é fácil de medir com fita, a horizontal vem do mapa ou de um nível, e o cateto oposto (elevação) é o que você pode calcular em seguida."
          },
          {
            "kind": "h3",
            "text": "Elevação do sol a partir de sombras"
          },
          {
            "kind": "p",
            "text": "Um raio de luz de 10 metros projeta uma sombra de 8 metros. O ângulo de elevação do sol é arccos(8/10), cerca de 36.9 graus. Problemas de sombra são problemas naturais de arccos porque a sombra fica ao longo do solo (adjacente) e o raio é a hipotenusa."
          },
          {
            "kind": "h3",
            "text": "Inclinação de viga do telhado"
          },
          {
            "kind": "p",
            "text": "Uma viga se estende por 6.5 metros com um vão horizontal de 6 metros. O ângulo de inclinação no beiral é arccos(6/6.5), cerca de 22.6 graus. Carpinteiros medem a viga diretamente e o vão ao longo da viga horizontal, então o arccos se encaixa nas medições como tomadas."
          },
          {
            "kind": "h3",
            "text": "Barras de engenharia"
          },
          {
            "kind": "p",
            "text": "Uma barra diagonal mede 4 metros com uma base horizontal de 3.5 metros. O ângulo da barra é arccos(3.5/4), cerca de 28.96 graus. Esboços estruturais dão o comprimento da barra e sua projeção; o arccos transforma esses dados no ângulo de instalação."
          }
        ],
        "imgAlt": "Quatro painéis mostrando cálculos de arccos para levantamento, sombra, viga de telhado e ângulo de barra",
        "figcaption": "Problemas de arccos no mundo real: ângulos de rampa, elevação do sol, inclinação de viga e ângulos de instalação de barras."
      },
      "arccos-related": {
        "h2": "Explorar calculadoras relacionadas de triângulos retângulos",
        "blocks": []
      },
      "arccos-conclusion": {
        "h2": "Encontre qualquer ângulo a partir do cosseno com confiança",
        "blocks": [
          {
            "kind": "p",
            "text": "Comece identificando o cateto adjacente: o cateto que toca seu ângulo-alvo. Confirme que a hipotenusa é o lado mais longo. Divida, aplique o arccos e leia o ângulo em graus. Obtenha o segundo ângulo com 90 menos o primeiro. Verifique com a verificação de ida e volta, um cálculo cruzado de métodos e a soma dos ângulos. Com essas etapas, qualquer problema de adjacente-e-hipotenusa se reduz a uma rotina confiável. Volte à calculadora no topo desta página para rodar seus números."
          }
        ]
      }
    }
  },
  "bn": {
    "faqs": [
      {
        "question": "A = arccos(b / c) আসলে কী বোঝায়?",
        "answer": "এর অর্থ, সন্নিহিত বাহুকে অতিভুজ দিয়ে ভাগ করুন, তারপর সেই দশমিক থেকে পিছিয়ে গিয়ে সেই কোণটি বের করুন যার কোসাইন তার সমান। ফলাফল হলো সন্নিহিত বাহু ও অতিভুজের মধ্যবর্তী সূক্ষ্ম কোণ।"
      },
      {
        "question": "arcsin এর বদলে কখন arccos ব্যবহার করব?",
        "answer": "যখন আপনি সন্নিহিত বাহু ও অতিভুজ জানেন, তখন arccos ব্যবহার করুন। যখন বিপরীত বাহু ও অতিভুজ জানেন, তখন arcsin ব্যবহার করুন। একই ত্রিভুজের জন্য দুটোই একই কোণ দেয়; কোন বাহুগুলো আপনি মেপেছেন তার ওপর পছন্দ নির্ভর করে।"
      },
      {
        "question": "arccos থেকে আমি কেন ম্যাথ এরর পাচ্ছি?",
        "answer": "সবচেয়ে সাধারণ কারণ হলো 1-এর বেশি অনুপাত, যা ঘটে যখন প্রবেশ করানো সন্নিহিত বাহু অতিভুজের চেয়ে লম্বা হয়। বৈধ সমকোণী ত্রিভুজে অতিভুজ সবসময় সবচেয়ে লম্বা হয়, তাই আপনার বাহুর লেবেলগুলো পরীক্ষা করুন।"
      },
      {
        "question": "বিপরীত বাহু না জেনে কি arccos ব্যবহার করতে পারি?",
        "answer": "হ্যাঁ। এটাই arccos এর প্রধান সুবিধা: এর শুধু সন্নিহিত বাহু ও অতিভুজ দরকার। বিপরীত বাহু কখনো হিসাবে আসে না।"
      },
      {
        "question": "cos ও arccos এর মধ্যে পার্থক্য কী?",
        "answer": "কোসাইন কোণ নিয়ে অনুপাত দেয়: cos(60 ডিগ্রি) = 0.5। Arccos এর উল্টোটা করে: এটি অনুপাত নিয়ে কোণ দেয়, তাই arccos(0.5) = 60 ডিগ্রি। কোণ জানা থাকলে কোসাইন ব্যবহার করুন; বাহুগুলো জানা থাকলে arccos ব্যবহার করুন।"
      },
      {
        "question": "arccos, arcsin ও arctan একই উত্তর কেন দেয়?",
        "answer": "কারণ এগুলো একই জ্যামিতিক কোণকে ভিন্ন ভিন্ন বাহুর জোড়া দিয়ে বর্ণনা করে। 3-4-5 ত্রিভুজে, arccos(4/5), arcsin(3/5) ও arctan(3/4) সবগুলো 36.87 ডিগ্রির সমান। পদ্ধতিগুলোর মধ্যে মিল বাহুর লেবেল ঠিক আছে তা নিশ্চিত করে।"
      },
      {
        "question": "b/c ঠিক 0.5 হলে এর অর্থ কী?",
        "answer": "কোণটি ঠিক 60 ডিগ্রি। এটি 30-60-90 বিশেষ ত্রিভুজ, যেখানে 60-ডিগ্রি কোণের সন্নিহিত বাহুটি অতিভুজের অর্ধেক।"
      },
      {
        "question": "উত্তর কি ডিগ্রিতে হবে না রেডিয়ানে?",
        "answer": "এই ক্যালকুলেটর ডিগ্রি ব্যবহার করে, যা নির্মাণ, জরিপ ও শ্রেণিকক্ষের জ্যামিতির জন্য মানদণ্ড। হাতে হিসাব করলে ক্যালকুলেটরটি ডিগ্রি মোডে আছে কিনা নিশ্চিত করুন; 0.64 এর মতো রেডিয়ান-মোড ফলাফলকে 180/pi দিয়ে গুণ করলে 36.87 ডিগ্রি হয়।"
      },
      {
        "question": "অন্য সূক্ষ্ম কোণটি কীভাবে বের করব?",
        "answer": "90 ডিগ্রি থেকে বিয়োগ করুন। যদি arccos দেয় A = 36.87 ডিগ্রি, তাহলে B = 90 - 36.87 = 53.13 ডিগ্রি। আর কোনো ত্রিকোণমিতির দরকার নেই।"
      },
      {
        "question": "arccos এর ফলাফল কি কখনো 90 ডিগ্রি হতে পারে?",
        "answer": "শুধু সীমা হিসেবে: arccos(0) = 90 ডিগ্রি, কিন্তু শূন্য সন্নিহিত বাহু মানে অধঃপতিত ত্রিভুজ, আসল ত্রিভুজ নয়। arccos থেকে পাওয়া বৈধ সমকোণী ত্রিভুজের কোণ সবসময় 0 ও 90 ডিগ্রির মধ্যে থাকে।"
      },
      {
        "question": "আমার arccos উত্তর কীভাবে যাচাই করব?",
        "answer": "cos(A) হিসাব করুন এবং নিশ্চিত করুন যে তা b/c এর সমান। তৃতীয় বাহু ব্যবহার করে arcsin বা arctan দিয়েও পুনরায় হিসাব করুন; সব পদ্ধতির মিলতে হবে। শেষে পরীক্ষা করুন যে দুটো সূক্ষ্ম কোণের যোগফল ঠিক 90 ডিগ্রি।"
      },
      {
        "question": "ত্রিভুজের স্কেল বদলালে কি arccos ফলাফল বদলায়?",
        "answer": "না। সদৃশ ত্রিভুজের কোণ একই থাকে। 3-4-5 ত্রিভুজ ও 6-8-10 ত্রিভুজ দুটোই arccos(0.8) = 36.87 ডিগ্রি দেয়, কারণ স্কেলে অনুপাত b/c বদলায় না।"
      }
    ],
    "relatedHeading": "সম্পর্কিত সমকোণী ত্রিভুজ ক্যালকুলেটর দেখুন",
    "relatedItems": [
      "সমকোণী ত্রিভুজ কোণ ক্যালকুলেটর",
      "সমকোণী ত্রিভুজ সাইন থেকে কোণ ক্যালকুলেটর",
      "সমকোণী ত্রিভুজ ট্যানজেন্ট থেকে কোণ ক্যালকুলেটর",
      "সমকোণী ত্রিভুজ অনুপস্থিত কোণ ক্যালকুলেটর",
      "সমকোণী ত্রিভুজ ত্রিকোণমিতিক অনুপাত ক্যালকুলেটর",
      "কোসাইন অনুপাত ক্যালকুলেটর"
    ],
    "tocHeading": "এই গাইডে",
    "tocItems": {
      "arccos-intro": "কোসাইন থেকে কোণ ক্যালকুলেটর কী?",
      "arccos-what": "Arccos (ইনভার্স কোসাইন) বোঝা",
      "arccos-vs": "Arccos বনাম Arcsin বনাম Arctan",
      "arccos-anatomy": "সন্নিহিত বাহু ও অতিভুজ",
      "arccos-howto": "ক্যালকুলেটর ব্যবহারের নিয়ম",
      "arccos-examples": "16টি সমাধানসহ উদাহরণ",
      "arccos-special": "বিশেষ কোণের মান",
      "arccos-mistakes": "সাধারণ ভুলগুলো",
      "arccos-verify": "উত্তর যাচাই করা",
      "arccos-applications": "বাস্তব জীবনে প্রয়োগ",
      "arccos-related": "সম্পর্কিত ক্যালকুলেটর",
      "arccos-conclusion": "আত্মবিশ্বাসের সাথে কোসাইন থেকে যেকোনো কোণ বের করুন",
      "arccos-faq": "প্রায়শই জিজ্ঞাসিত প্রশ্ন"
    },
    "sections": {
      "arccos-intro": {
        "h2": "সমকোণী ত্রিভুজের কোসাইন থেকে কোণ ক্যালকুলেটর কী?",
        "blocks": [
          {
            "kind": "p",
            "text": "সমকোণী ত্রিভুজের কোসাইন থেকে কোণ ক্যালকুলেটর সূক্ষ্ম কোণ বের করে যখন আপনি সন্নিহিত বাহু ও অতিভুজ জানেন। এটি এই দুই বাহুর অনুপাতের ওপর ইনভার্স কোসাইন ফাংশন প্রয়োগ করে, যা arccos বা cos[[-1]] হিসেবে লেখা হয়। ফলাফল হলো ডিগ্রিতে কোণ A।"
          },
          {
            "kind": "p",
            "text": "এই টুলটি একটি নির্দিষ্ট পরিমাপ পরিস্থিতির জন্য আছে: আপনি আপনার লক্ষ্য কোণের পাশের বাহু ও ত্রিভুজের সবচেয়ে লম্বা বাহু মাপতে পারেন, কিন্তু বিপরীত বাহু অজানা বা পৌঁছানো কঠিন। প্রথমে বিপরীত বাহু হিসাব করার বদলে, arccos তা সম্পূর্ণ এড়িয়ে যায় এবং সন্নিহিত-বিভাজিত-অতিভুজ অনুপাতকে সরাসরি কোণে রূপান্তর করে।"
          },
          {
            "kind": "p",
            "text": "উদাহরণস্বরূপ, সন্নিহিত বাহু 4 ও অতিভুজ 5 দিলে অনুপাত হয় 0.8। 0.8 এর arccos প্রায় 36.87 ডিগ্রি। এটাই কোণ A। অন্য সূক্ষ্ম কোণটি পূরক নিয়ম থেকে পাওয়া যায়: 90 বিয়োগ 36.87, অর্থাৎ 53.13 ডিগ্রি।"
          },
          {
            "kind": "p",
            "text": "Arccos এই সাইটের তিনটি ইনভার্স ত্রিকোণমিতিক টুলের একটি। আপনার জানা বাহুগুলো যদি বিপরীত বাহু ও অতিভুজ হয়, তাহলে সাইন থেকে কোণ ক্যালকুলেটরই সঠিক পছন্দ। অতিভুজ না জেনে দুটো পা জানা থাকলে ট্যানজেন্ট থেকে কোণ ক্যালকুলেটর ব্যবহার করুন। এই পৃষ্ঠায় কোসাইন ক্ষেত্রটি পূর্ণ গভীরতায় আলোচনা করা হয়েছে।"
          }
        ]
      },
      "arccos-what": {
        "h2": "Arccos (ইনভার্স কোসাইন) বোঝা",
        "blocks": [
          {
            "kind": "p",
            "text": "সাধারণ কোসাইন কোণ নিয়ে অনুপাত দেয়। 60 ডিগ্রির কোসাইন 0.5। Arccos এর উল্টোটা করে: এটি অনুপাত নিয়ে কোণ দেয়। 0.5 এর arccos 60 ডিগ্রি। দুই ফাংশন একে অপরকে বাতিল করে, এজন্য arccos কে cos[[-1]] হিসেবেও লেখা হয়।"
          },
          {
            "kind": "p",
            "text": "এই ক্যালকুলেটরের ব্যবহৃত সূত্র হলো [[A = \\cos^{-1}(b/c)]]। এখানে b সন্নিহিত বাহু, c অতিভুজ, এবং A তাদের মধ্যবর্তী কোণ। বৈধ সমকোণী ত্রিভুজের জন্য b/c অনুপাত সবসময় 0 ও 1 এর মধ্যে থাকে, কারণ সন্নিহিত বাহু সবসময় অতিভুজের চেয়ে ছোট।"
          },
          {
            "kind": "p",
            "text": "arccos কে একটি প্রশ্ন জিজ্ঞাসা করার মতো ভাবুন: \"কোন কোণের এই কোসাইন মান আছে?\" যদি b/c 0.8 হয়, প্রশ্নটি হয় \"কোন কোণের কোসাইন 0.8?\" উত্তর, 36.87 ডিগ্রি, হলো সেই কোণ যার সন্নিহিত বাহু অতিভুজের 80 শতাংশ লম্বা।"
          },
          {
            "kind": "h3",
            "text": "অনুপাতটি একটি গল্প বলে"
          },
          {
            "kind": "p",
            "text": "b/c এর মান ত্রিভুজের আকৃতি বর্ণনা করে। 1-এর কাছাকাছি অনুপাত মানে সন্নিহিত বাহু প্রায় অতিভুজের সমান লম্বা, তাই তাদের মধ্যবর্তী কোণটি খুব ছোট। 0-এর কাছাকাছি অনুপাত মানে অতিভুজের তুলনায় সন্নিহিত বাহু খুব ছোট, তাই কোণটি 90 ডিগ্রির দিকে ব্যাপকভাবে খুলে যায়। ঠিক 0.5 অনুপাত সবসময় 60 ডিগ্রি মানে।"
          },
          {
            "kind": "h3",
            "text": "Arccos এর ডোমেইন"
          },
          {
            "kind": "p",
            "text": "এই জ্যামিতিক প্রেক্ষাপটে arccos শুধু 0 থেকে 1 পর্যন্ত ইনপুট গ্রহণ করে। 1-এর ওপরে অনুপাত সমকোণী ত্রিভুজের জন্য অসম্ভব এবং লেবেলিং ভুলের ইঙ্গিত দেয়: অতিভুজই হর হতে হবে এবং সবচেয়ে লম্বা বাহু হতে হবে। ঋণাত্মক অনুপাত স্থূলকোণ বর্ণনা করবে, যা সমকোণী ত্রিভুজে কোণ A হিসেবে আসতে পারে না।"
          }
        ],
        "imgAlt": "arccos এর দুই ধাপ দেখানো চিত্র: b কে c দিয়ে ভাগ করুন, তারপর কোণ পেতে arccos প্রয়োগ করুন",
        "figcaption": "arccos কীভাবে কাজ করে: সন্নিহিত বাহুকে অতিভুজ দিয়ে ভাগ করুন, তারপর কোণ ফিরে পেতে ইনভার্স কোসাইন প্রয়োগ করুন।"
      },
      "arccos-vs": {
        "h2": "Arccos বনাম Arcsin বনাম Arctan: কখন কোনটি ব্যবহার করবেন",
        "blocks": [
          {
            "kind": "p",
            "text": "তিনটি ইনভার্স ফাংশন একই ত্রিভুজে প্রয়োগ করলে একই কোণ বের করে। এদের পার্থক্য শুধু কোন বাহুগুলো দরকার তাতে। সঠিকভাবে বেছে নিলে যে বাহু দরকার নেই তা হিসাব করার ঝামেলা এড়ানো যায়।"
          },
          {
            "kind": "p",
            "text": "<strong>arccos</strong> ব্যবহার করুন যখন আপনি সন্নিহিত বাহু (b) ও অতিভুজ (c) জানেন। সূত্র হলো [[A = \\cos^{-1}(b/c)]]। এটি স্বাভাবিক পছন্দ যখন অতিভুজ সরাসরি মাপা হয়েছে, উদাহরণস্বরূপ ঢাল বরাবর ফিতা দিয়ে, এবং অনুভূমিক দূরত্ব জানা আছে।"
          },
          {
            "kind": "p",
            "text": "<strong>arcsin</strong> ব্যবহার করুন যখন আপনি বিপরীত বাহু (a) ও অতিভুজ (c) জানেন। সূত্র হলো [[A = \\sin^{-1}(a/c)]]। উচ্চতার সমস্যায় arcsin ভালো: উল্লম্ব উচ্চতা ভূমি-স্তরের কোণের বিপরীতে থাকে। সাইন থেকে কোণ ক্যালকুলেটর এই ক্ষেত্রটি সামলায়।"
          },
          {
            "kind": "p",
            "text": "<strong>arctan</strong> ব্যবহার করুন যখন আপনি দুটো পা (a ও b) জানেন কিন্তু অতিভুজ জানেন না। সূত্র হলো [[A = \\tan^{-1}(a/b)]]। ছাদের উচ্চতা-বিভাজিত-চলন এর মতো মাঠের পরিমাপে arctan ভালো কারণ দুটো পাই সরাসরি মাপা হয়। সেই পদ্ধতির জন্য ট্যানজেন্ট থেকে কোণ ক্যালকুলেটর দেখুন।"
          },
          {
            "kind": "h3",
            "text": "তাদের মিলতে হবে"
          },
          {
            "kind": "p",
            "text": "যেকোনো একক ত্রিভুজের জন্য, arccos(b/c), arcsin(a/c), এবং arctan(a/b) একই কোণ দেয়। 3-4-5 ত্রিভুজে, arccos(4/5), arcsin(3/5) ও arctan(3/4) সবগুলো 36.87 ডিগ্রির সমান। দুটো পদ্ধতি না মিললে কোনো বাহু ভুল লেবেল করা হয়েছে। এই ক্রস-চেকই সবচেয়ে নির্ভরযোগ্য যাচাই, এবং ত্রিকোণমিতিক অনুপাত ক্যালকুলেটর একবারে তিনটি অনুপাতই নিশ্চিত করতে পারে।"
          },
          {
            "kind": "h3",
            "text": "কেন সবসময় Arctan ব্যবহার করবেন না?"
          },
          {
            "kind": "p",
            "text": "Arctan এর দুটো পাই দরকার। বিপরীত বাহু অজানা ও মাপা কঠিন হলে, arctan ব্যবহারের জন্য প্রথমে তা হিসাব করা অপ্রয়োজনীয় ধাপ যোগ করে এবং ভুলের আরেকটি সুযোগ তৈরি করে। Arccos আপনার কাছে থাকা দুটো বাহু থেকে সরাসরি চাওয়া কোণে যায়। অভ্যাস অনুযায়ী নয়, আপনার পরিমাপ অনুযায়ী ফাংশন বাছুন।"
          }
        ]
      },
      "arccos-anatomy": {
        "h2": "সন্নিহিত বাহু ও অতিভুজ: দুটি ইনপুট",
        "blocks": [
          {
            "kind": "p",
            "text": "Arccos এর ঠিক দুটি বাহু দরকার: সন্নিহিত বাহু b ও অতিভুজ c। এই লেবেলগুলো ঠিক করা পুরো লড়াই। তারপর যা বাকি তা শুধু পাটিগণিত।"
          },
          {
            "kind": "h3",
            "text": "সন্নিহিত বাহু চেনা"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত বাহু হলো সেই পা যা কোণ A কে স্পর্শ করে। এটি কোণেরই একটি প্রান্ত গঠন করে। নিচের চিত্রে, বাহু b সমকোণ থেকে কোণ A পর্যন্ত নিচ বরাবর চলেছে। আপনি যদি কোণ A এর বদলে কোণ B এর জন্য সমাধান করেন, তাহলে লেবেলগুলো বদলে যায়: B এর সন্নিহিত বাহু হলো সেই বাহু যা B কে স্পর্শ করে।"
          },
          {
            "kind": "h3",
            "text": "অতিভুজ চেনা"
          },
          {
            "kind": "p",
            "text": "অতিভুজ হলো সমকোণের বিপরীত বাহু। এটি সবসময় ত্রিভুজের সবচেয়ে লম্বা বাহু। এটি সমকোণের শীর্ষকে কখনো স্পর্শ করে না। আপনার \"অতিভুজ\" যদি আপনার তিনটি পরিমাপের মধ্যে সবচেয়ে লম্বা না হয়, হিসাবের আগে পুনরায় লেবেল করুন। তিনটিই জানা থাকলে কোন বাহু সবচেয়ে লম্বা তা পিথাগোরাস উপপাদ্য ক্যালকুলেটর নিশ্চিত করতে পারে।"
          },
          {
            "kind": "h3",
            "text": "বিপরীত বাহু কেন বাইরে থাকে"
          },
          {
            "kind": "p",
            "text": "কোসাইন সন্নিহিত-বিভাজিত-অতিভুজ হিসেবে সংজ্ঞায়িত। এই অনুপাতে বিপরীত বাহু আসেই না। এই ক্যালকুলেটরের উদ্দেশ্যই এটা: যখন বিপরীত বাহু অজানা, পোঁতা, বা আপনার পরিমাপ ব্যবস্থার সাথে অপ্রাসঙ্গিক, arccos তবুও কোণটি দেয়। আপনি বিপরীত বাহুকে উপেক্ষা করছেন না; আপনি এমন অনুপাত ব্যবহার করছেন যার কখনো তা দরকার ছিল না।"
          }
        ],
        "imgAlt": "arccos সূত্রের জন্য সন্নিহিত বাহু b ও অতিভুজ c হাইলাইট করা সমকোণী ত্রিভুজ",
        "figcaption": "arccos এর জন্য অ্যানাটমি: b হলো কোণ A কে স্পর্শ করা সন্নিহিত বাহু, c হলো সমকোণের বিপরীত অতিভুজ।"
      },
      "arccos-howto": {
        "h2": "কোসাইন থেকে কোণ ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
        "blocks": [],
        "steps": [
          "<strong>সমকোণ নিশ্চিত করুন।</strong> ক্যালকুলেটর শুধু সমকোণী ত্রিভুজের জন্য কাজ করে। প্রথমে 90-ডিগ্রি কোণাটি চিহ্নিত করুন।",
          "<strong>লক্ষ্য কোণ বেছে নিন।</strong> সিদ্ধান্ত নিন আপনি কোণ A না কোণ B সমাধান করছেন। এই পছন্দের সাপেক্ষে সন্নিহিত বাহু সংজ্ঞায়িত হয়।",
          "<strong>সন্নিহিত বাহু b মাপুন।</strong> এটি লক্ষ্য কোণকে স্পর্শ করা পা। যেকোনো এককে রেকর্ড করুন।",
          "<strong>অতিভুজ c মাপুন।</strong> এটি সবচেয়ে লম্বা বাহু, সমকোণের বিপরীতে। b এর একই একক ব্যবহার করুন।",
          "<strong>পরীক্ষা করুন b, c এর চেয়ে ছোট কিনা।</strong> না হলে, বাহুগুলো ভুল লেবেল করা হয়েছে। অতিভুজ সবচেয়ে লম্বা হতেই হবে।",
          "<strong>দুটো মান প্রবেশ করিয়ে Calculate চাপুন।</strong> টুলটি b/c হিসাব করে, arccos প্রয়োগ করে, এবং ডিগ্রিতে কোণ A দেয়।",
          "<strong>দ্বিতীয় কোণ বের করুন।</strong> 90 ডিগ্রি থেকে বিয়োগ করুন: B = 90[[^\\circ]] বিয়োগ A।",
          "<strong>যাচাই করুন।</strong> ক্যালকুলেটরে cos(A) হিসাব করুন এবং নিশ্চিত করুন তা b/c এর সমান। মিললে, উত্তরটি শক্ত।"
        ],
        "imgAlt": "b সমান 4 ও c সমান 5 সহ arccos এর চার ধাপের সমাধানসহ উদাহরণ",
        "figcaption": "সমাধানসহ উদাহরণ: b = 4, c = 5 দিলে A = arccos(0.8), প্রায় 36.87 ডিগ্রি, রাউন্ড-ট্রিপে যাচাই করা।"
      },
      "arccos-examples": {
        "h2": "16টি সমাধানসহ উদাহরণ",
        "blocks": [
          {
            "kind": "p",
            "text": "প্রতিটি উদাহরণ একই চার ধাপ অনুসরণ করে: সূত্র লিখুন, প্রতিস্থাপন করুন, ভাগ করুন, arccos প্রয়োগ করুন। কোণগুলো দুই দশমিক স্থানে পূর্ণ করা হয়েছে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 1: 3-4-5 ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত b = 4 ও অতিভুজ c = 5 দেওয়া, কোণ A বের করুন।"
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) [[\\approx 36.87^\\circ]]। পূরক B = 53.13[[^\\circ]]।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 2: 5-12-13 ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত b = 12 ও অতিভুজ c = 13 দেওয়া, কোণ A বের করুন।"
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) [[\\approx 22.62^\\circ]]। পূরক B = 67.38[[^\\circ]]।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 3: 8-15-17 ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত b = 8 ও অতিভুজ c = 17 দেওয়া, কোণ A বের করুন।"
          },
          {
            "kind": "p",
            "text": "A = arccos(8/17) = arccos(0.4706) [[\\approx 61.93^\\circ]]। পূরক B = 28.07[[^\\circ]]।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 4: একই ত্রিভুজ, অন্য কোণ"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত b = 15 ও অতিভুজ c = 17 দেওয়া (8-15-17 ত্রিভুজের কোণ B এর জন্য সমাধান)।"
          },
          {
            "kind": "p",
            "text": "B = arccos(15/17) = arccos(0.8824) [[\\approx 28.07^\\circ]]। লক্ষ্য করুন 61.93 + 28.07 = 90, যেমনটা হওয়া উচিত।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 5: 5-12-13, অন্য কোণ"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত b = 5 ও অতিভুজ c = 13 দেওয়া।"
          },
          {
            "kind": "p",
            "text": "B = arccos(5/13) = arccos(0.3846) [[\\approx 67.38^\\circ]]। এটি উদাহরণ 2 এর পূরকের সাথে মেলে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 6: 3-4-5, অন্য কোণ"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত b = 3 ও অতিভুজ c = 5 দেওয়া।"
          },
          {
            "kind": "p",
            "text": "B = arccos(3/5) = arccos(0.6) [[\\approx 53.13^\\circ]]। এটি উদাহরণ 1 এর পূরকের সাথে মেলে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 7: 60-ডিগ্রি বিশেষ ক্ষেত্র"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত b = 1 ও অতিভুজ c = 2 দেওয়া।"
          },
          {
            "kind": "p",
            "text": "A = arccos(1/2) = arccos(0.5) = 60[[^\\circ]] ঠিক। এটি 30-60-90 বিশেষ ত্রিভুজ। বিশেষ সমকোণী ত্রিভুজ ক্যালকুলেটর এই সঠিক মানগুলো কভার করে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 8: 7-24-25 ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত b = 7 ও অতিভুজ c = 25 দেওয়া, কোণ A বের করুন।"
          },
          {
            "kind": "p",
            "text": "A = arccos(7/25) = arccos(0.28) [[\\approx 73.74^\\circ]]। পূরক B = 16.26[[^\\circ]]।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 9: 7-24-25, অন্য কোণ"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত b = 24 ও অতিভুজ c = 25 দেওয়া।"
          },
          {
            "kind": "p",
            "text": "B = arccos(24/25) = arccos(0.96) [[\\approx 16.26^\\circ]]। উদাহরণ 8 এর পূরকের সাথে মেলে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 10: 9-40-41 ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত b = 9 ও অতিভুজ c = 41 দেওয়া, কোণ A বের করুন।"
          },
          {
            "kind": "p",
            "text": "A = arccos(9/41) = arccos(0.2195) [[\\approx 77.32^\\circ]]। ছোট সন্নিহিত বাহু বড় কোণ দেয়।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 11: 9-40-41, অন্য কোণ"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত b = 40 ও অতিভুজ c = 41 দেওয়া।"
          },
          {
            "kind": "p",
            "text": "B = arccos(40/41) = arccos(0.9756) [[\\approx 12.68^\\circ]]। লক্ষ্য করুন 77.32 + 12.68 = 90।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 12: 20-21-29 ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত b = 20 ও অতিভুজ c = 29 দেওয়া, কোণ A বের করুন।"
          },
          {
            "kind": "p",
            "text": "A = arccos(20/29) = arccos(0.6897) [[\\approx 46.40^\\circ]]। পূরক B = 43.60[[^\\circ]]।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 13: 20-21-29, অন্য কোণ"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত b = 21 ও অতিভুজ c = 29 দেওয়া।"
          },
          {
            "kind": "p",
            "text": "B = arccos(21/29) = arccos(0.7241) [[\\approx 43.60^\\circ]]। উদাহরণ 12 এর পূরকের সাথে মেলে।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 14: 6-8-10 ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত b = 6 ও অতিভুজ c = 10 দেওয়া, কোণ A বের করুন।"
          },
          {
            "kind": "p",
            "text": "A = arccos(6/10) = arccos(0.6) [[\\approx 53.13^\\circ]]। উদাহরণ 6 এর মতো একই কোণ, কারণ 6-8-10 স্কেল করা 3-4-5।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 15: 6-8-10, অন্য কোণ"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত b = 8 ও অতিভুজ c = 10 দেওয়া।"
          },
          {
            "kind": "p",
            "text": "B = arccos(8/10) = arccos(0.8) [[\\approx 36.87^\\circ]]। উদাহরণ 1 এর মতো একই, যা নিশ্চিত করে সদৃশ ত্রিভুজের কোণ একই।"
          },
          {
            "kind": "h3",
            "text": "উদাহরণ 16: 12-16-20 ত্রিভুজ"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত b = 12 ও অতিভুজ c = 20 দেওয়া, কোণ A বের করুন।"
          },
          {
            "kind": "p",
            "text": "A = arccos(12/20) = arccos(0.6) [[\\approx 53.13^\\circ]]। আরেকটি স্কেল করা 3-4-5, আবার একই কোণ। বাহু স্কেল করলে কোণ কখনো বদলায় না।"
          }
        ]
      },
      "arccos-special": {
        "h2": "মুখস্থ করার মতো বিশেষ কোণের মান",
        "blocks": [
          {
            "kind": "p",
            "text": "কয়েকটি arccos মান এতবার আসে যে সেগুলো চিনলে সময় বাঁচে। এগুলো বিশেষ সমকোণী ত্রিভুজ থেকে আসে।"
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(1) = 0^\\circ]]: সন্নিহিত বাহু অতিভুজের সমান, তাই কোণ শূন্যে ভেঙে পড়ে। এটি অধঃপতিত ক্ষেত্র, আসল ত্রিভুজ নয়, কিন্তু এটি স্কেলটিকে নোঙ্গর করে।"
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(\\sqrt{3}/2) \\approx 30^\\circ]]: 30-60-90 ত্রিভুজ থেকে। যখন সন্নিহিত বাহু অতিভুজের প্রায় 86.6 শতাংশ হয়, কোণ হয় 30 ডিগ্রি।"
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(\\sqrt{2}/2) = 45^\\circ]]: 45-45-90 ত্রিভুজ থেকে। সমান পা এই সঠিক মান দেয়।"
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(1/2) = 60^\\circ]]: 30-60-90 ত্রিভুজ থেকে, উদাহরণ 7 এর ক্ষেত্র। যখন সন্নিহিত বাহু ঠিক অতিভুজের অর্ধেক হয়, কোণ ঠিক 60 ডিগ্রি হয়।"
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(0) = 90^\\circ]]: সন্নিহিত বাহু শূন্যে সঙ্কুচিত হয়, তাই কোণ সমকোণে খুলে যায়। শূন্য ক্ষেত্রের মতো, এটি সীমা, আসল ত্রিভুজ কোণ নয়।"
          },
          {
            "kind": "p",
            "text": "এই ল্যান্ডমার্কগুলোর মধ্যে, অনুপাত বাড়লে arccos মসৃণভাবে কমে। পাঁচটি নোঙ্গর বিন্দু মুখস্থ করলে যেকোনো arccos মানসিকভাবে অনুমান করা যায়: 0.7 অনুপাত 0.5 (60 ডিগ্রি) ও 0.866 (30 ডিগ্রি) এর মধ্যে, 45 ডিগ্রির একটু কাছে। সত্য মান প্রায় 45.57 ডিগ্রি।"
          }
        ]
      },
      "arccos-mistakes": {
        "h2": "Arccos ব্যবহারে সাধারণ ভুল",
        "blocks": [
          {
            "kind": "h3",
            "text": "সন্নিহিত বাহুর বদলে বিপরীত বাহু ব্যবহার করা"
          },
          {
            "kind": "p",
            "text": "সবচেয়ে ঘন ঘন ভুল। Arccos এর দরকার কোণ A কে স্পর্শ করা বাহু, তার বিপরীত বাহু নয়। বিপরীত বাহু arccos এ দিলে উদ্দিষ্ট কোণের পূরক পাওয়া যায়। 3-4-5 ত্রিভুজে, arccos(3/5) = 53.13 ডিগ্রি হলো কোণ B, কোণ A নয়। সমাধান: ত্রিভুজটি স্কেচ করুন, লক্ষ্য কোণ চিহ্নিত করুন, এবং কোন পা তাকে স্পর্শ করে তা ট্রেস করুন।"
          },
          {
            "kind": "h3",
            "text": "লবে অতিভুজ বসানো"
          },
          {
            "kind": "p",
            "text": "Arccos আশা করে সন্নিহিত-বিভাজিত-অতিভুজ, 1 এর নিচের সংখ্যা। b/c এর বদলে c/b প্রবেশ করালে 1 এর ওপরে অনুপাত আসে, এবং ক্যালকুলেটর ম্যাথ এরর দেয়। সমাধান: arccos অনুপাতে অতিভুজ সবসময় হর।"
          },
          {
            "kind": "h3",
            "text": "Arccos কে কোসাইনের সাথে গুলিয়ে ফেলা"
          },
          {
            "kind": "p",
            "text": "অনেক ক্যালকুলেটরে কোসাইন কী ও ইনভার্স কোসাইন কী (প্রায়শই cos[[-1]] বা arccos লেবেল করা) পাশাপাশি থাকে। arccos(0.8) এর বদলে cos(0.8) চাপলে 36.87 ডিগ্রির বদলে 0.6967 আসে, অর্থহীন অনুপাত। সমাধান: পরীক্ষা করুন ক্যালকুলেটর ডিগ্রি মোডে আছে এবং আপনি ইনভার্স কী চেপেছেন।"
          },
          {
            "kind": "h3",
            "text": "ডিগ্রি ও রেডিয়ান মেশানো"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) হলো 36.87 ডিগ্রি কিন্তু 0.6435 রেডিয়ান। 3-4-5 ত্রিভুজের জন্য হাতে হিসাবে 0.64 পেলে ক্যালকুলেটর রেডিয়ান মোডে আছে। রূপান্তরের জন্য 180/pi দিয়ে গুণ করুন, বা মোড ডিগ্রিতে বদলান। এই ক্যালকুলেটর ডিগ্রিতে আউটপুট দেয়।"
          },
          {
            "kind": "h3",
            "text": "ভিন্ন এককে বাহু প্রবেশ করানো"
          },
          {
            "kind": "p",
            "text": "সন্নিহিত ইঞ্চিতে ও অতিভুজ ফুটে অনুপাত নষ্ট করে। প্রথমে সাধারণ এককে রূপান্তর করুন। দুটো ইনপুট একই একক শেয়ার করলেই অনুপাত এককহীন হয়।"
          },
          {
            "kind": "h3",
            "text": "অনুপাতটি খুব আগেই পূর্ণ করা"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) = 36.87 ডিগ্রি, কিন্তু 0.795 থেকে পূর্ণ করা arccos(0.80) দেয় 37.24 ডিগ্রি। 0 ও 1 এর কাছাকাছি অনুপাতে, যেখানে arccos সবচেয়ে খাড়া, ছোট অনুপাত ভুল বড় হয়। ভাগের মধ্যে পূর্ণ নির্ভুলতা রাখুন এবং শুধু চূড়ান্ত কোণ পূর্ণ করুন।"
          },
          {
            "kind": "h3",
            "text": "কোন কোণ সমাধান করা হয়েছে তা ভুলে যাওয়া"
          },
          {
            "kind": "p",
            "text": "Arccos সেই কোণ দেয় যার সন্নিহিত বাহু আপনি প্রবেশ করেছেন। কোণ B কে স্পর্শ করা বাহু প্রবেশ করালে ফলাফল কোণ B। উত্তরটি সঠিক কোণের নামে লেবেল করুন, বা পূরক দিয়ে যাচাই করুন: দুটো সূক্ষ্ম কোণের যোগফল 90 ডিগ্রি হতেই হবে।"
          }
        ]
      },
      "arccos-verify": {
        "h2": "আপনার Arccos উত্তর যাচাই করা",
        "blocks": [
          {
            "kind": "p",
            "text": "তিনটি পরীক্ষা সঠিক arccos হিসাব নিশ্চিত করে:"
          },
          {
            "kind": "p",
            "text": "3-4-5 ত্রিভুজের জন্য, বাহুগুলো পিথাগোরাস উপপাদ্য মেনে চলে কিনাও যাচাই করুন: 9 + 16 = 25। সেগুলো থেকে পাওয়া কোণে ভরসা করার আগে বাহুগুলো নিশ্চিত করা ভালো অভ্যাস, এবং পিথাগোরাস উপপাদ্য ক্যালকুলেটর তা দ্রুত করে।"
          },
          {
            "kind": "p",
            "text": "চতুর্থ পরীক্ষায় পূরক ব্যবহার করা হয়। B = 90[[^\\circ]] বিয়োগ A হিসাব করুন, তারপর যাচাই করুন অন্য অনুপাতের arccos B দেয়। উদাহরণ 1 এ, arccos(3/5) = 53.13[[^\\circ]], যা 90 বিয়োগ 36.87 এর সাথে মেলে। চারটি পরীক্ষা পাস করলে উত্তর সন্দেহাতীত।"
          }
        ],
        "steps": [
          "<strong>পরিসর পরীক্ষা।</strong> ফলাফল 0 ও 90 ডিগ্রির মধ্যে কঠোরভাবে থাকতে হবে। এর বাইরে কিছু মানে অবৈধ ইনপুট বা ভুল লেবেল করা বাহু।",
          "<strong>রাউন্ড-ট্রিপ পরীক্ষা।</strong> cos(A) হিসাব করুন এবং নিশ্চিত করুন তা b/c এর সমান। উদাহরণ 1 এর জন্য, cos(36.87[[^\\circ]]) [[\\approx]] 0.8 = 4/5। রাউন্ড ট্রিপ ব্যর্থ হলে কোণ ভুল।",
          "<strong>ক্রস-পদ্ধতি পরীক্ষা।</strong> তৃতীয় বাহু ব্যবহার করে arcsin বা arctan দিয়ে পুনরায় হিসাব করুন। যদি arccos(4/5) = 36.87[[^\\circ]] এবং arctan(3/4) = 36.87[[^\\circ]] হয়, উত্তরটি শক্ত। অমিল লেবেলিং ভুলের দিকে ইশারা করে।"
        ]
      },
      "arccos-applications": {
        "h2": "Arccos এর বাস্তব জীবনে প্রয়োগ",
        "blocks": [
          {
            "kind": "p",
            "text": "Arccos সেখানেই আসে যেখানে ঢাল দূরত্ব ও অনুভূমিক দূরত্বই স্বাভাবিক পরিমাপ। অতিভুজ ঢাল বরাবরই মাপা হয়, এবং সন্নিহিত বাহু হলো অনুভূমিক উপাদান।"
          },
          {
            "kind": "h3",
            "text": "ঢাল জরিপ"
          },
          {
            "kind": "p",
            "text": "একজন জরিপকারী ঢাল বরাবর 65 মিটার ও অনুভূমিকভাবে 60 মিটার মাপেন। ঢাল কোণ হলো arccos(60/65), প্রায় 22.6 ডিগ্রি। এটি আদর্শ arccos পরিস্থিতি: ঢালু দূরত্ব ফিতায় মাপা সহজ, অনুভূমিক আসে মানচিত্র বা লেভেল থেকে, এবং বিপরীত বাহু (উচ্চতা) হলো যা আপনি এরপর হিসাব করতে পারেন।"
          },
          {
            "kind": "h3",
            "text": "ছায়া থেকে সূর্যের উচ্চতা"
          },
          {
            "kind": "p",
            "text": "একটি 10-মিটার আলোর রশ্মি 8-মিটার ছায়া ফেলে। সূর্যের উচ্চতা কোণ হলো arccos(8/10), প্রায় 36.9 ডিগ্রি। ছায়ার সমস্যা স্বাভাবিক arccos সমস্যা কারণ ছায়া ভূমি বরাবর থাকে (সন্নিহিত) এবং রশ্মিই অতিভুজ।"
          },
          {
            "kind": "h3",
            "text": "ছাদের রাফটার পিচ"
          },
          {
            "kind": "p",
            "text": "একটি রাফটার 6.5 মিটার বিস্তৃত এবং অনুভূমিক চলন 6 মিটার। কার্নিশে পিচ কোণ হলো arccos(6/6.5), প্রায় 22.6 ডিগ্রি। কাঠমিস্ত্রিরা রাফটার সরাসরি ও চলন জোইস্ট বরাবর মাপেন, তাই arccos মাপা অনুযায়ীই ফিট করে।"
          },
          {
            "kind": "h3",
            "text": "ইঞ্জিনিয়ারিং ব্রেস"
          },
          {
            "kind": "p",
            "text": "একটি তির্যক ব্রেস 4 মিটার, অনুভূমিক ভিত্তি 3.5 মিটার। ব্রেস কোণ হলো arccos(3.5/4), প্রায় 28.96 ডিগ্রি। কাঠামোগত স্কেচে ব্রেস দৈর্ঘ্য ও তার পদচিহ্ন দেওয়া থাকে; arccos সেগুলোকে ইনস্টলেশন কোণে বদলে দেয়।"
          }
        ],
        "imgAlt": "জরিপ, ছায়া, ছাদের রাফটার ও ব্রেস কোণ হিসাব arccos দিয়ে দেখানো চারটি প্যানেল",
        "figcaption": "বাস্তব জগতের arccos সমস্যা: ঢাল কোণ, সূর্যের উচ্চতা, রাফটার পিচ ও ব্রেস ইনস্টলেশন কোণ।"
      },
      "arccos-related": {
        "h2": "সম্পর্কিত সমকোণী ত্রিভুজ ক্যালকুলেটর দেখুন",
        "blocks": []
      },
      "arccos-conclusion": {
        "h2": "আত্মবিশ্বাসের সাথে কোসাইন থেকে যেকোনো কোণ বের করুন",
        "blocks": [
          {
            "kind": "p",
            "text": "সন্নিহিত বাহু চিহ্নিত করে শুরু করুন: লক্ষ্য কোণকে স্পর্শ করা পা। নিশ্চিত করুন অতিভুজ সবচেয়ে লম্বা বাহু। ভাগ করুন, arccos প্রয়োগ করুন, এবং ডিগ্রিতে কোণ পড়ুন। 90 বিয়োগ প্রথমটি থেকে দ্বিতীয় কোণ নিন। রাউন্ড-ট্রিপ পরীক্ষা, ক্রস-পদ্ধতি হিসাব ও কোণ যোগফল দিয়ে যাচাই করুন। এই ধাপগুলোতে যেকোনো সন্নিহিত-ও-অতিভুজ সমস্যা নির্ভরযোগ্য রুটিনে পরিণত হয়। আপনার সংখ্যা চালাতে এই পৃষ্ঠার শীর্ষে ক্যালকুলেটরে ফিরুন।"
          }
        ]
      }
    }
  },
  "ja": {
    "faqs": [
      {
        "question": "A = arccos(b / c) は実際には何を意味しますか？",
        "answer": "隣辺を斜辺で割り、その小数から逆算して、コサインがその値と等しくなる角度を求めるという意味です。結果は、隣辺と斜辺の間の鋭角です。"
      },
      {
        "question": "arcsin ではなく arccos を使うのはどんなときですか？",
        "answer": "隣辺と斜辺が分かっている場合は arccos を使い、対辺と斜辺が分かっている場合は arcsin を使います。同じ三角形に対してはどちらも同じ角度を返します。選ぶ基準は、どちらの辺を測ったかです。"
      },
      {
        "question": "arccos で数学エラーが出るのはなぜですか？",
        "answer": "最も多い原因は 1 を超える比率で、入力した隣辺が斜辺より長い場合に起こります。正しい直角三角形では斜辺が必ず最長なので、辺のラベルを確認してください。"
      },
      {
        "question": "対辺が分からなくても arccos は使えますか？",
        "answer": "はい。それが arccos の最大の利点です。必要なのは隣辺と斜辺だけです。対辺は計算に一切入りません。"
      },
      {
        "question": "cos と arccos の違いは何ですか？",
        "answer": "コサインは角度を受け取り比率を返します。cos(60度) = 0.5 です。arccos はその逆で、比率を受け取り角度を返します。arccos(0.5) = 60度 です。角度が分かっている場合はコサインを、辺が分かっている場合は arccos を使います。"
      },
      {
        "question": "arccos と arcsin と arctan が同じ答えになるのはなぜですか？",
        "answer": "辺のペアの選び方が異なるだけで、同じ幾何学的な角度を記述しているからです。3-4-5 の三角形では、arccos(4/5)、arcsin(3/5)、arctan(3/4) はすべて 36.87 度に等しくなります。手法同士の一致は、辺のラベルが正しいことの確認になります。"
      },
      {
        "question": "b/c がちょうど 0.5 の場合はどういう意味ですか？",
        "answer": "角度はちょうど 60 度です。これは 30-60-90 の特別な三角形で、60 度の角度に隣接する辺が斜辺の半分になります。"
      },
      {
        "question": "答えは度とラジアンのどちらにすべきですか？",
        "answer": "この計算機は度を使います。これは建設、測量、学校の幾何学における標準です。手計算する場合は、電卓が度モードになっていることを確認してください。0.64 のようなラジアンモードの結果は、180/pi を掛けると 36.87 度に変換されます。"
      },
      {
        "question": "もう一つの鋭角はどうやって求めますか？",
        "answer": "90 度から引きます。arccos で A = 36.87 度と出たら、B = 90 - 36.87 = 53.13 度です。追加の三角関数は不要です。"
      },
      {
        "question": "arccos の結果が 90 度になることはありますか？",
        "answer": "極限としてのみです。arccos(0) = 90 度 ですが、隣辺がゼロということは退化した三角形であり、本物の三角形ではありません。arccos で得られる正しい直角三角形の角度は、必ず 0 と 90 度の間に厳密に入ります。"
      },
      {
        "question": "arccos の答えはどうやって確認できますか？",
        "answer": "cos(A) を計算し、b/c と等しいことを確認します。第 3 の辺を使って arcsin や arctan でも再計算し、すべての手法が一致しなければなりません。最後に、2 つの鋭角の合計がちょうど 90 度になることを確認します。"
      },
      {
        "question": "三角形を拡大縮小すると arccos の結果は変わりますか？",
        "answer": "いいえ。相似な三角形は角度が同一です。3-4-5 の三角形も 6-8-10 の三角形も、arccos(0.8) = 36.87 度となります。拡大縮小しても比率 b/c は変わらないからです。"
      }
    ],
    "relatedHeading": "関連する直角三角形の計算機を見る",
    "relatedItems": [
      "直角三角形の角度計算機",
      "直角三角形のサインから角度を求める計算機",
      "直角三角形のタンジェントから角度を求める計算機",
      "直角三角形の未知の角度計算機",
      "直角三角形の三角比計算機",
      "コサイン比計算機"
    ],
    "tocHeading": "このガイドの内容",
    "tocItems": {
      "arccos-intro": "コサインから角度を求める計算機とは？",
      "arccos-what": "arccos（逆余弦）を理解する",
      "arccos-vs": "arccos vs arcsin vs arctan",
      "arccos-anatomy": "隣辺と斜辺",
      "arccos-howto": "計算機の使い方",
      "arccos-examples": "16 の解法付き例題",
      "arccos-special": "覚えておくべき特別な角度の値",
      "arccos-mistakes": "よくある間違い",
      "arccos-verify": "答えの確認方法",
      "arccos-applications": "実生活での応用",
      "arccos-related": "関連する計算機",
      "arccos-conclusion": "コサインからあらゆる角度を自信を持って求める",
      "arccos-faq": "よくある質問"
    },
    "sections": {
      "arccos-intro": {
        "h2": "直角三角形のコサインから角度を求める計算機とは？",
        "blocks": [
          {
            "kind": "p",
            "text": "直角三角形のコサインから角度を求める計算機は、隣辺と斜辺が分かっているときに鋭角を求めます。その 2 辺の比率に対して逆余弦関数（arccos または cos[[-1]] と表記）を適用します。結果は角度 A（度）です。"
          },
          {
            "kind": "p",
            "text": "このツールは特定の測定状況のために存在します。目的の角度に隣接する辺と三角形の最長辺は測れるが、対辺が不明または測りにくい場合です。対辺を先に計算するのではなく、arccos はそれを完全に無視し、隣辺割る斜辺の比率を直接角度に変換します。"
          },
          {
            "kind": "p",
            "text": "たとえば、隣辺が 4、斜辺が 5 なら比率は 0.8 です。0.8 の arccos は約 36.87 度です。これが角度 A です。もう一方の鋭角は補角のルールから求まります。90 引く 36.87 で 53.13 度です。"
          },
          {
            "kind": "p",
            "text": "arccos はこのサイトの 3 つの逆三角関数ツールの 1 つです。分かっている辺が対辺と斜辺なら、サインから角度を求める計算機が正しい選択です。斜辺は分からず 2 辺（2 本の脚）が分かっている場合は、タンジェントから角度を求める計算機を使います。このページではコサインのケースを徹底的に解説します。"
          }
        ]
      },
      "arccos-what": {
        "h2": "arccos（逆余弦）を理解する",
        "blocks": [
          {
            "kind": "p",
            "text": "通常のコサインは角度を受け取り比率を返します。60 度のコサインは 0.5 です。arccos はその逆で、比率を受け取り角度を返します。0.5 の arccos は 60 度です。2 つの関数は互いに打ち消し合うため、arccos は cos[[-1]] とも表記されます。"
          },
          {
            "kind": "p",
            "text": "この計算機で使う公式は [[A = \\cos^{-1}(b/c)]] です。ここで b は隣辺、c は斜辺、A はその間の角度です。正しい直角三角形では、隣辺が斜辺より必ず短いため、比率 b/c は常に 0 と 1 の間に入ります。"
          },
          {
            "kind": "p",
            "text": "arccos を質問として考えてみましょう。「このコサイン値を持つ角度はどれ？」b/c が 0.8 なら、質問は「コサインが 0.8 である角度はどれ？」となります。答えの 36.87 度とは、隣辺が斜辺の 80 パーセントの長さである角度です。"
          },
          {
            "kind": "h3",
            "text": "比率が物語る形"
          },
          {
            "kind": "p",
            "text": "b/c の値は三角形の形を表します。1 に近い比率は、隣辺が斜辺とほぼ同じ長さであることを意味し、その間の角度はごく小さいです。0 に近い比率は、斜辺に比べて隣辺が非常に短いことを意味し、角度は 90 度に向かって大きく開きます。ちょうど 0.5 の比率は常に 60 度を意味します。"
          },
          {
            "kind": "h3",
            "text": "arccos の定義域"
          },
          {
            "kind": "p",
            "text": "この幾何学的な文脈では、arccos は 0 から 1 までの入力のみを受け付けます。1 を超える比率は直角三角形では不可能で、ラベルの誤りを示します。斜辺が分母で、かつ最長辺でなければなりません。負の比率は鈍角を記述しますが、鈍角は直角三角形の角度 A としては現れません。"
          }
        ],
        "imgAlt": "arccos の 2 ステップを示す図：b を c で割り、arccos を適用して角度を得る",
        "figcaption": "arccos の仕組み：隣辺を斜辺で割り、逆余弦を適用して角度を取り戻します。"
      },
      "arccos-vs": {
        "h2": "arccos vs arcsin vs arctan：それぞれの使いどころ",
        "blocks": [
          {
            "kind": "p",
            "text": "3 つの逆関数は、同じ三角形に適用すれば同じ角度を返します。違いは必要な辺だけです。正しく選べば、必要のない辺の計算を省けます。"
          },
          {
            "kind": "p",
            "text": "隣辺 (b) と斜辺 (c) が分かっている場合は <strong>arccos</strong> を使います。公式は [[A = \\cos^{-1}(b/c)]] です。斜辺が直接測られている場合の自然な選択です。たとえば、斜面に沿ってテープで測り、水平距離が分かっているような場合です。"
          },
          {
            "kind": "p",
            "text": "対辺 (a) と斜辺 (c) が分かっている場合は <strong>arcsin</strong> を使います。公式は [[A = \\sin^{-1}(a/c)]] です。高さの問題では arcsin が適しています。鉛直の高さは、地面レベルの角度の対辺にあたるからです。このケースはサインから角度を求める計算機が扱います。"
          },
          {
            "kind": "p",
            "text": "2 本の脚 (a と b) が分かっていて斜辺が分からない場合は <strong>arctan</strong> を使います。公式は [[A = \\tan^{-1}(a/b)]] です。屋根の高さに対する水平距離のような現場測定では、2 本の脚を直接測るため arctan が適しています。この方法についてはタンジェントから角度を求める計算機を参照してください。"
          },
          {
            "kind": "h3",
            "text": "一致しなければならない"
          },
          {
            "kind": "p",
            "text": "任意の 1 つの三角形について、arccos(b/c)、arcsin(a/c)、arctan(a/b) は同一の角度を返します。3-4-5 の三角形では、arccos(4/5)、arcsin(3/5)、arctan(3/4) はすべて 36.87 度に等しくなります。2 つの手法が一致しなければ、辺のラベルが間違っています。このクロスチェックは最も信頼できる検証であり、三角比計算機を使えば 3 つの比率を一度に確認できます。"
          },
          {
            "kind": "h3",
            "text": "なぜ常に arctan を使わないのか？"
          },
          {
            "kind": "p",
            "text": "arctan には 2 本の脚が必要です。対辺が不明で測りにくい場合、arctan を使うためだけに先に対辺を計算すると、不要な手順と誤りの機会が増えます。arccos は手元の 2 辺から求めたい角度へ直行します。習慣ではなく、測定値に合わせて関数を選びましょう。"
          }
        ]
      },
      "arccos-anatomy": {
        "h2": "隣辺と斜辺：2 つの入力",
        "blocks": [
          {
            "kind": "p",
            "text": "arccos に必要な辺はちょうど 2 つです。隣辺 b と斜辺 c です。これらのラベルを正しく付けることが全戦の鍵です。その先はすべて算数です。"
          },
          {
            "kind": "h3",
            "text": "隣辺の見分け方"
          },
          {
            "kind": "p",
            "text": "隣辺は、角度 A に接する脚です。角度そのものの辺の一つを成します。下の図では、辺 b が直角から角度 A まで底辺に沿って伸びています。角度 A ではなくもう一方の鋭角 B を求める場合は、ラベルが入れ替わります。B に隣接する辺とは、B に接する辺のことです。"
          },
          {
            "kind": "h3",
            "text": "斜辺の見分け方"
          },
          {
            "kind": "p",
            "text": "斜辺は、直角の向かい側の辺です。常に三角形の最長辺です。直角の頂点には決して触れません。自分の「斜辺」が 3 つの測定値の中で最長でない場合、計算前にラベルを付け直してください。3 辺すべてが分かっている場合、どの辺が最長かはピタゴラス定理の計算機で確認できます。"
          },
          {
            "kind": "h3",
            "text": "対辺が使われない理由"
          },
          {
            "kind": "p",
            "text": "コサインは隣辺割る斜辺として定義されます。対辺はこの比率には登場しません。これこそがこの計算機の存在意義です。対辺が不明だったり、埋もれていたり、測定計画上無関係だったりしても、arccos は角度を返します。対辺を無視しているのではなく、最初から対辺を必要としない比率を使っているのです。"
          }
        ],
        "imgAlt": "arccos の公式のために隣辺 b と斜辺 c が強調された直角三角形",
        "figcaption": "arccos のための解剖図：b は角度 A に接する隣辺、c は直角の向かい側の斜辺。"
      },
      "arccos-howto": {
        "h2": "コサインから角度を求める計算機の使い方",
        "blocks": [],
        "steps": [
          "<strong>直角を確認します。</strong> この計算機は直角三角形にのみ機能します。まず 90 度の角を特定してください。",
          "<strong>目的の角度を選びます。</strong> 角度 A と角度 B のどちらを求めるか決めます。隣辺はこの選択を基準に定義されます。",
          "<strong>隣辺 b を測ります。</strong> 目的の角度に接する脚です。任意の単位で記録します。",
          "<strong>斜辺 c を測ります。</strong> 最長辺で、直角の向かい側です。b と同じ単位を使います。",
          "<strong>b が c より小さいことを確認します。</strong> そうでなければ辺のラベルが間違っています。斜辺は最長でなければなりません。",
          "<strong>2 つの値を入力して「計算」を押します。</strong> ツールは b/c を計算し、arccos を適用して、角度 A を度で返します。",
          "<strong>2 つ目の角度を求めます。</strong> 90 度から引きます。B = 90[[^\\circ]] 引く A です。",
          "<strong>検証します。</strong> 電卓で cos(A) を計算し、b/c と等しいことを確認します。一致すれば答えは確実です。"
        ],
        "imgAlt": "b = 4、c = 5 の arccos 4 ステップ解法例",
        "figcaption": "解法例：b = 4、c = 5 のとき A = arccos(0.8)、約 36.87 度。往復検証で確認済み。"
      },
      "arccos-examples": {
        "h2": "16 の解法付き例題",
        "blocks": [
          {
            "kind": "p",
            "text": "各例題は同じ 4 ステップに従います。公式を書く、代入する、割る、arccos を適用する。角度は小数点以下 2 桁に丸めています。"
          },
          {
            "kind": "h3",
            "text": "例題 1：3-4-5 の三角形"
          },
          {
            "kind": "p",
            "text": "隣辺 b = 4、斜辺 c = 5 が与えられ、角度 A を求めます。"
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) [[\\approx 36.87^\\circ]]。補角 B = 53.13[[^\\circ]]。"
          },
          {
            "kind": "h3",
            "text": "例題 2：5-12-13 の三角形"
          },
          {
            "kind": "p",
            "text": "隣辺 b = 12、斜辺 c = 13 が与えられ、角度 A を求めます。"
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) [[\\approx 22.62^\\circ]]。補角 B = 67.38[[^\\circ]]。"
          },
          {
            "kind": "h3",
            "text": "例題 3：8-15-17 の三角形"
          },
          {
            "kind": "p",
            "text": "隣辺 b = 8、斜辺 c = 17 が与えられ、角度 A を求めます。"
          },
          {
            "kind": "p",
            "text": "A = arccos(8/17) = arccos(0.4706) [[\\approx 61.93^\\circ]]。補角 B = 28.07[[^\\circ]]。"
          },
          {
            "kind": "h3",
            "text": "例題 4：同じ三角形、もう一方の角度"
          },
          {
            "kind": "p",
            "text": "隣辺 b = 15、斜辺 c = 17 が与えられ（8-15-17 の三角形の角度 B を求める）。"
          },
          {
            "kind": "p",
            "text": "B = arccos(15/17) = arccos(0.8824) [[\\approx 28.07^\\circ]]。61.93 + 28.07 = 90 となることに注意。要件通りです。"
          },
          {
            "kind": "h3",
            "text": "例題 5：5-12-13、もう一方の角度"
          },
          {
            "kind": "p",
            "text": "隣辺 b = 5、斜辺 c = 13 が与えられます。"
          },
          {
            "kind": "p",
            "text": "B = arccos(5/13) = arccos(0.3846) [[\\approx 67.38^\\circ]]。例題 2 の補角と一致します。"
          },
          {
            "kind": "h3",
            "text": "例題 6：3-4-5、もう一方の角度"
          },
          {
            "kind": "p",
            "text": "隣辺 b = 3、斜辺 c = 5 が与えられます。"
          },
          {
            "kind": "p",
            "text": "B = arccos(3/5) = arccos(0.6) [[\\approx 53.13^\\circ]]。例題 1 の補角と一致します。"
          },
          {
            "kind": "h3",
            "text": "例題 7：60 度の特殊ケース"
          },
          {
            "kind": "p",
            "text": "隣辺 b = 1、斜辺 c = 2 が与えられます。"
          },
          {
            "kind": "p",
            "text": "A = arccos(1/2) = arccos(0.5) = ちょうど 60[[^\\circ]]。これは 30-60-90 の特別な三角形です。特別な直角三角形の計算機がこれらの正確な値を扱います。"
          },
          {
            "kind": "h3",
            "text": "例題 8：7-24-25 の三角形"
          },
          {
            "kind": "p",
            "text": "隣辺 b = 7、斜辺 c = 25 が与えられ、角度 A を求めます。"
          },
          {
            "kind": "p",
            "text": "A = arccos(7/25) = arccos(0.28) [[\\approx 73.74^\\circ]]。補角 B = 16.26[[^\\circ]]。"
          },
          {
            "kind": "h3",
            "text": "例題 9：7-24-25、もう一方の角度"
          },
          {
            "kind": "p",
            "text": "隣辺 b = 24、斜辺 c = 25 が与えられます。"
          },
          {
            "kind": "p",
            "text": "B = arccos(24/25) = arccos(0.96) [[\\approx 16.26^\\circ]]。例題 8 の補角と一致します。"
          },
          {
            "kind": "h3",
            "text": "例題 10：9-40-41 の三角形"
          },
          {
            "kind": "p",
            "text": "隣辺 b = 9、斜辺 c = 41 が与えられ、角度 A を求めます。"
          },
          {
            "kind": "p",
            "text": "A = arccos(9/41) = arccos(0.2195) [[\\approx 77.32^\\circ]]。短い隣辺は広い角度を生みます。"
          },
          {
            "kind": "h3",
            "text": "例題 11：9-40-41、もう一方の角度"
          },
          {
            "kind": "p",
            "text": "隣辺 b = 40、斜辺 c = 41 が与えられます。"
          },
          {
            "kind": "p",
            "text": "B = arccos(40/41) = arccos(0.9756) [[\\approx 12.68^\\circ]]。77.32 + 12.68 = 90 となることに注意。"
          },
          {
            "kind": "h3",
            "text": "例題 12：20-21-29 の三角形"
          },
          {
            "kind": "p",
            "text": "隣辺 b = 20、斜辺 c = 29 が与えられ、角度 A を求めます。"
          },
          {
            "kind": "p",
            "text": "A = arccos(20/29) = arccos(0.6897) [[\\approx 46.40^\\circ]]。補角 B = 43.60[[^\\circ]]。"
          },
          {
            "kind": "h3",
            "text": "例題 13：20-21-29、もう一方の角度"
          },
          {
            "kind": "p",
            "text": "隣辺 b = 21、斜辺 c = 29 が与えられます。"
          },
          {
            "kind": "p",
            "text": "B = arccos(21/29) = arccos(0.7241) [[\\approx 43.60^\\circ]]。例題 12 の補角と一致します。"
          },
          {
            "kind": "h3",
            "text": "例題 14：6-8-10 の三角形"
          },
          {
            "kind": "p",
            "text": "隣辺 b = 6、斜辺 c = 10 が与えられ、角度 A を求めます。"
          },
          {
            "kind": "p",
            "text": "A = arccos(6/10) = arccos(0.6) [[\\approx 53.13^\\circ]]。例題 6 と同じ角度です。6-8-10 は 3-4-5 の拡大版だからです。"
          },
          {
            "kind": "h3",
            "text": "例題 15：6-8-10、もう一方の角度"
          },
          {
            "kind": "p",
            "text": "隣辺 b = 8、斜辺 c = 10 が与えられます。"
          },
          {
            "kind": "p",
            "text": "B = arccos(8/10) = arccos(0.8) [[\\approx 36.87^\\circ]]。例題 1 と同じで、相似な三角形は角度を共有することを確認できます。"
          },
          {
            "kind": "h3",
            "text": "例題 16：12-16-20 の三角形"
          },
          {
            "kind": "p",
            "text": "隣辺 b = 12、斜辺 c = 20 が与えられ、角度 A を求めます。"
          },
          {
            "kind": "p",
            "text": "A = arccos(12/20) = arccos(0.6) [[\\approx 53.13^\\circ]]。もう一つの 3-4-5 の拡大版で、再び同じ角度です。辺を拡大縮小しても角度は決して変わりません。"
          }
        ]
      },
      "arccos-special": {
        "h2": "覚えておく価値のある特別な角度の値",
        "blocks": [
          {
            "kind": "p",
            "text": "頻繁に現れる arccos の値がいくつかあり、それらを覚えておくと時間が節約できます。特別な直角三角形に由来するものです。"
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(1) = 0^\\circ]]：隣辺が斜辺と等しいため、角度はゼロにつぶれます。これは退化したケースであり、本物の三角形ではありませんが、スケールの基準となります。"
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(\\sqrt{3}/2) \\approx 30^\\circ]]：30-60-90 の三角形に由来します。隣辺が斜辺の約 86.6 パーセントのとき、角度は 30 度です。"
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(\\sqrt{2}/2) = 45^\\circ]]：45-45-90 の三角形に由来します。等しい 2 本の脚がこの正確な値を生みます。"
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(1/2) = 60^\\circ]]：30-60-90 の三角形に由来し、例題 7 のケースです。隣辺が斜辺のちょうど半分のとき、角度はちょうど 60 度です。"
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(0) = 90^\\circ]]：隣辺がゼロに縮むため、角度は直角まで開きます。ゼロのケースと同様、これは極限であり、本物の三角形の角度ではありません。"
          },
          {
            "kind": "p",
            "text": "これらの目安の間では、比率が増すにつれて arccos は滑らかに減少します。5 つの基準点を覚えれば、どんな arccos も暗算で推定できます。0.7 の比率は、0.5（60 度）と 0.866（30 度）の間にあり、45 度に少し近い位置です。真の値は約 45.57 度です。"
          }
        ]
      },
      "arccos-mistakes": {
        "h2": "arccos の使用時によくある間違い",
        "blocks": [
          {
            "kind": "h3",
            "text": "隣辺の代わりに対辺を使う"
          },
          {
            "kind": "p",
            "text": "最も多い間違いです。arccos が必要とするのは、角度 A の向かい側ではなく、角度 A に接する辺です。対辺を arccos に入れると、意図した角度の補角が出てしまいます。3-4-5 の三角形では、arccos(3/5) = 53.13 度は角度 B であり、角度 A ではありません。対策：三角形をスケッチし、目的の角度に印を付け、どの脚がそれに接するかをたどります。"
          },
          {
            "kind": "h3",
            "text": "分子に斜辺を入れる"
          },
          {
            "kind": "p",
            "text": "arccos が期待するのは隣辺割る斜辺で、1 未満の数です。b/c の代わりに c/b を入力すると 1 を超える比率になり、計算機は数学エラーを返します。対策：arccos の比率では、斜辺は常に分母です。"
          },
          {
            "kind": "h3",
            "text": "arccos とコサインを混同する"
          },
          {
            "kind": "p",
            "text": "多くの電卓では、コサインキーと逆余弦キー（通常 cos[[-1]] または arccos と表示）が近くにあります。arccos(0.8) の代わりに cos(0.8) を押すと、36.87 度ではなく 0.6967 という無意味な比率が出ます。対策：電卓が度モードであり、逆関数キーを押したことを確認します。"
          },
          {
            "kind": "h3",
            "text": "度とラジアンを混同する"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) は 36.87 度ですが、0.6435 ラジアンです。3-4-5 の三角形の手計算で 0.64 が出た場合、電卓はラジアンモードです。180/pi を掛けて変換するか、モードを度に切り替えてください。この計算機は度で出力します。"
          },
          {
            "kind": "h3",
            "text": "異なる単位で辺を入力する"
          },
          {
            "kind": "p",
            "text": "隣辺をインチ、斜辺をフィートで入れると比率が壊れます。先に共通の単位に変換してください。両方の入力が同じ単位を共有する場合にのみ、比率は無次元になります。"
          },
          {
            "kind": "h3",
            "text": "比率を早すぎる段階で丸める"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) = 36.87 度ですが、0.795 を丸めた arccos(0.80) は 37.24 度になります。arccos が最も急な 0 と 1 の近くの比率では、比率の小さな誤差が増幅されます。割り算の間は最大精度を保ち、丸めるのは最終的な角度だけにしてください。"
          },
          {
            "kind": "h3",
            "text": "どの角度を求めたか忘れる"
          },
          {
            "kind": "p",
            "text": "arccos は、入力した隣辺が接する角度を返します。角度 B に接する辺を入力したら、結果は角度 B です。答えに正しい角度名を付けるか、補角で確認してください。2 つの鋭角の合計は 90 度でなければなりません。"
          }
        ]
      },
      "arccos-verify": {
        "h2": "arccos の答えを確認する",
        "blocks": [
          {
            "kind": "p",
            "text": "3 つのチェックで、正しい arccos の計算を確認できます。"
          },
          {
            "kind": "p",
            "text": "3-4-5 の三角形では、辺がピタゴラス定理を満たすことも確認してください。9 + 16 = 25 です。それらから導かれる角度を信じる前に辺を確認することは良い習慣であり、ピタゴラス定理の計算機を使えば素早くできます。"
          },
          {
            "kind": "p",
            "text": "4 つ目のチェックは補角を使います。B = 90[[^\\circ]] 引く A を計算し、もう一方の比率の arccos が B を返すことを確認します。例題 1 では、arccos(3/5) = 53.13[[^\\circ]] で、これは 90 引く 36.87 と一致します。4 つのチェックがすべて通れば、答えに疑いの余地はありません。"
          }
        ],
        "steps": [
          "<strong>範囲チェック。</strong> 結果は 0 と 90 度の間に厳密に入らなければなりません。それ以外は、無効な入力か誤ってラベル付けされた辺を示します。",
          "<strong>往復チェック。</strong> cos(A) を計算し、b/c と等しいことを確認します。例題 1 では、cos(36.87[[^\\circ]]) [[\\approx]] 0.8 = 4/5 です。往復チェックが失敗したら、角度が間違っています。",
          "<strong>手法のクロスチェック。</strong> 第 3 の辺を使って arcsin または arctan で再計算します。arccos(4/5) = 36.87[[^\\circ]] かつ arctan(3/4) = 36.87[[^\\circ]] なら、答えは確実です。不一致はラベルの誤りを示します。"
        ]
      },
      "arccos-applications": {
        "h2": "実生活での arccos の応用",
        "blocks": [
          {
            "kind": "p",
            "text": "arccos は、斜距離と水平距離が自然な測定値である場所に現れます。斜辺は斜面そのものに沿って測られ、隣辺は水平成分です。"
          },
          {
            "kind": "h3",
            "text": "斜面の測量"
          },
          {
            "kind": "p",
            "text": "測量技師が斜面に沿って 65 メートル、水平方向に 60 メートルを測ります。斜面の角度は arccos(60/65)、約 22.6 度です。これは標準的な arccos の状況です。斜距離はテープで測りやすく、水平距離は地図や水準器から得られ、対辺（高さ）は次に計算できるものだからです。"
          },
          {
            "kind": "h3",
            "text": "影からの太陽高度"
          },
          {
            "kind": "p",
            "text": "10 メートルの光線が 8 メートルの影を作ります。太陽の高度角は arccos(8/10)、約 36.9 度です。影は地面に沿って（隣辺）あり、光線が斜辺であるため、影の問題は自然な arccos の問題です。"
          },
          {
            "kind": "h3",
            "text": "屋根の垂木の勾配"
          },
          {
            "kind": "p",
            "text": "垂木が 6.5 メートルに伸び、水平方向の距離が 6 メートルです。軒先での勾配角は arccos(6/6.5)、約 22.6 度です。大工は垂木を直接測り、水平方向の距離は桁に沿って測るため、arccos は測定の仕方にぴったり合います。"
          },
          {
            "kind": "h3",
            "text": "エンジニアリングの筋交い"
          },
          {
            "kind": "p",
            "text": "斜めの筋交いが 4 メートル、水平の土台が 3.5 メートルです。筋交いの角度は arccos(3.5/4)、約 28.96 度です。構造スケッチには筋交いの長さとその占有範囲が記載され、arccos がそれらを設置角度に変換します。"
          }
        ],
        "imgAlt": "測量、影、屋根の垂木、筋交い角度の arccos 計算を示す 4 つのパネル",
        "figcaption": "実世界の arccos 問題：斜面の角度、太陽高度、垂木の勾配、筋交いの設置角度。"
      },
      "arccos-related": {
        "h2": "関連する直角三角形の計算機を見る",
        "blocks": []
      },
      "arccos-conclusion": {
        "h2": "コサインからあらゆる角度を自信を持って求める",
        "blocks": [
          {
            "kind": "p",
            "text": "まず隣辺を特定します。目的の角度に接する脚です。斜辺が最長辺であることを確認します。割り、arccos を適用し、角度を度で読みます。2 つ目の角度は 90 引く 1 つ目で求めます。往復チェック、手法のクロス計算、角度の合計で検証します。これらの手順で、隣辺と斜辺の問題はすべて信頼できる手順に帰着します。数値を実行するには、このページの上部にある計算機に戻ってください。"
          }
        ]
      }
    }
  },
  "ko": {
    "faqs": [
      {
        "question": "A = arccos(b / c)는 실제로 무엇을 의미하나요?",
        "answer": "밑변을 빗변으로 나눈 다음, 그 소수값에서 거꾸로 추적해 코사인 값이 그와 같은 각도를 찾는다는 뜻입니다. 결과는 밑변과 빗변 사이의 예각입니다."
      },
      {
        "question": "arcsin 대신 arccos를 언제 사용하나요?",
        "answer": "밑변과 빗변을 알 때는 arccos를 사용합니다. 대변과 빗변을 알 때는 arcsin을 사용합니다. 같은 삼각형에 대해서는 둘 다 같은 각도를 내고, 어떤 변을 측정했는지에 따라 선택이 달라집니다."
      },
      {
        "question": "arccos에서 수학 오류가 발생하는 이유는 무엇인가요?",
        "answer": "가장 흔한 원인은 1을 초과하는 비율로, 입력한 밑변이 빗변보다 길 때 발생합니다. 올바른 직각삼각형에서는 빗변이 항상 가장 길므로 변의 라벨을 확인하세요."
      },
      {
        "question": "대변을 모르고도 arccos를 사용할 수 있나요?",
        "answer": "예. 이것이 arccos의 주요 장점입니다. 밑변과 빗변만 있으면 됩니다. 대변은 계산에 전혀 들어가지 않습니다."
      },
      {
        "question": "cos와 arccos의 차이는 무엇인가요?",
        "answer": "코사인은 각도를 받아 비율을 반환합니다. cos(60도) = 0.5입니다. arccos는 그 반대입니다. 비율을 받아 각도를 반환하므로 arccos(0.5) = 60도입니다. 각도를 알 때는 코사인을, 변을 알 때는 arccos를 사용합니다."
      },
      {
        "question": "arccos, arcsin, arctan이 같은 답을 내는 이유는 무엇인가요?",
        "answer": "변의 쌍을 다르게 선택했을 뿐, 같은 기하학적 각도를 설명하기 때문입니다. 3-4-5 삼각형에서 arccos(4/5), arcsin(3/5), arctan(3/4)은 모두 36.87도와 같습니다. 방법 간의 일치는 변의 라벨이 정확함을 확인해 줍니다."
      },
      {
        "question": "b/c가 정확히 0.5이면 무슨 의미인가요?",
        "answer": "각도는 정확히 60도입니다. 이것은 30-60-90 특수 삼각형으로, 60도 각도에 인접한 변이 빗변의 절반입니다."
      },
      {
        "question": "답은 도(degree)로 해야 하나요, 라디안으로 해야 하나요?",
        "answer": "이 계산기는 건축, 측량, 학교 기하학의 표준인 도를 사용합니다. 손으로 계산할 때는 계산기가 도 모드인지 확인하세요. 0.64 같은 라디안 모드 결과는 180/pi를 곱하면 36.87도가 됩니다."
      },
      {
        "question": "다른 예각은 어떻게 찾나요?",
        "answer": "90도에서 뺍니다. arccos가 A = 36.87도를 내놓으면 B = 90 - 36.87 = 53.13도입니다. 추가 삼각함수는 필요 없습니다."
      },
      {
        "question": "arccos 결과가 90도가 될 수 있나요?",
        "answer": "극한으로만 가능합니다. arccos(0) = 90도이지만, 밑변이 0이라는 것은 퇴화 삼각형이지 진짜 삼각형이 아닙니다. arccos로 구한 올바른 직각삼각형의 각도는 항상 0과 90도 사이에 엄격히 들어갑니다."
      },
      {
        "question": "arccos 답을 어떻게 검증할 수 있나요?",
        "answer": "cos(A)를 계산해 b/c와 같은지 확인합니다. 세 번째 변을 이용해 arcsin이나 arctan으로도 다시 계산하고, 모든 방법이 일치해야 합니다. 마지막으로 두 예각의 합이 정확히 90도인지 확인합니다."
      },
      {
        "question": "삼각형의 크기를 바꾸면 arccos 결과가 달라지나요?",
        "answer": "아니요. 닮은 삼각형은 각도가 동일합니다. 3-4-5 삼각형과 6-8-10 삼각형은 모두 arccos(0.8) = 36.87도를 냅니다. 스케일이 바뀌어도 비율 b/c는 변하지 않기 때문입니다."
      }
    ],
    "relatedHeading": "관련 직각삼각형 계산기 보기",
    "relatedItems": [
      "직각삼각형 각도 계산기",
      "직각삼각형 사인에서 각도 계산기",
      "직각삼각형 탄젠트에서 각도 계산기",
      "직각삼각형 미지 각도 계산기",
      "직각삼각형 삼각비 계산기",
      "코사인 비율 계산기"
    ],
    "tocHeading": "이 가이드에서",
    "tocItems": {
      "arccos-intro": "코사인에서 각도 계산기란?",
      "arccos-what": "arccos(역코사인) 이해하기",
      "arccos-vs": "arccos vs arcsin vs arctan",
      "arccos-anatomy": "밑변과 빗변",
      "arccos-howto": "계산기 사용 방법",
      "arccos-examples": "16개 풀이 예제",
      "arccos-special": "기억할 만한 특수 각도 값",
      "arccos-mistakes": "흔한 실수",
      "arccos-verify": "답 검증하기",
      "arccos-applications": "실생활 응용",
      "arccos-related": "관련 계산기",
      "arccos-conclusion": "코사인에서 어떤 각도든 자신 있게 구하기",
      "arccos-faq": "자주 묻는 질문"
    },
    "sections": {
      "arccos-intro": {
        "h2": "직각삼각형의 코사인에서 각도 계산기란?",
        "blocks": [
          {
            "kind": "p",
            "text": "직각삼각형의 코사인에서 각도 계산기는 밑변과 빗변을 알 때 예각을 구합니다. 이 두 변의 비율에 역코사인 함수(arccos 또는 cos[[-1]]로 표기)를 적용합니다. 결과는 각도 A(도)입니다."
          },
          {
            "kind": "p",
            "text": "이 도구는 특정 측정 상황을 위해 존재합니다. 목표 각도에 인접한 변과 삼각형의 가장 긴 변은 측정할 수 있지만, 대변은 알 수 없거나 닿기 어려운 경우입니다. 대변을 먼저 계산하는 대신, arccos는 그것을 완전히 건너뛰고 밑변 나누기 빗변 비율을 바로 각도로 변환합니다."
          },
          {
            "kind": "p",
            "text": "예를 들어 밑변이 4이고 빗변이 5이면 비율은 0.8입니다. 0.8의 arccos는 약 36.87도입니다. 이것이 각도 A입니다. 다른 예각은 여각 규칙에서 나옵니다. 90에서 36.87을 뺀 53.13도입니다."
          },
          {
            "kind": "p",
            "text": "arccos는 이 사이트의 세 역삼각함수 도구 중 하나입니다. 알고 있는 변이 대변과 빗변이라면 사인에서 각도 계산기가 올바른 선택입니다. 빗변은 모르고 두 다리는 알 때는 탄젠트에서 각도 계산기를 사용합니다. 이 페이지는 코사인 경우를 완전히 다룹니다."
          }
        ]
      },
      "arccos-what": {
        "h2": "arccos(역코사인) 이해하기",
        "blocks": [
          {
            "kind": "p",
            "text": "일반 코사인은 각도를 받아 비율을 반환합니다. 60도의 코사인은 0.5입니다. arccos는 그 반대입니다. 비율을 받아 각도를 반환합니다. 0.5의 arccos는 60도입니다. 두 함수는 서로를 상쇄하므로 arccos는 cos[[-1]]로도 표기됩니다."
          },
          {
            "kind": "p",
            "text": "이 계산기가 사용하는 공식은 [[A = \\cos^{-1}(b/c)]]입니다. 여기서 b는 밑변, c는 빗변, A는 그 사이의 각도입니다. 올바른 직각삼각형에서는 밑변이 항상 빗변보다 짧으므로 비율 b/c는 항상 0과 1 사이에 들어갑니다."
          },
          {
            "kind": "p",
            "text": "arccos를 질문으로 생각해 보세요. \"이 코사인 값을 갖는 각도는 무엇인가?\" b/c가 0.8이면 질문은 \"코사인이 0.8인 각도는 무엇인가?\"가 됩니다. 답인 36.87도는 밑변이 빗변 길이의 80퍼센트인 각도입니다."
          },
          {
            "kind": "h3",
            "text": "비율이 말해 주는 이야기"
          },
          {
            "kind": "p",
            "text": "b/c 값은 삼각형의 모양을 설명합니다. 1에 가까운 비율은 밑변이 빗변과 거의 같은 길이임을 의미하므로 그 사이의 각도는 아주 작습니다. 0에 가까운 비율은 빗변에 비해 밑변이 매우 짧음을 의미하므로 각도는 90도 쪽으로 크게 열립니다. 정확히 0.5인 비율은 항상 60도를 의미합니다."
          },
          {
            "kind": "h3",
            "text": "arccos의 정의역"
          },
          {
            "kind": "p",
            "text": "이 기하학적 맥락에서 arccos는 0부터 1까지의 입력만 받습니다. 1을 초과하는 비율은 직각삼각형에서는 불가능하며 라벨링 오류를 나타냅니다. 빗변이 분모가 되어야 하고 가장 긴 변이어야 합니다. 음수 비율은 둔각을 설명하는데, 둔각은 직각삼각형의 각도 A로 나타날 수 없습니다."
          }
        ],
        "imgAlt": "arccos의 두 단계를 보여주는 다이어그램: b를 c로 나누고 arccos를 적용해 각도를 얻음",
        "figcaption": "arccos의 작동 원리: 밑변을 빗변으로 나누고 역코사인을 적용해 각도를 되찾습니다."
      },
      "arccos-vs": {
        "h2": "arccos vs arcsin vs arctan: 각각 언제 사용할까",
        "blocks": [
          {
            "kind": "p",
            "text": "세 역함수는 같은 삼각형에 적용하면 같은 각도를 반환합니다. 차이는 필요한 변뿐입니다. 올바르게 선택하면 필요 없는 변의 계산을 피할 수 있습니다."
          },
          {
            "kind": "p",
            "text": "밑변 (b)과 빗변 (c)을 알 때는 <strong>arccos</strong>를 사용합니다. 공식은 [[A = \\cos^{-1}(b/c)]]입니다. 빗변이 직접 측정된 경우의 자연스러운 선택입니다. 예를 들어 경사면을 따라 줄자로 재고 수평 거리를 아는 경우입니다."
          },
          {
            "kind": "p",
            "text": "대변 (a)과 빗변 (c)을 알 때는 <strong>arcsin</strong>을 사용합니다. 공식은 [[A = \\sin^{-1}(a/c)]]입니다. 높이 문제에는 arcsin이 적합합니다. 수직 높이가 지면 수준 각도의 대변이기 때문입니다. 이 경우는 사인에서 각도 계산기가 처리합니다."
          },
          {
            "kind": "p",
            "text": "두 다리 (a와 b)를 알고 빗변을 모를 때는 <strong>arctan</strong>을 사용합니다. 공식은 [[A = \\tan^{-1}(a/b)]]입니다. 지붕 높이 나누기 수평 거리 같은 현장 측정에는 두 다리를 직접 재므로 arctan이 적합합니다. 그 방법은 탄젠트에서 각도 계산기를 참조하세요."
          },
          {
            "kind": "h3",
            "text": "일치해야 합니다"
          },
          {
            "kind": "p",
            "text": "어느 하나의 삼각형에 대해 arccos(b/c), arcsin(a/c), arctan(a/b)은 동일한 각도를 냅니다. 3-4-5 삼각형에서 arccos(4/5), arcsin(3/5), arctan(3/4)은 모두 36.87도와 같습니다. 두 방법이 일치하지 않으면 변의 라벨이 잘못된 것입니다. 이 교차 검사는 가장 신뢰할 수 있는 검증이며, 삼각비 계산기로 세 비율을 한 번에 확인할 수 있습니다."
          },
          {
            "kind": "h3",
            "text": "왜 항상 arctan을 쓰지 않나요?"
          },
          {
            "kind": "p",
            "text": "arctan은 두 다리가 필요합니다. 대변이 알 수 없고 측정하기 어려울 때 arctan을 쓰기 위해 먼저 대변을 계산하면 불필요한 단계와 오류 가능성이 추가됩니다. arccos는 가진 두 변에서 원하는 각도로 직행합니다. 습관이 아니라 측정값에 함수를 맞추세요."
          }
        ]
      },
      "arccos-anatomy": {
        "h2": "밑변과 빗변: 두 개의 입력",
        "blocks": [
          {
            "kind": "p",
            "text": "arccos에는 정확히 두 변이 필요합니다. 밑변 b와 빗변 c입니다. 이 라벨을 정확히 붙이는 것이 전투의 전부입니다. 그 뒤는 모두 산술입니다."
          },
          {
            "kind": "h3",
            "text": "밑변 식별하기"
          },
          {
            "kind": "p",
            "text": "밑변은 각도 A에 닿는 다리입니다. 각도 자체의 한 변을 이룹니다. 아래 다이어그램에서 변 b는 직각에서 각도 A까지 밑변을 따라 뻗어 있습니다. 각도 A가 아니라 다른 예각 B를 구한다면 라벨이 바뀝니다. B에 인접한 변이란 B에 닿는 변을 말합니다."
          },
          {
            "kind": "h3",
            "text": "빗변 식별하기"
          },
          {
            "kind": "p",
            "text": "빗변은 직각의 맞은편 변입니다. 항상 삼각형에서 가장 긴 변입니다. 직각의 꼭짓점에는 절대 닿지 않습니다. 자신의 \"빗변\"이 세 측정값 중 가장 길지 않다면 계산하기 전에 다시 라벨을 붙이세요. 세 변을 모두 알 때는 어느 변이 가장 긴지 피타고라스 정리 계산기로 확인할 수 있습니다."
          },
          {
            "kind": "h3",
            "text": "대변이 제외되는 이유"
          },
          {
            "kind": "p",
            "text": "코사인은 밑변 나누기 빗변으로 정의됩니다. 대변은 이 비율에 전혀 등장하지 않습니다. 이것이 이 계산기의 존재 이유입니다. 대변이 알 수 없거나, 묻혀 있거나, 측정 계획과 무관하더라도 arccos는 각도를 내줍니다. 대변을 무시하는 것이 아니라, 처음부터 그것을 필요로 하지 않는 비율을 사용하는 것입니다."
          }
        ],
        "imgAlt": "arccos 공식을 위해 밑변 b와 빗변 c가 강조된 직각삼각형",
        "figcaption": "arccos를 위한 구조: b는 각도 A에 닿는 밑변, c는 직각 맞은편의 빗변."
      },
      "arccos-howto": {
        "h2": "코사인에서 각도 계산기 사용 방법",
        "blocks": [],
        "steps": [
          "<strong>직각을 확인합니다.</strong> 계산기는 직각삼각형에만 동작합니다. 먼저 90도 모서리를 식별하세요.",
          "<strong>목표 각도를 선택합니다.</strong> 각도 A와 각도 B 중 어느 것을 구할지 정합니다. 밑변은 이 선택을 기준으로 정의됩니다.",
          "<strong>밑변 b를 측정합니다.</strong> 목표 각도에 닿는 다리입니다. 아무 단위로든 기록합니다.",
          "<strong>빗변 c를 측정합니다.</strong> 가장 긴 변으로, 직각의 맞은편입니다. b와 같은 단위를 사용합니다.",
          "<strong>b가 c보다 작은지 확인합니다.</strong> 그렇지 않으면 변의 라벨이 잘못된 것입니다. 빗변은 가장 길어야 합니다.",
          "<strong>두 값을 입력하고 계산을 누릅니다.</strong> 도구가 b/c를 계산하고 arccos를 적용해 각도 A를 도 단위로 반환합니다.",
          "<strong>두 번째 각도를 찾습니다.</strong> 90도에서 뺍니다. B = 90[[^\\circ]] 빼기 A입니다.",
          "<strong>검증합니다.</strong> 계산기에서 cos(A)를 계산해 b/c와 같은지 확인합니다. 일치하면 답이 확실합니다."
        ],
        "imgAlt": "b가 4이고 c가 5인 arccos 4단계 풀이 예제",
        "figcaption": "풀이 예제: b = 4, c = 5이면 A = arccos(0.8), 약 36.87도. 왕복 검증으로 확인됨."
      },
      "arccos-examples": {
        "h2": "16개 풀이 예제",
        "blocks": [
          {
            "kind": "p",
            "text": "각 예제는 같은 네 단계를 따릅니다. 공식 쓰기, 대입, 나누기, arccos 적용. 각도는 소수점 둘째 자리까지 반올림했습니다."
          },
          {
            "kind": "h3",
            "text": "예제 1: 3-4-5 삼각형"
          },
          {
            "kind": "p",
            "text": "밑변 b = 4, 빗변 c = 5가 주어졌을 때 각도 A를 구합니다."
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) [[\\approx 36.87^\\circ]]. 여각 B = 53.13[[^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "예제 2: 5-12-13 삼각형"
          },
          {
            "kind": "p",
            "text": "밑변 b = 12, 빗변 c = 13이 주어졌을 때 각도 A를 구합니다."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) [[\\approx 22.62^\\circ]]. 여각 B = 67.38[[^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "예제 3: 8-15-17 삼각형"
          },
          {
            "kind": "p",
            "text": "밑변 b = 8, 빗변 c = 17이 주어졌을 때 각도 A를 구합니다."
          },
          {
            "kind": "p",
            "text": "A = arccos(8/17) = arccos(0.4706) [[\\approx 61.93^\\circ]]. 여각 B = 28.07[[^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "예제 4: 같은 삼각형, 다른 각도"
          },
          {
            "kind": "p",
            "text": "밑변 b = 15, 빗변 c = 17이 주어졌을 때(8-15-17 삼각형의 각도 B 구하기)."
          },
          {
            "kind": "p",
            "text": "B = arccos(15/17) = arccos(0.8824) [[\\approx 28.07^\\circ]]. 61.93 + 28.07 = 90이 되며, 요구사항대로입니다."
          },
          {
            "kind": "h3",
            "text": "예제 5: 5-12-13, 다른 각도"
          },
          {
            "kind": "p",
            "text": "밑변 b = 5, 빗변 c = 13이 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "B = arccos(5/13) = arccos(0.3846) [[\\approx 67.38^\\circ]]. 예제 2의 여각과 일치합니다."
          },
          {
            "kind": "h3",
            "text": "예제 6: 3-4-5, 다른 각도"
          },
          {
            "kind": "p",
            "text": "밑변 b = 3, 빗변 c = 5가 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "B = arccos(3/5) = arccos(0.6) [[\\approx 53.13^\\circ]]. 예제 1의 여각과 일치합니다."
          },
          {
            "kind": "h3",
            "text": "예제 7: 60도 특수 케이스"
          },
          {
            "kind": "p",
            "text": "밑변 b = 1, 빗변 c = 2가 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "A = arccos(1/2) = arccos(0.5) = 정확히 60[[^\\circ]]. 이것은 30-60-90 특수 삼각형입니다. 특수 직각삼각형 계산기가 이러한 정확한 값을 다룹니다."
          },
          {
            "kind": "h3",
            "text": "예제 8: 7-24-25 삼각형"
          },
          {
            "kind": "p",
            "text": "밑변 b = 7, 빗변 c = 25가 주어졌을 때 각도 A를 구합니다."
          },
          {
            "kind": "p",
            "text": "A = arccos(7/25) = arccos(0.28) [[\\approx 73.74^\\circ]]. 여각 B = 16.26[[^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "예제 9: 7-24-25, 다른 각도"
          },
          {
            "kind": "p",
            "text": "밑변 b = 24, 빗변 c = 25가 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "B = arccos(24/25) = arccos(0.96) [[\\approx 16.26^\\circ]]. 예제 8의 여각과 일치합니다."
          },
          {
            "kind": "h3",
            "text": "예제 10: 9-40-41 삼각형"
          },
          {
            "kind": "p",
            "text": "밑변 b = 9, 빗변 c = 41이 주어졌을 때 각도 A를 구합니다."
          },
          {
            "kind": "p",
            "text": "A = arccos(9/41) = arccos(0.2195) [[\\approx 77.32^\\circ]]. 짧은 밑변은 넓은 각도를 만듭니다."
          },
          {
            "kind": "h3",
            "text": "예제 11: 9-40-41, 다른 각도"
          },
          {
            "kind": "p",
            "text": "밑변 b = 40, 빗변 c = 41이 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "B = arccos(40/41) = arccos(0.9756) [[\\approx 12.68^\\circ]]. 77.32 + 12.68 = 90이 됩니다."
          },
          {
            "kind": "h3",
            "text": "예제 12: 20-21-29 삼각형"
          },
          {
            "kind": "p",
            "text": "밑변 b = 20, 빗변 c = 29가 주어졌을 때 각도 A를 구합니다."
          },
          {
            "kind": "p",
            "text": "A = arccos(20/29) = arccos(0.6897) [[\\approx 46.40^\\circ]]. 여각 B = 43.60[[^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "예제 13: 20-21-29, 다른 각도"
          },
          {
            "kind": "p",
            "text": "밑변 b = 21, 빗변 c = 29가 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "B = arccos(21/29) = arccos(0.7241) [[\\approx 43.60^\\circ]]. 예제 12의 여각과 일치합니다."
          },
          {
            "kind": "h3",
            "text": "예제 14: 6-8-10 삼각형"
          },
          {
            "kind": "p",
            "text": "밑변 b = 6, 빗변 c = 10이 주어졌을 때 각도 A를 구합니다."
          },
          {
            "kind": "p",
            "text": "A = arccos(6/10) = arccos(0.6) [[\\approx 53.13^\\circ]]. 예제 6과 같은 각도입니다. 6-8-10은 3-4-5의 확대판이기 때문입니다."
          },
          {
            "kind": "h3",
            "text": "예제 15: 6-8-10, 다른 각도"
          },
          {
            "kind": "p",
            "text": "밑변 b = 8, 빗변 c = 10이 주어졌습니다."
          },
          {
            "kind": "p",
            "text": "B = arccos(8/10) = arccos(0.8) [[\\approx 36.87^\\circ]]. 예제 1과 같으며, 닮은 삼각형이 각도를 공유함을 확인해 줍니다."
          },
          {
            "kind": "h3",
            "text": "예제 16: 12-16-20 삼각형"
          },
          {
            "kind": "p",
            "text": "밑변 b = 12, 빗변 c = 20이 주어졌을 때 각도 A를 구합니다."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/20) = arccos(0.6) [[\\approx 53.13^\\circ]]. 또 다른 3-4-5 확대판으로, 다시 같은 각도입니다. 변의 스케일은 각도를 절대 바꾸지 않습니다."
          }
        ]
      },
      "arccos-special": {
        "h2": "기억할 가치가 있는 특수 각도 값",
        "blocks": [
          {
            "kind": "p",
            "text": "자주 등장하는 arccos 값이 몇 가지 있어 알아두면 시간을 절약할 수 있습니다. 특수 직각삼각형에서 나온 것들입니다."
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(1) = 0^\\circ]]: 밑변이 빗변과 같으므로 각도는 0으로 무너집니다. 이것은 퇴화 케이스이지 진짜 삼각형이 아니지만 스케일의 기준점이 됩니다."
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(\\sqrt{3}/2) \\approx 30^\\circ]]: 30-60-90 삼각형에서 나옵니다. 밑변이 빗변의 약 86.6퍼센트일 때 각도는 30도입니다."
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(\\sqrt{2}/2) = 45^\\circ]]: 45-45-90 삼각형에서 나옵니다. 같은 두 다리가 이 정확한 값을 만듭니다."
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(1/2) = 60^\\circ]]: 30-60-90 삼각형에서 나왔고, 예제 7의 케이스입니다. 밑변이 빗변의 정확히 절반일 때 각도는 정확히 60도입니다."
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(0) = 90^\\circ]]: 밑변이 0으로 줄어들어 각도는 직각까지 열립니다. 0 케이스와 마찬가지로 이것은 극한이지 진짜 삼각형 각도가 아닙니다."
          },
          {
            "kind": "p",
            "text": "이 기준점들 사이에서 비율이 증가함에 따라 arccos는 부드럽게 감소합니다. 다섯 기준점을 외우면 어떤 arccos도 암산으로 추정할 수 있습니다. 0.7 비율은 0.5(60도)와 0.866(30도) 사이에 있고 45도에 조금 더 가깝습니다. 실제 값은 약 45.57도입니다."
          }
        ]
      },
      "arccos-mistakes": {
        "h2": "arccos 사용 시 흔한 실수",
        "blocks": [
          {
            "kind": "h3",
            "text": "밑변 대신 대변 사용"
          },
          {
            "kind": "p",
            "text": "가장 빈번한 실수입니다. arccos가 필요로 하는 것은 각도 A의 맞은편이 아니라 각도 A에 닿는 변입니다. 대변을 arccos에 넣으면 의도한 각도의 여각이 나옵니다. 3-4-5 삼각형에서 arccos(3/5) = 53.13도는 각도 B이지 각도 A가 아닙니다. 해결법: 삼각형을 스케치하고 목표 각도를 표시한 뒤 어느 다리가 닿는지 추적하세요."
          },
          {
            "kind": "h3",
            "text": "분자에 빗변 넣기"
          },
          {
            "kind": "p",
            "text": "arccos는 밑변 나누기 빗변, 즉 1 미만의 숫자를 기대합니다. b/c 대신 c/b를 입력하면 1을 초과하는 비율이 되고 계산기는 수학 오류를 반환합니다. 해결법: arccos 비율에서 빗변은 항상 분모입니다."
          },
          {
            "kind": "h3",
            "text": "arccos와 코사인 혼동"
          },
          {
            "kind": "p",
            "text": "많은 계산기에서 코사인 키와 역코사인 키(보통 cos[[-1]] 또는 arccos 표시)가 가까이 있습니다. arccos(0.8) 대신 cos(0.8)을 누르면 36.87도가 아니라 0.6967이라는 무의미한 비율이 나옵니다. 해결법: 계산기가 도 모드인지, 역함수 키를 눌렀는지 확인하세요."
          },
          {
            "kind": "h3",
            "text": "도와 라디안 혼용"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8)은 36.87도이지만 0.6435라디안입니다. 3-4-5 삼각형의 손 계산에서 0.64가 나왔다면 계산기는 라디안 모드입니다. 180/pi를 곱해 변환하거나 모드를 도로 바꾸세요. 이 계산기는 도 단위로 출력합니다."
          },
          {
            "kind": "h3",
            "text": "서로 다른 단위로 변 입력"
          },
          {
            "kind": "p",
            "text": "밑변은 인치, 빗변은 피트로 입력하면 비율이 깨집니다. 먼저 공통 단위로 변환하세요. 두 입력이 같은 단위를 공유할 때만 비율이 무차원이 됩니다."
          },
          {
            "kind": "h3",
            "text": "비율을 너무 일찍 반올림"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) = 36.87도이지만, 0.795에서 반올림한 arccos(0.80)은 37.24도가 됩니다. arccos가 가장 가파른 0과 1 근처의 비율에서는 작은 비율 오차가 증폭됩니다. 나누는 동안 최대 정밀도를 유지하고 최종 각도만 반올림하세요."
          },
          {
            "kind": "h3",
            "text": "어느 각도를 구했는지 잊음"
          },
          {
            "kind": "p",
            "text": "arccos는 입력한 밑변이 닿는 각도를 반환합니다. 각도 B에 닿는 변을 입력했다면 결과는 각도 B입니다. 답에 올바른 각도 이름을 붙이거나 여각으로 검증하세요. 두 예각의 합은 90도여야 합니다."
          }
        ]
      },
      "arccos-verify": {
        "h2": "arccos 답 검증하기",
        "blocks": [
          {
            "kind": "p",
            "text": "세 가지 검사가 정확한 arccos 계산을 확인합니다."
          },
          {
            "kind": "p",
            "text": "3-4-5 삼각형의 경우 변이 피타고라스 정리를 만족하는지도 확인하세요. 9 + 16 = 25입니다. 그 변들에서 유도된 각도를 믿기 전에 변을 확인하는 것은 좋은 습관이며, 피타고라스 정리 계산기로 빠르게 할 수 있습니다."
          },
          {
            "kind": "p",
            "text": "네 번째 검사는 여각을 사용합니다. B = 90[[^\\circ]] 빼기 A를 계산한 뒤 다른 비율의 arccos가 B를 내는지 확인합니다. 예제 1에서 arccos(3/5) = 53.13[[^\\circ]]이며, 이는 90 빼기 36.87과 일치합니다. 네 검사가 모두 통과하면 답은 의심의 여지가 없습니다."
          }
        ],
        "steps": [
          "<strong>범위 검사.</strong> 결과는 0과 90도 사이에 엄격히 들어야 합니다. 그 밖은 무효 입력이나 잘못 라벨된 변을 나타냅니다.",
          "<strong>왕복 검사.</strong> cos(A)를 계산해 b/c와 같은지 확인합니다. 예제 1의 경우 cos(36.87[[^\\circ]]) [[\\approx]] 0.8 = 4/5입니다. 왕복 검사가 실패하면 각도가 틀렸습니다.",
          "<strong>방법 교차 검사.</strong> 세 번째 변을 이용해 arcsin이나 arctan으로 다시 계산합니다. arccos(4/5) = 36.87[[^\\circ]]이고 arctan(3/4) = 36.87[[^\\circ]]이면 답이 확실합니다. 불일치는 라벨링 오류를 가리킵니다."
        ]
      },
      "arccos-applications": {
        "h2": "실생활의 arccos 응용",
        "blocks": [
          {
            "kind": "p",
            "text": "arccos는 경사 거리와 수평 거리가 자연스러운 측정값인 곳에 등장합니다. 빗변은 경사면 자체를 따라 측정되고, 밑변은 수평 성분입니다."
          },
          {
            "kind": "h3",
            "text": "경사면 측량"
          },
          {
            "kind": "p",
            "text": "측량사가 경사면을 따라 65미터, 수평으로 60미터를 측정합니다. 경사면 각도는 arccos(60/65), 약 22.6도입니다. 이것은 표준적인 arccos 상황입니다. 경사 거리는 줄자로 재기 쉽고, 수평 거리는 지도나 레벨에서 오며, 대변(높이)은 다음에 계산할 수 있는 것이기 때문입니다."
          },
          {
            "kind": "h3",
            "text": "그림자에서 구한 태양 고도"
          },
          {
            "kind": "p",
            "text": "10미터 광선이 8미터 그림자를 만듭니다. 태양 고도각은 arccos(8/10), 약 36.9도입니다. 그림자는 지면을 따라(밑변) 있고 광선이 빗변이므로 그림자 문제는 자연스러운 arccos 문제입니다."
          },
          {
            "kind": "h3",
            "text": "지붕 서까래 경사"
          },
          {
            "kind": "p",
            "text": "서까래가 6.5미터 뻗어 있고 수평 거리가 6미터입니다. 처마에서의 경사각은 arccos(6/6.5), 약 22.6도입니다. 목수는 서까래를 직접 재고 수평 거리는 멍에를 따라 재므로 arccos가 측정 방식에 딱 맞습니다."
          },
          {
            "kind": "h3",
            "text": "엔지니어링 브레이스"
          },
          {
            "kind": "p",
            "text": "대각 브레이스가 4미터, 수평 베이스가 3.5미터입니다. 브레이스 각도는 arccos(3.5/4), 약 28.96도입니다. 구조 스케치에는 브레이스 길이와 그 점유 면적이 표시되고, arccos가 이를 설치 각도로 변환합니다."
          }
        ],
        "imgAlt": "측량, 그림자, 지붕 서까래, 브레이스 각도의 arccos 계산을 보여주는 네 패널",
        "figcaption": "실세계 arccos 문제: 경사면 각도, 태양 고도, 서까래 경사, 브레이스 설치 각도."
      },
      "arccos-related": {
        "h2": "관련 직각삼각형 계산기 보기",
        "blocks": []
      },
      "arccos-conclusion": {
        "h2": "코사인에서 어떤 각도든 자신 있게 구하기",
        "blocks": [
          {
            "kind": "p",
            "text": "밑변을 식별하는 것부터 시작하세요. 목표 각도에 닿는 다리입니다. 빗변이 가장 긴 변인지 확인합니다. 나누고, arccos를 적용하고, 각도를 도로 읽습니다. 두 번째 각도는 90에서 첫 번째를 뺀 값으로 구합니다. 왕복 검사, 방법 교차 계산, 각도 합으로 검증합니다. 이 단계를 따르면 어떤 밑변-빗변 문제든 신뢰할 수 있는 루틴으로 축소됩니다. 숫자를 실행하려면 이 페이지 상단의 계산기로 돌아가세요."
          }
        ]
      }
    }
  },
  "ms": {
    "faqs": [
      {
        "question": "Apakah maksud A = arccos(b / c) sebenarnya?",
        "answer": "Maksudnya anda membahagikan sisi bersebelahan dengan hipotenus, kemudian bekerja secara terbalik daripada perpuluhan itu untuk mencari sudut yang kosinusnya sama dengannya. Hasilnya ialah sudut tirus antara sisi bersebelahan dengan hipotenus."
      },
      {
        "question": "Bilakah saya perlu menggunakan arccos berbanding arcsin?",
        "answer": "Gunakan arccos apabila anda mengetahui sisi bersebelahan dan hipotenus. Gunakan arcsin apabila anda mengetahui sisi bertentangan dan hipotenus. Kedua-duanya memberikan sudut yang sama untuk segi tiga yang sama; pilihannya bergantung pada sisi mana yang anda ukur."
      },
      {
        "question": "Mengapa saya mendapat ralat matematik daripada arccos?",
        "answer": "Punca paling biasa ialah nisbah melebihi 1, yang berlaku apabila sisi bersebelahan yang dimasukkan lebih panjang daripada hipotenus. Dalam segi tiga bersudut tegak yang sah, hipotenus sentiasa yang paling panjang, jadi semak label sisi anda."
      },
      {
        "question": "Bolehkah saya menggunakan arccos tanpa mengetahui sisi bertentangan?",
        "answer": "Ya. Itulah kelebihan utama arccos: ia hanya memerlukan sisi bersebelahan dan hipotenus. Sisi bertentangan tidak pernah masuk ke dalam pengiraan."
      },
      {
        "question": "Apakah perbezaan antara cos dan arccos?",
        "answer": "Kosinus mengambil sudut dan mengembalikan nisbah: cos(60 darjah) = 0.5. Arccos menterbalikkannya: ia mengambil nisbah dan mengembalikan sudut, jadi arccos(0.5) = 60 darjah. Gunakan kosinus apabila anda mengetahui sudut; gunakan arccos apabila anda mengetahui sisi-sisinya."
      },
      {
        "question": "Mengapa arccos, arcsin dan arctan memberikan jawapan yang sama?",
        "answer": "Kerana kesemuanya menggambarkan sudut geometri yang sama melalui pasangan sisi yang berbeza. Dalam segi tiga 3-4-5, arccos(4/5), arcsin(3/5) dan arctan(3/4) semuanya sama dengan 36.87 darjah. Persetujuan antara kaedah-kaedah ini mengesahkan label sisi anda betul."
      },
      {
        "question": "Apakah maksudnya jika b/c tepat 0.5?",
        "answer": "Sudutnya tepat 60 darjah. Ini ialah segi tiga khas 30-60-90, di mana sisi yang bersebelahan dengan sudut 60 darjah adalah separuh daripada hipotenus."
      },
      {
        "question": "Patutkah jawapan dalam darjah atau radian?",
        "answer": "Kalkulator ini menggunakan darjah, piawaian untuk pembinaan, ukur tanah dan geometri bilik darjah. Jika anda mengira dengan tangan, pastikan kalkulator dalam mod darjah; hasil mod radian seperti 0.64 bertukar kepada 36.87 darjah apabila didarab dengan 180/pi."
      },
      {
        "question": "Bagaimanakah saya mencari sudut tirus yang satu lagi?",
        "answer": "Tolak daripada 90 darjah. Jika arccos memberikan A = 36.87 darjah, maka B = 90 - 36.87 = 53.13 darjah. Tiada trigonometri tambahan diperlukan."
      },
      {
        "question": "Bolehkah hasil arccos menjadi 90 darjah?",
        "answer": "Hanya sebagai had: arccos(0) = 90 darjah, tetapi sisi bersebelahan sifar bermakna segi tiga yang merosot, bukan segi tiga sebenar. Sudut segi tiga bersudut tegak yang sah daripada arccos sentiasa berada dengan ketat antara 0 dan 90 darjah."
      },
      {
        "question": "Bagaimanakah saya boleh mengesahkan jawapan arccos saya?",
        "answer": "Kira cos(A) dan sahkan ia sama dengan b/c. Kira semula juga dengan arcsin atau arctan menggunakan sisi ketiga; semua kaedah mesti bersetuju. Akhir sekali, sahkan kedua-dua sudut tirus berjumlah tepat 90 darjah."
      },
      {
        "question": "Adakah mengubah skala segi tiga mengubah hasil arccos?",
        "answer": "Tidak. Segi tiga sebentuk mempunyai sudut yang sama. Segi tiga 3-4-5 dan segi tiga 6-8-10 kedua-duanya memberikan arccos(0.8) = 36.87 darjah, kerana nisbah b/c tidak berubah dengan skala."
      }
    ],
    "relatedHeading": "Terokai kalkulator segi tiga bersudut tegak berkaitan",
    "relatedItems": [
      "Kalkulator Sudut Segi Tiga Bersudut Tegak",
      "Kalkulator Sudut Segi Tiga Bersudut Tegak daripada Sinus",
      "Kalkulator Sudut Segi Tiga Bersudut Tegak daripada Tangen",
      "Kalkulator Sudut Hilang Segi Tiga Bersudut Tegak",
      "Kalkulator Nisbah Trigonometri Segi Tiga Bersudut Tegak",
      "Kalkulator Nisbah Kosinus"
    ],
    "tocHeading": "Dalam Panduan Ini",
    "tocItems": {
      "arccos-intro": "Apakah kalkulator sudut daripada kosinus?",
      "arccos-what": "Memahami arccos (kosinus songsang)",
      "arccos-vs": "Arccos lawan arcsin lawan arctan",
      "arccos-anatomy": "Sisi bersebelahan dan hipotenus",
      "arccos-howto": "Cara menggunakan kalkulator",
      "arccos-examples": "16 contoh kerja",
      "arccos-special": "Nilai sudut khas",
      "arccos-mistakes": "Kesilapan biasa",
      "arccos-verify": "Mengesahkan jawapan anda",
      "arccos-applications": "Aplikasi dalam kehidupan sebenar",
      "arccos-related": "Kalkulator berkaitan",
      "arccos-conclusion": "Cari sebarang sudut daripada kosinus dengan yakin",
      "arccos-faq": "Soalan lazim"
    },
    "sections": {
      "arccos-intro": {
        "h2": "Apakah kalkulator sudut segi tiga bersudut tegak daripada kosinus?",
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator sudut segi tiga bersudut tegak daripada kosinus mencari sudut tirus apabila anda mengetahui sisi bersebelahan dan hipotenus. Ia menggunakan fungsi kosinus songsang, ditulis sebagai arccos atau cos[[-1]], kepada nisbah kedua-dua sisi ini. Hasilnya ialah sudut A dalam darjah."
          },
          {
            "kind": "p",
            "text": "Alat ini wujud untuk situasi ukuran tertentu: anda boleh mengukur sisi yang bersebelahan dengan sudut sasaran anda dan sisi terpanjang segi tiga, tetapi sisi bertentangan tidak diketahui atau sukar dicapai. Daripada mengira sisi bertentangan dahulu, arccos melangkaunya sepenuhnya dan menukarkan nisbah bersebelahan-per-hipotenus terus kepada sudut."
          },
          {
            "kind": "p",
            "text": "Sebagai contoh, sisi bersebelahan 4 dan hipotenus 5 memberikan nisbah 0.8. Arccos 0.8 adalah lebih kurang 36.87 darjah. Itulah sudut A. Sudut tirus yang satu lagi mengikut peraturan pelengkap: 90 tolak 36.87, atau 53.13 darjah."
          },
          {
            "kind": "p",
            "text": "Arccos ialah salah satu daripada tiga alat trigonometri songsang di laman ini. Jika sisi yang diketahui ialah sisi bertentangan dan hipotenus, kalkulator sudut daripada sinus ialah pilihan yang betul. Jika anda mengetahui kedua-dua kaki tetapi bukan hipotenus, gunakan kalkulator sudut daripada tangen. Halaman ini merangkumi kes kosinus secara mendalam."
          }
        ]
      },
      "arccos-what": {
        "h2": "Memahami arccos (kosinus songsang)",
        "blocks": [
          {
            "kind": "p",
            "text": "Kosinus biasa mengambil sudut dan mengembalikan nisbah. Kosinus 60 darjah ialah 0.5. Arccos menterbalikkannya: ia mengambil nisbah dan mengembalikan sudut. Arccos 0.5 ialah 60 darjah. Kedua-dua fungsi ini membatalkan satu sama lain, sebab itulah arccos juga ditulis sebagai cos[[-1]]."
          },
          {
            "kind": "p",
            "text": "Formula yang digunakan oleh kalkulator ini ialah [[A = \\cos^{-1}(b/c)]]. Di sini b ialah sisi bersebelahan, c ialah hipotenus, dan A ialah sudut di antara keduanya. Nisbah b/c sentiasa berada antara 0 dan 1 untuk segi tiga bersudut tegak yang sah, kerana sisi bersebelahan sentiasa lebih pendek daripada hipotenus."
          },
          {
            "kind": "p",
            "text": "Anggap arccos sebagai satu soalan: \"Sudut manakah yang mempunyai nilai kosinus ini?\" Jika b/c sama dengan 0.8, soalannya menjadi \"sudut manakah yang kosinusnya 0.8?\" Jawapannya, 36.87 darjah, ialah sudut yang sisi bersebelahannya 80 peratus panjang hipotenus."
          },
          {
            "kind": "h3",
            "text": "Nisbah menceritakan sebuah kisah"
          },
          {
            "kind": "p",
            "text": "Nilai b/c menggambarkan bentuk segi tiga. Nisbah yang hampir 1 bermakna sisi bersebelahan hampir sepanjang hipotenus, jadi sudut di antaranya sangat kecil. Nisbah yang hampir 0 bermakna sisi bersebelahan sangat pendek berbanding hipotenus, jadi sudut terbuka luas ke arah 90 darjah. Nisbah tepat 0.5 sentiasa bermakna 60 darjah."
          },
          {
            "kind": "h3",
            "text": "Domain arccos"
          },
          {
            "kind": "p",
            "text": "Arccos hanya menerima input dari 0 hingga 1 dalam konteks geometri ini. Nisbah di atas 1 adalah mustahil untuk segi tiga bersudut tegak dan menandakan kesilapan label: hipotenus mestilah penyebut dan mestilah sisi yang paling panjang. Nisbah negatif akan menggambarkan sudut tumpul, yang tidak boleh muncul sebagai sudut A dalam segi tiga bersudut tegak."
          }
        ],
        "imgAlt": "Rajah menunjukkan dua langkah arccos: bahagikan b dengan c, kemudian gunakan arccos untuk mendapatkan sudut",
        "figcaption": "Bagaimana arccos berfungsi: bahagikan sisi bersebelahan dengan hipotenus, kemudian gunakan kosinus songsang untuk mendapatkan semula sudut."
      },
      "arccos-vs": {
        "h2": "Arccos lawan arcsin lawan arctan: bila menggunakan setiap satunya",
        "blocks": [
          {
            "kind": "p",
            "text": "Ketiga-tiga fungsi songsang mencari sudut yang sama apabila digunakan pada segi tiga yang sama. Kesemuanya hanya berbeza pada sisi yang diperlukan. Memilih dengan betul mengelakkan anda daripada mengira sisi yang tidak diperlukan."
          },
          {
            "kind": "p",
            "text": "Gunakan <strong>arccos</strong> apabila anda mengetahui sisi bersebelahan (b) dan hipotenus (c). Formulanya ialah [[A = \\cos^{-1}(b/c)]]. Ini ialah pilihan semula jadi apabila hipotenus diukur secara terus, contohnya dengan pita di sepanjang cerun, dan jarak mengufuk diketahui."
          },
          {
            "kind": "p",
            "text": "Gunakan <strong>arcsin</strong> apabila anda mengetahui sisi bertentangan (a) dan hipotenus (c). Formulanya ialah [[A = \\sin^{-1}(a/c)]]. Masalah ketinggian memihak kepada arcsin: ketinggian menegak bertentangan dengan sudut pada aras tanah. Kalkulator sudut daripada sinus mengendalikan kes ini."
          },
          {
            "kind": "p",
            "text": "Gunakan <strong>arctan</strong> apabila anda mengetahui kedua-dua kaki (a dan b) tetapi bukan hipotenus. Formulanya ialah [[A = \\tan^{-1}(a/b)]]. Ukuran lapangan seperti tinggi berbanding rentang bumbung memihak kepada arctan kerana kedua-dua kaki diukur secara terus. Lihat kalkulator sudut daripada tangen untuk kaedah itu."
          },
          {
            "kind": "h3",
            "text": "Semuanya mesti bersetuju"
          },
          {
            "kind": "p",
            "text": "Bagi mana-mana segi tiga tunggal, arccos(b/c), arcsin(a/c) dan arctan(a/b) menghasilkan sudut yang sama. Dalam segi tiga 3-4-5, arccos(4/5), arcsin(3/5) dan arctan(3/4) semuanya sama dengan 36.87 darjah. Jika dua kaedah tidak bersetuju, sesuatu sisi telah dilabel salah. Semakan silang ini ialah pengesahan paling boleh dipercayai yang ada, dan kalkulator nisbah trigonometri boleh mengesahkan ketiga-tiga nisbah sekaligus."
          },
          {
            "kind": "h3",
            "text": "Mengapa tidak sentiasa menggunakan arctan?"
          },
          {
            "kind": "p",
            "text": "Arctan memerlukan kedua-dua kaki. Jika sisi bertentangan tidak diketahui dan sukar diukur, mengiranya dahulu semata-mata untuk menggunakan arctan menambah satu langkah yang tidak perlu dan satu lagi peluang untuk kesilapan. Arccos pergi terus dari kedua-dua sisi yang anda ada kepada sudut yang anda mahu. Padankan fungsi dengan ukuran anda, bukan dengan kebiasaan."
          }
        ]
      },
      "arccos-anatomy": {
        "h2": "Sisi bersebelahan dan hipotenus: dua input",
        "blocks": [
          {
            "kind": "p",
            "text": "Arccos memerlukan tepat dua sisi: sisi bersebelahan b dan hipotenus c. Melabelkan sisi-sisi ini dengan betul adalah seluruh perjuangan. Segala-galanya selepas itu adalah aritmetik."
          },
          {
            "kind": "h3",
            "text": "Mengenal pasti sisi bersebelahan"
          },
          {
            "kind": "p",
            "text": "Sisi bersebelahan ialah kaki yang menyentuh sudut A. Ia membentuk satu tepi sudut itu sendiri. Dalam rajah di bawah, sisi b berjalan di sepanjang dasar dari sudut tegak ke sudut A. Jika anda menyelesaikan sudut B yang satu lagi, labelnya bertukar: sisi yang bersebelahan dengan B ialah sisi yang menyentuh B."
          },
          {
            "kind": "h3",
            "text": "Mengenal pasti hipotenus"
          },
          {
            "kind": "p",
            "text": "Hipotenus ialah sisi yang bertentangan dengan sudut tegak. Ia sentiasa sisi terpanjang dalam segi tiga. Ia tidak pernah menyentuh bucu sudut tegak. Jika \"hipotenus\" anda bukan yang terpanjang antara tiga ukuran anda, label semula sebelum mengira. Kalkulator teorem Pythagoras boleh mengesahkan sisi mana yang terpanjang apabila anda mempunyai ketiganya."
          },
          {
            "kind": "h3",
            "text": "Mengapa sisi bertentangan kekal di luar"
          },
          {
            "kind": "p",
            "text": "Kosinus ditakrifkan sebagai bersebelahan per hipotenus. Sisi bertentangan langsung tidak muncul dalam nisbah itu. Itulah tujuan kalkulator ini: apabila sisi bertentangan tidak diketahui, tertanam, atau tidak relevan dengan susunan ukuran anda, arccos masih memberikan sudut. Anda tidak mengabaikan sisi bertentangan; anda menggunakan nisbah yang tidak pernah memerlukannya."
          }
        ],
        "imgAlt": "Segi tiga bersudut tegak dengan sisi bersebelahan b dan hipotenus c diserlahkan untuk formula arccos",
        "figcaption": "Anatomi untuk arccos: b ialah sisi bersebelahan yang menyentuh sudut A, c ialah hipotenus bertentangan dengan sudut tegak."
      },
      "arccos-howto": {
        "h2": "Cara menggunakan kalkulator sudut daripada kosinus",
        "blocks": [],
        "steps": [
          "<strong>Sahkan sudut tegak.</strong> Kalkulator hanya berfungsi untuk segi tiga bersudut tegak. Kenal pasti dahulu penjuru 90 darjah.",
          "<strong>Pilih sudut sasaran anda.</strong> Tentukan sama ada anda menyelesaikan sudut A atau sudut B. Sisi bersebelahan ditakrifkan relatif kepada pilihan itu.",
          "<strong>Ukur sisi bersebelahan b.</strong> Ini ialah kaki yang menyentuh sudut sasaran anda. Rekodkannya dalam sebarang unit.",
          "<strong>Ukur hipotenus c.</strong> Ini ialah sisi terpanjang, bertentangan dengan sudut tegak. Gunakan unit yang sama seperti b.",
          "<strong>Sahkan b lebih kecil daripada c.</strong> Jika tidak, sisi-sisi dilabel salah. Hipotenus mestilah yang terpanjang.",
          "<strong>Masukkan kedua-dua nilai dan tekan Calculate.</strong> Alat mengira b/c, menggunakan arccos, dan mengembalikan sudut A dalam darjah.",
          "<strong>Cari sudut kedua.</strong> Tolak daripada 90 darjah: B = 90[[^\\circ]] tolak A.",
          "<strong>Sahkan.</strong> Kira cos(A) pada kalkulator dan sahkan ia sama dengan b/c. Jika ya, jawapannya kukuh."
        ],
        "imgAlt": "Contoh kerja arccos empat langkah dengan b sama dengan 4 dan c sama dengan 5",
        "figcaption": "Contoh kerja: b = 4, c = 5 memberikan A = arccos(0.8), lebih kurang 36.87 darjah, disahkan oleh semakan pergi-balik."
      },
      "arccos-examples": {
        "h2": "16 contoh kerja",
        "blocks": [
          {
            "kind": "p",
            "text": "Setiap contoh mengikut empat langkah yang sama: tulis formula, gantikan, bahagikan, gunakan arccos. Sudut dibundarkan kepada dua tempat perpuluhan."
          },
          {
            "kind": "h3",
            "text": "Contoh 1: segi tiga 3-4-5"
          },
          {
            "kind": "p",
            "text": "Diberi sisi bersebelahan b = 4 dan hipotenus c = 5, cari sudut A."
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) [[\\approx 36.87^\\circ]]. Pelengkap B = 53.13[[^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Contoh 2: segi tiga 5-12-13"
          },
          {
            "kind": "p",
            "text": "Diberi sisi bersebelahan b = 12 dan hipotenus c = 13, cari sudut A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) [[\\approx 22.62^\\circ]]. Pelengkap B = 67.38[[^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Contoh 3: segi tiga 8-15-17"
          },
          {
            "kind": "p",
            "text": "Diberi sisi bersebelahan b = 8 dan hipotenus c = 17, cari sudut A."
          },
          {
            "kind": "p",
            "text": "A = arccos(8/17) = arccos(0.4706) [[\\approx 61.93^\\circ]]. Pelengkap B = 28.07[[^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Contoh 4: segi tiga yang sama, sudut yang satu lagi"
          },
          {
            "kind": "p",
            "text": "Diberi sisi bersebelahan b = 15 dan hipotenus c = 17 (menyelesaikan sudut B bagi segi tiga 8-15-17)."
          },
          {
            "kind": "p",
            "text": "B = arccos(15/17) = arccos(0.8824) [[\\approx 28.07^\\circ]]. Perhatikan 61.93 + 28.07 = 90, seperti yang diperlukan."
          },
          {
            "kind": "h3",
            "text": "Contoh 5: 5-12-13, sudut yang satu lagi"
          },
          {
            "kind": "p",
            "text": "Diberi sisi bersebelahan b = 5 dan hipotenus c = 13."
          },
          {
            "kind": "p",
            "text": "B = arccos(5/13) = arccos(0.3846) [[\\approx 67.38^\\circ]]. Ini sepadan dengan pelengkap Contoh 2."
          },
          {
            "kind": "h3",
            "text": "Contoh 6: 3-4-5, sudut yang satu lagi"
          },
          {
            "kind": "p",
            "text": "Diberi sisi bersebelahan b = 3 dan hipotenus c = 5."
          },
          {
            "kind": "p",
            "text": "B = arccos(3/5) = arccos(0.6) [[\\approx 53.13^\\circ]]. Ini sepadan dengan pelengkap Contoh 1."
          },
          {
            "kind": "h3",
            "text": "Contoh 7: kes khas 60 darjah"
          },
          {
            "kind": "p",
            "text": "Diberi sisi bersebelahan b = 1 dan hipotenus c = 2."
          },
          {
            "kind": "p",
            "text": "A = arccos(1/2) = arccos(0.5) = tepat 60[[^\\circ]]. Ini ialah segi tiga khas 30-60-90. Kalkulator segi tiga bersudut tegak khas merangkumi nilai tepat ini."
          },
          {
            "kind": "h3",
            "text": "Contoh 8: segi tiga 7-24-25"
          },
          {
            "kind": "p",
            "text": "Diberi sisi bersebelahan b = 7 dan hipotenus c = 25, cari sudut A."
          },
          {
            "kind": "p",
            "text": "A = arccos(7/25) = arccos(0.28) [[\\approx 73.74^\\circ]]. Pelengkap B = 16.26[[^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Contoh 9: 7-24-25, sudut yang satu lagi"
          },
          {
            "kind": "p",
            "text": "Diberi sisi bersebelahan b = 24 dan hipotenus c = 25."
          },
          {
            "kind": "p",
            "text": "B = arccos(24/25) = arccos(0.96) [[\\approx 16.26^\\circ]]. Sepadan dengan pelengkap Contoh 8."
          },
          {
            "kind": "h3",
            "text": "Contoh 10: segi tiga 9-40-41"
          },
          {
            "kind": "p",
            "text": "Diberi sisi bersebelahan b = 9 dan hipotenus c = 41, cari sudut A."
          },
          {
            "kind": "p",
            "text": "A = arccos(9/41) = arccos(0.2195) [[\\approx 77.32^\\circ]]. Sisi bersebelahan yang kecil menghasilkan sudut yang luas."
          },
          {
            "kind": "h3",
            "text": "Contoh 11: 9-40-41, sudut yang satu lagi"
          },
          {
            "kind": "p",
            "text": "Diberi sisi bersebelahan b = 40 dan hipotenus c = 41."
          },
          {
            "kind": "p",
            "text": "B = arccos(40/41) = arccos(0.9756) [[\\approx 12.68^\\circ]]. Perhatikan 77.32 + 12.68 = 90."
          },
          {
            "kind": "h3",
            "text": "Contoh 12: segi tiga 20-21-29"
          },
          {
            "kind": "p",
            "text": "Diberi sisi bersebelahan b = 20 dan hipotenus c = 29, cari sudut A."
          },
          {
            "kind": "p",
            "text": "A = arccos(20/29) = arccos(0.6897) [[\\approx 46.40^\\circ]]. Pelengkap B = 43.60[[^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Contoh 13: 20-21-29, sudut yang satu lagi"
          },
          {
            "kind": "p",
            "text": "Diberi sisi bersebelahan b = 21 dan hipotenus c = 29."
          },
          {
            "kind": "p",
            "text": "B = arccos(21/29) = arccos(0.7241) [[\\approx 43.60^\\circ]]. Sepadan dengan pelengkap Contoh 12."
          },
          {
            "kind": "h3",
            "text": "Contoh 14: segi tiga 6-8-10"
          },
          {
            "kind": "p",
            "text": "Diberi sisi bersebelahan b = 6 dan hipotenus c = 10, cari sudut A."
          },
          {
            "kind": "p",
            "text": "A = arccos(6/10) = arccos(0.6) [[\\approx 53.13^\\circ]]. Sudut yang sama seperti Contoh 6, kerana 6-8-10 ialah 3-4-5 berskala."
          },
          {
            "kind": "h3",
            "text": "Contoh 15: 6-8-10, sudut yang satu lagi"
          },
          {
            "kind": "p",
            "text": "Diberi sisi bersebelahan b = 8 dan hipotenus c = 10."
          },
          {
            "kind": "p",
            "text": "B = arccos(8/10) = arccos(0.8) [[\\approx 36.87^\\circ]]. Sama seperti Contoh 1, mengesahkan segi tiga sebentuk berkongsi sudut."
          },
          {
            "kind": "h3",
            "text": "Contoh 16: segi tiga 12-16-20"
          },
          {
            "kind": "p",
            "text": "Diberi sisi bersebelahan b = 12 dan hipotenus c = 20, cari sudut A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/20) = arccos(0.6) [[\\approx 53.13^\\circ]]. Satu lagi 3-4-5 berskala, sudut yang sama lagi. Mengubah skala sisi tidak pernah mengubah sudut."
          }
        ]
      },
      "arccos-special": {
        "h2": "Nilai sudut khas yang berbaloi dihafal",
        "blocks": [
          {
            "kind": "p",
            "text": "Sesetengah nilai arccos muncul begitu kerap sehingga mengenalinya menjimatkan masa. Kesemuanya datang daripada segi tiga bersudut tegak khas."
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(1) = 0^\\circ]]: sisi bersebelahan sama dengan hipotenus, jadi sudut runtuh kepada sifar. Ini ialah kes merosot, bukan segi tiga sebenar, tetapi ia menambat skala."
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(\\sqrt{3}/2) \\approx 30^\\circ]]: daripada segi tiga 30-60-90. Apabila sisi bersebelahan kira-kira 86.6 peratus daripada hipotenus, sudutnya ialah 30 darjah."
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(\\sqrt{2}/2) = 45^\\circ]]: daripada segi tiga 45-45-90. Kaki yang sama memberikan nilai tepat ini."
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(1/2) = 60^\\circ]]: daripada segi tiga 30-60-90, kes dalam Contoh 7. Apabila sisi bersebelahan tepat separuh daripada hipotenus, sudutnya tepat 60 darjah."
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(0) = 90^\\circ]]: sisi bersebelahan mengecut kepada sifar, jadi sudut terbuka kepada sudut tegak. Seperti kes sifar, ini ialah had, bukan sudut segi tiga sebenar."
          },
          {
            "kind": "p",
            "text": "Di antara tanda aras ini, arccos menurun dengan lancar apabila nisbah meningkat. Menghafal lima titik sauh membolehkan anda menganggarkan mana-mana arccos secara mental: nisbah 0.7 terletak antara 0.5 (60 darjah) dan 0.866 (30 darjah), sedikit lebih dekat kepada 45 darjah. Nilai sebenar adalah kira-kira 45.57 darjah."
          }
        ]
      },
      "arccos-mistakes": {
        "h2": "Kesilapan biasa apabila menggunakan arccos",
        "blocks": [
          {
            "kind": "h3",
            "text": "Menggunakan sisi bertentangan berbanding sisi bersebelahan"
          },
          {
            "kind": "p",
            "text": "Kesilapan yang paling kerap. Arccos memerlukan sisi yang menyentuh sudut A, bukan sisi yang bertentangannya. Jika anda memasukkan sisi bertentangan ke dalam arccos, anda mendapat pelengkap sudut yang dimaksudkan. Dalam segi tiga 3-4-5, arccos(3/5) = 53.13 darjah ialah sudut B, bukan sudut A. Pembetulan: lakarkan segi tiga, tandakan sudut sasaran anda, dan jejak kaki mana yang menyentuhnya."
          },
          {
            "kind": "h3",
            "text": "Meletakkan hipotenus di pengangka"
          },
          {
            "kind": "p",
            "text": "Arccos menjangkakan bersebelahan per hipotenus, nombor di bawah 1. Memasukkan c/b berbanding b/c menghasilkan nisbah di atas 1, dan kalkulator mengembalikan ralat matematik. Pembetulan: hipotenus sentiasa penyebut dalam nisbah arccos."
          },
          {
            "kind": "h3",
            "text": "Mengelirukan arccos dengan kosinus"
          },
          {
            "kind": "p",
            "text": "Pada banyak kalkulator, kekunci kosinus dan kekunci kosinus songsang (selalunya dilabelkan cos[[-1]] atau arccos) terletak berdekatan. Menekan cos(0.8) berbanding arccos(0.8) memberikan 0.6967, nisbah yang tidak bermakna, berbanding 36.87 darjah. Pembetulan: sahkan kalkulator anda dalam mod darjah dan anda menekan kekunci songsang."
          },
          {
            "kind": "h3",
            "text": "Mencampurkan darjah dan radian"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) ialah 36.87 darjah tetapi 0.6435 radian. Jika pengiraan tangan anda memberikan 0.64 untuk segi tiga 3-4-5, kalkulator berada dalam mod radian. Darab dengan 180/pi untuk menukar, atau tukar mod kepada darjah. Kalkulator ini mengeluarkan darjah."
          },
          {
            "kind": "h3",
            "text": "Memasukkan sisi dalam unit yang berbeza"
          },
          {
            "kind": "p",
            "text": "Sisi bersebelahan dalam inci dan hipotenus dalam kaki merosakkan nisbah. Tukar kepada unit biasa dahulu. Nisbah tidak berunit, tetapi hanya apabila kedua-dua input berkongsi unit."
          },
          {
            "kind": "h3",
            "text": "Membundarkan nisbah terlalu awal"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) = 36.87 darjah, tetapi arccos(0.80) yang dibundarkan daripada 0.795 memberikan 37.24 darjah. Berhampiran nisbah 0 dan 1, di mana arccos paling curam, kesilapan nisbah kecil diperbesarkan. Kekalkan ketepatan penuh semasa pembahagian dan bundarkan hanya sudut akhir."
          },
          {
            "kind": "h3",
            "text": "Lupa sudut mana yang diselesaikan"
          },
          {
            "kind": "p",
            "text": "Arccos mengembalikan sudut yang sisi bersebelahannya anda masukkan. Jika anda memasukkan sisi yang menyentuh sudut B, hasilnya ialah sudut B. Labelkan jawapan dengan nama sudut yang betul, atau sahkan dengan pelengkap: kedua-dua sudut tirus mesti berjumlah 90 darjah."
          }
        ]
      },
      "arccos-verify": {
        "h2": "Mengesahkan jawapan arccos anda",
        "blocks": [
          {
            "kind": "p",
            "text": "Tiga semakan mengesahkan pengiraan arccos yang betul."
          },
          {
            "kind": "p",
            "text": "Bagi segi tiga 3-4-5, sahkan juga bahawa sisi-sisinya memenuhi teorem Pythagoras: 9 + 16 = 25. Mengesahkan sisi-sisi sebelum mempercayai sudut yang diperoleh daripadanya adalah amalan yang baik, dan kalkulator teorem Pythagoras menjadikannya pantas."
          },
          {
            "kind": "p",
            "text": "Semakan keempat menggunakan pelengkap. Kira B = 90[[^\\circ]] tolak A, kemudian sahkan bahawa arccos bagi nisbah yang satu lagi memberikan B. Dalam Contoh 1, arccos(3/5) = 53.13[[^\\circ]], yang sepadan dengan 90 tolak 36.87. Apabila kesemua empat semakan lulus, jawapannya tidak diragui lagi."
          }
        ],
        "steps": [
          "<strong>Semakan julat.</strong> Hasil mestilah dengan ketat antara 0 dan 90 darjah. Apa-apa di luar itu menandakan input tidak sah atau sisi dilabel salah.",
          "<strong>Semakan pergi-balik.</strong> Kira cos(A) dan sahkan ia sama dengan b/c. Bagi Contoh 1, cos(36.87[[^\\circ]]) [[\\approx]] 0.8 = 4/5. Jika pergi-balik gagal, sudutnya salah.",
          "<strong>Semakan kaedah-silang.</strong> Kira semula dengan arcsin atau arctan menggunakan sisi ketiga. Jika arccos(4/5) = 36.87[[^\\circ]] dan arctan(3/4) = 36.87[[^\\circ]], jawapannya kukuh. Ketidaksetujuan menandakan kesilapan label."
        ]
      },
      "arccos-applications": {
        "h2": "Aplikasi arccos dalam kehidupan sebenar",
        "blocks": [
          {
            "kind": "p",
            "text": "Arccos muncul di mana-mana jarak cerun dan jarak mengufuk merupakan ukuran semula jadi. Hipotenus diukur di sepanjang cerun itu sendiri, dan sisi bersebelahan ialah komponen mengufuk."
          },
          {
            "kind": "h3",
            "text": "Ukur tanah cerun"
          },
          {
            "kind": "p",
            "text": "Seorang juruukur mengukur 65 meter di sepanjang cerun dan 60 meter secara mengufuk. Sudut cerun ialah arccos(60/65), kira-kira 22.6 darjah. Ini ialah situasi arccos standard: jarak cerun mudah diukur dengan pita, jarak mengufuk datang daripada peta atau aras, dan sisi bertentangan (ketinggian) ialah apa yang anda boleh kira seterusnya."
          },
          {
            "kind": "h3",
            "text": "Ketinggian matahari daripada bayang-bayang"
          },
          {
            "kind": "p",
            "text": "Sinar cahaya 10 meter menghasilkan bayang-bayang 8 meter. Sudut ketinggian matahari ialah arccos(8/10), kira-kira 36.9 darjah. Masalah bayang-bayang adalah masalah arccos semula jadi kerana bayang-bayang terletak di sepanjang tanah (bersebelahan) dan sinar ialah hipotenus."
          },
          {
            "kind": "h3",
            "text": "Kecerunan kasau bumbung"
          },
          {
            "kind": "p",
            "text": "Kasau menjangkau 6.5 meter dengan rentang mengufuk 6 meter. Sudut kecerunan di cucur atap ialah arccos(6/6.5), kira-kira 22.6 darjah. Tukang kayu mengukur kasau secara terus dan rentang di sepanjang alang, jadi arccos sesuai dengan ukuran sebagaimana diambil."
          },
          {
            "kind": "h3",
            "text": "Pendakap kejuruteraan"
          },
          {
            "kind": "p",
            "text": "Pendakap pepenjuru berukuran 4 meter dengan tapak mengufuk 3.5 meter. Sudut pendakap ialah arccos(3.5/4), kira-kira 28.96 darjah. Lakaran struktur memberikan panjang pendakap dan jejaknya; arccos menukarkannya kepada sudut pemasangan."
          }
        ],
        "imgAlt": "Empat panel menunjukkan pengiraan arccos untuk ukur tanah, bayang-bayang, kasau bumbung dan sudut pendakap",
        "figcaption": "Masalah arccos dunia sebenar: sudut cerun, ketinggian matahari, kecerunan kasau dan sudut pemasangan pendakap."
      },
      "arccos-related": {
        "h2": "Terokai kalkulator segi tiga bersudut tegak berkaitan",
        "blocks": []
      },
      "arccos-conclusion": {
        "h2": "Cari sebarang sudut daripada kosinus dengan yakin",
        "blocks": [
          {
            "kind": "p",
            "text": "Mulakan dengan mengenal pasti sisi bersebelahan: kaki yang menyentuh sudut sasaran anda. Sahkan hipotenus ialah sisi terpanjang. Bahagikan, gunakan arccos, dan baca sudut dalam darjah. Dapatkan sudut kedua dengan 90 tolak yang pertama. Sahkan dengan semakan pergi-balik, pengiraan kaedah-silang dan jumlah sudut. Dengan langkah-langkah ini, sebarang masalah bersebelahan-dan-hipotenus merosot kepada rutin yang boleh dipercayai. Kembali ke kalkulator di bahagian atas halaman ini untuk menjalankan nombor anda."
          }
        ]
      }
    }
  },
  "pl": {
    "faqs": [
      {
        "question": "Co właściwie oznacza A = arccos(b / c)?",
        "answer": "Oznacza, że dzielisz bok przyległy przez przeciwprostokątną, a następnie pracujesz wstecz od tego ułamka dziesiętnego, aby znaleźć kąt, którego cosinus mu odpowiada. Wynikiem jest kąt ostry między bokiem przyległym a przeciwprostokątną."
      },
      {
        "question": "Kiedy używać arccos zamiast arcsin?",
        "answer": "Użyj arccos, gdy znasz bok przyległy i przeciwprostokątną. Użyj arcsin, gdy znasz bok przeciwległy i przeciwprostokątną. Oba dają ten sam kąt dla tego samego trójkąta; wybór zależy od tego, które boki zmierzyłeś."
      },
      {
        "question": "Dlaczego arccos zwraca błąd matematyczny?",
        "answer": "Najczęstszą przyczyną jest stosunek większy niż 1, co zdarza się, gdy wprowadzony bok przyległy jest dłuższy niż przeciwprostokątna. W prawidłowym trójkącie prostokątnym przeciwprostokątna jest zawsze najdłuższa, więc sprawdź oznaczenia boków."
      },
      {
        "question": "Czy mogę używać arccos, nie znając boku przeciwległego?",
        "answer": "Tak. To główna zaleta arccos: potrzebuje tylko boku przyległego i przeciwprostokątnej. Bok przeciwległy nigdy nie wchodzi do obliczeń."
      },
      {
        "question": "Jaka jest różnica między cos a arccos?",
        "answer": "Cosinus bierze kąt i zwraca stosunek: cos(60 stopni) = 0.5. Arccos odwraca to: bierze stosunek i zwraca kąt, więc arccos(0.5) = 60 stopni. Użyj cosinusa, gdy znasz kąt; użyj arccos, gdy znasz boki."
      },
      {
        "question": "Dlaczego arccos, arcsin i arctan dają tę samą odpowiedź?",
        "answer": "Ponieważ opisują ten sam kąt geometryczny poprzez różne pary boków. W trójkącie 3-4-5 arccos(4/5), arcsin(3/5) i arctan(3/4) są równe 36.87 stopnia. Zgodność metod potwierdza poprawne oznaczenia boków."
      },
      {
        "question": "Co to znaczy, gdy b/c równa się dokładnie 0.5?",
        "answer": "Kąt wynosi dokładnie 60 stopni. To szczególny trójkąt 30-60-90, w którym bok przyległy do kąta 60 stopni jest połową przeciwprostokątnej."
      },
      {
        "question": "Czy odpowiedź powinna być w stopniach czy radianach?",
        "answer": "Ten kalkulator używa stopni, standardu w budownictwie, geodezji i geometrii szkolnej. Jeśli liczysz ręcznie, upewnij się, że kalkulator jest w trybie stopni; wynik w radianach, jak 0.64, przelicza się na 36.87 stopnia przez pomnożenie przez 180/pi."
      },
      {
        "question": "Jak znaleźć drugi kąt ostry?",
        "answer": "Odejmij od 90 stopni. Jeśli arccos daje A = 36.87 stopnia, to B = 90 - 36.87 = 53.13 stopnia. Nie potrzeba dalszej trygonometrii."
      },
      {
        "question": "Czy wynik arccos może kiedykolwiek wynieść 90 stopni?",
        "answer": "Tylko jako granica: arccos(0) = 90 stopni, ale zerowy bok przyległy oznacza zdegenerowany trójkąt, nie prawdziwy. Prawidłowe kąty trójkąta prostokątnego z arccos zawsze mieszczą się ściśle między 0 a 90 stopniami."
      },
      {
        "question": "Jak mogę sprawdzić swoją odpowiedź arccos?",
        "answer": "Oblicz cos(A) i potwierdź, że równa się b/c. Przelicz też arcsin lub arctan, używając trzeciego boku; wszystkie metody muszą się zgadzać. Na koniec sprawdź, czy oba kąty ostre sumują się do dokładnie 90 stopni."
      },
      {
        "question": "Czy skalowanie trójkąta zmienia wynik arccos?",
        "answer": "Nie. Trójkąty podobne mają identyczne kąty. Trójkąt 3-4-5 i trójkąt 6-8-10 dają arccos(0.8) = 36.87 stopnia, ponieważ stosunek b/c nie zmienia się przy skalowaniu."
      }
    ],
    "relatedHeading": "Zobacz powiązane kalkulatory trójkąta prostokątnego",
    "relatedItems": [
      "Kalkulator kątów trójkąta prostokątnego",
      "Kalkulator kąta z sinusa w trójkącie prostokątnym",
      "Kalkulator kąta z tangensa w trójkącie prostokątnym",
      "Kalkulator brakującego kąta w trójkącie prostokątnym",
      "Kalkulator stosunków trygonometrycznych w trójkącie prostokątnym",
      "Kalkulator stosunku cosinusa"
    ],
    "sections": {
      "arccos-anatomy": {
        "blocks": [
          {
            "kind": "p",
            "text": "Arccos potrzebuje dokładnie dwóch boków: boku przyległego b i przeciwprostokątnej c. Prawidłowe oznaczenie tych boków to cała bitwa. Wszystko potem to arytmetyka."
          },
          {
            "kind": "h3",
            "text": "Rozpoznawanie boku przyległego"
          },
          {
            "kind": "p",
            "text": "Bok przyległy to przyprostokątna, która dotyka kąta A. Tworzy jedną krawędź samego kąta. Na poniższym schemacie bok b biegnie wzdłuż dolnej krawędzi od kąta prostego do kąta A. Jeśli zamiast tego rozwiązujesz drugi kąt ostry B, etykiety się zamieniają: bokiem przyległym do B jest ten, który dotyka B."
          },
          {
            "kind": "h3",
            "text": "Rozpoznawanie przeciwprostokątnej"
          },
          {
            "kind": "p",
            "text": "Przeciwprostokątna to bok naprzeciw kąta prostego. Jest zawsze najdłuższym bokiem trójkąta. Nigdy nie dotyka wierzchołka kąta prostego. Jeśli twoja „przeciwprostokątna\" nie jest najdłuższa z trzech pomiarów, oznacz boki od nowa przed obliczeniami. <a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">Kalkulator twierdzenia Pitagorasa</a> może potwierdzić, który bok jest najdłuższy, gdy masz wszystkie trzy."
          },
          {
            "kind": "h3",
            "text": "Dlaczego bok przeciwległy zostaje poza"
          },
          {
            "kind": "p",
            "text": "Cosinus jest zdefiniowany jako bok przyległy przez przeciwprostokątną. Bok przeciwległy po prostu nie występuje w tym stosunku. Na tym polega sens tego kalkulatora: gdy bok przeciwległy jest nieznany, ukryty lub nieistotny dla twojego układu pomiarowego, arccos i tak dostarcza kąt. Nie ignorujesz boku przeciwległego; używasz stosunku, który nigdy go nie potrzebował."
          }
        ],
        "figcaption": "Anatomia arccos: b to bok przyległy dotykający kąta A, c to przeciwprostokątna naprzeciw kąta prostego.",
        "h2": "Bok przyległy i przeciwprostokątna: dwa dane wejściowe",
        "imgAlt": "Trójkąt prostokątny z podświetlonym bokiem przyległym b i przeciwprostokątną c dla wzoru arccos"
      },
      "arccos-applications": {
        "blocks": [
          {
            "kind": "p",
            "text": "Arccos pojawia się wszędzie tam, gdzie naturalnymi pomiarami są odległość wzdłuż zbocza i odległość pozioma. Przeciwprostokątną mierzy się wzdłuż samego zbocza, a bok przyległy jest składową poziomą."
          },
          {
            "kind": "h3",
            "text": "Pomiary geodezyjne zboczy"
          },
          {
            "kind": "p",
            "text": "Geodeta mierzy 65 metrów wzdłuż zbocza i 60 metrów w poziomie. Kąt zbocza to arccos(60/65), około 22.6 stopnia. To standardowa sytuacja arccos: odległość wzdłuż zbocza łatwo zmierzyć taśmą, odległość pozioma pochodzi z mapy lub niwelatora, a bok przeciwległy (wzniesienie) to to, co możesz obliczyć jako następne."
          },
          {
            "kind": "h3",
            "text": "Wysokość słońca z cieni"
          },
          {
            "kind": "p",
            "text": "10-metrowy promień światła rzuca 8-metrowy cień. Kąt wysokości słońca to arccos(8/10), około 36.9 stopnia. Zadania z cieniem to naturalne zadania arccos, ponieważ cień leży wzdłuż gruntu (bok przyległy), a promień jest przeciwprostokątną."
          },
          {
            "kind": "h3",
            "text": "Nachylenie krokwi dachowej"
          },
          {
            "kind": "p",
            "text": "Krokiew ma rozpiętość 6.5 metra przy poziomym wysięgu 6 metrów. Kąt nachylenia przy okapie to arccos(6/6.5), około 22.6 stopnia. Stolarze mierzą krokiew bezpośrednio, a wysięg wzdłuż belki, więc arccos pasuje do pomiarów takich, jak zostały wykonane."
          },
          {
            "kind": "h3",
            "text": "Wsporniki inżynierskie"
          },
          {
            "kind": "p",
            "text": "Wspornik przekątny mierzy 4 metry przy 3.5-metrowej podstawie poziomej. Kąt wspornika to arccos(3.5/4), około 28.96 stopnia. Szkice konstrukcyjne podają długość wspornika i jego ślad; arccos zamienia je w kąt montażu."
          }
        ],
        "figcaption": "Zadania arccos z życia: kąty zboczy, wysokość słońca, nachylenie krokwi i kąty montażu wsporników.",
        "h2": "Zastosowania arccos w życiu codziennym",
        "imgAlt": "Cztery panele pokazujące obliczenia arccos dla pomiarów geodezyjnych, cienia, krokwi dachowej i kąta wspornika"
      },
      "arccos-conclusion": {
        "blocks": [
          {
            "kind": "p",
            "text": "Zacznij od rozpoznania boku przyległego: przyprostokątnej dotykającej docelowego kąta. Potwierdź, że przeciwprostokątna jest najdłuższym bokiem. Podziel, zastosuj arccos i odczytaj kąt w stopniach. Drugi kąt uzyskaj z 90 minus pierwszy. Zweryfikuj kontrolą w obie strony, obliczeniem metodą krzyżową i sumą kątów. Dzięki tym krokom każde zadanie z bokiem przyległym i przeciwprostokątną sprowadza się do niezawodnej rutyny. Wróć do kalkulatora na górze tej strony, aby przeliczyć swoje liczby."
          }
        ],
        "h2": "Wyznacz dowolny kąt z cosinusa z pewnością"
      },
      "arccos-examples": {
        "blocks": [
          {
            "kind": "p",
            "text": "Każdy przykład podąża tymi samymi czterema krokami: zapisz wzór, podstaw, podziel, zastosuj arccos. Kąty są zaokrąglone do dwóch miejsc po przecinku."
          },
          {
            "kind": "h3",
            "text": "Przykład 1: Trójkąt 3-4-5"
          },
          {
            "kind": "p",
            "text": "Dane: bok przyległy b = 4 i przeciwprostokątna c = 5, znajdź kąt A."
          },
          {
            "kind": "p",
            "text": "A = arccos(b/c) = arccos(4/5) = arccos(0.8) [[\\approx 36.87^\\circ]]. Dopełnienie B = 53.13[[^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Przykład 2: Trójkąt 5-12-13"
          },
          {
            "kind": "p",
            "text": "Dane: bok przyległy b = 12 i przeciwprostokątna c = 13, znajdź kąt A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/13) = arccos(0.9231) [[\\approx 22.62^\\circ]]. Dopełnienie B = 67.38[[^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Przykład 3: Trójkąt 8-15-17"
          },
          {
            "kind": "p",
            "text": "Dane: bok przyległy b = 8 i przeciwprostokątna c = 17, znajdź kąt A."
          },
          {
            "kind": "p",
            "text": "A = arccos(8/17) = arccos(0.4706) [[\\approx 61.93^\\circ]]. Dopełnienie B = 28.07[[^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Przykład 4: Ten sam trójkąt, drugi kąt"
          },
          {
            "kind": "p",
            "text": "Dane: bok przyległy b = 15 i przeciwprostokątna c = 17 (rozwiązujemy kąt B trójkąta 8-15-17)."
          },
          {
            "kind": "p",
            "text": "B = arccos(15/17) = arccos(0.8824) [[\\approx 28.07^\\circ]]. Zauważ, że 61.93 + 28.07 = 90, zgodnie z wymogiem."
          },
          {
            "kind": "h3",
            "text": "Przykład 5: 5-12-13, drugi kąt"
          },
          {
            "kind": "p",
            "text": "Dane: bok przyległy b = 5 i przeciwprostokątna c = 13."
          },
          {
            "kind": "p",
            "text": "B = arccos(5/13) = arccos(0.3846) [[\\approx 67.38^\\circ]]. To odpowiada dopełnieniu z przykładu 2."
          },
          {
            "kind": "h3",
            "text": "Przykład 6: 3-4-5, drugi kąt"
          },
          {
            "kind": "p",
            "text": "Dane: bok przyległy b = 3 i przeciwprostokątna c = 5."
          },
          {
            "kind": "p",
            "text": "B = arccos(3/5) = arccos(0.6) [[\\approx 53.13^\\circ]]. To odpowiada dopełnieniu z przykładu 1."
          },
          {
            "kind": "h3",
            "text": "Przykład 7: Szczególny przypadek 60 stopni"
          },
          {
            "kind": "p",
            "text": "Dane: bok przyległy b = 1 i przeciwprostokątna c = 2."
          },
          {
            "kind": "p",
            "text": "A = arccos(1/2) = arccos(0.5) = 60[[^\\circ]] dokładnie. To szczególny trójkąt 30-60-90. Te dokładne wartości omawia <a href=\"/special-right-triangle-calculator/\" class=\"text-primary hover:underline\">kalkulator szczególnych trójkątów prostokątnych</a>."
          },
          {
            "kind": "h3",
            "text": "Przykład 8: Trójkąt 7-24-25"
          },
          {
            "kind": "p",
            "text": "Dane: bok przyległy b = 7 i przeciwprostokątna c = 25, znajdź kąt A."
          },
          {
            "kind": "p",
            "text": "A = arccos(7/25) = arccos(0.28) [[\\approx 73.74^\\circ]]. Dopełnienie B = 16.26[[^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Przykład 9: 7-24-25, drugi kąt"
          },
          {
            "kind": "p",
            "text": "Dane: bok przyległy b = 24 i przeciwprostokątna c = 25."
          },
          {
            "kind": "p",
            "text": "B = arccos(24/25) = arccos(0.96) [[\\approx 16.26^\\circ]]. Odpowiada dopełnieniu z przykładu 8."
          },
          {
            "kind": "h3",
            "text": "Przykład 10: Trójkąt 9-40-41"
          },
          {
            "kind": "p",
            "text": "Dane: bok przyległy b = 9 i przeciwprostokątna c = 41, znajdź kąt A."
          },
          {
            "kind": "p",
            "text": "A = arccos(9/41) = arccos(0.2195) [[\\approx 77.32^\\circ]]. Mały bok przyległy daje szeroki kąt."
          },
          {
            "kind": "h3",
            "text": "Przykład 11: 9-40-41, drugi kąt"
          },
          {
            "kind": "p",
            "text": "Dane: bok przyległy b = 40 i przeciwprostokątna c = 41."
          },
          {
            "kind": "p",
            "text": "B = arccos(40/41) = arccos(0.9756) [[\\approx 12.68^\\circ]]. Zauważ, że 77.32 + 12.68 = 90."
          },
          {
            "kind": "h3",
            "text": "Przykład 12: Trójkąt 20-21-29"
          },
          {
            "kind": "p",
            "text": "Dane: bok przyległy b = 20 i przeciwprostokątna c = 29, znajdź kąt A."
          },
          {
            "kind": "p",
            "text": "A = arccos(20/29) = arccos(0.6897) [[\\approx 46.40^\\circ]]. Dopełnienie B = 43.60[[^\\circ]]."
          },
          {
            "kind": "h3",
            "text": "Przykład 13: 20-21-29, drugi kąt"
          },
          {
            "kind": "p",
            "text": "Dane: bok przyległy b = 21 i przeciwprostokątna c = 29."
          },
          {
            "kind": "p",
            "text": "B = arccos(21/29) = arccos(0.7241) [[\\approx 43.60^\\circ]]. Odpowiada dopełnieniu z przykładu 12."
          },
          {
            "kind": "h3",
            "text": "Przykład 14: Trójkąt 6-8-10"
          },
          {
            "kind": "p",
            "text": "Dane: bok przyległy b = 6 i przeciwprostokątna c = 10, znajdź kąt A."
          },
          {
            "kind": "p",
            "text": "A = arccos(6/10) = arccos(0.6) [[\\approx 53.13^\\circ]]. Ten sam kąt co w przykładzie 6, ponieważ 6-8-10 to przeskalowany trójkąt 3-4-5."
          },
          {
            "kind": "h3",
            "text": "Przykład 15: 6-8-10, drugi kąt"
          },
          {
            "kind": "p",
            "text": "Dane: bok przyległy b = 8 i przeciwprostokątna c = 10."
          },
          {
            "kind": "p",
            "text": "B = arccos(8/10) = arccos(0.8) [[\\approx 36.87^\\circ]]. Tak samo jak w przykładzie 1, co potwierdza, że trójkąty podobne mają wspólne kąty."
          },
          {
            "kind": "h3",
            "text": "Przykład 16: Trójkąt 12-16-20"
          },
          {
            "kind": "p",
            "text": "Dane: bok przyległy b = 12 i przeciwprostokątna c = 20, znajdź kąt A."
          },
          {
            "kind": "p",
            "text": "A = arccos(12/20) = arccos(0.6) [[\\approx 53.13^\\circ]]. Kolejny przeskalowany trójkąt 3-4-5, znów ten sam kąt. Skalowanie boków nigdy nie zmienia kątów."
          }
        ],
        "h2": "16 rozwiązanych przykładów"
      },
      "arccos-howto": {
        "blocks": [],
        "figcaption": "Rozwiązany przykład: b = 4, c = 5 daje A = arccos(0.8), około 36.87 stopnia, zweryfikowane przez sprawdzenie w obie strony.",
        "h2": "Jak korzystać z kalkulatora kąta z cosinusa",
        "imgAlt": "Czterokrokowy rozwiązany przykład arccos z b równym 4 i c równym 5",
        "steps": [
          "<strong>Potwierdź kąt prosty.</strong> Kalkulator działa tylko dla trójkątów prostokątnych. Najpierw zidentyfikuj róg o 90 stopniach.",
          "<strong>Wybierz docelowy kąt.</strong> Zdecyduj, czy rozwiązujesz kąt A, czy kąt B. Bok przyległy jest zdefiniowany względem tego wyboru.",
          "<strong>Zmierz bok przyległy b.</strong> To przyprostokątna dotykająca docelowego kąta. Zapisz ją w dowolnej jednostce.",
          "<strong>Zmierz przeciwprostokątną c.</strong> To najdłuższy bok, naprzeciw kąta prostego. Użyj tej samej jednostki co dla b.",
          "<strong>Sprawdź, czy b jest mniejsze niż c.</strong> Jeśli nie, boki są błędnie oznaczone. Przeciwprostokątna musi być najdłuższa.",
          "<strong>Wprowadź obie wartości i naciśnij Oblicz.</strong> Narzędzie oblicza b/c, stosuje arccos i zwraca kąt A w stopniach.",
          "<strong>Znajdź drugi kąt.</strong> Odejmij od 90 stopni: B = 90[[^\\circ]] minus A.",
          "<strong>Zweryfikuj.</strong> Oblicz cos(A) na kalkulatorze i potwierdź, że równa się b/c. Jeśli tak, odpowiedź jest pewna."
        ]
      },
      "arccos-intro": {
        "blocks": [
          {
            "kind": "p",
            "text": "Kalkulator kąta z cosinusa w trójkącie prostokątnym wyznacza kąt ostry, gdy znane są bok przyległy i przeciwprostokątna. Stosuje funkcję odwrotną do cosinusa, zapisywaną jako arccos lub cos [[-1]], do stosunku tych dwóch boków. Wynikiem jest kąt A w stopniach."
          },
          {
            "kind": "p",
            "text": "To narzędzie istnieje do konkretnej sytuacji pomiarowej: możesz zmierzyć bok sąsiadujący z docelowym kątem oraz najdłuższy bok trójkąta, ale bok przeciwległy jest nieznany lub trudny do zmierzenia. Zamiast najpierw obliczać bok przeciwległy, arccos całkowicie go pomija i przekształca stosunek boku przyległego do przeciwprostokątnej bezpośrednio w kąt."
          },
          {
            "kind": "p",
            "text": "Na przykład bok przyległy równy 4 i przeciwprostokątna równa 5 dają stosunek 0.8. Arccos z 0.8 to około 36.87 stopnia. To jest kąt A. Drugi kąt ostry wynika z reguły dopełnienia: 90 minus 36.87, czyli 53.13 stopnia."
          },
          {
            "kind": "p",
            "text": "Arccos jest jednym z trzech odwrotnych narzędzi trygonometrycznych na tej stronie. Jeśli znanymi bokami są bok przeciwległy i przeciwprostokątna, właściwym wyborem jest <a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">kalkulator kąta z sinusa</a>. Jeśli znasz obie przyprostokątne, ale nie przeciwprostokątną, użyj <a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\">kalkulatora kąta z tangensa</a>. Ta strona wyczerpująco omawia przypadek cosinusa."
          }
        ],
        "h2": "Czym jest kalkulator kąta z cosinusa w trójkącie prostokątnym?"
      },
      "arccos-mistakes": {
        "blocks": [
          {
            "kind": "h3",
            "text": "Używanie boku przeciwległego zamiast przyległego"
          },
          {
            "kind": "p",
            "text": "Najczęstszy błąd. Arccos potrzebuje boku dotykającego kąta A, nie boku naprzeciw niego. Jeśli wprowadzisz bok przeciwległy do arccos, otrzymasz dopełnienie zamierzonego kąta. W trójkącie 3-4-5 arccos(3/5) = 53.13 stopnia to kąt B, nie kąt A. Poprawka: naszkicuj trójkąt, zaznacz docelowy kąt i prześledź, która przyprostokątna go dotyka."
          },
          {
            "kind": "h3",
            "text": "Wstawianie przeciwprostokątnej do licznika"
          },
          {
            "kind": "p",
            "text": "Arccos oczekuje boku przyległego przez przeciwprostokątną, liczby poniżej 1. Wprowadzenie c/b zamiast b/c daje stosunek powyżej 1, a kalkulator zwraca błąd matematyczny. Poprawka: przeciwprostokątna jest zawsze mianownikiem w stosunku arccos."
          },
          {
            "kind": "h3",
            "text": "Mylenie arccos z cosinusem"
          },
          {
            "kind": "p",
            "text": "Na wielu kalkulatorach klawisz cosinusa i klawisz odwrotnego cosinusa (często oznaczony cos [[-1]] lub arccos) leżą blisko siebie. Naciśnięcie cos(0.8) zamiast arccos(0.8) daje 0.6967, bezsensowny stosunek, zamiast 36.87 stopnia. Poprawka: sprawdź, czy kalkulator jest w trybie stopni i czy nacisnąłeś klawisz odwrotny."
          },
          {
            "kind": "h3",
            "text": "Mieszanie stopni i radianów"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) to 36.87 stopnia, ale 0.6435 radiana. Jeśli twoje ręczne obliczenie daje 0.64 dla trójkąta 3-4-5, kalkulator jest w trybie radianów. Pomnóż przez 180/pi, aby przeliczyć, lub przełącz tryb na stopnie. Ten kalkulator podaje wyniki w stopniach."
          },
          {
            "kind": "h3",
            "text": "Wprowadzanie boków w różnych jednostkach"
          },
          {
            "kind": "p",
            "text": "Bok przyległy w calach i przeciwprostokątna w stopach psują stosunek. Najpierw przelicz na wspólną jednostkę. Stosunek jest bezwymiarowy, ale tylko wtedy, gdy oba dane wejściowe mają tę samą jednostkę."
          },
          {
            "kind": "h3",
            "text": "Zbyt wczesne zaokrąglanie stosunku"
          },
          {
            "kind": "p",
            "text": "Arccos(0.8) = 36.87 stopnia, ale arccos(0.80) zaokrąglony z 0.795 daje 37.24 stopnia. W pobliżu stosunków 0 i 1, gdzie arccos jest najbardziej stromy, małe błędy stosunku się powiększają. Zachowaj pełną precyzję podczas dzielenia i zaokrąglaj tylko końcowy kąt."
          },
          {
            "kind": "h3",
            "text": "Zapominanie, który kąt został rozwiązany"
          },
          {
            "kind": "p",
            "text": "Arccos zwraca kąt, którego bok przyległy wprowadziłeś. Jeśli wprowadziłeś bok dotykający kąta B, wynikiem jest kąt B. Oznacz odpowiedź prawidłową nazwą kąta lub zweryfikuj dopełnieniem: dwa kąty ostre muszą sumować się do 90 stopni."
          }
        ],
        "h2": "Częste błędy przy używaniu arccos"
      },
      "arccos-related": {
        "blocks": [],
        "h2": "Zobacz powiązane kalkulatory trójkąta prostokątnego"
      },
      "arccos-special": {
        "blocks": [
          {
            "kind": "p",
            "text": "Kilka wartości arccos pojawia się tak często, że ich rozpoznawanie oszczędza czas. Pochodzą ze szczególnych trójkątów prostokątnych."
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(1) = 0^\\circ]]: bok przyległy równa się przeciwprostokątnej, więc kąt zapada się do zera. To przypadek zdegenerowany, nie prawdziwy trójkąt, ale kotwiczy skalę."
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(\\sqrt{3}/2) \\approx 30^\\circ]]: z trójkąta 30-60-90. Gdy bok przyległy stanowi około 86.6 procent przeciwprostokątnej, kąt wynosi 30 stopni."
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(\\sqrt{2}/2) = 45^\\circ]]: z trójkąta 45-45-90. Równe przyprostokątne dają tę dokładną wartość."
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(1/2) = 60^\\circ]]: z trójkąta 30-60-90, przypadek z przykładu 7. Gdy bok przyległy jest dokładnie połową przeciwprostokątnej, kąt wynosi dokładnie 60 stopni."
          },
          {
            "kind": "p",
            "text": "[[\\cos^{-1}(0) = 90^\\circ]]: bok przyległy kurczy się do zera, więc kąt otwiera się do kąta prostego. Podobnie jak przypadek zerowy, to granica, nie prawdziwy kąt trójkąta."
          },
          {
            "kind": "p",
            "text": "Między tymi punktami orientacyjnymi arccos maleje płynnie wraz ze wzrostem stosunku. Zapamiętanie pięciu punktów kotwicznych pozwala szacować każdy arccos w pamięci: stosunek 0.7 leży między 0.5 (60 stopni) a 0.866 (30 stopni), nieco bliżej 45 stopni. Prawdziwa wartość to około 45.57 stopnia."
          }
        ],
        "h2": "Szczególne wartości kątów warte zapamiętania"
      },
      "arccos-verify": {
        "blocks": [
          {
            "kind": "p",
            "text": "Trzy kontrole potwierdzają poprawne obliczenie arccos:"
          },
          {
            "kind": "p",
            "text": "Dla trójkąta 3-4-5 zweryfikuj też, czy boki spełniają twierdzenie Pitagorasa: 9 + 16 = 25. Potwierdzenie boków przed zaufaniem kątowi z nich wyprowadzonemu to dobra praktyka, a <a href=\"/pythagorean-theorem-calculator/\" class=\"text-primary hover:underline\">kalkulator twierdzenia Pitagorasa</a> sprawia, że jest szybka."
          },
          {
            "kind": "p",
            "text": "Czwarta kontrola wykorzystuje dopełnienie. Oblicz B = 90[[^\\circ]] minus A, a następnie zweryfikuj, że arccos drugiego stosunku daje B. W przykładzie 1, arccos(3/5) = 53.13[[^\\circ]], co odpowiada 90 minus 36.87. Gdy wszystkie cztery kontrole przejdą, odpowiedź nie budzi wątpliwości."
          }
        ],
        "h2": "Sprawdzanie odpowiedzi arccos",
        "steps": [
          "<strong>Kontrola zakresu.</strong> Wynik musi mieścić się ściśle między 0 a 90 stopniami. Wszystko poza tym sygnalizuje nieprawidłowe dane wejściowe lub błędnie oznaczone boki.",
          "<strong>Kontrola w obie strony.</strong> Oblicz cos(A) i potwierdź, że równa się b/c. Dla przykładu 1, cos(36.87[[^\\circ]]) [[\\approx]] 0.8 = 4/5. Jeśli kontrola w obie strony się nie powiedzie, kąt jest błędny.",
          "<strong>Kontrola metodą krzyżową.</strong> Przelicz arcsin lub arctan, używając trzeciego boku. Jeśli arccos(4/5) = 36.87[[^\\circ]] i arctan(3/4) = 36.87[[^\\circ]], odpowiedź jest pewna. Niezgodność wskazuje na błąd oznaczenia."
        ]
      },
      "arccos-vs": {
        "blocks": [
          {
            "kind": "p",
            "text": "Wszystkie trzy funkcje odwrotne wyznaczają ten sam kąt, gdy zastosuje się je do tego samego trójkąta. Różnią się tylko wymaganymi bokami. Prawidłowy wybór oszczędza ci obliczania boku, którego nie potrzebujesz."
          },
          {
            "kind": "p",
            "text": "Użyj <strong>arccos</strong>, gdy znasz bok przyległy (b) i przeciwprostokątną (c). Wzór to [[A = \\cos^{-1}(b/c)]]. To naturalny wybór, gdy przeciwprostokątną zmierzono bezpośrednio, na przykład taśmą wzdłuż zbocza, a znana jest odległość pozioma."
          },
          {
            "kind": "p",
            "text": "Użyj <strong>arcsin</strong>, gdy znasz bok przeciwległy (a) i przeciwprostokątną (c). Wzór to [[A = \\sin^{-1}(a/c)]]. Zadania dotyczące wysokości sprzyjają arcsin: wzniesienie pionowe leży naprzeciw kąta przy poziomie gruntu. Ten przypadek obsługuje <a href=\"/right-triangle-angle-from-sine-calculator/\" class=\"text-primary hover:underline\">kalkulator kąta z sinusa</a>."
          },
          {
            "kind": "p",
            "text": "Użyj <strong>arctan</strong>, gdy znasz obie przyprostokątne (a i b), ale nie przeciwprostokątną. Wzór to [[A = \\tan^{-1}(a/b)]]. Pomiary terenowe, jak wzniesienie dachu nad długością poziomą, sprzyjają arctan, ponieważ obie przyprostokątne mierzy się bezpośrednio. Zobacz <a href=\"/right-triangle-angle-from-tangent-calculator/\" class=\"text-primary hover:underline\">kalkulator kąta z tangensa</a>, aby poznać tę metodę."
          },
          {
            "kind": "h3",
            "text": "Muszą się zgadzać"
          },
          {
            "kind": "p",
            "text": "Dla dowolnego pojedynczego trójkąta arccos(b/c), arcsin(a/c) i arctan(a/b) dają identyczny kąt. W trójkącie 3-4-5 arccos(4/5), arcsin(3/5) i arctan(3/4) są równe 36.87 stopnia. Jeśli dwie metody się nie zgadzają, bok został błędnie oznaczony. To sprawdzenie krzyżowe jest najbardziej wiarygodną dostępną weryfikacją, a <a href=\"/right-triangle-trig-ratios-calculator/\" class=\"text-primary hover:underline\">kalkulator stosunków trygonometrycznych</a> może potwierdzić wszystkie trzy stosunki naraz."
          },
          {
            "kind": "h3",
            "text": "Dlaczego nie zawsze używać arctan?"
          },
          {
            "kind": "p",
            "text": "Arctan potrzebuje obu przyprostokątnych. Jeśli bok przeciwległy jest nieznany i trudny do zmierzenia, obliczanie go najpierw tylko po to, by użyć arctan, dodaje zbędny krok i dodatkową szansę na błąd. Arccos prowadzi prosto od dwóch boków, które masz, do kąta, którego chcesz. Dopasuj funkcję do swoich pomiarów, a nie do przyzwyczajenia."
          }
        ],
        "h2": "Arccos, arcsin czy arctan: kiedy używać każdego z nich"
      },
      "arccos-what": {
        "blocks": [
          {
            "kind": "p",
            "text": "Zwykły cosinus bierze kąt i zwraca stosunek. Cosinus 60 stopni to 0.5. Arccos odwraca to: bierze stosunek i zwraca kąt. Arccos z 0.5 to 60 stopni. Te dwie funkcje znoszą się nawzajem, dlatego arccos zapisuje się też jako cos [[-1]]."
          },
          {
            "kind": "p",
            "text": "Wzór używany przez ten kalkulator to [[A = \\cos^{-1}(b/c)]]. Tutaj b to bok przyległy, c to przeciwprostokątna, a A to kąt między nimi. Stosunek b/c w prawidłowym trójkącie prostokątnym zawsze mieści się między 0 a 1, ponieważ bok przyległy jest zawsze krótszy niż przeciwprostokątna."
          },
          {
            "kind": "p",
            "text": "Pomyśl o arccos jak o pytaniu: „Który kąt ma tę wartość cosinusa?”. Jeśli b/c równa się 0.8, pytanie brzmi: „który kąt ma cosinus 0.8?”. Odpowiedź, 36.87 stopnia, to kąt, którego bok przyległy stanowi 80 procent długości przeciwprostokątnej."
          },
          {
            "kind": "h3",
            "text": "Stosunek opowiada historię"
          },
          {
            "kind": "p",
            "text": "Wartość b/c opisuje kształt trójkąta. Stosunek bliski 1 oznacza, że bok przyległy jest prawie tak długi jak przeciwprostokątna, więc kąt między nimi jest malutki. Stosunek bliski 0 oznacza, że bok przyległy jest bardzo krótki w porównaniu z przeciwprostokątną, więc kąt otwiera się szeroko ku 90 stopniom. Stosunek równy dokładnie 0.5 zawsze oznacza 60 stopni."
          },
          {
            "kind": "h3",
            "text": "Dziedzina arccos"
          },
          {
            "kind": "p",
            "text": "W tym kontekście geometrycznym arccos przyjmuje tylko dane wejściowe od 0 do 1. Stosunek powyżej 1 jest niemożliwy dla trójkąta prostokątnego i sygnalizuje błąd etykietowania: przeciwprostokątna musi być mianownikiem i musi być najdłuższym bokiem. Ujemny stosunek opisywałby kąt rozwarty, który nie może wystąpić jako kąt A w trójkącie prostokątnym."
          }
        ],
        "figcaption": "Jak działa arccos: podziel bok przyległy przez przeciwprostokątną, a następnie zastosuj odwrotny cosinus, aby odzyskać kąt.",
        "h2": "Zrozumienie arccos (odwrotnego cosinusa)",
        "imgAlt": "Schemat pokazujący dwa kroki arccos: podziel b przez c, a następnie zastosuj arccos, aby uzyskać kąt"
      }
    },
    "tocHeading": "W tym przewodniku",
    "tocItems": {
      "arccos-anatomy": "Bok przyległy i przeciwprostokątna",
      "arccos-applications": "Zastosowania w życiu codziennym",
      "arccos-conclusion": "Wyznacz dowolny kąt z cosinusa z pewnością",
      "arccos-examples": "16 rozwiązanych przykładów",
      "arccos-faq": "Często zadawane pytania",
      "arccos-howto": "Jak korzystać z kalkulatora",
      "arccos-intro": "Czym jest kalkulator kąta z cosinusa?",
      "arccos-mistakes": "Częste błędy",
      "arccos-related": "Powiązane kalkulatory",
      "arccos-special": "Szczególne wartości kątów",
      "arccos-verify": "Sprawdzanie odpowiedzi",
      "arccos-vs": "Arccos, arcsin czy arctan",
      "arccos-what": "Zrozumienie arccos"
    }
  }
};
