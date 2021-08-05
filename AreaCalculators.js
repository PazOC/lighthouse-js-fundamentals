function calculateRectangleArea(length, width) {
  if (length <= 0 || width <= 0) {
    return undefined;
  } else {
    return length * width;
  }
}

function calculateTriangleArea(base, height) {
  if (base <= 0 || height <= 0) {
    return undefined;
  } else {
    return (base * height) / 2;
  }
}
function calculateCircleArea(radius) {
  if (radius <= 0) {
    return undefined;
  } else {
    let area = Math.PI * (radius * radius);
    return area;
  }
}

/*
return Math.round(area * 100) / 100;
Unreachable code.
Line: 22, Col: 5
Infix operators must be spaced.
Line: 22, Col: 28
Infix operators must be spaced.
Line: 22, Col: 33
*/

console.log(calculateRectangleArea(10, 5)); // should print 50
console.log(calculateRectangleArea(1.5, 2.5)); // should print 3.75
console.log(calculateRectangleArea(10, -5)); // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
