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

function addToInput(x) {
    input.textContent += x;
};

const digitButtons = document.querySelectorAll(".digit-button, .operation");

digitButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        addToInput(e.target.textContent);
    });
});