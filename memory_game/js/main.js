// console.log("Up and running!");
// var cards = ["queen","queen","king","king"];
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];
var attempts = 0;
var score = 0;

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		// Each time user finds a match, add a score.
		score++; 	
	}
	else {
		alert("Sorry, try again.");
	}
	// Every time match is checked, add to the number of attempts.
	attempts++;
	document.getElementById("userScore").textContent = score;
	document.getElementById("userAttempts").textContent = attempts;
}

//var flipCard = function(cardId) {
var flipCard = function() {
	// var cardOne = cards[0]; 
	// cardsInPlay.push(cardOne);
	// console.log("User flipped " + cardOne);
	// var cardTwo = cards[2]; 
	// cardsInPlay.push(cardTwo);
	// console.log("User flipped " + cardTwo);
	var cardId = this.getAttribute('data-id');

	// console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
	// console.log(cards[cardId].cardImage);
	
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length == 2) {
		checkForMatch();
	};
}

var createBoard = function() {
	for (var i = 0; i < 4; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

var resetBoard = function() {
	cardsInPlay = [];
	var cardsOnBoard = document.getElementById("game-board");
	for (i = 0; i < 4; i++) {
		cardsOnBoard.removeChild(cardsOnBoard.childNodes[0]);
	}
	createBoard();
}

var createResetButton = function() {
	var buttonElement = document.createElement('button');
	buttonElement.textContent = "Reset";
	buttonElement.addEventListener('click', resetBoard);	
	document.getElementById("reset-button").appendChild(buttonElement);
}

var displayScore = function() {	
	// Display the user score.
	var scoreElement = document.createElement('p');
	scoreElement.textContent = "Your score is  " + score + "/" + attempts + ".";
	document.getElementById("userScore").replaceChild(scoreElement);	
}

// flipCard(0);
// flipCard(2);
createBoard();
createResetButton();




// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "king";