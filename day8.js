//part1
let preNode=document.querySelector('pre');
// preNode.innerText = fieldInput;
fieldInput = preNode.innerText;
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
rows=pattern.length;
cols=pattern[0].length;
frequencies=[];

for(let row=0;row<rows;row++) {
  for(let col=0;col<cols;col++) {
    let frequency=pattern[row][col];
    if(frequency!=".") {
      if(!frequencies.includes(frequency)) {
        frequencies.push(frequency);
      }      
    }
  }
}

let frequencyFilteredPatterns={};
frequencies.forEach(function(frequency) {
  let frequencyPattern = generatePattern(fieldRows);
  for(let row=0;row<rows;row++) {
    for(let col=0;col<cols;col++) {
      if(frequencyPattern[row][col]!=frequency) {
        frequencyPattern[row][col]=".";
      }
    }
  }
  frequencyFilteredPatterns[frequency]=frequencyPattern;
  let patternRows=[];
  frequencyPattern.forEach(function(patternRow) {
    patternRows.push(patternRow.join(""));
  });
  let preNodeNew=preNode.cloneNode(true);
  preNodeNew.innerText=patternRows.join("\n");
  document.querySelector('body').appendChild(preNodeNew);
});
