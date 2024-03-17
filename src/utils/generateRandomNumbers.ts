export const generateRandomNumbers = (countForGenerate: number, max: number) => {
  const numbers: number[] = [];
  while (numbers.length < countForGenerate) {
    const num = Math.floor(Math.random() * max) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  numbers.sort((a, b) => a - b);
  return numbers;
};
