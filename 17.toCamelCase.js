const toCamelCase=(str)=>{
    let arr =str.trim().split(" ");
    arr=arr.map((item,index)=>{
        if(index===0)
        return item.toLowerCase();
        else
        return item[0].toUpperCase() + item.slice(1).toLowerCase();
    })
    return arr.join("")
}
console.log(toCamelCase('HeLlo worlD'));
