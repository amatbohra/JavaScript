//any datatype can be converted into another datatype but its value may not be of that type 
let score = "33abc"
// due to double quotes score is a string but lets convert it to a number
let valueInNumber = Number(score)
console.log(typeof score);//string
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//Nan=not a number

//"33"=> 33
// true=> 1; false=> 0
// null=> 0
// undefined=> Nan

//conversion to boolean
//1 => true; 0 => false
//"" => false
//"amat" => true