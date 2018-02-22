/*eslint-env browser*/
/*jslint plusplus: true*/
var x;
for (x = 0; x <= 15; x++) {
    if (x === 0) {
        window.console.log(x + " is even");
    } else if (x % 2 === 0) {
        window.console.log(x + " is even");
    } else {
        window.console.log(x + " is odd");
    }
}