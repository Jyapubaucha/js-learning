function callMyName(){
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("K");
}


//Function call
// callMyName();

// function sumTwoNumber(number1, number2){
//     console.log(number1 + number2)
// }

function sumTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result 

    return number1 + number2;
    
}
const result  = sumTwoNumber(1,2)
// console.log("Result : " + result)

function loginUserMessage(username){
    //++++++ Method 1
    // if(username === undefined){
    //     console.log("Please enter a username.")
    //     return
    // }

    //++++++ Method 2
    if(!username){
        console.log("Please enter a username.")
        return
    }
    return `${username} is logged in.`
}
// console.log(loginUserMessage("Deepak"))
// console.log(loginUserMessage())


//Add values to a arrays using ... 
function calculateCartPrice(...num){
    return num;
}

// console.log(calculateCartPrice(200,300,500))


// Passing object to function

// const user = {
//     username: "Deepak",
//     age: 25
// }
// handleObject(user)

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`)
}
handleObject({
    username: "Deepak Maharjan",
    age: 30
})


// Passing array into function
// const newArray = [100,200,300,400]
// handleArray(newArray)

function handleArray(anyArray){
    console.log(`The given array is ${anyArray[2]}`)
}
handleArray([456,789,456,787])
