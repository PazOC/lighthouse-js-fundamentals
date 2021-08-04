// ex1
//const raining = true;
// const cold = true;

// if (raining) {
//   console.log("Don't forget your umbrella!");
// }

// if (cold) {
//   console.log("Make sure you pick out a scarf!");
// }

// console.log("Now you're ready to go outside!");

//ex2
// But what if we wanted to do one thing in one case and another in all other cases?
// const cold = false;

// if (cold) {
//   console.log("Make sure you pick out a scarf!");
// } else {
//   console.log("Short sleeves are fine.");
// }

// Now, because cold is false, the console.log within our if statement will 
//not be executed, but the code inside the else block will. If cold were true,
// the opposite would happen—that is, the program would tell us to choose a
// scarf to wear but it won't tell us short sleeves are OK.

//ex3

const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");