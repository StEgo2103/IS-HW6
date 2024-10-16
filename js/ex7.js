const num1 = prompt('Enter the first number');
const num2 = prompt('Enter the second number');

const number1 = Number(num1);
const number2 = Number(num2);

if (isNaN(number1) || isNaN(number2) || num1 === '' || num2 === '') {
	document.getElementById(
		'content'
	).innerHTML = `<b style="color: red;">Error!</b> You must enter integers. You entered "${num1}" and "${num2}". Try again.`;
} else {
	document.getElementById('content').innerHTML = `${num1} + ${num2} = <b style="color: red;">${number1 + number2}</b>`;
}
