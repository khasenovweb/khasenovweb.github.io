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
});