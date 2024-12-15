//part1
let patternInput = document.querySelector('pre').innerText;
let warehouse=patternInput.substring(0,patternInput.lastIndexOf("#")+1);
let moves=patternInput.substring(patternInput.lastIndexOf("#")+1);

//let warehouse="##########"+
"\n#..O..O.O#"+
"\n#......O.#"+
"\n#.OO..O.O#"+
"\n#..O@..O.#"+
"\n#O#..O...#"+
"\n#O..O..O.#"+
"\n#.OO.O.OO#"+
"\n#....O...#"+
"\n##########";

//let moves="<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^"+
"\nvvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v"+
"\n><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<"+
"\n<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^"+
"\n^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><"+
"\n^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^"+
"\n>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^"+
"\n<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>"+
"\n^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>"+
"\nv^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^\n";

//let warehouse="########"+
"\n#..O.O.#"+
"\n##@.O..#"+
"\n#...O..#"+
"\n#.#.O..#"+
"\n#...O..#"+
"\n#......#"+
"\n########";

//let moves="<^^>>>vv<v>>v<<\n";

moves=moves.replaceAll("\n","");

let warehousePattern=[];
warehouse.split("\n").forEach(function(warehouseRow) {
  warehousePattern.push(warehouseRow.split(""));
});

let startRow=0;
let startCol=0;
let rows=warehousePattern.length;
let cols=warehousePattern[0].length;

let robot="@";
let wall="#";
let imaginaryWall="I";
let box="O";
let space=".";

for(startRow=0;startRow<rows;startRow++) {
  let rowFound=false;
  for(startCol=0;startCol<cols;startCol++) {
    if(warehousePattern[startRow][startCol]===robot) {
      rowFound=true;      
      break;
    }
  }
  if(rowFound) {
    break;
  }
}

for(let i=0;i<moves.length;i++) {
  if(moves[i]==="<") {
    let warehouseRow=[...warehousePattern[startRow]];
    generateMove(warehouseRow);
    warehouseRow.forEach(function(element,index) {
      warehousePattern[startRow][index]=element;
    });
    startCol=warehouseRow.indexOf(robot);
  } else if(moves[i]==="^") {
    let warehouseRow=[];
    for(let row=0;row<rows;row++) {
      warehouseRow.push(warehousePattern[row][startCol]);
    }
    generateMove(warehouseRow);
    warehouseRow.forEach(function(element,index) {
      warehousePattern[index][startCol]=element;
    });
    startRow=warehouseRow.indexOf(robot);
  } else if(moves[i]===">") {
    let warehouseRow=[...warehousePattern[startRow]];
    warehouseRow.reverse();
    generateMove(warehouseRow);
    warehouseRow.reverse();
    warehouseRow.forEach(function(element,index) {
      warehousePattern[startRow][index]=element;
    });
    startCol=warehouseRow.indexOf(robot);
  } else if(moves[i]==="v") {
    let warehouseRow=[];
    for(let row=0;row<rows;row++) {
      warehouseRow.push(warehousePattern[row][startCol]);
    }
    warehouseRow.reverse();
    generateMove(warehouseRow);
    warehouseRow.reverse();
    warehouseRow.forEach(function(element,index) {
      warehousePattern[index][startCol]=element;
    });
    startRow=warehouseRow.indexOf(robot);
  }
}

function generateMove(patternRow) {
  let nearestWallIndex=patternRow.lastIndexOf(wall,patternRow.lastIndexOf(robot)-1);
  for(let col=0;col<nearestWallIndex;col++) {
    if(patternRow[col]===space) {
      patternRow[col]=imaginaryWall;
    }
  }
  let nearestSpaceIndex=patternRow.lastIndexOf(space,patternRow.lastIndexOf(robot)-1);
  if(nearestSpaceIndex>0) {
    let hasBox=false;
    let robotCol=patternRow.indexOf(robot);
    for(let col=nearestSpaceIndex;col<robotCol;col++) {
      if(patternRow[col]===box) {
        hasBox=true;
        break;
      }
    }
    if(hasBox) {
      patternRow[nearestSpaceIndex]=box;
    }
    patternRow[robotCol]=space;
    robotCol--;    
    patternRow[robotCol]=robot;
  }
  for(let col=0;col<cols;col++) {
    if(patternRow[col]===imaginaryWall) {
      patternRow[col]=space;
    }
  }
}

let gpsSum=0;
for(let row=1;row<rows-1;row++) {
  for(let col=1;col<cols-1;col++) {
    if(warehousePattern[row][col]===box) {
      gpsSum=gpsSum+((row*100) + col);
    }
  }
}
console.log(gpsSum);

let patternOutput="";
warehousePattern.forEach(function(patternRow) {
  patternOutput = patternOutput + patternRow.join("") + "\n";
});
document.querySelector('pre').innerText=patternOutput;

//part2
let scaledWarehouse=warehouse.replaceAll("#","##");
scaledWarehouse=scaledWarehouse.replaceAll("O","[]");
scaledWarehouse=scaledWarehouse.replaceAll(".","..");
scaledWarehouse=scaledWarehouse.replaceAll("@","@.");
document.querySelector('pre').innerText=scaledWarehouse;
