//part1
instructionsInput = document.querySelector('pre').innerText;
instructions = [];
let pointer=0;
while(pointer<instructionsInput.length) {
  matchingIndex = instructionsInput.indexOf("mul(", pointer);
  instructions.push(instructionsInput.substring(matchingIndex, matchingIndex+30));
  pointer = matchingIndex + "mul(".length;
}
