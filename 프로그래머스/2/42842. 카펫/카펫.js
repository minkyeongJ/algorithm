function solution(brown, yellow) {
    var answer = [];
    var total = brown + yellow; // 총 격자의 수

    for(var i = Math.floor(total/2); i > 0; i--){  // 가로 길이는 총 격자의 수를 2로 나눈 값보다 작거나 같으므로 그 값을 시작점으로 설정
        if(total % i === 0){  // 세로 길이를 찾기 위해 총 격자의 수를 가로 길이로 나누어 떨어지는지 확인
            var j = total / i;  // 세로 길이

            // 갈색 격자의 수는 테두리에만 있으므로, 가로*2 + (세로-2)*2 해서 구할 수 있음
            if((i * 2) + (j - 2) * 2 === brown){
                answer = [i, j];  // 가로 길이가 세로 길이보다 같거나 길어야 하므로, 큰 값인 i를 가로 길이로 설정
                break;
            }
        }
    }

    return answer;
}