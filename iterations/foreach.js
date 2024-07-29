//for each

const coding=["js","java","python","c++","ruby"]
// coding.forEach((item)=> {console.log(item);})//the concept of for-each revolves around function which not need to be named or a directly defined function can be called by its name 

function print(val){
    console.log(val);
}
// coding.forEach(print)
// coding.forEach((item,index,arr)=> {console.log(item,index,arr);})

//calling properties from object that are stored in array with for-each

const array=[
    {language:"javascript",filename:"js"},
    {language:"typescript",filename:"ts"},
    {language:"python",filename:"py"}
]

array.forEach((item)=>{console.log(item.filename)})