$(document).ready(function () {
	//heart-slider
    $('.heart-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        speed: 2500,
        dots: true,
		cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
        focusOnSelect: true,
        adaptiveHeight: true,
        autoplaySpeed: 4000,
        responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                centerMode: false
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                centerMode: false
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                centerMode: false
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                centerMode: false
            }
        }
      ]
    });
	
	//testimonial-slider 
	$('.testimonial-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		infinite: true,
		speed: 1500,
		fade: true,
		cssEase: 'linear',
		autoplaySpeed: 2000,
		dots: false,
		focusOnSelect: true,
		adaptiveHeight: false,
    });
    
	//News slider
	$('.news-slider-big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		arrows: false,
		infinite: true,
		speed: 1200,
		cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
		autoplaySpeed: 2500,
		asNavFor: '.news-slider-small'
	});
	
	$('.news-slider-small').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
		asNavFor: '.news-slider-big',
		arrows: false,
		infinite: true,
		speed: 1200,
		cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
		autoplaySpeed: 2500,
        focusOnSelect: true,
        dots: false,
        vertical: true,
        verticalSwiping: true,
		responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                centerMode: false,
				vertical: false,
				verticalSwiping: false
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                centerMode: false,
				vertical: false,
				verticalSwiping: false
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                centerMode: false,
				vertical: false,
				verticalSwiping: false
            }
        }
    ] });
    $('.news-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        infinite: true,
        speed: 1200,
        cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
        autoplaySpeed: 2500,
        focusOnSelect: true,
        dots: true,
        responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                centerMode: false
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                centerMode: false
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                centerMode: false
            }
        }
    ] });
});
