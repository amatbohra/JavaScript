//for of

let arr=[10,3,5,7,9]
for (const i of arr) {
    // console.log(i);
}

const string="hello world"
for (const i of string) {
    if (i==" ") {
        continue
    }//to avoid the printing of space in string
    // console.log(i);//all characters will be printed one by one
}

//Maps
// they are known for their uniqueness which means same values doesnt get printed
//and they follow the order in which entries are written 
const map = new Map()
map.set('In',"India")
map.set('Fr',"France")
map.set('Pk',"Pakistan")
map.set('In',"India")//same value:not printed

// console.log(map);

//map in for of loop
for (const [key, values] of map) {
    // console.log(key ,":-" ,values);
}// [] are needed to access the key and values seperately

//object with for of loop

const obj = {
    game1: "stumble guys",
    game2: "temple run",
    game3: "subway surfers"
}

for (const o of obj) {
    console.log(o);
}//error , object is not iterable with for of loop