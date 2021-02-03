export const calculateDescChain = (arr: number[]) => {
  let descChain: number[] = [];
  let currentDESCChain: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] && arr[i] > arr[i + 1]) {
      currentDESCChain.push(arr[i + 1]);
      descChain =
        descChain.length < currentDESCChain.length
          ? currentDESCChain
          : descChain;
    } else if (arr[i + 1] && arr[i] <= arr[i + 1]) {
      currentDESCChain = [];
    } else {
      continue;
    }
  }
  const chainFirstItem = arr.indexOf(descChain[0]) - 1;
  descChain.unshift(arr[chainFirstItem]);

  return [descChain];
};
