//test code1
patternInput = document.querySelector('pre').innerText;
pattern = patternInput.split("\n");
pattern.pop();
X_count = 0;
M_count = 0;
A_count = 0;
S_count = 0;
for(let row = 0;row<pattern.length;row++) {
  for(let col = 0;col<pattern[0].length;col++) {
    if(pattern[row][col]=="X") {
      X_count++;
    } else if (pattern[row][col]=="M") {
      M_count++;
    } else if (pattern[row][col]=="A") {
      A_count++;
    } else if (pattern[row][col]=="S") {
      S_count++;
    }
  }
}
console.log(X_count + " " + M_count + " " + A_count + " " + S_count + " " + (X_count + M_count + A_count + S_count) + " " + (140*140));


//part1 misinterpreted
patternInput = document.querySelector('pre').innerText;
patternRows = patternInput.split("\n");
patternRows.pop();
pattern = [];
for(let row = 0;row<patternRows.length;row++) {
  pattern.push(patternRows[row].split(""));
}

function markMatchingPattern(row,col,previousCharacter, nextCharacter, replacementCharacter) {
  if(pattern[row][col]===previousCharacter) {
    if(pattern[row][col-1]===nextCharacter) {
      pattern[row][col-1]=replacementCharacter;
    }
    if(pattern[row-1][col-1]===nextCharacter) {
      pattern[row-1][col-1]=replacementCharacter;
    }
    if(pattern[row-1][col]===nextCharacter) {
      pattern[row-1][col]=replacementCharacter;
    }
    if(pattern[row-1][col+1]===nextCharacter) {
      pattern[row-1][col+1]=replacementCharacter;
    }
    if(pattern[row][col+1]===nextCharacter) {
      pattern[row][col+1]=replacementCharacter;
    }
    if(pattern[row+1][col+1]===nextCharacter) {
      pattern[row+1][col+1]=replacementCharacter;
    }
    if(pattern[row+1][col]===nextCharacter) {
      pattern[row+1][col]=replacementCharacter;
    }
    if(pattern[row+1][col-1]===nextCharacter) {
      pattern[row+1][col-1]=replacementCharacter;
    }
  }
}


for(let row = 1;row<pattern.length-1;row++) {
  for(let col = 1;col<pattern[0].length-1;col++) {
    markMatchingPattern(row,col,"X","M","1");
  }
}

for(let row = 1;row<pattern.length-1;row++) {
  for(let col = 1;col<pattern[0].length-1;col++) {
    markMatchingPattern(row,col,"1","A","2");
  }
}

for(let row = 1;row<pattern.length-1;row++) {
  for(let col = 1;col<pattern[0].length-1;col++) {
    markMatchingPattern(row,col,"2","S","3");
  }
}

count=0;
for(let row = 0;row<pattern.length;row++) {
  for(let col = 0;col<pattern[0].length;col++) {
    if(pattern[row][col]==="3") {
      count++;
    }
  }
}
console.log(count);


