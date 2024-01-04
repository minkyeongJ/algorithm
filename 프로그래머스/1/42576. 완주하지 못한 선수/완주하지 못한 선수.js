function solution(participant, completion) {
    var answer = '';
    let personList = new Map();
    participant.forEach((el) => (personList.set(el, personList.get(el) ? personList.get(el)+1 : 1)));
    
    completion.map((el) => personList.set(el, personList.get(el) -1));
    
    personList.forEach((value, key) => {
        value > 0 ? answer = key : ''
    })
    return answer;
}