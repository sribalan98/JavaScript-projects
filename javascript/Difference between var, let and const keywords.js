
//! var
//* example 1
//* global : it can be accessible everywhere in the program.
var a = 10;
function f() {
    // console.log(a)
}
f()
// console.log(a)

//* example 2
//* The variable ‘a’ is declared inside the function. If the user tries to access it outside the function, it will display the error. Users can declare the 2 variables with the same name using the var keyword. Also, the user can reassign the value into the var variable. The output is shown in the console.

function f1() {
    var a1 = 80;
    //console.log(a)
}
f1()
//console.log(a1) // ReferenceError: a1 is not defined

//* example 3
//* The user can re-declare the variable using var and the user can update the var variable. The output is shown in the console.

var a2 = 20;
var a2 = 50;
a2 = 8;
// console.log(a2)

//* example 4
/* //* If users use the var variable before the declaration, it initializes with the undefined value. The output is shown in the console. */
//console.log(a3)
var a3 = 20 //undefined

//! let
//* The let keyword is an improved version of the var keyword. Scope: block scoped: The scope of a let variable is only block scoped. It can’t be accessible outside the particular block ({block}). Let’s see the below example.

//* example 1 
//* The output is shown in the console.

let age = 22; // global scope
function fun() {
    let nextyear = 23; //  block scope
    // console.log(age) 
    // console.log(nextyear) 
}
fun()

//* example 2
//* The code returns an error because we are accessing the let variable outside the function block. The output is shown in the console.
let a4 = 10;
function err() {
    if (a == 10) {
        let b4 = 100;
        // console.log(b4);
    }
    //console.log(b4) //b4 is not defined
}
err()
// console.log(a4)

//* example 3
//* Users cannot re-declare the variable defined with the let keyword but can update it.
//let a5 = 10; //cannot redeclare block-scope variable  // Identifier 'a5' has already been declared
let a5 = 15;
a5 = 20; 

//* example 4
//* Users can declare the variable with the same name in different blocks using the let keyword.
let a6 = 4;
if (true) {
    let a6 = 5;
    // console.log(a6) //5
}
// console.log(a6) //4

//* example 5
//* If users use the let variable before the declaration, it does not initialize with undefined just like a var variable, and returns an error.
//console.log(a7)
let a7 = 10; //Cannot access 'a7' before initialization


//! const
//* The const keyword has all the properties that are the same as the let keyword, except the user cannot update it.
//* Scope: block scoped: When users declare a const variable, they need to initialize it, otherwise, it returns an error. The user cannot update the const variable once it is declared. 

//* example 1
//*  We are changing the value of the const variable so that it returns an error. The output is shown in the console.

const a8 = 98
function ae() {
     a8 = 5; // Assignment to constant variable.
    // console.log(a8) 
}
//ae()

//* example 2
//* Users cannot change the properties of the const object, but they can change the value of the properties of the const object.

const money = {
    paper1 : 10,
    paper2 : 20
}
// It is allowed
money.paper1 = 50

// It is not allowed
// money = { // Uncaught SyntaxError:Unexpected identifier
//     paper1: 10,
//     paper2: 9
// }
console.log(money)