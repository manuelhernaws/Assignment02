/*eslint-env browser*/

var coinFlip = Math.round(Math.random() * 2);
var userSelect = window.prompt("pick heads or tails");
var choice = userSelect;

if (choice === "heads") {
    if (coinFlip < 0.5) {
        window.document.write("The flip was heads and you chose heads...you win!");
    } else {
        window.document.write("The flip was tails but you chose heads...you lose!");
    }
} else if (choice === "tails") {
    if (coinFlip > 0.5) {
        window.document.write("The flip was tails and you chose tails...you win!");
    } else {
        window.document.write("The flip was heads but you chose tails...you lose!");
    }
}
    