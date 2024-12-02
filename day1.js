//Part1
locationIDsInput = document.querySelector('pre').innerText;
locationIDs=locationIDsInput.split("\n");
locationIDs1 = [];
locationIDs2 = [];
locationIDs.forEach(function(ids) {
  idsArr = ids.replace(/  +/g, ' ').split(" ");
  locationIDs1.push(parseInt(idsArr[0]));
  locationIDs2.push(parseInt(idsArr[1]));
});
locationIDs1.sort();
locationIDs2.sort();
distances = [];
locationIDs1.forEach(function(id, idIndex) {
  distance = Math.abs(locationIDs2[idIndex] - id);
  distances.push(distance);
});
totalDistance = 0;
distances.forEach(function(distance) {
  if(!isNaN(distance)) {
    totalDistance = totalDistance + distance;
  }
});
console.log(totalDistance);


//Part2
locationIDsInput = document.querySelector('pre').innerText
locationIDs=locationIDsInput.split("\n")
locationIDs.pop();
locationIDs1 = [];
locationIDs2 = [];
locationIDs.forEach(function(ids) {
  idsArr = ids.replace(/  +/g, ' ').split(" ");
  locationIDs1.push(parseInt(idsArr[0]));
  locationIDs2.push(parseInt(idsArr[1]));
});
frequencies  = [];
locationIDs1.forEach(function(id1) {
  idCount = 0;
  locationIDs2.forEach(function(id2) {
    if(id1 === id2) {
      idCount++;
    }
  });
  frequencies.push(idCount);
});
similarityScores = 0;
locationIDs1.forEach(function(id1, idIndex) {
  similarityScores = similarityScores + (id1 * frequencies[idIndex]);
});
console.log(similarityScores);
