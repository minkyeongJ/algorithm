function solution(s){
    var answer =  true;

    const stack = [];
    
    
    s.split('').forEach((el)=>{
        if(el === '(') stack.push(el);
        if(el === ')') stack.pop(el);
    })
    
    answer = stack.length > 0 ? false : true;

    return s[0] === ')' ? false : answer;
}