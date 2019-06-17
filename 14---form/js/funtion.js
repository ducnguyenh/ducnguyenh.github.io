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
        let process1 = decodeURIComponent($(location).attr("href"));
        let process2 = process1.slice(process1.indexOf('?') + 1);
        let process3 = process2.replace(/\+/g, " ").split('&');
        let result = '';
        for (let i = 0; i < process3.length - 1; i++) {
            let titleUpCase = process3[i].replace(process3[i].charAt(0), process3[i].charAt(0).toUpperCase());
            result += '<p>' + titleUpCase.replace('=', ': ') + '</p>';
        }
        return result;
    }

    $('.print-screen').html(getRecylingUrl())

})






