//for in
const obj = {
    game1: "stumble guys",
    game2: "temple run",
    game3: "subway surfers"
}
for (const key in obj) {
    // console.log(obj[key]);//syntax to get values only 
    // console.log([key]);//syntax to get keys only 
}//now here object is iterable using for-in loop

// array with for-in will return the index values when directly passed unlike with for-of 

const arr= ["hello","world","blabla"]
for (const key in arr) {
    console.log(key);//0,1,2
    console.log(arr[key]);
}
//map wont be iterable with for-in loop

