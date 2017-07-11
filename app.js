$(window).on('load', _ => {
    $('#preloader').delay(2000).fadeOut('slow');
    $('body').delay(0).css({'overflow':'visible'});
})

$(document).ready(function() {
    // To make nav bar only visable on scroll
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

// To open resume in separate tab
       $('a[href*="pdf"]').click(function(e) {
           e.preventDefault();
           var documentUrl = $(this).attr("href");
           window.open(documentUrl, '_blank');
         });
})
