//part1
let preNode=document.querySelector('pre');
//preNode.innerText = fieldInput;
let fieldInput = preNode.innerText;
//let fieldInput = "AAAA\nBBCD\nBBCC\nEEEC\n";
//let fieldInput = "OOOOO\nOXOXO\nOOOOO\nOXOXO\nOOOOO\n";
//let fieldInput = "RRRRIICCFF\nRRRRIICCCF\nVVRRRCCFFF\nVVRCCCJFFF\nVVVVCJJCFE\nVVIVCCJJEE\nVVIIICJJEE\nMIIIIIJJEE\nMIIISIJEEE\nMMMISSJEEE\n";
fieldRows = fieldInput.split("\n");
fieldRows.pop();
