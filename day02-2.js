// https://adventofcode.com/2019/day/2#part2

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const solution = (arr, num = 0) => {
  if (arr[num] === 99) {
    return arr;
  } else if (arr[num] === 1) {
    arr[arr[num + 3]] = arr[arr[num + 1]] + arr[arr[num + 2]];
    return solution(arr, num + 4);
  } else {
    arr[arr[num + 3]] = arr[arr[num + 1]] * arr[arr[num + 2]];
    return solution(arr, num + 4);
  }
};

rl.on("line", input => {
  if (input === "end") {
    rl.close();
  } else {
    const inArr = input.split(",").map(function(item) {
      return parseInt(item, 10);
    });
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        const newArr = [...inArr];
        newArr[1] = i;
        newArr[2] = j;
        const current = solution(newArr)[0];
        if (current === 19690720) {
          console.log(` i: ${i} j: ${j}`);
          console.log(100 * i + j);
          return false;
        }
      }
    }
  }
});
