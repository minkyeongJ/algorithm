//https://school.programmers.co.kr/learn/courses/30/lessons/161990

// 시작점[x,y], 끝점[x,y]

// 순서대로 순회할 때: 처음 #이 나온 index 번호 = 시작점[index, y]
// 역으로 순회할 때: 처음 #이 나온 index 번호 = 끝점[index, y]

// 각 #을 한줄로 만들었을 때 첫 number: 시작점[x, number]
// 각 #을 한줄로 만들었을 때 끝 number: 끝점[x, number]

function solution(wallpaper) {
  let startPoint = [0, 0];
  let endPoint = [0, 0];

  // 순서대로 순회할 때: 처음 #이 나온 index 번호 = 시작점[index, y]
  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].split("").includes("#")) {
      startPoint[0] = i;
      break;
    }
  }

  // 역으로 순회할 때: 처음 #이 나온 index 번호 = 끝점[index, y]
  for (let i = wallpaper.length - 1; (i) => 0; i--) {
    if (wallpaper[i].split("").includes("#")) {
      endPoint[0] = i + 1;
      break;
    }
  }

  //# min, max?
  let minRow = 0;
  let maxRow = wallpaper[0].length;

  // 각 #을 한줄로 만들었을 때 첫 number: 시작점[x, number]
  let rowMinIndexArr = wallpaper.map((col) => {
    const n = Number(col.split("").indexOf("#"));
    return n === -1 ? maxRow + 1 : n;
  });

  minRow = Math.min(...rowMinIndexArr);
  startPoint[1] = minRow;

  // 각 #을 한줄로 만들었을 때 끝 number: 끝점[x, number]
  let rowMaxIndexArr = wallpaper.map((col, i) => {
    const n = col.split("").lastIndexOf("#");
    return n === -1 ? 0 : n + 1;
  });

  maxRow = Math.max(...rowMaxIndexArr);
  endPoint[1] = maxRow;

  return [...startPoint, ...endPoint];
}
