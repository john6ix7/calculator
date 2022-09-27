let operator = '';
let previousValue = '';
let currentValue = '';

const add = (num1, num2) => num1 + num2; // Function that adds two arguments 
const subtract = (num1, num2) => num1 - num2; // Function that subtracts two arguments 
const multiply = (num1, num2) => num1 * num2; // Function that multiplies two arguments 
const divide = (num1, num2) => num1 / num2; // Function that divides two arguments 

document.addEventListener("DOMContentLoaded", function() {
    // Store all components on HTML in our JS
    const clear = document.querySelector('.clear-button')
    const equal = document.querySelector('.equal-button')

    const previousScreen = document.querySelector('.previous')
    const currentScreen = document.querySelector('.current')

    const operators = document.querySelectorAll('.op-button')
    const numbers = document.querySelectorAll('.num-button')

    numbers.forEach((number) => number.addEventListener('click', (e) =>{ //for each loop adds event listener to each div in array
            handleNumber(e.target.textContent) // called function will target text content of div through the event 
            currentScreen.textContent = currentValue; // the current displayed calc screen will display the value of currentValue 
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
      currentScreen.textContent = previousValue; // This causes the previousScreen to be blank and for the CurrentScreen to display the calculation 
    })
})

function handleNumber(num) { //function will add the argument passed to it onto the variable currentValue 
    if (currentValue.length <= 8){
    currentValue += num;
    }
}

function handleOperator(op) { 
    operator = op; // function will add the argument passed to it onto the variable operator 
    previousValue = currentValue; // when an operator button is selected the variable previousValue will now have the value of currentValue 
    currentValue = '' // current value will now have no value 
}

function calculate() {
    previousValue = Number(previousValue);  
    currentValue = Number(currentValue); // converts String value into number 
    
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

function roundNumber(num){ //function will round the number to a whole number 
    return Math.round(num * 1000) / 1000;
} 


