$(document).ready(function () {
	$(window).scroll(function () {
		var e = $(this).scrollTop(),
			o = $(".banner-sticky-top");
		e >= 150 ? o.addClass("banner-manu-black") : o.removeClass("banner-manu-black")
	})
	//smooth-scroll
	$("a.smooth-s").on("click", function () {
		if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
			var e = $(this.hash);
			if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) return $("html, body").animate({
				scrollTop: e.offset().top
			}, 1e3), !1
		}
	})

	//top-up-scroll
	$(window).scroll(function () {
			$(this).scrollTop() > 100 ? $(".top-up").fadeIn() : $(".top-up").fadeOut()
		}),
		$(".top-up").click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 2e3)
		});

	// wow js 
	new WOW().init();
	
	//venobox
/*	$(".news-list .details-holder .bottom-part").click(function(){
		if($(this).closest(".news-item").hasClass("active")){
			$(this).closest(".news-item").removeClass("active");
			$(this).find("a").html("read more >");
		}
		else{
			$(this).closest(".slick-track").find(".news-item").removeClass("active");
			$(this).closest(".news-item").addClass("active");
			$(this).find("a").html("read less >");
		}
	});
	$('.venoboxvid').venobox({
        numeratio: true,
        border: '5px',
        infinigall: true,
        overlayColor: 'rgba(0,0,0,0.8)',
        titleColor: '#cccccc',
        closeColor: '#cccccc',
        closeBackground: 'transparent',
        numeratio: true,
        bgcolor: '#000',
        spinner: 'cube-grid'
    });*/
});
