//소수
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

//순열
const generatePermutations = (numbers) => {
  const perms = new Set();
  const nums = numbers.split('');

  const backtrack = (cur, remaining) => {
    if (cur.length > 0) {
      perms.add(parseInt(cur.join('')));
    }

    for (let i = 0; i < remaining.length; i++) {
      cur.push(remaining[i]);
      backtrack(cur, remaining.slice(0, i).concat(remaining.slice(i + 1)));
      cur.pop();
    }
  };

  backtrack([], nums);
  return perms;
};

const solution = (numbers) => {
  const perms = generatePermutations(numbers);
  let primeCount = 0;

  perms.forEach((num) => {
    if (isPrime(num)) {
      primeCount++;
    }
  });

  return primeCount;
};
