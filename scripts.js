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
        console.log(input.textContent[-1]);
        if (input.textContent.slice(-1).match(/[\*\/\+\-]/)) {
            input.textContent = input.textContent.slice(0, -1);
        }
        addToInput(e.target.textContent);
    });
});

function evaluate(str) {
    const matches = str.match(/^(\d+)([\+\-\*\/])(\d+)$/);
    if (matches) {
        if (matches[2] == "/" && matches[3] == 0) {
            output.textContent = "Oops, you created a black hole"
        }
        output.textContent = operate(matches[1], matches[3], matches[2]);
    } else if (str.match(/^\d+$/)) {
        output.textContent = input.textContent;
    } else {
        output.textContent = "ERROR"
    }
};

equalButton.addEventListener("click", () => {
        evaluate(input.textContent);
});

acButton.addEventListener("click", () => {
    input.textContent = "";
    output.textContent = "";
})