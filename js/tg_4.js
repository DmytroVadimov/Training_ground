'use strict';
function filterArray(numbers, value) {
  const numberLarger = [];
  numbers.forEach(function (number) {
    if (number > value) {
      numberLarger.push(number);
    }
  });
  return console.log(numberLarger);
}

filterArray([1, 2, 3, 4, 5], 3); // [4, 5]
filterArray([1, 2, 3, 4, 5], 4); // [5]
filterArray([1, 2, 3, 4, 5], 5); // []
filterArray([12, 24, 8, 41, 76], 38); // [41, 76]
filterArray([12, 24, 8, 41, 76], 20); // [24, 41, 76]
