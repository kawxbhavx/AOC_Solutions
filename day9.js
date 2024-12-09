//part1
input = document.querySelector('pre').innerText;
pattern = input.split("\n");
pattern.pop();
pattern = pattern[0];
let fileBlocks=[]; 
let fileIndex=0;
for(let index=0;index<pattern.length;index++) {
  let mapDigit = parseInt(pattern.substring(index,index+1));  
  //debugger;
  if(index%2===0) {
    let fileIndexStr=fileIndex + ";";
    fileIndexStr=fileIndexStr.repeat(mapDigit).split(";");
    fileIndexStr.pop();
    fileIndexStr.forEach(function(indexStr) {
      fileBlocks.push(parseInt(indexStr));
    });
    fileIndex++;
  } else {
    ".".toString().repeat(mapDigit).split("").forEach(function(spaceStr) {
      fileBlocks.push(spaceStr);
    });
  }
}
//let fileBlocks="00...111...2...333.44.5555.6666.777.888899".split("");
for(let index=fileBlocks.length-1;index>=0;index--) {
  //debugger;
  if(fileBlocks[index]!='.') {
    let freeSpaceIndex=fileBlocks.indexOf(".");
    fileBlocks[freeSpaceIndex] = fileBlocks[index];
    fileBlocks[index]=".";
  }
}
fileBlocks.push(fileBlocks.shift());
let checksum=0;
for(let index=0;index<fileBlocks.length;index++) {
  if(fileBlocks[index]===".") {
    break;
  } else {
    checksum = checksum + (index * fileBlocks[index]);
  }  
}


//part2
