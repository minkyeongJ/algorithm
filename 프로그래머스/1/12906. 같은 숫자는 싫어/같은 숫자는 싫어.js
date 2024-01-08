//순서대로 다른 구조에다가 영어를 넣음
//queue에 넣고 제일 마지막에 넣은애가 넣으려는 애와 같으면 못 넣고

function solution(arr)
{
    var answer = [arr[0]];
    
    const queue = arr;
    
    queue.forEach((el)=>{
        if(answer[answer.length -1] !== el){
            answer.push(el)
        }
    });
    
    return answer;
}