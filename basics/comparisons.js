//comparisons > < >= etc works differently as compared to equality check 
// comparison convert the null into number and treat it as 0
// console.log(null>0);//false
// console.log(null>=0);//true

//comparison with null and undefined makes thngs confusing as it converts the datatypes and may define it with any values
//=== strict checks for both the value as well as the data type

console.log("2"== 2)//true
console.log("2"=== 2);//false