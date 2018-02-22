/*eslint-env browser*/
/*jslint plusplus: true*/
var i, j;
for (i = 7; i >= 1; i--) {
    var hashTag = "";
    for (j = i; j <= 7; j++) {
        hashTag += "#";
    }
    window.console.log(hashTag);
}

