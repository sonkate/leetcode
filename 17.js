/**
 * @param {number} n
 * @return {number}
 */
// Bottom-up dynamic programming approach
var climbStairs = function (n) {
    if (n == 1) {
        return 1;
    }
    if (n == 2) {
        return 2;
    }

    const dp = new Array(n + 1);
    
    dp[1] = 1;
    dp[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
};


// Space optimized dynamic programming approach
var climbStairs = function (n) {
    if (n == 1) {
        return 1;
    }
    if (n == 2) {
        return 2;
    }

    let a = 1, b = 2;
    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
};

console.log(climbStairs(3));
