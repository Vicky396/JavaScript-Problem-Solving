const calculateMean=(arr)=>{
    if(arr.length==0) return 0;
    let sum=arr.reduce((acc,curr)=>{
        // console.log(acc)
        return acc+curr
        
    },0)
    return sum/arr.length;
}

console.log(calculateMean([1,2,3]))
