//slickの修正
$(function() {
    $("#keySlick").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        //横歩行に流し続ける
        cssEase: 'linear',
        //ドット上のナビ
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                }
            }
        ]
    });
});