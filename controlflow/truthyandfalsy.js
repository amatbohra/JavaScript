//letsee which values are directly consider as truth and which are considered as false 
const user = []//considered true
if(user){
    console.log("considered true");
}else{
    console.log("considered false");
}

//falsy values 
// false, 0 , -0 , "", null, undefined, NaN, BigInt 0n

//truthy values
//"0","false"," ",[], {}, function(){}

//how to find if array or object is empty 
const arr = []
if (arr.length === 0) {
    console.log("Array is empty");
}
const obj = {}
if(Object.keys(obj).length===0){
    console.log("Object is empty");//accessing keys makes it return array which further can be aplied length property of array to compare it with 0 
}

// Nullish Coalescing Operator(??)
const questlike = null??10
console.log(questlike);//10 gets printed...it is used in the case where u dont want null value to return and you have to keep other backup

//terniary operator(?)
// condition? true{}:false{}
const isprice = 20
isprice <= 20 ? console.log("yes price is less than or equal to 20"): console.log("price is more than 20");