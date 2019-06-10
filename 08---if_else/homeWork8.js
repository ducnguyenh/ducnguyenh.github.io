//Bài 1. Sử dụng câu lệnh if để viết 1 hàm với 2 tham số bất kỳ, kiểm tra xem 2 tham số có phải là number không và tìm ra số lớn nhất trong 2 số đó.
function checkNumber(parameter1, parameter2) {
    if (typeof parameter1 == "number" && typeof parameter2 == "number") {
        console.log(
            "Both " + parameter1 + " and " + parameter2 + " are numbers"
        );
        if (parameter1 > parameter2) {
            return parameter1 + " is max number";
        } else if (parameter1 < parameter2) {
            return parameter2 + " is max number";
        } else {
            return parameter1 + " is max number";
        }
    } else if (typeof parameter1 == "number") {
        console.log("'" + parameter2 + "'" + " is not a number");
        return parameter1 + " is a number and max number";
    } else if (typeof parameter2 == "number") {
        console.log("'" + parameter1 + "'" + " is not a number");
        return parameter2 + " is a number and max number";
    } else {
        return (
            "Both " +
            "'" +
            parameter1 +
            "'" +
            " and " +
            "'" +
            parameter2 +
            "'" +
            " are not numbers"
        );
    }
}

//Bài 2. Viết 1 hàm dùng để tính giai thừa của 1 số. Kiểm tra tham số đầu vào phải là 1 số nguyên dương (số Integer > 0), sau đó tính giai thừa và in ra kết quả.
// function countFactorial(n) {
//     if (n == 0 || n == 1) {
//         return 1;
//     } else if (Number.isInteger(n) == true && n > 0) {
//         return countFactorial(n - 1) * n;
//     } else {
//         return false;
//     }
// }
function countFactorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
//Bài 3. Cho 1 mảng các số bất kỳ. Tạo ra 1 mảng mới chỉ chứa các số chẵn lấy ra từ mảng trên và sắp xếp theo thứ tự giảm dần.
function afterArray(beforeList) {
    var fakeArray = [];
    for (var i in beforeList) {
        if (beforeList[i] % 2 == 0) {
            fakeArray.push(beforeList[i]);
        }
    }
    return fakeArray.sort(function (a, b) {
        return b - a;
    });
}

//Hãy viết hàm kiểm tra tính hợp lệ của thông tin người dùng nhập vào. Nếu hợp lệ thông báo "Pass", nếu không hợp lệ thông báo "Fail".
var user = {
    username: "Nguyen Huu Duc",
    password: "Duc@28041996",
    confirm: "Duc@28041996"
};

console.log("user = ", user);

function checkLogin(user) {
    let result1 = "Pass";
    let result2 = "Fail";
    if (user.username == "") {
        console.log("Username field must not empty");
        return result2;
    } else if (user.username.length > 20) {
        console.log("Username must less than 20 character");
        return result2;
    } else if (user.password.length < 6 || user.password.length > 32) {
        console.log("Password length from 6 to 32 character");
        return result2;
    } else if (user.confirm != user.password) {
        console.log("Confirm field must match password");
        return result2;
    } else {
        console.log("Login infomation is valid.");
        return result1;
    }
}
