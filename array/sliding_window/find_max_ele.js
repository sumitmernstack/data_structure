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


// function maxSumSubarray(arr, K) {
//     let maxSum = 0;
//     let windowSum = 0;

//     // Calculate the sum of the first window of size K
//     for (let i = 0; i < K; i++) {
//         console.log("i log",i)
//         windowSum += arr[i];

//     }
//     console.log(windowSum)
//     // Set the maximum sum to be the sum of the first window
//     maxSum = windowSum;

//     // Slide the window over the array

//     for (let i = K; i < arr.length; i++) {
//       //  console.log("log itt",i,K,"------",arr[i],arr[i - K] )  //[2, 1, 5, 1, 3, 2];
//         console.log(windowSum,"windosum",arr[i],arr[i - K],arr[i] - arr[i - K])
//         windowSum += arr[i] - arr[i - K]; // Slide the window forward
//         console.log(windowSum,"--->")
//         maxSum = Math.max(maxSum, windowSum); // Update the maxSum if the current windowSum is larger
//     }

//     return maxSum;
// }

// // Example Usage:
// const arr = [2, 1, 5, 1, 3, 2];
// const K = 3;
// console.log(maxSumSubarray(arr, K)); // Output: 9 (subarray [5, 1, 3])


