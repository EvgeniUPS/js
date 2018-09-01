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
var a = 3;
function fn2() {
  console.log("Привет");
}
fn(fn2);
