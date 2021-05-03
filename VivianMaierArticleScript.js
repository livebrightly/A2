/* $(document).click(function(){
	//$(".container").toggleClass("clicked")
	$(document).scrollTo(".hidden",2000);
})
 */

	var docHeight = $(document).height();
	var winHeight = $(window).height();

$(document).scroll(function(){

	fromTop = $(document).scrollTop();

	scrollRatio = fromTop/(docHeight-winHeight);

	if ((fromTop+(winHeight/2)) >  $(".hidden").offset().top ) {
		$(".hidden").css({"opacity":1})
	} else {
		$(".hidden").css({"opacity":0})
	}
 

	//LOOK AT THIS TO DO IT FOR A BUNCH OF DIFFERENT ELEMENTS!
	 $("p").each(function(){
		if ((fromTop+(winHeight/2)) >  $(this).offset().top ) {
			$(this).css({"opacity":1})
		} else {
			$(this).css({"opacity":0})
		}
	 })
	 

/* 	
	$(".pseudo-pic")
			.css({
				"opacity":scrollRatio,
				"transform":"rotate("+(720*scrollRatio)+"deg)"
			}); */



/* 			
			$(document).ready(function() {
				$('#navigation a').hover(
					function(){
						//we get our current filename and use it for the src
						var linkIndex = $(this).attr("data-filename");
						$(this).addClass('hover');
						$('.box img').attr('src', linkIndex+'.svg');
					},
					function(){
						$(this).removeClass('hover');
						$('.box img').attr('src', 'default.jpg');
					}
				);
				});


				$('#navigation a').hover(
					function(){
						$(this).addClass('hover');
						$('.box img').attr('src', $(this).data('img');
					},
					function(){
						$(this).removeClass('hover');
						$('.box img').attr('src', 'default.jpg');
					}
				);
				
				*/


//	console.log(scrollRatio);

})