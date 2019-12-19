// https://adventofcode.com/2019/day/2

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
    num += 4;
    return solution(arr, num);
  } else {
    arr[arr[num + 3]] = arr[arr[num + 1]] * arr[arr[num + 2]];
    num += 4;
    return solution(arr, num);
  }
};

rl.on("line", input => {
  if (input === "end") {
    rl.close();
  } else {
    const arr = input.split(",").map(function(item) {
      return parseInt(item, 10);
    });
    arr[1] = 12;
    arr[2] = 2;
    console.log("answer: " + solution(arr)[0]);
  }
});
