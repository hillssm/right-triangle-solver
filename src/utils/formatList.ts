export function formatRootBars(value: string): string {
  if (typeof value !== 'string') return value;
  
  // Replace √(something) or \u221A(something) or sqrt(something)
  let processed = value.replace(/(?:√|\u221A|\bsqrt\b)\(([^)]+)\)/g, '<span class="whitespace-nowrap">&#8730;<span class="math-radical-content">$1</span></span>');
  
  // Replace √X or \u221AX or sqrtX without parentheses
  processed = processed.replace(/(?:√|\u221A|\bsqrt\b)([\w\d.]+)/g, '<span class="whitespace-nowrap">&#8730;<span class="math-radical-content">$1</span></span>');

  // Also format ^2, ^3 etc
  processed = processed.replace(/\^(\d+)/g, '<sup>$1</sup>');

  return processed;
}

export function formatListItem(item: string): string {
  if (typeof item !== 'string') return item;

  let formattedItem = formatRootBars(item);

  const separators = [
    ' - ',
    ' — ',
    ' - ',
    ': ',
    ' -> ',
    ' → '
  ];

  for (const separator of separators) {
    const index = formattedItem.indexOf(separator);
    // If we find a separator, and the left side is relatively short (<= 150 chars to account for HTML) 
    // it's likely a heading/label.
    if (index > 0 && index <= 150 && !formattedItem.substring(0, index).includes('</')) {
      const term = formattedItem.slice(0, index);
      const detail = formattedItem.slice(index + separator.length);
      return `<strong class="font-bold text-on-surface">${term}:</strong> ${detail}`;
    }
  }

  return formattedItem;
}
