import fs from "fs";
import {
  calculateAverage,
  findMinMaxNumber,
  sortArray,
  findMedian,
} from "./actions/";
import {
  calculateDescChain,
  calculateAscChain,
} from "./actions/calculate/chain";
import {
  printMin,
  printMax,
  printDescChain,
  printAverage,
  printMedian,
  printAscChain,
} from "./actions/print";

const timeStart = new Date();
console.log(timeStart);

const run = fs.readFile("src/data/10m_2021.txt", "utf-8", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  const filteredNumbers = data.split("\n").filter((x) => !isNaN(+x));
  const content = filteredNumbers.map((x) => +x);

  //actions
  const [min, max] = findMinMaxNumber(content);
  const average = calculateAverage(content);

  const [ascChain] = calculateAscChain(content);
  const [descChain] = calculateDescChain(content);

  const sorted = sortArray(content, 0, content.length - 1);
  const median = findMedian(sorted);

  printMin(min);
  printMax(max);
  printAverage(average);
  printMedian(median);
  printAscChain(ascChain);
  printDescChain(descChain);

  //calculate time
  const timeFinish = new Date();
  console.log(timeFinish);
  let result = timeFinish.getTime() - timeStart.getTime();
  console.log(result / 1000);
});

export { run };
