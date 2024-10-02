
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function binary_serach(arr, target) {
    let l = 0
    let r = arr.length-1

    while (r >= l) {
        let mid = Math.floor((l + r) / 2)

        if (target == arr[mid]) {
            return mid
        }

        if (target > arr[mid]) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return -1

}

console.log(binary_serach(arr, 5))


