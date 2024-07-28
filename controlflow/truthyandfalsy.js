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