//Bài 1: Cho 1 chuỗi số, hãy viết hàm có tác dụng sao chép chuỗi số lên 10 lần, ngăn cách nhau bởi ký tự "-".
function copyCat(sequence) {
    var copyArray = [];
    for (var i=0; i < 10; i++) {
        copyArray.push(sequence)
    }
    return copyArray.join("-")
}

//Bài 2. Cho 1 số nguyên n. Viết hàm tính n giai thừa (n!)
function calFactorial(n) {
    if (n==0 || n==1) {
        return 1
    }
    return calFactorial(n-1)*n
}

//Bài 3. Cho 1 chuỗi, hãy viết hàm đảo ngược chuỗi đó.
function reSequence (sequence) {
    var fakeArray = [];
    for (var i = sequence.length; i >= 0; i--) {
        fakeArray.push(sequence[i]);
    }
    return fakeArray.toString().replace(/,/g, '');
}

//Bài 4. Cho 1 mảng tên của n học viên. Viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái và in ra màn hình danh sách học viên kèm theo số thứ tự
function traineeList(list) {
    for (var i = 0; i < list.length; i++) {
        document.write("<p>" + (i + 1) + '. ' + list.sort()[i] + "</p>");
    }
    return true;
}

//Bài 5. Cho 1 mảng các số. Viết function tạo ra 1 mảng mới với các số là số dư tương ứng khi chia các số trong mảng cũ cho 2.
function newArray(list) {
    var fakeArray = [];
    for (var i in list) {
        fakeArray.push(i % 2);
    }
    return fakeArray
}

//Bài 6. Chỉ dùng vòng lặp for hoặc while, viết function in ra màn hình các số từ 1 đến 100 sao cho những giá trị là chẵn sẽ có màu xanh, những giá trị là lẻ có màu đỏ.
function colorScreen(n) {
    for (var i = 1; i <= n; i = i + 2) {
        document.write("<span style='color:red'>" + i + " </span>" + "<br />");
        document.write("<span style='color:green'>" + (i + 1) + "</span>" + "<br />");
        }
        return true;
    }


