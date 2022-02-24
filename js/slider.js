
$(function(){
	$('.flipster').flipster({ 
		style: 'carousel',
		start: 0,
		autoplay: true,
		scrollwheel: true,
		loop: true,
		// fadeIn: 400,
		// enableTouch: true,
		// enableNavButtons: true,
	});
});



// var mySwiper = new Swiper('.swiper-container', {
//     loop: true,
//     speed: 1000,
//     autoplay: {
//         delay: 3000,
//     },
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     coverflowEffect: {
//         rotate: 0,
//         stretch: 80,
//         depth: 200,
//         modifier: 1,
//         slideShadows: false,
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// })

// var swiper = new Swiper('.swiper-container', {
// 	effect: 'coverflow',
// 	loop: true,
// 	centeredSlides: true,
// 	slidesPerView: 3,
// 	initialSlide: 3,
// 	keyboardControl: true,
// 	mousewheelControl: true,
// 	lazyLoading: true,
// 	preventClicks: false,
// 	preventClicksPropagation: false,
// 	lazyLoadingInPrevNext: true,
// 	nextButton: '.swiper-button-next',
//    prevButton: '.swiper-button-prev',
// 	coverflow: {
// 		rotate: 0,
// 		stretch: 0,
// 		depth: 250,
// 		modifier: 1,
// 		slideShadows : false,
// 	}
// });