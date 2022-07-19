// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and set it to the string 'Dane'.
// We check name for equality of value and datatype with the string 'Mary'.
// If name was 'Mary', then we would console log 'Hi, Mary!'
// Since name is 'Dane', the else conditional is triggered, and we console log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create variables called secret and code. We don't yet assign secret a value, but we give code a number value of 123.
// We check code for equality of value and datatype with the number 123. Since they are equal, we give secret the value of the string 'super', and multiply the value of code by 2, making it equal to the number 246.
// We then check to see if code is greater than the number 250. If it were, secret would be set to the string value of 'duper'.
// Lastly, we console log secret, giving us the string output of 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create a boolean called isStudent, setting it equal to true, along with the variables age and zip, giving them the number values of 34 and 55407 respectively.
// We check if isStudent is true and if zip is greater than the number value 80000. If zip were greater than 80000, we would console log the string 'You're a student on the West Coast!'.
// We then check if isStudent is false or if age is less than the number value of 30. If either were true, we would console log the string 'What are your hobbies?'.
// We then check if isStudent is true. Since it is, we console log the string 'Welcome to Prime!'. If isStudent were false, we would console log the string 'How about the weather?'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne is set to 'red' and colorTwo is set to 'blue', but the instructions specify the values be the other way around.
// Should be colorOne = 'blue';
// colorTwo = 'red';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  // FIX - the instructions specify to set both colorOne and colorTwo to purple, but only colorOne is being changed.
  // Should be colorOne = colorTwo = 'purple';
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - the instructions call for checking if temp is greater than 39 AND if time is greater than or equal to 4. The current conditional will trigger the log even if only one of them is true.
// Should be if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - while the current code will check if age is greater than or equal to minAge correctly, it will log 'no entry' instead of 'entry'.
// Should be 
// if(minAge <= age) {
//    console.log('enter');
// } else {
//    console.log('no entry');
// }
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

