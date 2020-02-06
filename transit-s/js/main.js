$(document).ready(function(){
	$('[data-click-calc]').click(function(){
		$('.calc').toggleClass('calc__show');
		$(this).addClass('nav__calc__active');
		$('.mobile__nav__calc').toggleClass('mobile__nav__calc__active');
	});

	$('body').click(function(){
		if ($(event.target).closest(".calc").length) return;
		if ($(event.target).closest(".modal").length) return;
		if ($(event.target).closest("[data-click-modal__wrapper]").length) return;
		if ($(event.target).closest("[data-click-calc]").length) return;
		$("[data-click-calc]").removeClass('nav__calc__active');
		$('.calc').removeClass('calc__show');
		$('.mobile__nav__calc').removeClass('mobile__nav__calc__active');
		$('.modal__wrapper').hide();
	});

	$('[data-click-modal__wrapper]').click(function(){
		$('.modal__wrapper').show();
	});
	$('.modal__wrapper').click(function(){
		if ($(event.target).closest(".modal").length) return;
		$('.modal__wrapper').hide();
	});



	$('.mobile__head__hamburger').click(function(){
		$('.mobile__links').toggleClass('mobile__links__active');
		if($('.mobile__links__submenu').hasClass('mobile__links__submenu__active')) {
			$('.mobile__links__submenu').removeClass('mobile__links__submenu__active');
		}
		if($('.mobile__links__haschild').hasClass('mobile__links__haschild__active')) {
			$('.mobile__links__haschild').removeClass('mobile__links__haschild__active');
		}
		$(this).toggleClass('mobile__head__hamburger__active');
	});

	$('.mobile__links__haschild').click(function(){
		if ($(event.target).closest(".mobile__links__submenu a").length) return;
		event.preventDefault();
		$(this).toggleClass('mobile__links__haschild__active');
		$(this).children('.mobile__links__submenu').toggleClass('mobile__links__submenu__active');
	});
	// $('.mobile__links__haschild a').click(function(){
	// 	event.preventDefault();
	// });
});

