mdc.textField.MDCTextField.attachTo(document.querySelector('.search'));


$(document).ready(function(){

	$('.slider').slick({
		arrows: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
	});
});