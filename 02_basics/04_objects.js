const tinderUser  = {}

tinderUser.id = "145asd"
tinderUser.name = "Ram"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userFullname:{
            firstName: "Some",
            lastName: "One"
        }
    }
}
// console.log(regularUser.fullname.userFullname);

const obj1 = {1: "a", 2: "b"}   
const obj2 = {3: "a", 4: "b"}   

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [{
    id: 1,
    email: "d@gmail.com"
}]

// console.log(users[0].email) //get data from users array and objectss

console.log(tinderUser);

console.log(Object.keys(tinderUser)) // get keys of an object
console.log(Object.values(tinderUser)) //get values from an object
console.log(Object.entries(tinderUser)) //get all the data what an object has

console.log(tinderUser.hasOwnProperty('isLoggedIn')) //check the object has a property or not
