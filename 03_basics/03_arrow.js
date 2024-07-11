// this key can only be use inside the objects

const user = {
    username: "Deepak",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Ram"
// user.welcomeMessage()
// console.log(this)

//this key word cannot be use inside a function
// result = undefined
function testThisKeyWord(){ //regular function
    let username = "Deepak"
    console.log(this.username)
}
// testThisKeyWord()

const user1= function(){ //regular function with same name variable
    let username = "Deepak"
    console.log(this.username)
}
// user1()

const user2 = () => { //arrow function
    let username = "Deepak"
    console.log(this)
}
// user2();

//------------------- Explcit return
// It required return keyword inside culry bracket {}
// const addTwoNumber = (num1,num2) => {
//     return num1 + num2;
// }
// console.log(addTwoNumber(5,2));

//------------------- Implicit return
// It doesnot required return keyword and culry bracket {}
// Paranthasis bracket can be use `()`
// const addTwoNumber = (num1, num2) => num1 + num2 //without small bracket
const addTwoNumber = (num1,num2) => (num1 + num2) //using small bracket //mostly use in react js
console.log(addTwoNumber(5,6));
