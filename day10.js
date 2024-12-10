//part1
let preNode=document.querySelector('pre');
// preNode.innerText = fieldInput;
//fieldInput = preNode.innerText;
fieldInput = "89010123\n78121874\n87430965\n96549874\n45678903\n32019012\n01329801\n10456732\n";
preNode.innerText = fieldInput;
fieldRows = fieldInput.split("\n");
fieldRows.pop();
function generatePattern(patternRows) {
  let pattern=[];
  for(let row=0;row<patternRows.length;row++) {
    let patternRow=[];
    patternRows[row].split("").forEach(function(height) {
      patternRow.push(parseInt(height));
    });
    pattern.push(patternRow);
  }
  return pattern;
}

pattern = generatePattern(fieldRows);
rows=pattern.length;
cols=pattern[0].length;
function generateBlankPattern() {
  let patternCopy=[];
  for(let row=0;row<rows.length;row++) {
    patternCopy.push(".".repeat(cols).split(""));
  }
}

let trails={};
for(let row=0;row<rows;row++) {
  for(let col=0;col<cols;col++) {
    if(pattern[row][col]===0) {
      let patternCopy=generateBlankPattern();
      patternCopy[row][col]=0;
      trails[row + "," + col] = patternCopy;
    } else {
      trails[row + "," + col] = null;
    }
  }
}
