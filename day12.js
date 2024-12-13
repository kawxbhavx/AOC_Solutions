//part1 approach 1
let preNode=document.querySelector('pre');
//preNode.innerText = fieldInput;
let fieldInput = preNode.innerText;
//let fieldInput = "AAAA\nBBCD\nBBCC\nEEEC\n";
//let fieldInput = "OOOOO\nOXOXO\nOOOOO\nOXOXO\nOOOOO\n";
//let fieldInput = "RRRRIICCFF\nRRRRIICCCF\nVVRRRCCFFF\nVVRCCCJFFF\nVVVVCJJCFE\nVVIVCCJJEE\nVVIIICJJEE\nMIIIIIJJEE\nMIIISIJEEE\nMMMISSJEEE\n";
fieldRows = fieldInput.split("\n");
fieldRows.pop();
function generatePattern(patternRows) {
  let pattern=[];
  for(let row=0;row<patternRows.length;row++) {
    pattern.push(patternRows[row].split(""));
  }
  return pattern;
}

let pattern = generatePattern(fieldRows);
let plantTypes={};
let perimeters={};
let rows=pattern.length;
let cols=pattern[0].length;
for(let row=0;row<rows;row++) {
  for(let col=0;col<cols;col++) {
    if(plantTypes.hasOwnProperty(pattern[row][col])) {
      plantTypes[pattern[row][col]]=plantTypes[pattern[row][col]]+1;
    } else {
      plantTypes[pattern[row][col]]=1;
    }
    let cellPerimeter=4;
    if(row>0) {
      if(pattern[row][col]===pattern[row-1][col]) {
        cellPerimeter--;
      }
    }
    if(row<rows-1) {
      if(pattern[row][col]===pattern[row+1][col]) {
        cellPerimeter--;
      }
    }
    if(col>0) {
      if(pattern[row][col]===pattern[row][col-1]) {
        cellPerimeter--;
      }
    }
    if(col<cols-1) {
      if(pattern[row][col]===pattern[row][col+1]) {
        cellPerimeter--;
      }
    }
    if(perimeters.hasOwnProperty(pattern[row][col])) {
      perimeters[pattern[row][col]]=perimeters[pattern[row][col]]+cellPerimeter;
    } else {
      perimeters[pattern[row][col]]=cellPerimeter;
    }
  }
}

let price=0;
for(let plantType in plantTypes) {
  price = price + (plantTypes[plantType] * perimeters[plantType]);
}
price;


//part1 approach 2
//let preNode=document.querySelector('pre');
//preNode.innerText = fieldInput;
//let fieldInput = preNode.innerText;
//let fieldInput = "AAAA\nBBCD\nBBCC\nEEEC\n";
//let fieldInput = "OOOOO\nOXOXO\nOOOOO\nOXOXO\nOOOOO\n";
let fieldInput = "RRRRIICCFF\nRRRRIICCCF\nVVRRRCCFFF\nVVRCCCJFFF\nVVVVCJJCFE\nVVIVCCJJEE\nVVIIICJJEE\nMIIIIIJJEE\nMIIISIJEEE\nMMMISSJEEE\n";
fieldRows = fieldInput.split("\n");
fieldRows.pop();
function generatePattern(patternRows) {
  let pattern=[];
  for(let row=0;row<patternRows.length;row++) {
    pattern.push(patternRows[row].split(""));
  }
  return pattern;
}

let pattern = generatePattern(fieldRows);
let plantTypes={};
let perimeters={};
let rows=pattern.length;
let cols=pattern[0].length;

let areas=[];
for(let row=0;row<rows;row++) {
  let col=0;
  let area={"plantType":pattern[row][col],"startRow":row,"startCol":col};  
  for(col=1;col<cols;col++) {
    if(pattern[row][col]!=pattern[row][col-1]) {      
      area["endCol"]=col-1;
      areas.push(area);
      area={"plantType":pattern[row][col],"startRow":row,"startCol":col};
    }
  }
  area["endCol"]=col-1;
  areas.push(area);
}

areas.forEach(function(area) {
  let row=area.startRow+1;
  for(row;row<rows;row++) {
    if(pattern[row][area.endCol]!=pattern[row-1][area.endCol]) {
      area["endRow"]=row-1;
      break;
    }
  }
  if(!area.hasOwnProperty("endRow")) {
    area["endRow"]=row-1;
  }
});

let areasByPlantType={};
areas.forEach(function(area) {
  if(!areasByPlantType.hasOwnProperty(area.plantType)) {
    areasByPlantType[area.plantType]=[];
  }
  areasByPlantType[area.plantType].push(area);
  delete area.plantType;
});
              

for(let plantType in areasByPlantType) {
  let areas=areasByPlantType[plantType];
  for(let i=0;i<areas.length;i++) {
    for(let j=0;j<areas.length;j++) {
      if(i<areas.length) {
        if(i!=j) {
          let merged=false; 
          //debugger;        
          if(areas[i].endCol===areas[j].startCol) {
            areas[i].endRow=areas[j].endRow;
            merged=true;
          }         
          if(areas[i].endRow===areas[j].startRow) {
            areas[i].endCol=areas[j].endCol;
            merged=true;
          }
          if(merged) {
            areas.splice(j,1);
            j--;
          }
        }
      }
    }
  }
}


