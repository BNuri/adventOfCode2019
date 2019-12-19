// https://adventofcode.com/2019/day/1

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sum = 0,
  i = 0;

rl.on("line", input => {
  if (input === "end") {
    rl.close();
    console.log(`sum: ${sum}`);
  }
  let fuel = Math.floor(parseInt(input, 10) / 3) - 2;
  sum += fuel;
});
