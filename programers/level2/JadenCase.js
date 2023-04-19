// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  if (s.length === 1) {
    return s.toUpperCase();
  }

  if (s.length > 1) {
    return s
      .split(" ")
      .map((str) => {
        let arr = str.split("");

        const arrUpper = arr[0] ? arr[0]?.toUpperCase() : "";

        arr.shift();

        const arrLower = arr.reduce(
          (acc, cur) => acc + cur.toLowerCase(),
          [""]
        );

        return arrUpper + arrLower;
      })
      .join(" ");
  }
}
