// console.log(2+2); 
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); power operation
// console.log(2/3);
// console.log(2%3);

// console.log("1" + 2);//12
// console.log("1" + 2 +2);//122 it will consider all number as string here
// console.log(1 + 2 + "2");//32 it will only consider last 2 as a string

// console.log(+true);//+ sign converts boolean into number and gives output 1
// console.log(+"");// the empty string gives false so its number value will be 0
// true+ => will give error

let gamecounter= 100
++gamecounter; //increment by 1 by prefix
gamecounter++;// increment by 1 by postfix
//console.log(gamecounter);

//prefix and postfix 
//postfix
let x =3
let y =x++
console.log(x ,y);// 4,3(the y value remains 3 as it increments afterwards and it changes x value)

//prefix
let r = 5
let s = ++r
console.log(r , s);//6,6 (it increments before it passes s value so both values are same)