$(document).ready(function() {
	// e.preventDefault();
	$(".item").on('click' , function() {

		// console.log("I work")
		
		var guess = $(this).parent().find("#text-form input").val(); // 'coffee'
		// console.log(guess)
		var answer = $(this).attr("data-value"); //{}
		console.log(answer)
		var questions = {
			"Coffee": [
			"Caffeine is on the International Olympic Committee list of prohibited substances." ,
			"Which country produces the most coffee per year in the world?" , 
			"Coffee, as a world commodity, is second only to…" ,
			],

			"Molly Moon's Ice Cream": [
			"Prior to opening Molly Moon’s ice cream Molly was the executive director of Teach for America." ,
			"Which one of these flavors is a permeant Molly Moon ice cream flavor?" ,
			"What is the full name of the creator of Molly Moon’s ice cream?" , 
			],

			"Rain": [
			"Rain can fall up to 15 mph" ,
			"Which group released the 1982 hit “It’s raining men?”" ,
			"In the 1952 musical movie adaptation “Singing in the rain” which actor played the lead man Don Lockwood?" ,
			],

			"Pike Place Market": [ 
			"The market is a significant provider of low income housing." ,
			"Approximately how many visitors visit the market annually?" ,
			

			],




		


		}
		console.log(questions[answer])

		// iterate over questions 


		if(guess == answer) {
			$(this).parent().parent().flip();
		}

		else{
			swal("Oops...", "Wrong answer!", "error");
		}
		
	});

});
	


