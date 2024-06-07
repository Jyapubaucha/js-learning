let score = "33as"

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score) //conversion to number
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

/* 
    "33" => 33
    "33as" => NaN
    true => 1; false => 0; 
*/

let isLoggedIn = 1; //1 => true, 0 => false, "Deepak" => true
let booleanIsLoggedIn = Boolean(isLoggedIn) //conversion to boolean
// console.log(booleanIsLoggedIn)

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ******************* Operations *******************
let value = 3;
let negValue = -value
// console.log(negValue) // -3
// console.log(typeof negValue) //number

// console.log(2+2) // => 4
// console.log(2-2) // => 0
// console.log(2*2) // => 4
// console.log(2**3) // => 8
// console.log(2/2) // => 1
// console.log(2%2) // => 0 (reminder)

let str1 = "Hello"
let str2 = " Deepak"
let str3 = str1 + str2
// console.log(str3) // str3 => Hello Deepak

// console.log(true)

let gameCounter = 100
++gameCounter;
console.log(gameCounter)

/*
    More to learn here:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
*/