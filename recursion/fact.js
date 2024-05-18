// 0! or 1! both are 1 only
// n==0  then 1
// else return  fact(n-1)*n

function fact(n){
if(n==0){
    return 1
}else{
    return fact(n-1)*n
}
}
console.log(fact(5))