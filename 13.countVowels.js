const countVowels =(str)=>{
    let count=0;
    str.split("").map((item)=>{
        if(['a','e','i','o','u'].includes(item.toLowerCase())){
            count++;
        }
    })
    return count;
}

console.log(countVowels('Helloo World'));
