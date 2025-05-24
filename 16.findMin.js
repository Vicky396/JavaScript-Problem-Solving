const findMin =(arr)=>{
    return arr.reduce((acc,curr)=>{
        return acc<curr?acc:curr
    },arr[1])
}

console.log(findMin([1,4,3,2,4,2,1]))