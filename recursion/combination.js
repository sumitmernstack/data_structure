function com(n,r){
if(r==0 || n==r){
    return 1
}else{
    return com(n-1,r-1)+com(n-1,r)
}
}
console.log(com(5,3))