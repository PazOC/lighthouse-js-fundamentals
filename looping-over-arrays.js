/*Loops are used most often to iterate over a collection of data, such as arrays. While there are many ways to loop over arrays in JS, this reading will introduce you to for..of loops since it is the primary and preferred way to accomplish this.

Follow along by typing out and running these examples in your local environment so that you get some practice with this. Very soon you'll need to employ these loops (in the upcoming challenges).

Traditional for Loops Can Work
Say we have a list of all items in a shopping cart and we need to total that list in order to determine the order total.*/
const amounts = [61.00, 52.25, 112.99, 5.00]; 
// We could use a traditional for loop which we have been introduced to already:

// const total = 0;
// for (let i = 0; i < amounts.length; i++) {
//   total += amounts[i];
// }
// console.log('Order total is: ', total);

/*Newer for..of Loops Are Simpler
However, since looping from beginning to end of an array is a very common occurrence in programming, JavaScript has a newer, more purpose-built version of the for loop for this type of problem:*/

const total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);
//Here the amount variable is automatically set to each item in the array (first 61.00, then 52.25 and so on).


