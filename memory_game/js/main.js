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

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
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
	console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
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
		document.querySelector(".board").appendChild(cardElement);
	}
}

// flipCard(0);
// flipCard(2);
createBoard();




// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "king";