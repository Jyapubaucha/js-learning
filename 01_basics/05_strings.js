let name = "Deepak"
let age = "25"

//This is a old style so try not to use this.
// console.log(name + age + " is my details.")

//This is a latest style to concardinate the string
console.log(`My name is ${name} & age is ${age}`);

//here after a variable name "yourName" 
// .length, .toUpperCase and many more are the string methods 

const yourName = new String("Deepak-Maharjan")
// console.log(yourName[0])
// console.log(yourName.__proto__)

// console.log(yourName.length);
// console.log(yourName.toUpperCase());
// console.log(yourName.charAt(3));
// console.log(yourName.indexOf('e'));

//substring method
const newString = yourName.substring(0,5)
// console.log(newString)

//slice method
const anotherString = yourName.slice(-8,4)
// console.log(anotherString)

//trim method
const newStringOne = "     Deepak     "
// console.log(newStringOne);
// console.log(newStringOne.trim())

//replace method
const url = "https://deepak.com.np/deepak%20maharjan"
console.log(url.replace('%20','-'))

//includes method {results out with true or false}}
console.log(url.includes('deepak'));

// split method
console.log(yourName.split(''))