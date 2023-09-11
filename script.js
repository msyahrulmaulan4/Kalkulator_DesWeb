let history = '';
let currentInput = '';
let output = '';
const historyElement = document.getElementById('history');
const outputElement = document.getElementById('output');

function appendToHistory(value) {
    currentInput += value;
    outputElement.textContent = currentInput;
}

function calculateResult() {
    try {
        output = eval(currentInput);
        history = currentInput;
        historyElement.textContent = history;
        outputElement.textContent = output;
        currentInput = '';
    } catch (error) {
        output = 'Error';
        historyElement.textContent = '';
        outputElement.textContent = output;
        currentInput = '';
    }
}

function clearHistory() {
    history = '';
    output = '';
    historyElement.textContent = '';
    outputElement.textContent = '0';
    currentInput = '';
}

function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    outputElement.textContent = currentInput;
}