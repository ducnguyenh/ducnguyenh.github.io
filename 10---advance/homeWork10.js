//Bài 1. Viết funciton printTriangle(height), với height là số integer > 2, in ra màn hình 1 hình tam giác vuông cân có chiều cao height. Ví dụ: 
function printTriangle(height) {
    if (Number.isInteger(height) == true && height > 2) {
        let str = '';
        for (let i = 0; i < height; i++) {
            for (let j = 0; j <= i; j++) {
                str += ' * ';
            }
            str += '<br />';
        }
        document.write('<pre>' + str + '</pre>');;
    }
}

//Bài 2. Viết function printEmptyRectangle(width, height), với width và height là 2 số integer > 3, in ra một hình chữ nhật rỗng có kích thước width x height.
function printEmptyRectangle(width, height) {
    if (Number.isInteger(width) == Number.isInteger(height) == true && width > 3 && height > 3) {
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
            str += '<br />';
        }
        document.write('<pre>' + str + '</pre>');;
    }
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
            str += '<br />';
        }
        document.write('<pre>' + str + '</pre>');
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
            str += '<br />';
        }
        document.write('<pre>' + str + '</pre>');
    }
}

//Bài 5:Viết function printButterfly(height), với height là số integer > 4 và là số lẻ, in ra hình con bướm có chiều cao bằng height.
//OutPut: 
/*
với n = 5:
*       *
* *   * *
* * * * *
* *   * *
*       *
                                */
function printButterfly(height) {
    if (Number.isInteger(height) == true && height > 4 && height % 2 == 1) {
        let str = '';
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < height; j++) {
                if (j == 0 || j == height - 1 || i == j || j == height - 1 - i || i == height - 1 - j) {
                    str += ' * ';
                } else {
                    str += '   ';
                };
            };
            str += '<br />';
        }
        document.write('<pre>' + str + '</pre>');
    }
}