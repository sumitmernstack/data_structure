let arr = [1, 3, -1, -3, 5, 3, 6, 7]
let window_size = 3
function find_max_ele(arr, window_size) {
    let len = arr.length
    let new_arr = []
   
    for (let i = 0; i < len - window_size; i++) {
        let max = arr[i]
        for (let j = 1; j < window_size; j++) {
            console.log(arr[i + j],"-->")
            if (arr[i + j] > max) {
              
                max = arr[i + j]
            }
        }
        new_arr.push(max)
      // return "pink"

    }
    return new_arr
}

console.log(find_max_ele(arr,window_size))