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

	$('.section-5__tabs__content__zamer__galery').owlCarousel({
		items: 1
	});
	//Выбор города
	$('[data-click="select_city"]').click(function(){
		$('.hero__city__select__arrow').toggleClass('hero__city__select__arrow__active');
		$('.hero__city__select__submenu').toggleClass('hero__city__select__submenu__active');
		$('.hero__city__working').toggleClass('hero__city__working__hide');
	});
	//END Выбор города

	//Миниатюры галереи
	$('.section-5__tabs__content__zamer__galery__big').each(function(i, el){
		console.log($(el).attr('data-thumb'));
		$('.section-5__tabs__content__zamer__galery .owl-dot').eq(i).css('background-image','url('+$(el).attr('data-thumb')+')');
	});
	//END Миниатюры галереи

	//tabs
	$('.section-5__tab__wrapper').click(function(){
		var id = $(this).attr('data-tab-link');
		$('.section-5__tabs__content__item').hide();
		$('[data-tab="'+id+'"]').show();

		$('.section-5__tab__wrapper').removeClass('section-5__tab__wrapper__active');
		$(this).addClass('section-5__tab__wrapper__active');
	});
	//END tabs



	//Modal
	$('[data-modal-link]').click(function(){
		var data__modal = $(this).attr('data-modal');
		$('[data-modal="'+data__modal+'"').show();
	});
	$('.modal__close').click(function(){
		$('.modal__wrapper').hide();
	});
	//END Modal


	//Calc
	function calc(){
		var type__build = $('.calc__form select[name="type__build"]').val();
		var remont = $('.calc__form select[name="remont"]').val();
		var type__sound = $('.calc__form select[name="type__sound"]').val();
		var type__priority = $('.calc__form select[name="type__priority"]').val();
		var s = $('.calc__form input[name="s"]').val();
		var k = $('.calc__form input[name="k"]').val();
		var sum = type__build * remont * type__sound * type__priority * s * k;
		console.log(sum);
		$('[data-calc-result]').text(String(parseInt(sum)).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')+' P');

	}
	calc();

	$('.calc__form select').on('change', function(){
		calc();
	});

	$('.calc__form input').on('input', function(){
		calc();
	});

	//END Calc
});