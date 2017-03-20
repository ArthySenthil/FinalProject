$(document).ready(function() {

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 280) {
      $('#top-arrow').addClass('arrow-fixed');


    }
    if ($(window).scrollTop() < 281) {
      $('#top-arrow').removeClass('arrow-fixed');
    }
  });
  // $(window).scroll(function() {
  //     if($(this).scrollTop() != 0) {
  //         $('.gototop').fadeIn();
  //     } else {
  //         $('.gototop').fadeOut();
  //     }
  // });
  //
  // $('.gototop').click(function() {
  //     $('body,html').animate({scrollTop:0},800);
  // });
});
