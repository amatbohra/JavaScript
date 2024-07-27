//this is the keyword use to give reference of the current object like 
const user = {
    username:  "amatullah",
    price: 1000,

    welcomeMessage: function(){
        // console.log(`${this.username},welcome`);//this can be used only to reference an object in current context
        // console.log(this);//this will print the whole current context it is refering to which is here user object
    }
}
user.welcomeMessage()

// console.log(this);//here it would return {} but in browser "this" keyword will return window it is a global object there

function thisforfunc(){
    let username2 = "shalaka"
    // console.log(this);//this will print alot of values that are stored here
    console.log(this.username2);//undefined as functions cannot use "this" keyword
}
// thisforfunc()

//arrow function 

const arrowfunction = () => {
     {username:"amat"}
}
console.log(arrowfunction());//undefined due to without "return"

const arrowfunction2 = () => ({username:"amat"})
console.log(arrowfunction2())//{username: 'amat'} because if you use () then no need for return keyword

const addition = (num1 ,num2) => (num1 + num2)
console.log(addition(3,2));//5 it implicitly assumes that you want to return the value of num1 + num2 