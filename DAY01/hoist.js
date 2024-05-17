/**
 * DAY 01: hoisting
 * DESCRIPTION: Understudying Hoisting in JavaScript
 * AUTHOR: Dalaktronixs
 * DATE: 17th May, 2024
 */

//Normal Declaration of Variable

var x = 3;
let y = 4;
const z = 56;

console.log(x)
console.log(y)
console.log(z)

/*
//Hoisting in Action
/*Beginning of a scope
{

console.log(digit1)
console.log(digit2) 
console.log(digit3)
// Declartion of the code as thus only works with var, but doesn't work with let and const the mechanism is called hoisting - Literaly=> lifting or raising something up with rope or strings
var digit1 = 4; // This does not print error, it only displays "undefined"
let digit2 = 5; // Reference error is flagged 
const  digit3 = 7; //Reference Error is flagged due to execution line before declaration of Variable 

}*/

//Hoisting in Function
//The function runs irrespective of top or bottom location of the function declaration
// function add(a,b){
//     return a + b;
// }

console.log(add(3,5));

function add(a,b){
    return a + b;
}

console.log(arrowadd(5,6));
const arrowadd=(a,b) => {
    return a + b;
}
//console.log(arrowadd(5,6));
/* let, and const doesn't support redeclaration of the same variable within the same scope
*
var w = 6;
var w = 7;
console.log(w);

/ */
