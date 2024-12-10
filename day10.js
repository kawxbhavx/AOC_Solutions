//part1
let preNode=document.querySelector('pre');
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
  for(let row=0;row<rows;row++) {
    patternCopy.push(".".repeat(cols).split(""));
  }
  return patternCopy;
}

let trails={};
let trailHeadNumber=0;
for(let row=0;row<rows;row++) {
  for(let col=0;col<cols;col++) {
    if(pattern[row][col]===0) {
      let patternCopy=generateBlankPattern();
      patternCopy[row][col]=0;
      trails[trailHeadNumber] = {"trailPathPattern":patternCopy, "pathPositions":[{"pathPositionDir":[0],"positionCoordinate":[row,col]}]};
      trailHeadNumber++;
    }
  }
}

for(let currentHeight=0;currentHeight<=8;currentHeight++) {
  for(let trailHeadNumber in trails) {
    trails[trailHeadNumber].pathPositions.forEach(function(pathPosition) {
      let positionRow=pathPosition.positionCoordinate[0];
      let positionCol=pathPosition.positionCoordinate[1];
      if(currentHeight===pattern[positionRow][positionCol]) {
        let currentPositionDir=pathPosition.pathPositionDir[pathPosition.pathPositionDir.length-1];
        if(positionRow>=1) {
          if(pattern[positionRow-1][positionCol]===(currentHeight+1)) {
            trails[trailHeadNumber][positionRow-1][positionCol]=currentHeight+1;
            trails[trailHeadNumber].pathPositions.push({"pathPositionDir":[currentPositionDir,1],"positionCoordinate":[positionRow-1,positionCol]});
          }
        }
        if(positionCol>=1) {
          if(pattern[positionRow][positionCol-1]===(currentHeight+1)) {
            trails[trailHeadNumber][positionRow][positionCol-1]=currentHeight+1;
            trails[trailHeadNumber].pathPositions.push({"pathPositionDir":[currentPositionDir,2],"positionCoordinate":[positionRow,positionCol-1]});
          }
        }
        if(positionRow<=rows-2) {
          if(pattern[positionRow+1][positionCol]===(currentHeight+1)) {
            trails[trailHeadNumber][positionRow+1][positionCol]=currentHeight+1;
            trails[trailHeadNumber].pathPositions.push({"pathPositionDir":[currentPositionDir,3],"positionCoordinate":[positionRow+1,positionCol]});
          }
        }
        if(positionCol<=cols-2) {
          if(pattern[positionRow][positionCol+1]===(currentHeight+1)) {
            trails[trailHeadNumber][positionRow][positionCol+1]=currentHeight+1;
            trails[trailHeadNumber].pathPositions.push({"pathPositionDir":[currentPositionDir,4],"positionCoordinate":[positionRow,positionCol+1]});
          }
        }
      }
    });
  }
}
