

$(document).ready(function() {
	// e.preventDefault();
	$(".item").on('click' , function() {

		// console.log("I work")
		
		var guess = $(this).parent().find("#text-form input").val(); // 'coffee'
		// console.log(guess)
		var answer = $(this).attr("data-value"); //{}
		// console.log(answer)

		if(guess == answer) {
			$(this).parent().parent().flip();
		}

		else{
			swal("Oops...", "Wrong answer!", "error");
		}
		
	});

});
	


