// console.log("Up and running!");


var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var cardOne = cards[0]; 
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2]; 
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length == 2) { // if statement that checks to see if the length of the cardsInPlay array is 2.
	if (cardsInPlay[0] === cardsInPlay[2]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
}



// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "king";