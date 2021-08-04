/*In our condition, raining is true, and therefore the console log will remind us to pack an umbrella. If raining were false, the code would do nothing.*/
const raining = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}
//Because it is raining but it is not cold, we'll be reminded to grab an umbrella before we're ready to go outside.

const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");
//But what if we wanted to do one thing in one case and another in all other cases?

const cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}
/*Now, because cold is false, the console.log within our if statement will not be executed, but the code inside the else block will. If cold were true, the opposite would happen—that is, the program would tell us to choose a scarf to wear but it won't tell us short sleeves are OK.

Doesn't that seem like a bit of a jump, going from short sleeves straight to a scarf? Let's see if we can do better.*/
const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
/*We can use these to write more complex expressions. For example, if a variable isCitizen holds a Boolean value representing whether or not someone is a citizen, and age is that same person's age, we could write the following if statement.*/
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}
/*Here we're checking that both conditions, isCitizen and age > 18 are true for the if statement overall to evaluate to true. If any of our two conditions are false, then the whole expression is false.

Let's consider another example.*/
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

/*Here our if statement is true when temperature is either below -40 or above 40 degrees.

Let's take a look at one more example.*/
if (!raining) {
  console.log("Leave your umbrella at home!");
}
/*We read the expression in the above example usually as "if not raining", but it's not always intuitive what "not true" or "not false" mean unless you remember that the ! operator reverses the value of raining. That is, if raining is true, !raining is false. If raining is false, !raining is true.*/





const whichSchool  = function (age) {
  if (age < 13){
    return "Elementary School";
  } else if (age >= 13 && age <= 18) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }
};