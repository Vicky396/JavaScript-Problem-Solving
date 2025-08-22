const fibonnacciNth =(number)=>{
if(number<=1){
 return number
}
else {
    return fibonnacciNth(number-1) + fibonnacciNth(number-2)
}
}

const fibonacciSeries=(n)=>{
    
    for(let i=0;i<=n;i++){
        console.log(fibonnacciNth(i));
    }

}
fibonacciSeries(7);
// console.log(fibonnacciNth(7));