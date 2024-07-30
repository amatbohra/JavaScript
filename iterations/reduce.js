//reduce method
//it has first parameter as accumuator that needs to be initialized
//.reduce((acc,curr)=>(acc+curr),0)

// const numbers= [1,2,3]
// const total= numbers.reduce((acc,curr)=>
//     {console.log(`val of acc: ${acc} and val of curr: ${curr} `) 
//     return acc+curr},0)//curr is the current value of the array in loop and accumulator is intialized with 0
// console.log(total);//6

const books=[
    {genre:"romance",author:"lynn painter",name:"better than the movies",price:2000},
    {genre:"fantasy",author:"jk rowling",name:"harry potter",price:2005},
    {genre:"romance",author:"lynn painter",name:"the do over",price:2011},
    {genre:"thriller",author:"holly jackson",name:"good girls guide to murder",price:2010},
    {genre:"romance",author:"ana huang",name:"twisted hate",price:2016},
    {genre:"thriller",author:"holly jackson",name:"five survive",price:2004},
    {genre:"romance",author:"lynn painter",name:"happily ever after",price:2006},
]
const shoppingCart= books.reduce((acc,bk)=> acc+ bk.price,0)
console.log(shoppingCart);//14052