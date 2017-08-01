$(function () {

	$('.move-up').hide();

	$('.carousel-projects').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		autoplayTimeout: 7000,
		smartSpeed: 1000
	});
});

$(window).ready(function() {
	$('a[href^="#"]').click(function () {
  	event.preventDefault();
  	let id  = $(this).attr('href');
  	let	top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 'slow', 'swing');
 	});
});

$(window).scroll(function () {
  if ($(this).scrollTop() > $(this).height()) {
    $('.move-up').fadeIn();
  } else {
    $('.move-up').fadeOut();
  }

  $('.move-up').click(function () {
  	event.preventDefault();
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
  });
});

$(window).on('load', function() {
	$('.preloader').delay(500).fadeOut('slow');
});