# sorax

04.
http://bonsaiden.github.io/JavaScript-Garden/ru/

typeof
console.log(typeof "98908");

toUpperCase()
console.log("Sorax".toUpperCase());

05.
toFixed()
console.log(variable.toFixed(2));
console.log(78 .toFixed(2));

toExponential()
console.log(n.toExponential(4));

toPrecision()
console.log(n.toPrecision(3));

Math.sqrt()
console.log(Math.sqrt(25));

Math.pow()
console.log(Math.pow(3,5));

Math.PI
console.log(Math.PI);
Math.E
console.log(Math.E);

06.
Управляющие последовательности
Экранирование ковычек
console.log("Some \"long\" string");
Перевод строки, табуляция
console.log("Another \n\tvery long \n\t\t string");

.length
console.log("c".length);

Конкатенация(сложение строк)
var string = "Hello";
console.log(string + " world");

charAt(0)
string = "Sometimes the same is different";
console.log(string.charAt(0)); //S
console.log(string.charAt(string.length - 1)); //t

.substring()
console.log(string.substring(10)); //the same is different
console.log(string.substring(10, 21)); //the same is

.slice()
console.log(string.slice(-10)); // different

.substr()
console.log(string.substr(14, 4)); //same

.indexOf()
console.log(string.indexOf("i")); //5

.lastIndexOf()
console.log(string.indexOf("me")); //16

.replace()
console.log(string.replace("is", "is not"));

.split()
console.log(string.split(" "));

.toUpperCase()
console.log(string.toUpperCase());
.toLowerCase()
console.log(string.toLowerCase());

07.
&& - логическое И
console.log(true && false); //false
console.log(true && true); //true

var a = 0;
isTrue = false;
isTrue && (a = 5);
console.log(a);

|| - логическое ИЛИ
console.log(true || false); //true
console.log(false || false); //false

var someString = "Non-empty string";
var newString = someString || "Default String";
console.log(newString);

! - логическое отрицание
console.log(!true); //false
