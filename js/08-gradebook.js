/*eslint-env browser*/
/*jslint plusplus: true*/

var ursula;
var paul;
var henry;
var tabitha;
var lucy;
var total = 0;
var average;

//prompt user for the test scores
ursula = window.prompt("enter ursula's points");
total += parseFloat(ursula);

paul = window.prompt("enter paul's points");
total += parseFloat(paul);

henry = window.prompt("enter henry's points");
total += parseFloat(henry);

tabitha = window.prompt("enter tabitha's points");
total += parseFloat(tabitha);

lucy = window.prompt("enter lucy's points");
total += parseFloat(lucy);

//calculate the average
average = total / 5;

//grade

//display the result
document.write("Ursula = " + average + "<br>");
document.write("Paul = " + average + "<br>");
document.write("Henry = " + henry + "<br>");
document.write("Tabitha = " + tabitha + "<br>");
document.write("Lucy = " + lucy + "<br>");
document.write("average " + parseFloat(average));