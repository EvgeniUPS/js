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

/* function fn(otherFn) {
  otherFn();
}
// function declaration
function fn2() {
  console.log("Привет");
}
fn(fn2); */
////
/* function fn(otherFn) {
  otherFn();
}
// function expression
fn(function fn2() {
  console.log("Привет");
}); */

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
/* 
var a = [1, 2, 3, 4, 5];

var a2 = a.map(function(number) {
  return number * number;
});

console.log(a);
console.log(a2);

var a3 = a.map(n => n * n * n);
console.log(a3);
 */

/////////////

/* function fn(a, b) {
  return a + b;
}
console.log(fn(2, 8));

var fn2 = (x, y) => x + y;
console.log(fn2(4, 5));
 */
///////////////
/* function fn() {
  return "Hello";
}
console.log(fn);
console.log(fn());
 */

////////////////
////////////////
/* var c = 10;

function fn(a, b) {
  return a + b + c;
}
var result = fn(2, 4);
console.log(result); */

////////////
/* 
var a = 1;

function fn(b, c) {
  function fn2(d) {
    return a + b + c + d;
  }
  return fn2(1000);
}
console.log(fn(10, 100));
*/
/////////////////
/* var a = [1, 5, 7, 7, 4, 5, 34, 10];
function filter(arr, someFn) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (someFn(arr[i]) === true) {
      result.push(arr[i]);
    }
  }
  return result;
}
function greater(than) {
  return function(number) {
    return number > than;
  };
}

console.log(filter(a, greater(5)));
console.log(filter(a, greater(7)));

for (var i = 1; i < 10; i++) {
  var result = filter(a, greater(i));
  console.log(i, result);
} */

/* 
function greaterThan5(number) {
  return number > 5;
}
function greaterThan6(number) {
  return number > 6;
}
 */
// var result = filter(a, function(number) {
//   return number > 5;
// });

// console.log(filter(a, greaterThan7));
// console.log(filter(a, n => n > 7));

/////////////////
//Анонимные функции

// var fn = function() {};

//IIFE
(function(a) {
  console.log(a);
})("hello");
