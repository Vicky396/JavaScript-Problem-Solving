//*
//* Programming Question: Sort an Array
//*
// ? Write a function to sort an array of numbers in an ascending order.
// Example usage:
//console.log(sortAscending([5, 3, 1, 8])); // Output: [1, 3, 5, 8]
//todo Requirements:
//? The function should take an array of numbers as input.
//? It should return a new array with the numbers sorted in ascending order.
//? The original array should remain unchanged.
//? You are not allowed to use the built-in sort() method.

// My approach
const sortAscending1=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}

// Solution
// arr.sort((a,b)=>a-b);
 
console.log(sortAscending1([5, 3, 1, 8])); 


let arr1=[5, 3, 10, 8];
arr1=arr1.sort();
console.log(arr1);
