const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, ...lines] = input;

let stack = [];
let answer = [];

const fn = (cmd, value) => {
  switch (cmd) {
    case "push":
      stack.push(value);
      break;
    case "pop":
      const end = stack.pop();
      answer.push("\n");
      answer.push(end !== undefined ? end : -1);
      break;
    case "size":
      answer.push("\n");
      answer.push(stack.length);
      break;
    case "empty":
      answer.push("\n");
      answer.push(stack.length === 0 ? 1 : 0);
      break;
    case "top":
      const top = stack[stack.length - 1];
      answer.push("\n");
      answer.push(top !== undefined ? top : -1);
      break;
    default:
      break;
  }
};

lines.forEach((el) => {
  const [cmd, value] = el.split(" ");
  // console.log("cmd>>>", cmd);
  fn(String(cmd), value);
});
answer.shift();
console.log(answer.join(""));