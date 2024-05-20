/**
 * DAY01: Working With Strings
 * DESCRIPTION: Understudying various String Concept
 */

//Declaration of strings in JavaScript
//METHOD ONE: using single quote
let user_name = "Dalaktronixs";
//METHOD TWO: using the Double Quotes
let email = 'hakeemabdullah87@gmail.com';
//METHOD THREE: using the backtick method (aka Template Literals)
let message = `Welcome to Dalaktronixs Research Group`;

//OUTPUT: 
console.log(user_name);
console.log(email);
console.log(message);

//VARIOUS WAYS OF USING THE TEMPLATE LITERALS
//Embed JavaScript
console.log(`My username is ${user_name}`)

//Using Special Characters with using the escape sequence
let msg = `My email address is "${email}"`;
console.log(msg);

//Multiple line declaration with using the \n escape sequence
quote = `To Err is Human, we all make mistake once in a life time
                                                --Dalaktronixs`;

console.log(quote);

//Various Methods will using Strings
//Coercion or typecasting of other data types to strings:
let age = 32;
console.log(typeof age)
let age_str = String(age);
console.log(typeof age_str);

//Determination of length of a string
let size = user_name.length;
console.log(size);
//Determination of substring of a string
console.log(email.includes('gmail')); // 
//Transversing through a string
console.log(user_name.slice(5));
//Determination of Index of element of a String
let user = "Dalaktronixs";
console.log(user.indexOf('x'));
//Concatenating Strings using + operator 


//Code To determine Number of Occurence of a Letter:
    console.log(user.indexOf('x'));

