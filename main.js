// 1.  Log your last name to the console.
console.log('Question #1');
console.log('Villagrana');
// 2.  Declare a variable called "movie" and log it to the console.
console.log('Question #2');
var movie;
console.log(movie);
// 3.  Declare three variables with integer values. Add the first two, then multiply that sum by the third.
console.log('Question #3');

var num1 = 20;
var num2 = 23;
var num3 = 34;
var sum = num1 + num2;
console.log(sum);

var product = num3 * sum;
console.log(product);
// 4.  Declare two variable with string values. Declare a third varible that concatenates the first two.
console.log('Question #4');

var stringOne = "Hello";
var stringTwo = "World";
var concatStrings = stringOne + ' ' + stringTwo;
console.log(concatStrings);
// 5.  Prompt a user to enter a number. Multiply that by 100.
console.log('Question #5');

// var inputNum = parseInt(prompt("Enter a number: "));
// var multiplyInput = inputNum * 100;
// console.log(multiplyInput);
// 6.  Prompt a user to enter his/her name, favorite band, and the year they were born. Log the sentence:
//     "My name is ______, and I'm ___ year old fan of ________."
console.log('Question #6');

// var name = prompt("Enter your name: ");
// var favoriteBand = prompt("Enter your favorite band: ");
// var birthYear = parseInt(prompt("Enter the year you were born"));
// var currentYear = new Date().getFullYear();
// var age = currentYear - birthYear;

// console.log("My name is " + name + " , and I'm a " + age + ' year old fan of ' + favoriteBand);

// 7.  Create an alert that uses the response from a prompt.
console.log('Question #7');

// var response = prompt('Enter the word you want to see alert: ');
// alert(response);


// 8.  Declare an array with six items. Do this two different ways.
console.log('Question #8');

var teams = ['broncos', 'pats', 'packers', 'seahawks', 'bears', '49ers'];

var teams2 = Array('broncos', 'pats', 'packers', 'seahawks', 'bears', '49ers');
console.log(teams);
console.log(teams2);

// 9.  Add two additional items to the beginning of the array.
console.log('Question #9');
teams.unshift('texans', 'raiders');
console.log(teams);


// 10. Remove the last two items.
console.log('Question #10');

teams.splice(-2);
console.log(teams);

// 11. Add one item between the 2nd and 3rd item.
console.log('Question #11');

teams.splice(2, 0, 'chargers')
console.log(teams);
// 12. Combine all of the elements of the array into a string.
console.log('Question #12');

var teamString = teams.join(', ');
console.log(teamString);
// 13. Arrange the items alphabetically.
console.log('Question #13');
var sortedTeams = teams.sort();
console.log(sortedTeams);
// 14. Create and array of three arrays: colors, names, and schools. Each inner array should have three items.
console.log('Question #14');

var aryArrays = [['blue', 'gray', 'black'], ['John', 'Tom', 'Jerry'], ['MIT', 'Harvard', 'Stanford']];

console.log(aryArrays);

// 15. Remove the last item from the second array.
console.log('Question #15');
var lastItem = aryArrays[1].splice(-1);
console.log(aryArrays[1]);

// 16. Declare an object called "car" that describes the make, model, and color of your car.
console.log('Question #16');
var car = {
  make: "Honda",
  model: "Accord",
  color: "Silver"
};

console.log(car);
// 17. To the car object, add the key/value pair describing the year of your car.
console.log('Question #17');
car.year = '1979';
console.log(car);

// 18. The the car object, add a "repairs" key with the value being an array of the last three items you fixed on the car.
console.log('Question #18');

car.repairs = ['oil', 'windshield', 'heater'];
console.log(car);
// Use the following object for questions 19-25:
guests = {
  "joe": {
    first_name: "Joe",
    last_name: "Jenkins",
    preferences: {
      meal: "meat",
      favorite_genres: ["jazz", "soul"],
    },
    sitting_next_to: "sue",
    correspondence: [
      {date: "11/4/2014", description: "sent invitation"},
      {date: "12/2/2014", description: "replied yes"},
    ],
  },
  "sue":{
    first_name: "Sue",
    last_name: "Summers",
    preferences: {
      meal: "fish",
      favorite_genres: ["funk", "blues"],
    },
    sitting_next_to: "joe",
    correspondence: [
      {date: "11/7/2014", description: "sent invitation"},
      {date: "12/8/2014", description: "replied yes + 1"},
    ],
  },
}

// 19. Find Joe's last name.
console.log('Question #19');
var joesName = guests.joe.first_name;
console.log(joesName);

// 20. Log to the console the first genre each person listed.
console.log('Question #20');
var firstGenre = function() {
  for (guest in guests) {
    console.log(guests[guest]['preferences']['favorite_genres'][0]);
  }
}
firstGenre();
// 21. Find the first name of the person sitting next to Joe.
console.log('Question #21');
var nextToJoe = guests.joe.sitting_next_to;
console.log(nextToJoe);

