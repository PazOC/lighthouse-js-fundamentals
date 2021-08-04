// const whichSchool  = function (age) {
//   if (age < 13){
//     return "Elementary School";
//   } else if (age >= 13 && age <= 18) {
//     return "Secondary School";
//   } else {
//     return "Lighthouse Labs";
//   }
// };

// var x = 1;
// while (x <= 10000) {
//   console.log(x + "mississippi!");
//   x = x + 1;
// }

// var x = 1;

// // while loop with a stop condition
// while (x <= 20) {
//     if (x % 3 === 0 && x % 5 === 0) {
//         console.log("JuliaJames");
//     }else if (x % 5 === 0) {
//         console.log("James");
//     }else if (x % 3 === 0) {
//         console.log("Julia");
//     }
//     else {
//         console.log(x);
//     }
//     // increment x at the end of each loop
//     x = x + 1 ; 
// }

// var num = 99;

// while (num >=1) {
//     // Last iteration. Note occurances of bottle, bottle, bottleS
//     if (num === 1) {
//         console.log(num + " bottle of juice on the wall! "
//                     + num + " bottle of juice! Take one down, pass it around... "
//                     + (num-1) + " bottles of juice on the wall!");
//     }
//     // Second-last iteration. Note occurances of bottleS, bottleS, bottle
//     else if (num === 2){
//         console.log(num + " bottles of juice on the wall! "
//                     + num + " bottles of juice! Take one down, pass it around... "
//                     + (num-1) + " bottle of juice on the wall!");
//     }
//     // All other iterations. Note occurances of bottleS, bottleS, bottleS
//     else {
//         console.log(num + " bottles of juice on the wall! "
//                     + num + " bottles of juice! Take one down, pass it around... "
//                     + (num-1) + " bottles of juice on the wall!");
//     }
//     num = num - 1;
// }

// n = 60

// // While loop with a stop condition
// while (n >= 0) {
//     if (n === 50) {
//         console.log("Orbiter transfers from ground to internal power");
//     }
//     else if (n === 31) {
//         console.log("Ground launch sequencer is go for auto sequence start");
//     }
//     else if (n === 16) {
//         console.log("Activate launch pad sound suppression system");
//     }
//     else if (n === 10) {
//         console.log("Activate main engine hydrogen burnoff system");
//     }
//     else if (n === 6) {
//         console.log("Main engine start");
//     }
//     else if (n === 0) {
//         console.log("Solid rocket booster ignition and liftoff!");
//     }
//     else{
//         console.log("T-"+n+" seconds");
//     }

//     //Never forget to decrement/increment the iteration variable in a while loop
//     // Otherwise, you loop will run infinite iterations
//     n = n-1;
// }

// for (var i = 0; i < 6; i = i + 1) {
//   console.log("Printing out i = " + i);
// }

//nested loop
for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
} 

//seat 
var row = 0;  // initial value of the row
var seat = 0; // initial value of the seat within a row

// One loop inside another is called Nested loop.
// Outer `for` loop, to iterate over the rows
for (row = 0; row <= 25; row++){

    // Inner `for` loop, to iterate over the seats within a row
    // In this loop, the value of `row` variable would change only after 100 iterations
    for(seat = 0; seat <= 99; seat++){
        console.log(row+"-"+seat);
    }
}