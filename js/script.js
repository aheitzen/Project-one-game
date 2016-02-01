$(document).ready(function() {
	// e.preventDefault();
	$(".item").on('click' , function() {

		// console.log("I work")
		
		var guess = $(this).parent().find("#text-form input").val(); // 'coffee'
		// console.log(guess)
		var answer = $(this).attr("data-value"); //{}
		// console.log(answer)
		var questions = {
			"Coffee": [
			"Caffeine is on the International Olympic Committee list of prohibited substances." ,
			"Which country produces the most coffee per year in the world? 1.Brazil 2.Vietnam 3.Columbia" ,
 			"Coffee, as a world commodity, is second only to…" ,
			],

			"Molly Moon's Ice Cream": [
			"Prior to opening Molly Moon’s ice cream Molly was the executive director of Teach for America." ,
			"Which one of these flavors is a permeant Molly Moon ice cream flavor?1. Earl grey 2. Salted Chocolate Chip cookie dough 3.Chocolate gooey brownie " ,
			"What is the full name of the creator of Molly Moon’s ice cream?" , 
			],

			"Rain": [
			"Rain can fall up to 15 mph" ,
			"Which group released the 1982 hit “It’s raining men? 1.The weather girls 2. Exposé 3. Vanity 6”" ,
			"In the 1952 musical movie adaptation “Singing in the rain” which actor played the lead man Don Lockwood?" ,
			],

			"Pike Place Market": [ 
			"The market is a significant provider of low income housing." ,
			"Approximately how many visitors visit the market annually? 1. 10 million 2. 20 million 3.25 million" ,
			"What kind of animal is Rachel the markets unofficial mascot?" ,
			],

			"Space Needle": [
			"The space needle is fastened to the foundation with 150 bolts. ",
			"In 2000 the Space needle completed a renovation, how much did the renovation cost? 1.30 Million 2.15 million 3.20 million",
			"How many feet high is the observation deck?",
			],

			"Beer": [
			"There are over 200 craft breweries in Seattle." ,
			"Which of the following is not a craft brewery in Seattle 1.The Good Beer Company 2.Outer planet craft brewery 3.Peddler Brewing Company?" ,
			"What is the study of beer and beer making called?" ,
			]
		}
		questions[answer].forEach

		// iterate over questions 


		if(guess == answer) {
			$(this).parent().parent().flip();
		}

		else{
			swal("Oops...", "Wrong answer!", "error");
		}
		
	});

});
	


