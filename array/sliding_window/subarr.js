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




function slidingwindow(arr,win) {
    
    let max=0
    let sum=0

}