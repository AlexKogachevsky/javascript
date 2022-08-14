const x = +prompt("enter x");

const y = +prompt("enter y");
const operation = prompt("choose operation (+,-,*,/)");
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
