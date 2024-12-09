//part1
equationsInput = document.querySelector('pre').innerText;
equations = equationsInput.split("\n");
equations.pop();
let testValues=[];
let operands=[];
let maxOperands=0;
equations.forEach(function(equation) {
  let operation=equation.split(":");
  testValues.push(parseInt(operation[0]));
  operandsStr=operation[1].split(" ");
  operandsStr.shift();
  operandsList = [];
  operandsStr.forEach(function(operand) {
    operandsList.push(parseInt(operand));
  });
  operands.push(operandsList);
  if(operandsList.length>maxOperands) {
    maxOperands=operandsList.length;
  }
});

let operators={1:["+","*"]};
for(let ol=2; ol<maxOperands; ol++){
    let oper=[];
    operators[ol-1].forEach(function(comb1){
        operators[1].forEach(function(comb2){
            oper.push(comb1+comb2);
        });
    });
    operators[ol]=oper;
}


console.log(operators);
