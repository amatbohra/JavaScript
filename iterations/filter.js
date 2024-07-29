const numbers=[1,2,3,4,5,6,7,8,9,10]
const val = numbers.filter((num)=>{return num>5})
// console.log(val);

const books=[
    {genre:"romance",author:"lynn painter",name:"better than the movies",year:2000},
    {genre:"fantasy",author:"jk rowling",name:"harry potter",year:2005},
    {genre:"romance",author:"lynn painter",name:"the do over",year:2011},
    {genre:"thriller",author:"holly jackson",name:"good girls guide to murder",year:2010},
    {genre:"romance",author:"ana huang",name:"twisted hate",year:2016},
    {genre:"thriller",author:"holly jackson",name:"five survive",year:2004},
    {genre:"romance",author:"lynn painter",name:"happily ever after",year:2006},
]

const user= books.filter((bk)=> bk.genre==="romance" && bk.year<2010)
// console.log(user);

const user2= books.filter((bk)=> bk.genre==="thriller" || bk.year<=2010)
console.log(user2);
