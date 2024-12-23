function primeno(n) {

    for (let j = 1; j < n; j++) {
        let flag = 0
        for (let i = 2; i <= j / 2; i++) {
            if (j % i == 0) {
                flag++
                break;
            }


        }

        if (flag == 0) {
            console.log(j)
        }

    }

}
//primeno(20)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function del(arr,ind) {

//     for (let i = ind; i < arr.length; i++) {
//       arr[i]=arr[i+1]
//     }
//     arr.length--;
//     return arr
// }
//console.log(del(arr,3))


function insert(arr, index, ele) {
    for (let i = arr.length; i >= index; i--) {
        arr[i + 1] = arr[i]

    }
    arr[index] = ele
    return arr
}

//console.log(insert(arr,4,12345))

let array = [1, 2, 3, 4, 5]
function rotate(arr, n) {
    for (let i = 0; i < n; i++) {
        let last = arr[arr.length - 1]
console.log(last)
        for (let j = arr.length; j > 0; j--) {
            arr[j] = arr[j-1]
        }
        arr[0] = last
    }
    return arr
}

console.log(rotate(array, 3))
