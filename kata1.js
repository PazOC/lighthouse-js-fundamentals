const sumLargestNumbers = function (data) {
  let firstNum = Math.max(...data);
  data.splice(data.indexOf(firstNum), 1);
  let secondNum = Math.max(...data);

  return firstNum + secondNum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
