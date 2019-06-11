//change theme
let themeBackground = document.getElementById('color-theme');
function changeColorTheme(href) {
    themeBackground.setAttribute("href", href)
}

//function display screen
let hisValue = document.getElementById('historyValue');
let outValue = document.getElementById('outputValue');

function getHistory() {
    return hisValue.innerText;
}

function printHistory(element) {
    hisValue.innerText = element;
}

function getOutput() {
    return outValue.innerText;
}

function printOutput(element) {
    if (element === "") {
        outValue.innerText = element;
    } else {
        outValue.innerText = getFormattedNumber(element);
    }
}
//format number (100,000)
function getFormattedNumber(element) {
    if (element == '-') {
        return "";
    }
    return Number(element).toLocaleString();
}
//covert to format number
function reverseNumberFormat(element) {
    return Number(element.replace(/,/g, ''));
}

//click operator
let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        }
        else if (this.id == "delete") {
            let onScreen = reverseNumberFormat(getOutput()).toString();
            if (onScreen) {
                onScreen = onScreen.substr(0, onScreen.length - 1);
                printOutput(onScreen)
            }
        } else {
            let output = getOutput();
            let history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                output = output == "" ?
                    output : reverseNumberFormat(output);
                history = history + output;

                if (this.id == "=") {
                    let result = eval(history.replace(/×/g, '*').replace(/÷/g, '/'));
                    printOutput(result);
                    printHistory("");
                }
                else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

//click number
var number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        let output = reverseNumberFormat(getOutput());
        if (output != NaN) {
            output = output + this.id;
            printOutput(output);
        }
    });
}

//function Math;
//var mathArray = ['E', 'PI', 'log', 'log10', 'sin', 'cos', 'tan', 'sqrt']
function mathClicked(parameter) {
    if (parameter == 'E' || parameter == 'PI') {
        outValue.innerText = eval('Math.' + parameter)
    } else {
        let calMath = eval('Math.' + parameter + "(" + outValue.innerText + ")")
        outValue.innerText = calMath;
    }
}

//function factorial
function calFactorial() {
    let result = 1;
    let n = Number(getOutput())
    if (n == 0) {
        outValue.innerText = 1;
    } else if (Number.isInteger(n) == true && n > 0) {
        for (let i = 1; i <= n; i++) {
            result = result * i;
        };
        outValue.innerText = result;
    } else {
        outValue.innerText = 'Syntax Error';
    }
}

//function percent
function calPercent() {
    outValue.innerText = Number(getOutput()) / 100;
}

//function x^2, x^3
function calPower2() {
    outValue.innerText = eval(Number(getOutput()) + '**2');
}
function calPower3() {
    outValue.innerText = eval(Number(getOutput()) + '**3');
}

//function convert to radian
function calRadian() {
    outValue.innerText = Number(getOutput()) * Math.PI / 180;
}
