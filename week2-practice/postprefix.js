"use strict";

// Practice 1.
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

/*
a = 2
b = 2
c = 2
d = 1
*/

// Practice 2.
a = 2;
let x = 1 + (a *= 2);

// a = 4;
// x = 5;

// Practice 3.
// What are the results?
// "" + 1 + 0 = "10" // (1)
// "" - 1 + 0 = -1 // (2)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5" // (3)
// "  -9  " - 5 = -14 // (4)
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7)