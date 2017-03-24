//Go to Top Navigation Arrow

$(document).ready(function() {

  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 280) {
      $('#top-arrow').addClass('arrow-fixed');
    }
    if ($(window).scrollTop() < 281) {
      $('#top-arrow').removeClass('arrow-fixed');
    }
  });

});
