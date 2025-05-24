// //reverse integer

// function revint(val){
//     let result=0
//     while(val >0){
//         let tmp=val%10
//         result=result *10 + tmp;
//         val= Math.floor(val/10);
//     }
//     return result 
// }
// console.log(revint(123456))



function rev(n){
      let tmp=0
    while(n>0){

            let mod=n%10
     tmp=tmp * 10+mod
     n=Math.floor(n/10)
    }
    return tmp

}

console.log(rev(123456))

