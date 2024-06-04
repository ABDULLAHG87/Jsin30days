/**
 * USING THE SYMBOL DATATYPES;
 * DATE: 2nd June, 2024
 */

//Symbols are primitive datatypes which are unique and immutable and are usually used as key value to objects

const symbol1 = Symbol();
const symbol2 = Symbol('Description');

let obj = {};
obj[symbol2] = 'Hello';

console.log(obj);

