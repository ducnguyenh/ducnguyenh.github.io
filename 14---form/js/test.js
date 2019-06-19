let arr = ['username: ngo Van SOn', 'gender: other', 'address: so 48']

function upCaseFirst(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function upCase(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(upCaseFirst(arr[0]) + ': ' + upCaseFirst(arr[1]));
    }
    return newArr;
}

