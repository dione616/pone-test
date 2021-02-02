import fs from "fs";
import util from "util";

const timeStart = new Date();
console.log(timeStart);
const d = fs.readFile("src/data/10m_2021.txt", "utf-8", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  const content = data.split("\n").map(Number);

  //find max
  const [min, max] = findMaxNumber(content);
  console.log(`MAX is : ${max}`);
  console.log(`MIN is : ${min}`);
  const timeFinish = new Date();

  console.log(timeFinish);
  let result = timeFinish.getTime() - timeStart.getTime();
  console.log(result / 1000);
});

const findMaxNumber = (data: number[]) => {
  let max = data[0]; //consdier the first elem as the maximum
  let min = data[0]; //consdier the first elem as the minimum

  for (let i = 1; i < data.length; i++) {
    let currentItterationValue = data[i];
    max = max > currentItterationValue ? max : currentItterationValue;
    min = min < currentItterationValue ? min : currentItterationValue;
  }

  return [min, max];
};
