// var c = 300

// Global Scope
let a = 300
let b = 250

if(true){
    // Local Scope
    let a = 10
    const b = 20
    // var c = 30
    console.log("Value of A is : ", a)
    console.log("Value of B is : ", b)
}


console.log(a)
console.log(b)
// console.log(c)