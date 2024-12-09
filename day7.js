//part1
//equationsInput = "190: 10 19\n3267: 81 40 27\n83: 17 5\n156: 15 6\n7290: 6 8 6 15\n161011: 16 10 13\n192: 17 8 14\n21037: 9 7 18 13\n292: 11 6 16 20\n";
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
            //oper.push(comb1+comb2);
            oper.push([comb1,comb2]);
        });
    });
    operators[ol]=oper;
}

let sumTestValues=0;
operands.forEach(function(operandsList, operandsListIndex) {
  let operations = operators[operandsList.length-1];
  let resultList = [];
  operations.forEach(function(operationsCombination) {
    let result = operandsList[0];
    for(let operatorIndex=0; operatorIndex<operationsCombination.length; operatorIndex++) {
      //debugger;
      if(operationsCombination[operatorIndex]==="+") {
        result = result + operandsList[operatorIndex+1];
      } else if(operationsCombination[operatorIndex]==="*") {
        result = result * operandsList[operatorIndex+1];
      }
    }
    resultList.push(result);
  });  
  if(resultList.includes(testValues[operandsListIndex])) {
    sumTestValues = sumTestValues + testValues[operandsListIndex];
  }
});
sumTestValues;




//part2
//equationsInput = "190: 10 19\n3267: 81 40 27\n83: 17 5\n156: 15 6\n7290: 6 8 6 15\n161011: 16 10 13\n192: 17 8 14\n21037: 9 7 18 13\n292: 11 6 16 20\n";
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

let operators1={1:["+","*"]};
for(let ol=2; ol<maxOperands; ol++){
    let oper=[];
    operators1[ol-1].forEach(function(comb1){
        operators1[1].forEach(function(comb2){
            oper.push([comb1,comb2]);
        });
    });
    operators1[ol]=oper;
}

let operators2={1:[" ","||"]};
for(let ol=2; ol<maxOperands; ol++){
    let oper=[];
    operators2[ol-1].forEach(function(comb1){
        operators2[1].forEach(function(comb2){
            oper.push([comb1,comb2]);
        });
    });
    operators2[ol]=oper;
}

let sumTestValues=0;
let missedValues=[];
let missedOperands=[];
operands.forEach(function(operandsList, operandsListIndex) {
  let operations = operators[operandsList.length-1];
  let resultList = [];
  operations.forEach(function(operationsCombination) {
    let result = operandsList[0];
    for(let operatorIndex=0; operatorIndex<operationsCombination.length; operatorIndex++) {
      //debugger;
      if(operationsCombination[operatorIndex]==="+") {
        result = result + operandsList[operatorIndex+1];
      } else if(operationsCombination[operatorIndex]==="*") {
        result = result * operandsList[operatorIndex+1];
      }
    }
    resultList.push(result);
  });  
  if(resultList.includes(testValues[operandsListIndex])) {
    sumTestValues = sumTestValues + testValues[operandsListIndex];
  } else {
    missedValues.push(testValues[operandsListIndex]);
    missedOperands.push(operandsList);
  }
});
sumTestValues;
