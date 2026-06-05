const fs = require('fs');
let text = fs.readFileSync('src/data/rightTriangleFormulas.ts', 'utf8');

const replacements = [
  { pattern: /expression: 'c = \\\\sqrt\{a\^2 \+ b\^2\}',/, replacement: "expression: 'c = \\\\sqrt{a^2 + b^2}',\n    plainExpression: 'c = √(a² + b²)'," },
  { pattern: /expression: 'b = \\\\sqrt\{c\^2 - a\^2\}',/, replacement: "expression: 'b = \\\\sqrt{c^2 - a^2}',\n    plainExpression: 'b = √(c² - a²)'," },
  { pattern: /expression: 'a = \\\\sqrt\{c\^2 - b\^2\}',/, replacement: "expression: 'a = \\\\sqrt{c^2 - b^2}',\n    plainExpression: 'a = √(c² - b²)'," },
  { pattern: /expression: '\\\\text\{Area\} = \\(a \\\\times b\\) \/ 2',/, replacement: "expression: '\\\\text{Area} = (a \\\\times b) / 2',\n    plainExpression: 'Area = (a × b) / 2'," },
  { pattern: /expression: 'P = a \+ b \+ c',/, replacement: "expression: 'P = a + b + c',\n    plainExpression: 'P = a + b + c'," },
  { pattern: /expression: 's = \\\\frac\{a \+ b \+ c\}\{2\}',/, replacement: "expression: 's = \\\\frac{a + b + c}{2}',\n    plainExpression: 's = (a + b + c) / 2'," },
  { pattern: /expression: '\\\\sin\\(A\\) = \\\\frac\{a\}\{c\}',/, replacement: "expression: '\\\\sin(A) = \\\\frac{a}{c}',\n    plainExpression: 'sin(A) = a / c'," },
  { pattern: /expression: '\\\\cos\\(A\\) = \\\\frac\{b\}\{c\}',/, replacement: "expression: '\\\\cos(A) = \\\\frac{b}{c}',\n    plainExpression: 'cos(A) = b / c'," },
  { pattern: /expression: '\\\\tan\\(A\\) = \\\\frac\{a\}\{b\}',/, replacement: "expression: '\\\\tan(A) = \\\\frac{a}{b}',\n    plainExpression: 'tan(A) = a / b'," },
  { pattern: /expression: 'A = \\\\arcsin\\\\left\\(\\\\frac\{a\}\{c\}\\\\right\\)',/, replacement: "expression: 'A = \\\\arcsin\\\\left(\\\\frac{a}{c}\\\\right)',\n    plainExpression: 'A = arcsin(a / c)'," },
  { pattern: /expression: 'A = \\\\arccos\\\\left\\(\\\\frac\{b\}\{c\}\\\\right\\)',/, replacement: "expression: 'A = \\\\arccos\\\\left(\\\\frac{b}{c}\\\\right)',\n    plainExpression: 'A = arccos(b / c)'," },
  { pattern: /expression: 'A = \\\\arctan\\\\left\\(\\\\frac\{a\}\{b\}\\\\right\\)',/, replacement: "expression: 'A = \\\\arctan\\\\left(\\\\frac{a}{b}\\\\right)',\n    plainExpression: 'A = arctan(a / b)'," },
  { pattern: /expression: 'h = \\\\frac\{a \\\\times b\}\{c\}',/, replacement: "expression: 'h = \\\\frac{a \\\\times b}{c}',\n    plainExpression: 'h = (a × b) / c'," },
  { pattern: /expression: 'p = \\\\frac\{a\^2\}\{c\}',/, replacement: "expression: 'p = \\\\frac{a^2}{c}',\n    plainExpression: 'p = a² / c'," },
  { pattern: /expression: 'q = \\\\frac\{b\^2\}\{c\}',/, replacement: "expression: 'q = \\\\frac{b^2}{c}',\n    plainExpression: 'q = b² / c'," },
  { pattern: /expression: '\\\\cot\\(A\\) = \\\\frac\{b\}\{a\}',/, replacement: "expression: '\\\\cot(A) = \\\\frac{b}{a}',\n    plainExpression: 'cot(A) = b / a'," },
  { pattern: /expression: '\\\\sec\\(A\\) = \\\\frac\{c\}\{b\}',/, replacement: "expression: '\\\\sec(A) = \\\\frac{c}{b}',\n    plainExpression: 'sec(A) = c / b'," },
  { pattern: /expression: '\\\\csc\\(A\\) = \\\\frac\{c\}\{a\}',/, replacement: "expression: '\\\\csc(A) = \\\\frac{c}{a}',\n    plainExpression: 'csc(A) = c / a'," },
  { pattern: /expression: 'a = c \\\\cdot \\\\sin\\(A\\)',/, replacement: "expression: 'a = c \\\\cdot \\\\sin(A)',\n    plainExpression: 'a = c × sin(A)'," },
  { pattern: /expression: 'b = c \\\\cdot \\\\cos\\(A\\)',/, replacement: "expression: 'b = c \\\\cdot \\\\cos(A)',\n    plainExpression: 'b = c × cos(A)'," },
  { pattern: /expression: 'a = b \\\\cdot \\\\tan\\(A\\)',/, replacement: "expression: 'a = b \\\\cdot \\\\tan(A)',\n    plainExpression: 'a = b × tan(A)'," },
  { pattern: /expression: 'b = a \/ \\\\tan\\(A\\)',/, replacement: "expression: 'b = a / \\\\tan(A)',\n    plainExpression: 'b = a / tan(A)'," },
  { pattern: /expression: 'A \\+ B = 90\^\\\\circ',/, replacement: "expression: 'A + B = 90^\\\\circ',\n    plainExpression: 'A + B = 90°'," },
  { pattern: /expression: 'B = 90\^\\\\circ - A',/, replacement: "expression: 'B = 90^\\\\circ - A',\n    plainExpression: 'B = 90° - A'," },
  { pattern: /expression: '\\\\text\{Area\} = \\(b \\\\times c \\\\times \\\\sin\\(A\\)\\) \/ 2',/, replacement: "expression: '\\\\text{Area} = (b \\\\times c \\\\times \\\\sin(A)) / 2',\n    plainExpression: 'Area = (b × c × sin(A)) / 2'," },
  { pattern: /expression: '\\\\text\{Area\} = \\(a \\\\times c \\\\times \\\\sin\\(B\\)\\) \/ 2',/, replacement: "expression: '\\\\text{Area} = (a \\\\times c \\\\times \\\\sin(B)) / 2',\n    plainExpression: 'Area = (a × c × sin(B)) / 2'," },
  { pattern: /expression: '\\\\text\{Area\} = r \\\\times s',/, replacement: "expression: '\\\\text{Area} = r \\\\times s',\n    plainExpression: 'Area = r × s'," },
  { pattern: /expression: '\\\\text\{Area\} = \\(c \\\\times h\\) \/ 2',/, replacement: "expression: '\\\\text{Area} = (c \\\\times h) / 2',\n    plainExpression: 'Area = (c × h) / 2'," },
  { pattern: /expression: 'h = \\\\sqrt\{p \\\\times q\}\\\\quad\\\\left\\(h\^2 = p \\\\times q\\\\right\\)',/, replacement: "expression: 'h = \\\\sqrt{p \\\\times q}\\\\quad\\\\left(h^2 = p \\\\times q\\\\right)',\n    plainExpression: 'h = √(p × q)'," },
  { pattern: /expression: 'a\^2 = c \\\\times p',/, replacement: "expression: 'a^2 = c \\\\times p',\n    plainExpression: 'a² = c × p'," },
  { pattern: /expression: 'b\^2 = c \\\\times q',/, replacement: "expression: 'b^2 = c \\\\times q',\n    plainExpression: 'b² = c × q'," },
  { pattern: /expression: 'p \+ q = c',/, replacement: "expression: 'p + q = c',\n    plainExpression: 'p + q = c'," },
  { pattern: /expression: '\\\\sin\^2\\(A\\) \+ \\\\cos\^2\\(A\\) = 1',/, replacement: "expression: '\\\\sin^2(A) + \\\\cos^2(A) = 1',\n    plainExpression: 'sin²(A) + cos²(A) = 1'," },
  { pattern: /expression: '\\\\tan\\(A\\) = \\\\frac\{\\\\sin\\(A\\)\}\{\\\\cos\\(A\\)\}',/, replacement: "expression: '\\\\tan(A) = \\\\frac{\\\\sin(A)}{\\\\cos(A)}',\n    plainExpression: 'tan(A) = sin(A) / cos(A)'," }
];

for (const { pattern, replacement } of replacements) {
  text = text.replace(pattern, replacement);
}

fs.writeFileSync('src/data/rightTriangleFormulas.ts', text, 'utf8');
console.log('Formulas updated successfully');
