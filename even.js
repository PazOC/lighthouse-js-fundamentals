// const isEven  = function (num) {
//   return num % 2 === 0;
// }

/*
isEven takes as its parameter a number and returns a Boolean value representing whether or not the number is even.

In the above isEven function, num can vary and therefore so will the result of num % 2 === 0. If num is even, the result of num % 2 is 0 and so the whole expression evaluates to true. The opposite happens when num is odd.

The final missing piece is the return statement. After evaluating the expression to true or false, the function returns this value where it's called.*/
const isEven  = function (num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);
/*
The variable tenIsEven is set to the value returned by isEven(10), namely true. elevenIsEven is set to the value returned by isEven(11), namely false.

We can simplify our above code a little by learning that we don't need to set our function return values to new variables before doing something with them–we can use them directly where we need them.*/

const isEven  = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));
/*
This will produce the same result as our previous example. There are a couple things to understand here. First, console.log is itself a function–only it's pre-defined by JavaScript and we can use it without having to declare it ourselves. Second, we can pass the result returned by isEven directly to console.log, which takes that value and outputs it to Terminal.
*/


