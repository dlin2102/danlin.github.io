$(document).ready(function() {
    $('#myPortfolio').addClass('hidden')
    $('#aboutMe').addClass('hidden')

    $('#portfolio').on('click', function() {
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
        $('#contactInfo').addClass('hidden')
    })

})
