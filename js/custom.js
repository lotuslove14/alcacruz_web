$(window).load(function() { // makes sure the whole site is loaded
    // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow':'visible'});
})

//========================
//SMOOTHSCROLL
//========================
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function () {
	w = $(window).height();
	$('#hero').css('height', w);
	$('#half-height').css('height', w/2 - 200 );

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('.navbar-nav li a').click( function() {
    $('.navbar-nav li a').removeClass('selected');
    $(this).addClass('selected');
  });
  $('a.navbar-brand').click( function() {
    $('.navbar-nav li a').removeClass('selected');
  });
  $('a.arrow-down').click( function() {
    $('.navbar-nav li:first-child a').addClass('selected');
  });

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".navbar-inverse").css("background" , "#222");
    }
    else{
      $(".navbar-inverse").css("background" , "none");   
    }
  })
})