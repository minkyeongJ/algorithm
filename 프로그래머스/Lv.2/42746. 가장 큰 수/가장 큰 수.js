//0 또는 양의 정수
//정수를 이어 붙여 만들 수 있는 가장 큰 수


// 3 30 34
// 34 3 30

// 3 30 34 345 300
// 34 3 30
//3기준 정렬
//3___
//3보다 크면 앞에
//3보다 작으면 뒤에
// function compare(a, b){
//     //값이 
//     const sA = String(a);
//     const sB = String(b);
//     if()
// }

function solution(numbers) {
    var answer = numbers
    .map(num => num.toString()) // 숫자를 문자열로 변환
    .sort((a, b) => (b + a) - (a + b)) // 문자열을 합쳐서 비교하여 정렬
    .join(''); // 정렬된 문자열을 합침

    // 모든 숫자가 0일 경우 '0'만 반환
    return answer[0] === '0' ? '0' : answer;
}
