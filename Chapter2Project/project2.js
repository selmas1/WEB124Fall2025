/* Selin Elmas
 09/10/2025
 Chapter 2 Project*/

var myName = "Selin Elmas";
var para1 = document.getElementById("p1");
para1.textContent = myName;


var n1 = 2;
var n2 = 9;
var numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

var numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

var myNameAddNum = myName + n1;
//document.getElementById("p4").textContent = myNameAddNum; // resulted in Selin Elmas2, fixed in the next line
document.getElementById("p4").textContent = String(n1) + String(n2); //numbers concat

var myNameMultNum = myName * n2; // NaN
document.getElementById("p5").textContent = myNameMultNum;

var myAge = 28;
var ageCompare = myAge >= numberMult;
document.getElementById("p6").textContent = ageCompare;
