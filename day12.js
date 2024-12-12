//let preNode=document.querySelector('pre');
// preNode.innerText = fieldInput;
//let fieldInput = preNode.innerText;
//let fieldInput = "AAAA\nBBCD\nBBCC\nEEEC\n";
//let fieldInput = "OOOOO\nOXOXO\nOOOOO\nOXOXO\nOOOOO\n";
let fieldInput = "RRRRIICCFF\nRRRRIICCCF\nVVRRRCCFFF\nVVRCCCJFFF\nVVVVCJJCFE\nVVIVCCJJEE\nVVIIICJJEE\nMIIIIIJJEE\nMIIISIJEEE\nMMMISSJEEE\n";
fieldRows = fieldInput.split("\n");
fieldRows.pop();
function generatePattern(patternRows) {
  let pattern=[];
  for(let row=0;row<patternRows.length;row++) {
    pattern.push(patternRows[row].split(""));
  }
  return pattern;
}

pattern = generatePattern(fieldRows);
plantTypes={};
rows=pattern.length;
cols=pattern[0].length;
for(let row=0;row<rows;row++) {
  for(let col=0;col<cols;col++) {
    if(plantTypes.hasOwnProperty(pattern[row][col])) {
      plantTypes[pattern[row][col]]=plantTypes[pattern[row][col]]+1;
    } else {
      plantTypes[pattern[row][col]]=1;
    }
  }
}
