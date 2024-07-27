function hello(){
    console.log("hello amat");
}
// hello()//with paranthesis the function gets executed..without it the name is just a reference

function addTwoNumbers(numb1,numb2){
    return numb1 + numb2
    console.log("hello");//you see this wont be printed because once return is done in function its execution is completed
}
// console.log(addTwoNumbers())//without passing arguments it will return NaN
// console.log(addTwoNumbers(5,5))//10

function User(username="sam"){
    if(username===undefined){
        console.log("please enter username");//this will be print if no arguments id passed by user
        return //this will ensure that after this nothing get executed
    }
    return `hello ${username}`
}
// console.log(User());//hello sam as we have passed a default value in function definition parameter so even though there are no arguments in calling the function it will still have value to print

//now a case where you dont know how many parameters you need to pass in a function. for eg: a shopping cart where customer can add as many items they want 
//using rest operator ...parameter
function CalculateCartItems(...num1){
    return num1
}
console.log(CalculateCartItems(200,400,300,600));//as we passed a rest parameter it will combine all the arguments as one array. 

//accessing objects in functions
const obj = {
    name: "amat",
    college: "terna"
} 

function WithObject(anyobject){
    return `hello ${anyobject.name} of ${anyobject.college} College `
}
//now we made a generalised function which can be used to accessed any objects having same properties 
console.log(WithObject(obj));//hello amat of terna college
console.log(WithObject({name: "kashish",college: "terna"}));//can directly pass an object as arg as well

//accessing arrays in functions 
const arr1 = [2000,400,399,299]
function WithArray(getanyarray){
    return getanyarray[2]
}
console.log(WithArray(arr1));//399