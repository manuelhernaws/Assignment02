/*eslint-env browser*/
var firstNumber = window.prompt("pick a Number");
var secondNumber = window.prompt("pick a second number");
if (firstNumber < secondNumber){
    window.document.write(secondNumber);
} else if(secondNumber < firstNumber){
     window.document.write(firstNumber);
} else if(secondNumber === firstNumber){
    window.document.write("Pick two different numbers");
}