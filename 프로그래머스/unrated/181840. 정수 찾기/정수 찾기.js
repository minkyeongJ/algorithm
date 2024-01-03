function solution(num_list, n) {
    var answer = num_list.filter((el) => el===n).length ? 1 : 0;
    return answer;
}