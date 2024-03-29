// declaring variables
var wins = 0;
var losses = 0;
//var finalScore = 0;
var score = 0;

// generating a random number for beginning the game
var random = Math.floor((Math.random()* 100)+ 19);

//generating random numbers for the crystals
var crystal1 = Math.floor((Math.random() * 12) + 1);
var crystal2 = Math.floor((Math.random() * 12) + 1);
var crystal3 = Math.floor((Math.random() * 12) + 1);
var crystal4 = Math.floor((Math.random() * 12) + 1);


//updating scores totals
var updatedScore = function() {
	$('#wins').empty();
	$('#wins').append(wins);

	$('#losses').empty();
	$('#losses').append(losses);

	$('.score').empty();
	$('.score').append(score);

}

//reset
var restartGame = function() {
	score = 0;
	random = Math.floor((Math.random()* 100)+ 19);

	$('.random').empty();
	$('.random').append(random);

	var crystal1 = Math.floor((Math.random() * 12) + 1);
	var crystal2 = Math.floor((Math.random() * 12) + 1);
	var crystal3 = Math.floor((Math.random() * 12) + 1);
	var crystal4 = Math.floor((Math.random() * 12) + 1);
	

	updatedScore();

}

//game logic
var gameLogic = function() {
	if(score == random) {
		wins = wins + 1;
		alert("You win!");
		restartGame();
	}
	else if (score > random) {
		losses = losses + 1;
		alert("You Lost!");
		restartGame();
	}
	else {
		updatedScore();
	}

}

// updating results
$('.random').append(random);
$('.score').append(score);


//adding numbers to score,. click function
$(document).ready(function(){
	$('#crystal1').click(function(){
 		score = score + crystal1;
 		gameLogic();
 	})

 	$('#crystal2').click(function(){
 		score = score + crystal2;
 		gameLogic();
 	})

 	$('#crystal3').click(function(){
 		score = score + crystal3;
 		gameLogic();
 	})

 	$('#crystal4').click(function(){
 		score = score + crystal4;
 		gameLogic();
 	})

});