const marvel = ["ironman","thor","captainAmerica"]
const dc = ["superman","batman","flash"]
// marvel.push(dc)//this will merge the second array as a single 4th element of the 1st array
// console.log(marvel[3][1])//this will give you batman
// console.log(marvel.concat(dc));//this will merge both the arrays 

//better way to merge arrays is using spread operator 
const newheroes = [...marvel, ...dc]
// console.log(newheroes);

//to simplify a complex array like arr[arr[arr]] we can use flat method
const array1 = [1,[2,3],5,[4,[6,7]]]
const array2 = array1.flat(Infinity)//parameter passed is the depth at which you want to check for arrays
// console.log(array2);

//diff conversions to array 
console.log(Array.isArray("amat"));
console.log(Array.from("amatullah"));//converts any value in array form if it is convertable 
console.log(Array.from({name: "amat"}));//this will return empty brackets as you have to specify if you want keys array or values array

const score1=300
const score2=400
const score3=500

console.log(Array.of(score1,score2,score3));