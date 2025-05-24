// My approach 1
const calculateAverage1 =(arr)=>{
 return arr.reduce((acc,curr)=>acc+curr, 0)/arr.length
}

console.log(calculateAverage([1,2,3,4,5]));