//part1 
patternInput = "MMMSXXMASM\nMSAMXMSMSA\nAMXSXMAAMM\nMSAMASMSMX\nXMASAMXAMM\nXXAMMXXAMA\nSMSMSASXSS\nSAXAMASAAA\nMAMMMXMMMM\nMXMXAXMASX\n";
patternInput = "....XXMAS.\n.SAMXMS...\n...S..A...\n..A.A.MS.X\nXMASAMX.MM\nX.....XA.A\nS.S.S.S.SS\n.A.A.A.A.A\n..M.M.M.MM\n.X.X.XMASX\n";
patternInput = document.querySelector('pre').innerText;
patternRows = patternInput.split("\n");
patternRows.pop();
pattern = [];
for(let row = 0;row<patternRows.length;row++) {
  pattern.push(patternRows[row]);
}
for(let col = 0;col<patternRows[0].length;col++) {
  colStr = "";
  for(let row = 0;row<patternRows.length;row++) {
    colStr = colStr + patternRows[row][col];
  }
  pattern.push(colStr);
}
for(let row = 0;row<patternRows.length-3;row++) {
  for(let col = 0;col<patternRows[row].length-3;col++) {
    pattern.push(patternRows[row][col] + patternRows[row+1][col+1] + patternRows[row+2][col+2] + patternRows[row+3][col+3]);
  }  
}
for(let row = 0;row<patternRows.length-3;row++) {
  for(let col = 3;col<patternRows[row].length;col++) {
      pattern.push(patternRows[row+3][col-3] + patternRows[row+2][col-2] + patternRows[row+1][col-1] + patternRows[row][col]);
  }
}
patternStr = pattern.join("");
//console.log((patternStr.match(/XMAS/g).length + patternStr.match(/SAMX/g).length));
count = 0;
for(let index=0;index<patternStr.length-4;index++) {
  matchStr=patternStr.substring(index,index+4);
  if(matchStr==="XMAS" || matchStr==="SAMX") {
    count++;
  }
}
console.log(count);

//padding approach
// patternInput = "MMMSXXMASM\nMSAMXMSMSA\nAMXSXMAAMM\nMSAMASMSMX\nXMASAMXAMM\nXXAMMXXAMA\nSMSMSASXSS\nSAXAMASAAA\nMAMMMXMMMM\nMXMXAXMASX\n";
// patternInput = "....XXMAS.\n.SAMXMS...\n...S..A...\n..A.A.MS.X\nXMASAMX.MM\nX.....XA.A\nS.S.S.S.SS\n.A.A.A.A.A\n..M.M.M.MM\n.X.X.XMASX\n";
let preNode=document.querySelector('pre');
// preNode.innerText = patternInput;
patternInput = preNode.innerText;
patternRows = patternInput.split("\n");
patternRows.pop();
pattern = [];
for(let row=0;row<patternRows.length;row++) {
  pattern.push("   " + patternRows[row] + "   ");
}
pattern.unshift(" ".repeat(pattern[0].length));
pattern.unshift(" ".repeat(pattern[0].length));
pattern.unshift(" ".repeat(pattern[0].length));
pattern.push(" ".repeat(pattern[0].length));
pattern.push(" ".repeat(pattern[0].length));
pattern.push(" ".repeat(pattern[0].length));
count=0;
counts=[];
let patterns=[];
for(let patternNum=1;patternNum<=8;patternNum++) {
  let filteredPattern=[];
  for(let row=0;row<pattern.length;row++) {
    filteredPattern.push(".".repeat(pattern[0].length).split(""));
  }
  counts[patternNum]=0;
  patterns[patternNum]=filteredPattern;  
}
for(let row = 3;row<pattern.length;row++) {
  for(let col = 3;col<pattern[row].length;col++) {
    if(pattern[row][col]==='X') {
      /*if((row===3 && col===8) || (row===7 && col===3) || (row===12 && col===8)) {
        debugger;
      }*/
      if(pattern[row][col+1] + pattern[row][col+2] + pattern[row][col+3] === "MAS") {
        counts[1]++;
        patterns[1][row][col]="X";
        patterns[1][row][col+1]="M";
        patterns[1][row][col+2]="A";
        patterns[1][row][col+3]="S";
      }
      if(pattern[row+1][col+1] + pattern[row+2][col+2] + pattern[row+3][col+3] === "MAS") {
        counts[2]++;
        patterns[2][row][col]="X";
        patterns[2][row+1][col+1]="M";
        patterns[2][row+2][col+2]="A";
        patterns[2][row+3][col+3]="S";
      }
      if(pattern[row+1][col] + pattern[row+2][col] + pattern[row+3][col] === "MAS") {
        counts[3]++;
        patterns[3][row][col]="X";
        patterns[3][row+1][col]="M";
        patterns[3][row+2][col]="A";
        patterns[3][row+3][col]="S";
      }
      if(pattern[row+1][col-1] + pattern[row+2][col-2] + pattern[row+3][col-3] === "MAS") {
        counts[4]++;
        patterns[4][row][col]="X";
        patterns[4][row+1][col-1]="M";
        patterns[4][row+2][col-2]="A";
        patterns[4][row+3][col-3]="S";
      }
      if(pattern[row][col-1] + pattern[row][col-2] + pattern[row][col-3] === "MAS") {
        counts[5]++;
        patterns[5][row][col]="X";
        patterns[5][row][col-1]="M";
        patterns[5][row][col-2]="A";
        patterns[5][row][col-3]="S";
      }
      if(pattern[row-1][col-1] + pattern[row-2][col-2] + pattern[row-3][col-3] === "MAS") {
        counts[6]++;
        patterns[6][row][col]="X";
        patterns[6][row-1][col-1]="M";
        patterns[6][row-2][col-2]="A";
        patterns[6][row-3][col-3]="S";
      }
      if(pattern[row-1][col] + pattern[row-2][col] + pattern[row-3][col] === "MAS") {
        counts[7]++;
        patterns[7][row][col]="X";
        patterns[7][row-1][col]="M";
        patterns[7][row-2][col]="A";
        patterns[7][row-3][col]="S";
      }
      if(pattern[row-1][col+1] + pattern[row-2][col+2] + pattern[row-3][col+3] === "MAS") {
        counts[8]++;
        patterns[8][row][col]="X";
        patterns[8][row-1][col+1]="M";
        patterns[8][row-2][col+2]="A";
        patterns[8][row-3][col+3]="S";
      }
    }
  }
}
for(let patternNum=1;patternNum<=8;patternNum++) {
  count = count + counts[patternNum];
  console.log(patternNum + ":" + counts[patternNum]);
  patterns[patternNum].shift();
  patterns[patternNum].shift();
  patterns[patternNum].shift();
  patterns[patternNum].pop();
  patterns[patternNum].pop();
  patterns[patternNum].pop();
  for(let row=0;row<patterns[patternNum].length;row++) {
    patterns[patternNum][row].shift();
    patterns[patternNum][row].shift();
    patterns[patternNum][row].shift();
    patterns[patternNum][row].pop();
    patterns[patternNum][row].pop();
    patterns[patternNum][row].pop();
    patterns[patternNum][row] = patterns[patternNum][row].join("");
  }
  patterns[patternNum] = patterns[patternNum].join("\n");
  let preNodeNew=preNode.cloneNode(true);
  preNodeNew.innerText=patterns[patternNum];
  document.querySelector('body').appendChild(preNodeNew);
}
console.log(count);























