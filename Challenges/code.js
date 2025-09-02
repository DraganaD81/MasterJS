// /* CHALLENGE #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

// Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

// TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
// */

// /* Write your code below. Good luck! 🙂 */
// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// let BMIMark, BMIJohn;
// BMIMark = massMark / (heightMark * heightMark);
// BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);

// let markHigherBMI = BMIMark > BMIJohn;

// console.log(markHigherBMI);

// massMark = 95;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;

// BMIMark = massMark / (heightMark * heightMark);
// BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);

// markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

// // My comment: used const instead of var, created code without repeating - only changed values for mass and height

// /* CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.

// 👋 OPTIONAL: You can watch my solution in video format in the next lecture

// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2). */

// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // const BMIMark = massMark / (heightMark * heightMark);
// // const BMIJohn = massJohn / (heightJohn * heightJohn);
// // console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI is higher than John's!`);
// } else {
//   console.log(`John's BMI is higher than Mark's!`);
// }

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's!`);
// }

// /*
// CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110. */

// /* Write your code below. Good luck! 🙂 */

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoals = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoals) {
//   console.log('Dolphins win the trophy');
// } else if (scoreDolphins < scoreKoals) {
//   console.log('Koalas win the trophy');
// } else console.log('Both win the trophy');

// /*
// CHALLENGE #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// */

// const bill = 275;

// /* Write your code below. Good luck! 🙂 */

// const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
// );

// /*
// CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.
// */

// /* Write your code below. Good luck! 🙂 */

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // let scoreDolphins = calcAverage(44, 23, 71);
// // let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log`Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//   } else {
//     console.log('No team wins...');
//   }
// };

// // checkWinner(scoreDolphins, scoreKoalas);

// // scoreDolphins = calcAverage(85, 54, 41);
// // scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

//
/*
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/

/* Write your code below. Good luck! 🙂 */

// function calcTip(bill) {
//   if ((bill >= 50) & (bill <= 300)) {
//     const tip = bill * 0.15;
//     return tip;
//   } else {
//     const tip = bill * 0.2;
//     return tip;
//   }
// }

// /* 2 version - video solution

// const calcTip = function(bill) {
// return bill >=50 && <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const calcTip = bill >=50 && <= 300 ? bill * 0.15 : bill * 0.2;

// */

// // const bill = 100;
// // console.log(calcTip(bill));

// const bills = [125, 555, 44];
// console.log(bills);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(totals);

/* 

CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

*/

/* Write your code below. Good luck! 🙂 */

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: 'Jonh Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// When I want to assign value to const, i need to call method first.
// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);
// console.log(mark);
// // console.log(mark.calcBMI()>john.calcBMI());
// console.log(
//   mark.calcBMI() > john.calcBMI()
//     ? `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
//         john.fullName
//       }'s BMI (${john.calcBMI()})`
//     : `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
//         mark.fullName
//       }'s BMI (${mark.calcBMI()})`
// );

/* 
CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.
*/

//

// Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

///////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17,21,23] will print "... 1°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// - Create arr with given data
// - Create function
// - How to add array as argument in function
// - How to add as many iteration as I have values

// console.log(arr);
// console.log(arr[2]);

/* MY SOLUTION

const arr = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(`... ${arr[i]}°C in ${i + 1} days`);
  }
};
// console.log(arr.length);
console.log('First array');
printForecast(arr);
console.log('Second array');
printForecast(arr2);
*/

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with °C
// - String needs to contain day (index + 1)
// - Add ... between elements and start and end of string

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// console.log(`... ${data1[0]}°C ... ${data1[1]}°C`);

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}°C in ${i + 1} days ... `;
//   }
//   console.log('... ' + str);
// };

// printForecast(data1);

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of the days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

// function analyzeWorkWeek(dailyHours) {
//   if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
//     throw new Error(
//       'Input must be an array of 7 numbers representing daily work hours (Monday to Sunday).'
//     );
//   }

//   const weekdays = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday',
//   ];
//   const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
//   const averageDailyHours = +(totalHours / 7).toFixed(1);
//   const maxHours = Math.max(...dailyHours);
//   const dayIndex = dailyHours.indexOf(maxHours);
//   const dayWithMostHours = weekdays[dayIndex];
//   const daysWorked = dailyHours.filter((hours) => hours > 0).length;
//   const isFullTime = totalHours >= 35;

//   return {
//     totalHours,
//     averageDailyHours,
//     dayWithMostHours,
//     daysWorked,
//     isFullTime,
//   };
// }

// const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 5, 0]; // Monday to Sunday
// const report = analyzeWorkWeek(weeklyHours);
// console.log(report);

// const weeklyHours2 = [7.5, 8, 6.5, 0, 8.5]; // Monday to Sunday
// const report2 = analyzeWorkWeek(weeklyHours2);
// console.log(report2);

/* 
/////////////////////////////
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
// const player1 = game.players[0];
// const player2 = game.players[1];
// console.log(player1);

const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// 5.
// const [team1, draw, team2] = game.odds;
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
// console.log(team1);
// console.log(draw);
// console.log(team2);
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
// function printGoals(...player1) {
//   for (let i = 0; i < player1.length; i++) {
//     let playerScore = 0;
//     for (let j = 0; j < game.scored.length; j++) {
//       if (player1[i] === game.scored[j]) playerScore += 1;
//     }
//     console.log(player1[i], `${playerScore}`);
//   }
// }

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

// printGoals(...allPlayers);
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
// console.log('/Separator/');
// printGoals(...game.scored);
printGoals(...game.scored);

// 7.
// console.log((game.odds.team1>game.odds.team2)= game.odds.team1 || game.odds.team2);
// console.log(
//   `Probably winner is: ${
//     game.odds.team1 < game.odds.team2 ? game.team1 : game.team2
//   }`
// );

// team1 < team2 console.log('Team 1 is more likely to win');
// team1 > team2 console.log('Team 2 is more likely to win');

// Coding Challenge #2

/*
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
*/

// 1.
// for (const [index, score] of Object.entries(game.scored)) {
//   console.log(`Goal ${Number(index) + 1}: ${score}`);
// }
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2.
// let averageOdd = 0;
// let numberOdd = 0;
// for (const odd of Object.values(game.odds)) {
//   numberOdd += 1;
//   averageOdd = (averageOdd + odd) / numberOdd;
// }
// console.log(`Average odd is: ${averageOdd}`);

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
// for (const [indexOdd, valueOdd] of Object.entries(game.odds)) {
//   if (indexOdd === 'team1') {
//     console.log(`Odd of victory ${game.team1}: ${valueOdd}`);
//   } else if (indexOdd === 'x') {
//     console.log(`Odd of draw: ${valueOdd}`);
//   } else if (indexOdd === 'team2') {
//     console.log(`Odd of victory ${game.team2}: ${valueOdd}`);
//   }

//   // console.log(indexOdd, valueOdd);
// }
// console.log(Object.keys(game));
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
// 4.
// const scorers = {};
// let goalNumbers = 1;
// for (const scorerName of Object.values(game.scored)) {
//   if (scorers[scorerName]) {
//     goalNumbers += 1;
//   } else goalNumbers = 1;
//   // console.log(scoredPlayer);
//   scorers[scorerName] = goalNumbers;
//   // console.log(scorerName, scorerIndex);
// }
// console.log(scorers);

// Coding Challenge #3
/* Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17:
⚽
GOAL
GOOD LUCK 😀 */

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
// const eventsSet = new Set(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
// const eventTime = 90 / gameEvents.size;
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
  // if (key <= 45) {
  //   console.log(`[FIRST HALF] ${key}: ${value}`);
  // } else console.log(`[SECOND HALF] ${key}: ${value}`);
}

// Coding Chalenge #4
/*

Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀

*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  // console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

// FUNCTIONS

// Coding Challenge #1

/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 😉
GOOD LUCK 😀

*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]

// console.log(poll);
// console.log(poll.answers);
// console.log(...poll.answers);
// console.log(typeof poll.answers);
// console.log(poll.answers[1]);

// console.log(poll.answers);

/* My solution

// 1.
const answer = document.querySelector('.poll');

const registerNewAnswer = function () {
  const enteredNumber = prompt(
    `${poll.question} \n ${poll.options} \n (Write option number)`
  );
  function countAnswer(number) {
    if (number >= 0 && number <= 3) {
      poll.answers[number]++;
    } else {
      console.log('Wrong option entered');
    }
  }

  countAnswer(enteredNumber);

  const displayResults = function (type) {
    if (type === 'array') {
      console.log(poll.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${poll.answers}`);
    }
  };

  displayResults('string');

};

answer.addEventListener('click', registerNewAnswer);
*/

// Coding Challenge #2
/*
This is more of a thinking challenge than a coding challenge 🤓
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.
*/
/*
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
