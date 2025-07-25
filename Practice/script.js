'use strict';

// For of petlja kojom se prolazi kroz svaki element iterabilnog objekta

const numbers = [10, 20, 30, 40];

console.log(typeof numbers, numbers);

for (const number of numbers) console.log(number);

console.log(...numbers);

// forEach() kada mi iz niza trebaju i indeksi

numbers.forEach((value, index) => {
  console.log(index, value);
});

const numbersMap = new Map();

// Dva načina zapisa funkcije forEach

numbers.forEach((value, index) => {
  numbersMap.set(index, value);
});

// numbers.forEach(function (value, index) {
//   numbersMap.set(index, value);
// });

console.log(numbersMap);
