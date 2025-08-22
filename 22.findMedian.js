const findMedian =(arr)=>{
    arr.sort((a,b)=>a-b);
    if (arr.length==0) return 0;
    let mid =Math.floor(arr.length/2);
    let median = arr.length%2==0? (arr[mid] + arr[mid-1])/2:arr[mid];
    return median;
   
}
console.log(findMedian([5,3,9,1,7]));
console.log(findMedian([2,4,6,8]));
