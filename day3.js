//part1
instructionsInput = document.querySelector('pre').innerText;
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
}
