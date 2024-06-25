let arr = [1, 2, 3, 4, 5, 6, 7]

function del(arr, index) {

    for (let i = index; i < arr.length - 1; i++) {
        //const element = array[i];
        arr[i] = arr[i + 1]
    }
    arr.length--;  //removing last index from the array
    return arr
}

console.log(del(arr, 3))

let aw = [1, 2, 3, 4, 5, 6]

// a[2]

function deleteq(aw, ind) {

    for (let i = ind; i < aw.length; i++) {

        aw[i] = aw[i+1]
    }
    aw.length --;
    console.log(aw)
}
deleteq(aw,2)
