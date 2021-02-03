export const calculateAscChain = (arr: number[]) => {
  let ascChain: number[] = [];
  let currentASCChain: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] && arr[i] < arr[i + 1]) {
      currentASCChain.push(arr[i + 1]);
      ascChain =
        ascChain.length < currentASCChain.length ? currentASCChain : ascChain;
    } else if (arr[i + 1] && arr[i] >= arr[i + 1]) {
      currentASCChain = [];
    } else {
      continue;
    }
  }
  const chainFirstItem = arr.indexOf(ascChain[0]) - 1;
  ascChain.unshift(arr[chainFirstItem]);

  return [ascChain];
};
