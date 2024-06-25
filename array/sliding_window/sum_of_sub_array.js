let arr = [10, 12, 2, 4, 13, 19, 5]
let window_size = 3
let find_sum_ele = 18


function sum_of_ele(arr, window_size, find_sum_ele) {
    let len = arr.length
    for (let i = 0; i < len - window_size; i++) {
        let sum = 0
        for (let j = 0; j < window_size; j++) {
            // console.log(arr[i + j])

            sum = sum + arr[i + j]

        }
        console.log(sum)
        if (sum == find_sum_ele) {
            console.log(true)
            return `${arr[i]},${ arr[i + 1]},${arr[i + 2]}`
        }
        // new_arr.push(max)


    }
    return -1
}

console.log(sum_of_ele(arr, window_size, find_sum_ele))