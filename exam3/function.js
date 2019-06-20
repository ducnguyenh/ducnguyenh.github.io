//-------------------------------Xử lý số--------------------------------//
// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function calSphereVolume(radius) {
    return 4 * Math.PI * Math.pow(radius, 3) / 3;
}

// ● Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
function calSumary(number1, number2) {
    let tempSUm = 0;
    for (let i = number1 + 1; i < number2; i++) {
        tempSUm += i;
    }
    return tempSUm;
}

// ● Bài 3: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
//cach 1:
function checkPrimeNumber(num) {
    if (num < 2) {
        return false
    }

    for (let i = 2; i < num - 1; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
//cach 2:
function checkPrimeNumber(num) {
    if (num == 2) {
        return true;
    }

    if (Number.isInteger(num) == false || num < 2 || num % 2 == 0) {
        return false;
    }

    for (let i = 3; i < num - 1; i += 2) {
        if (num % i == 0) {
            return false
        }
    }
    return true;
}
// ● Bài 4: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.
function calSumaryNumber(num) {
    let sumPrime = 0;
    if (num == 2) {
        return sumPrime = 2;
    };
    for (let i = 3; i <= num; i += 2) {
        if (checkPrimeNumber(i) == true) {
            sumPrime = sumPrime + i;
        }
    };
    return sumPrime + 2;
}
// ● Bài 5: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function sumDivisor(num) {
    let tempSum = 0;
    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
            tempSum += i;
        }
    }
    return tempSum;
}
// ● Bài 6: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số chẵn thuộc dãy Fibonacci (0, 1, 1, 2, 3, 5, 8, ...) mà nhỏ hơn hoặc bằng tham số truyền vào.
//Cach 1: chuoi bat dau = 0
function fibonacci1(num) {
    if (num == 0 || num == 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
//Cach 2: chuoi bat dau = 1
function fibonacci2(num) {
    let a = 0, b = 1, temp;
    while (num >= 0) {
        temp = b;
        b = a + b;
        a = temp;
        num--;
    }
    return a;
}

//cach 3: chuoi bat dau = 0
function fibonacci3(num) {
    let a = 0, b = 1, c = 1;
    if (num == 0 || num == 1) {
        return num;
    } else {
        for (let i = 2; i < num; i++) {
            a = b;
            b = c;
            c = a + b;
        }
    }
    return c;
}

function sumEvenFib3(num) {
    let sumEvenFib = 0;
    for (let i = 0; i <= num; i++) {
        if (fibonacci3(i) % 2 == 0) {
            sumEvenFib += fibonacci3(i);
        }
    }
    return sumEvenFib;
}


// -------------------------------Xử lý chuỗi-------------------------------//
// ● Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ:''HELLO world'' => ''Hello World''.
function convertToTitle(str) {
    let newArray = str.toLowerCase().split(' ');
    let fakeArray = newArray.map(function (element) {
        return element.replace(element.charAt(0), element.charAt(0).toUpperCase())
    });
    return fakeArray.join(' ');
}

// ● Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.
function spinalCase(str) {
    let regex = /\s+|_+/g;
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    return str.replace(regex, "-").toLowerCase();
}

// ● Bài 3: Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự nằm trong chuỗi thứ 2 hay không, kết quả trả về true nếu có và false nếu không (không phân biệt hoa thường). Ví dụ ''HELLO world'' có chứa ''how'' nhưng không chứa ''hey''.
// Cach1
function checkExist(str1, str2) {
    for (let i = 0; i < str2.length; i++) {
        if (str1.toLowerCase().indexOf(str2[i].toLowerCase()) === -1) {
            return false;
        }
    }
    return true;
}

// ● Bài 4: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.
function checkPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z]+/g, "");
    return str === str.split("").reverse().join("");
}

// -------------------------Xử lý mảng------------------------------------//
// ● Bài 1: Viết hàm loại bỏ các giá trị sai trong 1 mảng. Các giá trị sai bao gồm: false, null, undefined,NaN, 0, ''''.
//cach 1:
function removeFalse(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Boolean(arr[i]) != false) {
            newArr.push(arr[i]);
        }
    };
    return newArr;
}

// ● Bài 2: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ, kết quả trả về là 1 mảng chỉ chứa những phần tử không đồng thời nằm trong 2 mảng truyền vào. Ví dụ truyền vào [1, 2, 3] và [1, 3, 4, 5] thì kết quả trả về là mảng [2, 4, 5].
//cach1:
function diffArray(arr1, arr2) {

    let fakeArray = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            fakeArray.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            fakeArray.push(arr2[i]);
        }
    }

    return fakeArray;
}

//cach2:
function diffArray(arr1, arr2) {
    let newArr = arr1.concat(arr2);
    return newArr.filter(element => !arr1.includes(element) || !arr2.includes(element));
}
//cach3:
function diffArray(arr1, arr2) {
    let fakeArray = [];
    function checkExist(first, second) {
        for (let i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                fakeArray.push(first[i]);
            }
        }
    }
    checkExist(arr1, arr2);
    checkExist(arr2, arr1);
    return fakeArray;
}

// ● Bài 3: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số ['aba', 'aa', 'ad', 'c', 'vcd'] thì kết quả trả về [''aba'', ''vcd''].
function findMaxLength(arr) {
    let maxStr = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxStr) {
            maxStr = arr[i].length;
        };
    }
    return maxStr;
}

