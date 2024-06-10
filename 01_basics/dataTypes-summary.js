// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol,BigInt(For large number value)


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) //result is false. They are not same


const bigNumber = 56464464646464646464464n; // big int



// Non-primitive (Reference)
//Array, Objects, Functions

//array
const heros = ["Shaktiman", "Ninja Hattori", "Power Rangers"];

//Object
let myObj = {
    name: "Deepak",
    age: 24,
}

//Function
const myFunction = function(){
    console.log("Helloworld!!")
}

//try and see the result running all values of above
console.log(typeof myObj)

/*
    Learn more from here:
        https://262.ecma-international.org/5.1/#sec-11.4.3
*/



// +++++++++++++ Memory +++++++++++++++++++++++++++++++++ //

// Types of memory
// Stack (Primitive), Heap (Non-primitive)


//Stack
let myName = "Deepak Maharjan"
let anotherName = myName
anotherName = "Jyapu Baucha"

console.log(myName);
console.log(anotherName);

//Heap
let userOne = {
    email: "User1@gmail.com",
    address: "Lalitpur"
}
let userTwo = userOne
userTwo.email = "UserTwo"

console.log(userOne.email)
console.log(userTwo.email)