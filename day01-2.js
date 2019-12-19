// https://adventofcode.com/2019/day/1#part2

const readline = require("readline");

const fuelArr = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calcFuel = input => Math.floor(parseInt(input) / 3) - 2;

const calculateFuel = (input, arr = []) => {
  let fuel = calcFuel(input);
  if (fuel > 0) {
    arr.push(fuel);
    return calculateFuel(fuel, arr);
  } else {
    return arr;
  }
};

rl.on("line", input => {
  if (input === "end") {
    console.log(fuelArr.reduce((a, b) => a + b));
    rl.close();
  }
  fuelArr.push(calculateFuel(input).reduce((a, b) => a + b, 0));
});
