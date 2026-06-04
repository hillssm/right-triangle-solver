export function formatListItem(item: string): string {
  if (typeof item !== 'string') return item;

  const separators = [
    ' - ',
    ' - ',
    ': ',
    ' -> ',
    ' → '
  ];

  for (const separator of separators) {
    const index = item.indexOf(separator);
    // If we find a separator, and the left side is relatively short (<= 80 chars) 
    // it's likely a heading/label.
    if (index > 0 && index <= 80) {
      const term = item.slice(0, index);
      const detail = item.slice(index + separator.length);
      return `<strong class="font-bold text-white">${term}:</strong> ${detail}`;
    }
  }

  return item;
}
