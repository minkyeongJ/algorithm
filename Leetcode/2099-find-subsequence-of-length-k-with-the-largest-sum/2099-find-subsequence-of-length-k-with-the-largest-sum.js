/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    let answer = [];
    const table = nums.map((el, i) => ({key: i, value: el}));
    table.sort((a,b)=>b.value - a.value);
    answer = table.slice(0, k);
    answer = answer.sort((a, b) => a.key - b.key).map(el=> el.value);
    return answer;
};