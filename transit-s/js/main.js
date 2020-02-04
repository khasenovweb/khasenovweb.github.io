$(document).ready(function(){
	$('[data-click-calc]').click(function(){
		$('.calc').addClass('calc__show');
		$(this).addClass('nav__calc__active');
	});

	$('body').click(function(){
		if ($(event.target).closest(".calc").length) return;
		if ($(event.target).closest("[data-click-calc]").length) return;
		$("[data-click-calc]").removeClass('nav__calc__active');
		$('.calc').removeClass('calc__show');
	});

	$('[data-click-modal__wrapper]').click(function(){
		$('.modal__wrapper').show();
	});
	$('.modal__wrapper').click(function(){
		if ($(event.target).closest(".modal").length) return;
		$('.modal__wrapper').hide();
	});
});