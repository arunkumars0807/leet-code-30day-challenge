/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var max = 0, len = nums.length;
    
    for (var i = 0; i < len; ++ i) {
        max = Math.max(nums[i] + i, max);
        
        if (nums[i] === 0 && max <= i) {
            break;
        }
    }
    
    return max >= nums.length - 1;
};
