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

let warehouse="########"+
"\n#..O.O.#"+
"\n##@.O..#"+
"\n#...O..#"+
"\n#.#.O..#"+
"\n#...O..#"+
"\n#......#"+
"\n########";

let warehouse="########"+
"\n#..O.O.#"+
"\n#.#.O@.#"+
"\n#...O..#"+
"\n#.#.O..#"+
"\n#...O..#"+
"\n#......#"+
"\n########";

let moves="<^^>>>vv<v>>v<<\n";

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
    let warehouseRow=warehousePattern[startRow];
    let nearestWallIndex=warehouseRow.lastIndexOf(wall,warehouseRow.lastIndexOf(robot)-1);
    for(let col=0;col<nearestWallIndex;col++) {
      if(warehouseRow[col]===space) {
        warehouseRow[col]=imaginaryWall;
      }
    }
    let nearestSpaceIndex=warehouseRow.lastIndexOf(space,warehouseRow.lastIndexOf(robot)-1);
    if(nearestSpaceIndex>0) {
      let hasBox=false;
      for(let col=nearestSpaceIndex;col<startCol;col++) {
        if(warehouseRow[col]===box) {
          hasBox=true;
          break;
        }
      }
      if(hasBox) {
        warehouseRow[nearestSpaceIndex]=box;
      }
      warehouseRow[startCol]=space;
      startCol--;
      warehouseRow[startCol]=robot;
    }
    for(let col=0;col<cols;col++) {
      if(warehouseRow[col]===imaginaryWall) {
        warehouseRow[col]=space;
      }
    }
    debugger;
  } else if(moves[i]==="^") {
    
  } else if(moves[i]===">") {
    
  } else if(moves[i]==="v") {
    
  }
}
