const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let resultDisplayed = false;

function updateDisplay(value) {
    display.value = value;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (button.id === 'clear') {
            currentInput = '';
            updateDisplay('');
            resultDisplayed = false;
        } else if (button.id === 'equals') {
            try {
                if (currentInput.trim() !== '') {
                    const evalResult = eval(currentInput);
                    updateDisplay(evalResult);
                    currentInput = evalResult.toString();
                    resultDisplayed = true;
                }
            } catch {
                updateDisplay('Error');
                currentInput = '';
                resultDisplayed = false;
            }
        } else {
            if (resultDisplayed && !isNaN(value)) {
                currentInput = value;
                resultDisplayed = false;
            } else {
                currentInput += value;
            }
            updateDisplay(currentInput);
        }
    });
});