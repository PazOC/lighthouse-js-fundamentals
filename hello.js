// const sayHello  = function (name) {
//   console.log("Hello, " + name);
// }

// sayHello();
/*
We should now see the output of the code in hello.js, namely Hello, world in the Terminal. But how does it work? Well, we've declared a function named sayHello that outputs a string to the console – that's what the console.log function does—and then we called, or invoked, it using the parentheses notation sayHello().

We can call sayHello() as many times as we want to, and while we don't have to write the whole console.log expression every time, it's still not a very useful function. So let's see if we can improve it.
*/
// const sayHello  = function (name) {
//   console.log("Hello, " + name);
// }
/*
Now we've got a function taking a value as its input, which we've referred to as name and which we concatenate to the string "Hello, " before we output the whole result. The input to the function is called a parameter, in our case we've called it name. We can think of a function's parameters as variables that are accessible and can be used only within the function, and whose values vary and are set when we call the function.
*/
// sayHello("Caliban");
// sayHello("Pam")
// sayHello("Ferdinand");
/*
We've now called our sayHello function three times. The first time, the value of name was set to "Caliban", the second time to "Pam" and the third time to "Ferdinand". As we can see, we've created a bit of functionality that can greet anyone. This is a very powerful tool—instead of having to repeat our code for every time we want to greet a new person, we can simply pass along their name to our sayHello function and the function takes care of the rest for us.

sayHello is one of two main varieties of functions:

One that produces a side effect, as in it does something.
One that produces a result, as in it calculates and returns a value we can use in further code.
One such example of the second type of function could be for determining whether a number is even. Let's do that next.

return & console.log
Before we get started it's important to understand that using return in a function is different from using console.log.

console.log:
*/
// const sayHelloToConsole  = function (name) {
//   console.log("Hello, " + name);
// }
// sayHelloToConsole('John'); 
//return:
// const returnSayHello  = function (name) {
//    return "Hello, " + name;
// }
// const greeting = returnSayHello('John');
/*
The first function immediately outputs 'Hello, John' to the console. The second returns the string 'Hello, John' to a variable and nothing will get output to the console.

A console.log statement will result in some content being displayed in the console. A return statement will not output anything to the console. However, when a function returns a value, we can still console.log it later:
*/
// const returnSayHello  = function (name) {
//   return "Hello, " + name;
// }
// const greeting = returnSayHello('John');
// console.log(greeting);
 /*
Now this will have the same result as calling the first function.

For the rest of this exercise, we will be using functions that return a value. This means that we will have to console.log our values outside of the function.

*/