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

function addToInput(x) {
    if (input.textContent.length <= 25) {
        input.textContent += x;
    };
};

digitButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        addToInput(e.target.textContent);
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        addToInput(e.target.textContent);
    });
});

function evaluate(str) {
    const matches = str.match(/^(\d+)([\+\-\*\/])(\d+)/);
    if (matches) {
        output.textContent = operate(matches[1], matches[3], matches[2]);
    }
};

equalButton.addEventListener("click", (button) => {
        evaluate(input.textContent);
});