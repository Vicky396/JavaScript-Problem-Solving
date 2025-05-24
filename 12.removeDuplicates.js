// My approach 
const removeDuplicates =(arr)=>{
 const count ={};
 let arr1 =[];
 arr.map((item)=>{
    if(count[item]==undefined){
        count[item]=1;
        arr1.push(item);
    }
    else{
        count[item]++;
    }
 })
 return arr1;
}

// Solution
const removeDuplicates1 =(arr)=>{
let newarr = new Set(arr);
return [...newarr];

}
console.log( removeDuplicates1([1,2,3,4,5,2,3,2,6]));
