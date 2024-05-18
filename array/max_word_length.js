let arr="my name is sumit kesahri gsdhhhhhhhhh qq"
    console.log(arr.length)
function max(arr){
    arr=arr.split(" ")

    let max_val=''
    let max_len=0
    
    for(let i=0;i<arr.length;i++){
       // console.log(arr[i].length)
        if(arr[i].length>max_len){
       
            max_len=arr[i].length
            max_val=arr[i]
        }
    }
    return max_val
}

console.log(max(arr))