//part2
patternInput = document.querySelector('pre').innerText;
pattern = patternInput.split("\n");
pattern.pop();
count_1=0;
count_2=0;
count_3=0;
count_4=0;
for(let row = 1;row<pattern.length-1;row++) {
  for(let col = 1;col<pattern[row].length-1;col++) {
    if(pattern[row][col]==='A') {
      if(pattern[row-1][col-1]==="M" && pattern[row+1][col+1]==="A" && pattern[row+1][col-1]==="M" && pattern[row-1][col+1]==="A") {
        count_1++;
      }
      if(pattern[row+1][col-1]==="M" && pattern[row-1][col+1]==="A" && pattern[row+1][col+1]==="M" && pattern[row-1][col-1]==="A") {
        count_2++;
      }
      if(pattern[row+1][col+1]==="M" && pattern[row-1][col-1]==="A" && pattern[row-1][col+1]==="M" && pattern[row+1][col-1]==="A") {
        count_3++;
      }
      if(pattern[row-1][col+1]==="M" && pattern[row+1][col-1]==="A" && pattern[row-1][col-1]==="M" && pattern[row+1][col+1]==="A") {
        count_4++;
      }
    }
  }
}
console.log(count_1 + "," + count_2 + "," + count_3 + "," + count_4);
console.log(count_1 + count_2 + count_3 + count_4);
