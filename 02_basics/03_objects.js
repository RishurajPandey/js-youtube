// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "raj", //name: "raj" -> {name} is like a string
    "full name": "Rishuraj Pandey", // can't be accessed by dot method
    age: 18,
    [mySym]: "myKey1",
    location: "Jaipur",
    email: "raj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) //  one way to access
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "raj@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "raj@microfost.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
