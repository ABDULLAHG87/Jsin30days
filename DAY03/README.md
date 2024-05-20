## DAY01 OF JS IN 30 DAYS CHALLENGE

## CURRENT DATE: 
**19th May, 2024**

## GOAL/FOCUS OF THE DAY
`What are your major goals or focused for today?`

Cover all the basics related JavaScript. The basics covers the following topics:
* Arrays and Objects
* Functions  
* Data Structures in JavaScript

## TIME SPENT:
`write down estimated time spent in learning`

## MY ACHIEVEMENT/TOPICS COVERED
`What are your acheivements/ topic covered?, include links to resources used`
* I was able to understand the basics of functions and various types of functions.


## CHALLENGE FACED
```What are the challenges faced while learning and how did you solved it ? What are specific aspect or topics your find dificult to understand?Mention error encountered while coding and how you solved it```




## LEARNINGS/DEDUCTIONS
`While learning or performing your daily task what are concepts, facts learned?`

* Various ways of Creating Functions:
  * Declarative Notation
  * Function as Value Method
  * Arrow Notation 
  * Immediate Invoke Function Expression
* Understuding various special type of function
  * Nested Function
  * Closure Function
  * Recursive Function
* Understand the concept of CALL STACK, when a function is invoked, an stack 



## PRACTICE





## CODE SNIPPETS
### Creating Function using the Declarative Method
```JavaScript
function func_name (parameters) {
    statement 1;
    statement 2;
}
```
```JavaScript
function addDigit (digit1, digit2) {
    return digit1 + digit2;
}
```
### Creating Function using the Expression Notation
```JavaScript
type func_name  = function (parameters) {
    statement 1;
    statement 2;
}
```
```JavaScript
const getMin  = function (x,y) {
    let result;
    if x < y {
        result = x;
    }
    else result = y;
    return result;
}
```
### Immediate Invoke function Expression
```javaScript
(function func_name(parameter..) {
    statement(s);
})(value...)
```
```javaScript
(function getPower(base, power){
    return base ** power;
})(2, 3) //This should give 2^ 3 = 8 when printed in console
```

