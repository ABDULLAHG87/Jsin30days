/**
 * DAY3: Understudying functions in JavaScript
 * DESCRIPTION: In this script I will be exploring various 
 * DATE: 19th May, 2024
 * Author: Dalaktronixs
 */

/**
 * Method of Declaration of Function
 * DECLARATION METHOD OR NOTATION
 * function func_name(...parameters) {
 *  statement ...
 * }
 * FUNCTION AS VALUE METHOD
 * type func_name = function(..parameters) {
 *  statement...
 * }
 * ARROW METHOD OR NOTATION
 * type func_name = (.parameter) => {
 *   statements...
 * }
 * 
 * IMMEDIATELY INVOKE FUNCTION EXPRESSION
 */
'use strict'
//Declaration of function
function message(){
    console.log("Hello, World");
}
//Invoking Functions
message();

let msg = function(){
    console.log("I Love JavaScript");
}

msg();

//The difference between the two above is the fact that the first method is hoisted.

function getMin (x, y) {
    let result = x < y ? x : y;
    return result;
}

console.log(`Minimum Value: ${getMin(4,5)}`);
console.log(`Minimum Value: ${getMin(6,2)}`);

const getMax = function(x,y) {
    let result = x > y ? x : y;
    return result;
}
console.log(`Max Value: ${getMax(4,5)}`);
console.log(`Max Value: ${getMax(6,2)}`);

//Using the Arrow Function Method

const getPow = (base, power) => {
    let result = base ** power;
    return result

}
console.log("*****POWER******")
console.log(`${getPow(4,5)}`);
console.log(`${getPow(6,2)}`);

//Declaration of IIFE function
//Deduction the IIFE can be given any name 
console.log((function IIFE (x, y) {
    return x + y;
})(4,5))

//Creating a Nested Function:
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredient_amount = amount * factor;
        if (ingredient_amount > 1) {
            unit +=  's'
        };
        console.log(`${ingredient_amount} ${unit} ${name}`)
    }
    ingredient(1, "can", "onion");
}
hummus(1);

//Basic Understanding of Closure
/**This is the feature of a function being able to reference specific instance of a variable in a local scope is called Closure 
 * 
 * A function that references bindings from local scopes around it is called a closure
*/
// Understand the concept of CALL STACK:
const multiplier = (factor) => {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(4));


 