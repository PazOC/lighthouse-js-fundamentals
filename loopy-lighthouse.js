/*Challenge
We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
By print, we are referring to console.log.
First, create a new .js file inside your lighthouse-js-fundamentals directory on Vagrant and open it in VS Code.
Then, start working on your program by writing a loop that prints out all the numbers from 100 to 200, inclusive. Only move on to the next step when that works.*/
// for (var i = 1; i <= 200; i++) {
//   console.log(i);
// }

// let i = 100;

// while (i >= 100 && i <= 200) {
//   if (i % 3 === 0 && i % 4 === 0) {
//     console.log('LoopyLighthouse');
//   } else if (i % 3 === 0) {
//     console.log('Loopy');
//   } else if (i % 4 === 0) {
//     console.log('Lighthouse');
//   } else {
//     console.log(i);
//   }
//   i = i + 1;
// }

/*Next, pick a condition you want to start with, for example printing out "Loopy" instead of multiples of 3. Figure out how you're going to check whether a number is a multiple of 3, then write your if statement. To verify that it works, consider calculating a few multiples of 3 by hand in a notebook (for example, 102, 105, 108, etc.), then making sure they're being replaced with "Loopy" in your output.
Repeat the previous step with your remaining conditions one at a time until they all work. It may help you be confident in your result if you've also calculated by hand a few multiples of 4 and a few of both 3 and 4.*/

//Loopy Lighthouse 2

function loopyLighthouse(range, multiples, words) {
  for (let i = range[0]; i < range[1] + 1; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
}


loopyLighthouse([15, 90], [2, 5], ['Batty', 'Beacon']);

//solution from compass
for (let num = 100; num <= 200; num++) {
  if (num % 3 === 0 && num % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (num % 3 === 0) {
    console.log("Loopy");
  } else if (num % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(num);
  }
}