/*First, create a new .js file inside your lighthouse-js-fundamentals directory on Vagrant and open it in VS Code.
Then, start working on your program by writing a loop that prints out all the numbers from 100 to 200, inclusive. Only move on to the next step when that works.*/
// for(var i = 1; i <= 200; i++);
// console.log(i);





/*Next, pick a condition you want to start with, for example printing out "Loopy" instead of multiples of 3. Figure out how you're going to check whether a number is a multiple of 3, then write your if statement. To verify that it works, consider calculating a few multiples of 3 by hand in a notebook (for example, 102, 105, 108, etc.), then making sure they're being replaced with "Loopy" in your output.
Repeat the previous step with your remaining conditions one at a time until they all work. It may help you be confident in your result if you've also calculated by hand a few multiples of 4 and a few of both 3 and 4.*/

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations (stations) {
  const goodStations = []

  for (const station of stations) {
    const capacity = station[1]

    if (capacity >= 20) {

      const type = station[2]

      if (type === "school" || type === "community centre") {
        goodStations.push(station[0])
      }
    }
  }

  return goodStations
}

console.log(chooseStations(stations))