

let arr = [1, 2, 3, 4, 5, 7, 8, 9, 10]

function insert(arr, key) {
    let index = arr.length - 1
    while (arr[index] > key) {

        arr[index + 1] = arr[index]
        index--;
    }
    arr[index + 1] = key

    return arr
}

console.log(insert(arr,6))