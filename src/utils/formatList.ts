export function formatRootBars(value: string): string {
  if (typeof value !== 'string') return value;
  
  // Replace √(something) or \u221A(something) or sqrt(something)
  let processed = value.replace(/(?:√|\u221A|\bsqrt\b)\(([^)]+)\)/g, '<span class="whitespace-nowrap">&#8730;<span class="math-radical-content">$1</span></span>');
  
  // Replace √X or \u221AX or sqrtX without parentheses
  processed = processed.replace(/(?:√|\u221A|\bsqrt\b)([\w\d.]+)/g, '<span class="whitespace-nowrap">&#8730;<span class="math-radical-content">$1</span></span>');

  // Also format ^2, ^3 etc
  processed = processed.replace(/\^2/g, '²').replace(/\^3/g, '³').replace(/\^(\d+)/g, '<sup>$1</sup>');

  return processed;
}

export function formatListItem(item: string): string {
  if (typeof item !== 'string') return item;

  const separators = [
    ' - ',
    ' — ',
    ' \u2010 ',
    ': ',
    ' -> ',
    ' \u2192 '
  ];

  // Detect separators on the RAW text (before HTML injection) and skip
  // any separator that falls inside parentheses — this protects formulas
  // like √(c² - a²) from being split.
  for (const separator of separators) {
    let searchFrom = 0;
    while (searchFrom < item.length) {
      const index = item.indexOf(separator, searchFrom);
      if (index < 0 || index > 150) break;

      // Count parenthesis depth at this position
      let depth = 0;
      for (let i = 0; i < index; i++) {
        if (item[i] === '(') depth++;
        if (item[i] === ')') depth--;
      }

      if (depth === 0) {
        const term = item.slice(0, index);
        const detail = item.slice(index + separator.length);
        return `<strong class="font-bold text-on-surface">${formatRootBars(term)}:</strong> ${formatRootBars(detail)}`;
      }

      searchFrom = index + separator.length;
    }
  }

  return formatRootBars(item);
}
