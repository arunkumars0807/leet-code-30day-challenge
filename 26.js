/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    var dp = [];
    
    for (var i = 0; i <= text1.length; ++ i) {
        dp[i] = [];
        for (var j = 0; j <= text2.length; ++ j) {
            dp[i][j] = 0;
        }
    }
    
    for (var i = 0; i <= text1.length; ++ i) {
        for (var j = 0; j <= text2.length; ++ j) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
            } else if (text1[i - 1] !== text2[j - 1]) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            } else {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
        }
    }
    
    return dp[text1.length][text2.length];
};
