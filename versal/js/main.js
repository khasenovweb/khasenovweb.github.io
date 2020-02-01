$(document).ready(function(){
	$('.calc__viveski__visota input').on('focusout',function(){
		var val = $(this).val();
		if(val < 10) {
			alert('Минимальная высота букв 10 см');
			$(this).val('10');
		}
		if(val > 100) {
			alert('Максимальная высота букв 100 см');
			$(this).val('100');
		}
	});


	//Модальное окно
	$('[data-modal]').click(function(){
		event.preventDefault();
		var modal_id = $(this).attr('data-modal-id');
		$('.modal__wrapper[data-modal-id="'+modal_id+'"]').show();
		$('.global__wrapper').addClass('global__wrapper__blur');
	});
	$('.modal__close').click(function(){
		$('.modal__wrapper').hide();
		$('.global__wrapper').removeClass('global__wrapper__blur');
	});
});