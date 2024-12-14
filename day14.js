//part1
let preNode=document.querySelector('pre');
let robotDetailsStr = preNode.innerText;
//let robotDetailsStr = "p=0,4 v=3,-3" + 
"\np=6,3 v=-1,-3" +
"\np=10,3 v=-1,2" +
"\np=2,0 v=2,-1" +
"\np=0,0 v=1,3" +
"\np=3,0 v=-2,-2" +
"\np=7,6 v=-1,-3" +
"\np=3,0 v=-1,-2" +
"\np=9,3 v=2,3" +
"\np=7,3 v=-1,2" +
"\np=2,4 v=2,-3" +
"\np=9,5 v=-3,-3\n";
//let tileRows=7;
//let tileCols=11;

let tileRows=103;
let tileCols=101;

let robots={};

robotDetailRows = robotDetailsStr.split("\n");
robotDetailRows.pop();

for(let robotId=0;robotId<robotDetailRows.length;robotId++) {
  let detailArr=robotDetailRows[robotId].split(" ");
  let positionStr=detailArr[0];
  let velocityStr=detailArr[1];
  let positionX=parseInt(positionStr.substring(2));
  let positionY=parseInt(positionStr.substring(positionStr.indexOf(",")+1));
  let velocityX=parseInt(velocityStr.substring(2));
  let velocityY=parseInt(velocityStr.substring(velocityStr.indexOf(",")+1));
  robots[robotId] = {"position":{"x":positionX,"y":positionY},"velocity":{"x":velocityX,"y":velocityY}};
}

for(let seconds=1;seconds<=100;seconds++) {
  for(let robotId in robots) {
    let position=robots[robotId].position;
    let velocity=robots[robotId].velocity;
    position.x = position.x + velocity.x;
    if(position.x<0) {
      position.x=tileCols+position.x;
    } else if(position.x>=tileCols) {
      position.x=position.x-tileCols;
    }
    position.y = position.y + velocity.y;
    if(position.y<0) {
      position.y=tileRows+position.y;
    } else if(position.y>=tileRows) {
      position.y=position.y-tileRows;
    }
  }
}

let robotPattern=[];
for(let row=0;row<tileRows;row++) {
  robotPattern.push(".".repeat(tileCols).split(""));
}

for(let robotId in robots) {
  let position=robots[robotId].position;
  if(robotPattern[position.y][position.x]===".") {
    robotPattern[position.y][position.x]=1;
  } else {
    robotPattern[position.y][position.x]++;
  }  
}

let q1Count=0;
for(let row=0;row<=((tileRows-1)/2)-1;row++) {
  for(let col=0;col<=((tileCols-1)/2)-1;col++) {
    if(robotPattern[row][col]!=".") {
      q1Count=q1Count+robotPattern[row][col];
    }
  }
}

let q2Count=0;
for(let row=0;row<=((tileRows-1)/2)-1;row++) {
  for(let col=((tileCols-1)/2)+1;col<=tileCols-1;col++) {
    if(robotPattern[row][col]!=".") {
      q2Count=q2Count+robotPattern[row][col];
    }
  }
}

let q3Count=0;
for(let row=((tileRows-1)/2)+1;row<=tileRows-1;row++) {
  for(let col=0;col<=((tileCols-1)/2)-1;col++) {
    if(robotPattern[row][col]!=".") {
      q3Count=q3Count+robotPattern[row][col];
    }
  }
}

let q4Count=0;
for(let row=((tileRows-1)/2)+1;row<=tileRows-1;row++) {
  for(let col=((tileCols-1)/2)+1;col<=tileCols-1;col++) {
    if(robotPattern[row][col]!=".") {
      q4Count=q4Count+robotPattern[row][col];
    }
  }
}

let robotPatternStr="";
robotPattern.forEach(function(patternRow) {
  robotPatternStr = robotPatternStr + patternRow.join("") + "\n";
});
preNode.innerText = robotPatternStr;

q1Count*q2Count*q3Count*q4Count;



