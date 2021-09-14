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

// const person = {
//   firstName: 'Bob',
//   lastName: 'Smith',
//   fullName: function() {
//     return this.firstName + ' ' + this.lastName;
//   }
// };
// console.log('Hello, ' + person.fullName());


// const myFunc = function() {
//   console.log('Hello from myFunc!');
// }
// myFunc()

// const anotherVar = myFunc;
// anotherVar()

// const someObject = {
//   foo: 1,
//   bar: function() {
//     console.log('hello!');
//   }
// }

// someObject.bar()


/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work.
 * Otherwise, we want to pick something up and eat it in the lab when
 * we've got less than 20 minutes or to try a place nearby if we've
 * got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare.
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

const whatToDoForLunch = function (hungry, availableTime) {
  if (hungry === true && availableTime < 20) {
    console.log('Pick something up and eat it in the lab!');
  } else if (hungry === true && availableTime >= 20 && availableTime < 30) {
    console.log('Try a place nearby');
  } else if (hungry === true && availableTime >= 30) {
    console.log('Reconsider how much time we actually have to spare.');
  } else {
    console.log('Get back to work!');
  }
};

/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log('---');

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log('---');

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log('---');

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);