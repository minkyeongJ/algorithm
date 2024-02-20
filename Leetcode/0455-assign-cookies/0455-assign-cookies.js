/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let answer = 0;

    g.sort((a, b) => a-b);
    s.sort((a, b) => a-b);

    for(let child of g){
        for(let i = 0; i < s.length; i++){
            if(s[i] >= child){
                answer++;
                s.splice(i, 1);
                break;
            }
        }
    }

    return answer;
};