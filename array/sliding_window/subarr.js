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


let arr = [10, 12, 2, 4, 13, 19, 5]
let window_size = 3

// 
function slidingwindow(arr, window) {

    let max = 0
    let len = arr.length;
    let i = 0
    let j = 0;
    let sum = 0
    while (j < len) {
        sum = sum + arr[j]
        //  console.log("sum--->", sum)
        if (j - i + 1 < window) {
            j++
        } else if (j - i + 1 == window) {
            max = Math.max(sum, max)
            console.log(`${i}--->`, max)
            sum = sum - arr[i];
            i++
            j++
        }



    }
    return max

}
//console.log(slidingwindow(arr, window_size))
//https://www.youtube.com/watch?v=uqGxFk0cEdI
//[3,8,2,5,7,6,12]
function sumOfSubArr(arr, window) {
    let current = 0;

    for (let i = 0; i < window; i++) {
        current = current + arr[i]
    }

    let max = current
    for (let i = 1; i <=arr.length - window; i++) {
        current = current - arr[i - 1] + arr[i - 1 + window]
        if(current>max){
            max=current
        }
    }
    return max

}

console.log(sumOfSubArr([3, 8, 2, 5, 7, 6, 12], 4))