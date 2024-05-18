//sum(n)=1+2+3+4+5+......+(n-1)+n
//sum(n)=sum(n-1)+n


function sum(n){
    if(n==0){
        return 0
    }
    else{
        return sum(n-1)+n
    }
}
//1+2+3+4+5=15
console.log(sum(5))