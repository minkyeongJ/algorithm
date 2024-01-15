function solution(a, d, included) {
  let sum = 0;

  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      // 등차수열의 항을 계산하여 더합니다.
      sum += a + (i * d);
    }
  }

  return sum;
}