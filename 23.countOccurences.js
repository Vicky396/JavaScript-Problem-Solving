function countOccurence(arr){
    let result={}
    
    arr.forEach((item)=>{
        if(result[item]){
            result[item]++
        }
        else
            result[item]=1
    })
    return result;
}

console.log(countOccurence([1,1,2,3,2,3,2,4,4,2]))