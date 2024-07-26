// const MyDate = new Date
// console.log(MyDate.getDate());
// console.log(MyDate.toDateString());
// console.log(MyDate.toLocaleDateString());
// console.log(MyDate.toISOString());
// console.log(MyDate.toJSON());
// console.log(MyDate.toLocaleString());

const MycreatedDate = new Date(2024,0,18)//0 is for january
const MycreatedDate2 = new Date("07-30-2024")
// console.log(MycreatedDate.toLocaleString());
// console.log(MycreatedDate2.toLocaleString());
// console.log(typeof MycreatedDate);//object

let mytimestamp = Date.now()
// console.log(mytimestamp);//gives value in milliseconds 
// console.log(MycreatedDate.getTime());//returns the value in milliseconds since midnight of january 1
// console.log(Math.floor(Date.now()/1000));//this will return a smaller number with rounding off 

//you can customize the way you want your date to be print 

console.log(MycreatedDate.toLocaleString('default',{
    weekday: "long"
}));