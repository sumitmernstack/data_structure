
let arr=[1,2,3,8,4,5]

function is_sorted(arr){

    for (let i = 0; i < arr.length; i++) {
     
        if(arr[i]>arr[i+1]){
            return  false
        }
    }
    return true
}

console.log(is_sorted(arr))