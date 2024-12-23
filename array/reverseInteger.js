//reverse integer

function revint(val){
    let result=0
    while(val >0){
        let tmp=val%10
        result=result *10 + tmp;
        val= Math.floor(val/10);
    }
    return result 
}
console.log(revint(123456))