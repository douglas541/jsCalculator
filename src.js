const operation = document.getElementsByClassName("operation")[0];
const operations = document.getElementsByClassName("operations")[0];

let operator = "";
let firstNumber = "";
let secondNumber = "";
let result = "";

function buttonAction(value) {
    if (firstNumber.length > 7 || secondNumber.length > 7) {
        console.log("max number lenght");
        return 0;
    }

    if (operator == "") {
        clearDisplay();

        firstNumber += value;
        operations.lastElementChild.innerHTML = firstNumber;
    } else {
        clearDisplay();

        operations.firstElementChild.innerHTML = firstNumber;
        secondNumber += value;
        operations.lastElementChild.innerHTML = secondNumber;
        operation.innerHTML = operator;
    }
}

function operatorAction(value) {
    operator = value;
    operation.innerHTML = operator;
}

function clearAction() {
    clearDisplay();
    firstNumber = "";
    secondNumber = "";
    operator = "";
}

function equalsAction() {
    switch (operator) {
        case '+':
            result = (Number(firstNumber) + Number(secondNumber)).toString();
            break;
        case '-':
            result = (Number(firstNumber) - Number(secondNumber)).toString();
            break;
        case 'x':
            result = (Number(firstNumber) * Number(secondNumber)).toString();
            break;
        case '/':
            result = (Number(firstNumber) / Number(secondNumber)).toString();
            break;
        case '%':
            result = (Number(firstNumber) % Number(secondNumber)).toString();
            break;
    }

    clearAction();

    result = result.substring(0, 9);

    operations.lastElementChild.innerText = result;

    operator = "";
}

function clearDisplay() {
    operation.innerText = "";
    operations.firstElementChild.innerText = "";
    operations.lastElementChild.innerText = "";
}