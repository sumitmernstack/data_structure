function tho(n,A,B,C){
if(n>0){
    tho(n-1,A,C,B)
    console.log(A,C)
    tho(n-1,B,A,C)
}
}
console.log(tho(3,1,2,3))