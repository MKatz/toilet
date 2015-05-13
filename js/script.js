var firstName = prompt("What's your first name?");
var lastName = prompt("What's your last name?");

alert("Good Morning, " + firstName + " " + lastName);

var string = "Matt";
string.toUpperCase()

var number = prompt("Pick a number!");
	
if (number % 7 === 0) {
	alert("You are lucky!");
};
else if (number % 2 === 0){
	alert ("even steven");
}

//2/1

var a = 5;
var b = 6;

var area = console.log((a*b)/2);

//2/2 (not solved)

var a = prompt("pick a number between 1 and 10.");

if (a === Math.floor((Math.random() * 10) + 1) {
	console.log("good work");
}
else {
	console.log("not matched");
}

//equation for random number between 1 and 10
Math.floor((Math.random() * 10) + 1);

//2/3

var a = prompt("Let's multiple and divide two numbers! Enter your first number");
var b = prompt("Enter your second number!");

console.log("multiple it equals " + (a*b) + " " + "dividing it equals " + (a/b));

//2/4

var a = prompt("Enter your first number.");
var b = prompt("Enter your second number.");

if (a > b) {
	console.log("Your first number was largest");
} else {
	console.log("Your second number was largest");
}

//2/5

var a = prompt("Enter your first number.");
var b = prompt("Enter your second number.");
var c = prompt("Enter your third number");

alert("The largest number is " + Math.max(a, b, c));

//3

var secretNumber = parseInt(Math.random() * 100, 10) + 1;

var numberGame = function(){
	var pickNumber = prompt("pick a number between 1 and 100");

	if (pickNumber == secretNumber) {
	alert("Congrats! You win!");
	}
	if (pickNumber < secretNumber) {
		alert("What a loser! Your number was too low! Guess again!");
		numberGame();
	} 
	if (pickNumber > secretNumber) {
		alert("What a loser! Your number was too high! Guess again!");
		numberGame();
	}
}

numberGame();

//4

var matt = {
	name: 'Matt',
	age: 29,
	occupation: 'Bum',
	hobby: 'Coding'
}

console.log(matt.age);
console.log(matt.hobby);

function updateHobby(object){
	object.hobby = 'Running';
}

updateHobby(matt);
console.log(matt.hobby);

matt.family = {
	girlfriend: 'Janelle',
	mom: 'Blythe',
	dog: 'Jimmy Dean'
}

// var i = 0;
// var text = " "; 

// console.log(matt.family.dog);

// while (matt.family[i]){
// 	text += matt.family[i] + " ";
// 	i++;
// }

// console.log(text);

for(matt.family = 0; matt.family.length < 3; matt.family++){
	console.log(matt.family);
}



