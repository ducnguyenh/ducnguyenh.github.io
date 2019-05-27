//Bài 1. In ra màn hình ngày, tháng năm hiện tại và xác định đó là mùa nào trong năm.
function printTime() {
    let now = new Date();
    let date = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    document.write(
        "Hôm nay là ngày " +
        date +
        " tháng " +
        month +
        " năm " +
        year +
        "<br />"
    );
    switch (month) {
        case 2:
        case 3:
        case 4:
            document.write("Mùa Xuân (Spring)");
            break;
        case 5:
        case 6:
        case 7:
            document.write("Mùa hạ (Summner)");
            break;
        case 8:
        case 9:
        case 10:
            document.write("Mùa thu (Autumn)");
            break;
        default:
            document.write("Mùa đông (Winter)");
            break;
    }
}

//Bài 2. Một sinh viên có điểm kiểm tra môn lập trình web là x dưới dạng số (0 <= x <= 10). Hãy chuyển điểm số sang dạng chữ với điều kiện sau:
//Từ 8.5 đến 10: Điểm A
//Từ 7 đến dưới 8.5: Điểm B
//Từ 5.5 đến dưới 7: Điểm C
//Từ 4 đến dưới 5.5: Điểm D
//Từ 0 đến dưới 4: Điểm F
function convertScore(x) {
    if (x >= 8.5 && x <= 10) {
        return "Điểm A";
    } else if (x >= 7 && x < 8.5) {
        return "Điểm B";
    } else if (x >= 5.5 && x < 7) {
        return "Điểm C";
    } else if (x >= 4 && x < 5.5) {
        return "Điểm D";
    } else {
        return "Điểm F";
    }
}

//Bài 3. Viết hàm translate() có tác dụng dịch từ "Hello" sang 5 thứ tiếng khác nhau (tự chọn) với tham số truyền vào là mã quốc gia, sử dụng switch và mặc định dịch sang tiếng Việt.
var nation = ['Germany', 'France', 'Italy', 'Japan', 'Korea'];
console.log(nation);
function translate(country) {
    switch (country) {
        case 'Germany':
            console.log("Hallo !")
            break;
        case 'France':
            console.log("Bonjour !")
            break;
        case 'Italy':
            console.log("Ciao !")
            break;
        case 'Japan':
            console.log("Kon'nichiwa - (こんにちは)!")
            break;
        case 'Korea':
            console.log("Annyeonghaseyo ! - (안녕하세요)!")
            break;
        default:
            console.log("Xin chào !")
            break;
    }
}

//Bài 4. Cho 1 mảng chỉ gồm các giá trị true và false. Hãy kiểm tra xem giá trị true xuất hiện lần đầu trong mảng ở vị trí nào.
function checkFirstValue(arrayInput) {
    for (let i in arrayInput) {
        return arrayInput.indexOf(true) + 1;
    }
}
