// const numbers = [100, 20, 35, 49, 52, 6, 74, 8, 19, 10];

// const fruits = ["Strawberry", "papaya", "Apple", "Watermelon", "kiwi"];

// numbers.sort((a,b)=>b - a);
// fruits.sort((a,b) => a.localeCompare(b));

//console.log(numbers); // output[  100, 74, 52, 49, 35,20, 19, 10,  8, 6]
//console.log(fruits); //output[ 'Apple', 'kiwi', 'papaya', 'Strawberry', 'Watermelon' ]

const numbers = [100, 20, 35, [[49, 52], 6], [74, [8, 19], 10]];
const flatNumber = numbers.flat(Infinity);
console.log(flatNumber); //output [  100, 20, 35, 49, 52,6, 74,  8, 19, 10]

const num = [100, 20, 10, [[20, 52], 6], [6, [8, 19], 10]];
const filterNum = [...new Set(num.flat(Infinity))];
console.log(filterNum); //output [100, 20, 10, 52, 6, 8, 19];
