function hasMeaningfulContent(children) {
  return children.some(node => {
    if (node.type === 'element') return true;
    if (node.type === 'text' && node.value.trim() !== '') return true;
    return false;
  });
}

export default function rehypeSectionWrapper() {
  return (tree) => {
    const newChildren = [];
    let currentSection = {
      type: 'element',
      tagName: 'section',
      properties: { className: ['section-shell', 'prose', 'prose-luxury', 'prose-invert', 'max-w-none', 'mb-8'] },
      children: []
    };

    for (const node of tree.children) {
      // Keep ESM imports/exports at the root level
      if (node.type === 'mdxjsEsm') {
        newChildren.push(node);
        continue;
      }

      if (node.type === 'element' && node.tagName === 'h2') {
        if (hasMeaningfulContent(currentSection.children)) {
          newChildren.push(currentSection);
        }
        currentSection = {
          type: 'element',
          tagName: 'section',
          properties: { className: ['section-shell', 'prose', 'prose-luxury', 'prose-invert', 'max-w-none', 'mb-8'] },
          children: [node]
        };
      } else {
        currentSection.children.push(node);
      }
    }
    
    if (hasMeaningfulContent(currentSection.children)) {
      newChildren.push(currentSection);
    }
    
    tree.children = newChildren;
  };
}
