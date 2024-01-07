// 노드에서 입력을 받기 위한 설정
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let queue = [];
let result = "";

// 입력 받기
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const N = Number(input.shift()); // 명령의 수

  for(let i = 0; i < N; i++) {
    const command = input[i].split(' ');

    switch(command[0]) {
      case 'push':
        queue.push(Number(command[1]));
        break;
      case 'pop':
        result += (queue.length ? queue.shift() : -1) + "\n";
        break;
      case 'size':
        result += queue.length + "\n";
        break;
      case 'empty':
        result += (queue.length ? 0 : 1) + "\n";
        break;
      case 'front':
        result += (queue.length ? queue[0] : -1) + "\n";
        break;
      case 'back':
        result += (queue.length ? queue[queue.length - 1] : -1) + "\n";
        break;
    }
  }

  console.log(result);

  process.exit();
});
