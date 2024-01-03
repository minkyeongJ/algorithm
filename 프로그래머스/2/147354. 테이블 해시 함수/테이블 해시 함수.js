//col 기준으로 정렬하기, sort

//row_begin row_end , S_i 는 i번째 행 각 컬럼의 값을 i로 나눈 나머지의 합
//1번째 행 [2,2,6], 2/1=0 2/1=0 6/1=0, 0

//row_begin XOR row_end

function solution(data, col, row_begin, row_end) {
    var answer = 0;
    
    //col 기준으로 정렬하기, sort
    const sortedData = data.sort((a,b)=> a[col-1] === b[col-1] ? b[0] - a[0] : a[col-1] - b[col-1]);
    
    //row_begin<= i <= row_end , S_i 는 i번째 행 각 컬럼의 값을 i로 나눈 나머지의 합
    for(let i = row_begin; i <= row_end; i++){
        answer ^= sortedData[i-1].reduce((acc, cur) => acc + cur%i, 0)
    }
    
    return answer;
}