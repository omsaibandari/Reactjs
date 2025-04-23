let a=false;
let b= false;

console.log("and:",a&&b);

console.log("or:",a||b);

function employeeName(){
    return getMyname(a && getMyname("Omsai"));
}

function getMyname(S){
    return "Hello ", S;
}

console.log("The Employee name is:",employeeName());

console.log(a && getMyname("Omsai")); //you will get the output only if the a is true.


