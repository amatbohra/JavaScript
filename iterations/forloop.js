for (let index = 0; index <= 10; index++) {
    // const element = index;
    // console.log(element);
    // console.log(index);
}
let myarray = ["ironman","thor","hulk"]

for (let arr = 0; arr < myarray.length; arr++) {
    const element = myarray[arr];
    // console.log(element);
}

//nested loops
for (let i = 1; i <=10; i++) {
    console.log(`outer loop value ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(i + "*" + j + "=" + i*j);
    }
}//all tables till 10 printed 

//break and continue 


for (let i = 0; i < 10; i++) {
    // console.log(i);
    if (i==5) {
        console.log("5 detected");
        break
    }
    // console.log(i);
}//writing break directly ends the loop 

for (let i = 0; i < 10; i++) {
    if (i==5) {
        console.log("5 detected");
        continue
    }
    console.log(i);
}//writing continue helps in skipping one value and let you continue with rest of the loop
