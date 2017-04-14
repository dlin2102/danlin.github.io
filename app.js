$(document).ready(function() {
    $('#myPortfolio').addClass('hidden')
    $('#aboutMe').addClass('hidden')

    $('.portfolio').on('click', function() {
        $('#myPortfolio').removeClass('hidden')
        $('#aboutMe').addClass('hidden')
        $('#homepage').addClass('hidden')
    })

    $('#me').on('click', function() {
        $('#aboutMe').removeClass('hidden')
        $('#myPortfolio').addClass('hidden')
        $('#homepage').addClass('hidden')
    })

    $('#home').on('click', function() {
        $('#homepage').removeClass('hidden')
        $('#myPortfolio').addClass('hidden')
        $('#aboutMe').addClass('hidden')
    })
    var scroll_start = 0;
       var startchange = $('.nav');
       var offset = startchange.offset();
       $(document).scroll(function() {
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top) {
              $('.nav').css('background-color', 'rgba(34,34,34,0.9)');
           } else {
              $('.nav').css('background-color', 'transparent');
           }
       });
})
