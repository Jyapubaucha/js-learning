// Immediately Invoked Function Expression (IIFE)

(function IIFE1(){
    //named IIFE ----- IIFE1 is a function name
    console.log("DB connected.");
})();

// Arrow function without function name
// Passing name to arrow function in IIFE

((name) => {
    console.log(`DB two connected. ${name}`)
})("Deepak");