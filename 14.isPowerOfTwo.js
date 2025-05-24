//Solution
const isPowerOfTwo =(num)=>{
    for (let i=0;i<num;i++){
        if(2**i==num){
            return true;
        }
    }
    return false;
}
// gfg 
const isPowerOfTwo1 =(num)=>{
    if(parseInt((Math.ceil((Math.log(num) / Math.log(2)))))
    == parseInt((Math.floor(((Math.log(num) / Math.log(2))))))){
        return true
    }
    return false;
}


console.log(isPowerOfTwo1(8));
console.log(isPowerOfTwo1(6));
console.log(isPowerOfTwo1(5));
console.log(isPowerOfTwo1(4));
console.log(isPowerOfTwo1(32));

// Bit set approach can also be used refer gfg