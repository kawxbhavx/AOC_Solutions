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
for(let row = 0;row<patternRows.length-4;row++) {
  diagStr = "";
  for(let col = 0;col<patternRows[row].length-4;col++) {
    diagStr = diagStr + patternRows[row][col] + patternRows[row+1][col+1] + patternRows[row+2][col+2] + patternRows[row+3][col+3];
  }
  pattern.push(diagStr);
}
for(let row = 0;row<patternRows.length-4;row++) {
  diagStr = "";
  for(let col = 3;col<patternRows[row].length-1;col++) {
    diagStr = diagStr + patternRows[row][col] + patternRows[row+1][col-1] + patternRows[row+2][col-2] + patternRows[row+3][col-3];
  }
  pattern.push(diagStr);
}
pattern = pattern.join("");
console.log(pattern.match(/XMAS|SAMX/g).length);
