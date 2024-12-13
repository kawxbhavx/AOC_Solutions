//part1
patternInput = "47|53\n97|13\n97|61\n97|47\n75|29\n61|13\n75|53\n29|13\n97|29\n53|29\n61|53\n97|53\n61|29\n47|13\n75|47\n97|75\n47|61\n75|61\n47|29\n75|13\n53|13\n\n" + 
  "75,47,61,53,29\n97,61,53,29,13\n75,29,13\n75,97,47,61,53\n61,13,29\n97,13,75,29,47\n";
//patternInput = document.querySelector('pre').innerText;
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

let validUpdates=[];
let invalidUpdates=[];
updates.forEach(function(updateList) {
  //debugger;
  let ruleViolated=false;
  for(let currentUpdateIndex=0;currentUpdateIndex<updateList.length-1;currentUpdateIndex++) {    
    let currentUpdate=updateList[currentUpdateIndex];
    for(let nextUpdateIndex=currentUpdateIndex+1;nextUpdateIndex<updateList.length;nextUpdateIndex++) {
      let nextUpdate=updateList[nextUpdateIndex];
      for(let ruleIndex=0;ruleIndex<rules.length;ruleIndex++) {
        let dependency=rules[ruleIndex][0];
        let dependent=rules[ruleIndex][1];
        if(dependent===currentUpdate) {
          if(dependency===nextUpdate) {
            ruleViolated=true;
            break;
          }
        }
      }
      if(ruleViolated) {
        break;
      }
    }
    if(ruleViolated) {
        break;
      }
  } 
  if(!ruleViolated) {
    validUpdates.push(updateList);
  } else {
    invalidUpdates.push(updateList);
  }
});
let validSum=0;
validUpdates.forEach(function(updateList) {
  validSum = validSum + updateList[parseInt(updateList.length/2)];
});
                     
//part2
function generateSortedRules(elements) {
  let applicableRules=[];
  elements.forEach(function(element) {
    rules.forEach(function(rule) {
      if(rule.includes(element)) {
        applicableRules.push(rule);
      };
    });
  });
  let parents=[];
  let children=[];
  applicableRules.forEach(function(rule) {
    parents.push(rule[0]);
    children.push(rule[1]);
  });
  children.forEach(function(child) {
    if(!parents.includes(child)) {
      parents.push(child);
      children.push(".");
    }
  });
  let sortedRules=[];
  while(parents.length>0) {
    //debugger;
    for(let i=0;i<parents.length;i++) {
      let node=parents[i];
      if(!children.includes(node)) {      
        sortedRules.push(node);
        for(let j=0;j<parents.length;j++) {
          if(parents[j]===node) {
            parents.splice(j,1);
            children.splice(j,1);
            j--;
          }
        }
      }
    }
  }
  return sortedRules;
}

let sortedUpdates=[];
invalidUpdates.forEach(function(updateList) {
  let sortedRules=generateSortedRules(updateList);
  let sortedUpdateList=[];
  sortedRules.forEach(function(rule) {
    if(updateList.includes(rule)) {
      sortedUpdateList.push(rule);
    }
  });
  sortedUpdates.push(sortedUpdateList);
});
