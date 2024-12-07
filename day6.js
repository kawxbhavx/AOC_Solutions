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
  try {
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
      if(pattern[row+1][col]==="#") {
        direction="up";
      } else {
        col--;
        pattern[row][col] = "X";      
      }
    }
  } catch (err) {
  }
}
