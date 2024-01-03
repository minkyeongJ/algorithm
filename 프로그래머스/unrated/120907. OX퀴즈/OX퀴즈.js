function solution(quiz) {
    var answer = [];
    answer = quiz.map((el) => {
        const spiltEl = el.split('=');
        return eval(spiltEl[0]) === parseInt(spiltEl[1]) ? 'O' : 'X'
    })
    return answer;
}