//part2
let preNode=document.querySelector('pre');
let robotDetailsStr = preNode.innerText;
//let robotDetailsStr = "p=0,4 v=3,-3" + 
"\np=6,3 v=-1,-3" +
"\np=10,3 v=-1,2" +
"\np=2,0 v=2,-1" +
"\np=0,0 v=1,3" +
"\np=3,0 v=-2,-2" +
"\np=7,6 v=-1,-3" +
"\np=3,0 v=-1,-2" +
"\np=9,3 v=2,3" +
"\np=7,3 v=-1,2" +
"\np=2,4 v=2,-3" +
"\np=9,5 v=-3,-3\n";
//let tileRows=7;
//let tileCols=11;

let tileRows=103;
let tileCols=101;

let robots={};

robotDetailRows = robotDetailsStr.split("\n");
robotDetailRows.pop();

for(let robotId=0;robotId<robotDetailRows.length;robotId++) {
  let detailArr=robotDetailRows[robotId].split(" ");
  let positionStr=detailArr[0];
  let velocityStr=detailArr[1];
  let positionX=parseInt(positionStr.substring(2));
  let positionY=parseInt(positionStr.substring(positionStr.indexOf(",")+1));
  let velocityX=parseInt(velocityStr.substring(2));
  let velocityY=parseInt(velocityStr.substring(velocityStr.indexOf(",")+1));
  robots[robotId] = {"position":{"x":positionX,"y":positionY},"velocity":{"x":velocityX,"y":velocityY}};
}

let secondsCounter=0;
let secondsElement=document.createElement("span");
preNode.before(secondsElement);
secondsElement.innerText=secondsCounter;

let cntr=setInterval(function() {
  drawUpdatedPattern();
}, 1);

function drawUpdatedPattern() {
  for(let robotId in robots) {
    let position=robots[robotId].position;
    let velocity=robots[robotId].velocity;
    position.x = position.x + velocity.x;
    if(position.x<0) {
      position.x=tileCols+position.x;
    } else if(position.x>=tileCols) {
      position.x=position.x-tileCols;
    }
    position.y = position.y + velocity.y;
    if(position.y<0) {
      position.y=tileRows+position.y;
    } else if(position.y>=tileRows) {
      position.y=position.y-tileRows;
    }
  }

  let robotPattern=[];
  for(let row=0;row<tileRows;row++) {
    robotPattern.push(".".repeat(tileCols).split(""));
  }

  for(let robotId in robots) {
    let position=robots[robotId].position;
    if(robotPattern[position.y][position.x]===".") {
      robotPattern[position.y][position.x]=1;
    } else {
      robotPattern[position.y][position.x]++;
    }  
  }

  let symmetric=true;
  for(let row=0;row<=tileRows-1;row++) {    
    for(let col=0;col<=((tileCols-1)/2)-1;col++) {
      if(robotPattern[row][col]!=robotPattern[row][tileCols-1-col]) {
        symmetric=false;
        break;
      }
    }
    if(!symmetric) {
      break;
    }
  }

  secondsCounter++;
  secondsElement.innerText=secondsCounter;
  let robotPatternStr="";
  robotPattern.forEach(function(patternRow) {
    robotPatternStr = robotPatternStr + patternRow.join("") + "\n";
  });
  preNode.innerText = robotPatternStr;
  
  if(symmetric) {  
    clearInterval(cntr);
  }
}

//part2
let preNode=document.querySelector('pre');
let robotDetailsStr = preNode.innerText;
//let robotDetailsStr = "p=0,4 v=3,-3" + 
"\np=6,3 v=-1,-3" +
"\np=10,3 v=-1,2" +
"\np=2,0 v=2,-1" +
"\np=0,0 v=1,3" +
"\np=3,0 v=-2,-2" +
"\np=7,6 v=-1,-3" +
"\np=3,0 v=-1,-2" +
"\np=9,3 v=2,3" +
"\np=7,3 v=-1,2" +
"\np=2,4 v=2,-3" +
"\np=9,5 v=-3,-3\n";
//let tileRows=7;
//let tileCols=11;

let tileRows=103;
let tileCols=101;

let robots={};

robotDetailRows = robotDetailsStr.split("\n");
robotDetailRows.pop();

