var climbStairs = function (n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};
console.log(climbStairs(8))
















function step(n) {
    let arr = new Array(n + 1).fill(0)
    arr[1] = 1
    arr[2] = 2
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n];

}

console.log(step(8))





//1 1
// 2 2
// 3 1 ,2
// 4 2,3

function checkstep(value) {
    let arr = new Array(value+1).fill(0)
    arr[1] = 1
    arr[2] = 2
    for (let i = 3; i < arr.length; i++) {
        console.log(arr[i-1] ,arr[i-2])
        arr[i] =arr[i-1] + arr[i-2]
}
    //console.log(arr)
    return arr
}
console.log(checkstep(8))