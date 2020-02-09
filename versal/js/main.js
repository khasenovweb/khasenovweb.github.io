$(document).ready(function(){
	// $('.calc__viveski__visota input').on('focusout',function(){
	// 	var val = $(this).val();
	// 	if(val < 10) {
	// 		alert('Минимальная высота букв 10 см');
	// 		$(this).val('10');
	// 	}
	// 	if(val > 100) {
	// 		alert('Максимальная высота букв 100 см');
	// 		$(this).val('100');
	// 	}
	// });


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


	//Табы калькулятора
	$('.calc__tab__content').hide();
	$('.calc__tab__content[data-calc-tab="1"]').show();
	$('.calc__tab__link').click(function(){
		var id = $(this).attr('data-calc-tab');
		$('.calc__tab__content').hide();
		$('.calc__tab__link').removeClass('calc__tab__link__active');
		$(this).addClass('calc__tab__link__active');
		$('.calc__tab__content[data-calc-tab="'+id+'"]').show();
	});
	//END Табы калькулятора

	//Калькулятор вывески
	$('.calc__viveski__shrift__item').click(function(){
		$('.calc__viveski__shrift__item').removeClass('calc__viveski__shrift__item__active');
		$(this).addClass('calc__viveski__shrift__item__active');
		calc__viceski();
	});
	$('.select__viveski__type').on('change',function(){
		calc__viceski();

	});
	$('.input__viveski__slova').on('input',function(){
		calc__viceski();
	});
	$('.input__viveski__visota').on('input', function(){
		calc__viceski();
	});
	function calc__viceski(){
		var font = $('.calc__viveski__shrift__item__active').attr('data-shrift');
		var type = $('.select__viveski__type').val();
		var slova = $('.input__viveski__slova').val().replace(/[^a-zа-я0-9]+/g,'').length;
		var visota = $('.input__viveski__visota').val();
		var price = 80;
		var sum = Number(price) * Number(visota) * Number(slova);
		console.log(font, type, slova, visota, sum);
		$('.calc__viveski__right__price__num').text(sum+' руб.');
		$('.calc__viveski__right__img[data-viveski] img').attr('src','img/calc/'+font+type+'.jpg');
		if(type === '6') {
			$('.modal__wrapper[data-modal-id="1"]').show();
			$('.global__wrapper').addClass('global__wrapper__blur');
			calc__reset();
		}
	}
	function calc__reset() {
		$('.select__viveski__type').val('1');
		$('[data-calc-korob-type]').val('1');
		$('.calc__viveski__right__img[data-viveski] img').attr('src','img/calc/sans-serif1.jpg');
		$('.calc__viveski__shrift__item').removeClass('calc__viveski__shrift__item__active');
		$('.calc__viveski__shrift__item').eq(0).addClass('calc__viveski__shrift__item__active');
	}

	function calc__koroba() {
		var type = $('[data-calc-korob-type]').val();
		var visota = $('[data-calc-korob-visota]').val();
		var shirina = $('[data-calc-korob-shirina]').val();
		var price = 1100;
		var sum = Number(visota) * Number(shirina) * Number(price);
		$('[data-calc-korob-result]').text(sum+' руб.');
		$('[data-calc-korob-img]').attr('src', 'img/calc/koroba/'+type+'.png');
		if(type === '7' || type === '8') {
			$('.modal__wrapper[data-modal-id="1"]').show();
			$('.global__wrapper').addClass('global__wrapper__blur');
			calc__reset();
		}
	}
	$('[data-calc-korob-type]').on('change',function(){
		calc__koroba();

	});
	$('[data-calc-korob-visota]').on('input',function(){
		calc__koroba();
	});
	$('[data-calc-korob-shirina]').on('input',function(){
		calc__koroba();
	});
	//END Калькулятор вывески
});