const user = new Object()
// const user = {}
user.name= "amat"
user.id = 123
user.email = "amat@gamil.com"
// console.log(user);

const user2 = {
    id: "12abc",
    fullname: {
        username: {
            firstname: "shalaka",
            lastname: "kothari"
        }
    }
}
// console.log(user2.fullname.username.lastname);//kothari

//merging objects 
const o1 = {1:"a",2:"b"}
const o2 = {3:"a",4:"b"}
const o3 = {5:"a",6:"b"}

// const o4 = Object.assign(o1,o2,o3)//in assign method the first parameter is treated as a target and further are treated as source so when merged the o2 and o3 get added into o1 making o1=o4
// console.log(o4);
// console.log(o1===o4);//true
//so to not make a change in original copy of o1 use 1st parameter empty barces {}
const o4 = Object.assign({},o1,o2,o3)
// console.log(o4);
// console.log(o1===o4);//false

const o5 = {...o1, ...o2, ...o3}//using spread operator same like in arrays
// console.log(o5);

//arrays and objects
const user3 = [
    {
        id:1,
        rollno: 34
    },
    {
        id:1,
        rollno: 43
    },
    {
        id:1,
        rollno: 52
    }

]
// console.log(user3[1].rollno);//43

// console.log(user);
// console.log(Object.keys(user));//the interesting part about this is that it returns the keys in array form
// console.log(Object.values(user))//as they become an array we can apply loops and stuff
// console.log(Object.entries(user))//gives you array ke andar array..[[name,amat],[id ,123]]
// console.log(user.hasOwnProperty("id"));//true, it is to check if the object has that specific property

//destructuring of objects ie making it easy to call/access
const course = {
    coursename: "javascript",
    courseInstructor: "hitesh"
}
//now it is tiresome to call course.courseInstructor everytime so for shortcut use 
const {courseInstructor} = course //in braces comes the property you want to extract from the obj course
console.log(courseInstructor);//hitesh
const {coursename: Cname} = course
console.log(Cname);//congrats you made a shortform 