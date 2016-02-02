$(document).ready(function() {


	function createdots () {
	var colors = []
		
		for(var i = 0; i < 70; i++) {
			var dot = document.createElement("div")
			var x = Math.floor(Math.random() * document.body.offsetWidth);
			var y = Math.floor(Math.random() * document.body.offsetHeight);
			// console.log(x)
			dot.className = "dotstyle"
			dot.style.position = "absolute"
			dot.style.right = x + "px";
			dot.style.top = y + "px";
			document.body.appendChild(dot);
			}

	}
	createdots();
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
			"Which country produces the most coffee per year in the world? <ul><li>Brazil</li><li>Vietnam</li><li>Columbia</li></ul>" ,
 			"Coffee, as a world commodity, is second only to what?" ,
			],

			"Molly Moon's Ice Cream": [
			"True or False: Prior to opening Molly Moons ice cream, Molly was the executive director of Teach for America." ,
			"Which one of these flavors is a permeant Molly Moon ice cream flavor? <ul><li>Earl grey</li><li>Chocolate Chip cookie dough</li><li>Gooey brownie</li></ul>" ,
			"What is the full name of the creator of Molly Moons ice cream?" , 
			],

			"Rain": [
			"True or false: Rain can fall up to 15 mph." ,
			"Which group released the 1982 hit <em>Its raining men</em>? <ul><li>The weather girls</li><li>Expose</li><li>Vanity 6</li></ul>" ,
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
			]
		}
		var randomIndex = Math.floor(Math.random() * questions[answer].length);
	 	var randomQuestion = questions[answer][randomIndex];
	 	// console.log(randomQuestion)
	 	var questiondiv = $(this).parent().next()
	 	questiondiv.addClass("card_text").html(randomQuestion);

	 	$(this).parent().next().append('<form><input class="backflip" type="text" placeholder="Your Answer"></form>');
	 	$(".backflip").on('click', function (e) {
	 		e.stopPropagation();
	 	})

		if(guess == answer) {
			$(this).parent().parent().flip();
		}

		else{
			swal("Oops...", "Wrong answer!", "error");
		}


		
	});

});
	


