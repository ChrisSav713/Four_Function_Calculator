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
    memory = parseFloat(displayText.innerHTML);
    currentOperator = this.dataset.operator;
    operatorChange = true;
}

function numberClick() {
    if (operatorChange) {
        displayText.innerHTML = this.dataset.number;
        operatorChange = false;
    } else {
        displayText.innerHTML += this.dataset.number;
    }
}

function clearClick() {
    memory = 0;
    currentOperator = "";
    operatorChange = true;
    displayText.innerHTML = 0;
}

function calculate() {
    switch (currentOperator) {
        case "+":
            memory = memory + parseFloat(displayText.innerHTML);
            displayText.innerHTML = memory;
            break;
        case "-":
            memory = memory - parseFloat(displayText.innerHTML);
            displayText.innerHTML = memory;
            break;
        case "x":
            memory = memory * parseFloat(displayText.innerHTML);
            displayText.innerHTML = memory;
            break;
        case "÷":
            memory = memory / parseFloat(displayText.innerHTML);
            displayText.innerHTML = memory;
            break;
    }
    displayText.innerHTML
}

function equalsClick() {
    if (currentOperator != "") {
        calculate();
    }
    operatorChange = true;
}