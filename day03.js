//part1
/*instructionsInput = document.querySelector('pre').innerText;
instructions = [];
let pointer=0;
//debugger;
let startMul="mul(";
let maxPattern="999,999)";
while(pointer<instructionsInput.length) {
  matchingIndex = instructionsInput.indexOf(startMul, pointer) + startMul.length;
  instructionsPart1 = instructionsInput.substring(matchingIndex, matchingIndex + maxPattern.length);
  console.log(instructionsPart1);
  pointer = matchingIndex;
}*/
instructionsInput = document.querySelector('pre').innerText;
instructions = instructionsInput.match(/mul\([0-9]{1,3},[0-9]{1,3}\)/g);
result = 0;
instructions.forEach(function(instruction) {
  instruction = instruction.replace("mul(","");
  instruction = instruction.replace(")","");
  params = instruction.split(",");
  number1 = parseInt(params[0]);
  number2 = parseInt(params[1]);
  result = result + (number1*number2);
});
console.log(result);

//part2
instructionsInput = document.querySelector('pre').innerText;
instructions = instructionsInput.match(/do\(\)|don't\(\)|mul\([0-9]{1,3},[0-9]{1,3}\)/g);
result = 0;
enabled=true;
instructions.forEach(function(instruction) {
  if(instruction === "do()") {
    enabled=true;
  } else if(instruction === "don't()") {
    enabled=false;
  } else {
    if(enabled) {
      instruction = instruction.replace("mul(","");
      instruction = instruction.replace(")","");
      params = instruction.split(",");
      number1 = parseInt(params[0]);
      number2 = parseInt(params[1]);
      result = result + (number1*number2);
    }
  }
});
console.log(result);