function findLongestWordLength(arr) {
    let fakeArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length == findMaxLength(arr)) {
            fakeArray.push(arr[i]);
        };
    }
    return fakeArray;
}
// ● Bài 4: Cho 2 số nguyên dương n và m. Tạo ra 1 mảng 2 chiều n x m là các số nguyên liên tiếp (tính từ 1) theo kiểu ziczac. Ví dụ với n = 3 và m = 3 thì kết quả là mảng 2 chiều như sau[ [1, 2, 3], [6, 5, 4], [7, 8, 9] ].
// function ziczacArr(n, m) {

// }

// -----------------------------Xử lý object--------------------------------//
// ● Bài 1: Cho 1 object. Viết hàm kiểm tra xem object đó có phải là object rỗng hay không (không có thuộc tính nào). Kết quả trả về true hoặc false.
function checkObject(obj) {
    if (Object.keys(obj).length === 0 && obj.constructor === Object) {
        return true;
    }
    return false;
}

// ● Bài 2: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }. Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).
//Cach 1:
function sortObject(arr) {
    function compare(a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
        }
        return 0;
    }
    return arr.sort(compare)
}

// ● Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }. Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp.
function sortObject(arr) {
    function compare(a, b) {
        if (a.age < b.age) {
            return 1;
        }
        if (a.age > b.age) {
            return -1;
        }
        return 0;
    }

    return arr.sort(compare)
}

// ● Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: 'Huy', gender: 'Male', age: 20 }. Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ 'H' hoặc 'h'.
function traineeStartNameH(arr) {
    return arr.filter(element => element.name.toLowerCase().startsWith('h') == true);
}

// ● Bài 5: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }.Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.
function averageAge(arr) {
    let average = 0;
    for (let i = 0; i < arr.length; i++) {
        average += arr[i].age;
    }
    return average / arr.length;
}

//-----------------------------Tổng hợp------------------------------------//
// ● Bài 1: Cho 2 số a và b. Viết hàm giải phương trình bậc nhất dạng ax + b = 0.
function linearEquation(a, b) {
    if (a == 0 && b == 0) {
        return "Countless experimental equations";
    } else if (a == 0) {
        return "Impossible equation";
    } else {
        return -b / a;
    }
}
// ● Bài 2: Cho 3 số a, b và c. Viết hàm giải phương trình bậc 2 dạng ax² + bx + c = 0.
function quadraticEquation(a, b, c) {
    let delta = b * b - 4 * a * c;
    if (a == 0) {
        return linearEquation(b, c);
    } else if (a == 0 && b == 0) {
        return "Impossible equation";
    } else if (a == 0 && b == 0 && c == 0) {
        return "Countless experimental equations";
    } else {
        if (delta == 0) {
            return ("Double root: x1 = x2 = ", -b / (2 * a));
        } else if (delta < 0) {
            return "Impossible equation";
        } else {
            return `Two root x1 = ${-b + Math.sqrt(delta) / (2 * a)}, x2 = ${-b - Math.sqrt(delta) / (2 * a)}`;
        }
    }
}
// ● Bài 3: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví dụ với t = ''9:20:56'' và x = 7 thì kết quả là ''9:21:3''.
// cach1:
function convertToSecond(timeStr, x) {
    let newTime = timeStr.split(':');
    let secondTotal = eval(newTime[0] * 3600) + eval(newTime[1] * 60) + eval(newTime[2]) + x;
    let hours = Math.floor(secondTotal / 3600);
    let minutes = Math.floor((secondTotal - hours * 3600) / 60);
    let second = secondTotal - hours * 3600 - minutes * 60;
    return [hours, minutes, second].join(':')
}

//cach2:
function convertToSecond2(timeStr, x) {
    let date = new Date(null);
    let newTime = timeStr.split(':');
    let secondTotal = eval(newTime[0] * 3600) + eval(newTime[1] * 60) + eval(newTime[2]) + x;
    date.setSeconds(secondTotal)
    return date.toISOString().substr(11, 8);
}

// ● Bài 4: Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo được x mét, ban đêm lại bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì ốc sên sẽ lên được đến miệng giếng. Viết hàm giải bài toán trên với 3 tham số h là chiều cao của giếng, x và y như mô tả trên.
function moveSnail(x, y, h) {
    if (x == h) {
        return 1;
    } else {
        if ((h - y) % (x - y) == 0) {
            return (h - y) / (x - y);
        } else {
            return (h - y) / (x - y) + 1;
        }
    }
}

// ● Bài 5: Cho 1 số nguyên, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên). Ví dụ với tham số 53751 thì kết quả là 13557.
function sortElement(num) {

    function frankenSplice(arr1, arr2, n) {
        for (let i of arr1) {
            arr2.splice(n, 0, i);
            n++;
        }
        return arr2;
    }

    let newArray = String(num).split("").sort();
    if (newArray.indexOf('0') != -1) {
        arr1 = newArray.slice(0, newArray.lastIndexOf('0') + 1);
        arr2 = newArray.slice(newArray.lastIndexOf('0') + 1)
        return Number(frankenSplice(arr1, arr2, 1).join(''));
    }
    return Number(newArray.join(''));
}