//part1
patternInput = document.querySelector('pre').innerText;
patternRows = patternInput.split("\n");
patternRows.pop();
let pattern=[];
for(let row=0;row<patternRows.length;row++) {
  pattern.push(patternRows[row].split(""));
}

let row=0;
let col=0;
let direction="up";

for(row=0;row<pattern.length;row++) {
  let rowFound=false;
  for(col=0;col<pattern[row].length;col++) {
    if(pattern[row][col]==='^') {
      rowFound=true;
      pattern[row][col] = "X";
      break;
    }
  }
  if(rowFound) {
    break;
  }
}

while(row>=0 && row<pattern.length && col>=0 && col<pattern[0].length) {
  //try {
    if(direction==="up") {
      if(pattern[row-1][col]==="#") {
        direction="right";
      } else {
        row--;
        pattern[row][col] = "X";      
      }
    } else if(direction==="right") {
      if(pattern[row][col+1]==="#") {
        direction="down";
      } else {
        col++;
        pattern[row][col] = "X";      
      }
    } else if(direction==="down") {
      if(pattern[row+1][col]==="#") {
        direction="left";
      } else {
        row++;      
        pattern[row][col] = "X";
      }
    } else if(direction==="left") {
      if(pattern[row][col-1]==="#") {
        direction="up";
      } else {
        col--;
        pattern[row][col] = "X";      
      }
    }
  //} catch (err) {
    //break;
  //}
}

for(let row=0;row<pattern.length;row++) {
  pattern[row] = pattern[row].join("");
}
pattern = pattern.join("\n");
document.querySelector('pre').innerText = pattern;
pattern.match(/X/g).length;

//test
let pattern=[['.','.','.'],['.','.','.'],['.','.','.']];
function stat(inputPattern) {
  let patternCopy=[];
  inputPattern.forEach(function(patternRow) {
    patternCopy.push([...patternRow]);
  });
  //inputPattern[1][1]='X';
  //return inputPattern;
  patternCopy[1][1]='X';
  return patternCopy;
}
let out=stat(pattern);
pattern;



//part2
patternInput = document.querySelector('pre').innerText;
patternInput = "....#.....\n.........#\n..........\n..#.......\n.......#..\n..........\n.#..^.....\n........#.\n#.........\n......#...\n";
patternRows = patternInput.split("\n");
patternRows.pop();
let patternField=[];
for(let row=0;row<patternRows.length;row++) {
  patternField.push(patternRows[row].split(""));
}

let rows=patternField.length;
let cols=patternField[0].length;
let startRow=0;
let startCol=0;
let direction="up";

for(startRow=0;startRow<patternField.length;startRow++) {
  let rowFound=false;
  for(startCol=0;startCol<patternField[startRow].length;startCol++) {
    if(patternField[startRow][startCol]==='^') {
      rowFound=true;
      //patternField[startRow][startCol] = "|";
      break;
    }
  }
  if(rowFound) {
    break;
  }
}

function getExitStatus(originalPattern,obstructionRow,obstructionCol,row,col) {

  let patternCopy=[];
  originalPattern.forEach(function(patternRow) {
    patternCopy.push([...patternRow]);
  });

  if(patternCopy[obstructionRow][obstructionCol]==="#") {
    return null;
  } else {
    patternCopy[obstructionRow][obstructionCol]="#";
  }
  
  while(row>=0 && row<patternCopy.length && col>=0 && col<patternCopy[0].length) {
    if(obstructionRow===0 && obstructionCol===0 && row===8 && col===7) {
      debugger;
    }
    try {
      if(direction==="up") {
        if(patternCopy[row-1][col]==="#") {
          direction="right";
          patternCopy[row][col] = "+";
          //col++;
        } else {
          row--;
          patternCopy[row][col] = "|";      
          // if(row<0 || row>=rows || col<0 || col>=cols) {
          //   return {"status": "exited", "obstruction":[obstructionRow,obstructionCol], "finalPosition": [row,col]}
          // }
        }
      } else if(direction==="right") {
        if(patternCopy[row][col+1]==="#") {
          direction="down";
          patternCopy[row][col] = "+";
          //row++;
        } else {
          col++;
          patternCopy[row][col] = "-";   
          // if(row<0 || row>=rows || col<0 || col>=cols) {
          //   return {"status": "exited", "obstruction":[obstructionRow,obstructionCol], "finalPosition": [row,col]}
          // }
        }
      } else if(direction==="down") {
        if(patternCopy[row+1][col]==="#") {
          direction="left";
          patternCopy[row][col] = "+";
          //col--;
        } else {
          row++;      
          patternCopy[row][col] = "|";
          // if(row<0 || row>=rows || col<0 || col>=cols) {
          //   return {"status": "exited", "obstruction":[obstructionRow,obstructionCol], "finalPosition": [row,col]}
          // }
        }
      } else if(direction==="left") {
        if(patternCopy[row][col-1]==="#") {
          direction="up";
          patternCopy[row][col] = "+";
          //row--;
        } else {
          col--;
          patternCopy[row][col] = "-";  
          // if(row<0 || row>=rows || col<0 || col>=cols) {
          //   return {"status": "exited", "obstruction":[obstructionRow,obstructionCol], "finalPosition": [row,col]}
          // }
        } 
      } else if(patternCopy[row][col]==="+") {
        return {"status": "looped", "obstruction":[obstructionRow,obstructionCol], "finalPosition": [row,col]}
      } 
    } catch (err) {
    }    
  }
  return {"status": "exited", "obstruction":[obstructionRow,obstructionCol], "finalPosition": [row,col]}
}

getExitStatus(patternField,6,3,startRow,startCol);

// let results = [];
// for(let row=0;row<patternField.length;row++) {
//   for(col=0;col<patternField[row].length;col++) {
//     let result=getExitStatus(patternField,row,col,startRow,startCol);
//     if(result!=null) {
//       console.log(row + "," + col + "," + startRow + "," + startCol);
//       if(result.status==="looped") {
//         results.push(result);
//       }
//     }
//   }
// }

