function calculateSum(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
const result = calculateSum(numbers);
console.log(result); // Should output 15
