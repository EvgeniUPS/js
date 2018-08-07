console.log(true);
console.log(false);

console.log(5 === 5);
console.log(5 === 6);

console.log(Boolean(5));
console.log("");

console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log("");

console.log(true && false);
console.log(true && true);

console.log(true || false);
console.log(false || false);

console.log(!true);
console.log("");

var a = 0;
isTrue = false;
isTrue && (a = 2);
console.log(a);

var someString = "Non-empty string";
var newString = someString || "Default String";
console.log(newString);
