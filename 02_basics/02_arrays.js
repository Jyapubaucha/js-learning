const marvelHeroes = ["Thor","Ironman","Spideman"]
const dcHeroes = ["Superman","Flash","Batman"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes) //[ 'Thor', 'Ironman', 'Spideman', [ 'Superman', 'Flash', 'Batman' ] ]


// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes); // [ 'Thor', 'Ironman', 'Spideman', 'Superman', 'Flash', 'Batman' ]


// concat operator (...)
// It separates all arrays and merge again in a single array
const allNewHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(allNewHeroes)

// .flat method 
const anotherArray = [1,2,3,[4,5,6],7,[4,2,[9,7,5]]]
const realAnotherArray = anotherArray.flat(Infinity) //remove all arrray and list to single array
// console.log(realAnotherArray)

// isArray 
//checks it array or not
// console.log(Array.isArray("Deepak")) // True or false

// .from
//Change string data to array
// console.log(Array.from("Deepak")) //[ 'D', 'e', 'e', 'p', 'a', 'k' ]

//while passing object the form method cannot create and array
//we must define from which keys we want to create a array of string value 
console.log(Array.from({name: "Deepak"})) //interesting


// Array.of method
// Used to create an array from a variable
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))
