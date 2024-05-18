let arr=[3,44,22,67,34,55,11,45674,2,2,1,4,5,7,22,99,234]

function max(arr) {
    let max_ele=arr[0]

    for (let i = 1; i < arr.length; i++) {
        if(max_ele <arr[i]){
            max_ele=arr[i]
        }
        
    }
    return max_ele
}

console.log(max(arr))