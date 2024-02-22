/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let answer = [];
    const alphaMap = new Map();
    [...s].forEach((alpha, i) => {
        if(!alphaMap.get(alpha)){
            alphaMap.set(alpha, [i, i]);
        }else{
            const temp = alphaMap.get(alpha);
            alphaMap.set(alpha, [temp[0], i]);
        }
    })

    let temp = alphaMap.get(s[0]);
    answer.push(temp[1] + 1)
    alphaMap.forEach((value, key) => {
        if(temp[0] <= value[0] && value[0] <= temp[1]){
            if(value[1] > temp[1]) {
                answer[answer.length -1] = value[1] - temp[0] + 1;
                temp = [temp[0], value[1]];
            }
        }else{
            temp = value;
            answer.push(value[1]-value[0] + 1);
        }
    });

    return answer;
};