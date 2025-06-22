function add(a, b) {
    return a + b;
};

function substract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(a, b, operator) {
    if (operator == "+") {
        return add(a, b);
    } else if (operator == "-") {
        return substract(a, b);
    } else if (operator == "*") {
        return multiply(a, b);
    } else {
        return divide(a, b);
    };
};

const input = document.querySelector("#input");
const digitButtons = document.querySelectorAll(".digit-button");
const operatorButtons = document.querySelectorAll(".operation");
const equalButton = document.querySelector("#equal");
const output = document.querySelector("#output");
const acButton = document.querySelector("#ac");
const delButton = document.querySelector("#del")

function addToInput(x) {
    if (input.textContent.length <= 25) {
        input.textContent += x;
    };
};

function matchExpression(str) {
    return str.match(/^(\-*\d+(?:\.\d+)*)([\+\-\*\/])(\d+)$/);
}

function returnLastCharType(str) {
    if (str.slice(-1).match(/[\*\/\+\-]/)) {
        return "operator";
    } else {
        return "number";
    }
}

function digitPress(digit) {
    if (output.textContent && !returnLastCharType(input.textContent) == "operator") {
        input.textContent = "";
        output.textContent = "";
    };
    addToInput(digit);
};

function operatorPress(operator) {
    if (matchExpression(input.textContent)) {
        evaluate(input.textContent);
        input.textContent = output.textContent;
    } else if (returnLastCharType(input.textContent) == "operator") {
        input.textContent = input.textContent.slice(0, -1);
    };
    addToInput(operator);
};

function delPress() {
    if (input.textContent.length > 0) {
        input.textContent = input.textContent.slice(0, -1);
    };
};

digitButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        digitPress(e.target.textContent);
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        operatorPress(e.target.textContent);
    });
});

function evaluate(str) {
    const matches = matchExpression(str);
    if (matches) {
        if (matches[2] == "/" && matches[3] == 0) {
            output.textContent = "Oops, you created a black hole!"
        } else {
            output.textContent = operate(parseFloat(matches[1]), parseFloat(matches[3]), matches[2]);
        };
    } else if (str.match(/^\-*\d+$/)) {
        output.textContent = input.textContent;
    } else {
        output.textContent = "ERROR"
    };
};

equalButton.addEventListener("click", () => {
        evaluate(input.textContent);
});

acButton.addEventListener("click", () => {
    input.textContent = "";
    output.textContent = "";
});

delButton.addEventListener("click", () => {
    delPress();
});

document.addEventListener("keydown", (e) => {
    if (e.key.match(/\d/)) {
        digitPress(e.key);
    } else if (e.key.match(/[\*\/\+\-]/)) {
        operatorPress(e.key);
    } else if (e.key == "=" || e.key == "Enter") {
        evaluate(input.textContent);
    } else if (e.key == "backspace") {
        delPress();
    }
})