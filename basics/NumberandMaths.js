//Numbers
let score = 400 
let balance = new Number(400)
// console.log(score);//400
// console.log(balance);// Number:400

// console.log(balance.toString().length);//converts the number into string and then string methods can be applied on it 
// console.log(balance.toExponential())
// console.log(balance.toFixed(1));//gives only fixed 1 digit after decimal i.e 400.0

const num1 = 123.456
// console.log(num1.toPrecision(4));//this will return the value by rounding it of as per your given parameter i.e 123.5

const num2 = 1000000
// console.log(num2.toLocaleString('en-IN'));//this will return the big number value with commas and the parameter will make it as per indian rupees system 


//Maths
// console.log(Math);
// console.log(Math.abs(-6));//converts negative number into positive
// console.log(Math.round(4.6));//round off the number 
// console.log(Math.ceil(4.2));//it will round off to the top number i.e 5
// console.log(Math.floor(4.9));// it will round off to the small number i.e 4
// console.log((Math.max(5 , 10, 3 , 7)));//10
// console.log((Math.min(5 , 10, 3 , 7)));//3

// console.log(Math.random());//returns a pseudorandom number between 0 and 1 
// console.log((Math.random()*10)+1);//multiplying by 10 means that it would give values from 0 to 10 and +1 would ensure that no 0 values is returned. 
// console.log(Math.floor((Math.random()*10)+1));//math.floor makes sure it gives the low number with a round off always 

//what if we have a range of numbers already given 
const max = 20 
const min = 10 
console.log(Math.floor(Math.random()* (max-min+1))); //max-min+1 = (20-10)+1 which is exactly what we did above by directly multiplying by 10
console.log(Math.floor((Math.random()* (max-min+1)) +min));// to make sure that numbers are in range of 10-20 we have to add the min which is 10 
