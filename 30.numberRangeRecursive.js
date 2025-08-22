const numberRangeRecursive=(num1,num2,arr=[])=>{
    
    if(num1<=num2){
        arr.push(num1)
        numberRangeRecursive(num1+1,num2,arr);
        
    }         
    return arr
}
console.log(numberRangeRecursive(1,5));


