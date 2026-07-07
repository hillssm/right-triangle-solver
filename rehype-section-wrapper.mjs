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
        if (currentSection.children.length > 0) {
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
    
    if (currentSection.children.length > 0) {
      newChildren.push(currentSection);
    }
    
    tree.children = newChildren;
  };
}
