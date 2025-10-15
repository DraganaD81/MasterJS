// CHALLENGE #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶
")
4. Run the function for both test datasets

Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
*/

/* My solution

const data1 = {
  dogsJulia: [3, 5, 2, 12, 7],
  dogsKate: [4, 1, 15, 8, 3],
};

const data2 = {
  dogsJulia: [9, 16, 6, 8, 3],
  dogsKate: [10, 5, 6, 1, 4],
};

// console.log(data1);
// console.log(data2);
// console.log(data1);
const data1Copy = data1.dogsJulia.slice();

data1.dogsJulia.splice(0, 1) + data1.dogsJulia.splice(-2);
// console.log(dogsJuliaShallow);
// console.log(data1);
// console.log(data1Copy);

const data1United = data1.dogsJulia.concat(data1.dogsKate);
const data2United = data2.dogsJulia.concat(data2.dogsKate);

const checkDogs = function (data) {
  data.forEach(function (dogYears, i) {
    dogYears >= 3
      ? console.log(
          `Dog number ${i + 1} is an adult, and is ${dogYears} years old`
        )
      : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
};

console.log('---First entry---');
checkDogs(data1United);
console.log('---Second entry---');
checkDogs(data2United);
*/

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  // console.log(dogsJuliaCorrected);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// Challenge #2
/* Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

/*
const dogAges = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = dogAges.map(function (age) {
  if (age <= 2) return 2 * age;
  else return 16 + age * 4;
});

const calcAdultDogs = calcAverageHumanAge.filter(function (age) {
  return age >= 18;
});

const calcAdultsAverage = calcAdultDogs.reduce((sum, age) => (sum += age), 0);

console.log(calcAverageHumanAge);
console.log(calcAdultDogs);
console.log(calcAdultsAverage / calcAdultDogs.length);
*/

const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter((age) => age >= 18);
  console.log(humanAges);
  console.log(adults);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // 2.3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

  return average;
};

const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);

// CHALLENGE #4 - Old document
/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).
Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects 😉)
Hints:
§ Use many different tools to solve these challenges, you can use the summary
lecture to choose between them 😉
§ Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion.
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

/* My solutiom

console.log(dogs);

dogs.forEach((dog) => {
  dog.recomendedFood = dog.weight ** 0.75 * 28;
});

console.log(dogs);

// const sarahDog = dogs.owners.find((owner) => dogs.owners.owner === 'Sarah');
// console.log(sarahDog);

dogs.filter((dog) => {
  if (dog.owners.includes('Sarah')) {
    if (dog.curFood > dog.recomendedFood) {
      console.log(`Sarah's dog eat too much`);
    } else {
      console.log(`Sarah's dog eat to little`);
    }
  }
});

const ownersEatTooMuch = [];
const ownersEatTooLittle = [];

dogs.filter((dog) => {
  if (dog.curFood > dog.recomendedFood) {
    ownersEatTooMuch.push(...dog.owners);
  } else {
    ownersEatTooLittle.push(...dog.owners);
  }
});

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat
too little!`);

// console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle);
// console.log(sarahsDog);

const exactlyFood = dogs.some((dog) => {
  if (dog.curFood === dog.recomendedFood) {
    return true;
  } else {
    return false;
  }
});

console.log(exactlyFood);

const okayAmount = dogs.some((dog) => {
  if (
    dog.curFood > dog.recomendedFood * 0.9 &&
    dog.curFood < dog.recomendedFood * 1.1
  ) {
    return true;
  } else {
    return false;
  }
});

console.log(okayAmount);

const dogsEatOkayAmount = [];

dogs.some((dog) => {
  if (
    dog.curFood > dog.recomendedFood * 0.9 &&
    dog.curFood < dog.recomendedFood * 1.1
  ) {
    dogsEatOkayAmount.push(dog);
  } else {
    return false;
  }
  console.log(dogsEatOkayAmount);
});

const dogsCopy = [...dogs];
console.log(dogsCopy.sort((a, b) => a.recomendedFood - b.recomendedFood));

// console.log(dogsCopy.recomendedFood.sort((a-b)=>a-b);

// console.log(typeof dogs.weight);
// console.log(dogs.some((curFood) => Number(curFood) === 250));

// console.log(dogs.some((curFood) => dogs.curFood === dogs.recomendedFood));

// dogs.find((dog) => {
//   if (dog.curFood === dog.recomendedFood) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// });

*/

// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

/* My solution

// const husky = breeds.find((breed) => breed.breed === 'Husky');

// const huskyWeight = husky.averageWeight;
// console.log(huskyWeight);

const huskyWeight = breeds.find(
  (breed) => breed.breed === 'Husky'
).averageWeight;

console.log(huskyWeight);

const dogBothActivities = breeds.find(
  (breed) =>
    breed.activities.includes('fetch') && breed.activities.includes('running')
).breed;

console.log(dogBothActivities);

const allActivities = [];
breeds.forEach((breed) => {
  allActivities.push(...breed.activities);
});

console.log(allActivities);

// const uniqueActivities = allActivities.filter((element, i, self) => {
//   return self.indexOf(element) === i;
// });

const uniqueActivities = [...new Set(allActivities)];

console.log(uniqueActivities);

const swimmingAdjacent = [
  new Set(
    breeds
      .filter((breed) => breed.activities.includes('swimming'))
      .map((breed) => breed.activities)
      .flatMap((activities) => activities)
      .filter((activity) => activity !== 'swimming')
  ),
];
console.log(swimmingAdjacent);

console.log(breeds.every((breed) => breed.averageWeight >= 10));

console.log(breeds.some((breed) => breed.activities.length > 2));

// const fetchDogs = breeds.filter((breed) => breed.activities.includes('fetch'));
// console.log(fetchDogs);

// const max = fetchDogs.reduce((max, breed) => {
//   if (breed.averageWeight > max) {
//     return breed.averageWeight;
//   } else {
//     return max;
//   }
// }, 0);

// console.log(max);

const fetchDogs = breeds
  .filter((breed) => breed.activities.includes('fetch'))
  .reduce((max, breed) => {
    if (breed.averageWeight > max) {
      return breed.averageWeight;
    } else {
      return max;
    }
  }, 0);

console.log(fetchDogs);

// const finalSwimmingActivities = [...new Set(swimmingAdjacent)];

// breeds.filter((breed) => breed.activities.includes('fetch'));

// console.log(fetchHeaviestDog);
*/

/* FINAL
// 1.
const huskyWeight = breeds.find(
  (breed) => breed.breed === 'Husky'
).averageWeight;
console.log(huskyWeight);

// 2.
const dogBothActivities = breeds.find(
  (breed) =>
    breed.activities.includes('fetch') && breed.activities.includes('running')
).breed;

console.log(dogBothActivities);

// 3.
// const allActivities = breeds.map((breed) => breed.activities).flat();
const allActivities = breeds.flatMap((breed) => breed.activities);
console.log(allActivities);

// 4.
const uniqueActivities = [...new Set(allActivities)];
console.log(allActivities);

// 5.
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter((breed) => breed.activities.includes('swimming'))
      .flatMap((breed) => breed.activities)
      .filter((activity) => activity !== 'swimming')
  ),
];
console.log(swimmingAdjacent);

// 6.
console.log(breeds.every((breed) => breed.averageWeight > 10));

// 7.
console.log(breeds.some((breed) => breed.activities.length >= 3));

// BONUS
const fetchWeights = breeds
  .filter((breed) => breed.activities.includes('fetch'))
  .map((breed) => breed.averageWeight);
const heaviestFetchBread = Math.max(...fetchWeights);

console.log(fetchWeights);
console.log(heaviestFetchBread);
*/
