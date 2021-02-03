import fs from "fs";
import {
  calculateAverage,
  findMinMaxNumber,
  sortArray,
  findMedian,
} from "./actions/";

const timeStart = new Date();
console.log(timeStart);

const run = fs.readFile("src/data/10m_2021.txt", "utf-8", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  const filteredNumbers = data.split("\n").filter((x) => !isNaN(+x));
  const content = filteredNumbers.map((x) => +x);

  const [min, max] = findMinMaxNumber(content);
  const average = calculateAverage(content);
  const sorted = sortArray(content, 0, content.length - 1);
  const median = findMedian(sorted);

  console.log(`MAX is : ${max}`);
  console.log(`MIN is : ${min}`);
  console.log(`AVERAGE is : ${average}`);
  console.log(`MEDIAN is : ${median}`);

  //calculate time
  const timeFinish = new Date();
  console.log(timeFinish);
  let result = timeFinish.getTime() - timeStart.getTime();
  console.log(result / 1000);
});

export { run };
