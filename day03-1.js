// https://adventofcode.com/2019/day/3

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const wires = new Map();

let nowX = 0,
  nowY = 0;
(cnt = 0), (distances = []);

const shortDistance = () => {
  let short = Number.MAX_VALUE;
  distances.forEach(key => {
    const distance =
      Math.abs(parseInt(key.split(",")[0])) +
      Math.abs(parseInt(key.split(",")[1]));
    if (distance < short) short = distance;
  });
  return short;
};

const path = (direction, distance) => {
  let val, num;
  switch (direction) {
    case "R":
      num = 1;
      val = "x";
      break;
    case "U":
      num = 1;
      val = "y";
      break;
    case "L":
      num = -1;
      val = "x";
      break;
    case "D":
      num = -1;
      val = "y";
      break;
  }
  for (let i = 0; i < parseInt(distance); i++) {
    if (val === "x") {
      nowX += num;
    } else {
      nowY += num;
    }
    let key = `${nowX},${nowY}`;
    let exist = wires.get(key);
    if (exist !== undefined) {
      if (exist !== cnt) {
        distances.push(key);
      }
    } else {
      wires.set(key, cnt);
    }
  }
};

const makePath = arr => {
  arr.forEach(text => {
    const direction = text[0];
    const distance = parseInt(text.slice(1));
    path(direction, distance);
  });
};

rl.on("line", input => {
  if (input === "end") {
    return rl.close();
  }
  const arr = input.split(",");
  (nowX = 0), (nowY = 0);
  makePath(arr);
  if (cnt > 0) {
    console.log(shortDistance());
  }
  cnt++;
});
