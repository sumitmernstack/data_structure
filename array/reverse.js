let arr=[1,2,3,4,5,6,7,8,9,0,14]

function rev(arr) {
    let len=arr.length
    let half=Math.floor(len/2)
    for (let i = 0; i < half; i++) {
    let tmp=arr[i]
    arr[i]=arr[len-1-i]
    arr[len-1-i]=tmp
    }

    return arr
}

console.log(rev(arr))

//using two pointer
let a=[1,2,3,4,5,6,7,8,9]

function rev(arr){
    let r=0
    let l=arr.length-1
    while(l>r){
        let tmp=arr[r]
        arr[r]=arr[l]
        arr[l]=tmp
        
        r++
        l--
    }
    return arr
}

console.log(rev(a))