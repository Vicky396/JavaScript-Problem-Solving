// Compare array for same order and same elements

// My Approach

const compareTwoArrays =(arr1,arr2)=>{
    if(arr1.length != arr2.length){
        return false;
    }
    // for(let i=0;i<arr1.length;i++){
    //     if(arr1[i]==arr2[i]){
    //         continue;
    //     }
    //     else{
    //         return false;
    //     }
    // }
    // return true;
    return arr1.every((currValue,index)=>currValue===arr2[index]);
}

console.log(compareTwoArrays([1,2,3,4],[1,2,3,4]));
