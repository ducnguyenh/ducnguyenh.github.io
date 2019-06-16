$('.btn .btn-primary').on('click', function () {
    console.log($('#inputText').val(),
        $('#inputEmail').val(),
        $('#mobile').val(),
        $('input[name=gender]:checked', '#sign-up').val(),
        $('#datepicker').val(),
        $('#inputAddress').val(),
        $('#inputPassword').val()),
        $('#confirmPassword').val()
});





