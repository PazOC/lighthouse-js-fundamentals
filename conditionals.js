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

// const temperature = 16;

// if (temperature < 0) {
//   console.log("Make sure you pick out a scarf!");
// } else if (temperature < 15) {
//   console.log("Short sleeves won't cut it!");
// } else {
//   console.log("Short sleeves are fine.");
// }

// console.log("Now you're ready to go outside!");

//explained
//This looks a lot more complicated, so let's go through it step by step. 
//Our first if condition is whether temperature is less than 0. If that 
//condition evaluates to true, then JavaScript will tell us to wear a scarf 
//before telling us to go outside. If this first if condition is false, then 
//JavaScript will jump to the next else if condition, that is whether 
//temperature is less than 15. In our case this is the first condition that
// is true, and so this is what was logged to our console. If, however,
// temperature was neither less than 0 nor less than 15, then the else
// block would be executed.

//Logical operators

// if statements become even more powerful when we understand how to use
// logical operators in conjunction with them. JavaScript's logical operators
// are:

// && - logical AND
// || - logical OR
// ! - logical NOT.
// We can use these to write more complex expressions. For example, if a 
//variable isCitizen holds a Boolean value representing whether or not
// someone is a citizen, and age is that same person's age, we could write 
//the following if statement.

// const isCitizen = true;
// const age = 26;

// if (isCitizen && age > 18) {
//   console.log("You are eligible to vote.");
// }
//
// Here we're checking that both conditions, isCitizen and age > 18 are true
// for the if statement overall to evaluate to true. If any of our two 
//conditions are false, then the whole expression is false.

// Let's consider another example.

// const temperature = 45
// if (temperature < -40 || temperature > 40) {
//     console.log("Maybe going outside isn't such a great idea…");
//   }

//Let's take a look at one more example.

const raining = false
if (!raining) {
  console.log("Leave your umbrella at home!");
}

//We read the expression in the above example usually as "if not raining",
// but it's not always intuitive what "not true" or "not false" mean unless
// you remember that the ! operator reverses the value of raining. That is,
// if raining is true, !raining is false. If raining is false, !raining is true.