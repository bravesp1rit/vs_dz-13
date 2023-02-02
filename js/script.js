'use strict';

// Task #1
let x = 10;
let y = 7;
let res = x > y ? 'x больше, чем y' : 'x не больше, чем y';
console.log(res);

// Task #2
let num = +prompt('Введите число');
console.log(num);
if (num == 0){
    alert('Я тебя не понимаю');
} else if (num % 2 == 1){
    alert(`Число ${num} нечетное`);
} else if (num % 2 == 0){
    alert(`Число ${num} четное`);
}

//Task #3
let num1 = prompt('Введите целое число');
let num1lenght = num1.length;
let num1lenghtResult = null;
let num1PosNeg = null;
switch (num1lenght){
    case 1:
        num1lenghtResult = 'однозначное';
        break;
    case 2:
        num1lenghtResult = 'двухзначное';
        break;
    case 3:
        num1lenghtResult = 'трёхзначное';
        break;
    case 4:
        num1lenghtResult = 'четырёхзначное';
        break;
    case 5:
        num1lenghtResult = 'пятизначное';
        break;
    case 6:
        num1lenghtResult = 'шестизначное';
        break;
    case 7:
        num1lenghtResult = 'семизначное';
        break;
    case isNaN(num1lenght):
        num1lenghtResult = 'не число';
        break;
    default:
        num1lenghtResult = 'длинное';
}
if (num1 > 0){
    num1PosNeg = 'положительное';
} else if (num1 < 0){
    num1PosNeg = 'отрицательное';
} else if (num1 == 0){
    num1PosNeg = 'это 0';
} else{
    num1PosNeg = 'не число';
}
alert(`Число ${num1} ${num1lenghtResult} ${num1PosNeg}`);

//Task #4
let number1 = +prompt('Введите первое число');
let number2 = +prompt('Введите второе число');
let number3 = +prompt('Введите третье число');
if (number1 > number2 && number1 > number3){
    alert(`Число ${number1} наибольшее`);
} else if (number2 > number1 && number2 > number3){
    alert(`Число ${number2} наибольшее`);
} else if (number3 > number1 && number3 > number2){
    alert(`Число ${number3} наибольшее`);
} else{
    alert('Ты вводишь не числа, попробуй ещё раз');
}

//Task #5

let triangleSide1 = +prompt('Введите первую сторону треугольника');
let triangleSide2 = +prompt('Введите вторую сторону треугольника');
let triangleSide3 = +prompt('Введите третью сторону треугольника');

if (triangleSide1 + triangleSide2 > triangleSide3 && triangleSide2 + triangleSide3 > triangleSide1 &&
    triangleSide3 + triangleSide1 > triangleSide2){
    alert('Треугольник существует');
} else {
    alert('Треугольник не существует');
}