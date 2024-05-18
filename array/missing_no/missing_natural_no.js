let arr = [1, 2, 3, 4, 6, 7, 8, 9, 10]

function missing(arr) {
    let sum = 0;
    let n = arr.length-1
    console.log(arr[n])
    let sum_n = (arr[n](arr[n] + 1)) / 2;
    for (let i = 0; i < arr.length; i++) {
        //const element = array[i];
        sum += arr[i]
    }

    let diff = sum_n - sum
    return diff

}
console.log(missing(arr))
