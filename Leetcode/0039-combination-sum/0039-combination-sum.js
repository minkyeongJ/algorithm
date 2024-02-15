function combinationSum(candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b); // 입력 배열을 오름차순으로 정렬합니다.
  backtrack(candidates, target, [], result, 0);
  return result;
}

function backtrack(candidates, target, combination, result, start) {
  if (target === 0) { // 타겟 값이 0이 되면 조합을 결과에 추가합니다.
    result.push([...combination]);
    return;
  }
  if (target < 0) { // 타겟 값이 음수가 되면 조합이 유효하지 않으므로 종료합니다.
    return;
  }
  for (let i = start; i < candidates.length; i++) {
    combination.push(candidates[i]); // 현재 숫자를 조합에 추가합니다.
    backtrack(candidates, target - candidates[i], combination, result, i); // 다음 재귀 호출을 수행합니다.
    combination.pop(); // 백트래킹을 위해 숫자를 조합에서 제거합니다.
  }
}
