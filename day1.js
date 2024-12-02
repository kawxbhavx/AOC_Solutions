locationIDsInput = document.querySelector('pre').innerText
locationIDs=locationIDsInput.split("\n")
locationIDs1 = []
locationIDs2 = []
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
