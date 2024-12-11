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
input = document.querySelector('pre').innerText;
input = "2333133121414131402\n";
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
    for(let i=0;i<fileIndexStr.length;i++) {
      fileIndexStr[i] = parseInt(fileIndexStr[i]);
    }
    fileBlocks.push(fileIndexStr);
    fileIndex++;
  } else {
    fileBlocks.push(".".toString().repeat(mapDigit).split(""));
  }
}

let fileId=0;
for(let blockIndex=fileBlocks.length-1;blockIndex>=0;blockIndex--) {
  if(!fileBlocks[blockIndex].includes(".")) {
    fileId = fileBlocks[blockIndex][0];
    break;
  }
}

for(fileId;fileId>0;fileId--) {
  let blockIndex=fileBlocks.length-1;
  //debugger;
  while(!fileBlocks[blockIndex].includes(fileId)) {
    blockIndex--;
  }
  let blockLen=fileBlocks[blockIndex].length;
  for(let spaceIndex=1;spaceIndex<fileBlocks.length;spaceIndex++) {
    if(fileBlocks[spaceIndex].includes(".")) {
      if(fileBlocks[spaceIndex].length>=blockLen) {
        fileBlocks.splice(spaceIndex,0,fileBlocks[blockIndex]);
        fileBlocks[spaceIndex+1].splice(0,blockLen);
        blockIndex++;
        fileBlocks.splice(blockIndex,Infinity);        
        break;
      }
    }
  }
}
