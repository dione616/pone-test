export const sortArray = (arr: number[], leftPos: number, rightPos: number) => {
  let initialLeftPos = leftPos;
  let initialRightPos = rightPos;
  let direction = true;
  let pivot = rightPos;
  while (leftPos - rightPos < 0) {
    if (direction) {
      if (arr[pivot] < arr[leftPos]) {
        sortArray.swap(arr, pivot, leftPos);
        pivot = leftPos;
        rightPos--;
        direction = !direction;
      } else leftPos++;
    } else {
      if (arr[pivot] <= arr[rightPos]) {
        rightPos--;
      } else {
        sortArray.swap(arr, pivot, rightPos);
        leftPos++;
        pivot = rightPos;
        direction = !direction;
      }
    }
  }
  if (pivot - 1 > initialLeftPos) {
    sortArray(arr, initialLeftPos, pivot - 1);
  }
  if (pivot + 1 < initialRightPos) {
    sortArray(arr, pivot + 1, initialRightPos);
  }
  return arr;
};

sortArray.swap = (arr: number[], el1: number, el2: number) => {
  let swapedElem = arr[el1];
  arr[el1] = arr[el2];
  arr[el2] = swapedElem;
};
