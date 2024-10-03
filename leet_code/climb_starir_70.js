var climbStairs = function(n) {
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
        arr[i] = arr[i - 1] + arr[i- 2]
    }
    return arr[n];

}

console.log(step(8))