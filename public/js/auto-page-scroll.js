$(document).ready(function(){
  $(document).on('touchstart click', 'a', function(){
    var currTarget = $(this).attr('data-loc');
    $('html, body').stop().animate({
      scrollTop: $($('#' + currTarget)).offset().top
    }, 500);
  });
});