// array

const myArr = [0, 1 , 2, 3, 4, 5, true, "pranjali"]
// The array is a object as in other programming languages that stores multiple 
// inter under a single variable

console.log(myArr[0]); // zero based indexing

// Note for interview: Javascript array-copy operations create SHALLOW COPIES instead of DEEP COPIES
// Shallow copy: A shallow copy of an object is a copy whose properties share the same refrences as those of the source pointfrom which the copy was made
// Deep copy: A deep copy of an object is a copy whose properties do not share the same refrences as those of the source point from which the copy was made

// more method to declare array

const myHeroes = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4) // automatically generates square bracket
console.log(myArr[1]);

// Array methods
myArr.push(6)
myArr.push(7)
myArr.pop(); // pushes the element into array
console.log(myArr);

// unshift method : pushes the element at the start of the array
myArr.unshift(9);
console.log(myArr);

// shift operation removes an element from the start of array
myArr.shift();
console.log(myArr);

// includes method has a datatype boolean true/false wheather the element present or not
// indexOf method returns -1 if value not present other returns the index
// join method changes the type of array to string
const newArr = myArr.join()
console.log(myArr);
console.log(newArr); // values are binded and changed datatype
console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // take 1, 2 but not 3

console.log(myn1);

const myn2 = myArr.spice(1, 3) // take 1, 2 but not 3

console.log(myn2); //Difference between slice and splice is that slice do not manipulate the original array but splice does manipulate the original array

