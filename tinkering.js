/*
function smartGarbage
The first argument, trash, is a string that will tell our function what type of item is being submitted.

The second argument, bins, is an OBJECT containing three properties (waste, recycling, and compost), which hold some numerical value. Our function must increase the correct value in the bins object, and then return the newly updated object.


//
function smartGarbage(trash, bins) {
  const keys = Object.keys(bins);
  for (let i of keys) {
    if (i == trash) {
      console.log(bins[i]);
      bins[i] += 1;
    }
  }
  return bins;
}
console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));
*/

//

// const carPassing = function (cars, speed) {
//   cars.push({ time: Date.now(), speed: speed });
//   return cars;
// };

// const cars = [
//   {
//     time: 1568329654807,
//     speed: 40
//   },
//   {
//     time: 1568329821632,
//     speed: 42
//   },
//   {
//     time: 1568331115463,
//     speed: 35
//   }
// ];

// const speed = 38;

// carPassing(cars, speed);

/*

At this year's town festival the Codeville Vegetation Association will be handing out several awards for the best vegetables in a given category. We'll be testing out a new judging system on the best tomatoes to start, which can be judged based on their redness OR their plumpness.

Challenge

For this challenge, we'll need to implement a function called judgeVegetable()that will decide which vegetable is best based on a given judging characteristic. Our function will receive two parameters: a list of veggies(as an array of objects), and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

Our function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking in the provided category.
*/

// const judgeVegetable = function (vegetables, metric) {
//   vegetables.sort(function (redness, plumpness) {
//     return plumpness[metric] - redness[metric];
//   });
//   return vegetables[0].submitter;
// };
// const vegetables = [
//   {
//     submitter: "Old Man Franklin",
//     redness: 10,
//     plumpness: 5,
//   },
//   {
//     submitter: "Sally Tomato-Grower",
//     redness: 2,
//     plumpness: 8,
//   },
//   {
//     submitter: "Hamid Hamidson",
//     redness: 4,
//     plumpness: 3,
//   },
// ];

// const metric = "redness";

// console.log(judgeVegetable(vegetables, metric));

// const sumLargestNumbers = function (data) {
//   let firstNum = Math.max(...data);
//   data.splice(data.indexOf(firstNum), 1);
//   let secondNum = Math.max(...data);

//   return firstNum + secondNum;
// };

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

const conditionalSum = function (values, condition) {
  let num = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0 && condition === "even") {
      num += values[i];
    } else if (values[i] % 2 === 1 && condition === "odd") {
      num += values[i];
    }
  }
  return num;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

// function numberOfVowels(data) {
//   let vowels = "aeiouAEIOU";
//   let count = 0;
//   for (let i = 0; i < data.length; i++) {
//     if (vowels.indexOf(data[i]) !== -1) {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(numberOfVowels("orange"));
// console.log(numberOfVowels("lighthouse labs"));
// console.log(numberOfVowels("aeiou"));

// const instructorWithLongestName = function (instructors) {
//   let longest = "";
//   let index = 0;
//   let object;
//   for (let i = 0; i < instructors.length; i++) {
//     let nameLength = instructors[i].name;
//     if (longest.length < nameLength.length) {
//       longest = nameLength;
//       index = longest.indexOf(longest[i]);
//       object = instructors[index];
//     }
//   }
//   return object;
// };

// console.log(
//   instructorWithLongestName([
//     { name: "Samuel", course: "iOS" },
//     { name: "Jeremiah", course: "Web" },
//     { name: "Ophilia", course: "Web" },
//     { name: "Donald", course: "Web" },
//   ])
// );
// console.log(
//   instructorWithLongestName([
//     { name: "Matthew", course: "Web" },
//     { name: "David", course: "iOS" },
//     { name: "Domascus", course: "Web" },
//   ])
// );
