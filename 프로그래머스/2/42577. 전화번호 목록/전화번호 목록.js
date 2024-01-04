//'key-value'
//전화번호부를 오름차순으로 정리를 한다.
//Map으로 값을 저장하고, 이미 Map에 존재하는 key값과 일치하는값이 있는지 확인한다.
//없으면 새로운 key로 등록하고, 있으면 기존 key에 1을 더한다. 

function solution(phone_book) {
    var answer = true;
    const ASC = phone_book.sort()
    
    for(let i = 1; i< ASC.length; i++){
        const accKey = ASC[i-1];
        if(ASC[i].includes(accKey) && ASC[i].split(accKey)[0] == ''){
            return false;
        }
    }
    return answer;
}

//test 1, 5, 13, 14 / 3, 4
//1, 5 sort를 문자 오름차순으로 바꾸니까 해결