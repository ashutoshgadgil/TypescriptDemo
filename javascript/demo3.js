"use strict";
function display() {
    var restParam = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        restParam[_i] = arguments[_i];
    }
    console.log(restParam.join(" "));
}
display("Hello");
display("Hello", " Typescript");
display("Hello", " Hi", " Welcome");
display("Hello", " Javascript", " Typescript", " NodeJS");
