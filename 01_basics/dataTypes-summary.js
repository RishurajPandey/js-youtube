// Primitive 

// 7 types : String, NUmber, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // its value->undefined
//let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); //false
// const bigNumber = 3198236192836291836n

// Referance(Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "raj",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive) and Heap(Non-Primitive) memory

let myYoutubeName = "rajpandeydotcom"
let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "raj@google.com"

console.log(userOne.email);
console.log(userTwo.email);