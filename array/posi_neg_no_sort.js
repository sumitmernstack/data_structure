let array = [-1, 2, -3, 4, -5, 6, -7, 8 - 9, 10]
console.log(array)
function sort(arr) {

    let l = 0
    let r = arr.length - 1;

    while (r > l) {

        while (arr[l] < 0) {
            l++;
        }

        while (arr[l] >= 0) {
            r++;
        }
        if (r > l) {
            let tmp = arr[r];
            arr[r] = arr[l]
            arr[l] = tmp
        }

    }
    return arr
}

console.log(sort(array))