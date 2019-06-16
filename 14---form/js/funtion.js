$(function () {

    function getName() {
        return 'Name: ' + $('#inputText').val();
    }

    function getEmail() {
        return 'Email: ' + $('#inputEmail').val();
    }

    function getMobile() {
        return 'Mobile: ' + $('#mobile').val();
    }

    function getGender() {
        return 'Gender: ' + $('input[name="gender"]:checked').val();
    }

    function getBirthday() {
        return 'Birthday: ' + $('#datepicker').val();
    }

    function getAddress() {
        return 'Address: ' + $('#inputAddress').val();
    }

    function getPassword() {
        return 'Password: ' + $('#inputPassword').val();
    }

    $('.close').click(function () {
        $('.infoPerson').css('display', 'none');
    })

    $('.accept').click(function () {
        $('#');
    });

    $('.cancel').click(function () {
        $('.infoPerson').css('display', 'none');
    });

    $('#sign-up').attr("action", "https://ducnguyenh.github.io/14---form/success.html");
})






