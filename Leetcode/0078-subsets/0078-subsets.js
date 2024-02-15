function subsets(nums) {
  const result = [];
  backtrack(nums, [], result, 0);
  return result;
}

function backtrack(nums, subset, result, start) {
  result.push([...subset]); // 현재 부분집합을 결과에 추가합니다.
  for (let i = start; i < nums.length; i++) {
    subset.push(nums[i]); // 다음 원소를 부분집합에 추가합니다.
    backtrack(nums, subset, result, i + 1); // 다음 재귀 호출을 수행합니다.
    subset.pop(); // 백트래킹을 위해 원소를 부분집합에서 제거합니다.
  }
}