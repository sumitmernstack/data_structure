//sort
let arr=[1,2,3,99,4,5,6,7,8,9,33]
function sort(arr,index) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-1-i; j++) {
            if(arr[j]<arr[j+1]){
                let tmp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=tmp
            }
        }
    }
   
    return arr[index-1]
}
console.log(sort(arr,5))
