function solution(n) {
    var answer = Math.pow(Math.floor(Math.sqrt(n)), 2) === n ? 1 : 2;
    return answer;
}