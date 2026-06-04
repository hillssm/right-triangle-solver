const fs = require('fs');
const path = 'src/data/focusedMeasurementCalculatorPages.ts';
let lines = fs.readFileSync(path, 'utf8').split('\n');

let startIndex = -1;
let endIndex = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('slug: "right-triangle-area-from-leg-and-angle-calculator"')) {
    endIndex = i; // This is line 980 (index 979 in 0-based).
    break;
  }
}

// Search backwards from endIndex to find the end of the previous object (the one I inserted)
// The last thing I inserted ends with:
//     ]
//   },
for (let i = endIndex - 1; i >= 0; i--) {
  if (lines[i] === '  },') {
    // This is the end of my inserted newAltitude object.
    startIndex = i + 1;
    break;
  }
}

console.log('startIndex:', startIndex, 'endIndex:', endIndex);

if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
  // We want to delete from startIndex to endIndex - 2 (since endIndex - 1 is likely '},' and we want to keep the new object separated)
  // Wait, the next object starts with `  {` on endIndex - 1. Let's see:
  // 978:   ]
  // 979: },
  // 980:   {
  // 981:   slug: "right-triangle-area-from-leg-and-angle-calculator",
  
  // So the left-over chunk is lines [startIndex] up to (but not including) the line with `},` that precedes the next `  {`.
  // Let's just find the `},` before endIndex.
  let deleteEnd = endIndex - 1;
  while (deleteEnd > startIndex && !lines[deleteEnd].includes('},')) {
    deleteEnd--;
  }
  
  // We delete from startIndex to deleteEnd.
  lines.splice(startIndex, deleteEnd - startIndex + 1);
  fs.writeFileSync(path, lines.join('\n'));
  console.log('Fixed syntax error!');
} else {
  console.log('Could not find indices properly');
}
