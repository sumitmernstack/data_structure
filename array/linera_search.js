let arr=[12,3,1,5,2,7,8,9]

function linear(arr,target) {
    for (let i = 0; i < arr.length; i++) {
      if(target == arr[i])
        {
            return i
        }
    }
    return -1
}

//console.log(linear(arr,5))


 function swap(arr,index) {
    console.log("index")
    let tmp=arr[index]
    arr[index]=arr[0]
    arr[0]=tmp

    return arr
}

function linear_improved(target) {
    let arr=[12,3,1,5,2,7,8,9,5,3]
   console.log(arr,"sssssssssss")
 
    for (let i = 0; i < arr.length; i++) {
      if(target == arr[i])
        {
 
          let tmp=arr[i]
          arr[i]=arr[0]
          arr[0]=tmp;

        }
      
    }
    return arr
}

console.log(linear_improved(3))