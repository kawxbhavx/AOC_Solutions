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
let maxOperators=maxOperands-1;
let operators=["+","*"];
let operatorsCombinations=[...operators];
for(let max=4;max>0;max++) {  
  for(let i=0;i<operators.length;i++) {
    for(let j=0;j<operatorsCombinations.length;j++) {
      operatorsCombinations.push(operators[i] + operatorsCombinations[j]);
    }
  }
}
