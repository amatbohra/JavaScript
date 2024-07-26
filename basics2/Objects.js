//objects can be made by 2 ways: literals or constructor. When it is made using const it is also becomes singleton...the same doesnt happens with literals
// Object.create(OBJ1) //CONSTRUCTOR
const mySym = Symbol("key1")
const obj2 = {
    name: "amat",
    age:20,
    email: "amatbohragmail.com",
    [mySym]: "mykey1",
    whenloggedin: ["monday","saturday"],
    "full name": "AMATULLAH BOHRA"
}
//there are 2 ways to access object elements 
// console.log(obj2.email);
// // console.log(obj2.mysym);//undefined as symbol cant be accessed like this 
// console.log(typeof obj2[mySym]);//mykey1 right way to access symbol
// console.log(obj2["full name"]);//because of space you cant access it with first way

obj2.email = "amatgamil.com"
// Object.freeze(obj2)
// obj2.email = "sahagamail.com"//this wont apply as obj got freezed above making it not changable
// console.log(obj2);


//using functions with objs
obj2.greeting = function(){
    console.log("hello obj2");
}
console.log(obj2.greeting());

obj2.greeting2 = function(){
    console.log(`hello ${this.name}`);//this is used to give reference of the same object and using its properties 
}
console.log(obj2.greeting2());