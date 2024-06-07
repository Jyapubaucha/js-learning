const accountId = 12345;
let accountEmail = "Deepak@gmail.com";
var accountPassword = "asdf";
accountCity = "Lalitpur";

let accountState;
/*
    Prefered not to use "var"
    Use only 'let' or 'const' variable
    because of issue in block scope and functional scope
*/


// accountId = 1; // not allowed

accountEmail = "Dm@gmail.com";
accountPassword = "jkl";
accountCity = "Kathmandu";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);