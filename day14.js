//part1
let preNode=document.querySelector('pre');
//preNode.innerText = fieldInput;
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
"\np=9,5 v=-3,-3";
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

let robotPatternStr="";
robotPattern.forEach(function(patternRow) {
  
});
