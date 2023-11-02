//*  var keyword
var car;
var car = 'Honda' //global scope
//~ console.log(car)

//* let keyword ( ES6 ) Block Scope:
//* Does not support Hoisting : Let doe not support hoisting.
// TODO: What is Hoisting

let pain = 'Heartpain'
//~ console.log(pain)

function blockscope() { //let is block scope inside {} ; // calling the function inside block ;
    let coin = 'head'
    console.log(coin)
}
// console.log(coin) // calling the function outside block throws a Error 
//~ blockscope()

//* Global Scope
let num = 10; //global scope
//~ console.log(num)
function fun() { // call let global scope inside function
    console.log(num)
}
//~ fun() //calling the function


//* function scope.

function sum() {
    let num1 = 50;
    //~ console.log(num1)
}
sum() //calling the function 
//~ console.log(num1) //"ReferenceError: num is not defined

//* Redeclaring Variables in different blocks
let x = 40;
function redec() {
    let x = 50;
    //~ console.log(x); // 50
}
//~ console.log(x); // 40

//* Redeclaring Variables in the same blocks
let q = 98;
function sameblock() {
    let q = 38
    //~ console.log(q)
}
sameblock()
//! let q = 50; // Identifier 'q' has already been declared
    //~ console.log(q)

//* const keyword : 

//* the const variable cannot be reassigned.
const c = 12; // Assignment to constant variable.
//~ c = 10;
//~ console.log(c) // error

//*const variable which contains the Block Scope

const xx = 23;
{
    const xx = 60;
    //~ console.log(xx)
}
//~ console.log(xx)

//* the const variable and assigned it after declaration
//! const love; // Missing initializer in const declaration
//love = 38;

//* the const variable cannot be Hoisted
// TODO: What is Hoisting
xyz = 78;
//console.log(xyz);
//! const xyz; // Missing initializer in const declaration

//* the array values can be modified only reference to the array cannot be changed

const arr1 = ["pankaj", "sumit", "chandan", "ajay"];
//console.log(arr1.toString())
arr1[2] = "sribalan"
//console.log(arr1.toString())

//*  the object properties can be modified only reference to the object cannot be changed
const person = { 
    first_name: "Pankaj", 
    last_name: "Singh", 
    Age: 20, 
    About: "Web Developer and Competitive Programmer"
};

console.log(person)
person.first_name = "sri"
person.last_name = "balan"
person.Age = 22
person.About = "i am learning javascript right now"
console.log(person)

/* //*JavaScript var
//* Can be redeclared
//* Can be reassigned a value
//* Only have global and function scope
//* Variables are hoisted on top and can be used anywhere
//* Can be redeclared anywhere in the program
*/

/* //*JavaScript let
//* Cannot be redeclared
//* Can be reassigned a value
//* Can have a block scope
//* Variables must be initialized before use
//* Can be redeclared inside a block
*/ 

/* //*JavaScript const
//* Cannot be redeclared
//* Cannot reassign the value
//* Can have a block scope
//* Variables must be initialized before use
//* Variables must be initialized before use
*/ 

