let first = '';
let second = '';
let operator = undefined;

let display = document.getElementById("numbers");

let addition = document.getElementById("add");
addition.addEventListener("click", () => operator = addition.textContent);
let sub = document.getElementById("subtract");
sub.addEventListener("click", () => operator = sub.textContent);
let mult = document.getElementById("multiply");
mult.addEventListener("click", () => operator = mult.textContent);
let divi = document.getElementById("divide");
divi.addEventListener("click", () => operator = divi.textContent);

const numbers = document.querySelectorAll('[data-number]');
numbers.forEach(function(button) {
    button.addEventListener("click", function() {
        if (operator) {
            display.textContent = this.textContent;
            second = parseFloat(this.textContent);
        } else {
            display.textContent = this.textContent;
            first = parseFloat(this.textContent);
        }
    });
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    display.textContent = '';
    first = '';
    second = '';
    operator = undefined;
});


const enter = document.getElementById("enter");
enter.addEventListener("click", () => {
    if (first && second && operator) {
        let result = operate(first, second, operator);
        display.textContent = result;
        first = parseFloat(result);
        second = '';
        operator = undefined;
    }
});


function operate(first, second, op) {
    if (op === '+') {
        return add(first, second);
    } else if (op === '-') {
        return subtract(first, second);
    } else if (op === '*') {
        return multiply(first, second);
    } else {
        return divide(first, second);
    }
}

function add(num1, num2) {
    return parseFloat(num1 + num2);
}

function subtract(num1, num2) {
    return parseFloat(num1 - num2);
}

function multiply(num1, num2) {
    return parseFloat(num1 * num2);
}

function divide(num1, num2) {
    return parseFloat(num1 / num2);
}
