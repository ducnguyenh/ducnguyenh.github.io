// Bài 1: Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F, tham số truyền vào là 1 số nguyên biểu thị độ C. Ví dụ tham số truyền vào là -30 thì kết quả trả về là -22.
function convertCelsiusToFah(celsius) {
    return (celsius * (9 / 5) + 32);
};
convertCelsiusToFah(-30)

// Bài 2: Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì trong mảng.
function findSecondMax(inputArray) {
    if (inputArray.length > 2) {
        return inputArray.sort(function (a, b) { return b - a })[1];
    }
};
findSecondMax([3, 4, 5, 6, 676, 7, 56, 689]);

// Bài 3: Cho 1 mảng các chuỗi bất kỳ. Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất trong mảng.
function findLongestWordLength(inputArray) {
    let maxStr = inputArray[0];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > maxStr.length) {
            maxStr = inputArray[i];
        }
    }
    return maxStr;
}
findLongestWordLength(['Internet', 'governance', 'expert', 'Viktor'])

// Bài 4: Viết hàm có 2 tham số là 2 chuỗi string và target, dùng để kiểm tra chuỗi string có kết thúc bởi chuỗi target hay không. Kết quả trả về là true hoặc false.
function confirmEnding(str, target) {
    return str.endsWith(target);
}
confirmEnding("Congratulation", "on");

// Bài 5: Cho 1 mảng chỉ chứa các phần tử có kiểu dữ liệu number, string và boolean. Hãy kiểm tra xem trong mảng đó có phần tử nào bị lặp lại hay không (xuất hiện 2 lần trở lên). Kết quả trả về true (nếu lặp) hoặc false (nếu không lặp)
function elementDuplicate(inputArray) {
    let result = false;
    for (let j = 0; j < inputArray.length; j++) {
        for (let k = j + 1; k < inputArray.length; k++) {
            if (inputArray[k] === inputArray[j]) {
                result = true;
            }
        }
    }
    return result;
}
elementDuplicate(['34', 34, 5, 3, '3', true, false, true])

