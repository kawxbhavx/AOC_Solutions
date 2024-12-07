//part1
patternInput = document.querySelector('pre').innerText;
pattern = patternInput.split("\n");
let rulesStr = [];
let updatesStr = [];
for(let row=0;row<pattern.length-1;row++) {
  let patternStr = pattern[row];
  if(patternStr.includes("|")) {
    rulesStr.push(patternStr);
  }
  if(patternStr.includes(",")) {
    updatesStr.push(patternStr);
  }
}
let rules=[];
rulesStr.forEach(function(rule) {
  let ruleList = [];
  rule.split("|").forEach(function(ruleEntry) {
    ruleList.push(parseInt(ruleEntry));
  });
  rules.push(ruleList);
});
let updates=[];
updatesStr.forEach(function(update) {
  let updateList = [];
  update.split(",").forEach(function(updateEntry) {
    updateList.push(parseInt(updateEntry));
  });
  updates.push(updateList);
});
