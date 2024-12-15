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

let moves="<^^>>>vv<v>>v<<\n";

moves=moves.replaceAll("\n","");
