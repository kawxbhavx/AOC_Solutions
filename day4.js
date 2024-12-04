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


//part1
patternInput = document.querySelector('pre').innerText;
pattern = patternInput.split("\n");
pattern.pop();
for(let row = 1;row<pattern.length-1;row++) {
  for(let col = 1;col<pattern[0].length-1;col++) {
    if(pattern[row][col]=="X") {
      if(pattern[row][col-1]=="M") {
        pattern[row][col-1]=="1";
      }
      if(pattern[row-1][col-1]=="M") {
        pattern[row-1][col-1]=="1";
      }
      if(pattern[row-1][col]=="M") {
        pattern[row-1][col]=="1";
      }
      if(pattern[row-1][col+1]=="M") {
        pattern[row-1][col+1]=="1";
      }
      if(pattern[row][col+1]=="M") {
        pattern[row][col+1]=="1";
      }
      if(pattern[row+1][col+1]=="M") {
        pattern[row+1][col+1]=="1";
      }
      if(pattern[row+1][col]=="M") {
        pattern[row+1][col]=="1";
      }
      if(pattern[row+1][col-1]=="M") {
        pattern[row+1][col-1]=="1";
      }
    }
  }
}

count=0;
for(let row = 0;row<pattern.length;row++) {
  for(let col = 0;col<pattern[0].length;col++) {
    if(pattern[row][col]=="1") {
      count++;
    }
  }
}
console.log(count);
