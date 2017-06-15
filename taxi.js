$(document).ready(function() {

	//make sure after image isn't visible on page
	$(".after").hide();

	//when image is clicked
 	$("img").click(function(){
 		//fade out before image currently on screen
 		$(".before").fadeOut(1000);
 		//gradually show after image
 		$(".after").fadeIn(1000);

 	});
    
});