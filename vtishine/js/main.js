$(document).ready(function(){
	$('.hero__slider').owlCarousel({
		items: 1,
		autoplay: true,
		loop: true
	});

	$('.comand__slider').owlCarousel({
		items: 4,
		margin: 30,
		nav: true,
		loop: true,
		navText: ["<img src=\"img/comand__slider__prev.svg\">","<img src=\"img/comand__slider__next.svg\" >"]
	});

	$('[data-click="select_city"]').click(function(){
		$('.hero__city__select__submenu').toggleClass('hero__city__select__submenu__active');
	});
});