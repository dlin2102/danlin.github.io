$(window).on('load', _ => {
    $('#preloader').delay(1000).fadeOut('slow');
    $('body').delay(0).css({'overflow':'visible'});
})

$('#myPortfolio').addClass('hidden')
$('#aboutMe').addClass('hidden')


$(window).scroll(function() {
  if ($(window).scrollTop() > 282) {
    $('.nav').addClass('stuck');
    $('.subpage').addClass('scroll')
  } else {
    $('.nav').removeClass('stuck');
    $('.subpage').removeClass('scroll')
  }
});

$('#portfolio').on('click', function(){
  $('#myPortfolio').removeClass('hidden')
  $('#aboutMe').addClass('hidden')
  $('#homepage').addClass('hidden')
})

$('#me').on('click', function(){
  $('#aboutMe').removeClass('hidden')
  $('#myPortfolio').addClass('hidden')
  $('#homepage').addClass('hidden')
})


$('#home').on('click', function(){
  $('#homepage').removeClass('hidden')
  $('#myPortfolio').addClass('hidden')
  $('#aboutMe').addClass('hidden')
})
