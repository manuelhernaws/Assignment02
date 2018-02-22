/*eslint-env browser*/
var coinFlip;
var i;
for (i = 0; i < 10; i += 1) {
    coinFlip = parseInt(Math.random() * 2, 0);
}
if (coinFlip === 0) {
    window.console.log("heads");
} else if (coinFlip === 1) {
    window.console.log("tails");
}