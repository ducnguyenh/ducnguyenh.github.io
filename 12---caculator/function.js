//change theme
var themeBackground = document.getElementById('color-theme');
function changeColorTheme(href) {
    themeBackground.setAttribute("href", href)
}

//function display screen
var hisValue = document.getElementById('history-value');
var outValue = document.getElementById('output-value');

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
    return Number(element).toLocaleString("en");
}
//covert to format number
function reverseNumberFormat(element) {
    return Number(element.replace(/,/g, ''));
}

//click operator
var operator = document.getElementsByClassName("operator");
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
        }
        else {
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
                    var result = eval(history);
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

// //function
// function sinClick() {
//     screenDisplay.value = Math.sin(screenDisplay.value)
// }
// //printScreen
// var screenDisplay = document.getElementById('result');
// let keyValue,
//     cal = '';

// let displayMathProblem = (cal) => {
//     screenDisplay.value = cal;
//     console.log(cal);
// };

// let displayWarning = () => {
//     screenDisplay.value = 'Syntax Error';
// }

// $('button.button').on('click', (event) => {
//     keyValue = $(event.target).text();
//     if (keyValue === "AC") {
//         cal = "";
//         displayMathProblem(cal);
//     } else if (keyValue === "DEL") {
//         cal = cal.slice(0, -1);
//         displayMathProblem(cal);
//     } else if (keyValue === "=") {
//         try {

//             cal = eval(cal);
//             displayMathProblem(cal);
//             cal = "";
//         } catch (ex) {
//             displayWarning(ex);
//         }
//     } else {
//         cal += keyValue;
//         displayMathProblem(cal);
//     }
// });



