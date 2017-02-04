;
// Начинать писать отсюда!!!!
ymaps.ready(function() {
    var myMap = new ymaps.Map("map", {
            center: [55.864005, 37.677292],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([55.864005, 37.677292], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            iconCaption: 'ул. Коминтерна, д.7, к.2'
            // balloonContentFooter: "Подвал",
        }, {
            preset : 'islands#redDotIconWithCaption'
        });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
    myMap.controls
        .remove('trafficControl')
        .remove('searchControl')
        .remove('typeSelector')
        .remove('geolocationControl')
        .remove('fullscreenControl')
        .remove('rulerControl');
});


// tabs
$(function () {

    $(document).delegate(".js-tabs .tab__item", "click", function(){
        var $tab = $(this);
        var $tabContainer = $tab.parent(".js-tabs");
        var nameContent = $tab.data("name");

        if (nameContent && nameContent.length > 0) {

            var $newActiveTabContent = $tabContainer.find(".tab-content_name-" + nameContent);
            if ($newActiveTabContent) {

                $tabContainer.find(".tab-content_active").removeClass("tab-content_active");
                $newActiveTabContent.addClass("tab-content_active");

                $tabContainer.find(".tab__item_active").removeClass("tab__item_active");
                $tab.addClass("tab__item_active");
            }
        }
    });
});

// slider
$(function () {
    $('.js-service-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 908,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    // form callback
    $('.js-popup-form').magnificPopup({
        items: {
            src: '#popup-form',
            type: 'inline'
        }
    });

    $('.js-works a').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });

    $(".js-show-more-works").click(function () {
        $(".works__hidden").removeClass("works__hidden");
        $(this).hide();
    });
});