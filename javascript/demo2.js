"use strict";
function add(num1, num2) {
    if (arguments.length == 1) {
        console.log(num1 + 100);
    }
    if (arguments.length == 2) {
        console.log(num1 + num2);
    }
}
add(10);
add(20, 30);
