$(function () {

    $('.close').click(function () {
        $('.infoPerson').css('display', 'none');
    })

    $('.accept').click(function () {
        $('#');
    });

    $('.cancel').click(function () {
        $('.infoPerson').css('display', 'none');
    });

    $('#sign-up').attr("action", "success.html");

    function getRecylingUrl() {
        let process1 = $(location).attr("href");
        let process2 = process1.slice(process1.indexOf('?') + 1);
        let process3 = process2.replace(/\+/g, " ").split('&');
        let result = '';
        for (let i = 0; i < process3.length - 1; i++) {
            let decodeInfo = decodeURIComponent(process3[i]);
            let titleUpCase = decodeInfo.replace(decodeInfo.charAt(0), decodeInfo.charAt(0).toUpperCase());
            result += '<p>' + titleUpCase.replace('=', ': ') + '</p>';
        }
        return result;
    }

    $('.print-screen').html(getRecylingUrl())

})






