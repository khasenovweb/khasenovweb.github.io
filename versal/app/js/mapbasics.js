//==============Карта с фильтром=================
//Логика фильтра закалючается в том, что сначала удаляем все маркеры с карты методом geoObjects.remove, а затем добавляем нужные geoObjects.add
ymaps.ready(init);
function init() {
    //Карта в блоке контактов см. скриншот по ссылке https://prnt.sc/r2oup7
    var myMap2 = new ymaps.Map("map", {
            center: [55.622411, 37.619513],
            zoom: 17
        });

    var myPlacemark_1_1 = new ymaps.Placemark([55.622411, 37.619513],{
            balloonContentHeader: "Название объекта",
            balloonContentBody: 'Описание объекта',
            balloonContentFooter: "",
            hintContent: "Кликните для более подробной информации"
        });

        myMap2.geoObjects.add(myPlacemark_1_1);
        
}
//==============END Все Маркеры=================
