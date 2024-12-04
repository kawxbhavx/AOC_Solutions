//part1
patternInput = document.querySelector('pre').innerText;
pattern = patternInput.split("\n");
pattern.pop();
for(let row = 0;row<pattern.length;row++) {
  for(let col = 0;col<pattern[0].length;col++) {
    console.log(pattern[row][col]);
  }
}
