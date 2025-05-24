// My approach

const sumOfSquares=(arr)=>{
//    let arr1 = arr.map((item)=>{
//     return item*item
//    })

let arr1=arr.reduce((acc,curr)=>{
return acc + curr*curr
},0)
   console.log(arr1);

}

sumOfSquares([1,2,5])