let operator = '';
let previousValue = '';
let currentValue = '';

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

document.addEventListener("DOMContentLoaded", function() {
    // Store all components on HTML in our JS
    const clear = document.querySelector('.clear-button')
    const equal = document.querySelector('.equal-button')

    const previousScreen = document.querySelector('.previous')
    const currentScreen = document.querySelector('.current')

    const operators = document.querySelectorAll('.op-button')
    const numbers = document.querySelectorAll('.num-button')

    numbers.forEach((number) => number.addEventListener('click', (e) =>{
            handleNumber(e.target.textContent)
            currentScreen.textContent = currentValue;
          }))

    operators.forEach((op) => op.addEventListener("click", (e) =>{
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener('click', () =>{
        previousValue = '';
        currentValue = '';
        operator = ''
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener("click", ()=> { 
      calculate()
      previousScreen.textContent = '';
      currentScreen.textContent = previousValue;
    })
})

function handleNumber(num) {
    if (currentValue.length <= 8){
    currentValue += num;
    }
}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = ''
}

function calculate() {
    previousValue = Number(previousValue);  
    currentValue = Number(currentValue); // converts value into number 
    
    if (operator === '+') {
     previousValue = add(previousValue, currentValue)
    } else if (operator === '-'){
     previousValue = subtract(previousValue, currentValue)
    } else if (operator === 'x') {
     previousValue = multiply(previousValue, currentValue) 
    } else {
     previousValue = divide(previousValue, currentValue)
    }   
    

    previousValue = roundNumber(previousValue)
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function roundNumber(num){
    return Math.round(num * 1000) / 1000;
} 





 
/*const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const operate = (operator,num1, num2) => {
    if (operator === "+" ) {
        return add(num1,num2)
    } else if(operator === "-" ){
        return subtract(num1,num2)
    } else if(operator === "*" ){
        return multiply(num1,num2)
    } else if(operator === "/" ){
        return divide(num1,num2)
    } 
}*/

 /*const display = document.querySelector('.display');

function populateDisplay(choice){
    const number = choice;
    display.innerText += number;

}

function numOperate(choiceOp) {
    const operator = choiceOp;
    if (operator == 'plus') {
        const firstDisplay = display.innerText;
    }
} */