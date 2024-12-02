//part1
reportsInput = document.querySelector('pre').innerText;
reportsStr=reportsInput.split("\n");
reports = [];
reportsStr.forEach(function(reportStr) {
  levelsStr = reportStr.split(" ");
  report = [];
  levelsStr.forEach(function(levelStr) {
    level = parseInt(levelStr);
    if(!isNaN(level)) {
      report.push(level);
    }    
  });
  reports.push(report);
});
//console.log(reports);

reportsGradients = [];
reports.forEach(function(report) {
  levelGradients = [];
  for(let i=0; i<report.length-1; i++) {
    levelGradients.push(report[i]-report[i+1]);
  }
  reportsGradients.push(levelGradients);
});
//console.log(reportsGradients);

changedReportGradients = [];
for(let i = 0; i < reportsGradients.length; i++) {
  if(!reportsGradients[i].includes(0)) {
    changedReportGradients.push(reportsGradients[i]);
  }
}

safeReportsByGradientsDirection = [];
for(let i = 0; i < changedReportGradients.length; i++) {
  direction = 1;
  levelGradients = changedReportGradients[i];
  if(levelGradients[0]<0) {
    direction = -1;
  }
  let safeGradients = true;
  for(let j=1; j < levelGradients.length; j++) {
    if((direction * levelGradients[j])<0) {
      safeGradients = false;
      break;
    }
  }
  if(safeGradients) {
    safeReportsByGradientsDirection.push(levelGradients);
  }
}
//console.log(safeReportsByGradientsDirection);

safeGradients = [];
safeReportsByGradientsDirection.forEach(function(levelGradients) {
  absoluteLevelGradients = [];
  levelGradients.forEach(function(levelGradient) {
    absoluteLevelGradient = Math.abs(levelGradient);
    if(!absoluteLevelGradients.includes(absoluteLevelGradient)) {
      absoluteLevelGradients.push(absoluteLevelGradient);
    }
  });
  absoluteLevelGradients.sort();
  absoluteLevelGradients.reverse();
  if(!(absoluteLevelGradients[0]>3)) {
    safeGradients.push(absoluteLevelGradients);
  }
});
console.log(safeGradients.length);
  
