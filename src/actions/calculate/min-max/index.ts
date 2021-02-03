export const findMinMaxNumber = (data: number[]) => {
  let max = data[0]; //consdier the first elem as the maximum
  let min = data[0]; //consdier the first elem as the minimum

  for (let i = 1; i < data.length; i++) {
    let currentItterationValue = data[i];
    max = max > currentItterationValue ? max : currentItterationValue;
    min = min < currentItterationValue ? min : currentItterationValue;
  }

  return [min, max];
};
