//Singleton
// Object.create

//Object literals

let mySym = Symbol("Key1")
const JsUser = {
    name: "Deepak",
    "full name": "Deepak Maharjan",
    age: 25,
    location: "Lalitpur",
    email: "Deepak@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
    [mySym]: 'myKey1'
}

// console.log(JsUser.email) //not to use this
// console.log(JsUser["email"]) //Use this
// console.log(JsUser["full name"]) // if the data key is given with space we can retrive it like this
// console.log(JsUser[mySym])

// JsUser.email = "Deepak@deepak.com"
// // .freeze is use to freeze the change on the object data
// Object.freeze(JsUser)
// JsUser.email = "Deepak@haude.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user,  ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
