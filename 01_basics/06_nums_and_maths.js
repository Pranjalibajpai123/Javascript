const score = 400 // automatically javascript gets that the type of score is number but sometimes we can define it explicitly too
// console.log(score);

// How to explicitly define the type in javascript
const scor = new Number(100)
// console.log(scor);

// So how to convert the type using method
// console.log(scor.toString()); // Now the type converts to string
// console.log(scor.toString().length);
// console.log(scor.toFixed(2)); //means sfter decimal two digits becomes fixed

const otherNumber = 235.97
// console.log(otherNumber.toPrecision(3)); //this method will round off the value upto 3 digits, and now the output will be 236

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // represents the number in UA standard that is hundred thousand
// SO to represent in india standard
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++=====Maths=====+++++++++++++++++++++++++++===

// console.log(Math); // In console we get so many values such as PI or abs
//console.log(Math.abs(-4)); //changes negative to positive
//console.log(Math.round(4.3));
//console.log(Math.ceil(4.2)); // takes the top value as the name suggests
//console.log(Math.floor(4.2)); // takes the lower value
//console.log(Math.min(4,3,2,1)); // same goes for max

console.log(Math.random()); //the value comes randomly between 0 and 1

console.log((Math.random() * 10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //to get value between the given range, +1 to avoid 0 value
