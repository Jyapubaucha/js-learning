// var c = 300

// Global Scope
let a = 300
let b = 250

if(true){
    // Local Scope
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Value of A is : ", a)
    // console.log("Value of B is : ", b)
}


// console.log(a)
// console.log(b)
// console.log(c)

//Parent scope can be logged by child
//But child scope cannot be logged by parent scope
function one(){
    const username = "Deepak"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "Deepak"
    if(username === "Deepak"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website);
}
//console.log(username)

// ================================= //
console.log(oneAdd(5));
function oneAdd(num){
    return num + 1;
}


// =================== Hoisting
// Hoisting log the value after the variable declaration not before variable declaration

// console.log(addTwo(5)) //Error occurs because the function is executed before variable declaration

// declared addTwo as variable as well as functions too
const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(5)) // This is a way to log the value
