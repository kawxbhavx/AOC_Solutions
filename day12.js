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
      //if(i<areas.length) {
        if(i!=j) {
          // let merged=false; 
          // //debugger;        
          // if(areas[i].endCol===areas[j].startCol) {
          //   areas[i].endRow=areas[j].endRow;
          //   merged=true;
          // }         
          // if(areas[i].endRow===areas[j].startRow) {
          //   areas[i].endCol=areas[j].endCol;
          //   merged=true;
          // }
          // if(merged) {
          //   areas.splice(j,1);
          //   j--;
          // }

          let area1=areas[i];
          let area2=areas[j];
          /*if(area2.startCol<=area1.endCol+1) {
            if(!(area1.endRow<area2.startRow && area1.startRow>area2.endRow)) {
              area1.startRow=Math.min(area1.startRow,area2.startRow);
              area2.startRow=Math.min(area1.startRow,area2.startRow);
              area1.endRow=Math.max(area1.endRow,area2.endRow);
              area2.endRow=Math.max(area1.endRow,area2.endRow);
              area1.startCol=Math.min(area1.startCol,area2.startCol);
              area2.startCol=Math.min(area1.startCol,area2.startCol);
              area1.endCol=Math.max(area1.endCol,area2.endCol);
              area2.endCol=Math.max(area1.endCol,area2.endCol);
            }
          }
          if(area2.startRow<=area1.endRow+1) {
            if(!(area1.endCol<area2.startCol && area1.startCol>area2.endCol)) {
              area1.startRow=Math.min(area1.startRow,area2.startRow);
              area2.startRow=Math.min(area1.startRow,area2.startRow);
              area1.endRow=Math.max(area1.endRow,area2.endRow);
              area2.endRow=Math.max(area1.endRow,area2.endRow);
              area1.startCol=Math.min(area1.startCol,area2.startCol);
              area2.startCol=Math.min(area1.startCol,area2.startCol);
              area1.endCol=Math.max(area1.endCol,area2.endCol);
              area2.endCol=Math.max(area1.endCol,area2.endCol);
            }
          }*/

          if(
            (!(area1.endRow<area2.startRow || area1.startRow>area2.endRow || area1.endCol<area2.startCol || area1.startCol>area2.endCol)) || 
            (((area1.endRow+1===area2.startRow) || (area2.endRow+1===area1.startRow)) && ((area1.startCol<=area2.endCol) || (area2.startCol<=area1.endCol))) ||
            (((area1.endCol+1===area2.startCol) || (area2.endCol+1===area1.startCol)) && ((area1.startRow<=area2.endRow) || (area2.startRow<=area1.endRow)))
          ) {
            area1.startRow=Math.min(area1.startRow,area2.startRow);
            area2.startRow=Math.min(area1.startRow,area2.startRow);
            area1.endRow=Math.max(area1.endRow,area2.endRow);
            area2.endRow=Math.max(area1.endRow,area2.endRow);
            area1.startCol=Math.min(area1.startCol,area2.startCol);
            area2.startCol=Math.min(area1.startCol,area2.startCol);
            area1.endCol=Math.max(area1.endCol,area2.endCol);
            area2.endCol=Math.max(area1.endCol,area2.endCol);
          }
        }
      //}
    }
  }
}


//part1 approach 3
let preNode=document.querySelector('pre');
//preNode.innerText = fieldInput;
let fieldInput = preNode.innerText;
// let fieldInput = 
//   "AAAA\n" + 
//   "BBCD\n" +
//   "BBCC\n" +
//   "EEEC\n";
// let fieldInput = 
//   "OOOOO\n" +
//   "OXOXO\n" +
//   "OOOOO\n" +
//   "OXOXO\n" +
//   "OOOOO\n";
// let fieldInput = 
//   "RRRRIICCFF\n" +
//   "RRRRIICCCF\n" +
//   "VVRRRCCFFF\n" +
//   "VVRCCCJFFF\n" +
//   "VVVVCJJCFE\n" +
//   "VVIVCCJJEE\n" +
//   "VVIIICJJEE\n" +
//   "MIIIIIJJEE\n" +
//   "MIIISIJEEE\n" +
//   "MMMISSJEEE\n";
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
let rows=pattern.length;
let cols=pattern[0].length;
let cells=[];
let marker=0;

for(let row=0;row<rows;row++) {
  marker++;
  cells.push({
    "id":row*cols,
    "row": row,
    "col":0,
    "marker":marker,
    "plantType": pattern[row][0]
  });
  for(let col=1;col<cols;col++) {
    if(pattern[row][col]!=pattern[row][col-1]) {
      marker++;
    }
    cells.push({
      "id":((row*cols)+col),
      "row": row,
      "col":col,
      "marker":marker,
      "plantType": pattern[row][col]
    });
  }
}

for(let row=rows-1;row>0;row--) {
  for(let col=cols-1;col>=0;col--) {
    if(pattern[row][col]===pattern[row-1][col]) {
      let currentCell=getCellByRowCol(row,col);
      let upperCell=getCellByRowCol(row-1,col);
      let currentCellMarker=currentCell.marker;
      let upperCellMarker=upperCell.marker;
      for(let i=0;i<cells.length;i++) {
        if(cells[i].marker===currentCellMarker) {
          cells[i].marker=upperCellMarker;
        }
      }
    }
  }
}

function getCellByRowCol(row,col) {
  for(let i=0;i<cells.length;i++) {
    if(cells[i].row===row && cells[i].col===col) {
      return cells[i];
    }
  }
}

let areas={};
for(let i=0;i<cells.length;i++) {
  if(areas.hasOwnProperty(cells[i].marker)) {
    areas[cells[i].marker].push(cells[i]);
  } else {
    areas[cells[i].marker]=[cells[i]];
  }
}

let markers=Object.keys(areas);
let markerAreas={};
for(let i=0;i<markers.length;i++) {
  markers[i]=parseInt(markers[i]);
  markerAreas[markers[i]]=areas[markers[i]].length;
}
let markerIndex=0;

let cntr=setInterval(function() {
  drawPattern(markers[markerIndex]);  
}, 200);

let perimeters={};

function drawPattern(marker) {
  //debugger;
  let blankPattern=[];
  pattern.forEach(function(patternRow) {
    blankPattern.push(".".repeat(cols).split(""));
  });

  for(let row=0;row<rows;row++) {
    for(let col=0;col<cols;col++) {
      let cell=getCellByRowCol(row,col);
      if(cell.marker===marker) {
        blankPattern[row][col]=cell.plantType;        
      }
    }
  }
  

  let filteredPatternStr="";
  blankPattern.forEach(function(patternRow) {
    filteredPatternStr = filteredPatternStr + patternRow.join("") + "\n";
  });
  preNode.innerText = filteredPatternStr;

  markerIndex++;
  if(markerIndex===markers.length) {
    clearInterval(cntr);
  }
}
