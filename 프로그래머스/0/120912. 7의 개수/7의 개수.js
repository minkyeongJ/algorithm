function solution(array) {
    var answer = 0;
    array.forEach((el)=>{
        String(el).split('').forEach((el2)=>{
            if(parseInt(el2) === 7) answer++;
        })
    })
    return answer;
}