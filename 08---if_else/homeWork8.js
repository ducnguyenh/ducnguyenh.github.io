//Bài 1. Sử dụng câu lệnh if để viết 1 hàm với 2 tham số bất kỳ, kiểm tra xem 2 tham số có phải là number không và tìm ra số lớn nhất trong 2 số đó.
function checkNumber(parameter1, parameter2) {
    if (typeof parameter1 == "number" && typeof parameter2 == "number") {
        console.log(
            "Both " + parameter1 + " and " + parameter2 + " are numbers"
        );
        if (parameter1 > parameter2) {
            console.log(parameter1 + " is max number");
        } else if (parameter1 < parameter2) {
            console.log(parameter2 + " is max number");
        } else {
            console.log(parameter1 + " is max number");
        }
    } else if (typeof parameter1 == "number") {
        console.log(parameter1 + " is a number and max number");
        console.log('"' + parameter2 + '"' + " is not a number");
    } else if (typeof parameter2 == "number") {
        console.log(parameter2 + " is a number and max number");
        console.log('"' + parameter1 + '"' + " is not a number");
    } else {
        console.log(
            "Both " +
                '"' +
                parameter1 +
                '"' +
                " and " +
                '"' +
                parameter2 +
                '"' +
                " are not numbers"
        );
    }
}

//Bài 2. Viết 1 hàm dùng để tính giai thừa của 1 số. Kiểm tra tham số đầu vào phải là 1 số nguyên dương (số Integer > 0), sau đó tính giai thừa và in ra kết quả.
function countFactorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else if (Number.isInteger(n) == true && n > 0) {
        return countFactorial(n - 1) * n;
    } else {
        return false;
    }
}

//Bài 3. Cho 1 mảng các số bất kỳ. Tạo ra 1 mảng mới chỉ chứa các số chẵn lấy ra từ mảng trên và sắp xếp theo thứ tự giảm dần.
function afterArray(beforeList) {
    var fakeArray = [];
    for (var i in beforeList) {
        if (beforeList[i] % 2 == 0) {
            fakeArray.push(beforeList[i]);
        }
    }
    return fakeArray.sort(function(a, b) {
        return b - a;
    });
}
