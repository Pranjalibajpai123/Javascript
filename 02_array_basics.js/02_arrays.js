const marvelHeroes = ["thor", "Ironman", "spiderman"]
const movielHeroes = ["varun", "salman", "hrithik"]

// marvelHeroes.push(movielHeroes)
// console.log(marvelHeroes); //it took the whole array as a single element rather than combining all the elements so the output shows total 4 elements
// console.log(marvelHeroes[3][1]);

// Concat method: it combines the two arrays and gives the result in the third array
// so for concat we need a new array to hold the concatenation

const allHeroes = marvelHeroes.concat(movielHeroes)
// console.log(allHeroes);

// Now we have one more way to display individual values that is called spreading of values
const all_new_heroes = [...marvelHeroes, ...movielHeroes] //now this dot dot dot will automatically do it
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) // For flat method we need to define the depth (flat - depth?), to avoid giving proper depth we can give infinity as the depth
console.log(real_another_array);

// some methods that are used for data scraping are:
console.log(Array.isArray("Pranjali")) //output is boolean
console.log(Array.from("Pranjali"))
console.log(Array.from({name: "Pranjali"})) // it returns the empty array beacuse we need to specify as to make array of keys or values


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //Returns a new array from the set of elements
