//part1
let preNode=document.querySelector('pre');
fieldInput = preNode.innerText;
//fieldInput = "89010123\n78121874\n87430965\n96549874\n45678903\n32019012\n01329801\n10456732\n";
//preNode.innerText = fieldInput;
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
      trails[trailHeadNumber] = {"trailPathPattern":patternCopy, "pathPositions":[{"pathPositionDir":[0],"positionRows":[row],"positionCols":[col]}]};
      trailHeadNumber++;
    }
  }
}

for(let currentHeight=0;currentHeight<=8;currentHeight++) {
  for(let trailHeadNumber in trails) {
    trails[trailHeadNumber].pathPositions.forEach(function(pathPosition) {
      //let previousPositions=pathPosition.positionCoordinates;
      let positionRow=pathPosition.positionRows[pathPosition.positionRows.length-1];
      let positionCol=pathPosition.positionCols[pathPosition.positionCols.length-1];
      if(currentHeight===pattern[positionRow][positionCol]) {
        let currentPositionDir=pathPosition.pathPositionDir[pathPosition.pathPositionDir.length-1];
        if(positionRow>=1) {
          if(pattern[positionRow-1][positionCol]===(currentHeight+1)) {
            trails[trailHeadNumber].trailPathPattern[positionRow-1][positionCol]=currentHeight+1;
            trails[trailHeadNumber].pathPositions.push({"pathPositionDir":[...pathPosition.pathPositionDir,1],
                                                        "positionRows":[...pathPosition.positionRows,positionRow-1],
                                                        "positionCols":[...pathPosition.positionCols,positionCol]});
          }
        }
        if(positionRow<=rows-2) {
          if(pattern[positionRow+1][positionCol]===(currentHeight+1)) {
            trails[trailHeadNumber].trailPathPattern[positionRow+1][positionCol]=currentHeight+1;
            trails[trailHeadNumber].pathPositions.push({"pathPositionDir":[...pathPosition.pathPositionDir,2],
                                                        "positionRows":[...pathPosition.positionRows,positionRow+1],
                                                        "positionCols":[...pathPosition.positionCols,positionCol]});
          }
        }
        if(positionCol>=1) {
          if(pattern[positionRow][positionCol-1]===(currentHeight+1)) {
            trails[trailHeadNumber].trailPathPattern[positionRow][positionCol-1]=currentHeight+1;
            trails[trailHeadNumber].pathPositions.push({"pathPositionDir":[...pathPosition.pathPositionDir,3],
                                                        "positionRows":[...pathPosition.positionRows,positionRow],
                                                        "positionCols":[...pathPosition.positionCols,positionCol-1]});
          }
        }        
        if(positionCol<=cols-2) {
          if(pattern[positionRow][positionCol+1]===(currentHeight+1)) {
            trails[trailHeadNumber].trailPathPattern[positionRow][positionCol+1]=currentHeight+1;
            trails[trailHeadNumber].pathPositions.push({"pathPositionDir":[...pathPosition.pathPositionDir,4],
                                                        "positionRows":[...pathPosition.positionRows,positionRow],
                                                        "positionCols":[...pathPosition.positionCols,positionCol+1]});
          }
        }
      }
    });
  }
}

let score=0;

for(let trailHeadNumber in trails) {  
  let trailPathPattern = trails[trailHeadNumber].trailPathPattern;
  trailPathPattern.forEach(function(pathRow, index) {
    trailPathPattern[index]=pathRow.join("");
  });
  trails[trailHeadNumber].trailPathPattern=trailPathPattern.join("\n");
  score = score + trails[trailHeadNumber].trailPathPattern.match(/9/g).length;
}
score;

//part2
let maxTrailLength=0;
for(let trailHeadNumber in trails) {
if(trails[trailHeadNumber].pathPositions[trails[trailHeadNumber].pathPositions.length-1].positionRows.length>maxTrailLength) {
    maxTrailLength=trails[trailHeadNumber].pathPositions[trails[trailHeadNumber].pathPositions.length-1].positionRows.length;
  }
}

let uniquePaths=[];
for(let trailHeadNumber in trails) {
  trails[trailHeadNumber].pathPositions.forEach(function(trailPath) {
    if(trailPath.positionRows.length===maxTrailLength) {
      let trailPathStr=trailPath.positionRows.join("") + trailPath.positionCols.join("");
      if(!uniquePaths.includes(trailPathStr)) {
        uniquePaths.push(trailPathStr);
      }
    }
  });
}
uniquePaths.length;
