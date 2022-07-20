//1. Declare variables called 'country', 'continent' and 'population' and
//assign their values according to your own country (population in millions)
//2. Log their values to the console

/*const myCountry = "Romania";
console.log(myCountry);

const myContinent = "Europe";
console.log(myContinent);

let myPopulation = 19;
console.log(myPopulation);

const language = "romanian";
console.log(language);*/

/*LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console*/

//

// console.log(typeof isIsland);
// console.log(typeof myCountry);
// console.log(typeof myContinent);
// console.log(typeof myPopulation);
// console.log(typeof language);

/*LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some 
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never 
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens



LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population, 
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than 
Finland?
4. The average population of a country is 33 million people. Does your country 
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million 
people speak portuguese'*/

//console.log(myPopulation / 2);

// console.log(myPopulation++);
// console.log(myPopulation++);

// let populationFinland = 6000000;

// console.log(myPopulation > populationFinland);

// let averagePopulation = 33000000;
// console.log(myPopulation < averagePopulation);

// let description =
//   myCountry +
//   " is in " +
//   myContinent +
//   ", and its " +
//   myPopulation +
//   " people speak " +
//   language +
//   ".";
// console.log(description);

// let descriptionSecond = `${myCountry} is in ${myContinent}, and its ${myPopulation} people speak ${language}.`;
// console.log(descriptionSecond);

/*
LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the 
console: 'Portugal's population is above average'. Otherwise, log a string like 
'Portugal's population is 22 million below average' (the 22 is the average of 33 
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original */

// if (myPopulation > 33000000) {
//   console.log("Portugals's Population is above average.");
// } else {
//   console.log("Portugal's population is 22 million below average.");
// }

/*LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5';  //4
"9" - "5"; //617
'19' - '13' + 17; //617
'123' < 57; //false
5 + 6 + '4' + 9 - 4 - 2; //5643
2. Execute the operations to check if you were righ*/

// "9" - "5"; //4
// "19" - "13" + "17"; //617
// "19" - "13" + 17; //617 - 23 correct
// "123" < 57; //false
// 5 + 6 + "4" + 9 - 4 - 2; //5643  - 1143 correct

/*LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this: 
prompt('How many neighbour countries does your country 
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality 
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when 
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of 
'numNeighbours'. Notice what happens when there is exactly 1 border! Why 
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now 
when you input 1
8. Reflect on why we should use the === operator and type conversion in this 
situation*/

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// console.log(numNeighbours);

// if (numNeighbours === 1) {
//   console.log("Only 1 border");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

/* LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a 
country that speaks english, has less than 50 million people and is not an 
island.
3. Write an if statement to help Sarah figure out if your country is right for her. 
You will need to write a condition that accounts for all of Sarah's criteria. Take 
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If 
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily 
change some variables in order to make the condition true (unless you live in 
Canada :D */
/*
const myCountry = "Romania";
// console.log(myCountry);

const myContinent = "Europe";
//console.log(myContinent);

//const myPopulation = 19;
//console.log(myPopulation);

//const language = "romanian";
//console.log(language);

/*let isIsland = false;

if (language === "english" && myPopulation < 50 && !isIsland) {
  console.log("You should live in Romania");
} else {
  console.log("Romania does not meet your criteria :(");
}*/

/*Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK */

/*let dolphinsOne = 97;
let dolphinTwo = 1;
let dolphinsThree = 101;
let koalasOne = 109;
let koalasTwo = 95;
let koalasThree = 1;

console.log(
  dolphinsOne,
  dolphinTwo,
  dolphinsThree,
  koalasOne,
  koalasTwo,
  koalasThree
);

let averageScorDolphins = (dolphinsOne + dolphinTwo + dolphinsThree) / 3;
console.log(averageScorDolphins);

let averageScorKoalas = (koalasOne + koalasTwo + koalasThree) / 3;
console.log(averageScorKoalas);

if (averageScorDolphins > averageScorKoalas) {
  console.log("The winner is Dolphins team");
} else if ("averageScorDolphins === averageScorKoalas") {
  console.log("Both teams are winners!");
} else {
  ("The winner is Koalas team");*/
//}

/*
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
*/

/*if (averageScorDolphins > averageScorKoalas && averageScorDolphins >= 100) {
  console.log("The winner is Dolphins team");
} else if (
  averageScorKoalas > averageScorDolphins &&
  averageScorKoalas >= 100
) {
  console.log("The winner is Koalas team");
} else if (
  averageScorDolphins === averageScorKoalas &&
  averageScorDolphins >= 100 &&
  averageScorKoalas >= 100
) {
  console.log("Both teams are winners!");
} else {
  console.log("No one wins the trophy");
} */

/*LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'*/

/*const language = "romanian";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
*/
/*LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator 
to log a string like this to the console: 'Portugal's population is above average'. 
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original*/

/*const myPopulation = 19;

myPopulation > 33
  ? console.log(`Romania's population is above average`)
  : console.log(`Romania's population is below average`);*/

/*LECTURE: Functions
  1. Write a function called 'describeCountry' which takes three parameters: 
  'country', 'population' and 'capitalCity'. Based on this input, the 
  function returns a string with this format: 'Finland has 6 million people and its 
  capital city is Helsinki'
  2. Call this function 3 times, with input data for 3 different countries. Store the 
  returned values in 3 different variables, and log them to the console*/

  "use strict";

  function describeCountry(country, population, capitalCity) {
const myFirstFunction = `${country} has ${population} people and its capital city is ${capitalCity}`;
return myFirstFunction;

const newValue = describeCountry(Finland, 6 million, Helsinki);
console.log(describeCountry);