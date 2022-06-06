function calculator(digit1, operator, digit2) {
    let result = 0;
    switch(operator){
        case "+": result = (digit1 + digit2).toFixed(2); console.log(result); break;
        case "-": result = (digit1 - digit2).toFixed(2); console.log(result); break;
        case "/": result = (digit1 / digit2).toFixed(2); console.log(result); break;
        case "*": result = (digit1 * digit2).toFixed(2); console.log(result); break;
        default: console.log('error'); break;
    }
}

calculator(5,
    '+',
    10);
calculator(25.5,
    '-',
    3);