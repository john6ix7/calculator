let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function() {

    const clear = document.querySelector('.clear-button')
    const equal = document.querySelector('.equal-button')

    const previousScreen = document.querySelector('.previous')
    const currentScreen = document.querySelector('.current')

    const operators = document.querySelectorAll('.op-button')
    const numbers = document.querySelectorAll('.num-button')

    numbers.forEach(number => {
        number.addEventListener('click', (e) =>{
            handleNumber(e.target.textContent)
            currentScreen.textContent = currentValue;
          })
       }) 

})

function handleNumber(num) {
    currentValue += num;
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