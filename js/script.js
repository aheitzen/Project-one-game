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
			"True or False: Caffeine is on the International Olympic Committee list of prohibited substances." ,
			"Which country produces the most coffee per year in the world? Brazil, Vietnam, or Columbia" ,
 			"Coffee, as a world commodity, is second only to what?" ,
			],

			"Molly Moon's Ice Cream": [
			"True or False: Prior to opening Molly Moons ice cream, Molly was the executive director of Teach for America." ,
			"Which one of these flavors is a permeant Molly Moon ice cream flavor? Earl grey, Salted Chocolate Chip cookie dough, Chocolate gooey brownie " ,
			"What is the full name of the creator of Molly Moons ice cream?" , 
			],

			"Rain": [
			"True or false: Rain can fall up to 15 mph." ,
			"Which group released the 1982 hit <em>Its raining men</em>? The weather girls, Expose, or Vanity 6?" ,
			"In the 1952 musical movie adaptation <em>Singing in the rain</em> which actor played the lead actor Don Lockwood?" ,
			],

			"Pike Place Market": [ 
			"True or False: The market is a significant provider of low income housing." ,
			"Approximately how many visitors visit the market annually? 10 million, 20 million or 25 million?" ,
			"What kind of animal is Rachel, the markets unofficial mascot?" ,
			],

			"Space Needle": [
			"True or false: The space needle is fastened to the foundation with 150 bolts. ",
			"In 2000 the Space needle completed a renovation, how much did the renovation cost? 30 Million, 15 million or 20 million?",
			"How many feet high is the observation deck?",
			],

			"Beer": [
			"True or false: There are over 200 craft breweries in Seattle." ,
			"Which of the following is not a craft brewery in Seattle? The Good Beer Company, Outer planet craft brewery, or Peddler Brewing Company?" ,
			"What is the study of beer and beer making called?" ,
			]
		}
		var randomIndex = Math.floor(Math.random() * questions[answer].length);
	 	var randomQuestion = questions[answer][randomIndex];
	 	// console.log(randomQuestion)

	 	$(this).parent().next().html(randomQuestion);



		// iterate over questions 


		if(guess == answer) {
			$(this).parent().parent().flip();
		}

		else{
			swal("Oops...", "Wrong answer!", "error");
		}
		
	});

});
	