// 22. Find what meal Sue will be eating.
console.log('Question #22');
var sueMeal = guests.sue.preferences.meal;
console.log(sueMeal);

// 23. Find the date of the first correspondence with Joe.
console.log('Question #23');
var corrWithJoe = guests.sue.correspondence[0].date;
console.log(corrWithJoe);

// 24. find the desciption of the last correspondence with Sue.
console.log('Question #24');
var corrWithSue = guests.sue.correspondence[1].description;
console.log(corrWithSue);

// 25. Create a string uses variables to read:
console.log('Question #25');
//     "As of [date of Joe's last correspondence], [Joe's first name] [Joe's last correspondence description].
//      He will be eating [Joe's meal choice] while listening to [Joe's first favorite genre] and [Joe's second favorite genre]
//      and sitting next to [Sue's first name][Sue's last name]."

/* Sorry guys, I needed a break from Joe and Sue!  LOL  */

// 26. Create an object with both Literal Notation and Constructor.

var hotel = {};

var hotel = new Object();
// 27. Output each item in the following Array to your console:
console.log('Question #27');
var bedroom = ['bed', 'nightstand', 'television', 'Channing Tatum'];
var i = 0;

while (i < bedroom.length){
  console.log(bedroom[i]);
  i++;
}

// 28. Log to the console numbers 25 to 85, only in increments of 15.
console.log('Question #28');

for (num = 25; num < 86; num+=15) {
  console.log(num);
}
// 29. Write a while loop that logs "This loop is number: ___" to the console 5 times. Use your counter to fill in the blank.
console.log('Question #29');
counter = 0;
while (counter < 5) {
  console.log("This is number: " + counter);
  counter++;
}

// 30. Use a for loop to rewrite #29.
console.log('Question #30');
for (counter = 0; counter < 5; counter++) {
  console.log("This is number: " + counter);
}
// 31. Prompt a user to pick either a number or a word. Create a script that alerts the user whether they chose a number or a word.
console.log('Question #31');

var userInput = parseInt(prompt("Enter a number or a word: "));

if (isNaN(userInput)) {
  console.log("You chose a word!");
}else {
  console.log("You chose a number!");
}

// 32. Use Math.floor and Math.random to roll two six sided dice for two players. Determine which player wins with the higher roll.
console.log('Question #32');



// 33. Define a function called "divideByThree". It should accept one parameter called "number".
//     The function should divide the number by three and output the answer.
//     If the number is not divisible by three with a remainder of zero, alert the user that their number is invalid.
console.log('Question #33');

var divideByThree = function(number) {
  divide = number / 3;
  console.log(divide);
}


// 34. Write a function that accepts the following array and separates the people into men and women.
console.log('Question #34');

//     HINT: The men are even and the women are odd.
       battingLineUp= ["Henry", "Shirley", "Mark", "Tina", "Max", "Sara", "Eric", "Lisa", "Ralph", "Connie", "Drew"]
// 35. Prompt a user to enter their phone number. Write a function that outputs their phone number in a pretty format like:
//     (555) 883-3985
//     Alert the user if they have entered anything except a 10 digit number.
// 36. Write a helpufl tipping function that accepts two parameters, the bill amount and service score based on a scale of 1-10.
//     The output should be the bill, the tip, and the total amount.
//     Service score 1-3 denotes a 10% tip. 4-6 = 15%, 7-9 = 20%, 10 = 50%.
// 37. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
       arrayOfSchtuff = ["four", 55, {myDog: "Scranton"}, "fifty-one", 21, 398577729, "3,333"]
// 38. Use a function to ask a user for a US Dollar amount and converts it to Canadian Dollars.
// 39. Add the option of converting to Euros. First ask the user which currency they want the conversion for, then ask for the dollar amount.
// 40. Write a function that returns an object of duplicate letters in an string.
//     "Baby Aaron" should return {"b":2, "a":3}
// BONUS: Write a function named pluralize that takes 2 arguments, a noun and a number. It returns the number and pluralized form, like "5 cats" or "1 dog".
//        Make it handle a few collective nouns like "sheep" and "geese"
//
// =========================== jQuery =========================
// 41. Add the jQuery CDN script to index.html
//$(document).ready(function(){

// 42. Turn the square into a circle.

// 43. When the 'Fade' button is clicked, have your circle fade in/out with any speed you like.
//     Hint: http://api.jquery.com/fadetoggle/

// 44. Put your name on the page.

// 45. Add some flair to your name when you click the 'Stylize!' button.
//     Feel free to edit the HTML however you see fit.

// 46. Create as many pacman clones as you see fit.

// 47. Add the class 'invisible' to each list item when they are hovered over.

// 48. When either square is clicked, have them swap colors.

// 49. When you click the vertical button, the squares above should align vertically.

// 50. Unhide the message.

//});
