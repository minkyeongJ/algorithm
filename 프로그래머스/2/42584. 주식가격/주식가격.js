function solution(prices) {
    var answer = [];
    for(let i = 0; i < prices.length; i++){
        answer.push(0);
        for(let j = i+1; j < prices.length; j++){
            if(prices[i] > prices[j]) {
                answer[i] += 1; 
                break
            };
            answer[i] += 1; 
        }
    }
    return answer;
}