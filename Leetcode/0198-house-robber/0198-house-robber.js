/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    nums.push(0,0)
    console.log(nums)
    for(let i=nums.length-4;i>=0;i--){
        nums[i]+= Math.max(nums[i+2],nums[i+3],0)
    }
    return Math.max(nums[0],nums[1])
};