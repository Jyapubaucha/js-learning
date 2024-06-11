// +++++++++++++ Arrays +++++++++++++

//types of array declaration
const myArr = [0,1,2,3,4,5] // 1 
const myHeroes = ["Power Ranger", "Ninja Hattori", "Perman", "Doremon"] // 2
const myArr2 = new Array(1,2,3,4) // 3
// console.log(myArr[4])

//Array methods
//.push method
// myArr.push(6)
// myArr.push(7)

//.pop method
// myArr.pop() //remove last value from array

//.unshift and shift method
// myArr.unshift(0) //add the value in a arrays first index
// myArr.shift() //remove the first index value from array lists


//includes method
// it checks there is 7 is there is available on the array list or not
// if yes return true, otherwise false
// console.log(myArr.includes(7))

//indexOf method
//It shows, in which index the given value is indexed
// console.log(myArr.indexOf(5))


//join method
//helps to join arrays and convert array datatypes to string
// const newArr = myArr.join() 


// console.log(myArr)
// console.log(newArr)


// ++++++++++++ Slice / Splice ++++++++++++
console.log("A ", myArr)

const myNewArr1 = myArr.slice(1,3)
console.log(myNewArr1)
console.log("B ", myArr)

const myNewArr2 = myArr.splice(1,3)
console.log("C ",myArr)
console.log(myNewArr2)
