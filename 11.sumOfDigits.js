// My Approach
const sumOfDigits1= (num)=>{
   
    let sum =0;
    while(num>0){
        sum+= num%10;
        num=Math.floor(num/10);
    }
    return sum;
}

//Solution

const sumOfDigits2= (num)=>{
    let arr=Array.from(String(num),Number);
    console.log(arr);
    return arr.reduce((acc,curr)=>acc+curr,0);
}

console.log(sumOfDigits(123456));
