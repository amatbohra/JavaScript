//Immediately Invoked Function Expressions (IIFE)
//used for 2 reasons: 
// 1) saving the function getting polluted from the global variable 
// 2) execting the function directly without calling its name

//Syntax of IIFE: (function definition)() //second () is for its execution 

(function iife(){
    console.log(`I AM SAFE`);
})();// ";" is important to execute for the next iife function to run 
//arrow function can also get executed similarly 

((name) => {console.log(`bruh ${name}`);})("amat")

//INTERVIEW QUESTIONS
//named iife or unnamed iife(using =>)
// writing two iifes but ending the first one with ;
//how to pass parameter and arguments in iife arrow func