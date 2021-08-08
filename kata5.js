const urlEncode = function (text) {
  let space = text.trim();
  let newString = space.split(" ").join("%20");
  return newString;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