for(let robotId=0;robotId<robotDetailRows.length;robotId++) {
  let detailArr=robotDetailRows[robotId].split(" ");
  let positionStr=detailArr[0];
  let velocityStr=detailArr[1];
  let positionX=parseInt(positionStr.substring(2));
  let positionY=parseInt(positionStr.substring(positionStr.indexOf(",")+1));
  let velocityX=parseInt(velocityStr.substring(2));
  let velocityY=parseInt(velocityStr.substring(velocityStr.indexOf(",")+1));
  robots[robotId] = {"position":{"x":positionX,"y":positionY},"velocity":{"x":velocityX,"y":velocityY}};
}

let secondsCounter=0;
let secondsElement=document.createElement("span");
preNode.before(secondsElement);
secondsElement.innerText=secondsCounter;

let cntr=setInterval(function() {
  drawUpdatedPattern();
}, 1);

patterns={};
products={};
let maxProduct=1;
let minProduct=Infinity;
let maxSecond=0;
let minSecond=0;

function drawUpdatedPattern() {
  for(let robotId in robots) {
    let position=robots[robotId].position;
    let velocity=robots[robotId].velocity;
    position.x = position.x + velocity.x;
    if(position.x<0) {
      position.x=tileCols+position.x;
    } else if(position.x>=tileCols) {
      position.x=position.x-tileCols;
    }
    position.y = position.y + velocity.y;
    if(position.y<0) {
      position.y=tileRows+position.y;
    } else if(position.y>=tileRows) {
      position.y=position.y-tileRows;
    }
  }

  let robotPattern=[];
  for(let row=0;row<tileRows;row++) {
    robotPattern.push(".".repeat(tileCols).split(""));
  }

  for(let robotId in robots) {
    let position=robots[robotId].position;
    if(robotPattern[position.y][position.x]===".") {
      robotPattern[position.y][position.x]=1;
    } else {
      robotPattern[position.y][position.x]++;
    }  
  }

  let q1Count=0;
  for(let row=0;row<=((tileRows-1)/2)-1;row++) {
    for(let col=0;col<=((tileCols-1)/2)-1;col++) {
      if(robotPattern[row][col]!=".") {
        q1Count=q1Count+robotPattern[row][col];
      }
    }
  }
  
  let q2Count=0;
  for(let row=0;row<=((tileRows-1)/2)-1;row++) {
    for(let col=((tileCols-1)/2)+1;col<=tileCols-1;col++) {
      if(robotPattern[row][col]!=".") {
        q2Count=q2Count+robotPattern[row][col];
      }
    }
  }
  
  let q3Count=0;
  for(let row=((tileRows-1)/2)+1;row<=tileRows-1;row++) {
    for(let col=0;col<=((tileCols-1)/2)-1;col++) {
      if(robotPattern[row][col]!=".") {
        q3Count=q3Count+robotPattern[row][col];
      }
    }
  }
  
  let q4Count=0;
  for(let row=((tileRows-1)/2)+1;row<=tileRows-1;row++) {
    for(let col=((tileCols-1)/2)+1;col<=tileCols-1;col++) {
      if(robotPattern[row][col]!=".") {
        q4Count=q4Count+robotPattern[row][col];
      }
    }
  }

  secondsCounter++;
  secondsElement.innerText=secondsCounter;
  let robotPatternStr="";
  robotPattern.forEach(function(patternRow) {
    robotPatternStr = robotPatternStr + patternRow.join("") + "\n";
  });
  preNode.innerText = robotPatternStr;

  patterns[secondsCounter]=robotPatternStr;
  products[secondsCounter]=q1Count*q2Count*q3Count*q4Count;
  if(products[secondsCounter]>maxProduct) {
    maxProduct=products[secondsCounter];
    maxSecond=secondsCounter;
  }
  if(products[secondsCounter]<minProduct) {
    minProduct=products[secondsCounter];
    minSecond=secondsCounter;//occurs here due to leastspread
  }
  
  for(let second in patterns) {
    if(patterns[second]===robotPatternStr) {
      if(second!=secondsCounter) {
        clearInterval(cntr);
        secondsElement.innerText=minSecond;
        preNode.innerText = products[minSecond];
      }
    }
  }
}

