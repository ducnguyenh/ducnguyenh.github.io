//Additional ex1_homeWork7c
function repeatString(str, number, separator) {
    let newArray = [];
    for (let i = 0; i < number; i++) {
        newArray.push(str);
    }
    return newArray.join(separator);
}

//convert Celsius to Fahrenheit
function findLongestWordLength(str) {
    let fakeArray = str.split(" ");
    let maxStr = fakeArray[0].length;
    for (let i in fakeArray) {
        if (fakeArray[i].length > maxStr) {
            maxStr = fakeArray[i].length;
        } else {
            maxStr = maxStr;
        }
    }
    return maxStr;
}

//find max
function max(num) {
    if (parseInt(num) == num) {
        var i;
        var max = -Infinity;
        for (i = 0; i < arguments.length; i++) {
            if (arguments[i] > max) {
                max = arguments[i];
            }
        }
        return max;
    } else {
        return false;
    }
}
//Bài 1. Viết funciton printTriangle(height), với height là số integer > 2, in ra màn hình 1 hình tam giác vuông cân có chiều cao height. Ví dụ: 
function printTriangle(height) {
    if (Number.isInteger(height) == true && height > 2) {
        let str = '';
        for (let i = 0; i < height; i++) {
            for (let j = 0; j <= i; j++) {
                str += ' * ';
            }
            str += '\n';
        }
        return console.log(str);
    } else {
        return false;
    }
}

//Bài 2. Viết function printEmptyRectangle(width, height), với width và height là 2 số integer > 3, in ra một hình chữ nhật rỗng có kích thước width x height.
function printEmptyRectangle(width, height) {
    let str = '';
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (i == 0 || j == 0 || j == width - 1 || i == height - 1) {
                str += ' * ';
            }
            else {
                str += '   ';
            }
        }
        str += '\n';
    }
    return console.log(str);
}

//Bài 3. Viết function printSpecialTriangle(height), với height là số integer > 1, in ra hình tam giác cân ngược với chiều cao bằng height.
function printSpecialTriangle(height) {
    if (Number.isInteger(height) == true && height > 1) {
        let str = '';
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < (2 * height - 1); j++) {
                if (i == 0) {
                    str += ' * ';
                } else if ((j < i) || (j >= 2 * height - 1 - i)) {
                    str += '   ';
                } else {
                    str += ' * ';
                }
            }
            str += '\n';
        }
        return console.log(str)
    } else {
        return false;
    }
}

//Bài 4. Viết function printX(height), với height là số integer > 4 và là số lẻ, in ra hình chữ X có chiều cao bằng height.
function printX(height) {
    if (Number.isInteger(height) == true && height > 4 && height % 2 == 1) {
        let str = '';
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < height; j++) {
                if (i == j || j == height - 1 - i || i == height - 1 - j) {
                    str += ' * ';
                } else {
                    str += '   ';
                }
            }
            str += '\n';
        }
        return console.log(str)
    } else {
        return false;
    }
}

//Bài 5. Viết function printButterfly(height), với height là số integer > 4 và là số lẻ, in ra hình con bướm có chiều cao bằng height.
function printButterfly(height) {
    if (Number.isInteger(height) == true && height > 4 && height % 2 == 1) {
        let str = '';
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < height; j++) {
                if ((j < i) || (j >= height - 1 - i)) {
                    str += ' * ';
                } else {
                    str += '   ';
                }
            }
            str += '\n';
        }
        return console.log(str)
    } else {
        return false;
    }
}



