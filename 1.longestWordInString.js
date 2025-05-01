// My approach
const findLongestWord1 =(str)=>{
    if(str.trim().length===0){
        return false;
    }
    const arr= str.split(" ");
    let longestWord ="";
    let maxLength=0;
    console.log(arr);
    for(let i=0;i<arr.length;i++){
        if (arr[i].length>maxLength){
            longestWord=arr[i];
            maxLength=arr[i].length;
        }
    }
    return longestWord;
}


// Solution
const findLongestWord2 = (str)=>{
    if(str.trim().length===0){
        return false;
    }
    let words = str.split(" ");
    words =words.sort((a,b)=>b.length - a.length)
    console.log(words);
    return words[0]; // words.at(-1) es6 reverse indexing
}

const findLongestWord3 = (str)=>{
    if(str.trim().length===0){
        return false;
    }
    let words = str.split(" ");
    return words.reduce((accumulator,current)=>(current.length>accumulator.length?current:accumulator),"")
}


console.log(findLongestWord1("My name is Vikash Singh"));
console.log(findLongestWord2("Problem solving in javascript"));
console.log(findLongestWord3("100 days of coding"));