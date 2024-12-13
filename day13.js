//part1
let preNode=document.querySelector('pre');
//preNode.innerText = fieldInput;
let equationsInput = preNode.innerText;
//let equationsInput = "Button A: X+94, Y+34" +
"\nButton B: X+22, Y+67" +
"\nPrize: X=8400, Y=5400" +
"\n" +
"\nButton A: X+26, Y+66" +
"\nButton B: X+67, Y+21" +
"\nPrize: X=12748, Y=12176" +
"\n" +
"\nButton A: X+17, Y+86" +
"\nButton B: X+84, Y+37" +
"\nPrize: X=7870, Y=6450" +
"\n" +
"\nButton A: X+69, Y+23" +
"\nButton B: X+27, Y+71" +
"\nPrize: X=18641, Y=10279";

equationRows = equationsInput.split("\n");
let A={X:[],Y:[]};
let B={X:[],Y:[]};
let P={X:[],Y:[]};

for(let i=0;i<equationRows.length;i++) {
  let equationRow=equationRows[i];
  if(equationRow.startsWith("Button A: ") || equationRow.startsWith("Button B: ") || equationRow.startsWith("Prize: ")) {
    let x=parseInt(equationRow.substring(equationRow.indexOf("X")+2));
    let y=parseInt(equationRow.substring(equationRow.indexOf("Y")+2));
    if(equationRow.startsWith("Button A: ")) {      
      A.X.push(x);
      A.Y.push(y);
    } else if(equationRow.startsWith("Button B: ")) {
      B.X.push(x);
      B.Y.push(y);  
    } else if(equationRow.startsWith("Prize: ")) {
      P.X.push(x);
      P.Y.push(y);  
    }
  }  
}
