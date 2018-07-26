var Calculator = require('./calculator');

var number1 = 5;
var number2 = 10;
var calObject = new Calculator();

console.log('Addition ' + number1 + ' + ' + number2 + ' - ' + calObject.addition(number1, number2));
console.log('Subtraction: ' + number1 + ' - ' + number2 + ' - ' + calObject.subtraction(number1, number2));
console.log('Multiplication: ' + number1 + ' x ' + number2 + ' - ' + calObject.multiplication(number1, number2));
console.log('Division: ' + number1 + ' / ' + number2 + ' - ' + calObject.division(number1, number2));