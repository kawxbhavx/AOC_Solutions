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



//part2  //1951
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
    patternCopy[obstructionRow][obstructionCol]="O";
  }
  
  while(row>=0 && row<patternCopy.length && col>=0 && col<patternCopy[0].length) {
    //if(obstructionRow===0 && obstructionCol===0 && row===8 && col===7) {
    //if(obstructionRow===6 && obstructionCol===3) {
    //if(obstructionRow===7 && obstructionCol===6) {
    //if(obstructionRow===7 && obstructionCol===7) {
    //if(obstructionRow===8 && obstructionCol===1) {
    //if(obstructionRow===8 && obstructionCol===3) {
    // if(obstructionRow===9 && obstructionCol===7) {
    //   debugger;
    // }
    //try {
      if(direction==="up") {
        if(patternCopy[row-1][col]==="+") {
          return {"status": "looped", "obstruction":[obstructionRow,obstructionCol], "finalPosition": [row,col]}
        } else if(patternCopy[row-1][col]==="#" || patternCopy[row-1][col]==="O") {
          direction="right";          
          patternCopy[row][col] = "+";
        } else {
          row--;
          patternCopy[row][col] = "|";
        }
      } else if(direction==="right") {
        if(patternCopy[row][col+1]==="+") {
          return {"status": "looped", "obstruction":[obstructionRow,obstructionCol], "finalPosition": [row,col]}
        } else if(patternCopy[row][col+1]==="#" || patternCopy[row][col+1]==="O") {
          direction="down";          
          patternCopy[row][col] = "+";
        } else {
          col++;
          patternCopy[row][col] = "-";
        }
      } else if(direction==="down") {
        if(patternCopy[row+1][col]==="+") {
          return {"status": "looped", "obstruction":[obstructionRow,obstructionCol], "finalPosition": [row,col]}
        } else if(patternCopy[row+1][col]==="#" || patternCopy[row+1][col]==="O") {
          direction="left";          
          patternCopy[row][col] = "+";
        } else {
          row++;      
          patternCopy[row][col] = "|";
        }
      } else if(direction==="left") {
        if(patternCopy[row][col-1]==="+") {
          return {"status": "looped", "obstruction":[obstructionRow,obstructionCol], "finalPosition": [row,col]}
        } else if(patternCopy[row][col-1]==="#" || patternCopy[row][col-1]==="O") {
          direction="up";          
          patternCopy[row][col] = "+";
        } else {
          col--;
          patternCopy[row][col] = "-"; 
        } 
      }       
    // } catch (err) {
    // }    
  }
  return {"status": "exited", "obstruction":[obstructionRow,obstructionCol], "finalPosition": [row,col]}
}

//getExitStatus(patternField,6,3,startRow,startCol);//final=2,4
//getExitStatus(patternField,7,6,startRow,startCol);//final=6,3
//getExitStatus(patternField,7,7,startRow,startCol);//final=7,6 //causing error in after
//getExitStatus(patternField,8,1,startRow,startCol);//final=5,2//tbf err 7,2
//getExitStatus(patternField,8,3,startRow,startCol);//final=2,4
//getExitStatus(patternField,9,7,startRow,startCol);//final=8,2//tbf 8,7

let results = [];
for(let row=0;row<patternField.length;row++) {
  for(col=0;col<patternField[row].length;col++) {
    let result=null;
    try {
      result = getExitStatus(patternField,row,col,startRow,startCol);
    } catch (err) {
    }
    if(result!=null) {
      console.log(row + "," + col + "," + startRow + "," + startCol);
      if(result.status==="looped") {
        results.push(result);
      }
    }
  }
}

//part1 refactored
patternInput = document.querySelector('pre').innerText;
patternRows = patternInput.split("\n");
patternRows.pop();
let pattern=[];
for(let row=0;row<patternRows.length;row++) {
  pattern.push(patternRows[row].split(""));
}

let rows=pattern.length;
let cols=pattern[0].length;

let row=0;
let col=0;
let direction="up";

for(row=0;row<pattern.length;row++) {
  let rowFound=false;
  for(col=0;col<pattern[row].length;col++) {
    if(pattern[row][col]==='^') {
      rowFound=true;
      //pattern[row][col] = "X";
      break;
    }
  }
  if(rowFound) {
    break;
  }
}

while(row>=0 && row<pattern.length && col>=0 && col<pattern[0].length) {
    pattern[row][col] = "X";
    if(direction==="up") {
      if(row>0) {
        if(pattern[row-1][col]==="#") {
          direction="right";
          col++;
        } else {         
          row--;
        }
      } else if(row===0) {
        break;
      }
    } else if(direction==="right") {
      if(col<cols-1) {
        if(pattern[row][col+1]==="#") {
          direction="down";
          row++;
        } else {
          col++;              
        }
      } else if(col===cols-1) {
        break;
      }
    } else if(direction==="down") {
      if(col<cols-1) {
        if(pattern[row+1][col]==="#") {
          direction="left";
          col--;
        } else {
          row++;          
        }
      } else if(row===rows-1) {
        break;
      }
    } else if(direction==="left") {
      if(col>0) {
        if(pattern[row][col-1]==="#") {
          direction="up";
          row--;
        } else {          
          col--;
        }
      } else if(col===0) {
        break;
      }
    }
}

