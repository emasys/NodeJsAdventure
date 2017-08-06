const prompt = require('readline-sync');
const colors = require('colors');
let calc = function(){
    let firstNumber = prompt.questionFloat("enter the first number ");
    let secondNumber = prompt.questionFloat('enter the second number ');
    let oprator;
    let valid = false;
    while(valid === false){
        let tempOp = prompt.question('enter your operator ');
        if(tempOp === "+" || tempOp === "-" || tempOp === "/" || tempOp === "*"){
            oprator = tempOp;
            valid = true;
            break;
        }else{
            console.log('enter a valid operator. eg: (+,-,/,%)'.red)
        }
    }
    if(oprator === "+" || oprator === "-" || oprator === "/" || oprator === "*"){
        let result = eval(firstNumber+oprator+secondNumber);
        console.log("result: ".green+result);
        let tryAgain = prompt.question('would you like to try again? (y/n)'.yellow);
        if(tryAgain === "y"){
            calc();
        }else{
            console.log('thank you for your time...'.rainbow);
        }
    }
}
calc();



