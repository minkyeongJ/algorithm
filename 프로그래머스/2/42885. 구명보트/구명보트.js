function solution(people, limit) {
    var answer = 0;
    people.sort((a, b) => a - b);
    let lightest = 0;
    let heaviest = people.length - 1;
    
    while (lightest <= heaviest) {
        if (people[lightest] + people[heaviest] <= limit) {
            lightest++;
            heaviest--;
        } else {
            heaviest--;
        }
        answer++;
    }
    
    return answer;
}
