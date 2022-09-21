let operator = '';
let previousValue = '';
let currentValue = '';


const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const operate = (num1,operator, num2) => {
    if (operator === "+" ) {
        return add(num1,num2)
    } else if(operator === "-" ){
        return subtract(num1,num2)
    } else if(operator === "*" ){
        return multiply(num1,num2)
    } else if(operator === "/" ){
        return divide(num1,num2)
    } 
}


const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.num-button')

buttons.forEach(button => {
    button.addEventListener('click', () =>{
    document.querySelector('.display').textContent += button.innerHTML
      })
   }) 


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