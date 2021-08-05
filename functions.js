// function isThisWorking(input) {
//   console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
//   return "Returning: I am returning this string!";
// }

// isThisWorking(3);
//ex2
// function isThisWorking(input) {
//   console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
// }

// isThisWorking(3);
//ex3
// function sleep() {
//   console.log("I'm sleepy!");
//   return "zzz";
//   return "snore";
// }

// sleep();
//ex4
// function square(x) {
//   return x * x;
// }

// function subtractFour(x) {
//   return square(x) - 4;
// }

// console.log(subtractFour(5));
//ex5
// function test() {
//   return 1;
//   return 2;
// }

// test();
//using return values
// function addTen(x) {
//   return x + 10;
// }

// function divideByThree(y) {
//   return y / 3;
// }

// var result = addTen(2);
// console.log(divideByThree(result));
/*What you've learned so far:
If an identifier is declared in global scope, it's available everywhere.
If an identifier is declared in function scope, it's available in the function it was declared in (even in functions declared inside the function).
When trying to access an identifier, the JavaScript Engine will first look in the current function. If it doesn't find anything, it will continue to the next outer function to see if it can find the identifier there. It will keep doing this until it reaches the global scope.
Global identifiers are a bad idea. They can lead to bad variable names, conflicting variable names, and messy code.*/
/*Hoisting
QUESTION 1 OF 3
What value will be printed to the console?

sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting;
}
undefined Julia
QUESTION 2 OF 3
What value will be printed to the console?

sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting = "Hello";
}
undefined Julia
QUESTION 3 OF 3
What value will be printed to the console?

function sayHi(name) {
  var greeting = "Hello";
  console.log(greeting + " " + name);
}

sayHi("Julia");
Hello Julia
What you've learned so far:
JavaScript hoists function declarations and variable declarations to the top of the current scope.
Variable assignments are not hoisted.
Declare functions and variables at the top of your scripts, so the syntax and behavior are consistent with each other.*/

// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");

// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");

/*What you've learned so far:
Function Expression: When a function is assigned to a variable. The function can be named, or anonymous. Use the variable name to call a function defined in a function expression.

anonymous function expression*/
var doSomething = function(y) {
  return y + 1;
};
// named function expression
var doSomething = function addOne(y) {
  return y + 1;
};
// for either of the definitions above, call the function like this:
doSomething(5);

/*Returns: 6

You can even pass a function into another function inline. This pattern is commonly used in JavaScript, and can be helpful streamlining your code.*/

// function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");


/*
 * Programming Quiz: Laugh (5-4)
Directions:
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.
 */

/*
 * QUIZ REQUIREMENTS

 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 */

var sound = "";
var laugh = function(num){
       for (var x = 0 ; x < num ; x++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
};


console.log(laugh(10));

/*
 * Programming Quiz: Cry (5-5)
Directions:
Write a named function expression that stores the function in a variable called cry and returns "boohoo!". Don't forget to call the function using the variable name, not the function name:
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `cry`
 * - Your code should include a named function expression stored in the variable `cry`
 * - Your code should call the function expression using the variable name, not the function name
 * - Your function expression should return the expected output
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here
var cry = function myFunction(){
  var sound = "boohoo!";
  return sound;
};
console.log(cry());

/*
 * Programming Quiz: Inline Functions (5-6)
Directions:
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.


 */
 
 /*
 * QUIZ REQUIREMENTS
 * - Your code should have an `emotions()` function
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression passed as the second parameter
 * - Your function expression should return the expected output
 */


// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// emotions() function definition
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions ("happy", function(num) {
  var sound = ""; // Local variable
  //Iterate
  for (var i = 0 ; i < num ; i++) {
      sound = sound + "ha" ;  
  }
  sound = sound +"!"; 
  return sound; 
});