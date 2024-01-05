/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let size=nums.length;
     let  goodpair=0;
   for(let i =0  ;i < size ;i ++){
       for(let j=i+1 ; j <size;j++){
            if(nums[i]===nums[j]) 
            goodpair++;
       }
   }
   return goodpair;
};