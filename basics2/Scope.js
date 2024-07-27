//let and const are block scoped variables and the {} are scopes 
// global variables can be accessed inside {} but the variables declared inside the {} cannot be accessed outside or globally

function one(){
    let username = "amat"
    function two(){
        let website = " youtube"
        return username + website//here the username can be accessed by func two
    }
console.log(two())
// console.log(website)//it wont get print because it is declared inside the func two whose variables access is not with func one 
}
 one()//func one needs to be called so that func two can be called 

 //function can be declared directly(like above) or by storing it in a variable i.e

//  functype2()//this will throw an error because t=func is stored in variable which cant be called before it is declared 
 const functype2 = function(){
    console.log("hello");
 }

 functype1()//function declared directly can be called before it is defined
 function functype1(){
    console.log("world");
 }

