const arr1=[1,2,3,4,5,6,7,8,9,10]
// const variable = arr1.map((num) => (num>5))
// console.log(variable);//[false,false....,true,true,true,true,true]

// const variable = arr1.map((num)=>num+10)
// console.log(variable);//[11,12,13,14,15,16,17,18,19,20]

//nested loops 
const numbers = arr1.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>50)
console.log(numbers);//[51,61,71,81,91,101]