function solution(m, n, puddles) {
  const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0)); // 최단 경로 개수를 저장할 2차원 배열

  dp[1][1] = 1; // 집 위치 초기화

  // 물에 잠긴 지역 초기화
  for (let i = 0; i < puddles.length; i++) {
    const [x, y] = puddles[i];
    dp[y][x] = -1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (dp[i][j] === -1) {
        dp[i][j] = 0; // 물에 잠긴 지역은 도달할 수 없으므로 경로 개수를 0으로 설정
        continue;
      }

      // 이전 위치에서 오는 경로의 개수를 더해줌
      dp[i][j] += (dp[i - 1][j] + dp[i][j - 1]) % 1000000007;
    }
  }

  return dp[n][m] % 1000000007; // 학교 위치의 최단 경로 개수 반환
}

const m = 4;
const n = 3;
const puddles = [[2, 2]];

console.log(solution(m, n, puddles)); // 4 출력
