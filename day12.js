let preNode=document.querySelector('pre');
//preNode.innerText = fieldInput;
let fieldInput = preNode.innerText;
//let fieldInput = "AAAA\nBBCD\nBBCC\nEEEC\n";
//let fieldInput = "OOOOO\nOXOXO\nOOOOO\nOXOXO\nOOOOO\n";
//let fieldInput = "RRRRIICCFF\nRRRRIICCCF\nVVRRRCCFFF\nVVRCCCJFFF\nVVVVCJJCFE\nVVIVCCJJEE\nVVIIICJJEE\nMIIIIIJJEE\nMIIISIJEEE\nMMMISSJEEE\n";
fieldRows = fieldInput.split("\n");
fieldRows.pop();
function generatePattern(patternRows) {
  let pattern=[];
  for(let row=0;row<patternRows.length;row++) {
    pattern.push(patternRows[row].split(""));
  }
  return pattern;
}

let pattern = generatePattern(fieldRows);
let plantTypes={};
let perimeters={};
let rows=pattern.length;
let cols=pattern[0].length;
for(let row=0;row<rows;row++) {
  for(let col=0;col<cols;col++) {
    if(plantTypes.hasOwnProperty(pattern[row][col])) {
      plantTypes[pattern[row][col]]=plantTypes[pattern[row][col]]+1;
    } else {
      plantTypes[pattern[row][col]]=1;
    }
    let cellPerimeter=4;
    if(row>0) {
      if(pattern[row][col]===pattern[row-1][col]) {
        cellPerimeter--;
      }
    }
    if(row<rows-1) {
      if(pattern[row][col]===pattern[row+1][col]) {
        cellPerimeter--;
      }
    }
    if(col>0) {
      if(pattern[row][col]===pattern[row][col-1]) {
        cellPerimeter--;
      }
    }
    if(col<cols-1) {
      if(pattern[row][col]===pattern[row][col+1]) {
        cellPerimeter--;
      }
    }
    if(perimeters.hasOwnProperty(pattern[row][col])) {
      perimeters[pattern[row][col]]=perimeters[pattern[row][col]]+cellPerimeter;
    } else {
      perimeters[pattern[row][col]]=cellPerimeter;
    }
  }
}

let price=0;
for(let plantType in plantTypes) {
  price = price + (plantTypes[plantType] * perimeters[plantType]);
}
price;
