//part1
//let inputStones="0 1 10 99 999";
let inputStones="125 17";
//let inputStones="8069 87014 98 809367 525 0 9494914 5";

let stones=inputStones.split(" ");
for(let i=0;i<stones.length;i++) {
  stones[i]=parseInt(stones[i]);
}

for(let blink=1;blink<=25;blink++) {
  //debugger;
  for(let i=0;i<stones.length;i++) {
    if(stones[i]===0) {    
      stones[i]=1;
    } else if(stones[i].toString().length%2===0) {
      let stoneStr=stones[i].toString();
      let stoneStrPart1=stoneStr.substring(0,stoneStr.length/2);
      let stoneStrPart2=stoneStr.substring(stoneStr.length/2);
      stones.splice(i,1,parseInt(stoneStrPart1),parseInt(stoneStrPart2));
      i++;
    } else {
      stones[i] = stones[i] *2024;
    }
  }
}
stones.length;

//part2
//let inputStones="125 17";
let inputStones="8069 87014 98 809367 525 0 9494914 5";

let stones=inputStones.split(" ");
let frequencies=[];
for(let i=0;i<stones.length;i++) {
  stones[i]=parseInt(stones[i]);
  frequencies.push(1);
}


for(let blink=1;blink<=75;blink++) {
  //debugger;
  for(let i=0;i<stones.length;i++) {
    if(stones[i]===0) {    
      stones[i]=1;
    } else if(stones[i].toString().length%2===0) {
      let stoneStr=stones[i].toString();
      let stoneStrPart1=stoneStr.substring(0,stoneStr.length/2);
      let stoneStrPart2=stoneStr.substring(stoneStr.length/2);
      stones.splice(i,1,parseInt(stoneStrPart1),parseInt(stoneStrPart2));
      frequencies.splice(i+1,0,frequencies[i]);
      i++;
    } else {
      stones[i] = stones[i]*2024;
    }    
  }
  //debugger;
  for(let i=0;i<stones.length-1;i++) {
    for(let j=i+1;j<stones.length;j++) {
      if(stones[i]===stones[j]) {
        stones.splice(j,1);
        frequencies[i]=frequencies[i]+frequencies[j];
        frequencies.splice(j,1);
        j--;
      }
    }
  }
  //debugger;
}

let count=0;
for(let i=0;i<frequencies.length;i++) {
  count = count + frequencies[i];
}
count;
