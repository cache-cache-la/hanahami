//headerの上部固定
function FixedAnime() {
	var headerH = $('#header').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){
			$('#header').addClass('fixed');
		}else{
			$('#header').removeClass('fixed');
		}
}
$(window).scroll(function () {
	FixedAnime();
});
$(window).on('load', function () {
	FixedAnime();
});

//mobileNav
$(function() {
    $('#mobileNav ul li a').each(function(){
        var href = $(this).attr('href');
        if(location.href.match(href)) {
            $(this).parent().addClass('current');
            var src = $('.current').find('img').attr('src').replace('static', 'current');
            $('.current').find('img').attr('src', src);
        } else {
            $(this).parent().removeClass('current');
        }
    });
});
