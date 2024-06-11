// ++++++++++++++ Date and Time ++++++++++++++//


let myDate = new Date();
// console.log(myDate) // 2024-06-11T07:35:24.833Z
// console.log(myDate.toString()) // Tue Jun 11 2024 07:35:24 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString()) // 2024-06-11T07:35:24.833Z
// console.log(myDate.toDateString()) // Tue Jun 11 2024
// console.log(myDate.toLocaleString()); // 6/11/2024, 7:38:11 AM

// //Date is an object
// console.log(typeof myDate)

// let createDate = new Date(2024,0,24); //month number count start with zero
// console.log(createDate.toDateString()) // Wed Jan 24 2024

// let createDate = new Date(2024,0,24,1,31); //date in single digit so the mnth count starts from zero
let createDate = new Date("2024-06-11"); // YY-MM-DD format
// console.log(createDate.toLocaleString()); //1/24/2024, 1:31:00 AM

//+++++++ Timestamp +++++++//
let myTimeStamp = Date.now() // 1718093069313
// console.log(myTimeStamp) // 1718092524478 miliseconds till this date
// console.log(createDate.getTime()) //get miliseconds til the above created date
// console.log(Math.floor(Date.now()/1000)) //get second till current date


let newDate = new Date();
// console.log(newDate)
// console.log(newDate.getMonth())
// console.log(newDate.getDay())

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))

