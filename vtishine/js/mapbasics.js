
ymaps.ready(init);
var myMapAll;

//==============Все Маркерыаркеры=================
function init() {
    myMapAll = new ymaps.Map("map", {
            center: [55.159897, 61.402554],
            zoom: 10
        });

        var myPlacemark_1 = new ymaps.Placemark([ 55.152557, 61.411573],{
                  balloonContentHeader: "Название объекта",
                  balloonContentBody: 'Описание объекта',
                  balloonContentFooter: "",
                  hintContent: "Кликните для более подробной информации"
              },
              {
                  iconLayout: 'default#image',
                  iconImageHref: 'img/map__marker__red.png',
                  iconImageSize: [110, 116],
                  //iconImageOffset: [0, -80]
              });
        

        var myPlacemark_2 = new ymaps.Placemark([ 55.190678, 61.311626],{
                  balloonContentHeader: "Название объекта",
                  balloonContentBody: 'Описание объекта',
                  balloonContentFooter: "",
                  hintContent: "Кликните для более подробной информации"
              },
              {
                  iconLayout: 'default#image',
                  iconImageHref: 'img/map__marker__blue.png',
                  iconImageSize: [110, 116],
                  //iconImageOffset: [0, -80]
              });
        

        var myPlacemark_3 = new ymaps.Placemark([ 55.116943, 61.461995],{
                  balloonContentHeader: "Название объекта",
                  balloonContentBody: 'Описание объекта',
                  balloonContentFooter: "",
                  hintContent: "Кликните для более подробной информации"
              },
              {
                  iconLayout: 'default#image',
                  iconImageHref: 'img/map__marker__yellow.png',
                  iconImageSize: [110, 116],
                  //iconImageOffset: [0, -80]
              });

            myMapAll.geoObjects.add(myPlacemark_2);
            myMapAll.geoObjects.add(myPlacemark_1);
            myMapAll.geoObjects.add(myPlacemark_3);

            function placemark_remove (){
                myMapAll.geoObjects.remove(myPlacemark_2);
                myMapAll.geoObjects.remove(myPlacemark_1);
                myMapAll.geoObjects.remove(myPlacemark_3);
            }

        $('#objects__filter__select').on('change', function(){
            var val = $(this).val();
            if(val === '1') {
                placemark_remove ();

                myMapAll.geoObjects.add(myPlacemark_2);
                myMapAll.geoObjects.add(myPlacemark_1);
                myMapAll.geoObjects.add(myPlacemark_3);
            }
            if(val === '2') {
                placemark_remove ();

                myMapAll.geoObjects.add(myPlacemark_1);
            }
            if(val === '3') {
                placemark_remove ();

                myMapAll.geoObjects.add(myPlacemark_2);
            }
            if(val === '4') {
                placemark_remove ();

                myMapAll.geoObjects.add(myPlacemark_3);
            }
        });
        
}
//==============END Все Маркеры=================



