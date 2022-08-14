"use strict";
const x = +prompt("enter x");

const y = +prompt("enter y");
const operation = prompt("choose operation (+,-,*,/, a (average), b (geometric mean), // (remainder of the division))");
if (operation === "+") {
  alert(x + y);
}
if (operation === "-") {
  alert(x - y);
}
if (operation === "*") {
  alert(x * y);
}
if (operation === "/") {
  alert(x / y);
}
if (operation === "a") {
    alert((x + y ) / 2);
  }
  if (operation === "b") {
    alert(Math.sqrt(x * y));
  }
  if (operation === "//") {
    alert(x % y);
  }
