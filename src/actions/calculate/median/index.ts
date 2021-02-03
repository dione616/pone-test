export const findMedian = (arr: number[]) => {
  const isEven = arr.length % 2 == 0 ? true : false;
  console.log(arr.length, isEven);

  let median: number;
  if (!isEven) {
    median = arr[Math.floor(arr.length / 2)];
  } else {
    median = (arr[arr.length / 2] + arr[arr.length / 2 + 1]) / 2;
  }

  return median;
};
