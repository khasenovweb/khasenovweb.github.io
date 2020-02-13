ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
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
        myMap.geoObjects.add(myPlacemark_1);

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
        myMap.geoObjects.add(myPlacemark_2);

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
        myMap.geoObjects.add(myPlacemark_3);
}