for(let row=0;row<pattern.length;row++) {
  pattern[row] = pattern[row].join("");
}
pattern = pattern.join("\n");
document.querySelector('pre').innerText = pattern;
pattern.match(/X/g).length;


//part2 refactored
patternInput = document.querySelector('pre').innerText;
patternInput = 
  "....#.....\n" +
  ".........#\n" +
  "..........\n" +
  "..#.......\n" +
  ".......#..\n" +
  "..........\n" +
  ".#..^.....\n" +
  "........#.\n" +
  "#.........\n" +
  "......#...\n";

loops = {
  1:
    "....#.....\n" +
    "....+---+#\n" +
    "....|...|.\n" +
    "..#.|...|.\n" +
    "....|..#|.\n" +
    "....|...|.\n" +
    ".#.O^---+.\n" +
    "........#.\n" +
    "#.........\n" +
    "......#...\n",
  2:
    "....#.....\n" +
    "....+---+#\n" +
    "....|...|.\n" +
    "..#.|...|.\n" +
    "..+-+-+#|.\n" +
    "..|.|.|.|.\n" +
    ".#+-^-+-+.\n" +
    "......O.#.\n" +
    "#.........\n" +
    "......#...\n",
  3:
    "....#.....\n" +
    "....+---+#\n" +
    "....|...|.\n" +
    "..#.|...|.\n" +
    "..+-+-+#|.\n" +
    "..|.|.|.|.\n" +
    ".#+-^-+-+.\n" +
    ".+----+O#.\n" +
    "#+----+...\n" +
    "......#...\n",
  4:
    "....#.....\n" +
    "....+---+#\n" +
    "....|...|.\n" +
    "..#.|...|.\n" +
    "..+-+-+#|.\n" +
    "..|.|.|.|.\n" +
    ".#+-^-+-+.\n" +
    "..|...|.#.\n" +
    "#O+---+...\n" +
    "......#...\n",
  5:
    "....#.....\n" +
    "....+---+#\n" +
    "....|...|.\n" +
    "..#.|...|.\n" +
    "..+-+-+#|.\n" +
    "..|.|.|.|.\n" +
    ".#+-^-+-+.\n" +
    "....|.|.#.\n" +
    "#..O+-+...\n" +
    "......#...\n",
  6:
    "....#.....\n" +
    "....+---+#\n" +
    "....|...|.\n" +
    "..#.|...|.\n" +
    "..+-+-+#|.\n" +
    "..|.|.|.|.\n" +
    ".#+-^-+-+.\n" +
    ".+----++#.\n" +
    "#+----++..\n" +
    "......#O..\n",
        };


patternRows = patternInput.split("\n");
patternRows.pop();
let pattern=[];
for(let row=0;row<patternRows.length;row++) {
  pattern.push(patternRows[row].split(""));
}

let rows=pattern.length;
let cols=pattern[0].length;

let startRow=0;
let startCol=0;
let direction="up";

for(startRow=0;startRow<pattern.length;startRow++) {
  let rowFound=false;
  for(startCol=0;startCol<pattern[startRow].length;startCol++) {
    if(pattern[startRow][startCol]==='^') {
      rowFound=true;      
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
    patternCopy[obstructionRow][obstructionCol]="O";
  }

  let init=true;
  while(row>=0 && row<pattern.length && col>=0 && col<pattern[0].length) {
    patternCopy[row][col] = "X";
    if(init) {
      if(obstructionRow===row && obstructionCol===col) {
        patternCopy[row][col] = "O";
      }
      init=false;
    }
    if(direction==="up") {
      if(row>0) {
        if(patternCopy[row-1][col]==="#" || patternCopy[row-1][col]==="O") {
          direction="right";
          col++;
        } else {         
          row--;
        }
      } else if(row===0) {
        drawPattern(patternCopy);
        return {"status": "exited", "obstruction":[obstructionRow,obstructionCol], "finalPosition": [row,col]};
      }
    } else if(direction==="right") {
      if(col<cols-1) {
        if(patternCopy[row][col+1]==="#") {
          direction="down";
          row++;
        } else {
          col++;              
        }
      } else if(col===cols-1) {
        drawPattern(patternCopy);
        return {"status": "exited", "obstruction":[obstructionRow,obstructionCol], "finalPosition": [row,col]};
      }
    } else if(direction==="down") {
      if(row<rows-1) {
        if(patternCopy[row+1][col]==="#") {
          direction="left";
          col--;
        } else {
          row++;          
        }
      } else if(row===rows-1) {
        drawPattern(patternCopy);
        return {"status": "exited", "obstruction":[obstructionRow,obstructionCol], "finalPosition": [row,col]};
      }
    } else if(direction==="left") {
      if(col>0) {
        if(patternCopy[row][col-1]==="#") {
          direction="up";
          row--;
        } else {          
          col--;
        }
      } else if(col===0) {
        drawPattern(patternCopy);
        return {"status": "exited", "obstruction":[obstructionRow,obstructionCol], "finalPosition": [row,col]};
      }
    }
  }
}

function drawPattern(updatedPattern) {
  for(let row=0;row<updatedPattern.length;row++) {
    updatedPattern[row] = updatedPattern[row].join("");
  }
  updatedPattern = updatedPattern.join("\n");
  document.querySelector('pre').innerText = updatedPattern;
}

//getExitStatus(pattern,0,0,startRow,startCol);
getExitStatus(pattern,6,4,startRow,startCol);
