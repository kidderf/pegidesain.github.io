(function($) {

  new WOW().init();

  jQuery(window).load(function() {
    jQuery("#preloader").delay(100).fadeOut("slow");
    jQuery("#load").delay(100).fadeOut("slow");
  });

  //jQuery for unset hover in top navbar
  $("a").hover( function(){
    $(this).css('background-color', "unset");
  }, function(){
    $(this).css('background-color', "unset"); 
  });

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
      $(".navbar").css('padding', "0px 0px");
      $(".navbar-brand").hide(250);
      $(".nav-link").addClass("a-after");
      $(".navbar-fixed-top").addClass("top-nav-collapse");
      $(".navbar-fixed-top").css('background-color', "rgba(68, 68, 68, 0.9)");
      $(".container").css('padding-right', "0px");
      $(".navbar-right").css('margin-top', "unset");
      $(".navbar-left").css({'margin-left':'3%', 'padding-top':'unset', 'color':'#00cc44'});
      $(".span-header").css('color', "#ffffff");
      // $(".navbar-brand").fadeOut(500);
    } else {
      $(".navbar").css('padding', "10px 0px");
      $(".navbar-brand").show(250);
      $(".nav-link").removeClass("a-after");
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
      $(".navbar-fixed-top").css('background-color', "rgba(255, 255, 255, 0.8)");
      $(".container").css({'padding-right':'15px', 'transition':'background .5s ease-in-out,padding .5s ease-in-out'});
      $(".navbar-right").css('margin-top', "10px");
      $(".navbar-left").css({'margin-left':'5px', 'padding-top':'5px', 'color':'#006622'});
      $(".span-header").css('color', "#000000");
      // $(".navbar-brand").fadeIn(500);
    }
  });

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {

    $('.navbar-nav li a').on('click', function(event) {

      if ($(this).is('a:not([href^="#"])') || $(this).attr("href") == '#') {
        return;
      }
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });

    $('.page-scroll a').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });

  });
	
	var navMain = $(".navbar-collapse");
	navMain.on("click", "a:not([data-toggle])", null, function () {
	   navMain.collapse('hide');
	});

})(jQuery);
