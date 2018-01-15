$(document).ready(function(){
	$('.button-menu').click(function(){
		if ($('.fa').hasClass('fa-bars')) {
			$('.fa').removeClass('fa-bars').addClass('fa-times');
			$('.list').animate({height: 'show'}, 700);
		} else {
			$('.fa').removeClass('fa-times').addClass('fa-bars');
			$('.list').animate({height: 'hide'}, 700);
		}
		
	});
});