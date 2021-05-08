// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var a;
var a; // Works fine.

let b;
let b; // SyntaxError: Identifier 'b' has already been declared

var c;
let c; // SyntaxError: Identifier 'c' has already been declared

const a = 42;
a = 43; // TypeError: Assignment to constant variable.

//properties can be still be changed
const obj = {};
obj.a = 42;
console.log(obj.a); // 42

var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined

// Both var and let are hoisted.

const a; // SyntaxError: Missing initializer in const declaration

//temporal deadzone
console.log(noTDZ); // undefined
var noTDZ = 43;
console.log(hasTDZ); // ReferenceError: hasTDZ is not defined
let hasTDZ = 42;

// Logs 3 thrice, not what we meant.
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

// Logs 0, 1 and 2, as expected.
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 0);
}

/**
 * Arrays comparision
 * https://masteringjs.io/tutorials/fundamentals/compare-arrays
 */

var a = 'Sruthi';
var b = 'Sruthi';
var c = a;
// console.log(a == b); //true - both refer the same string
// console.log(a == c); //true - passed by value


var a = [2];
var b = [2];
x = 2; //if 23 line was missing - code throws an error
var x;//if 22 was missing x is undefined
x= 3;
var c = [x];//new object created ,will never be equal to a and b

var d = a;
// console.log(a == b); //false - both refer the diff obj
// console.log(a == c); //false - both refer the diff obj//if 24 was commneted this returns false
// console.log(a == d); //true - both refer the same obj


var a = [{ answer: 42 }, { powerLevel: 9001 }];
var b = [{ id: 42 }, { powerLevel: 9001 }];
var c = a;
//object values are not compared
c[0]['answer'] = 43;
// false, because { answer: 42 } !== { answer: 42 }, different references
// console.log(a == b); //false - both refer the diff obj
// console.log(a === b); //false - both refer the diff obj
// console.log(a == c); //true - both refer the same array
// console.log(a === c); //true - both refer the same array


var a = [undefined];
var b = [null];
// console.log(a == b); //true - both refer the same string

//JSON.stringify() converts undefined to null.
// console.log(JSON.stringify(a) === JSON.stringify(b)); // true

var a = [1, 2, 3, 4];
var s = [1, 2, 3, 4];

// console.log(a == s); //false because new objects are created

var b = a.map(i => {
  return 2 * i;
});
var d = a.map(i => {
  return i;
});
var c = a;

// console.log(a);//[1,2,3,4]
// console.log(b);//[2,4,6,8]
// console.log(c);//[1,2,3,4]
// console.log(d);//[1,2,3,4]
//for === values and type must be same
//creating an array similar to other object => objects may look the same, but they do not point to the same instance
// there is no way that two arrays, or any object, can come out === being true unless they point to the exact same array.
// console.log(a===b);//false array.map creates a new object
// console.log(a==b);//false a and b have different values
// console.log(c==a);//true array is passed by reference
// console.log(c===a);//true array is passed by reference
// console.log(d==a);//false array.map creates a new object
// console.log(d==c);//false array is passed by reference

var a = ['as', 'ds'];
var b = a;
var c = ['as', 'ds'];
b == a; //will return true; (doesn't matter if it's == or === for non primitive types)
b == c; //will return false;
a == c; //will return false

var a = {};
var b = {};
// console.log(a);
// console.log(b);

// console.log(a == b); // false both are diff objects
// console.log(a === b); // false both are diff object

// var arr1 = [{ id: 2 }];
// console.log(arr1);
// console.log(arr1[0]);

// var arr1 = arr2;
// console.log(arr1 === arr2);
// console.log(arr1[0] === arr2[0]);

// const a1 = function a(id) {
//   var a = id;
//   console.log(this);
// };

// a1(2);

