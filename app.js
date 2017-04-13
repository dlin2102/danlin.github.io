$(document).ready(function() {
    $('#myPortfolio').addClass('hidden')
    $('#aboutMe').addClass('hidden')
    $('#contactInfo').addClass('hidden')

    $('#portfolio').on('click', function() {
        $('#myPortfolio').removeClass('hidden')
        $('#aboutMe').addClass('hidden')
        $('#homepage').addClass('hidden')
        $('#contactInfo').addClass('hidden')
    })

    $('#me').on('click', function() {
        $('#aboutMe').removeClass('hidden')
        $('#myPortfolio').addClass('hidden')
        $('#homepage').addClass('hidden')
        $('#contactInfo').addClass('hidden')
    })

    $('#home').on('click', function() {
        $('#homepage').removeClass('hidden')
        $('#myPortfolio').addClass('hidden')
        $('#aboutMe').addClass('hidden')
        $('#contactInfo').addClass('hidden')
    })

    $('#contact').on('click', function() {
      $('#contactInfo').removeClass('hidden')
      $('#myPortfolio').addClass('hidden')
      $('#aboutMe').addClass('hidden')
      $('#homepage').addClass('hidden')
    })
})
