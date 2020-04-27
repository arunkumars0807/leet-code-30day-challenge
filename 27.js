/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (matrix === null || matrix.length === 0) {
        return 0;
    }
    
    var dp = [], max = 0;
    
    for (var i = 0; i <= matrix.length; ++ i) {
        dp[i] = [0];
        dp[0][i] = 0;
    }
    
    for (var i = 1; i <= matrix.length; ++ i) {
        for (var j = 1; j <= matrix[0].length; ++ j) {
            if (matrix[i - 1][j - 1] === '0') {
                dp[i][j] = 0;
            } else {
                var min = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]);
                dp[i][j] = 1 + (isNaN(min) ? 0 : min);
                if (max < dp[i][j]) {
                    max = dp[i][j];
                }
            } 
        }
    }
    
    return max * max
};
