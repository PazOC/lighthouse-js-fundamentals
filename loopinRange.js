// function range(start, end, step) {
//   let myArray = [];
//   if (
//     start === undefined ||
//     end === undefined ||
//     step === undefined ||
//     start > end ||
//     step <= 0
//   ) {
//     return (myArray = []);
//   } else {
//     for (let i = start; i <= end; i += step) {
//       myArray.push(i);
//     }
//   }
//   return myArray;
// }

// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));

/*
let lastIndexOf = function (array, value) {
  let i;
  for (i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
*/

/*
function concat(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }
  return array1;
}

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);

var umbrella = {
  color: "pink",
  isOpen: true,
  open: function () {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  },
  // your code goes here
  close: function () {
    if (umbrella.isOpen === true) {
      umbrella.isOpen = false;
      return "Julia closes the umbrella!";
    } else {
      return "The umbrella is already closed!";
    }
  },
};

var facebookProfile = {
  name: "Leo",
  friends: 7,
  messages: ["Meaw", "prff", "Miau", "gol!"],
  postMessage: function (message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function (index) {
    // In the following splice() method call,
    // - argument 1 = index from where the element has to be deleted
    // - argument 2 = count of elements to be deleted
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    facebookProfile.friends = facebookProfile.friends + 1;
    //friends += 1; // this statement is equivalent to the above
  },
  removeFriend: function () {
    if (facebookProfile.friends > 0)
      facebookProfile.friends = facebookProfile.friends - 1;
  },
};
*/
