/*const tinderUser = new Object()   //This is a Singleton object
console.log(tinderUser); //it gives the empty object in the form of {} */
//and another way to declare an object is: 
const tinderUser2 = {}    //This is a non-Singleton object
//Both gives the same output and the only difference is that
tinderUser2.id = "123abc"
tinderUser2.name = "Pranjali"
tinderUser2.isLoggedIn = false
// console.log(tinderUser2); //output is in the format { id: '123abc', name: 'Pranjali', isLoggedIn: false }


// We can perform nesting as much as we want inside the object
const regularUser = {
    email: "pranjalibajpai7755@gmail.com",
    userfullname: {
        firstname: "pranjali",
        lastname: "Bajpai",
    }
}
//console.log(regularUser.userfullname); //This way we access the internal nesting of the object. Also, if we need to check whether userfullname is present or not the we use this syntax console.log(regularUser.userfullname?);

// To merge two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 ={obj1,obj2}
// console.log(obj3); //it faces same problem as we were seeing in arrays that in combines the whole as one element

//To combine both objects we use very interesting syntax
/*const obj3 = Object.assign(obj1,obj2) //A minor syntax change is Object.assign({},obj1,obj2) -> it does not changes the result but is good to write
console.log(obj3); */
// Object.assign() copies all the enumerable own properties from one or more source object and combines it into a target object
// Object.assign({},obj1,obj2) This {} is the target object and obj1,obj2 this represnts the source object
//But we will only use this method for combining of the object in 10 percent cases
//The method to combine object will be:

const obj3 = {...obj1, ...obj2}
console.log(obj3); //The best method


//Multiple objects inside the array, question asked how to access the certain element or loop through the array
const user = [
    {
        id: 1,
        gmail: "pranjalibajapi77552gmail.com", 
    },
    {
        id: 2,
        gmail: "bajapi77552gmail.com", 
    },
    {
        id: 3,
        gmail: "77552gmail.com", 
    }
]
//Either to access use loop by users.map or
console.log(user[1].gmail);
console.log(tinderUser2);
//Now what we should remember is how to access the keys of the object and then after we get all the keys stored in an array we can simply run a loop
console.log(Object.keys(tinderUser2));
console.log(Object.values(tinderUser2)); //same way we can extract the values
console.log(Object.entries(tinderUser2)); //each key-value pair comes in the form of array

//To check whether a certain property is present in an object or not
console.log(tinderUser2.hasOwnProperty('isLoggedIn'));