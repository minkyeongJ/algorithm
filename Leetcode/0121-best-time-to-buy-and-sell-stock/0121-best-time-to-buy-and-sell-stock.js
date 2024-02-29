/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let minNum = prices[0];
    for(let i = 1; i < prices.length ; i++){
        if(minNum > prices[i-1]) minNum = prices[i-1];
        let temp = prices[i] - minNum;
        if(temp > profit){
            profit = temp;
        }
    }
    return profit > 0 ? profit : 0;
};