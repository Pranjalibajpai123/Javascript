// Primitive data types

// 7 types : String, Number, Boolean, BigInt, null, undefined(variable declare hai, memory space declare hai, but kya value ayegi bs vo nhi pata),Symbol
const score = 100   //no need to tell the datatype,it dynamically assigns the type based on value
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null  // typeof is "object"
let userEmail;  //undefined type

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 34567892344465477n

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "pranjali",
    age: 21,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);

console.log(typeof myFunction);  //typeof function is function, not exactly function but its "object function"

console.log(typeof heroes);



// Reference (Non-primitive)

// Array, Objects, Functions