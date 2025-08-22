const generateHash1=(str)=>{
    let arr= str.split(" ");
    arr = '#' + arr.map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join("");
    return arr;

}

console.log(generateHash1("my name is vikash singh"));