document.addEventListener('DOMContentLoaded', () => {
    let display = document.getElementById('outpos');
    let buttons = Array.from(document.getElementsByTagName('button'));
    let operand1 = '';
    let operand2 = '';
    let operator = '';
    let resultDisplayed = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let value = button.innerText;

            if (button.id === 'delete') {
                display.innerText = display.innerText.slice(0, -1);
            } else if (button.id === 'clean' || button.id === 'remove') {
                display.innerText = '';
                operand1 = '';
                operand2 = '';
                operator = '';
                resultDisplayed = false;
            } else if (value === '=' && operand1 && operator) {
                operand2 = display.innerText.slice(operand1.length + 1);
                display.innerText = calculate(operand1, operand2, operator);
                resultDisplayed = true;
                operand1 = display.innerText; // Store result for further calculations
                operator = ''; // Reset operator
                operand2 = ''; // Reset operand2
            } else if (button.classList.contains('dark-black') || button.classList.contains('light-black')) {
                if (resultDisplayed) {
                    display.innerText = value;
                    resultDisplayed = false;
                } else {
                    display.innerText += value;
                }
                
                if (!isNaN(value) || value === '.') {
                    if (operator) {
                        operand2 += value;
                    } else {
                        operand1 += value;
                    }
                } else {
                    if (operator && operand2) { // If there's already an operator and second operand, calculate first
                        operand1 = calculate(operand1, operand2, operator).toString();
                        display.innerText = operand1; // Show intermediate result
                        operator = value; // Update operator
                        operand2 = ''; // Reset second operand
                    } else {
                        operator = value; // Set operator
                    }
                }
            }
        });
    });

    function calculate(num1, num2, op) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        switch (op) {
            case '+': return num1 + num2;
            case '-': return num1 - num2;
            case '*': return num1 * num2;
            case '/': return num2 ? num1 / num2 : 'Error';
            case '%': return num1 % num2;
            default: return 'Error';
        }
    }
});