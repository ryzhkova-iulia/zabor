;
// Начинать писать отсюда!!!!
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.864005, 37.677292],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([37.677292, 37.677292], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            // balloonContentHeader: "Рольф Химки",
            balloonContentBody: "г. Москва, ул. Коминтерна, д.7, к.2",
            // balloonContentFooter: "Подвал",
        });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
    myMap.controls.remove('trafficControl').remove('searchControl').remove('typeSelector').remove('geolocationControl').remove('fullscreenControl').remove('rulerControl');
}