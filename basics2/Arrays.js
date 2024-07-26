const arr = [1,3,5,7,9,11,13]
const arr2 = new Array(1,8,4,28)
// console.log(arr2[2]);
// console.log(arr);

//array methods
arr.push(15,17)
// console.log(arr);//15 and 17 gets added
arr.pop()
// console.log(arr);//the last element of array gets removed i.e 17
arr.unshift(0,20)//this will insert the numbers at the start of the array 
arr.shift()//removes the first element of the array i.e 0
// console.log(arr);

// console.log(arr.slice(1,3));// [1,3]
// console.log(arr);//original array

// console.log(arr.splice(1,3));//[1,3,5]this will include the end index number that is 3 
// console.log(arr);//[array wont include the spliced numbers] so the original copy is manipuated with splice

// console.log(arr.includes(20));//false
// console.log(arr.indexOf(11));//5

const yuhu = ["hello","world"]
const mynewarr = yuhu.join()//join binds the number like hello,world and converts them into string
console.log(mynewarr);
console.log(typeof mynewarr);//string