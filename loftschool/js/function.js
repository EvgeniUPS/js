// function fn(a, b) {
//   var sum = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// console.log(fn(2, 5, 6));

/* ////////////////////////////////
//Способы объявления фунции

//Declaration  - объявление
function fn(a, b) {
  return a + b;
}

//Expression - выражение
var fn2 = function fn2(a, b) {
  return a + b;
};
console.log(fn(2, 2));
console.log(fn2(2, 2)); */

////////////////////////////////
//Замыкания и каррирование

function fn(otherFn) {
  otherFn();
}
// function declaration
function fn2() {
  console.log("Привет");
}
fn(fn2);
////
function fn(otherFn) {
  otherFn();
}
// function expression
fn(function fn2() {
  console.log("Привет");
});

////////////////////////////////
// стрелочные функции
/* function fn3() {
  console.log("Привет");
}
var fn4 = a => {
  console.log("Hello " + a);
  console.log("Hello " + a);
  console.log("Hello " + a);
};
var fn5 = a => console.log("Hello " + a);
fn4("world");
fn5("world");
fn(() => console.log("hi"));
var fn6 = () => console.log("eee");
fn(fn6);
fn6(); */
////////////////
var a = [1, 2, 3, 4, 5];

var a2 = a.map(function(number) {
  return number * number;
});
console.log(a);
console.log(a2);
