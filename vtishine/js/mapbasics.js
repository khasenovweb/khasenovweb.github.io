//==============Карта с фильтром=================
//Логика фильтра закалючается в том, что сначала удаляем все маркеры с карты методом geoObjects.remove, а затем добавляем нужные geoObjects.add
ymaps.ready(init);
var myMapAll;
function init() {
    myMapAll = new ymaps.Map("map", {
            center: [55.159897, 61.402554],
            zoom: 10
        });
        //настройки для метки на карте
        var myPlacemark_1 = new ymaps.Placemark([ 55.152557, 61.411573],{
                  balloonContentHeader: "Название объекта",
                  balloonContentBody: 'Описание объекта',
                  balloonContentFooter: "",
                  hintContent: "Кликните для более подробной информации"
              },
              {
                  iconLayout: 'default#image',
                  iconImageHref: 'img/map__marker__red.png',
                  iconImageSize: [32, 53],
              });
        
        //настройки для метки на карте
        var myPlacemark_2 = new ymaps.Placemark([ 55.190678, 61.311626],{
                  balloonContentHeader: "Название объекта",
                  balloonContentBody: 'Описание объекта',
                  balloonContentFooter: "",
                  hintContent: "Кликните для более подробной информации"
              },
              {
                  iconLayout: 'default#image',
                  iconImageHref: 'img/map__marker__yellow.png',
                  iconImageSize: [32, 53],
              });
        
        //настройки для метки на карте
        var myPlacemark_3 = new ymaps.Placemark([ 55.116943, 61.461995],{
                  balloonContentHeader: "Название объекта",
                  balloonContentBody: 'Описание объекта',
                  balloonContentFooter: "",
                  hintContent: "Кликните для более подробной информации"
              },
              {
                  iconLayout: 'default#image',
                  iconImageHref: 'img/map__marker__blue.png',
                  iconImageSize: [32, 53],
              });

            //Показываем все метки на карте
            myMapAll.geoObjects.add(myPlacemark_2);
            myMapAll.geoObjects.add(myPlacemark_1);
            myMapAll.geoObjects.add(myPlacemark_3);

            //Удаление всех меток с карты (выполняется перед показом отфильтрованных)
            function placemark_remove (){
                myMapAll.geoObjects.remove(myPlacemark_2);
                myMapAll.geoObjects.remove(myPlacemark_1);
                myMapAll.geoObjects.remove(myPlacemark_3);
            }

        $('#objects__filter__select').on('change', function(){
            var val = $(this).val();
            //Все
            if(val === '1') {
                //Удаляем все метки
                placemark_remove ();
                
                //Показываем нужные метки
                myMapAll.geoObjects.add(myPlacemark_1);
                myMapAll.geoObjects.add(myPlacemark_2);
                myMapAll.geoObjects.add(myPlacemark_3);
            }
            //Наши объекты
            if(val === '2') {
                //Удаляем все метки
                placemark_remove ();
                //Показываем нужные метки
                myMapAll.geoObjects.add(myPlacemark_1);
            }
            //С отзывом
            if(val === '3') {
                //Удаляем все метки
                placemark_remove ();
                //Показываем нужные метки
                myMapAll.geoObjects.add(myPlacemark_2);
            }
            //Проведена экспертиза
            if(val === '4') {
                //Удаляем все метки
                placemark_remove ();
                //Показываем нужные метки
                myMapAll.geoObjects.add(myPlacemark_3);
            }
        });



        //Карта в блоке контактов см. скриншот по ссылке https://prnt.sc/r2oup7
        var myMap2 = new ymaps.Map("reviews__contacts__map", {
                center: [55.159897, 61.402554],
                zoom: 10
            });

            var myPlacemark_1_1 = new ymaps.Placemark([ 55.152557, 61.411573],{
                    balloonContentHeader: "Название объекта",
                    balloonContentBody: 'Описание объекта',
                    balloonContentFooter: "",
                    hintContent: "Кликните для более подробной информации"
                });

                myMap2.geoObjects.add(myPlacemark_1_1);
        
}
//==============END Все Маркеры=================
