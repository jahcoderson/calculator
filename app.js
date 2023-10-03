// Figured out I shouldn't use Eval() so refactoring this code

// const display = document.querySelector('#display')
// const clear = document.querySelector('#clear')
// let c = ''
// const buttons = document.querySelectorAll('.buttons')
// const operators = document.querySelectorAll('.operators')
// const equals = document.querySelector('#equal')



// for (let operator of operators) {
//     operator.addEventListener('click', () => {
//         display.textContent += operator.value
//         c += display.textContent
//         display.textContent = ''
//     })

// }

// equals.addEventListener('click', () => {
//     c += display.textContent
//     let result = eval(c)
//     display.textContent = result
//     c = ''
// })




// for (let value of buttons) {
//     value.addEventListener('click', () => {
//         display.textContent += value.value
//         return display.textContent
//     })

// }

// clear.addEventListener('click', () => {
//     display.textContent = ''
//     c = ''
// })

const display = document.querySelector('#display')

const buttons = document.querySelectorAll('.buttons')

const operators = document.querySelectorAll('.operators')

const clear = document.querySelector('#clear')

const equal = document.querySelector('#equal')

const displayFont = document.querySelector('h2')

let firstOperand = "0"
let secondOperand = ""
let exOperator = ""
display.textContent = "0"



for (let value of buttons) {
    value.addEventListener('click', () => {
        if (display.textContent === "0") {
            display.textContent = ""
            display.textContent += value.value
            firstOperand += value.value
        }
        else if (exOperator === "" && display.textContent.length <= 13) {
            firstOperand += value.value
            display.textContent += value.value

        }

        else if (secondOperand.length <= 13 && exOperator !== "") {

            secondOperand += value.value

            display.textContent += value.value
        }


    })


}


for (let operator of operators) {
    operator.addEventListener('click', () => {
        if (exOperator === "") {
            display.textContent += operator.value
            exOperator = operator.value
        }
    })

}

clear.addEventListener('click', () => {
    display.textContent = "0"
    firstOperand = "0"
    secondOperand = ""
    exOperator = ""

})

equal.addEventListener('click', () => {
    switch (exOperator) {
        case "+": let result = parseFloat(firstOperand) + parseFloat(secondOperand)
            display.textContent = result;
            firstOperand = result
            exOperator = ""
            break;
        case "-": let result1 = parseFloat(firstOperand) - parseFloat(secondOperand)
            display.textContent = result1;
            exOperator = ""
            firstOperand = result1;
            break;
        case "/": let result2 = parseInt(firstOperand) / parseInt(secondOperand)
            display.textContent = parseFloat(result2);
            exOperator = ""
            firstOperand = result2;
            break;
        case "*": let result3 = parseFloat(firstOperand) * parseFloat(secondOperand)
            display.textContent = result3;
            exOperator = ""
            firstOperand = result3;
            break;
    }

    secondOperand = "";

})



