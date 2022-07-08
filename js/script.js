function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200) {
		$('#page-top').removeClass('RightMove');
		$('#page-top').addClass('LeftMove');
	}else{
		if($('#page-top').hasClass('LeftMove')) {
			$('#page-top').removeClass('LeftMove');
			$('#page-top').addClass('RightMove');
		}
	}
}

$('#page-top').on('click',function() {
	var scroll = $(window).scrollTop();
	if(scroll > 0){
		$(this).addClass('floatAnime');
        $('body,html').animate({
            scrollTop: 0
        }, 800,function() {
            $('#page-top').removeClass('floatAnime');
        });	
	}
    return false;
});

/*===========================================================*/
/* スクロール */
/*===========================================================*/
$(function(){
	$('a[href^="#"]').on('click',function() {
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var headerHight = 100;
		var position = target.offset().top - headerHight;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});

$(window).on('scroll',function () {
    PageTopAnime();
});