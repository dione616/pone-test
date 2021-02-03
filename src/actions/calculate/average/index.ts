export const calculateAverage = (data: number[]) => {
  let total = 0;

  for (let index = 0; index < data.length; index++) {
    total += data[index];
  }

  return total / data.length;
};
