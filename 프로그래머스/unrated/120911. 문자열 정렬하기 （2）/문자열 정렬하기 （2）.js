function solution(my_string) {
    var answer = my_string.toLowerCase().split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');
    return answer;
}