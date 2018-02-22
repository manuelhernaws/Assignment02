/*eslint-env browser*/
/*jslint plusplus: true*/
var x;
for (x = 1; x <= 100; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
        window.document.write("marco polo");
    } else if (x % 3 === 0) {
            window.document.write("marco");
    } else if (x % 5 === 0) {
            window.document.write("polo");
        } else {
        window.document.write(x + "<br>");
    }
    window.document.write("<br>");
}