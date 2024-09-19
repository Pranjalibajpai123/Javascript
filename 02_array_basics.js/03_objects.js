// To declare objects, we have two methods 1. As Literals 2. As constructor

// Singleton
// When we declare object as a literal then singleton is X not made
// When we declare object as a constructor then singleton is made

// To declare as a constructor
// Object.create

// Object Literals

const mysym = Symbol("key1") //we declared the type of mysym as Symbol
// To declare object:
const JsUser ={
    name: "Pranjali",
    "full name": "Pranjali Bajpai",
    mysym: "mykey1",
    age: 21,
    location: "Kanpur",
    email: "pranjalibajpai7755@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

//console.log(JsUser.email); //To access data from the object we use this but we have another method too: here we need not to specify the email is a string but
//console.log(JsUser[email]); //this is wrong as it needs to be specified that the email is a string
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]); //here when full name is specified as string then it won't even take the dot syntax
//console.log(typeof JsUser.mysym); // it is accessed as string and we want its type to be symbol so we do put a square braces  for mysym under the object
// [mysym]: "mykey1",
// and access it as console.log(JsUser[mysym]);

// How to change values of the element in the object
JsUser.email = "30485.csaiml@gmail.com"
// Object.freeze(JsUser)  // After object freezing changes are not made
JsUser.email = "7755.csaiml@gmail.com"
//console.log(JsUser)

// Now I am declaring a function
JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}


//console.log(JsUser.greeting); //the output comes as [Function (anonymous)] 
console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo());



