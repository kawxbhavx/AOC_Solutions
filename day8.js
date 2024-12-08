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
let frequencyFilteredPositions={};
let frequencyFilteredCombinations={};
let frequencyFilteredAntinodePositions={};
frequencies.forEach(function(frequency) {
  frequencyFilteredPositions[frequency]=[];
  frequencyFilteredCombinations[frequency]=[];
  frequencyFilteredAntinodePositions[frequency]=[];
  let frequencyPattern = generatePattern(fieldRows);
  let positions = [];
  for(let row=0;row<rows;row++) {
    for(let col=0;col<cols;col++) {
      if(frequencyPattern[row][col]!=frequency) {
        frequencyPattern[row][col]=".";
      } else {
        frequencyFilteredPositions[frequency].push([row,col]);
      }
    }
  }
  frequencyFilteredPatterns[frequency]=frequencyPattern;
  for(let currentAntenna=0;currentAntenna<frequencyFilteredPositions[frequency].length;currentAntenna++) {
    for(let otherAntenna=0;otherAntenna<frequencyFilteredPositions[frequency].length;otherAntenna++) {
      if(currentAntenna!=otherAntenna) {
        frequencyFilteredCombinations[frequency].push([frequencyFilteredPositions[frequency][currentAntenna],frequencyFilteredPositions[frequency][otherAntenna]]);
        frequencyFilteredAntinodePositions[frequency].push([(2*frequencyFilteredPositions[frequency][currentAntenna][0])-frequencyFilteredPositions[frequency][otherAntenna][0],
                                          (2*frequencyFilteredPositions[frequency][currentAntenna][1])-frequencyFilteredPositions[frequency][otherAntenna][1]]);
      }
    }
  } 
  
  let patternRows=[];
  frequencyPattern.forEach(function(patternRow) {
    patternRows.push(patternRow.join(""));
  });
  let preNodeNew=preNode.cloneNode(true);
  preNodeNew.innerText=patternRows.join("\n");
  document.querySelector('body').appendChild(preNodeNew);
});

let antinodePositions = [];
for(let frequency in frequencyFilteredAntinodePositions) {
  frequencyFilteredAntinodePositions[frequency].forEach(function(antinodePosition) {
    //if(!antinodePositions.includes(antinodePosition)) {
      antinodePositions.push(antinodePosition);
    //}
  });
}

let validAntinodePositions = [];
antinodePositions.forEach(function(antinodePosition) {
  if(!(antinodePosition[0]<0 || antinodePosition[0]>=rows || antinodePosition[1]<0 || antinodePosition[1]>=cols)) {
    validAntinodePositions.push(antinodePosition);
  }
});
//validAntinodePositions.length;

for(let row=0;row<rows;row++) {
  for(let col=0;col<cols;col++) {    
    pattern[row][col]=".";    
  }
}
validAntinodePositions.forEach(function(antinodePosition) {
  pattern[antinodePosition[0]][antinodePosition[1]]="#"
});

let patternRows=[];
pattern.forEach(function(patternRow) {
  patternRows.push(patternRow.join(""));
});
let patternStr = patternRows.join("\n");
let preNodeNew=preNode.cloneNode(true);
preNodeNew.innerText=patternStr;
preNode.before(preNodeNew);
patternStr.match(/#/g).length;
