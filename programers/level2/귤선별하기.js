//https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
  const map = new Map();
  const arr = [];
  let sum = 0;

  for (let i = 0; i < tangerine.length; i++) {
    if (map.has(tangerine[i])) {
      const getData = map.get(tangerine[i]);
      map.set(tangerine[i], getData + 1);
    } else {
      map.set(tangerine[i], 1);
    }
  }

  const mapToArray = [...map].sort((a, b) => b[1] - a[1]);

  for (const [key, value] of mapToArray) {
    arr.push(value);
    sum += Number(value);

    if (sum >= k) {
      return arr.length;
    }
  }

  return arr.length;
}
