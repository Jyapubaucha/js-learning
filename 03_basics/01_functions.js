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
console.log(loginUserMessage())
