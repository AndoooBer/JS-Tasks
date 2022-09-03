// Задание 1
// Перепишите код с использованием тернарного оператора

// let male = true;
// let gender;
// if (male) {
// gender = 'man';
// } else{
// gender = 'woman'
// }

let male = true ? 'man' : 'woman';
 


// Задание 2
// Создать переменную и записать в нее число, например 10.

// 10 раз увеличить значение этой переменной на 1. Результат (1 шт.) вывести в консоль.

1-й вариант

let num = 10;
for(let i = 0; i < 10; i++){
    let result = num + 1;
    console.log(result);
}


// Задание 3
// Увеличивая счетчик цикла на 2, нужно 5 раз:

// - запрашивать у пользователя ввод числа

// - проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"


for(let i = 0; i < 10; i += 2){
    let num = +prompt();
    if(num === 10){
        console.log('Равно 10');
    } else{
        console.log('Не равно 10');
    }
}


// Задание 4
// Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...

// * Задавать количество чисел, которые нужно вывести, при помощи функции prompt.

let iterations = +prompt ('Введите число');
for (let i = 0; i < iterations; i++){
    if (i * i < 100)
    console.log(i * i); 
}


// Задание 5
// Напишите программу, которая выводит в консоль числа от 1 до 100.
// При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»

for (let i = 1; i <= 100; i++){
    if (i % 15 === 0){
        console.log('FizzBuzz');
    } else if (i % 3 === 0){
        console.log('Fizz');
    } else if (i % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}


// Задание 6

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

for (let i = 0; i < 3; i++) {
alert( `number ${i}!` );
}

let i = 0;

while (i < 3) {
    alert( `number ${i}!` );
    i++;
}


// Задание 7
// Переписать задание 4 в виде функции. Т.е. описать функцию, которая выводит квадраты чисел из заданного диапазона (диапазон будет попадать в функцию как аргументы).

const outputSquare = (iterations) => {
    for (let i = 0; i < iterations; i++){
        if (i * i < 100);
        console.log(i * i); 
    }    
}

outputSquare(6);


// Задание 8

// Написать функцию вывода в консоль случайного цвета. Это будет строка вида "rgb(10,55,250)"

// Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):
// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }
// Подсказка: 

// Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255. 

// Одна функция может вызывать другую функцию


function getRandomInteger(min, max) {
    min = 0;
    max = 255;
    return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomRGB = () => {
    return `rgb(${getRandomInteger()},${getRandomInteger()},${getRandomInteger()})`;
} 

let result = getRandomRGB();

console.log(result);


// Задание 9
// Написать функцию, которая принимает целое число n.   

// Внутри функции запустить цикл от 1 до n с шагом 0.5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.


// Пример, при запуске функции с параметром 3:

// "1 integer"
// "1.5 decimal"
// "2 integer"
// "2.5 decimal"

const isInteger = (n) => {
    for (let i = 1; i < n; i+=0.5){
        if (Number.isInteger(i)) {
            console.log(`${i} integer`);
        } else {
            console.log(`${i} decimal`);
        }
    }
}

isInteger(3);




// Написать функцию isInteger(x), которая определяет, является ли число целым, и возвращает true либо false.


const isInteger = (x) => (Number.isInteger(x) ? true : false);

let x = 5;
console.log(isInteger(x));