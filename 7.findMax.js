// My Approach 1
const findMax1 =(arr)=>{

    let max = arr.reduce((acc,curr)=>{
        if(curr>acc){
            acc=curr;
        }
        return acc;
    },0)
    return max;
}
// My Approach 2
const findMax2 =(arr)=>{
let max=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
return max;
}

console.log(findMax1([1,4,2,5,3]));
console.log(findMax2([1,4,2,5,3]));