// 0! or 1! both are 1 only
// n==0  then 1
// else return  fact(n-1)*n
console.log("a")
function fibo(n){
if(n<=1){
    return n
}else{
    return fibo(n-2) + fibo(n-1)
}
}
console.log(fibo(5))