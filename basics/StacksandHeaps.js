// Stacks => primitive datatypes ; Heaps => non primitive datatypes
// stack:
let Myname = "amat"
let anothername = Myname 
anothername = "kashish"
console.log(Myname)//amat
console.log(anothername)//kashish
//so the copy given to anothername gets changed into kashish and original value remains the same

//heaps:
let user1 = {
    name: " rahul"
}
let user2 = user1
user2.name = "rohan"
console.log(user1)//rohan
console.log(user2)//rohan 
//so the reference of original memory is givn in this which leads to changes in both new and original copies