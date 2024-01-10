/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let ansewer = [];
    const DESC = nums.sort((a,b) => b-a);
    const first = DESC.shift();
    const second = DESC.shift();
    return (first-1)*(second-1)
};