$(document).ready(function() {

	$('.item-floor .link-main').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $(".layout-wrapper").offset().top - 70
		}, 1000);
	}); 

	$('.item-floor_0 .link-main').click(function(e) {
		$('.slider-layout').slick('slickGoTo', 0)
	}); 
	$('.item-floor_1 .link-main').click(function(e) {
		$('.slider-layout').slick('slickGoTo', 1)
	}); 
	$('.item-floor_2 .link-main').click(function(e) {
		$('.slider-layout').slick('slickGoTo', 2)
	}); 
	$('.item-floor_3 .link-main').click(function(e) {
		$('.slider-layout').slick('slickGoTo', 3)
	}); 
	$('.item-floor_4 .link-main').click(function(e) {
		$('.slider-layout').slick('slickGoTo', 4)
	}); 
	$('.item-floor_5 .link-main').click(function(e) {
		$('.slider-layout').slick('slickGoTo', 5)
	}); 
	$('.item-floor_6 .link-main').click(function(e) {
		$('.slider-layout').slick('slickGoTo', 6)
	}); 
	$('.item-floor_7 .link-main').click(function(e) {
		$('.slider-layout').slick('slickGoTo', 7)
	}); 
	$('.item-floor_8 .link-main').click(function(e) {
		$('.slider-layout').slick('slickGoTo', 8)
	}); 
	$('.item-floor_9 .link-main').click(function(e) {
		$('.slider-layout').slick('slickGoTo', 9)
	}); 

	/*new floors*/
	$('.nav-layout').slick({
		arrows: true,
		dots: false,
		infinite: true,
		focusOnSelect: true,
		touchThreshold: 1000,
		asNavFor: '.slider-layout',
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
	});

	$('.slider-layout').slick({
		arrows: true,
		dots: false,
		infinite: true,
		focusOnSelect: true,
		touchThreshold: 1000,
		asNavFor: '.nav-layout',
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		responsive: [
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				dots: true,
			}
		}
		]
	});



	/*floors*/

	$(".item-floor img")
	.mouseenter(function() {
		$(this).parent().addClass("active");
		//$(this).parent().parent().removeClass("z_minus");
		//$(this).parent().parent().siblings().addClass("z_minus");

	})
	.mouseleave(function() {
		$(this).parent().removeClass("active");
		//$(this).parent().parent().addClass("z_minus");
		//$(this).parent().parent().siblings().removeClass("z_minus");
	});

	$(".item-floor__content")
	.mouseenter(function() {
		$(this).parent().addClass("active");
		//$(this).parent().parent().removeClass("z_minus");
		//$(this).parent().parent().siblings().addClass("z_minus");

	})
	.mouseleave(function() {
		$(this).parent().removeClass("active");
		//$(this).parent().parent().addClass("z_minus");
		//$(this).parent().parent().siblings().removeClass("z_minus");
	});

	$('.tabs-catalog li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane-catalog").fadeOut(0);
		var selectTab3 = $(this).attr("href");
		$(selectTab3).fadeIn(200);
		$('.tab-container-catalog .item-catalog__images').slick('refresh');
	}); 




	/*new*/
	jQuery('.quantity').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

	});

	/*floors*/
	$('.slider-planing').each(function(){
		var $this = $(this);
		var $this_parent = $(this).parent().parent().parent().find(".nav-planing");
		$this.slick({
			arrows: true,
			dots: false,
			infinite: true,
			touchThreshold: 1000,
			asNavFor: $this_parent,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		});
	});

	$('.nav-planing').each(function(){
		var $this = $(this);
		var $this_parent = $(this).parent().parent().parent().find(".slider-planing");
		$this.slick({
			arrows: true,
			dots: false,
			infinite: true,
			fade: true,
			touchThreshold: 1000,
			asNavFor: $this_parent,
			focusOnSelect: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		});
	});


	/*new2*/
	$('.item-catalog__images').slick({
		arrows: true,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
	});

	$('.slider-card').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
	});

	$(".btn-like, .btn-main_fav").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
	});


	$('.tabs-planing li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane-planing").fadeOut(0);
		var selectTab2 = $(this).attr("href");
		$(selectTab2).fadeIn(200);
		$('.tab-container-planing .slider-planing').slick('refresh');
		$('.tab-container-planing .nav-planing').slick('refresh');
	}); 

	$('.tabs-card li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane-card").fadeOut(0);
		var selectTab3 = $(this).attr("href");
		$(selectTab3).fadeIn(200);
		$('.tab-container-card .slider-card').slick('refresh');
	}); 



	/*floors*/
	$('#fullpage').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
		normalScrollElements: '.sidebar',
		responsiveHeight: 600,
		controlArrows: true,
		responsiveWidth: 1200,
		scrollingSpeed: 1000,
		menu: '#menu'
	});




//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}
	
});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
	$menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
	$menu.removeClass("fixed").addClass("default");
}

$('.tabs li a').click(function(event) {
	event.preventDefault();
	$(this).parent().parent().find("li").removeClass('active');
	$(this).parent().addClass('active');
	$(".tab-pane").fadeOut(0);
	var selectTab = $(this).attr("href");
	$(selectTab).fadeIn(200);
	$('.tab-container .slider-images').slick('refresh');
	/*new*/
	$('.tab-container-planing .slider-planing').slick('refresh');
	/*floors*/
	$('.tab-container .nav-planing').slick('refresh');
}); 

{
	if ($(window).width() < 992) { 
		$(".footer__title").click(function() {
			$(this).toggleClass("active");
			$(this).next(".footer__content").slideToggle(200);
		});
	}
}


$(".btn-nav").click(function() {
	$(this).toggleClass("active");
	$(".nav-site li:not(.active)").slideToggle(200);
});

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	$(".item-question__head").click(function() {
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings(".item-question").removeClass("active");
		$(this).parent().siblings(".item-question").find(".item-question__content").slideUp(200);
	});


	//кнопка sandwich
	$(".sandwich").click(function() {
		$(this).toggleClass("active");
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
		} else {
			$(".menu-mobile").slideUp(200);
		}
		
	});

	$(".menu-mobile .menu__haschild > a").click(function(e) {
		e.preventDefault();
		$(this).parent().toggleClass("active");
		$(this).siblings(".menu-dropdown").slideToggle(200);
	});

	//слайдер

	$('.slider-images').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
	});

	$('.slider-sidebar').slick({
		arrows: false,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
	});

	$('.slider-for').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		asNavFor: '.slider-nav',
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
	});

	$('.slider-nav').slick({
		arrows: false,
		dots: false,
		infinite: true,
		focusOnSelect: true,
		asNavFor: '.slider-for',
		touchThreshold: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
	});

	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/

	/*floors*/
	$(".top-inner .btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	}); 

	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

