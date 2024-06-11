//+++++++++++ Number Library +++++++++++//

const score = 400;
// console.log(score)


const balance = new Number(100);
// console.log(balance);

//toString method 
//Used to convert number to string and use string properties like length
// console.log(balance.toString().length)

//toFixed method (mostly used to show price in e-commerce)
//Used to get the how much decimal to show 
// console.log(balance.toFixed(2))

//toPercision method
const otherNumber = 1234.8966
// console.log(otherNumber.toPrecision(4))


//toLocaleString method
//Example: 10,000,000 (universal)
//Go to link and use your standard: 
//https://www.w3schools.com/jsref/jsref_tolocalestring.asp
const hundreds = 10000000
//universal standard
// console.log(hundreds.toLocaleString())

//indian currency standard
// console.log(hundreds.toLocaleString('en-IN'))

//bangladesh standard
// console.log(hundreds.toLocaleString('bn-BD'))



//+++++++++++ Maths Library +++++++++++//
// console.log(Math)

// .abs method
// convert negative value to positive
// positive remains same positive
// console.log(Math.abs(-10))

// .round method
// round off the decimal
// console.log(Math.round(10.6))

//.min method
// choose which number is minimum
// console.log(Math.min(5,1,8,3,4,7))

//.max method
// choose which number is maximum
// console.log(Math.max(5,1,8,3,4,7))



// Math.random() method tricks
console.log(Math.random()); //it generates number between 0-1

//the generated no in multiply by 10 to get number before decimal
// +1 is added to avoid the number if 0 will be number before decimal
console.log((Math.random()*10) + 1) 

//Above algorithm is wrap into Math.floor to get the number avoiding decimal
console.log(Math.floor((Math.random()*10) + 1)) 

//Program to get number from random no between the min and max value
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

