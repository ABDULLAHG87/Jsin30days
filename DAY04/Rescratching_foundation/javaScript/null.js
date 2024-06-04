/**
 * RESCRATCHING FOUNDATION: NULL VS UNDEFINED 
 * DATE: 2nd April, 2024
 * */

// 1. NULL: It is a special value in JavaScript that represents "nothing", "empty" or "value unknown".
//Declaration of Null Variable or object
let username = null; //Initialization with null 
username = "Abdullahi"
if (username == null) {
    console.log("Please specify username")
} else {
    console.log(`username is ${username}`)
}

//2. UNDEFINED: This is a special value that represent variable declared with unassigned value
let variable;
console.log(variable);

//Null Coalescing: This is an operator which is used to resolve issue of undefined or null declared variable. They can be used when a default value is to be assigned when a variable is null or undeclared

const age = null;
const defaultAge = age ?? 18;
console.log(defaultAge);
//In the above code since the age is a null value then the defaultAge is 18

const usertype = "Admin"
const defaultUsertype = usertype ?? "Guest";
console.log(defaultUsertype);

function greet(name) {
    const defaultName = name ?? "Anonymous"
    console.log(`Hi, ${defaultName}`)
}
greet();
greet("Adam");