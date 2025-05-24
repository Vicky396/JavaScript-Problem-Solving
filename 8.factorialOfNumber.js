// My Approach
const factorial1 =(num)=>{
    if(num<0){
        return -1 ;
    }
    // if(num==0){
    //     return 1;
    // } not needed if default value is set as 1
    let fact = 1;
    while(num>0){
     fact = fact*num;
     num--;
    }
    return fact;

}


// Recursion
const factorial2=(num)=>{
if (num ===0 || num===1){
    return 1;
}
else{
    return num* factorial2(num-1);
}
}

console.log(factorial1(5));
console.log(factorial1(1));
console.log(factorial1(0));
console.log(factorial1(-4));
console.log(
    "\n" + factorial2(5));
console.log(factorial2(1));
console.log(factorial2(0));
// console.log(factorial2(-4));