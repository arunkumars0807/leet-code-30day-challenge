/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
    this.map = new Map();
    this.hash = {};
    
    for (var i = 0; i < nums.length; ++ i) {
        this.add(nums[i]);
    }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    const { value } = this.map.entries().next();
    return value ? value[0] : -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    if (this.hash[value] === undefined) {
        this.hash[value] = 1;
        this.map.set(value, 1);
    } else {
        ++ this.hash[value];
        this.map.delete(value);
    }
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
