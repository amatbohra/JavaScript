const score = 300
if(score<100){
    console.log("score is less than 100");
}
else if (score>300) {
    console.log("score is more than 100");
}
else{
    console.log("score is less than 300");
}

//using logical operators in if else 
const useremail = "abcs@gmail.com"
const isloggedin = true
if (useremail && isloggedin) {
    console.log("we got your email and you are logged in ");
}else{
    console.log("failed to log in");
}

//&& and means both the condition or values should be true
//|| or means if only one value is true then also it works 

const loggedingmail = "abcjs.com"
const loggedinemail = "jscdj.com"
if (loggedinemail || loggedingmail) {
    console.log("welcome in website");
}

// != this is not equal

//shortcut to write if is 
if(2!==3) console.log("hello");//implicitly considers the {} and ; is needed at the end 

