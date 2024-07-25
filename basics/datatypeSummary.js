// datatypes are divided on the concept of how thwy are stored in a memory and how they are accessed

// primitive datatypes or call by value datatypes are the one whose copy is provided to us and we make changes in that copy not the original one 
// these are of 7 types: string , number, null , undefined, BigInt, boolean, symbol 

const id1 = Symbol("123")
const id2 = Symbol("123")
console.log(id1===id2)//false because symbol stores the value uniquely even if values are same for two different ids 
// for bigInt you can convert any big number like this i.e 38438748374847n


// Non primitive or call by reference directly gives you the memory allocation of the variables 
// these are of 3 types: Array, object, function 

let array = [1 ,2 ,3]
console.log(typeof array);//object

let obj1 = {
    name :"amat",
    age: 20
}
console.log(typeof obj1)//object

const abs = function(){
    console.log("hello")
}
console.log(typeof abs);//function