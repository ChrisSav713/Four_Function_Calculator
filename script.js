var displayText = document.getElementById("display");
var currentOperator = "";
var operatorChange = true;
var memory = 0;

document.querySelectorAll(".number").forEach(item => {
    item.addEventListener("click", numberClick);
})

document.querySelectorAll(".operator").forEach(item => {
    item.addEventListener("click", operatorClick);
})

document.getElementById("equals").addEventListener("click", equalsClick);
document.getElementById("clear").addEventListener("click", clearClick);

function operatorClick() {
    memory = parseFloat(displayText.value);
    currentOperator = this.dataset.operator;
    operatorChange = true;
}

function numberClick() {
    if (operatorChange) {
        displayText.value = this.dataset.number;
        operatorChange = false;
    } else {
        displayText.value += this.dataset.number;
    }
}

function clearClick() {
    memory = 0;
    currentOperator = "";
    operatorChange = true;
    displayText.value = 0;
}

function calculate() {
    switch (currentOperator) {
        case "+":
            memory = memory + parseFloat(displayText.value);
            displayText.value = memory;
            break;
        case "-":
            memory = memory - parseFloat(displayText.value);
            displayText.value = memory;
            break;
        case "x":
            memory = memory * parseFloat(displayText.value);
            displayText.value = memory;
            break;
        case "÷":
            memory = memory / parseFloat(displayText.value);
            displayText.value = memory;
            break;
    }
    displayText.value;
}

function equalsClick() {
    if (currentOperator != "") {
        calculate();
    }
    operatorChange = true;
}