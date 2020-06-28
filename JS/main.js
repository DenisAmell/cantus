$(document).ready(function () {
	const mMenuBtn = $(".burger");
	const mMenu = $(".m-menu");
	const line = $(".line");
	const playlistLink = $(".playlist-link");
	const audio = document.getElementById("audio");

	mMenuBtn.on('click', function() {
		mMenu.toggleClass("active");
		mMenuBtn.toggleClass("active");
		line.toggleClass("active");
		$('body').toggleClass("no-scroll");
	});
	mMenu.on('click', function(){
		mMenu.toggleClass("active");
		mMenuBtn.toggleClass("active");
		line.toggleClass("active");
		$('body').toggleClass("no-scroll");
	});
	playlistLink.on('click', function(){
		audio.play();
	});

	var mySwiper = new Swiper ('.swiper-container', {
	slidesPerView: 3,
	spaceBetween: 25,
	loop: true,
    slidesOffsetAfter: 50,
    		navigation: {
                nextEl: ".next",
                prevEl: ".back",
            },
    breakpoints: {
    	1200: {
    		slidesPerView: 3,
    	},
		991:{
    		slidesPerView: 2,
    	},
    	320:{
    		slidesPerView: 1,
    		slidesOffsetAfter: 50,
    		navigation: {
    			nextEl: ".button-next",
    		},
    	},
    },
  });
});