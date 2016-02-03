var colors = ['#ff49db', '#7e5bef', '#ffc82c','#13ce66', '#ff7849'];
var numPlayers = 1;
var currentPlayer = 1;
var player1Score = 0;
var player2Score = 0;
var answeredcards = 0;
// var cards = {
// 	"Coffee": {
// 		"questions":[
// 					"True or False: Caffeine is on the International Olympic Committee list of prohibited substances." ,
// 					"Which country produces the most coffee per year in the world? <ul><li>Brazil</li><li>Vietnam</li><li>Columbia</li></ul>" ,
// 						"Coffee, as a world commodity, is second only to what?" ,
// 					],
// 		"answers":[
// 					"True" ,
// 					"Brazil" ,
// 					"Oil" ,
// 					],
// 		"index": 0
// 	}
// }
var questions = {
	"Coffee": [
	"True or False: Caffeine is on the International Olympic Committee list of prohibited substances." ,
	"Which country produces the most coffee per year in the world? <ul><li>Brazil</li><li>Vietnam</li><li>Columbia</li></ul>" ,
		"Coffee, as a world commodity, is second only to what?" ,
	],

	"Molly Moon's Ice Cream": [
	"True or False: Prior to opening Molly Moons ice cream, Molly was the executive director of Teach for America." ,
	"Which one of these flavors is a permeant Molly Moon ice cream flavor? <ul><li>Earl grey</li><li>Cookie dough</li><li>Gooey brownie</li></ul>" ,
	"What is the full name of the creator of Molly Moons ice cream?" , 
	],

	"Rain": [
	"True or false: Rain can fall up to 15 mph." ,
	"Which group released the 1982 hit <em>Its raining men</em>? <ul><li>The Weather Girls</li><li>Expose</li><li>Vanity 6</li></ul>" ,
	"In the 1952 musical movie adaptation <em>Singing in the rain</em> which actor played the lead actor Don Lockwood?" ,
	],

	"Pike Place Market": [ 
	"True or False: The market is a significant provider of low income housing." ,
	"Approximately how many visitors visit the market annually? <ul><li>10 million</li> <li>20 million</li> <li>25 million</li></ul>" ,
	"What kind of animal is Rachel, the markets unofficial mascot?" ,
	],

	"Space Needle": [
	"True or false: The space needle is fastened to the foundation with 150 bolts. ",
	"In 2000 the Space needle completed a renovation, how much did the renovation cost? <ul><li>30 Million</li><li>15 million</li><li>20 million</li></ul>",
	"How many feet high is the observation deck?",
	],

	"Beer": [
	"True or false: There are over 200 craft breweries in Seattle." ,
	"Which of the following is not a craft brewery in Seattle? <ul><li>Noble Ale</li><li>Outer Planet</li><li>Peddler</li></ul>" ,
	"What is the study of beer and beer making called?" ,
	],
};

var answers = {
	"Coffee": [
	"True" ,
	"Brazil" ,
	"Oil" ,
	],

	"Molly Moon's Ice Cream": [
	"False" ,
	"Earl grey" ,
	"Molly Moon Neitzel" ,
	],

	"Rain": [
	"False",
	"The Weather Girls",
	"Gene Kelly",
	],

	"Pike Place Market": [
	"True",
	"10 million",
	"Pig",
	],

	"Space Needle": [
	"False",
	"20 million",
	"520 feet",
	],

	"Beer": [
	"True",
	"Noble Ale",
	"Zythology",
	],
};

// var answered = [false,false,false,false,false,false];

$(document).ready(function() {

	$('.back').hide()

	function createdots () {
		for(var i = 0; i < 75; i++) {
			var dot = document.createElement("div")
			var x = Math.floor(Math.random() * document.body.offsetWidth);
			var y = Math.floor(Math.random() * document.body.offsetHeight);
			// console.log(x)
			dot.className = "dotstyle"
			dot.style.position = "absolute"
			dot.style.right = x + "px";
			dot.style.top = y + "px";
			dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
			document.body.appendChild(dot);
		}
	}
	createdots();
	
	$(".item").on('click', function() {
		
		var guess = $(this).parent().find("#text-form input").val(); // 'coffee'
		// console.log(guess)
		var answer = $(this).attr("data-value"); //{}
		// console.log(answer)
		
		var randomIndex = Math.floor(Math.random() * questions[answer].length);
	 	var randomQuestion = questions[answer][randomIndex];
	 	// console.log(randomQuestion)
	 	var questiondiv = $(this).parent().next()
	 	
	 	//this handler stops the card from flipping when the input field is clicked 
	 	$(".back").on('click', function (e) {
	 		e.stopPropagation();
	 	});

	 	//This handler will listen to see when text is inputed
	 	if(guess == answer) {
	 		questiondiv.addClass("card_text").html(randomQuestion);
	 		
	 		$(this).parent().next().show().append('<form><input class="answerbox" type="text" placeholder="Your Answer"></form>');
			$(this).parent().parent().flip();
			$(".answerbox").change(function() {
	 			// console.log(answers[answer][randomIndex])
	 			// console.log($(this).val())
		 		if(answers[answer][randomIndex] == $(this).val()) {
		 			swal("Correct!", "You trivia genius, you!", "success")
		 			answeredcards += 1;
		 			if (currentPlayer == 1 || numPlayers == 1) {
		 				player1Score += 1;
		 				// console.log('Player 1\'s score: ' + player1Score);
		 				$("#p1Score").text('Player 1 score: ' + player1Score);
		 				currentPlayer = 2;
					} else if (currentPlayer == 2) {
		 				player2Score += 1;
		 				// console.log('Player 2\'s score: ' + player2Score);
		 				$("#p2Score").text('Player 2 score: ' + player2Score);
		 				currentPlayer = 1;
		 			};
		 		} else {
		 			swal("Oops...", "Wrong answer!", "error");
		 			if (currentPlayer == 1) {
		 				currentPlayer = 2;
		 			} else if (currentPlayer == 2) {
		 				currentPlayer = 1;
		 			};
				};
					if(answeredcards === 6) {
					if (player1Score > player2Score) {
					swal("Player One Wins!", "")
					} else if(player2Score > player1Score) {
					swal("Player Two Wins!", "")
				}
	
}
	 		});

		} else {
			swal("Oops...", "Wrong answer!", "error");
		}

		// if(numPlayers === 2) {
		// 	if(currentPlayer === 0) {
		// 		currentPlayer = 1;;
		// 	}
		// 	if(currentPlayer === 1) {
		// 		currentPlayer = 2; 

		// 	}else{
		// 		currentPlayer = 1;
		// 	}
		// }
	});

	$("#playerbutton1").on('click', function () {
		numPlayers = 1;


	})

	$("#playerbutton2").on('click', function() {
		numPlayers = 2;

	})

	$("#howtoplay").on('click' , function() {
		swal("How to play!", "Type in the name of the image on the card into the input field and click on the card. If correct, answer one of the three trivia questions related to the image by typing in your answer into the input field and clicking the card. See if you can flip over all the cards!")
	})

});






	


