function numberRange(num1,num2){
    let arr=[];
    // for(let i=num1;i<=num2;i++){
    //     arr.push(i)
    // }
    
    //Solution
    while(num1<=num2){
        arr.push(num1);
        num1++
    }
    return arr;
}

console.log(numberRange(4,9));
console.log(numberRange(-4,4));






