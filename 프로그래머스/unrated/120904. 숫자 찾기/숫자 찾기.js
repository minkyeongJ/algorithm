function solution(num, k) {
    var answer = `${num}`.indexOf(k) + 1 || -1;
    return answer;
}